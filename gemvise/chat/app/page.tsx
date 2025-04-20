'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { type Gem } from '@/types/gems';
import Section from '@/components/layout/Section/Section';
import { featuredGems, allGems } from '@/mocks/gems';

// Sample images for the carousel
const carouselContent = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'Gemvise AI Experts',
    description: 'Connect, discover and create'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'Gemvise Knowledge Network',
    description: 'Access a network of specialized knowledge'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'Gemvise Interactive Learning',
    description: 'Learn through dynamic conversations'
  }
];

const trendingGems = [
  {
    id: 'tim-ferriss',
    title: 'Learn Languages & Life Hacks',
    subtitle: 'with Tim Ferriss',
    imageUrl: '/experts/tim-ferriss.jpg',
    href: '/chat/tim-ferriss'
  },
  {
    id: 'gary-vee',
    title: 'Digital Marketing & Entrepreneurship',
    subtitle: 'with Gary Vaynerchuk',
    imageUrl: '/experts/gary-vee.jpg',
    href: '/chat/gary-vee'
  }
];

const popularGems = [
  {
    id: 'warren-buffett',
    title: 'Investment Strategies',
    subtitle: 'with Warren Buffett',
    imageUrl: '/experts/warren-buffett.jpg',
    href: '/chat/warren-buffett'
  },
  {
    id: 'michelle-obama',
    title: 'Leadership & Empowerment',
    subtitle: 'with Michelle Obama',
    imageUrl: '/experts/michelle-obama.jpg',
    href: '/chat/michelle-obama'
  },
  {
    id: 'warren-buffett',
    title: 'Investment Strategies',
    subtitle: 'with Warren Buffett',
    imageUrl: '/experts/warren-buffett.jpg',
    href: '/chat/warren-buffett'
  },
  {
    id: 'michelle-obama',
    title: 'Leadership & Empowerment',
    subtitle: 'with Michelle Obama',
    imageUrl: '/experts/michelle-obama.jpg',
    href: '/chat/michelle-obama'
  }
];

const discoverGems = [
  {
    id: 'elon-musk',
    title: 'Tech & Innovation',
    subtitle: 'with Elon Musk',
    imageUrl: '/experts/elon-musk.jpg',
    href: '/chat/elon-musk'
  },
  {
    id: 'gordon-ramsay',
    title: 'Culinary Excellence',
    subtitle: 'with Gordon Ramsay',
    imageUrl: '/experts/gordon-ramsay.jpg',
    href: '/chat/gordon-ramsay'
  },
  
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
        title="Connect, discover and create"
        description="Experience interactive learning through dynamic conversations with world-renowned experts"
        theme="dark-light"
        trendingGems={trendingGems}
        popularGems={popularGems}
        discoverGems={discoverGems}
        onSearch={handleSearch}
        carouselContent={carouselContent}
      />
      <Section 
        variant="featured"
        title="Featured Experts"
        description="Discover curated conversations with leading experts across various fields"
        gems={featuredGems}
        onGemClick={handleGemClick}
        theme="dark-light"
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
          theme="dark-light"
        />
      ))}
    </div>
  );
}
