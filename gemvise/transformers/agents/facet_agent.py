"""Facet transformation agent for adding metaphorical depth."""

import random
from typing import Dict, Any, List
from ..base_agent import TransformationAgent

class FacetAgent(TransformationAgent):
    """Agent specialized in adding metaphorical facets."""
    
    def __init__(self, config: Dict[str, Any] = None):
        super().__init__("facet", config)
        self.state_effects.update({
            'coherence': 0.2,
            'energy': 0.3,
            'phase': 0.3,
            'uncertainty': 0.1
        })
        self._initialize_facets()
        
    def _initialize_facets(self):
        """Initialize metaphorical facet patterns."""
        self.facets = {
            "insight": {
                "gems": ["diamond", "sapphire", "crystal"],
                "qualities": ["clarity", "depth", "brilliance"],
                "contexts": ["understanding", "vision", "perception"]
            },
            "transformation": {
                "gems": ["opal", "alexandrite", "moonstone"],
                "qualities": ["change", "adaptation", "evolution"],
                "contexts": ["growth", "development", "progress"]
            },
            "impact": {
                "gems": ["ruby", "emerald", "topaz"],
                "qualities": ["power", "vitality", "strength"],
                "contexts": ["influence", "achievement", "success"]
            }
        }
        
    def transform(self, content: str, context: Dict[str, Any] = None) -> str:
        """Apply facet transformation."""
        state = context.get('quantum_state', {})
        plan = self.plan_transformation(content, state)
        
        if plan['intensity'] < 0.3:
            return content
            
        # Select appropriate facet category based on content
        category = self._select_category(content, plan['focus_areas'])
        if not category:
            return content
            
        # Build metaphorical enhancement
        enhancement = self._build_metaphor(
            category,
            plan['intensity'],
            plan['constraints']['innovation']
        )
        
        return self._apply_enhancement(content, enhancement, plan['intensity'])
        
    def _select_category(self, content: str, focus_areas: List[str]) -> str:
        """Select most appropriate facet category."""
        scores = {}
        for category, facet in self.facets.items():
            score = 0
            # Check contexts in content
            for context in facet["contexts"]:
                if context in content.lower():
                    score += 1
            # Check if category aligns with focus areas
            if category in focus_areas:
                score += 2
            scores[category] = score
            
        # Select highest scoring category
        if not scores:
            return None
        return max(scores.items(), key=lambda x: x[1])[0]
        
    def _build_metaphor(self, category: str, intensity: float, 
                       innovation: float) -> Dict[str, str]:
        """Build metaphorical enhancement."""
        facet = self.facets[category]
        
        # Select elements based on intensity and innovation
        gem_index = int((intensity + innovation) / 2 * (len(facet["gems"]) - 1))
        quality_index = int(intensity * (len(facet["qualities"]) - 1))
        
        return {
            'gem': facet["gems"][gem_index],
            'quality': facet["qualities"][quality_index],
            'context': random.choice(facet["contexts"])
        }
        
    def _apply_enhancement(self, content: str, enhancement: Dict[str, str], 
                         intensity: float) -> str:
        """Apply metaphorical enhancement to content."""
        patterns = [
            "Like a {gem}'s {quality}, this {context} ",
            "With the {quality} of a {gem}, this {context} ",
            "Reflecting a {gem}'s {quality} in {context}, "
        ]
        
        pattern = patterns[int(intensity * (len(patterns) - 1))]
        prefix = pattern.format(**enhancement)
        
        return prefix + content
