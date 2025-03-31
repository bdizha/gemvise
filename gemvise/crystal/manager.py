"""Crystal management for character interactions."""

from typing import Dict, Any, List, Optional
import sqlite3
from datetime import datetime
import json
from pathlib import Path

class CrystalManager:
    """Manages persistent storage of character interactions and knowledge."""
    
    def __init__(self, db_path: str = "data/crystal/gemvise.db"):
        self.db_path = db_path
        self._init_db()
        
    def _init_db(self):
        """Initialize the database schema."""
        Path(self.db_path).parent.mkdir(parents=True, exist_ok=True)
        
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        # Create gems table (core character data)
        c.execute('''
            CREATE TABLE IF NOT EXISTS gems (
                name TEXT PRIMARY KEY,
                expertise TEXT,
                innovations TEXT,
                philosophy TEXT,
                leadership TEXT,
                current_focus TEXT,
                quantum_state TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                last_active DATETIME
            )
        ''')
        
        # Create interactions table
        c.execute('''
            CREATE TABLE IF NOT EXISTS interactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                gem_name TEXT,
                query TEXT,
                response TEXT,
                timestamp DATETIME,
                coherence REAL,
                quantum_state TEXT,
                FOREIGN KEY(gem_name) REFERENCES gems(name)
            )
        ''')
        
        # Create gem relationships table
        c.execute('''
            CREATE TABLE IF NOT EXISTS relationships (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                gem1 TEXT,
                gem2 TEXT,
                interaction_count INTEGER DEFAULT 0,
                last_interaction DATETIME,
                resonance_score REAL DEFAULT 0.0,
                entanglement_score REAL DEFAULT 0.0,
                FOREIGN KEY(gem1) REFERENCES gems(name),
                FOREIGN KEY(gem2) REFERENCES gems(name)
            )
        ''')
        
        # Create response templates table
        c.execute('''
            CREATE TABLE IF NOT EXISTS response_templates (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                gem_name TEXT,
                topic TEXT,
                template TEXT,
                context_triggers TEXT,
                sentiment REAL DEFAULT 0.0,
                usage_count INTEGER DEFAULT 0,
                last_used DATETIME,
                UNIQUE(gem_name, topic, template),
                FOREIGN KEY(gem_name) REFERENCES gems(name)
            )
        ''')
        
        conn.commit()
        conn.close()
        
    def store_gem(self, name: str, facets: Dict[str, Any], quantum_state: Dict[str, float]):
        """Store or update a Gem's data."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                INSERT OR REPLACE INTO gems 
                (name, expertise, innovations, philosophy, leadership, current_focus, quantum_state, last_active)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                name,
                json.dumps(facets.get('expertise', [])),
                json.dumps(facets.get('innovations', [])),
                facets.get('philosophy', ''),
                facets.get('leadership', ''),
                facets.get('current_focus', ''),
                json.dumps(quantum_state),
                datetime.now()
            ))
            conn.commit()
        finally:
            conn.close()
            
    def load_gem(self, name: str) -> Optional[Dict]:
        """Load a Gem's data from storage."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                SELECT expertise, innovations, philosophy, leadership, current_focus, quantum_state
                FROM gems WHERE name = ?
            ''', (name,))
            row = c.fetchone()
            
            if row:
                return {
                    'name': name,
                    'expertise': json.loads(row[0]),
                    'innovations': json.loads(row[1]),
                    'philosophy': row[2],
                    'leadership': row[3],
                    'current_focus': row[4],
                    'quantum_state': json.loads(row[5])
                }
            return None
        finally:
            conn.close()
            
    def list_gems(self) -> List[str]:
        """List all available Gems."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('SELECT name FROM gems')
            return [row[0] for row in c.fetchall()]
        finally:
            conn.close()
            
    def store_template(self, gem_name: str, topic: str, template: str, context_triggers: List[str]):
        """Store a response template for a Gem."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                INSERT INTO response_templates 
                (gem_name, topic, template, context_triggers)
                VALUES (?, ?, ?, ?)
            ''', (
                gem_name,
                topic,
                template,
                json.dumps(context_triggers)
            ))
            conn.commit()
        except sqlite3.IntegrityError:
            # Update existing template
            c.execute('''
                UPDATE response_templates
                SET context_triggers = ?, usage_count = 0, last_used = NULL
                WHERE gem_name = ? AND topic = ? AND template = ?
            ''', (json.dumps(context_triggers), gem_name, topic, template))
            conn.commit()
        finally:
            conn.close()
            
    def get_templates(self, gem_name: str, query: str) -> List[Dict[str, Any]]:
        """Get relevant response templates for a Gem and query."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                SELECT topic, template, context_triggers, usage_count
                FROM response_templates 
                WHERE gem_name = ?
                ORDER BY usage_count ASC, last_used ASC
            ''', (gem_name,))
            
            templates = []
            for row in c.fetchall():
                triggers = json.loads(row[2])
                # Check if any trigger words match the query
                if any(trigger.lower() in query.lower() for trigger in triggers):
                    templates.append({
                        'topic': row[0],
                        'template': row[1],
                        'triggers': triggers,
                        'usage_count': row[3]
                    })
            return templates
        finally:
            conn.close()
            
    def update_template_usage(self, gem_name: str, topic: str, template: str):
        """Update usage statistics for a template."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                UPDATE response_templates
                SET usage_count = usage_count + 1,
                    last_used = ?
                WHERE gem_name = ? AND topic = ? AND template = ?
            ''', (datetime.now(), gem_name, topic, template))
            conn.commit()
        finally:
            conn.close()
            
    def store_interaction(self, gem_name: str, query: str, response: str, 
                         timestamp: datetime, coherence: float = 1.0,
                         quantum_state: Dict[str, float] = None):
        """Store an interaction in the database."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                INSERT INTO interactions 
                (gem_name, query, response, timestamp, coherence, quantum_state)
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (
                gem_name,
                query,
                response,
                timestamp,
                coherence,
                json.dumps(quantum_state) if quantum_state else None
            ))
            conn.commit()
        finally:
            conn.close()
            
    def get_relevant_context(self, gem_name: str, query: str, k: int = 3) -> List[Dict[str, Any]]:
        """Get relevant historical context for a query."""
        conn = sqlite3.connect(self.db_path)
        c = conn.cursor()
        
        try:
            c.execute('''
                SELECT query, response, timestamp
                FROM interactions
                WHERE gem_name = ?
                ORDER BY timestamp DESC
                LIMIT ?
            ''', (gem_name, k))
            
            context = []
            for row in c.fetchall():
                context.append({
                    'query': row[0],
                    'response': row[1],
                    'timestamp': row[2]
                })
            return context
        finally:
            conn.close()
