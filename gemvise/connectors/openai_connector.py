"""OpenAI connector."""

import os
from openai import AsyncOpenAI
from typing import Dict, Any, Optional
from .base_connector import BaseConnector

class OpenAIConnector(BaseConnector):
    """Connector for OpenAI's models."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize the OpenAI connector."""
        super().__init__(config)
        
        # Configure OpenAI
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY not found in environment")
            
        self.client = AsyncOpenAI(api_key=api_key)
        
        # Set default config
        self.config.update({
            'model': 'gpt-4-turbo-preview',
            'temperature': 0.7,
            'max_tokens': 2048,
            'top_p': 0.8,
            'frequency_penalty': 0.0,
            'presence_penalty': 0.0,
        })
        
    async def generate(self, prompt: str, config: Optional[Dict[str, Any]] = None) -> str:
        """Generate a response using OpenAI."""
        try:
            # Merge configs
            merged_config = self._merge_config(config)
            
            # Generate response
            response = await self.client.chat.completions.create(
                messages=[{"role": "user", "content": prompt}],
                **{k: v for k, v in merged_config.items() if k != 'api_key'}
            )
            
            if not response.choices:
                raise ValueError("Empty response from OpenAI")
                
            return response.choices[0].message.content.strip()
            
        except Exception as e:
            raise RuntimeError(f"OpenAI generation error: {str(e)}")
