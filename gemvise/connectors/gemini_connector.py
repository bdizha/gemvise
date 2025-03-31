"""Google Gemini connector."""

import os
import google.generativeai as genai
from typing import Dict, Any, Optional, List
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
                
            return response.text
            
        except Exception as e:
            print(f"Error generating response: {e}")
            return "I apologize, but I'm having trouble processing that right now."
            
    async def generate_response(self, messages: List[Dict[str, str]], config: Optional[Dict[str, Any]] = None) -> str:
        """Generate a response for chat-style messages."""
        try:
            # Convert messages to Gemini chat format
            chat = self.model.start_chat()
            
            for msg in messages:
                if msg["role"] == "system":
                    # For system messages, we'll add them as user context
                    await chat.send_message_async(f"Context: {msg['content']}")
                else:
                    await chat.send_message_async(msg["content"])
            
            # Get the last response
            last_response = chat.last
            
            if not last_response or not last_response.text:
                raise ValueError("Empty response from Gemini")
                
            return last_response.text
            
        except Exception as e:
            print(f"Error generating chat response: {e}")
            return "I apologize, but I'm having trouble processing that right now."
            
    def _get_generation_config(self, config: Dict[str, Any]) -> Dict[str, Any]:
        """Get generation config for Gemini."""
        return {
            'temperature': config.get('temperature', 0.7),
            'top_p': config.get('top_p', 0.8),
            'top_k': config.get('top_k', 40),
            'max_output_tokens': config.get('max_output_tokens', 2048),
        }
        
    def _merge_config(self, new_config: Dict[str, Any]) -> Dict[str, Any]:
        """Merge new config with existing config."""
        merged = self.config.copy()
        merged.update(new_config)
        return merged
