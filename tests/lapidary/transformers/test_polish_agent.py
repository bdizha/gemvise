"""Tests for the polish agent."""

import pytest
from unittest.mock import MagicMock, patch
from datetime import datetime

from gemvise.models.gem import GemState, QuantumState
from gemvise.lapidary.transformers.polish_agent import PolishAgent
from gemvise.crystal.manager import CrystalManager

@pytest.fixture
def mock_crystal_manager():
    return MagicMock(spec=CrystalManager)

@pytest.fixture
def test_gem_data():
    return {
        'gem_id': 'test_gem',
        'facets': {
            'expertise': ['Testing', 'Learning'],
            'philosophy': 'continuous improvement'
        },
        'quantum_state': {
            'coherence': 1.0,
            'energy': 1.0,
            'phase': 0.0,
            'uncertainty': 0.1
        }
    }

@pytest.fixture
def polish_agent(mock_crystal_manager):
    with patch('gemvise.lapidary.transformers.polish_agent.CrystalManager', 
              return_value=mock_crystal_manager):
        agent = PolishAgent()
        return agent

@pytest.mark.asyncio
async def test_transform_with_interaction(polish_agent, test_gem_data, mock_crystal_manager):
    """Test polishing a gem with an interaction."""
    mock_crystal_manager.get_gem.return_value = test_gem_data
    
    context = {
        'interaction': 'How does testing improve software quality?'
    }
    
    result = await polish_agent.transform('test_gem', context)
    
    assert result['gem_id'] == 'test_gem'
    assert 'Testing' in result['facets']['expertise']
    assert mock_crystal_manager.store_interaction.called
    assert mock_crystal_manager.store_gem.called

@pytest.mark.asyncio
async def test_transform_with_new_knowledge(polish_agent, test_gem_data, mock_crystal_manager):
    """Test polishing a gem with new knowledge."""
    mock_crystal_manager.get_gem.return_value = test_gem_data
    
    context = {
        'new_knowledge': {
            'expertise': ['Testing', 'Learning', 'Quality Assurance'],
            'innovations': ['Automated Testing Framework']
        }
    }
    
    result = await polish_agent.transform('test_gem', context)
    
    assert 'Quality Assurance' in result['facets']['expertise']
    assert 'Automated Testing Framework' in result['facets']['innovations']
    assert result['quantum_state']['coherence'] > test_gem_data['quantum_state']['coherence']
    assert mock_crystal_manager.store_gem.called

@pytest.mark.asyncio
async def test_transform_nonexistent_gem(polish_agent, mock_crystal_manager):
    """Test attempting to polish a nonexistent gem."""
    mock_crystal_manager.get_gem.return_value = None
    
    with pytest.raises(ValueError, match="No gem found with ID"):
        await polish_agent.transform('nonexistent_gem', {})
