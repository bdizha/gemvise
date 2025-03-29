"""Core GemVise system implementation."""

from typing import Dict, Any, Optional, List
from ..config.model_config import ModelConfig
from ..memory.manager import MemoryManager
from .llm_router import CharacterLLMRouter
from ..models.gem import Gem

class GemVise:
    """
    Core system for managing quantum-inspired character interactions.
    """
    
    def __init__(self):
        """Initialize the GemVise system."""
        self.model_config = ModelConfig()
        self.memory_manager = MemoryManager()
        self.gems: Dict[str, Gem] = {}
        self.character_router = CharacterLLMRouter(self)
        self._load_gems()
        
    def _load_gems(self):
        """Load all Gems from the database."""
        for name in self.memory_manager.list_gems():
            gem_data = self.memory_manager.load_gem(name)
            if gem_data:
                self.gems[name] = Gem(
                    name=name,
                    facets=gem_data['facets'],
                    quantum_state=gem_data['quantum_state'],
                    memory_manager=self.memory_manager,
                    model_config=self.model_config
                )
        
    def cut_gem(self, name: str, facets: Dict[str, Any], quantum_state: Dict[str, float]):
        """Create a new gem (character) with given attributes."""
        # Create Gem instance
        self.gems[name] = Gem(
            name=name,
            facets=facets,
            quantum_state=quantum_state,
            memory_manager=self.memory_manager,
            model_config=self.model_config
        )
        
        # Store in database
        self.memory_manager.store_gem(name, facets, quantum_state)
        
    def get_gem(self, name: str) -> Optional[Gem]:
        """Get a gem by name."""
        # Try memory first
        gem = self.gems.get(name)
        if gem:
            return gem
            
        # Try loading from database
        gem_data = self.memory_manager.load_gem(name)
        if gem_data:
            self.gems[name] = Gem(
                name=name,
                facets=gem_data['facets'],
                quantum_state=gem_data['quantum_state'],
                memory_manager=self.memory_manager,
                model_config=self.model_config
            )
            return self.gems[name]
            
        return None
        
    def list_gems(self) -> List[str]:
        """List all available Gems."""
        return self.memory_manager.list_gems()
        
    def get_quantum_state(self, name: str) -> Optional[Dict[str, float]]:
        """Get the quantum state of a Gem."""
        gem = self.get_gem(name)
        return gem.quantum_state if gem else None
        
    def simulate_interaction(self, gem1_name: str, gem2_name: str) -> Dict[str, float]:
        """Simulate quantum interaction between two Gems."""
        gem1 = self.get_gem(gem1_name)
        gem2 = self.get_gem(gem2_name)
        
        if not gem1 or not gem2:
            return {'resonance': 0.0, 'entanglement': 0.0}
            
        # Calculate resonance based on quantum states
        resonance = (
            gem1.quantum_state['coherence'] * 
            gem2.quantum_state['coherence'] * 
            (1 - abs(gem1.quantum_state['phase'] - gem2.quantum_state['phase']))
        )
        
        # Calculate entanglement based on interaction history
        entanglement = min(
            gem1.quantum_state['energy'] * gem2.quantum_state['energy'],
            1.0 - max(gem1.quantum_state['uncertainty'], gem2.quantum_state['uncertainty'])
        )
        
        return {
            'resonance': resonance,
            'entanglement': entanglement
        }
