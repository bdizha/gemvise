'use client';

import { type FC } from 'react';
import { useRouter } from 'next/navigation';
import { type Gem } from '@/types/gems';
import GemCard from '@/components/gems/GemCard';
import SliderSection from '@/components/layout/Section/SliderSection';
import type { SliderCardProps } from '@/components/layout/Section/SliderSection';

const expertCards: SliderCardProps[] = [
  {
    title: "Warren Buffett on Value Investing & Wealth Building",
    description: "Learn investment strategies and wisdom from the Oracle of Omaha.",
    imageSrc: "/gradients/dark-light-dark.png",
    status: "featured",
    href: "/expert/warren-buffett",
    buttonText: "Start Learning",
    videoSrc: "/experts/warren-buffett-preview.mp4"
  },
  {
    title: "Master Culinary Arts with Gordon Ramsay",
    description: "Master culinary techniques and recipes with personalized guidance.",
    imageSrc: "/gradients/dark-light-dark.png",
    status: "popular",
    href: "/expert/gordon-ramsay",
    buttonText: "Start Cooking"
  },
  {
    title: "Innovation & Technology with Elon Musk",
    description: "Explore technology, innovation, and entrepreneurship through the lens of a visionary.",
    imageSrc: "/gradients/dark-light-dark.png",
    status: "trending",
    href: "/expert/elon-musk",
    buttonText: "Explore Ideas"
  },
  {
    title: "Life Design & Organization with Marie Kondo",
    description: "Transform your space and life with the KonMari method.",
    imageSrc: "/gradients/dark-light-dark.png",
    status: "available",
    href: "/expert/marie-kondo",
    buttonText: "Start Organizing"
  },
  {
    title: "Leadership & Public Service with Michelle Obama",
    description: "Learn about leadership, public service, and personal growth from the former First Lady.",
    imageSrc: "/gradients/dark-light-dark.png",
    status: "featured",
    href: "/expert/michelle-obama",
    buttonText: "Learn More"
  }
];

const mockGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Expert',
    description: 'Learn value investing from the Oracle of Omaha',
    category: 'Finance',
    imageUrl: '/experts/warren-buffett.jpg',
    gradient: 'bg-gradient-to-r from-[#333] to-[#666] to-[#333]',
    expertise: ['Value Investing', 'Business Analysis', 'Market Strategy'],
    followers: 1000000,
    chatCount: 50000
  },
  {
    id: '2',
    name: 'Marie Kondo',
    title: 'Organization Expert',
    description: 'Master the art of tidying up and organizing',
    category: 'Lifestyle',
    imageUrl: '/experts/marie-kondo.jpg',
    gradient: 'bg-gradient-to-r from-[#333] to-[#666] to-[#333]',
    expertise: ['Organization', 'Minimalism', 'Home Design'],
    followers: 500000,
    chatCount: 25000
  },
  {
    id: '3',
    name: 'Gordon Ramsay',
    title: 'Celebrity Chef',
    description: 'Master the art of cooking with a world-renowned chef.',
    category: 'Cooking',
    imageUrl: '/gradients/mobile/GV-Gradient-03.png',
    gradient: 'bg-gradient-to-r from-[#333] to-[#666] to-[#333]',
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique'],
    followers: 750000,
    chatCount: 35000
  }
];

export default function Home() {
  const router = useRouter();

  const handleGemClick = (gemId: string) => {
    router.push(`/chat/${gemId}`);
  };

  return (
    <main className="min-h-screen bg-[#F4EFED]">
      <SliderSection
        title="Featured Experts"
        cards={expertCards}
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockGems.map((gem) => (
          <GemCard key={gem.id} gem={gem} onClick={() => handleGemClick(gem.id)} />
        ))}
      </div>
    </main>
  );
}
