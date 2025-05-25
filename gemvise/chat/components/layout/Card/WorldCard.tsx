'use client';

import React from 'react';
import Link from 'next/link';
import Card from './Card';
import { cn } from '@/utils/utils';
import type { World } from '@/data/worldData';
import type { GridItem } from '@/components/layout/Grid/types';
import Image from 'next/image';

interface WorldCardProps {
  world: World;
  featuredGems?: GridItem[];
  className?: string;
}

const WorldCard: React.FC<WorldCardProps> = ({ world, featuredGems = [], className }) => {
  // Convert world to a GridItem format for the Card component
  const worldAsGridItem: GridItem = {
    id: world.id,
    title: world.name,
    description: world.description || `Explore the world of ${world.name}.`,
    imageUrl: world.imageUrl,
    href: `/world/${world.id}`
  };
  
  return (
    <Card
      variant="world"
      size="none"
      hover="scale"
      className={className}
      item={worldAsGridItem}
      imageOptions={{
        position: 'background',
        showOverlay: true,
        overlayClassName: 'bg-black/30'
      }}
    >
      <div className="relative z-10 p-6 transition-opacity duration-300 ease-in-out text-center opacity-100 delay-300 text-white/95 flex flex-col items-center h-full justify-center">
        {/* Hardcoded World Logo */}
        <div className="mb-4">
          <Image 
            src="/worlds/logos/spaceum.png" 
            alt="Spaceum World Logo" 
            width={80} 
            height={80} 
            className="object-contain"
          />
        </div>
        {/* Centered Icon Image from world data */}
        {typeof world.icon === 'string' && world.icon && (
          <div className="mb-4">
            <Image 
              src={world.icon} 
              alt={`${world.name} icon`} 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
        )}
        <h3 className="text-3xl font-bold mb-4 whitespace-nowrap">{world.name}</h3>
        <p className="text-base mb-6 opacity-80 leading-relaxed max-w-md mx-auto h-[150px] md:h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/50">
          {world.description || `Explore the world of ${world.name}.`}
        </p>
        {featuredGems.length > 0 && (
          <div className="mt-4 relative max-w-md mx-auto">
            <div className="bg-background/60 backdrop-blur-md rounded-[1.5rem] p-4 shadow-xl h-28 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {featuredGems.map(item => (
                  <Link key={item.id} href={item.href || '#'} className="block group">
                    <div className="bg-white/5 p-3 rounded-xl shadow-lg hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                      <p className="text-xs font-medium text-white/64 truncate text-center">{item.title}</p>
                      {item.subtitle && (
                        <p className="text-[10px] text-white/70 truncate text-center">{item.subtitle}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default WorldCard;
