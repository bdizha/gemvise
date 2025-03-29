"""Model configuration for GemVise."""

from typing import Dict, Any
import os

class ModelConfig:
    """Configuration for language models and embeddings."""
    
    def __init__(self):
        self.llm_config = {
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
            'coherence_decay': 0.95,  # How quickly coherence decays
            'energy_recovery': 0.05,   # How quickly energy recovers
            'phase_shift': 0.1,        # How much phase shifts per interaction
            'uncertainty_growth': 0.02  # How uncertainty grows with each interaction
        }
        
    def update_llm_config(self, **kwargs):
        """Update LLM configuration."""
        self.llm_config.update(kwargs)
        
    def update_embedding_config(self, **kwargs):
        """Update embedding configuration."""
        self.embedding_config.update(kwargs)
        
    def update_quantum_config(self, **kwargs):
        """Update quantum simulation parameters."""
        self.quantum_config.update(kwargs)
