'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import type { SectionVariant } from '@/components/layout/Section/types';
import LoginModal from '@/components/auth/LoginModal';
import GemList from '@/components/gems/GemList';

const featuredGems = [
  {
    id: '1',
    name: 'Sherlock Holmes',
    expertise: ['Detective', 'Logic', 'Observation'],
    imageUrl: '/gems/sherlock.jpg',
    description: 'The world\'s greatest detective, ready to solve mysteries and share deductive reasoning techniques.'
  },
  {
    id: '2',
    name: 'Jane Austen',
    expertise: ['Literature', 'Social Commentary', 'Romance'],
    imageUrl: '/gems/austen.jpg',
    description: 'Witty and insightful author exploring relationships, society, and human nature.'
  },
  {
    id: '3',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Innovation'],
    imageUrl: '/gems/davinci.jpg',
    description: 'Renaissance polymath sharing insights on creativity, innovation, and the intersection of art and science.'
  },
  {
    id: '4',
    name: 'Ada Lovelace',
    expertise: ['Computing', 'Mathematics', 'Vision'],
    imageUrl: '/gems/ada.jpg',
    description: 'The world\'s first programmer, exploring the future of computing and human-machine collaboration.'
  }
];

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGemSelect = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-stone-150 dark:bg-midnight-850">
      {/* Hero Section */}
      <Section
        variant={"gradient" as SectionVariant}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold">
            Create. Interact.
            <br />
            <span className="gradient-text">Own Your Imagination.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-grey-600 dark:text-grey-400">
            Dive into a universe of AI characters, craft your own unique personalities, connect with a vibrant community, and get rewarded for your creativity on the blockchain.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Link href="/explore" className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
              Explore Creations
            </Link>
            <Link href="/create" className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
              Start Creating
            </Link>
            <Link href="/rewards" className="text-primary hover:text-primary-hover px-8 py-3">
              Learn About Creator Rewards
            </Link>
          </div>
        </div>
      </Section>

      {/* What is GemVise Section */}
      <Section
        variant={"default" as SectionVariant}
        tag="What is GemVise?"
        title="Where Imagination Meets Interaction & Ownership"
        description="GemVise empowers you to bring any character imaginable to life through advanced AI. Engage in limitless conversations, co-create intricate stories, learn new things, or simply have fun. But GemVise is more than just chat – it's a platform built to recognize and reward the creators who fuel its universe."
      >
        {null}
      </Section>

      {/* Featured Gems Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Featured Gems"
        title="Meet Our Distinguished Gems"
        description="Explore conversations with some of history's most fascinating minds. Each Gem brings unique insights, expertise, and personality to every interaction."
      >
        <GemList gems={featuredGems} onSelect={handleGemSelect} />
      </Section>

      {/* Creation Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Limitless Creation"
        title="Create Your Perfect Character"
        description="Not vibing with existing characters? Design your own! Customize everything from their voice and conversation style to their personality and expertise. Shape unique AI companions that reflect your vision and imagination."
      >
        <div className="flex justify-center mt-8">
          <Link href="/create" className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Start Creating
          </Link>
        </div>
      </Section>

      {/* Ownership Section */}
      <Section
        variant={"default" as SectionVariant}
        tag="True Ownership"
        title="Your Creations, Your Property"
        description="Every character you create is uniquely yours, secured on the blockchain. Earn rewards when others interact with your creations, build a following, and shape the future of AI interaction."
      >
        <div className="flex justify-center mt-8">
          <Link href="/ownership" className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
            Learn About Ownership
          </Link>
        </div>
      </Section>

      {/* Login Modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={() => setIsAuthenticated(true)}
        />
      )}
    </main>
  );
}
