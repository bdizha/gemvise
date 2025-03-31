"""Core GemVise system for managing Gems and their interactions."""

from typing import Dict, Any, Optional
from ..models.gem import Gem, GemState, QuantumState
from ..crystal.manager import CrystalManager
from ..config import ModelConfig

class GemVise:
    """GemVise system for managing Gems and their interactions."""
    
    def __init__(self):
        """Initialize the GemVise system."""
        self.gems: Dict[str, Gem] = {}
        self.crystal_manager = CrystalManager()
        self.model_config = ModelConfig()
        
    def cut_gem(self, name: str, facets: Dict[str, Any] = None) -> Gem:
        """Create a new Gem (character).
        
        Args:
            name: Name of the Gem
            facets: Dict containing Gem's facets (personality traits and expertise)
            
        Returns:
            The newly created Gem
        """
        gem = Gem(name=name, facets=facets)
        self.gems[name] = gem
        self.crystal_manager.store_gem(name, facets)
        return gem
        
    def engage_vise(self, gem_name: str, vise: str) -> str:
        """Engage a Gem in conversation using a Vise.
        
        Args:
            gem_name: Name of the Gem to engage
            vise: The conversation prompt
            
        Returns:
            Gem's reflection
        """
        if gem_name not in self.gems:
            raise ValueError(f"No Gem found with name: {gem_name}")
            
        gem = self.gems[gem_name]
        return gem.reflect(vise)
        
    def find_resonant_gem(self, vise: str) -> Optional[Gem]:
        """Find the Gem that resonates most strongly with a given Vise.
        
        Args:
            vise: The conversation prompt
            
        Returns:
            Most resonant Gem
        """
        if not self.gems:
            return None
            
        max_resonance = -1
        resonant_gem = None
        
        for gem in self.gems.values():
            # Get context and calculate resonance
            context = gem.crystal_manager.get_relevant_context(gem.name, vise)
            resonance = sum(gem._compute_quantum_interference(vise, ctx) for ctx in context)
            
            if resonance > max_resonance:
                max_resonance = resonance
                resonant_gem = gem
                
        return resonant_gem

    def get_gem(self, name: str) -> Optional[Gem]:
        """Retrieve a Gem by name.
        
        Args:
            name: Name of the Gem
            
        Returns:
            The Gem if found, None otherwise
        """
        if name not in self.gems:
            # Try to load from crystal storage
            gem_data = self.crystal_manager.get_gem(name)
            if gem_data:
                self.gems[name] = Gem(
                    name=name,
                    facets=gem_data['facets'],
                    quantum_state=gem_data.get('quantum_state')
                )
        return self.gems.get(name)
        
    def polish_gem(self, name: str, new_facets: Dict[str, Any]) -> Optional[Gem]:
        """Update a Gem's facets.
        
        Args:
            name: Name of the Gem
            new_facets: New or updated facets
            
        Returns:
            Updated Gem if found, None otherwise
        """
        gem = self.get_gem(name)
        if gem:
            gem.facets.update(new_facets)
            self.crystal_manager.store_gem(name, gem.facets, gem.quantum_state.to_dict())
        return gem
