"""Agent responsible for polishing gems to enhance their qualities."""

from typing import Dict, Any, Optional
from datetime import datetime
from ...models.gem import Gem, GemState, QuantumState
from ...crystal.manager import CrystalManager
from .base_agent import BaseAgent

class PolishAgent(BaseAgent):
    """Agent that polishes gems to enhance their brilliance and qualities."""
    
    def __init__(self):
        """Initialize the polish agent."""
        super().__init__()
        self.crystal_manager = CrystalManager()
        
    async def transform(self, gem_id: str, context: Dict[str, Any]) -> Dict[str, Any]:
        """Polish a gem to enhance its qualities.
        
        Args:
            gem_id: ID of the gem to polish
            context: Additional context for polishing, including:
                - interaction: The interaction content that triggered polishing
                - new_knowledge: Optional new insights to incorporate
                
        Returns:
            Dict containing the polished gem's updated state
        """
        # Get current gem state
        gem_data = self.crystal_manager.get_gem(gem_id)
        if not gem_data:
            raise ValueError(f"No gem found with ID: {gem_id}")
            
        # Extract interaction and new knowledge
        interaction = context.get('interaction')
        new_knowledge = context.get('new_knowledge', {})
        
        # Update quantum state based on interaction
        quantum_state = QuantumState(**gem_data.get('quantum_state', {}))
        if interaction:
            quantum_state.evolve(interaction)
            
            # Store interaction for future reference
            self.crystal_manager.store_interaction(
                gem_id,
                interaction,
                None,  # Response will be added later
                datetime.now()
            )
        
        # Enhance gem with new knowledge if provided
        facets = gem_data.get('facets', {})
        if new_knowledge:
            facets.update(new_knowledge)
            
            # Adjust quantum state for enhanced brilliance
            quantum_state.coherence *= 1.1  # Increase coherence
            quantum_state.energy += 0.1     # Add energy
            quantum_state.phase += 0.05     # Advance phase
        
        # Store enhanced state
        self.crystal_manager.store_gem(
            gem_id,
            facets,
            quantum_state.to_dict()
        )
        
        return {
            'gem_id': gem_id,
            'facets': facets,
            'quantum_state': quantum_state.to_dict(),
            'brilliance': self._examine_brilliance(gem_id, facets, quantum_state)
        }
        
    def _examine_brilliance(self, gem_id: str, facets: Dict[str, Any], 
                          quantum_state: QuantumState) -> str:
        """Examine the gem's brilliance based on its polish history.
        
        Args:
            gem_id: ID of the gem
            facets: Current facets of the gem
            quantum_state: Current quantum state
            
        Returns:
            Description of the gem's brilliance
        """
        # Get recent polishing interactions
        interactions = self.crystal_manager.get_recent_interactions(gem_id)
        
        # Generate reflection based on quantum state and polish history
        brilliance = f"With coherence {quantum_state.coherence:.2f}, "
        brilliance += f"facets in {facets.get('expertise', [])} "
        brilliance += f"have been polished through {len(interactions)} recent interactions."
        
        return brilliance
