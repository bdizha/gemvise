"""Manager for coordinating transformation agents."""

from typing import Dict, Any, List, Optional
from .base_agent import TransformationAgent
from .agents.clarity_agent import ClarityAgent
from .agents.facet_agent import FacetAgent
from .agents.brilliance_agent import BrillianceAgent
from ..core.gem_base import GemState, QuantumState

class AgentManager:
    """Coordinates transformation agents for gem enhancement."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize transformation agents."""
        self.config = config or {}
        self.agents = {
            'clarity': ClarityAgent(config),
            'facet': FacetAgent(config),
            'brilliance': BrillianceAgent(config)
        }
        
    async def transform(self, content: str, gem_state: GemState,
                       quantum_state: QuantumState) -> str:
        """Apply coordinated transformations using all agents."""
        context = {
            'gem_state': gem_state,
            'quantum_state': self._observe_quantum_state(quantum_state),
            'previous_transforms': []
        }
        
        # Plan transformation sequence
        sequence = self._plan_sequence(content, context)
        
        # Apply transformations in sequence
        result = content
        for agent_name in sequence:
            agent = self.agents[agent_name]
            try:
                # Update context with previous results
                context['previous_transforms'].append({
                    'agent': agent_name,
                    'state_before': context['quantum_state'].copy()
                })
                
                # Apply transformation
                result = agent.transform(result, context)
                
                # Update quantum state in context
                self._update_quantum_state(context, agent.get_state_effects())
                
            except Exception as e:
                print(f"Error in {agent_name} transformation: {str(e)}")
                
        return result
        
    def _observe_quantum_state(self, state: QuantumState) -> Dict[str, float]:
        """Get current quantum state observations."""
        return {
            'coherence': state.coherence,
            'energy': state.energy,
            'phase': state.phase,
            'uncertainty': state.uncertainty
        }
        
    def _update_quantum_state(self, context: Dict[str, Any], 
                            effects: Dict[str, float]):
        """Update quantum state in context based on effects."""
        state = context['quantum_state']
        for key, effect in effects.items():
            state[key] = max(0.0, min(1.0, state[key] + effect))
            
    def _plan_sequence(self, content: str, context: Dict[str, Any]) -> List[str]:
        """Plan optimal transformation sequence."""
        state = context['gem_state']
        quantum = context['quantum_state']
        
        if state == GemState.RAW:
            # Start with clarity for raw gems
            return ['clarity', 'facet', 'brilliance']
            
        elif state == GemState.ROUGH:
            # Focus on facets for rough gems
            if quantum['coherence'] < 0.5:
                return ['clarity', 'facet']
            else:
                return ['facet', 'brilliance']
                
        elif state == GemState.POLISHED:
            # Enhance brilliance for polished gems
            if quantum['energy'] < 0.7:
                return ['brilliance']
            else:
                return ['facet', 'brilliance']
                
        elif state == GemState.BRILLIANT:
            # Minimal touch-ups for brilliant gems
            if quantum['coherence'] < 0.8:
                return ['clarity']
            elif quantum['energy'] < 0.8:
                return ['brilliance']
                
        # Default sequence
        return ['clarity', 'facet', 'brilliance']
