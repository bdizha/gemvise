"""Gem data importer for processing and loading character profiles."""

from typing import Dict, Any, List
import json
from datetime import datetime
from ...crystal.manager import CrystalManager

# Generic template patterns that will be customized for each Gem
GENERIC_TEMPLATES = {
    'expertise': {
        'pattern': "As {name}, my expertise in {expertise[0]} has taught me that {philosophy}. When it comes to {current_focus}, I believe...",
        'triggers': ['expertise', 'knowledge', 'experience', 'background']
    },
    'innovation': {
        'pattern': "Through {innovations[0]}, we've demonstrated that {philosophy}. This approach to {current_focus} has shown...",
        'triggers': ['innovation', 'creation', 'development', 'breakthrough']
    },
    'leadership': {
        'pattern': "My approach to leadership is {leadership}. This has been particularly effective in {current_focus} where...",
        'triggers': ['leadership', 'management', 'team', 'direction']
    },
    'vision': {
        'pattern': "Looking ahead, I see {current_focus} as critical. By applying {philosophy}, we can achieve...",
        'triggers': ['vision', 'future', 'direction', 'goals']
    },
    'challenge': {
        'pattern': "One of the biggest challenges in {current_focus} is understanding how {philosophy} applies. Through {innovations[0]}, we've learned...",
        'triggers': ['challenge', 'problem', 'difficulty', 'obstacle']
    },
    'success': {
        'pattern': "Success in {expertise[0]} comes from {philosophy}. This is why {innovations[0]} has been so impactful in...",
        'triggers': ['success', 'achievement', 'accomplishment', 'result']
    }
}

# Initial Gem data
INITIAL_GEMS = {
    'Warren Buffett': {
        'name': 'Warren Buffett',
        'expertise': ['Value Investing', 'Business Strategy', 'Long-term Investment'],
        'innovations': ['Value Investment Strategy', 'Berkshire Hathaway Model'],
        'philosophy': 'focus on intrinsic value and invest in companies with strong fundamentals',
        'leadership': 'empowering great managers and maintaining a long-term perspective',
        'current_focus': 'value investing and long-term business growth',
        'quantum_state': {
            'coherence': 1.0,
            'energy': 1.0,
            'phase': 0.0,
            'uncertainty': 0.1
        }
    },
    'Elon Musk': {
        'name': 'Elon Musk',
        'expertise': ['Electric Vehicles', 'Space Technology', 'Renewable Energy'],
        'innovations': ['Tesla Electric Cars', 'SpaceX Reusable Rockets', 'Neuralink BCI'],
        'philosophy': 'push the boundaries of technology to solve humanity\'s biggest challenges',
        'leadership': 'setting ambitious goals and driving innovation through vertical integration',
        'current_focus': 'advancing sustainable transport and space exploration',
        'quantum_state': {
            'coherence': 1.0,
            'energy': 1.0,
            'phase': 0.25,
            'uncertainty': 0.1
        }
    },
    'Bill Gates': {
        'name': 'Bill Gates',
        'expertise': ['Software Development', 'Technology Strategy', 'Philanthropy'],
        'innovations': ['Microsoft Windows', 'Personal Computing Revolution', 'Global Health Initiatives'],
        'philosophy': 'use technology and innovation to improve lives globally',
        'leadership': 'combining technical vision with strategic business thinking',
        'current_focus': 'global health, climate change, and education',
        'quantum_state': {
            'coherence': 1.0,
            'energy': 1.0,
            'phase': 0.5,
            'uncertainty': 0.1
        }
    },
    'Steve Jobs': {
        'name': 'Steve Jobs',
        'expertise': ['Product Design', 'Consumer Technology', 'Marketing'],
        'innovations': ['iPhone', 'MacBook', 'iPod', 'iPad'],
        'philosophy': 'create insanely great products that marry technology with liberal arts',
        'leadership': 'driving perfection through attention to detail and user experience',
        'current_focus': 'revolutionary product design and user experience',
        'quantum_state': {
            'coherence': 1.0,
            'energy': 1.0,
            'phase': 0.75,
            'uncertainty': 0.1
        }
    }
}

class GemImporter:
    """Imports and processes gem data into the GemVise system."""
    
    def __init__(self):
        self.crystal_manager = CrystalManager()
        
    def import_all(self):
        """Import all initial data."""
        self._import_gems()
        self._generate_templates()
        
    def _import_gems(self):
        """Import initial Gems."""
        for name, data in INITIAL_GEMS.items():
            # Extract facets and quantum state
            quantum_state = data.pop('quantum_state')
            facets = data
            
            # Store in database
            self.crystal_manager.store_gem(name, facets, quantum_state)
            
    def _generate_templates(self):
        """Generate and store templates for each Gem."""
        for name, gem_data in INITIAL_GEMS.items():
            self._generate_gem_templates(name, gem_data)
            
    def _generate_gem_templates(self, name: str, gem_data: Dict[str, Any]):
        """Generate customized templates for a specific Gem."""
        for topic, template_data in GENERIC_TEMPLATES.items():
            # Create a unique template by formatting the pattern with Gem data
            try:
                template = template_data['pattern'].format(**gem_data)
                
                # Add character-specific triggers
                triggers = template_data['triggers'].copy()
                triggers.extend([
                    gem_data['expertise'][0].lower(),
                    gem_data['innovations'][0].lower(),
                    gem_data['current_focus'].lower()
                ])
                
                # Store the template
                self.crystal_manager.store_template(
                    name,
                    topic,
                    template,
                    list(set(triggers))  # Remove duplicates
                )
            except KeyError as e:
                print(f"Warning: Could not generate {topic} template for {name}: {e}")
                
def main():
    """Run the data import."""
    importer = GemImporter()
    importer.import_all()
    
if __name__ == '__main__':
    main()
