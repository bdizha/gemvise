"""Tests for gem polishing capabilities."""

import pytest
from unittest.mock import MagicMock, patch
from datetime import datetime

from gemvise.models.gem import GemState, QuantumState
from gemvise.lapidary.polish.gem_polish import PolishedGem
from gemvise.crystal.manager import CrystalManager

@pytest.fixture
def mock_crystal_manager():
    return MagicMock(spec=CrystalManager)

@pytest.fixture
def test_gem(mock_crystal_manager):
    return PolishedGem(
        name="TestGem",
        facets={
            "expertise": ["Testing", "Learning"],
            "philosophy": "continuous improvement"
        },
        quantum_state={
            "coherence": 1.0,
            "energy": 1.0,
            "phase": 0.0,
            "uncertainty": 0.1
        }
    )

def test_gem_initialization(test_gem):
    """Test proper gem initialization."""
    assert test_gem.name == "TestGem"
    assert "Testing" in test_gem.facets["expertise"]
    assert test_gem.quantum_state.coherence == 1.0

def test_quantum_state_evolution(test_gem):
    """Test quantum state evolution after interactions."""
    initial_coherence = test_gem.quantum_state.coherence
    test_gem.polish_facet("How does testing improve software quality?")
    assert test_gem.quantum_state.coherence != initial_coherence

def test_brilliance_examination(test_gem, mock_crystal_manager):
    """Test gem brilliance examination."""
    brilliance = test_gem.examine_brilliance()
    assert "TestGem" in brilliance
    assert "coherence" in brilliance
    assert "Testing" in brilliance

def test_luster_enhancement(test_gem, mock_crystal_manager):
    """Test gem luster enhancement."""
    new_knowledge = {
        "expertise": ["Testing", "Learning", "Quality Assurance"],
        "innovations": ["Automated Testing Framework"]
    }
    initial_coherence = test_gem.quantum_state.coherence
    
    test_gem.enhance_luster(new_knowledge)
    
    assert test_gem.quantum_state.coherence > initial_coherence
    assert "Quality Assurance" in test_gem.facets["expertise"]
    assert "Automated Testing Framework" in test_gem.facets["innovations"]
