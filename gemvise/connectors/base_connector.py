"""Base class for LLM connectors."""

from abc import ABC, abstractmethod
from typing import Dict, Any, Optional

class BaseConnector(ABC):
    """Abstract base class for LLM connectors."""
    
    def __init__(self, config: Optional[Dict[str, Any]] = None):
        """Initialize the connector with optional config."""
        self.config = config or {}
        
    @abstractmethod
    async def generate(self, prompt: str, config: Optional[Dict[str, Any]] = None) -> str:
        """Generate a response for the given prompt."""
        pass
        
    def _merge_config(self, config: Optional[Dict[str, Any]]) -> Dict[str, Any]:
        """Merge provided config with default config."""
        if not config:
            return self.config.copy()
            
        merged = self.config.copy()
        merged.update(config)
        return merged
