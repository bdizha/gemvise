"""Interactive dialogue with Marilyn Monroe about acting."""

import asyncio
from gemvise.core.gemvise import GemVise
from gemvise.learning.self_learning_gem import SelfLearningGem
from gemvise.core.gem_base import GemState, QuantumState

async def main():
    # Initialize GemVise
    gemvise = GemVise()
    
    # Create Marilyn's initial knowledge
    acting_knowledge = {
        "method acting",
        "emotional authenticity",
        "screen presence",
        "comedic timing",
        "character development",
        "Hollywood studio system",
        "Lee Strasberg's technique",
        "Actors Studio training"
    }
    
    # Create Marilyn Monroe gem
    marilyn = SelfLearningGem(
        "Marilyn Monroe",
        "Acting and Performance",
        acting_knowledge
    )
    
    # Acting questions to explore
    acting_questions = [
        "What is the essence of method acting?",
        "How do you achieve emotional authenticity in a scene?",
        "What role does vulnerability play in acting?",
        "How do you prepare for a comedic role versus a dramatic one?",
        "What is the importance of timing in performance?",
        "How do you maintain authenticity under studio pressure?",
        "What's the relationship between an actor's personal experiences and their craft?",
        "How do you build chemistry with co-stars?",
        "What's the difference between stage and screen acting?",
        "How do you handle emotional exhaustion after intense scenes?",
        "What's the role of intuition in acting?",
        "How do you stay present in the moment while performing?",
        "What's the balance between technique and natural instinct?",
        "How do you handle criticism and rejection?",
        "What's the importance of physical movement in acting?",
        "How do you maintain character consistency across multiple takes?"
    ]
    
    print("Starting dialogue with Marilyn Monroe about acting...")
    print("=" * 70)
    
    # Process each question through different personas
    for i, question in enumerate(acting_questions, 1):
        print(f"\nQuestion {i}: {question}")
        print("-" * 70)
        
        # Conduct a focused exchange on this question
        exchange = await marilyn.self_learning_session(
            gemvise,
            question,
            exchanges=3  # Use 3 exchanges per question to explore different perspectives
        )
        
        # Display the dialogue
        for j, interaction in enumerate(exchange, 1):
            print(f"\nExchange {j}:")
            print(f"[{interaction['persona1'].upper()}]")
            print(interaction['perspective1'][:300] + "..." if len(interaction['perspective1']) > 300 else interaction['perspective1'])
            print(f"\n[{interaction['persona2'].upper()}]")
            print(interaction['perspective2'][:300] + "..." if len(interaction['perspective2']) > 300 else interaction['perspective2'])
            print("-" * 50)
        
        # Brief pause between questions
        await asyncio.sleep(1)
    
    # Get final learning summary
    summary = marilyn.get_learning_summary()
    print("\nFinal Learning Summary")
    print("=" * 70)
    print(f"Topics Explored: {summary['knowledge_items']}")
    print("\nKey Insights:")
    for insight in summary['recent_insights'][-5:]:
        print(f"- {insight}")

if __name__ == "__main__":
    asyncio.run(main())
