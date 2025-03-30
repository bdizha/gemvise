"""Core GemVise system for managing gem interactions."""

from typing import Dict, Any, Optional
from .gem_base import GemState, QuantumState
from .llm_router import LLMRouter
from ..memory.manager import MemoryManager

class GemVise:
    """Core system for managing gem interactions and transformations."""
    
    def __init__(self):
        """Initialize the GemVise system."""
        self.gems = {}
        self.memory_manager = MemoryManager()
        self.llm_router = LLMRouter()
        
    async def get_response(self, prompt: str, gem_state: GemState = GemState.RAW,
                          quantum_state: Optional[QuantumState] = None) -> str:
        """Get a transformed response using the LLM router."""
        return await self.llm_router.get_completion(prompt, gem_state, quantum_state)
        
    def add_gem(self, name: str, facets: Dict[str, Any]):
        """Add a new gem to the system."""
        if name in self.gems:
            raise ValueError(f"Gem {name} already exists")
            
        self.gems[name] = {
            'name': name,
            'facets': facets,
            'state': GemState.RAW,
            'quantum_state': QuantumState(
                coherence=0.5,
                energy=0.5,
                phase=0.0,
                uncertainty=0.5
            )
        }
        
    def get_gem(self, name: str) -> Optional[Dict[str, Any]]:
        """Get a gem by name."""
        return self.gems.get(name)
        
    def update_gem_state(self, name: str, state: GemState):
        """Update a gem's polish state."""
        if name not in self.gems:
            raise ValueError(f"Gem {name} not found")
            
        self.gems[name]['state'] = state
        
    def update_quantum_state(self, name: str, quantum_state: QuantumState):
        """Update a gem's quantum state."""
        if name not in self.gems:
            raise ValueError(f"Gem {name} not found")
            
        self.gems[name]['quantum_state'] = quantum_state
