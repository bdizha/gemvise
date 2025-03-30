#!/usr/bin/env python3
"""Populate GemVise with top billionaire profiles using Gemini's capabilities."""

import asyncio
import os
from typing import Dict, Any, List
import google.generativeai as genai
from dotenv import load_dotenv

from gemvise.core.gemvise import GemVise
from gemvise.data_collectors.gem_collector import GemCollector

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel(os.getenv("GEMINI_MODEL", "gemini-1.5-pro"))

async def get_top_billionaires() -> List[str]:
    """Get list of top billionaires using Gemini."""
    prompt = """
    List the names of the top 100 billionaires in the world.
    Format: Return only the names, one per line.
    Example:
    Elon Musk
    Bernard Arnault
    Jeff Bezos
    """
    
    response = await model.generate_content_async(prompt)
    names = response.text.strip().split("\n")
    return [name.strip() for name in names if name.strip()]

async def get_gem_attributes(name: str) -> Dict[str, Any]:
    """Get detailed attributes for a billionaire using Gemini."""
    prompt = f"""
    Analyze {name} and provide the following information in a structured way:
    1. Areas of expertise (list 4-6 key areas)
    2. Major innovations or contributions (list 4-6 key items)
    3. Business/leadership philosophy (1-2 sentences)
    4. Leadership style (1-2 sentences)
    5. Current focus areas (1-2 sentences)
    
    Format the response as clear bullet points.
    """
    
    response = await model.generate_content_async(prompt)
    text = response.text
    
    # Parse the response into structured data
    facets = {
        "name": name,
        "expertise": [],
        "innovations": [],
        "philosophy": "",
        "leadership": "",
        "current_focus": ""
    }
    
    # Simple parsing logic (you might want to make this more robust)
    sections = text.split("\n")
    current_section = None
    
    for line in sections:
        line = line.strip()
        if "expertise" in line.lower():
            current_section = "expertise"
        elif "innovations" in line.lower() or "contributions" in line.lower():
            current_section = "innovations"
        elif "philosophy" in line.lower():
            current_section = "philosophy"
        elif "leadership style" in line.lower():
            current_section = "leadership"
        elif "current focus" in line.lower():
            current_section = "current_focus"
        elif line and current_section:
            if current_section in ["expertise", "innovations"]:
                if "•" in line or "-" in line:
                    item = line.replace("•", "").replace("-", "").strip()
                    facets[current_section].append(item)
            else:
                facets[current_section] = line.replace("•", "").replace("-", "").strip()
    
    return facets

def calculate_quantum_state(facets: Dict[str, Any]) -> Dict[str, float]:
    """Calculate quantum state based on gem attributes."""
    # This is a simplified calculation - you might want to make it more sophisticated
    return {
        "coherence": 0.8,  # High coherence for successful business leaders
        "energy": 0.9,     # High energy as active business leaders
        "phase": 0.5,      # Mid-phase in their journey
        "uncertainty": 0.3  # Relatively low uncertainty due to established success
    }

async def main():
    system = GemVise()
    collector = GemCollector()
    
    print("Fetching top billionaires...")
    billionaires = await get_top_billionaires()
    
    print(f"\nFound {len(billionaires)} billionaires. Adding them to GemVise...")
    for name in billionaires:
        print(f"\nProcessing {name}...")
        try:
            # Get detailed attributes
            facets = await get_gem_attributes(name)
            
            # Calculate quantum state
            quantum_state = calculate_quantum_state(facets)
            
            # Add to system
            system.cut_gem(name, facets, quantum_state)
            print(f"Successfully added {name} to GemVise")
            
            # Small delay to avoid rate limiting
            await asyncio.sleep(1)
            
        except Exception as e:
            print(f"Error processing {name}: {str(e)}")
    
    print("\nDatabase population complete!")

if __name__ == "__main__":
    asyncio.run(main())
