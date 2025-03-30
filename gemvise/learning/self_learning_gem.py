"""Self-learning gem that simulates learning from different aspects of oneself."""

from typing import Dict, Any, List, Set
from ..core.gem_base import GemState, QuantumState
import random

class SelfLearningGem:
    """A gem that learns through self-dialogue between different aspects."""
    
    def __init__(self, name: str, expertise: str, initial_knowledge: Set[str]):
        """Initialize a self-learning gem with specific expertise."""
        self.name = name
        self.expertise = expertise
        self.knowledge = initial_knowledge
        self.reflections = []  # Track insights gained
        self.personas = self._create_personas()
        self.current_focus = None
        
    def _create_personas(self) -> Dict[str, Dict[str, Any]]:
        """Create different personas for self-dialogue."""
        return {
            "teacher": {
                "role": "Expert Teacher",
                "style": "Clear, structured, methodical",
                "quantum_state": QuantumState(
                    coherence=0.9,  # Very clear
                    energy=0.7,     # Steady energy
                    phase=0.8,      # Advanced understanding
                    uncertainty=0.2  # Confident
                )
            },
            "student": {
                "role": "Curious Learner",
                "style": "Questioning, exploring, connecting",
                "quantum_state": QuantumState(
                    coherence=0.5,  # Building understanding
                    energy=0.9,     # High enthusiasm
                    phase=0.4,      # Early stage
                    uncertainty=0.6  # Open to discovery
                )
            },
            "critic": {
                "role": "Analytical Critic",
                "style": "Challenging, refining, testing",
                "quantum_state": QuantumState(
                    coherence=0.8,  # Clear analysis
                    energy=0.6,     # Measured energy
                    phase=0.7,      # Developed perspective
                    uncertainty=0.4  # Balanced skepticism
                )
            },
            "innovator": {
                "role": "Creative Innovator",
                "style": "Connecting, synthesizing, creating",
                "quantum_state": QuantumState(
                    coherence=0.6,  # Emerging patterns
                    energy=0.8,     # High creativity
                    phase=0.6,      # Building new ideas
                    uncertainty=0.5  # Open to possibilities
                )
            }
        }
        
    async def self_learning_session(self, gemvise, topic: str, 
                                  exchanges: int = 63) -> List[Dict[str, Any]]:
        """Conduct a self-learning session on a topic."""
        self.current_focus = topic
        session_insights = []
        
        for i in range(exchanges):
            # Select two personas for dialogue
            personas = self._select_personas_for_exchange(i)
            
            # Generate dialogue between personas
            exchange = await self._conduct_exchange(gemvise, personas, topic, i)
            session_insights.append(exchange)
            
            # Update knowledge based on insights
            self._integrate_insights(exchange)
            
        return session_insights
        
    def _select_personas_for_exchange(self, exchange_num: int) -> List[str]:
        """Select appropriate personas based on learning stage."""
        if exchange_num < 21:  # First third: foundational learning
            return ["teacher", "student"]
        elif exchange_num < 42:  # Second third: critical analysis
            return ["critic", random.choice(["teacher", "student"])]
        else:  # Final third: synthesis and innovation
            return ["innovator", random.choice(["teacher", "critic"])]
            
    async def _conduct_exchange(self, gemvise, personas: List[str], 
                              topic: str, exchange_num: int) -> Dict[str, Any]:
        """Conduct an exchange between two personas."""
        persona1, persona2 = personas
        p1, p2 = self.personas[persona1], self.personas[persona2]
        
        # First persona's perspective
        prompt1 = self._create_prompt(p1["role"], topic, exchange_num)
        response1 = await gemvise.get_response(
            prompt1,
            GemState.POLISHED,
            p1["quantum_state"]
        )
        
        # Second persona's response
        prompt2 = self._create_response_prompt(
            p2["role"],
            topic,
            response1,
            exchange_num
        )
        response2 = await gemvise.get_response(
            prompt2,
            GemState.POLISHED,
            p2["quantum_state"]
        )
        
        return {
            'exchange_num': exchange_num + 1,
            'topic': topic,
            'persona1': persona1,
            'persona2': persona2,
            'perspective1': response1,
            'perspective2': response2,
            'insights': self._extract_insights(response1, response2)
        }
        
    def _create_prompt(self, role: str, topic: str, exchange_num: int) -> str:
        """Create appropriate prompt based on role and learning stage."""
        stage = "early" if exchange_num < 21 else "middle" if exchange_num < 42 else "advanced"
        
        prompts = {
            "Expert Teacher": f"As an expert in {self.expertise}, explain {topic} focusing on core principles and practical applications. Stage: {stage}",
            "Curious Learner": f"As someone learning about {topic}, what key questions and connections are emerging? Stage: {stage}",
            "Analytical Critic": f"Critically analyze the current understanding of {topic}, identifying gaps and potential improvements. Stage: {stage}",
            "Creative Innovator": f"Explore new possibilities and connections for {topic}, synthesizing insights from {self.expertise}. Stage: {stage}"
        }
        return prompts.get(role, "")
        
    def _create_response_prompt(self, role: str, topic: str, 
                              previous_response: str, exchange_num: int) -> str:
        """Create response prompt based on previous perspective."""
        return f"""As {role}, respond to this perspective on {topic}:

{previous_response}

Consider:
1. What resonates with your understanding?
2. What needs clarification or expansion?
3. What new insights or connections do you see?
4. How does this relate to {self.expertise}?"""
        
    def _extract_insights(self, response1: str, response2: str) -> List[str]:
        """Extract key insights from the dialogue."""
        # This would use NLP/LLM to identify key insights
        # For now, we'll store the raw responses
        return [
            f"Perspective 1: {response1[:100]}...",
            f"Perspective 2: {response2[:100]}..."
        ]
        
    def _integrate_insights(self, exchange: Dict[str, Any]):
        """Integrate insights into knowledge base."""
        self.reflections.extend(exchange['insights'])
        
    def get_learning_summary(self) -> Dict[str, Any]:
        """Get summary of learning progress."""
        return {
            'expertise': self.expertise,
            'current_focus': self.current_focus,
            'knowledge_items': len(self.knowledge),
            'reflections': len(self.reflections),
            'recent_insights': self.reflections[-5:] if self.reflections else []
        }
