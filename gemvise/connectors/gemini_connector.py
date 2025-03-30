"""Google Gemini connector."""

import os
import google.generativeai as genai
from typing import Dict, Any, Optional
from .base_connector import BaseConnector

class GeminiConnector(BaseConnector):
    """Connector for Google's Gemini model."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize the Gemini connector."""
        super().__init__(config)
        
        # Configure Gemini
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment")
            
        genai.configure(api_key=api_key)
        
        # Set default config
        self.config.update({
            'model': 'gemini-1.5-flash',  # Using Flash model for better rate limits
            'temperature': 0.7,
            'top_p': 0.8,
            'top_k': 40,
            'max_output_tokens': 2048,
        })
        
        # Initialize model
        self.model = genai.GenerativeModel(
            model_name=self.config['model'],
            generation_config=self._get_generation_config(self.config)
        )
        
    async def generate(self, prompt: str, config: Optional[Dict[str, Any]] = None) -> str:
        """Generate a response using Gemini."""
        try:
            # Update model config if needed
            if config:
                merged_config = self._merge_config(config)
                self.model = genai.GenerativeModel(
                    model_name=merged_config['model'],
                    generation_config=self._get_generation_config(merged_config)
                )
            
            # Generate response
            response = await self.model.generate_content_async(prompt)
            
            if not response.text:
                raise ValueError("Empty response from Gemini")
                
            return response.text.strip()
            
        except Exception as e:
            raise RuntimeError(f"Gemini generation error: {str(e)}")
            
    def _get_generation_config(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Get Gemini-specific generation config."""
        return {
            'temperature': config.get('temperature', 0.7),
            'top_p': config.get('top_p', 0.8),
            'top_k': config.get('top_k', 40),
            'max_output_tokens': config.get('max_output_tokens', 2048),
        }
