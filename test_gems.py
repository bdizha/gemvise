"""Test script for GemVise system."""

from gemvise.core.gemvise import GemVise

def main():
    # Initialize GemVise
    system = GemVise()
    
    # List available Gems
    print("Available Gems:")
    for name in system.list_gems():
        print(f"- {name}")
        
    # Test interaction with each Gem
    test_queries = [
        "What's your approach to innovation?",
        "How do you handle challenges?",
        "What's your leadership philosophy?"
    ]
    
    for name in system.list_gems():
        print(f"\n=== Testing interactions with {name} ===")
        gem = system.get_gem(name)
        
        # Print Gem attributes
        print("\nGem attributes:")
        for key, value in gem.facets.items():
            if isinstance(value, list):
                print(f"- {key}: {', '.join(value)}")
            else:
                print(f"- {key}: {value}")
                
        # Test interactions
        print("\nTest interactions:")
        for query in test_queries:
            print(f"\nQ: {query}")
            response = system.character_router.get_response(name, query)
            print(f"A: {response}")
            
if __name__ == '__main__':
    main()
