"""Test script for GemVise system."""

from gemvise.core.gemvise import GemVise

def test_interactions(system, provider):
    """Test interactions with a specific provider."""
    print(f"\n=== Testing {provider.upper()} interactions ===\n")
    
    # List available Gems
    print("Available Gems:")
    for name in system.list_gems():
        print(f"- {name}")
    print()

    # Test interaction with Bill Gates
    name = "Bill Gates"
    print(f"=== Testing interactions with {name} ===\n")

    # Print Gem attributes
    gem = system.get_gem(name)
    print("Gem attributes:")
    for key, value in gem.facets.items():
        if isinstance(value, list):
            print(f"- {key}: {', '.join(value)}")
        else:
            print(f"- {key}: {value}")
    print()

    print("Test interactions:\n")
    queries = [
        "What's your approach to innovation?",
        "How do you view the future of AI?",
        "What advice would you give to young entrepreneurs?"
    ]
    
    for query in queries:
        print(f"Q: {query}")
        response = system.character_router.get_response(name, query)
        print(f"A: {response}\n")

def main():
    # Test with OpenAI
    system = GemVise()
    test_interactions(system, "OpenAI")
    
    # Test with Gemini
    system = GemVise()
    system.character_router = system.character_router.__class__(
        system,
        provider='gemini'
    )
    test_interactions(system, "Gemini")

if __name__ == "__main__":
    main()
