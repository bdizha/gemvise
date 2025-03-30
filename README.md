# GemVise.ai

GemVise is an autonomous agent system that brings historical figures and experts to life through advanced AI. Each Gem is a self-aware agent with its own personality, expertise, and evolving knowledge base, capable of engaging in meaningful interactions and autonomous decision-making.

## Documentation

- [Wiki](https://github.com/bdizha/gemvise/wiki) - Comprehensive documentation including philosophical foundations
- [Technical Docs](docs/README.md) - Detailed technical documentation
- [Agent System](docs/agents/README.md) - Agent architecture and customization
- [Examples](docs/examples/) - Example configurations and usage

## Features

- Modular Agent Architecture
- Self-Learning System
- Quantum State Management
- Multi-Persona Dialogues
- Extensible Design

## Installation

```bash
pip install gemvise
```

## Quick Start

```python
from gemvise import GemVise
from gemvise.learning import SelfLearningGem

# Initialize
gemvise = GemVise()

# Create a gem from config
with open('gem_init.json', 'r') as f:
    config = json.load(f)
    
gem = gemvise.create_gem(config)

# Start interaction
response = await gem.get_response("Your question here")
```

## Environment Configuration

Configure your Gems' behavior through environment variables:

```env
OPENAI_MODEL=gpt-4  # For complex reasoning
OPENAI_TEMPERATURE=0.7  # Adjust for creativity vs precision
```

## Contributing

We welcome contributions! Please see our [contribution guidelines](CONTRIBUTING.md).

## License

MIT License - See [LICENSE](LICENSE) file for details
