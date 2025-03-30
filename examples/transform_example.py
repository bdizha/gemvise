"""Example of using the transformation agents with LLM router."""

import asyncio
from gemvise.core.llm_router import LLMRouter
from gemvise.core.gem_base import GemState, QuantumState

async def main():
    # Initialize LLM router
    router = LLMRouter()
    
    # Create a sample quantum state
    quantum_state = QuantumState(
        coherence=0.5,  # Medium consistency
        energy=0.7,     # High activity
        phase=0.3,      # Early stage
        uncertainty=0.4  # Moderate predictability
    )
    
    # Sample prompt
    prompt = "Explain how AI can help improve education"
    
    print("Prompt:")
    print(prompt)
    print("\n" + "="*50 + "\n")
    
    # Try different gem states
    states = [GemState.RAW, GemState.ROUGH, GemState.POLISHED, GemState.BRILLIANT]
    
    for state in states:
        print(f"\nResponse as {state.value} gem:")
        result = await router.get_completion(prompt, state, quantum_state)
        print(result)
        print("\n" + "-"*50)

if __name__ == "__main__":
    asyncio.run(main())
