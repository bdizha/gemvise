#!/usr/bin/env python3
"""Test script for GemVise interactions."""

import argparse
import asyncio
from gemvise.core.gemvise import GemVise
from gemvise.data_collectors.character_collector import GemCollector

async def test_gem_interaction(name: str, prompt: str):
    """Test interaction with a specific gem."""
    print("\n=== Testing Gemini interactions ===\n")
    
    # Initialize GemVise and GemCollector
    gemvise = GemVise()
    collector = GemCollector()
    
    print(f"=== Testing interactions with {name} ===\n")
    
    # Ensure gem exists in system
    try:
        gem_data = gemvise.memory_manager.load_gem(name)
        if not gem_data:
            print(f"Gem {name} not found in system. Fetching profile...")
            gem_data = await collector.get_gem_info(name)
            if gem_data:
                print(f"Added {name} to the system")
    except:
        print(f"Error loading gem {name}")
        return
        
    # Display gem attributes
    print("Gem attributes:")
    print(f"- name: {gem_data.get('name', '')}")
    print(f"- expertise: {', '.join(gem_data.get('expertise', []))}")
    print(f"- innovations: {', '.join(gem_data.get('innovations', []))}")
    print(f"- philosophy: {gem_data.get('philosophy', '')}")
    print(f"- leadership: {gem_data.get('leadership', '')}")
    print(f"- current_focus: {gem_data.get('current_focus', '')}")
    
    # Test interactions
    print("\nTest interactions:\n")
    print(f"Q: {prompt}")
    response = await gemvise.interact_with_gem(name, prompt)
    print(f"A: {response}\n")

def main():
    parser = argparse.ArgumentParser(description='Test GemVise interactions')
    parser.add_argument('-c', '--gem', type=str, required=True, help='Gem name')
    parser.add_argument('-p', '--prompt', type=str, required=True, help='Interaction prompt')
    
    args = parser.parse_args()
    asyncio.run(test_gem_interaction(args.gem, args.prompt))

if __name__ == "__main__":
    main()
