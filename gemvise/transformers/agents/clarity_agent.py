"""Clarity transformation agent for enhancing gem brilliance."""

import re
from typing import Dict, Any, List
from ..base_agent import TransformationAgent

class ClarityAgent(TransformationAgent):
    """Agent specialized in enhancing clarity and precision."""
    
    def __init__(self, config: Dict[str, Any] = None):
        super().__init__("clarity", config)
        self.state_effects.update({
            'coherence': 0.3,
            'energy': 0.1,
            'phase': 0.2,
            'uncertainty': -0.2
        })
        self._initialize_patterns()
        
    def _initialize_patterns(self):
        """Initialize clarity enhancement patterns."""
        self.patterns = {
            "precision": {
                "basic": ["think", "believe", "feel"],
                "enhanced": ["analyze", "determine", "conclude", "assess"]
            },
            "insight": {
                "basic": ["see", "look", "notice"],
                "enhanced": ["discern", "perceive", "recognize", "identify"]
            },
            "action": {
                "basic": ["do", "make", "get"],
                "enhanced": ["implement", "establish", "achieve", "create"]
            }
        }
        
    def transform(self, content: str, context: Dict[str, Any] = None) -> str:
        """Apply clarity transformation."""
        state = context.get('quantum_state', {})
        plan = self.plan_transformation(content, state)
        
        result = content
        for category, patterns in self.patterns.items():
            if category in plan['focus_areas']:
                result = self._apply_category(result, patterns, plan['intensity'])
                
        return result
        
    def _identify_focus_areas(self, content: str, state: Dict[str, float]) -> List[str]:
        """Identify which aspects need clarity enhancement."""
        focus_areas = []
        
        # Check precision needs
        if any(word in content.lower() for word in self.patterns["precision"]["basic"]):
            focus_areas.append("precision")
            
        # Check insight needs
        if any(word in content.lower() for word in self.patterns["insight"]["basic"]):
            focus_areas.append("insight")
            
        # Check action needs
        if any(word in content.lower() for word in self.patterns["action"]["basic"]):
            focus_areas.append("action")
            
        return focus_areas
        
    def _apply_category(self, text: str, patterns: Dict[str, List[str]], 
                       intensity: float) -> str:
        """Apply clarity patterns for a specific category."""
        result = text
        for basic in patterns["basic"]:
            if intensity > 0.7 or (intensity > 0.4 and basic in text.lower()):
                enhanced = patterns["enhanced"][
                    int(intensity * (len(patterns["enhanced"]) - 1))
                ]
                pattern = re.compile(r'\b' + basic + r'\b', re.IGNORECASE)
                result = pattern.sub(enhanced, result)
        return result
