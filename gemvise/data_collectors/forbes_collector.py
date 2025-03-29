"""Forbes Data Collector for GemVise.

This module collects and processes information about Forbes billionaires,
including their public statements, interviews, and business philosophies.
"""

import aiohttp
import asyncio
import json
import os
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from pathlib import Path
import openai
from openai import AsyncOpenAI
from dotenv import load_dotenv
from bs4 import BeautifulSoup
import wikipedia
import re
import requests
import logging

load_dotenv()

class ForbesCollector:
    """Collects and processes Forbes billionaire data."""
    
    def __init__(self):
        self.base_path = Path("data/forbes")
        self.base_path.mkdir(parents=True, exist_ok=True)
        self.profiles_path = self.base_path / "profiles"
        self.profiles_path.mkdir(exist_ok=True)
        self.documents_path = self.base_path / "documents"
        self.documents_path.mkdir(exist_ok=True)
        
        # Initialize OpenAI
        self.client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.model = None  # Will be set after checking available models

    async def _get_available_model(self):
        """Get the best available model from OpenAI."""
        try:
            models = await self.client.models.list()
            preferred_models = ["gpt-4", "gpt-3.5-turbo"]  # Simplified to most common models
            
            available_models = {model.id for model in models.data}
            for model in preferred_models:
                if model in available_models:
                    return model
            
            # If none of our preferred models are available, use any available GPT model
            for model in available_models:
                if any(x in model.lower() for x in ["gpt-4", "gpt-3.5"]):
                    return model
            
            # Last resort - use the first available model
            if available_models:
                return next(iter(available_models))
            
            raise ValueError("No suitable model found among available models")
        except Exception as e:
            logging.error(f"Error getting available models: {e}")
            raise

    async def _ensure_model(self):
        """Ensure we have a valid model selected."""
        if self.model is None:
            self.model = await self._get_available_model()

    async def fetch_forbes_list(self) -> List[Dict]:
        """Fetch the Forbes billionaires list from Wikipedia."""
        try:
            # Get the Wikipedia page for Forbes billionaires
            search_results = wikipedia.search("Forbes list of billionaires", results=5)
            page = None
            for result in search_results:
                try:
                    page = wikipedia.page(result, auto_suggest=False)
                    if "billionaire" in page.title.lower():
                        break
                except:
                    continue
            
            if not page:
                raise Exception("Could not find Forbes billionaires page")
            
            soup = BeautifulSoup(page.html(), 'html.parser')
            
            # Find the table with billionaires
            tables = soup.find_all('table', class_='wikitable')
            billionaires = []
            
            for table in tables:
                rows = table.find_all('tr')[1:]  # Skip header row
                for row in rows:
                    try:
                        cols = row.find_all(['td', 'th'])
                        if len(cols) >= 3:
                            name = cols[1].text.strip()
                            net_worth = cols[2].text.strip()
                            source = cols[3].text.strip() if len(cols) > 3 else "Various sources"
                            
                            # Clean up the name (remove [1], [2] etc. references)
                            name = re.sub(r'\[\d+\]', '', name)
                            
                            billionaire = {
                                "id": name.lower().replace(" ", "_"),
                                "name": name,
                                "net_worth": net_worth,
                                "source": source
                            }
                            billionaires.append(billionaire)
                            
                            if len(billionaires) >= 100:  # Only get top 100
                                break
                    except Exception as e:
                        print(f"Error parsing row: {e}")
                        continue
                        
                if len(billionaires) >= 100:
                    break
            
            return billionaires
            
        except Exception as e:
            print(f"Error fetching Forbes list: {e}")
            return []
    
    async def collect_profile_data(self, billionaire: Dict) -> Dict:
        """Collect comprehensive profile data for a billionaire."""
        # Get Wikipedia page for the billionaire
        try:
            search_results = wikipedia.search(billionaire["name"], results=5)
            page = None
            for result in search_results:
                try:
                    page = wikipedia.page(result, auto_suggest=False)
                    # Check if this is likely the right person
                    if any(word in page.content.lower() for word in ["billionaire", "business", "entrepreneur", "company"]):
                        break
                except:
                    continue
            
            if page:
                summary = page.summary
                content = page.content
                url = page.url
                
                # Get related articles from Wikipedia links
                related_articles = await self._fetch_related_articles(page)
                content = content + "\n\n" + "\n\n".join(article["content"] for article in related_articles)
            else:
                summary = ""
                content = ""
                url = ""
                related_articles = []
        except:
            summary = ""
            content = ""
            url = ""
            related_articles = []
        
        profile = {
            "basic_info": {
                **billionaire,
                "wikipedia_url": url,
                "summary": summary
            },
            "biography": await self._extract_biography(content),
            "business_philosophy": await self._analyze_philosophy(billionaire["name"], content),
            "expertise_areas": await self._identify_expertise(billionaire, content),
            "innovation_contributions": await self._analyze_innovations(billionaire["name"], content),
            "leadership_style": await self._analyze_leadership(billionaire["name"], content),
            "risk_management": await self._analyze_risk_approach(billionaire["name"], content),
            "quotes": await self._extract_quotes(content),
            "related_articles": related_articles,
            "collected_at": datetime.now().isoformat()
        }
        
        # Save profile
        profile_path = self.profiles_path / f"{billionaire['id']}.json"
        with open(profile_path, 'w') as f:
            json.dump(profile, f, indent=2)
            
        return profile
    
    async def _fetch_related_articles(self, wiki_page) -> List[Dict]:
        """Fetch related articles from Wikipedia links."""
        articles = []
        seen_urls = set()
        
        # Get all links from the page
        soup = BeautifulSoup(wiki_page.html(), 'html.parser')
        links = soup.find_all('a')
        
        for link in links:
            if len(articles) >= 4:  # Only get 4 related articles
                break
                
            try:
                href = link.get('href', '')
                if href.startswith('/wiki/') and ':' not in href:
                    url = f"https://en.wikipedia.org{href}"
                    
                    if url not in seen_urls:
                        seen_urls.add(url)
                        
                        # Get the page content
                        page = wikipedia.page(href.split('/')[-1], auto_suggest=False)
                        
                        # Check if it's relevant
                        if any(word in page.content.lower() for word in ["business", "company", "industry", "technology", "entrepreneur"]):
                            articles.append({
                                "title": page.title,
                                "url": url,
                                "summary": page.summary,
                                "content": page.content[:4000]  # First 4000 chars
                            })
            except:
                continue
        
        return articles
    
    async def _extract_biography(self, content: str) -> Dict:
        """Extract biographical information from Wikipedia content."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Extract key biographical information from this text, focusing on business career and achievements."},
                    {"role": "user", "content": content[:4000]}  # First 4000 chars for summary
                ]
            )
            return {
                "summary": response.choices[0].message.content,
                "key_events": response.choices[0].message.content.split("\n")
            }
        except Exception as e:
            return {"error": str(e)}
    
    async def _extract_quotes(self, content: str) -> List[Dict]:
        """Extract quotes from Wikipedia content."""
        quotes = []
        
        # Look for quoted text
        quote_pattern = r'"([^"]*)"'
        matches = re.finditer(quote_pattern, content)
        
        for match in matches:
            quote = match.group(1)
            if len(quote.split()) > 5:  # Only include substantial quotes
                quotes.append({
                    "text": quote,
                    "source": "Wikipedia",
                    "context": "From biographical content"
                })
            
            if len(quotes) >= 10:  # Limit to 10 quotes
                break
        
        return quotes
    
    async def _analyze_philosophy(self, name: str, content: str) -> Dict:
        """Analyze business philosophy using LLM."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Analyze the business philosophy and principles based on this biographical content."},
                    {"role": "user", "content": f"Based on this text about {name}, what are their core business philosophies and principles?\n\n{content[:4000]}"}
                ]
            )
            return {"analysis": response.choices[0].message.content}
        except Exception as e:
            return {"error": str(e)}
    
    async def _identify_expertise(self, billionaire: Dict, content: str) -> List[str]:
        """Identify core areas of expertise."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Identify core areas of expertise based on this biographical content."},
                    {"role": "user", "content": f"Based on this text about {billionaire['name']}, who made their fortune in {billionaire['source']}, what are their core areas of expertise?\n\n{content[:4000]}"}
                ]
            )
            return response.choices[0].message.content.split("\n")
        except Exception:
            return []
    
    async def _analyze_innovations(self, name: str, content: str) -> List[Dict]:
        """Analyze innovative contributions and approaches."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Analyze innovative contributions and approaches based on this biographical content."},
                    {"role": "user", "content": f"Based on this text about {name}, what are their most significant innovative contributions and approaches to business?\n\n{content[:4000]}"}
                ]
            )
            innovations = response.choices[0].message.content.split("\n")
            return [{"innovation": innovation.strip()} for innovation in innovations if innovation.strip()]
        except Exception:
            return []
    
    async def _analyze_leadership(self, name: str, content: str) -> Dict:
        """Analyze leadership style and principles."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Analyze leadership style and principles based on this biographical content."},
                    {"role": "user", "content": f"Based on this text about {name}, what is their leadership style and what are their key leadership principles?\n\n{content[:4000]}"}
                ]
            )
            return {
                "style": response.choices[0].message.content,
                "principles": response.choices[0].message.content.split("\n")
            }
        except Exception:
            return {}
    
    async def _analyze_risk_approach(self, name: str, content: str) -> Dict:
        """Analyze approach to risk and decision-making."""
        try:
            await self._ensure_model()
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": "Analyze approach to risk and decision-making based on this biographical content."},
                    {"role": "user", "content": f"Based on this text about {name}, how do they approach risk and make important business decisions?\n\n{content[:4000]}"}
                ]
            )
            return {
                "analysis": response.choices[0].message.content,
                "key_points": response.choices[0].message.content.split("\n")
            }
        except Exception:
            return {}
    
    def create_gem(self, profile: Dict) -> None:
        """Create a Gem from billionaire profile."""
        from gemvise.expert_system import GemVise
        
        system = GemVise()
        
        # Create Gem with billionaire's characteristics
        gem = system.cut_gem(
            name=profile["basic_info"]["name"],
            facets={
                "expertise": profile["expertise_areas"],
                "net_worth": profile["basic_info"]["net_worth"],
                "source": profile["basic_info"]["source"],
                "philosophy": profile["business_philosophy"],
                "leadership_style": profile["leadership_style"],
                "risk_approach": profile["risk_management"],
                "biography": profile["biography"]
            }
        )
        
        # Absorb knowledge from quotes and content
        for quote in profile["quotes"]:
            gem.absorb(quote["text"], {
                "context": quote["context"],
                "source": quote["source"]
            })
        
        # Absorb biographical content
        if profile["basic_info"].get("summary"):
            gem.absorb(profile["basic_info"]["summary"], {
                "type": "biography",
                "source": "Wikipedia",
                "url": profile["basic_info"]["wikipedia_url"]
            })
        
        # Absorb related articles
        for article in profile.get("related_articles", []):
            gem.absorb(article["summary"], {
                "type": "related_article",
                "source": "Wikipedia",
                "url": article["url"],
                "title": article["title"]
            })
            
        return gem

async def main():
    collector = ForbesCollector()
    billionaires = await collector.fetch_forbes_list()
    
    for billionaire in billionaires[:100]:  # Top 100
        profile = await collector.collect_profile_data(billionaire)
        collector.create_gem(profile)

if __name__ == "__main__":
    asyncio.run(main())
