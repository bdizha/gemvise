'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { type Gem } from '@/types/gems';
import Section from '@/components/layout/Section';
import { featuredGems, allGems } from '@/mocks/gems';

// Sample images for the carousel
const carouselContent = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'GemVise AI Experts',
    description: 'Connect with AI-powered expert personas'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'GemVise Knowledge Network',
    description: 'Access a network of specialized knowledge'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'GemVise Interactive Learning',
    description: 'Learn through dynamic conversations'
  }
];

export default function Home() {
  const router = useRouter();

  const handleGemClick = (gem: Gem) => {
    router.push(`/chat/${gem.id}`);
  };

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery) return;

    const searchParams = new URLSearchParams();
    searchParams.set('q', searchQuery);
    router.push(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Section 
        variant="hero"
        carouselContent={carouselContent}
        onSearch={handleSearch}
        title="Connect with AI-Powered Expert Personas"
        description="Experience interactive learning through dynamic conversations with world-renowned experts"
        theme="dark"
      />
      <Section 
        variant="featured"
        title="Featured Experts"
        description="Discover curated conversations with leading experts across various fields"
        gems={featuredGems}
        onGemClick={handleGemClick}
        theme="light"
        className="py-20"
      />
      {/* Category Sections */}
      {Object.entries({
        Technology: allGems.filter(gem => gem?.category === 'Technology'),
        Finance: allGems.filter(gem => gem?.category === 'Finance'),
        Business: allGems.filter(gem => gem?.category === 'Business')
      }).filter(([_, gems]) => gems.length > 0).map(([category, gems]: [string, Gem[]]) => (
        <Section
          key={category}
          variant="category"
          title={category}
          description="Explore insights and conversations with our experts in this field"
          gems={gems}
          onGemClick={handleGemClick}
          className="py-20"
          theme="light"
        />
      ))}
    </div>
  );
}
