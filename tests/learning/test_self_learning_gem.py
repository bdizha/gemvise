"""Tests for self-learning gem functionality."""

import pytest
import asyncio
from typing import Dict, List, Any
from unittest.mock import Mock, patch
from gemvise.core.gem_base import GemState, QuantumState
from gemvise.learning.self_learning_gem import SelfLearningGem

@pytest.fixture
def mock_gemvise():
    """Create a mock GemVise instance."""
    mock = Mock()
    async def mock_get_response(prompt, state, quantum):
        # Simulate different responses based on persona
        if "Expert Teacher" in prompt:
            return "Teaching perspective: Key concepts include..."
        elif "Curious Learner" in prompt:
            return "Question: How does this relate to..."
        elif "Analytical Critic" in prompt:
            return "Critical analysis: Consider these aspects..."
        else:
            return "Creative synthesis: New connections emerge..."
    mock.get_response = mock_get_response
    return mock

@pytest.fixture
def test_gem(mock_gemvise):
    """Create a test gem instance."""
    return SelfLearningGem(
        "TestGem",
        "AI",
        {"neural networks", "deep learning"}
    )

@pytest.mark.asyncio
async def test_persona_creation(test_gem):
    """Test that all required personas are created."""
    expected_personas = {"teacher", "student", "critic", "innovator"}
    assert set(test_gem.personas.keys()) == expected_personas
    
    # Test persona attributes
    for persona in test_gem.personas.values():
        assert "role" in persona
        assert "style" in persona
        assert isinstance(persona["quantum_state"], QuantumState)

@pytest.mark.asyncio
async def test_persona_selection(test_gem):
    """Test persona selection for different learning phases."""
    # Early phase (first 21 exchanges)
    early = test_gem._select_personas_for_exchange(10)
    assert "teacher" in early
    assert "student" in early
    
    # Middle phase (exchanges 21-41)
    middle = test_gem._select_personas_for_exchange(30)
    assert "critic" in middle
    
    # Late phase (exchanges 42-62)
    late = test_gem._select_personas_for_exchange(50)
    assert "innovator" in late

@pytest.mark.asyncio
async def test_learning_session(test_gem, mock_gemvise):
    """Test a complete learning session."""
    topic = "neural networks"
    exchanges = 6  # Reduced for testing
    
    insights = await test_gem.self_learning_session(
        mock_gemvise,
        topic,
        exchanges=exchanges
    )
    
    # Verify session results
    assert len(insights) == exchanges
    assert all(isinstance(x, dict) for x in insights)
    assert all("topic" in x and x["topic"] == topic for x in insights)
    
    # Check learning progress
    summary = test_gem.get_learning_summary()
    assert summary["expertise"] == "AI"
    assert summary["current_focus"] == topic
    assert len(summary["recent_insights"]) > 0  

@pytest.mark.asyncio
async def test_exchange_content(test_gem, mock_gemvise):
    """Test content of individual exchanges."""
    exchange = await test_gem._conduct_exchange(
        mock_gemvise,
        ["teacher", "student"],
        "neural networks",
        0
    )
    
    assert exchange["persona1"] == "teacher"
    assert exchange["persona2"] == "student"
    assert "perspective1" in exchange
    assert "perspective2" in exchange
    assert len(exchange["insights"]) > 0

@pytest.mark.asyncio
async def test_prompt_generation(test_gem):
    """Test prompt generation for different roles."""
    topic = "neural networks"
    
    # Test teacher prompt
    teacher_prompt = test_gem._create_prompt(
        "Expert Teacher",
        topic,
        0
    )
    assert "expert" in teacher_prompt.lower()
    assert topic in teacher_prompt
    
    # Test student prompt
    student_prompt = test_gem._create_prompt(
        "Curious Learner",
        topic,
        0
    )
    assert "learning" in student_prompt.lower()
    assert topic in student_prompt

@pytest.mark.asyncio
async def test_knowledge_integration(test_gem, mock_gemvise):
    """Test integration of insights into knowledge."""
    initial_reflections = len(test_gem.reflections)
    
    exchange = {
        "insights": [
            "New insight 1",
            "New insight 2"
        ]
    }
    
    test_gem._integrate_insights(exchange)
    assert len(test_gem.reflections) == initial_reflections + 2

@pytest.mark.asyncio
async def test_quantum_states(test_gem):
    """Test quantum states of different personas."""
    for persona in test_gem.personas.values():
        state = persona["quantum_state"]
        assert 0 <= state.coherence <= 1
        assert 0 <= state.energy <= 1
        assert 0 <= state.phase <= 1
        assert 0 <= state.uncertainty <= 1
