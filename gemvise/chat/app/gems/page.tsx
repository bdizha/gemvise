'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getAllGems } from '@/data/gems';
import Section from '@/components/layout/Section';
import GemGrid from '@/components/gems/GemGrid';
import Tabs from '@/components/ui/Tabs';

export default function GemsPage() {
  const [quantumState, setQuantumState] = useState({
    coherence: 0.85,
    energy: 0.92,
    phase: 0.78,
    uncertainty: 0.15
  });

  const tabs = [
    { id: 'featured', label: 'Featured' },
    { id: 'business', label: 'Business & Leadership' },
    { id: 'science', label: 'Science & Technology' },
    { id: 'arts', label: 'Arts & Culture' },
    { id: 'philosophy', label: 'Philosophy & Wisdom' },
    { id: 'innovation', label: 'Innovation & Future' },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-background">
      <Section
        variant="hero"
        theme="dark"
        title="Transform Your Experience"
        description="Connect with AI-powered expert personas for real-time, personalized insights. Engage in dynamic conversations with thought leaders and innovators who are shaping our future."
      >
        <div className="mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            tabs={tabs}
            activeTab={selectedTab}
            onChange={setSelectedTab}
          />
        </div>
      </Section>

      <Section
        variant="default"
        theme="light"
        title="Explore Our Gems"
        description="Discover a curated collection of AI-powered expert personas, each bringing unique insights and perspectives."
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GemGrid 
            gems={getAllGems()}
            type="grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr w-full"
          />
        </div>
      </Section>
    </div>
  );
}
