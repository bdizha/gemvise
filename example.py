from gemvise import ExpertSystem
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

def main():
    # Initialize the expert system
    expert_system = ExpertSystem()
    
    # Create Warren Buffett expert
    buffett = expert_system.create_expert(
        name="Warren Buffett",
        expertise_domains=[
            "value_investing",
            "market_psychology",
            "corporate_governance",
            "risk_management"
        ],
        knowledge_sources=[
            "Annual Letters to Berkshire Shareholders",
            "The Essays of Warren Buffett",
            "The Intelligent Investor Annotations"
        ]
    )
    
    # Example queries
    queries = [
        "What's your view on AI investments in 2025?",
        "How do you evaluate tech companies with high R&D but no profits?",
        "What are the key risks in today's market environment?"
    ]
    
    # Test the expert
    for query in queries:
        print(f"\nQ: {query}")
        response = expert_system.query("Warren Buffett", query)
        print(f"A: {response}")

if __name__ == "__main__":
    main()
