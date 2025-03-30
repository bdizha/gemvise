"""Test gem learning interactions."""

import asyncio
from gemvise.core.gemvise import GemVise
from gemvise.learning.interaction_manager import InteractionManager

async def main():
    # Initialize GemVise and interaction manager
    gemvise = GemVise()
    manager = InteractionManager(gemvise)
    
    # Create gem pairs with different initial knowledge
    tech_topics = [
        "artificial intelligence",
        "machine learning",
        "neural networks",
        "deep learning",
        "computer vision"
    ]
    
    business_topics = [
        "entrepreneurship",
        "venture capital",
        "business strategy",
        "market analysis",
        "product development"
    ]
    
    # Create learning pairs
    manager.create_learning_pair(
        "TechGem",
        tech_topics,
        "BusinessGem",
        business_topics
    )
    
    print("Starting learning session...")
    print("=" * 50)
    
    # Conduct learning session
    results = await manager.conduct_learning_session(
        "TechGem",
        "BusinessGem",
        num_exchanges=63
    )
    
    print("\nLearning session completed!")
    print("=" * 50)
    
    # Print progress
    progress = manager.get_learning_progress()
    for gem_name, stats in progress.items():
        print(f"\n{gem_name} Learning Stats:")
        print("-" * 30)
        print(f"Total Knowledge: {stats['total_knowledge']}")
        print(f"Learned from others: {stats['learned_from_others']}")
        print(f"Taught to others: {stats['taught_to_others']}")
        print(f"Total interactions: {stats['interaction_count']}")
        
    # Print sample exchange
    if results:
        print("\nSample Exchange:")
        print("=" * 50)
        exchange = results[len(results)//2]  # Middle exchange
        print(f"Exchange #{exchange['exchange_num']}")
        print(f"Topic: {exchange['topic']}")
        print(f"\n{exchange['teacher']}'s explanation:")
        print(exchange['teacher_response'])
        print(f"\n{exchange['student']}'s response:")
        print(exchange['student_response'])

if __name__ == "__main__":
    asyncio.run(main())
