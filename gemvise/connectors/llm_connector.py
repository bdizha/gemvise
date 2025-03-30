"""Base connector for LLM interactions."""

from abc import ABC, abstractmethod
from typing import Dict, Any, Optional
import os
from dotenv import load_dotenv

class LLMConnector(ABC):
    """Abstract base class for LLM connectors."""
    
    def __init__(self):
        load_dotenv()
        
    @abstractmethod
    async def generate(self, prompt: str, params: Optional[Dict[str, Any]] = None) -> str:
        """Generate text from prompt."""
        pass
        
    @abstractmethod
    async def embed(self, text: str) -> list[float]:
        """Get embeddings for text."""
        pass
        
    @abstractmethod
    def configure(self, **kwargs):
        """Configure the connector."""
        pass
