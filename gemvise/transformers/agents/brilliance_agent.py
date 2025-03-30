"""Agent for enhancing content brilliance through gem metaphors."""

from typing import Dict, Any, List
from ..base_agent import TransformationAgent

class BrillianceAgent(TransformationAgent):
    """Enhances content impact through gem-inspired metaphors."""
    
    def __init__(self, config: Dict[str, Any] = None):
        """Initialize brilliance patterns."""
        super().__init__(config)
        self.patterns = [
            {
                'template': "Like a {gem} {action}, this {quality} development",
                'gems': [
                    'alexandrite',
                    'diamond',
                    'sapphire',
                    'emerald',
                    'ruby'
                ],
                'actions': [
                    'capturing light',
                    'refracting wisdom',
                    'channeling energy',
                    'focusing clarity',
                    'amplifying potential'
                ],
                'qualities': [
                    'transformative',
                    'revolutionary',
                    'groundbreaking',
                    'innovative',
                    'visionary'
                ]
            },
            {
                'template': "With the brilliance of a {gem}, this {action} approach {quality}",
                'gems': [
                    'opal',
                    'tanzanite',
                    'topaz',
                    'amethyst',
                    'garnet'
                ],
                'actions': [
                    'illuminating',
                    'enlightening',
                    'empowering',
                    'inspiring',
                    'enriching'
                ],
                'qualities': [
                    'sparks new possibilities',
                    'unlocks hidden potential',
                    'transforms challenges',
                    'catalyzes growth',
                    'elevates understanding'
                ]
            }
        ]
        
    def transform(self, content: str, context: Dict[str, Any]) -> str:
        """Apply brilliance transformation to content."""
        try:
            # Get quantum state
            quantum = context.get('quantum_state', {})
            
            # Select pattern based on quantum state
            pattern = self._select_pattern(quantum)
            
            # Build enhancement
            enhancement = self._build_enhancement(pattern, quantum)
            
            # Apply enhancement
            return self._apply_enhancement(content, enhancement)
            
        except Exception as e:
            print(f"Error in brilliance transformation: {str(e)}")
            return content
            
    def _select_pattern(self, quantum: Dict[str, float]) -> Dict[str, Any]:
        """Select appropriate pattern based on quantum state."""
        intensity = quantum.get('energy', 0.5)
        pattern_index = 0 if intensity < 0.5 else 1
        return self.patterns[pattern_index]
        
    def _build_enhancement(self, pattern: Dict[str, Any], quantum: Dict[str, float]) -> Dict[str, str]:
        """Build enhancement based on pattern and quantum state."""
        # Get quantum values with defaults
        intensity = quantum.get('energy', 0.5)
        coherence = quantum.get('coherence', 0.5)
        phase = quantum.get('phase', 0.5)
        
        # Calculate relative values
        relative_intensity = min(max(intensity, 0.0), 1.0)
        innovation_factor = min(max(phase, 0.0), 1.0)
        complexity = min(max(coherence, 0.0), 1.0)
        
        # Calculate indices safely
        gem_index = min(int((relative_intensity + innovation_factor) / 2 * len(pattern["gems"])), len(pattern["gems"]) - 1)
        action_index = min(int((relative_intensity + complexity) / 2 * len(pattern["actions"])), len(pattern["actions"]) - 1)
        quality_index = min(int(relative_intensity * len(pattern["qualities"])), len(pattern["qualities"]) - 1)
        
        return {
            'template': pattern["template"],
            'gem': pattern["gems"][gem_index],
            'action': pattern["actions"][action_index],
            'quality': pattern["qualities"][quality_index]
        }
        
    def _apply_enhancement(self, content: str, enhancement: Dict[str, str]) -> str:
        """Apply brilliance enhancement to content."""
        brilliance = enhancement["template"].format(
            gem=enhancement["gem"],
            action=enhancement["action"],
            quality=enhancement["quality"]
        )
        
        # Find first paragraph break or sentence end
        first_para_end = content.find('\n\n')
        first_sent_end = content.find('. ')
        
        if first_para_end > 0:
            # Insert after first paragraph
            return content[:first_para_end] + '\n\n' + brilliance + content[first_para_end:]
        elif first_sent_end > 0:
            # Insert after first sentence
            return content[:first_sent_end+2] + brilliance + ' ' + content[first_sent_end+2:]
        else:
            # Append to start
            return brilliance + ' ' + content
            
    def get_state_effects(self) -> Dict[str, float]:
        """Get the effects of brilliance transformation on quantum state."""
        return {
            'energy': 0.1,      # Increases energy
            'coherence': 0.05,  # Slightly improves coherence
            'phase': 0.1,       # Advances phase
            'uncertainty': -0.1  # Reduces uncertainty
        }
