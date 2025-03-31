"""GemCutter for shaping and polishing gem responses through AI models."""

import os
from typing import Dict, Any, Optional, List
from dotenv import load_dotenv

from ..models.gem import Gem, GemState, QuantumState
from ..connectors.gemini_connector import GeminiConnector
from ..connectors.openai_connector import OpenAIConnector
from ..crystal.manager import CrystalManager
from ..config import ModelConfig

class GemCutter:
    """Shapes and polishes gem responses through appropriate AI models."""
    
    def __init__(self):
        """Initialize the gem cutter."""
        load_dotenv()
        
        # Initialize cutting tools (AI models)
        self.gemini = GeminiConnector()
        self.openai = OpenAIConnector()
        
        # Initialize polishing agents
        self.agent_manager = AgentManager()
        self.crystal_manager = CrystalManager()
        
    async def cut_and_polish(self, rough_gem: str, gem_state: GemState = GemState.RAW,
                           quantum_state: Optional[QuantumState] = None) -> str:
        """Shape and polish a rough gem through appropriate models and transformations."""
        try:
            # Select cutting tool based on gem state
            if gem_state == GemState.RAW:
                response = await self.gemini.complete(rough_gem)
            else:
                response = await self.openai.complete(rough_gem)
                
            # Apply transformations based on quantum state
            if quantum_state and quantum_state.coherence > 0.7:
                response = await self.agent_manager.apply_transformations(
                    response,
                    quantum_state
                )
                
            return response
            
        except Exception as e:
            # Fallback to simpler cutting if advanced techniques fail
            try:
                return await self.gemini.complete(rough_gem)
            except:
                return "Failed to cut and polish the gem."
                
    async def get_facets(self, content: str) -> Dict[str, Any]:
        """Extract numerical facets (embeddings) from content."""
        try:
            return await self.openai.get_embedding(content)
        except:
            # Fallback to simpler faceting
            try:
                return await self.gemini.get_embedding(content)
            except:
                return {}
                
    def store_cut(self, gem_name: str, rough_gem: str, polished_gem: str):
        """Store the cutting process in crystal memory."""
        self.crystal_manager.store_transformation(
            gem_name,
            {
                'input': rough_gem,
                'output': polished_gem,
                'technique': 'cut_and_polish'
            }
        )
