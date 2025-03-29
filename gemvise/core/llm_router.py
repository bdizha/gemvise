from typing import Optional, Dict, Any
import os
from dotenv import load_dotenv
from langchain_openai import OpenAI, OpenAIEmbeddings

load_dotenv()

class LLMRouter:
    def __init__(self):
        """Initialize the LLM router with various model providers."""
        self.models = {
            'gpt-4': OpenAI(model_name='gpt-4'),
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


from typing import Dict, Any, List, Optional
import json
import os
from dotenv import load_dotenv
from langchain_openai import OpenAIEmbeddings, OpenAI
from ..memory.manager import MemoryManager

# Load environment variables
load_dotenv()

# Default model settings
DEFAULT_MODEL = os.getenv('OPENAI_MODEL', 'gpt-3.5-turbo')
DEFAULT_TEMPERATURE = float(os.getenv('OPENAI_TEMPERATURE', '0.7'))

class CharacterLLMRouter:
    """Routes queries to character LLMs and manages dynamic response generation."""
    
    def __init__(self, gemvise, model_name=None, temperature=None):
        """Initialize the router."""
        self.gemvise = gemvise
        self.memory_manager = MemoryManager()
        self.embeddings = OpenAIEmbeddings()
        
        # Use provided model settings or defaults from env
        self.model_name = model_name or DEFAULT_MODEL
        self.temperature = temperature or DEFAULT_TEMPERATURE
        
        # Initialize the LLM
        self.llm = OpenAI(
            model_name=self.model_name,
            temperature=self.temperature
        )
        
    def get_response(self, gem_name: str, query: str) -> str:
        """Get a response from a character's LLM."""
        # Get the Gem's data
        gem = self.gemvise.get_gem(gem_name)
        if not gem:
            return f"Error: Character {gem_name} not found"
            
        # Get relevant templates
        templates = self.memory_manager.get_templates(gem_name, query)
        
        # Get historical context
        context = self.memory_manager.get_relevant_context(gem_name, query)
        
        # Build the prompt
        prompt = self._build_prompt(gem.facets, query, templates, context)
        
        # Get response from LLM
        response = self.llm.generate([prompt])[0].text
        
        # Update template usage if one was used
        if templates:
            self.memory_manager.update_template_usage(
                gem_name,
                templates[0]['topic'],
                templates[0]['template']
            )
            
        return response
        
    def _build_prompt(self, facets: Dict[str, Any], query: str,
                     templates: List[Dict[str, Any]], context: List[Dict[str, Any]]) -> str:
        """Build a prompt for the LLM."""
        prompt_parts = [
            f"You are {facets['name']}, known for:",
            f"- Expertise in: {', '.join(facets['expertise'])}",
            f"- Innovations: {', '.join(facets['innovations'])}",
            f"- Philosophy: {facets['philosophy']}",
            f"- Leadership style: {facets['leadership']}",
            f"- Current focus: {facets['current_focus']}",
            "\nRelevant previous interactions:"
        ]
        
        # Add historical context
        for interaction in context:
            prompt_parts.append(
                f"Q: {interaction['query']}\n"
                f"A: {interaction['response']}"
            )
            
        # Add relevant templates if available
        if templates:
            prompt_parts.append("\nSuggested response patterns:")
            for template in templates:
                prompt_parts.append(f"- {template['template']}")
                
        # Add the current query
        prompt_parts.append(f"\nCurrent query: {query}")
        prompt_parts.append("\nRespond as yourself, maintaining your unique perspective and character:")
        
        return "\n".join(prompt_parts)
        
    def generate_template(self, gem_name: str, topic: str, trigger_words: List[str]) -> str:
        """Generate a new response template for a character."""
        gem = self.gemvise.get_gem(gem_name)
        if not gem:
            return f"Error: Character {gem_name} not found"
            
        prompt = f"""
        As {gem_name}, create a response template for the topic '{topic}'.
        Your expertise: {', '.join(gem.facets['expertise'])}
        Your philosophy: {gem.facets['philosophy']}
        Current focus: {gem.facets['current_focus']}
        
        The template should:
        1. Reflect your unique perspective and character
        2. Be adaptable to different queries about {topic}
        3. Include placeholders for specific details
        
        Create a template that would be triggered by these words: {', '.join(trigger_words)}
        """
        
        template = self.llm.generate([prompt])[0].text.strip()
        
        # Store the template
        self.memory_manager.store_template(gem_name, topic, template, trigger_words)
        
        return template


class GemVise:
    def __init__(self):
        self.gems = {}
        self.memory_manager = MemoryManager()
        self.model_config = ModelConfig()
        
    def cut_gem(self, name: str, facets: Dict[str, Any], quantum_state: Dict[str, float]):
        self.gems[name] = Gem(name, facets, quantum_state, self.memory_manager, self.model_config)
        
    def get_gem(self, name: str) -> 'Gem':
        return self.gems.get(name)
