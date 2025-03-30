"""LLM Router for managing multiple language model interactions."""

import os
from typing import Dict, Any, Optional
from dotenv import load_dotenv

from ..transformers.agent_manager import AgentManager
from .gem_base import GemState, QuantumState
from ..connectors.gemini_connector import GeminiConnector
from ..connectors.openai_connector import OpenAIConnector

class LLMRouter:
    """Routes requests to appropriate language models with proper configuration."""
    
    def __init__(self):
        """Initialize the LLM router."""
        load_dotenv()
        
        # Initialize connectors
        self.gemini = GeminiConnector()
        self.openai = OpenAIConnector()
        
        # Initialize transformation agents
        self.agent_manager = AgentManager()
        
    async def get_completion(self, prompt: str, gem_state: GemState = GemState.RAW,
                           quantum_state: Optional[QuantumState] = None) -> str:
        """Get completion from most appropriate model and apply transformations."""
        try:
            # Use default quantum state if none provided
            if quantum_state is None:
                quantum_state = QuantumState(
                    coherence=0.5,
                    energy=0.5,
                    phase=0.0,
                    uncertainty=0.5
                )
            
            # Get raw completion from appropriate model
            if self._should_use_gemini(prompt):
                response = await self.gemini.generate(prompt)
            else:
                response = await self.openai.generate(prompt)
                
            # Apply transformations using agents
            transformed = await self.agent_manager.transform(
                response,
                gem_state,
                quantum_state
            )
            
            return transformed
                
        except Exception as e:
            print(f"Error in LLM completion: {str(e)}")
            return await self._get_fallback_completion(prompt)
    
    def _should_use_gemini(self, prompt: str) -> bool:
        """Determine whether to use Gemini based on the prompt and task."""
        # Add logic to choose between models based on:
        # 1. Task complexity
        # 2. Required creativity
        # 3. Context length
        # 4. Previous success rates
        return True  # Default to Gemini for now
    
    async def _get_fallback_completion(self, prompt: str) -> str:
        """Get completion from fallback model if primary fails."""
        try:
            return await self.openai.generate(
                prompt,
                {
                    'model': 'gpt-3.5-turbo',  # Use more reliable model
                    'temperature': 0.7,
                    'max_tokens': 150
                }
            )
        except Exception as e:
            return f"Error: Unable to get completion. Please try again later. ({str(e)})"


class GemVise:
    def __init__(self):
        self.gems = {}
        self.memory_manager = MemoryManager()
        self.model_config = ModelConfig()
        
    def cut_gem(self, name: str, facets: Dict[str, Any], quantum_state: Dict[str, float]):
        self.gems[name] = Gem(name, facets, quantum_state, self.memory_manager, self.model_config)
        
    def get_gem(self, name: str) -> 'Gem':
        return self.gems.get(name)
