"""Document Processor for GemVise.

Handles document collection, conversion, and analysis for billionaire profiles.
"""

import asyncio
import aiohttp
import PyPDF2
from typing import List, Dict, Optional
import os
from pathlib import Path
import openai
from datetime import datetime
import json

class DocumentProcessor:
    """Processes and analyzes documents related to billionaires."""
    
    def __init__(self):
        self.base_path = Path("data/documents")
        self.base_path.mkdir(parents=True, exist_ok=True)
        
    async def search_documents(self, name: str) -> List[Dict]:
        """Search for relevant documents about the person."""
        documents = []
        
        # Search academic papers
        academic_docs = await self._search_academic_papers(name)
        documents.extend(academic_docs)
        
        # Search interviews
        interviews = await self._search_interviews(name)
        documents.extend(interviews)
        
        # Search books
        books = await self._search_books(name)
        documents.extend(books)
        
        return documents
    
    async def download_document(self, url: str, person_id: str) -> Optional[Path]:
        """Download document and store locally."""
        try:
            async with aiohttp.ClientSession() as session:
                async with session.get(url) as response:
                    if response.status == 200:
                        content = await response.read()
                        file_path = self.base_path / f"{person_id}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
                        with open(file_path, 'wb') as f:
                            f.write(content)
                        return file_path
        except Exception as e:
            print(f"Error downloading document: {e}")
            return None
    
    def extract_text(self, file_path: Path) -> str:
        """Extract text from PDF document."""
        try:
            with open(file_path, 'rb') as file:
                reader = PyPDF2.PdfReader(file)
                text = ""
                for page in reader.pages:
                    text += page.extract_text()
                return text
        except Exception as e:
            print(f"Error extracting text: {e}")
            return ""
    
    async def analyze_content(self, text: str) -> Dict:
        """Analyze document content using LLM."""
        try:
            response = await openai.ChatCompletion.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "Analyze this text for key business insights and principles."},
                    {"role": "user", "content": text[:4000]}  # First 4000 chars for summary
                ]
            )
            
            return {
                "summary": response.choices[0].message.content,
                "key_points": await self._extract_key_points(text),
                "expertise_indicators": await self._identify_expertise(text),
                "business_principles": await self._extract_principles(text),
                "analyzed_at": datetime.now().isoformat()
            }
        except Exception as e:
            return {"error": str(e)}
    
    async def _search_academic_papers(self, name: str) -> List[Dict]:
        """Search academic papers and publications."""
        # Implementation using academic APIs
        return []
    
    async def _search_interviews(self, name: str) -> List[Dict]:
        """Search for interviews and transcripts."""
        # Implementation using news and media APIs
        return []
    
    async def _search_books(self, name: str) -> List[Dict]:
        """Search for books by or about the person."""
        # Implementation using book APIs
        return []
    
    async def _extract_key_points(self, text: str) -> List[str]:
        """Extract key points from text."""
        try:
            response = await openai.ChatCompletion.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "Extract key business and leadership points from this text."},
                    {"role": "user", "content": text[:4000]}
                ]
            )
            return response.choices[0].message.content.split("\n")
        except Exception:
            return []
    
    async def _identify_expertise(self, text: str) -> List[str]:
        """Identify areas of expertise from text."""
        try:
            response = await openai.ChatCompletion.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "Identify specific areas of expertise mentioned in this text."},
                    {"role": "user", "content": text[:4000]}
                ]
            )
            return response.choices[0].message.content.split("\n")
        except Exception:
            return []
    
    async def _extract_principles(self, text: str) -> List[str]:
        """Extract business principles from text."""
        try:
            response = await openai.ChatCompletion.create(
                model="gpt-4-turbo-preview",
                messages=[
                    {"role": "system", "content": "Extract core business principles from this text."},
                    {"role": "user", "content": text[:4000]}
                ]
            )
            return response.choices[0].message.content.split("\n")
        except Exception:
            return []
    
    def save_analysis(self, person_id: str, analysis: Dict) -> None:
        """Save document analysis results."""
        analysis_path = self.base_path / "analyses" / f"{person_id}.json"
        analysis_path.parent.mkdir(exist_ok=True)
        
        with open(analysis_path, 'w') as f:
            json.dump(analysis, f, indent=2)

async def main():
    processor = DocumentProcessor()
    # Example usage
    documents = await processor.search_documents("Elon Musk")
    for doc in documents:
        if doc.get('url'):
            file_path = await processor.download_document(doc['url'], 'musk')
            if file_path:
                text = processor.extract_text(file_path)
                analysis = await processor.analyze_content(text)
                processor.save_analysis('musk', analysis)

if __name__ == "__main__":
    asyncio.run(main())
