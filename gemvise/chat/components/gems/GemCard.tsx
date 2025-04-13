'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/ui/Card';

interface GemCardProps {
  gem?: {
    id?: string;
    name?: string;
    description?: string;
    image?: string;
    category?: string;
    followers?: number;
    expertise?: string[];
    chatCount?: string | number;
    energyLevel?: number;
  };
  onClick?: () => void;
}

const GemCard: React.FC<GemCardProps> = ({ gem = {}, onClick }) => {
  const {
    id = '',
    name = 'Untitled Gem',
    description = 'No description available',
    category = 'General',
    followers = 0,
    chatCount = 0,
  } = gem;

  const chatCountNum = typeof chatCount === 'string' ? parseInt(chatCount, 10) : chatCount;

  return (
    <Card
      className="relative overflow-hidden cursor-pointer h-[300px] group"
      onClick={onClick}
      data-testid="discover-card"
      style={{
        borderRadius: '28px',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(/gradients/mobile/GV-Gradient-04.png)',
        backgroundSize: 'cover'
      }}
    >
      <div className="relative h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-6">
          <Image
            src="/gradients/mobile/GV-Gradient-01.png"
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="mt-2 text-white/90">{description}</p>
        <div className="mt-4 flex items-center space-x-2">
          {category && (
            <>
              <span className="text-sm text-white/80">{category}</span>
              <span className="text-sm text-white/80">•</span>
            </>
          )}
          {followers > 0 && (
            <span className="text-sm text-white/80">{followers} followers</span>
          )}
          {chatCountNum > 0 && (
            <span className="text-sm text-white/80">{chatCount} chats</span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default GemCard;
