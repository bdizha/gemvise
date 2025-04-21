'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { getAllGems } from '@/data/gems';
import Section from '@/components/layout/Section';
import Tabs from '@/components/ui/Tabs';
import { type Gem } from '@/types/gems';

export default function GemsPage() {
  const [quantumState, setQuantumState] = useState({
    coherence: 0.85,
    energy: 0.92,
    phase: 0.78,
    uncertainty: 0.15
  });

  const tabs = [
    { 
      id: 'featured', 
      label: 'Featured',
      gradient: {
        default: 'bg-gradient-dark-light',
        alternate: 'bg-gradient-light-dark'
      }
    },
    { 
      id: 'business', 
      label: 'Business & Leadership',
      gradient: {
        default: 'bg-gradient-light-dark',
        alternate: 'bg-gradient-dark-light'
      }
    },
    { 
      id: 'science', 
      label: 'Science & Technology',
      gradient: {
        default: 'bg-gradient-dark-light-dark',
        alternate: 'bg-gradient-light-dark-light'
      }
    },
    { 
      id: 'arts', 
      label: 'Arts & Culture',
      gradient: {
        default: 'bg-gradient-pink-purple',
        alternate: 'bg-gradient-purple-pink'
      }
    },
    { 
      id: 'philosophy', 
      label: 'Philosophy & Wisdom',
      gradient: {
        default: 'bg-gradient-purple-pink-purple',
        alternate: 'bg-gradient-pink-purple-pink'
      }
    },
    { 
      id: 'innovation', 
      label: 'Innovation & Future',
      gradient: {
        default: 'bg-gradient-dark-light-dark',
        alternate: 'bg-gradient-light-dark-light'
      }
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const allGems = useMemo(() => getAllGems(), []);

  // Group gems by category
  const gemsByCategory = useMemo(() => {
    const categories: Record<string, Gem[]> = {};
    allGems.forEach(gem => {
      const category = gem.category || 'Uncategorized';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(gem);
    });
    return categories;
  }, [allGems]);

  const handleGemClick = (gem: Gem) => {
    // Handle gem click - navigate to gem detail page or open modal
    console.log('Clicked gem:', gem);
  };

  return (
    <div className="min-h-screen bg-background">
      <Section
        variant="hero"
        theme="dark-light"
        title="Transform Your Experience"
        description="Connect, discover and create for real-time, personalized insights. Engage in dynamic conversations with thought leaders and innovators who are shaping our future."
      >
        <div className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            tabs={tabs}
            activeTab={selectedTab}
            onChange={setSelectedTab}
          />
        </div>
      </Section>

      <div className="space-y-12">
        {Object.entries(gemsByCategory).map(([category, gems]) => (
          <Section
            key={category}
            variant="slider"
            theme="light-dark"
            title={category}
            description={`Explore our collection of ${category.toLowerCase()} experts`}
            gems={gems}
            onGemClick={handleGemClick}
          />
        ))}
      </div>
    </div>
  );
}
