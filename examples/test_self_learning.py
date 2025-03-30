"""Test self-learning gems with different expertise areas."""

import asyncio
from typing import List
from gemvise.core.gemvise import GemVise
from gemvise.learning.self_learning_gem import SelfLearningGem

async def test_expertise_learning(expertise: str, topics: List[str]):
    """Test learning for a specific expertise area."""
    gemvise = GemVise()
    
    # Create self-learning gem for this expertise
    gem = SelfLearningGem(
        f"{expertise}Gem",
        expertise,
        set(topics)
    )
    
    print(f"\nTesting {expertise} Learning")
    print("=" * 50)
    
    # Conduct learning session for each topic
    for topic in topics:
        print(f"\nLearning about: {topic}")
        print("-" * 30)
        
        insights = await gem.self_learning_session(
            gemvise,
            topic,
            exchanges=63  # 21 exchanges per phase
        )
        
        # Print sample insights
        print("\nKey exchanges:")
        for phase, exchange_num in [("Early", 10), ("Middle", 31), ("Late", 52)]:
            exchange = insights[exchange_num]
            print(f"\n{phase} Phase (Exchange {exchange['exchange_num']}):")
            print(f"Dialogue between {exchange['persona1']} and {exchange['persona2']}:")
            print(f"\nPerspective 1:\n{exchange['perspective1'][:200]}...")
            print(f"\nPerspective 2:\n{exchange['perspective2'][:200]}...")
            
    # Print learning summary
    summary = gem.get_learning_summary()
    print("\nLearning Summary:")
    print("-" * 30)
    print(f"Expertise: {summary['expertise']}")
    print(f"Topics Explored: {summary['knowledge_items']}")
    print(f"Total Reflections: {summary['reflections']}")
    print("\nRecent Insights:")
    for insight in summary['recent_insights']:
        print(f"- {insight}")

async def main():
    # Test different expertise areas
    expertise_areas = {
        "AI": [
            "neural networks",
            "reinforcement learning",
            "natural language processing"
        ],
        "Quantum": [
            "quantum entanglement",
            "quantum superposition",
            "quantum computing"
        ],
        "Philosophy": [
            "epistemology",
            "metaphysics",
            "ethics"
        ]
    }
    
    for expertise, topics in expertise_areas.items():
        await test_expertise_learning(expertise, topics)

if __name__ == "__main__":
    asyncio.run(main())
