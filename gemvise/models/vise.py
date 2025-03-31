"""Vise model for representing conversations and interactions with Gems."""

from typing import Dict, Any, List, Optional
from datetime import datetime
from enum import Enum
from dataclasses import dataclass

class ViseType(Enum):
    """Types of conversations/interactions with Gems."""
    CHAT = "chat"           # Direct conversation
    QUERY = "query"         # Information request
    REFLECTION = "reflect"  # Deeper contemplation
    POLISH = "polish"       # Refinement interaction

@dataclass
class ViseContext:
    """Context for a Vise interaction."""
    gem_name: str              # Name of the gem being engaged
    previous_vises: List[str]  # Previous related interactions
    facets: Dict[str, Any]     # Relevant gem facets for this interaction
    auth_info: Optional[Dict[str, Any]] = None  # Authentication info if needed

class Vise:
    """Represents a conversation or interaction with a Gem."""
    
    def __init__(self, 
                 content: str,
                 vise_type: ViseType,
                 context: Optional[ViseContext] = None):
        """Initialize a Vise.
        
        Args:
            content: The actual content of the interaction
            vise_type: Type of interaction
            context: Optional context for the interaction
        """
        self.content = content
        self.vise_type = vise_type
        self.context = context
        self.created_at = datetime.now()
        self.response = None
        self.metadata = {}
        
    def set_response(self, response: str, metadata: Dict[str, Any] = None):
        """Set the response from a Gem."""
        self.response = response
        if metadata:
            self.metadata.update(metadata)
        self.metadata['responded_at'] = datetime.now()
        
    def to_dict(self) -> Dict[str, Any]:
        """Convert Vise to dictionary for storage."""
        return {
            'content': self.content,
            'type': self.vise_type.value,
            'context': {
                'gem_name': self.context.gem_name,
                'previous_vises': self.context.previous_vises,
                'facets': self.context.facets,
                'auth_info': self.context.auth_info
            } if self.context else None,
            'created_at': self.created_at.isoformat(),
            'response': self.response,
            'metadata': self.metadata
        }
        
    @classmethod
    def from_dict(cls, data: Dict[str, Any]) -> 'Vise':
        """Create Vise from dictionary."""
        context = ViseContext(
            gem_name=data['context']['gem_name'],
            previous_vises=data['context']['previous_vises'],
            facets=data['context']['facets'],
            auth_info=data['context'].get('auth_info')
        ) if data.get('context') else None
        
        vise = cls(
            content=data['content'],
            vise_type=ViseType(data['type']),
            context=context
        )
        vise.created_at = datetime.fromisoformat(data['created_at'])
        vise.response = data.get('response')
        vise.metadata = data.get('metadata', {})
        return vise
