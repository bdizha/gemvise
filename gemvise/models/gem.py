"""Gem model for quantum-inspired character representation."""

from typing import Dict, Any, List
from datetime import datetime
from ..memory.manager import MemoryManager
from ..config.model_config import ModelConfig

class Gem:
    """
    A quantum-inspired representation of a character's knowledge and state.
    """
    
    def __init__(self, name: str, facets: Dict[str, Any], quantum_state: Dict[str, float],
                 memory_manager: MemoryManager, model_config: ModelConfig):
        self.name = name
        self.facets = facets
        self.quantum_state = quantum_state
        self.memory_manager = memory_manager
        self.model_config = model_config
        
    def evolve_state(self):
        """Evolve the quantum state based on interaction."""
        config = self.model_config.quantum_config
        
        # Update quantum state components
        self.quantum_state['coherence'] *= config['coherence_decay']
        self.quantum_state['energy'] = min(
            self.quantum_state['energy'] + config['energy_recovery'],
            1.0
        )
        self.quantum_state['phase'] = (
            self.quantum_state['phase'] + config['phase_shift']
        ) % 1.0
        self.quantum_state['uncertainty'] = min(
            self.quantum_state['uncertainty'] + config['uncertainty_growth'],
            1.0
        )
        
    def get_facets(self) -> Dict[str, Any]:
        """Get character facets."""
        return self.facets
        
    def store_interaction(self, query: str, response: str):
        """Store an interaction in memory and evolve state."""
        self.memory_manager.store_interaction(
            self.name,
            query,
            response,
            datetime.now()
        )
        self.evolve_state()
        
    def get_relevant_context(self, query: str, k: int = 3) -> List[Dict[str, Any]]:
        """Get relevant context from memory for a query."""
        return self.memory_manager.get_relevant_context(
            self.name,
            query,
            k
        )
        
    def calculate_response_coherence(self, query: str, response: str) -> float:
        """Calculate how coherent a response is with character's expertise."""
        expertise_keywords = set(
            word.lower()
            for expertise in self.facets['expertise']
            for word in expertise.split()
        )
        
        response_words = set(response.lower().split())
        overlap = len(expertise_keywords & response_words)
        
        return min(overlap / max(len(expertise_keywords), 1), 1.0)
        
    def adjust_state_from_response(self, query: str, response: str):
        """Adjust quantum state based on response quality."""
        coherence = self.calculate_response_coherence(query, response)
        
        # Update quantum state based on response quality
        self.quantum_state['coherence'] = (
            self.quantum_state['coherence'] * 0.7 + coherence * 0.3
        )
        self.quantum_state['uncertainty'] = max(
            self.quantum_state['uncertainty'] - (coherence * 0.1),
            0.1
        )
