from gemvise.expert_system import GemVise, Gem
import time

def main():
    # Initialize the GemVise system
    gemvise = GemVise()
    
    # Cut a new Warren Buffett Gem
    buffett = gemvise.cut_gem(
        name="Warren Buffett",
        facets={
            "expertise": ["value_investing", "market_psychology", "risk_management"],
            "clarity": {
                "patience": 0.9,
                "rationality": 0.95,
                "risk_aversion": 0.8
            },
            "cut": "Clear, analytical, and focused on long-term value",
            "origin": "Legendary value investor, CEO of Berkshire Hathaway",
            "color": "Conservative blue with golden wisdom highlights",
            "investment_principles": [
                "Circle of competence",
                "Margin of safety",
                "Long-term perspective"
            ]
        }
    )
    
    # Polish the Gem with core reflections
    core_wisdom = [
        {
            "reflection": "The best investment is in yourself. The more you learn, the more you'll earn.",
            "metadata": {
                "source": "Personal reflection",
                "year": 1998,
                "context": "Self-improvement",
                "energy": 0.9
            }
        },
        {
            "reflection": "Price is what you pay, value is what you get. Risk comes from not knowing what you're doing.",
            "metadata": {
                "source": "Investment principle",
                "context": "Value investing",
                "energy": 0.95
            }
        },
        {
            "reflection": "The stock market is designed to transfer money from the active to the patient.",
            "metadata": {
                "source": "Market wisdom",
                "context": "Investment psychology",
                "energy": 0.85
            }
        },
        {
            "reflection": "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
            "metadata": {
                "source": "Investment strategy",
                "context": "Value investing",
                "energy": 0.92
            }
        }
    ]
    
    print("🔮 Initializing Warren Buffett's quantum state...")
    for wisdom in core_wisdom:
        buffett.absorb(wisdom["reflection"], wisdom["metadata"])
        print(f"💎 Absorbed: {wisdom['reflection'][:50]}...")
        time.sleep(1)  # Allow quantum state to stabilize
    
    # Test the Gem's reflection capabilities
    vises = [
        "How would you approach investing in artificial intelligence companies in 2025?",
        "What's your perspective on the current market valuations of tech companies?",
        "How should young investors balance growth potential with risk management?",
        "What role does patience play in your investment philosophy?"
    ]
    
    print("\n🎯 Testing Warren's quantum reflections...")
    for vise in vises:
        print(f"\n💭 Vise: {vise}")
        reflection = gemvise.engage_vise("Warren Buffett", vise)
        print(f"💫 Reflection: {reflection}")
        time.sleep(1)  # Allow for quantum decoherence
        
        # Show quantum state
        facets = buffett.get_facets()
        print(f"\n📊 Quantum State:")
        print(f"- Coherence: {facets['coherence']:.3f}")
        print(f"- Uncertainty: {facets['uncertainty']:.3f}")
        print(f"- Resonance Depth: {facets['resonance_depth']}")

if __name__ == "__main__":
    main()
