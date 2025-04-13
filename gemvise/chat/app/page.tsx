'use client';

import { type FC } from 'react';
import { useRouter } from 'next/navigation';
import { type Gem } from '@/types/gems';
import GemCard from '@/components/gems/GemCard';
import GradientSection from '@/components/layout/Section/GradientSection';

const mockGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Expert',
    description: 'Learn value investing from the Oracle of Omaha',
    category: 'Finance',
    imageUrl: '/experts/warren-buffett.jpg',
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
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
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
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
    gradient: 'bg-gradient-to-r from-[#ff9900] to-[#ffac31]',
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique'],
    followers: 750000,
    chatCount: 35000
  }
];

const Page: FC = () => {
  const router = useRouter();

  const handleGemClick = (gemId: string) => {
    router.push(`/chat/${gemId}`);
  };

  return (
    <main className="min-h-screen">
      <GradientSection
        title="Welcome to GemVise"
        description="Have meaningful conversations with AI versions of real experts, thought leaders, and creators."
        className="py-24 text-center"
        theme="purple"
        isHero
      >
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockGems.map((gem) => (
            <GemCard key={gem.id} gem={gem} onClick={() => handleGemClick(gem.id)} />
          ))}
        </div>
      </GradientSection>
    </main>
  );
};

export default Page;
