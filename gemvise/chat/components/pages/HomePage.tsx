'use client';

import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import GemList from '../gems/GemList';
import Section from '../layout/Section';
import type { SectionVariant } from '../layout/Section/types';

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

export default function HomePage() {
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
            <a href="/explore" className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
              Explore Creations
            </a>
            <a href="/create" className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
              Start Creating
            </a>
            <a href="/rewards" className="text-primary hover:text-primary-hover px-8 py-3">
              Learn About Creator Rewards
            </a>
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

      {/* Creation Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Limitless Creation"
        title="Create Your Perfect Character"
        description="Not vibing with existing characters? Design your own! Customize everything from their voice and conversation style to their personality and expertise. Shape unique AI companions that reflect your vision and imagination."
      >
        <div className="flex justify-center mt-8">
          <a href="/create" className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Start Creating
          </a>
        </div>
      </Section>

      {/* Blockchain Section */}
      <Section
        variant={"default" as SectionVariant}
        tag="Creator Economy"
        title="Get Rewarded for Your Genius"
        description="We believe creators are the heart of GemVise. That's why we're integrating blockchain technology to ensure transparent, fair, and direct rewards for the creators whose characters captivate and engage our community. Build popular characters, contribute to the ecosystem, and earn real value for your imagination."
      >
        <div className="flex justify-center mt-8">
          <a href="/rewards" className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
            Learn How Creator Rewards Work
          </a>
        </div>
      </Section>

      {/* GemVerse Section */}
      <Section
        variant={"gradient" as SectionVariant}
        tag="Future Vision"
        title="The Next Dimension: The GemVerse Awaits"
        description="Imagine stepping into a vibrant virtual world alongside the characters you've created and love. Our vision extends beyond chat to the GemVerse – an immersive space where your AI companions come to life in 3D. Stay tuned as we build this next frontier of interaction."
      >
        {null}
      </Section>

      {/* Community Section */}
      <Section
        variant={"default" as SectionVariant}
        tag="Join Us"
        title="Connect, Collaborate, Co-Create"
        description="GemVise is home to a passionate community of creators, storytellers, and explorers. Share your characters, discover new favourites, find collaborators, and build upon the collective imagination."
      >
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="https://discord.gg/gemvise" className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
            Join our Discord
          </a>
          <a href="https://twitter.com/gemvise" className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
            Follow us on X/Twitter
          </a>
        </div>
      </Section>

      {/* Featured Gems Section */}
      <Section
        variant={"values" as SectionVariant}
        tag="Featured Creations"
        title="Meet Some of Our Stars"
        description="Explore these popular characters and see what's possible with GemVise."
      >
        <div className="mt-12">
          <GemList gems={featuredGems} onSelect={handleGemSelect} />
        </div>
      </Section>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} onLogin={() => setIsAuthenticated(true)} />
      )}
    </main>
  );
}
