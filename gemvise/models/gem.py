"""Gem model representing a character with quantum-inspired knowledge and personality."""

from typing import Dict, Any, List, Optional
from datetime import datetime
import numpy as np
from dataclasses import dataclass
from enum import Enum
from ..config.model_config import ModelConfig
from ..crystal.manager import CrystalManager

class GemState(Enum):
    """Possible states of a gem's polish level."""
    RAW = "raw"              # Initial state
    ROUGH = "rough"          # Basic processing done
    POLISHED = "polished"    # Well-refined
    BRILLIANT = "brilliant"  # Highest quality

@dataclass
class QuantumState:
    """Quantum state of a gem."""
    coherence: float      # Vision/message consistency (0-1)
    energy: float        # Current activity/impact level (0-1)
    phase: float         # Journey/evolution stage (0-1)
    uncertainty: float   # Predictability of next moves (0-1)

class Gem:
    """A Gem represents a unique character with quantum-inspired knowledge and personality."""
    
    def __init__(self, name: str, facets: Dict[str, Any] = None):
        self.name = name
        self.facets = facets or {}
        self.state = GemState.RAW
        self.quantum_state = QuantumState(
            coherence=1.0,
            energy=0.5,
            phase=0.0,
            uncertainty=0.1
        )
        self.polish_history = []
        self.entanglements = {}
        self.model_config = ModelConfig()
        self._init_crystalline_memory()
        
    def _init_crystalline_memory(self):
        """Initialize the Gem's crystalline memory structure."""
        self.crystal_manager = CrystalManager()
        
    def absorb(self, reflection: str, metadata: Dict[str, Any] = None):
        """Absorb new knowledge into the Gem's crystal lattice."""
        # Store reflection in crystal memory
        self.crystal_manager.store_reflection(
            self.name,
            reflection,
            metadata or {}
        )
        
    def reflect(self, vise: str) -> str:
        """Generate a reflection in response to a Vise (conversation/query)."""
        # Get relevant context from crystal memory
        context = self.crystal_manager.get_relevant_context(
            self.name,
            vise
        )
        
        # Generate reflection using context
        system_prompt = self._generate_system_prompt()
        user_prompt = self._generate_user_prompt(vise, context)
        reflection = self._generate_reflection(system_prompt, user_prompt)
        
        # Update quantum state
        self._update_quantum_state(reflection, context)
        
        return reflection
        
    def polish(self, technique: str, intensity: float = 0.5):
        """Apply polish technique to improve gem quality."""
        if intensity < 0 or intensity > 1:
            raise ValueError("Polish intensity must be between 0 and 1")
            
        self.polish_history.append({
            'technique': technique,
            'intensity': intensity,
            'timestamp': datetime.now().isoformat()
        })
        
        # Update state based on polish history
        if len(self.polish_history) >= 3:
            self.state = GemState.BRILLIANT
        elif len(self.polish_history) >= 2:
            self.state = GemState.POLISHED
        elif len(self.polish_history) >= 1:
            self.state = GemState.ROUGH
            
    def entangle(self, other_gem: 'Gem', strength: float = 0.5):
        """Create quantum entanglement with another gem."""
        if strength < 0 or strength > 1:
            raise ValueError("Entanglement strength must be between 0 and 1")
            
        self.entanglements[other_gem.name] = {
            'strength': strength,
            'timestamp': datetime.now().isoformat()
        }
        
    def _generate_system_prompt(self) -> str:
        """Generate system prompt based on Gem's facets."""
        prompt = f"You are {self.name}, a unique character with the following traits:\n\n"
        for trait, value in self.facets.items():
            prompt += f"- {trait}: {value}\n"
        return prompt
        
    def _generate_user_prompt(self, vise: str, context: List[str]) -> str:
        """Generate user prompt with context."""
        prompt = f"Based on your character and the following context:\n\n"
        for ctx in context:
            prompt += f"- {ctx}\n"
        prompt += f"\nRespond to: {vise}"
        return prompt
        
    def _update_quantum_state(self, reflection: str, context: List[str]):
        """Update the Gem's quantum state with new knowledge."""
        # Calculate new quantum state values
        resonance = [self._compute_quantum_interference(reflection, ctx) for ctx in context]
        energy = sum(resonance) / len(resonance) if resonance else 0.5
        phase = np.random.uniform(0, 2*np.pi)  # Random phase for quantum uncertainty
        
        # Update state
        self.quantum_state = QuantumState(
            coherence=self.quantum_state.coherence * 0.9 + 0.1,  # Maintain high coherence
            energy=energy,
            phase=phase,
            uncertainty=max(0.1, self.quantum_state.uncertainty * 0.95)  # Reduce uncertainty over time
        )
        
    def _compute_quantum_interference(self, state1: str, state2: str) -> float:
        """Compute quantum interference between two states."""
        # Simple cosine similarity as interference measure
        words1 = set(state1.lower().split())
        words2 = set(state2.lower().split())
        intersection = words1.intersection(words2)
        union = words1.union(words2)
        return len(intersection) / len(union) if union else 0
        
    def _generate_reflection(self, system_prompt: str, user_prompt: str) -> str:
        """Generate a reflection based on the system and user prompts."""
        # This method is currently not implemented
        return ""
        
    def get_facets(self) -> Dict[str, Any]:
        """Get Gem's facets and quantum state information."""
        return {
            'name': self.name,
            'facets': self.facets,
            'state': self.state.value,
            'quantum_state': {
                'coherence': self.quantum_state.coherence,
                'energy': self.quantum_state.energy,
                'phase': self.quantum_state.phase,
                'uncertainty': self.quantum_state.uncertainty
            },
            'polish_history': self.polish_history,
            'entanglements': self.entanglements
        }
