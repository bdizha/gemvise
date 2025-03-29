# API Documentation

## Core Classes

### Gem Class
```python
class Gem:
    def __init__(self, name: str, facets: Dict[str, Any] = None)
    def absorb(self, reflection: str, metadata: Dict[str, Any] = None) -> None
    def reflect(self, vise: str) -> str
    def get_facets(self) -> Dict[str, Any]
```

#### Quantum Properties
- `energy`: Knowledge importance (0.0-1.0)
- `phase`: Quantum phase (0-2π)
- `coherence`: Knowledge stability (0.0-1.0)
- `uncertainty`: Heisenberg-inspired uncertainty

#### Example Usage
```python
gem = Gem("Einstein", {
    "expertise": ["physics", "relativity"],
    "clarity": 0.95,
    "resonance_depth": 3
})

# Absorb knowledge
gem.absorb("E=mc²", {
    "source": "special_relativity",
    "year": 1905,
    "confidence": 0.99
})

# Generate reflection
response = gem.reflect("What is the relationship between mass and energy?")
```

### GemVise System
```python
class GemVise:
    def cut_gem(self, name: str, facets: Dict[str, Any]) -> Gem
    def engage_vise(self, gem_name: str, query: str) -> str
    def get_resonant_gems(self, query: str, threshold: float = 0.7) -> List[Gem]
```

## RESTful API Endpoints

### Gem Management
```http
POST /api/v1/gems
GET /api/v1/gems
GET /api/v1/gems/{gem_id}
PUT /api/v1/gems/{gem_id}
DELETE /api/v1/gems/{gem_id}
```

### Knowledge Operations
```http
POST /api/v1/gems/{gem_id}/absorb
POST /api/v1/gems/{gem_id}/reflect
GET /api/v1/gems/{gem_id}/facets
GET /api/v1/gems/{gem_id}/resonance
```

### System Operations
```http
GET /api/v1/system/health
GET /api/v1/system/stats
POST /api/v1/system/backup
GET /api/v1/system/config
```

## WebSocket Events

### Real-time Updates
```javascript
// Connect to WebSocket
const ws = new WebSocket('ws://gemvise/v1/events');

// Listen for quantum state changes
ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    switch(data.type) {
        case 'coherence_update':
            updateCoherence(data.gem_id, data.value);
            break;
        case 'resonance_shift':
            handleResonanceShift(data.gem_id, data.pattern);
            break;
    }
};
```

## Error Handling

### HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `409`: Conflict
- `500`: Internal Server Error

### Error Response Format
```json
{
    "error": {
        "code": "QUANTUM_DECOHERENCE",
        "message": "Gem coherence below threshold",
        "details": {
            "gem_id": "einstein_01",
            "coherence": 0.3,
            "threshold": 0.5
        }
    }
}
```

## Rate Limiting
- Standard: 100 requests/minute
- Premium: 1000 requests/minute
- Headers:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

## Authentication
```http
Authorization: Bearer <your_api_key>
```

## SDK Examples

### Python
```python
from gemvise import GemVise

client = GemVise(api_key="your_key")
einstein = client.cut_gem("Einstein", {
    "expertise": ["physics"],
    "clarity": 0.95
})

response = einstein.reflect("Explain quantum entanglement")
```

### JavaScript
```javascript
import { GemVise } from '@gemvise/sdk';

const client = new GemVise('your_key');
const tesla = await client.cutGem('Tesla', {
    expertise: ['electricity', 'magnetism'],
    clarity: 0.9
});

const response = await tesla.reflect('How do wireless signals work?');
```

## Webhooks

### Available Events
- `gem.created`
- `gem.updated`
- `knowledge.absorbed`
- `reflection.generated`
- `coherence.critical`

### Webhook Format
```json
{
    "event": "knowledge.absorbed",
    "timestamp": "2025-03-29T16:30:09Z",
    "gem_id": "tesla_01",
    "data": {
        "reflection": "AC current principles",
        "energy": 0.85,
        "coherence": 0.92
    }
}
```
