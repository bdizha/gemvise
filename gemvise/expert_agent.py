from typing import List, Dict, Any
import numpy as np
from datetime import datetime
from .memory_manager import MemoryManager
from .llm_router import LLMRouter

class ExpertAgent:
    def __init__(self, 
                 name: str,
                 expertise_domains: List[str],
                 memory_manager: MemoryManager,
                 llm_router: LLMRouter):
        """Initialize an expert agent.
        
        Args:
            name: Name of the expert
            expertise_domains: List of domains the expert specializes in
            memory_manager: Memory management system
            llm_router: LLM routing system
        """
        self.name = name
        self.expertise_domains = expertise_domains
        self.memory_manager = memory_manager
        self.llm_router = llm_router
        self.state_vector = np.ones(len(expertise_domains)) / len(expertise_domains)
        
    def initialize_knowledge(self, knowledge_sources: List[str]):
        """Initialize expert knowledge from various sources.
        
        Args:
            knowledge_sources: List of knowledge source identifiers
        """
        for source in knowledge_sources:
            # Process and embed knowledge from each source
            embedding = self.llm_router.get_embedding(source)
            self.memory_manager.store_knowledge(
                self.name,
                source,
                embedding
            )
            
    def respond(self, query: str) -> str:
        """Generate a response to a query.
        
        Args:
            query: The query string
            
        Returns:
            Generated response
        """
        # Get relevant context from memory
        context = self.memory_manager.get_relevant_context(
            self.name,
            query
        )
        
        # Prepare expert context
        expert_context = {
            'name': self.name,
            'expertise': self.expertise_domains,
            'state_vector': self.state_vector.tolist(),
            'relevant_memories': context
        }
        
        # Generate response using appropriate LLM
        response = self.llm_router.generate_response(
            query,
            expert_context
        )
        
        # Store interaction in memory
        self.memory_manager.store_interaction(
            self.name,
            query,
            response,
            datetime.now()
        )
        
        return response
        
    def update_state(self, feedback: Dict[str, Any]):
        """Update expert's state based on feedback.
        
        Args:
            feedback: Dictionary containing feedback information
        """
        # Update state vector based on interaction success
        if feedback.get('success', False):
            domain_idx = self.expertise_domains.index(feedback['domain'])
            self.state_vector[domain_idx] *= 1.1
            self.state_vector /= self.state_vector.sum()  # Normalize
