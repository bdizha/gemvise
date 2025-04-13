'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

interface Gem {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  followers: number;
  chatCount: number;
  expertise: string[];
}

const mockGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Legend',
    description: 'Learn value investing from one of the most successful investors of all time.',
    category: 'Investing',
    imageUrl: '/gradients/mobile/GV-Gradient-01.png',
    followers: 1000000,
    chatCount: 50000,
    expertise: ['Value Investing', 'Business Analysis', 'Market Strategy']
  },
  {
    id: '2',
    name: 'Marie Kondo',
    title: 'Organization Expert',
    description: 'Discover the life-changing magic of tidying up and organizing.',
    category: 'Lifestyle',
    imageUrl: '/gradients/mobile/GV-Gradient-02.png',
    followers: 500000,
    chatCount: 25000,
    expertise: ['Home Organization', 'Minimalism', 'Life Management']
  },
  {
    id: '3',
    name: 'Gordon Ramsay',
    title: 'Celebrity Chef',
    description: 'Master the art of cooking with a world-renowned chef.',
    category: 'Cooking',
    imageUrl: '/gradients/mobile/GV-Gradient-03.png',
    followers: 750000,
    chatCount: 35000,
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique']
  }
];

export default function Page(): JSX.Element {
  const router = useRouter();

  const handleGemClick = (gemId: string) => {
    router.push(`/chat/${gemId}`);
  };

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Featured Gems</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGems.map((gem) => (
            <div
              key={gem.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
              onClick={() => handleGemClick(gem.id)}
            >
              <div className="relative h-40 mb-4">
                <img
                  src={gem.imageUrl}
                  alt={gem.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{gem.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{gem.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{gem.description}</p>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{gem.followers.toLocaleString()} followers</span>
                <span>{gem.chatCount.toLocaleString()} chats</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
