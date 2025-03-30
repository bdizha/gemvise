"""Pytest configuration for GemVise tests."""

import pytest
import os
import sys

# Add project root to Python path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Common fixtures can be added here if needed
