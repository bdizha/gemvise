from typing import Optional, Dict, Any
import os
from dotenv import load_dotenv
from langchain.llms import OpenAI, Anthropic
from langchain.embeddings import OpenAIEmbeddings

load_dotenv()

class LLMRouter:
    def __init__(self):
        """Initialize the LLM router with various model providers."""
        self.models = {
            'gpt-4': OpenAI(model_name='gpt-4'),
            'claude-2': Anthropic(model='claude-2'),
            'gpt-3.5-turbo': OpenAI(model_name='gpt-3.5-turbo')
        }
        self.embeddings = OpenAIEmbeddings()
        
    def route_query(self, query: str, context: Dict[str, Any]) -> tuple[str, dict]:
        """Route a query to the most appropriate LLM based on context.
        
        Args:
            query: The query string
            context: Additional context for routing decision
            
        Returns:
            Tuple of (selected_model_name, model_params)
        """
        # Simple routing logic - can be enhanced with more sophisticated rules
        if context.get('complexity', 0) > 0.8:
            return 'gpt-4', {'temperature': 0.7}
        elif context.get('creativity_required', False):
            return 'claude-2', {'temperature': 0.9}
        else:
            return 'gpt-3.5-turbo', {'temperature': 0.5}
            
    def get_embedding(self, text: str) -> list[float]:
        """Get embeddings for text using the current embedding model.
        
        Args:
            text: Input text
            
        Returns:
            List of embedding values
        """
        return self.embeddings.embed_query(text)
        
    def generate_response(self, 
                         query: str, 
                         context: Dict[str, Any], 
                         model_name: Optional[str] = None) -> str:
        """Generate a response using the appropriate LLM.
        
        Args:
            query: The query string
            context: Additional context for generation
            model_name: Optional specific model to use
            
        Returns:
            Generated response
        """
        if not model_name:
            model_name, params = self.route_query(query, context)
        else:
            params = {'temperature': 0.7}  # default params
            
        model = self.models[model_name]
        return model.generate(query, **params)
