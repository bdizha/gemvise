'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GemGrid from '@/components/gems/GemGrid';
import { getAllGems } from '@/data/gems';

export default function GemsPage() {
  const [quantumState, setQuantumState] = useState({
    coherence: 0.85,
    energy: 0.92,
    phase: 0.78,
    uncertainty: 0.15
  });

  const categories = [
    'All Gems',
    'Leaders',
    'Scientists',
    'Artists',
    'Philosophers',
    'Innovators'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <div className="relative py-16 px-8 mb-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <h1 className="text-4xl font-bold mb-4">Explore Gems</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Discover and interact with historical figures who have shaped our world
        </p>
      </div>

      {/* Filters section */}
      <div className="mb-8 px-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/10"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gems Grid */}
      <GemGrid 
        gems={getAllGems()}
        variant="grid"
        className="px-8 pb-20"
      />

      {/* Quantum State Indicator */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-xl bg-black/20 backdrop-blur-md p-2">
        {Object.entries(quantumState).map(([key, value]) => (
          <div key={key} className="flex items-center gap-1">
            <div 
              className="h-2 w-12 rounded-full bg-gradient-to-r from-blue-300 to-blue-600 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - value * 100}% 0 0)` }}
            />
            <span className="text-xs text-foreground-600">{key[0].toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
