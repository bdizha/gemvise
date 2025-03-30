"""Gem Data Collector for GemVise.

This module dynamically collects and processes information about gems (notable individuals),
using various sources and LLMs to build comprehensive gem profiles with distinct facets.
"""

import asyncio
import json
import os
from typing import Dict, List, Optional, Tuple
from datetime import datetime
from pathlib import Path
import logging
import google.generativeai as genai
import openai
from openai import AsyncOpenAI
from dotenv import load_dotenv
import wikipedia
import requests
from bs4 import BeautifulSoup
from ..memory.manager import MemoryManager

load_dotenv()

class GemCollector:
    """Collects and processes gem data from various sources, applying stylistic transformations."""
    
    def __init__(self):
        """Initialize the gem collector."""
        # Initialize memory manager
        self.memory_manager = MemoryManager()
        
        # Initialize LLMs
        self._init_llms()
        
    def _init_llms(self):
        """Initialize LLM clients with specific tuning parameters."""
        # OpenAI setup
        self.openai_client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.openai_model = None  # Will be set after checking available models
        
        # Gemini setup with custom parameters for stylized responses
        gemini_key = os.getenv("GEMINI_API_KEY")
        if gemini_key:
            genai.configure(api_key=gemini_key)
            # Use a higher temperature for more creative, metaphorical responses
            generation_config = {
                "temperature": 0.9,
                "top_p": 0.8,
                "top_k": 40
            }
            self.gemini_model = genai.GenerativeModel('gemini-1.5-pro', generation_config=generation_config)
        else:
            self.gemini_model = None
            
    async def _get_available_openai_model(self):
        """Get the best available model from OpenAI."""
        try:
            models = await self.openai_client.models.list()
            preferred_models = ["gpt-4", "gpt-3.5-turbo"]
            
            available_models = {model.id for model in models.data}
            for model in preferred_models:
                if model in available_models:
                    return model
            
            # If none of our preferred models are available, use any available GPT model
            for model in available_models:
                if any(x in model.lower() for x in ["gpt-4", "gpt-3.5"]):
                    return model
                    
            raise ValueError("No suitable OpenAI model found")
        except Exception as e:
            logging.error(f"Error getting available OpenAI models: {e}")
            raise
            
    async def _ensure_openai_model(self):
        """Ensure we have a valid OpenAI model selected."""
        if self.openai_model is None:
            self.openai_model = await self._get_available_openai_model()
            
    def _apply_stylistic_transformations(self, text: str) -> str:
        """Apply 'Lyer' stylistic transformations to the text."""
        # Replace common words with more elevated alternatives
        replacements = {
            "improve": "boost the effectiveness of",
            "problems": "challenges",
            "important": "crucial",
            "use": "leverage",
            "help": "empower",
            "make": "create",
            "think": "envision",
            "big": "transformative",
            "new": "innovative"
        }
        
        for old, new in replacements.items():
            text = text.replace(f" {old} ", f" {new} ")
            
        # Add hashtags related to the content
        hashtags = "\n\n#GemVise #Innovation #Impact #ValueCreation #Endeavour"
        
        # Add encouraging sign-off
        sign_off = "\n\nCheers to creating value and driving positive change! 🌟"
        
        return text + hashtags + sign_off
            
    async def get_gem_info(self, name: str) -> Optional[Dict]:
        """Get gem information from various sources with stylized processing."""
        # Check if we already have the profile
        try:
            gem_data = self.memory_manager.load_gem(name)
            if gem_data:
                return gem_data
        except:
            pass
                
        # Collect information from Wikipedia
        try:
            wiki_info = await self._get_wikipedia_info(name)
        except Exception as e:
            logging.warning(f"Error getting Wikipedia info for {name}: {e}")
            wiki_info = None
            
        # Use LLMs to process and structure the information with stylistic elements
        try:
            if self.gemini_model:
                profile = await self._process_with_gemini(name, wiki_info)
            else:
                profile = await self._process_with_openai(name, wiki_info)
                
            # Store in memory manager with quantum state representing influence
            quantum_state = {
                "coherence": 0.9,  # Consistency of their vision/message
                "energy": 0.85,    # Current level of activity/impact
                "phase": 0.3,      # Stage in their journey/evolution
                "uncertainty": 0.2  # Predictability of their next moves
            }
            self.memory_manager.store_gem(name, profile, quantum_state)
                
            return profile
        except Exception as e:
            logging.error(f"Error processing gem info for {name}: {e}")
            return None
            
    async def _get_wikipedia_info(self, name: str) -> Optional[str]:
        """Get information about a gem from Wikipedia."""
        try:
            # Search Wikipedia
            search_results = wikipedia.search(name, results=5)
            page = None
            
            for result in search_results:
                try:
                    page = wikipedia.page(result, auto_suggest=False)
                    if name.lower() in page.title.lower():
                        break
                except:
                    continue
                    
            if not page:
                return None
                
            return page.content
            
        except Exception as e:
            logging.warning(f"Error fetching Wikipedia info for {name}: {e}")
            return None
            
    async def _process_with_gemini(self, name: str, wiki_info: Optional[str]) -> Dict:
        """Process gem information using Gemini with stylistic enhancements."""
        prompt = f"""
        You are a gem profiling expert for GemVise, specializing in identifying and articulating the unique facets that make individuals transformative forces in their fields.
        
        Create an inspiring and insightful profile for {name} that emphasizes their value creation and impact.
        
        Background information:
        {wiki_info if wiki_info else 'No Wikipedia information available.'}
        
        Structure the response as a JSON object with these facets:
        {{
            "name": "{name}",
            "expertise": ["area1", "area2", ...],
            "innovations": ["innovation1", "innovation2", ...],
            "philosophy": "core beliefs and approach, emphasizing value creation",
            "leadership": "leadership style with focus on impact",
            "current_focus": "present endeavors and aspirations"
        }}
        
        Use elevated, metaphorical language that inspires while maintaining accuracy.
        Focus on how they drive positive change and create lasting value.
        
        Return ONLY the JSON object, no additional text.
        """
        
        response = self.gemini_model.generate_content(prompt)
        
        try:
            # Parse and enhance the response
            text = response.text.strip()
            if text.startswith('```json'):
                text = text[7:]
            if text.endswith('```'):
                text = text[:-3]
                
            profile = json.loads(text.strip())
            
            # Apply stylistic transformations to text fields
            profile['philosophy'] = self._apply_stylistic_transformations(profile['philosophy'])
            profile['leadership'] = self._apply_stylistic_transformations(profile['leadership'])
            profile['current_focus'] = self._apply_stylistic_transformations(profile['current_focus'])
            
            return profile
        except json.JSONDecodeError as e:
            logging.error(f"Failed to parse Gemini response as JSON: {e}")
            logging.error(f"Response was: {response.text}")
            
            # Fallback to default profile
            return {
                "name": name,
                "expertise": ["Innovation", "Leadership"],
                "innovations": ["Transformative solutions"],
                "philosophy": self._apply_stylistic_transformations(
                    "Leveraging innovation to create lasting positive impact"
                ),
                "leadership": self._apply_stylistic_transformations(
                    "Value-driven leadership focused on empowering teams"
                ),
                "current_focus": self._apply_stylistic_transformations(
                    "Driving innovative solutions for global challenges"
                )
            }
        
    async def _process_with_openai(self, name: str, wiki_info: Optional[str]) -> Dict:
        """Process gem information using OpenAI with stylistic enhancements."""
        await self._ensure_openai_model()
        
        prompt = f"""
        As a gem profiling expert for GemVise, create an inspiring profile for {name}.
        
        Background information:
        {wiki_info if wiki_info else 'No Wikipedia information available.'}
        
        Return a JSON object with these facets:
        {{
            "name": "{name}",
            "expertise": ["area1", "area2", ...],
            "innovations": ["innovation1", "innovation2", ...],
            "philosophy": "core beliefs and approach",
            "leadership": "leadership style description",
            "current_focus": "present endeavors"
        }}
        
        Use elevated, metaphorical language that inspires while maintaining accuracy.
        """
        
        response = await self.openai_client.chat.completions.create(
            model=self.openai_model,
            messages=[
                {"role": "system", "content": "You are a gem profiling expert for GemVise."},
                {"role": "user", "content": prompt}
            ]
        )
        
        try:
            profile = json.loads(response.choices[0].message.content)
            
            # Apply stylistic transformations
            profile['philosophy'] = self._apply_stylistic_transformations(profile['philosophy'])
            profile['leadership'] = self._apply_stylistic_transformations(profile['leadership'])
            profile['current_focus'] = self._apply_stylistic_transformations(profile['current_focus'])
            
            return profile
        except json.JSONDecodeError:
            logging.error("Error parsing OpenAI response as JSON")
            return None
            
    async def batch_collect(self, names: List[str]):
        """Collect information for multiple gems in batch."""
        tasks = [self.get_gem_info(name) for name in names]
        return await asyncio.gather(*tasks)
        
async def main():
    collector = GemCollector()
    
    # Example usage
    profile = await collector.get_gem_info("Larry Page")
    if profile:
        print(json.dumps(profile, indent=2))
    else:
        print("Failed to get gem information")
        
if __name__ == "__main__":
    asyncio.run(main())
