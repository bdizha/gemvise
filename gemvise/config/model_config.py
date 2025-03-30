"""Model configuration for GemVise."""

from typing import Dict, Any
import os

class ModelConfig:
    """Configuration for language models and embeddings."""
    
    def __init__(self):
        self.gemini_config = {
            'model': 'gemini-1.5-pro',
            'temperature': 0.9,        # Higher temperature for more creative responses
            'top_p': 0.8,             # Nucleus sampling for diverse outputs
            'top_k': 40,              # Consider top 40 tokens for each step
            'candidate_count': 1,      # Number of response candidates
            'stop_sequences': [],      # Custom stop sequences
            'max_output_tokens': 2048, # Maximum response length
            'safety_settings': [       # Safety settings for responsible AI
                {
                    "category": "HARM_CATEGORY_HARASSMENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_HATE_SPEECH",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                }
            ]
        }
        
        self.openai_config = {
            'model': 'gpt-4-turbo-preview',
            'temperature': 0.7,
            'max_tokens': 150,
            'top_p': 0.9,
            'frequency_penalty': 0.0,
            'presence_penalty': 0.0
        }
        
        self.embedding_config = {
            'model': 'text-embedding-3-small',
            'dimensions': 1536
        }
        
        self.quantum_config = {
            'coherence_decay': 0.95,    # How quickly coherence decays
            'energy_recovery': 0.05,    # How quickly energy recovers
            'phase_shift': 0.1,         # How much phase shifts per interaction
            'uncertainty_growth': 0.02,  # How uncertainty grows with each interaction
            'entanglement_factor': 0.3  # How much gems influence each other
        }
        
        self.stylistic_config = {
            'elevation_level': 0.8,     # Level of language sophistication
            'metaphor_frequency': 0.6,   # Frequency of metaphorical expressions
            'value_emphasis': 0.9,      # Emphasis on value-driven messaging
            'encouragement_level': 0.7   # Level of encouraging tone
        }
        
        self.collection_config = {
            'sources': ['wikipedia', 'news', 'academic', 'social'],
            'update_frequency': 24,      # Hours between updates
            'depth_level': 0.8,          # How deep to go in source exploration
            'cross_validation': True,    # Validate across multiple sources
            'cache_duration': 72         # Hours to cache collected data
        }
        
    def update_gemini_config(self, **kwargs):
        """Update Gemini configuration."""
        self.gemini_config.update(kwargs)
        
    def update_openai_config(self, **kwargs):
        """Update OpenAI configuration."""
        self.openai_config.update(kwargs)
        
    def update_embedding_config(self, **kwargs):
        """Update embedding configuration."""
        self.embedding_config.update(kwargs)
        
    def update_quantum_config(self, **kwargs):
        """Update quantum simulation parameters."""
        self.quantum_config.update(kwargs)
        
    def update_stylistic_config(self, **kwargs):
        """Update stylistic transformation parameters."""
        self.stylistic_config.update(kwargs)
        
    def update_collection_config(self, **kwargs):
        """Update data collection parameters."""
        self.collection_config.update(kwargs)
        
    def get_gemini_generation_config(self) -> Dict[str, Any]:
        """Get Gemini-specific generation configuration."""
        return {
            'temperature': self.gemini_config['temperature'],
            'top_p': self.gemini_config['top_p'],
            'top_k': self.gemini_config['top_k'],
            'candidate_count': self.gemini_config['candidate_count'],
            'stop_sequences': self.gemini_config['stop_sequences'],
            'max_output_tokens': self.gemini_config['max_output_tokens'],
            'safety_settings': self.gemini_config['safety_settings']
        }
