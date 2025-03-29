from typing import List, Dict, Any
from datetime import datetime
import sqlite3
import json
import numpy as np
from pathlib import Path

class MemoryManager:
    def __init__(self, db_path: str = "gemvise_memory.db"):
        """Initialize the memory management system.
        
        Args:
            db_path: Path to SQLite database file
        """
        self.db_path = db_path
        self._init_db()
        
    def _init_db(self):
        """Initialize the database schema."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        # Create tables
        c.execute('''
            CREATE TABLE IF NOT EXISTS knowledge_base (
                id INTEGER PRIMARY KEY,
                expert_name TEXT,
                source TEXT,
                embedding BLOB,
                created_at DATETIME
            )
        ''')
        
        c.execute('''
            CREATE TABLE IF NOT EXISTS interactions (
                id INTEGER PRIMARY KEY,
                expert_name TEXT,
                query TEXT,
                response TEXT,
                timestamp DATETIME
            )
        ''')
        
        conn.commit()
        conn.close()
        
    def store_knowledge(self, 
                       expert_name: str, 
                       source: str, 
                       embedding: List[float]):
        """Store knowledge embedding in the database.
        
        Args:
            expert_name: Name of the expert
            source: Source of the knowledge
            embedding: Vector embedding of the knowledge
        """
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        c.execute('''
            INSERT INTO knowledge_base (expert_name, source, embedding, created_at)
            VALUES (?, ?, ?, ?)
        ''', (expert_name, source, json.dumps(embedding), datetime.now()))
        
        conn.commit()
        conn.close()
        
    def store_interaction(self,
                         expert_name: str,
                         query: str,
                         response: str,
                         timestamp: datetime):
        """Store an interaction in the database.
        
        Args:
            expert_name: Name of the expert
            query: User query
            response: Expert's response
            timestamp: Time of interaction
        """
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        c.execute('''
            INSERT INTO interactions (expert_name, query, response, timestamp)
            VALUES (?, ?, ?, ?)
        ''', (expert_name, query, response, timestamp))
        
        conn.commit()
        conn.close()
        
    def get_relevant_context(self, 
                           expert_name: str, 
                           query: str,
                           k: int = 5) -> List[Dict[str, Any]]:
        """Retrieve relevant context for a query.
        
        Args:
            expert_name: Name of the expert
            query: The query string
            k: Number of relevant items to retrieve
            
        Returns:
            List of relevant context items
        """
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        # Get all knowledge embeddings for the expert
        c.execute('''
            SELECT source, embedding
            FROM knowledge_base
            WHERE expert_name = ?
        ''', (expert_name,))
        
        results = c.fetchall()
        if not results:
            return []
            
        # Convert embeddings back to numpy arrays
        sources = []
        embeddings = []
        for source, emb in results:
            sources.append(source)
            embeddings.append(np.array(json.loads(emb)))
            
        # TODO: Implement similarity search
        # For now, return the k most recent items
        return sources[:k]
