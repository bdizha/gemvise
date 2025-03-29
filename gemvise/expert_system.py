from typing import Dict, Optional, List, Any, Tuple
import numpy as np
from pathlib import Path
import json
import sqlite3
from datetime import datetime
import openai
from dotenv import load_dotenv
import os

load_dotenv()

class ModelConfig:
    """Configuration for different LLM models and their fallbacks."""
    
    EMBEDDING_MODELS = {
        'primary': {
            'name': 'text-embedding-3-large',
            'dimensions': 3072,
            'metadata': {'quality': 'high', 'latency': 'medium'}
        },
        'fallback': {
            'name': 'text-embedding-3-small',
            'dimensions': 1536,
            'metadata': {'quality': 'good', 'latency': 'low'}
        }
    }
    
    REFLECTION_MODELS = {
        'primary': {
            'name': 'gpt-4-turbo-preview',
            'temperature': 0.7,
            'metadata': {'quality': 'highest', 'consistency': 'high'}
        },
        'fallback': {
            'name': 'gpt-3.5-turbo',
            'temperature': 0.8,
            'metadata': {'quality': 'good', 'consistency': 'medium'}
        }
    }

class Gem:
    """A Gem represents a unique character with quantum-inspired knowledge and personality."""
    
    def __init__(self, name: str, facets: Dict[str, Any] = None):
        self.name = name
        self.facets = facets or {}
        self.quantum_state = {}
        self.resonance_matrix = {}
        self.uncertainty = 0.1
        self.coherence = 1.0
        self.model_config = ModelConfig()
        self._init_crystalline_memory()
        
    def _get_embedding(self, text: str) -> Tuple[List[float], Dict[str, Any]]:
        """Get embeddings with fallback strategy."""
        for model_type in ['primary', 'fallback']:
            model = self.model_config.EMBEDDING_MODELS[model_type]
            try:
                response = openai.Embedding.create(
                    input=text,
                    model=model['name']
                )
                return response['data'][0]['embedding'], model['metadata']
            except Exception as e:
                if model_type == 'fallback':
                    # If even fallback fails, use simple embedding
                    simple_embedding = [np.mean([ord(c) for c in text])]
                    return simple_embedding * 8, {'quality': 'basic', 'latency': 'minimal'}
                continue

    def _generate_reflection(self, system_prompt: str, user_prompt: str) -> Tuple[str, Dict[str, Any]]:
        """Generate reflection with fallback strategy."""
        for model_type in ['primary', 'fallback']:
            model = self.model_config.REFLECTION_MODELS[model_type]
            try:
                response = openai.ChatCompletion.create(
                    model=model['name'],
                    messages=[
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_prompt}
                    ],
                    temperature=model['temperature']
                )
                return response.choices[0].message.content, model['metadata']
            except Exception as e:
                if model_type == 'fallback':
                    # If even fallback fails, use template response
                    return (f"As {self.name}, I would say: {user_prompt}", 
                           {'quality': 'basic', 'consistency': 'low'})
                continue

    def absorb(self, reflection: str, metadata: Dict[str, Any] = None):
        """Absorb new knowledge into the Gem's crystal lattice."""
        resonance, embed_metadata = self._get_embedding(reflection)
        
        # Calculate quantum properties with quality factor
        quality_factor = 1.0 if embed_metadata['quality'] == 'high' else 0.8
        energy = np.linalg.norm(resonance) * quality_factor
        phase = np.random.uniform(0, 2*np.pi)
        
        # Enhance metadata with embedding information
        full_metadata = {
            **(metadata or {}),
            'embedding_quality': embed_metadata['quality'],
            'embedding_latency': embed_metadata['latency']
        }
        
        self.conn.execute(
            'INSERT INTO crystal_lattice (reflection, resonance, energy, phase, timestamp, metadata) VALUES (?, ?, ?, ?, ?, ?)',
            (reflection, json.dumps(resonance), float(energy), phase, datetime.now(), json.dumps(full_metadata))
        )
        self.conn.commit()
        
        self._update_quantum_state(reflection, resonance, energy, phase)

    def reflect(self, vise: str) -> str:
        """Generate a reflection in response to a Vise (conversation/query)."""
        vise_resonance, _ = self._get_embedding(vise)
        
        # Retrieve and process relevant reflections
        cursor = self.conn.execute('SELECT reflection, resonance, energy, phase FROM crystal_lattice')
        reflections = []
        
        for content, res_str, energy, phase in cursor:
            resonance = json.loads(res_str)
            # Enhanced quantum-weighted relevance
            base_similarity = np.dot(vise_resonance, resonance)
            quantum_factor = np.cos(phase) * energy * self.coherence
            uncertainty_noise = np.random.normal(0, self.uncertainty)
            total_relevance = (base_similarity * (1 + quantum_factor)) + uncertainty_noise
            reflections.append((content, total_relevance))
        
        reflections.sort(key=lambda x: x[1], reverse=True)
        context = [r[0] for r in reflections[:3]]
        
        # Generate reflection with model selection
        system_prompt = self._generate_system_prompt()
        user_prompt = self._generate_user_prompt(vise, context)
        
        reflection, model_metadata = self._generate_reflection(system_prompt, user_prompt)
        
        # Update quantum state based on reflection quality
        quality_factor = 1.0 if model_metadata['consistency'] == 'high' else 0.9
        self.coherence *= quality_factor
        
        return reflection

    def _init_crystalline_memory(self):
        """Initialize the Gem's crystalline memory structure."""
        db_path = Path(f"gem_{self.name.lower()}.db")
        self.conn = sqlite3.connect(str(db_path))
        self.conn.execute('''
            CREATE TABLE IF NOT EXISTS crystal_lattice (
                id INTEGER PRIMARY KEY,
                reflection TEXT,      -- The memory content
                resonance TEXT,       -- The embedding
                energy REAL,         -- Importance/relevance score
                phase REAL,          -- Quantum phase
                timestamp DATETIME,
                metadata TEXT
            )
        ''')
        self.conn.commit()

    def _update_quantum_state(self, reflection: str, resonance: List[float], energy: float, phase: float):
        """Update the Gem's quantum state with new knowledge."""
        state_key = hash(reflection) % 100
        
        # Apply uncertainty principle
        noisy_resonance = np.array(resonance) + np.random.normal(0, self.uncertainty, len(resonance))
        self.quantum_state[state_key] = {
            'resonance': noisy_resonance.tolist(),
            'energy': energy,
            'phase': phase
        }
        
        # Update resonance matrix with quantum interference
        for other_key in self.quantum_state:
            if other_key != state_key:
                interference = self._compute_quantum_interference(
                    self.quantum_state[state_key],
                    self.quantum_state[other_key]
                )
                self.resonance_matrix[(state_key, other_key)] = interference
        
        # Update coherence
        self.coherence *= 0.99  # Gradual decoherence
        if len(self.quantum_state) > 10:
            self.coherence *= 0.95  # Faster decoherence with more knowledge

    def _compute_quantum_interference(self, state1: Dict, state2: Dict) -> float:
        """Compute quantum interference between two states."""
        resonance_overlap = np.dot(state1['resonance'], state2['resonance'])
        phase_difference = np.cos(state1['phase'] - state2['phase'])
        return float(resonance_overlap * phase_difference)

    def _generate_system_prompt(self) -> str:
        """Generate system prompt based on Gem's facets."""
        return f"""You are {self.name}. Your characteristics:
- Expertise: {', '.join(self.facets.get('expertise', []))}
- Style: {self.facets.get('cut', 'Clear and precise')}
- Background: {self.facets.get('origin', '')}

Maintain this persona consistently. Speak with authority in your areas of expertise.
Your responses should reflect your unique perspective and experience."""

    def _generate_user_prompt(self, vise: str, context: List[str]) -> str:
        """Generate user prompt with context."""
        return f"""Drawing upon these relevant insights:
{chr(10).join(f'- {c}' for c in context)}

Please respond to this question while maintaining your character:
{vise}"""

    def get_facets(self) -> Dict[str, Any]:
        """Get Gem's facets and quantum state information."""
        return {
            "name": self.name,
            "facets": self.facets,
            "clarity": len(self.quantum_state),
            "resonance_depth": len(self.resonance_matrix),
            "coherence": self.coherence,
            "uncertainty": self.uncertainty
        }

class GemVise:
    """GemVise system for managing Gems and their interactions."""
    
    def __init__(self):
        """Initialize the GemVise system."""
        self.gems: Dict[str, Gem] = {}
        
    def cut_gem(self, name: str, facets: Dict[str, Any] = None) -> Gem:
        """Create a new Gem (character).
        
        Args:
            name: Name of the Gem
            facets: Dict containing Gem's facets (personality traits and expertise)
        """
        if name in self.gems:
            raise ValueError(f"Gem {name} already exists in collection")
            
        gem = Gem(name, facets)
        self.gems[name] = gem
        return gem
    
    def engage_vise(self, gem_name: str, vise: str) -> str:
        """Engage a Gem in conversation using a Vise.
        
        Args:
            gem_name: Name of the Gem to engage
            vise: The conversation prompt
            
        Returns:
            Gem's reflection
        """
        if gem_name not in self.gems:
            raise ValueError(f"Gem {gem_name} not found in collection")
            
        return self.gems[gem_name].reflect(vise)
    
    def find_resonant_gem(self, vise: str) -> Gem:
        """Find the Gem that resonates most strongly with a given Vise.
        
        Args:
            vise: The conversation prompt
            
        Returns:
            Most resonant Gem
        """
        # TODO: Implement Gem resonance matching
        pass
