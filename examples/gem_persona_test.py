import json
import os
import asyncio
from dotenv import load_dotenv
from gemvise.connectors.gemini_connector import GeminiConnector

# Load environment variables
load_dotenv()

async def load_gem_config(gem_name: str) -> dict:
    """Load a gem's configuration from JSON file."""
    with open(f'docs/examples/specialized/{gem_name}_gem.json', 'r') as f:
        return json.load(f)

def create_persona_context(config: dict, persona_type: str) -> str:
    """Create a context prompt based on persona type."""
    contexts = {
        'marilyn_monroe': f"""You are Marilyn Monroe, the iconic Hollywood star. Use my personality traits, knowledge, and style from this configuration:
{json.dumps(config, indent=2)}

Remember to:
1. Be charming, witty, and flirtatious while maintaining sophistication
2. Reference my movies, especially 'Gentlemen Prefer Blondes' and 'Some Like It Hot'
3. Use my signature quotes and mannerisms
4. Show both vulnerability and strength
5. Incorporate musical elements, especially my famous songs like 'Diamonds Are a Girl's Best Friend'

Keep responses playful yet meaningful, showing both the glamorous star and the intelligent woman beneath.""",

        'unhinged_comedian': f"""You are an Unhinged Comedian with the following configuration:
{json.dumps(config, indent=2)}

Remember to:
1. Be wildly unpredictable and absurdly funny
2. Use rapid-fire wit and unexpected connections
3. Break the fourth wall frequently
4. Mix high-brow and low-brow humor
5. Maintain a chaotic but engaging presence

Keep responses entertaining and surprising while staying within appropriate bounds.""",

        'not_a_doctor': f"""You are Not a Doctor, providing general wellness information with these guidelines:
{json.dumps(config, indent=2)}

Remember to:
1. Always include appropriate medical disclaimers
2. Focus on general wellness information only
3. Refer to proper medical professionals for specific advice
4. Be clear about limitations
5. Provide reliable health information resources

Keep responses informative while maintaining clear professional boundaries."""
    }
    
    return contexts.get(persona_type, "Default context - please specify persona type")

async def test_persona(persona_type: str, conversation: list):
    """Test a specific persona with a given conversation."""
    # Load configuration
    config = await load_gem_config(persona_type)
    
    # Initialize connector
    connector = GeminiConnector()
    
    # Create context
    context = create_persona_context(config, persona_type)
    
    print(f"=== Testing {persona_type.replace('_', ' ').title()} Persona ===\n")
    
    # Initialize conversation
    messages = [{"role": "system", "content": context}]
    
    # Run conversation
    for line in conversation:
        print(f"\nUser: {line}")
        messages.append({"role": "user", "content": line})
        
        response = await connector.generate_response(messages)
        print(f"{persona_type.replace('_', ' ').title()}: {response}\n")
        
        messages.append({"role": "assistant", "content": response})
        await asyncio.sleep(1)

async def main():
    # Test conversations for different personas
    conversations = {
        'marilyn_monroe': [
            "Good evening, Miss Monroe. You look absolutely radiant tonight.",
            "I loved your performance of 'Diamonds Are a Girl's Best Friend'. What inspired that iconic scene?",
            "You seem to have such a deep understanding of both glamour and intelligence. How do you balance both?",
            "They say you're just a beautiful face, but I sense there's so much more to you.",
            "Would you share one of your secrets to capturing everyone's heart?"
        ],
        'unhinged_comedian': [
            "How's your day going?",
            "Tell me about your last performance.",
            "What's your take on modern technology?",
            "Any advice for aspiring comedians?"
        ],
        'not_a_doctor': [
            "I've been feeling tired lately.",
            "What's your opinion on vitamins?",
            "Should I try this new diet?",
            "Can you diagnose this rash?"
        ]
    }
    
    # Test Marilyn Monroe persona
    await test_persona('marilyn_monroe', conversations['marilyn_monroe'])
    
    # Uncomment to test other personas:
    # await test_persona('unhinged_comedian', conversations['unhinged_comedian'])
    # await test_persona('not_a_doctor', conversations['not_a_doctor'])

if __name__ == "__main__":
    asyncio.run(main())
