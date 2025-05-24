'use client';

import React from 'react';
import Section from '@/components/layout/Section';
import type { GridItem } from '@/components/layout/Grid/types';
import { worlds, type World } from '@/data/worldData';
import { boldlandData } from '@/data/worlds/boldland'; 
import type { Gem } from '@/types/gemium';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const gradients = [
  '/gradients/GV-gradient-01.png',
  '/gradients/GV-gradient-02.png',
  '/gradients/GV-gradient-03.png',
  '/gradients/GV-gradient-04.png',
  '/gradients/GV-gradient-05.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

const mapWorldToGridItem = (world: World): GridItem => ({
  id: world.id,
  title: world.name,
  description: world.shortDescription || (world.description ? world.description.substring(0, 100) + (world.description.length > 100 ? '...' : '') : 'No description available.'),
  imageUrl: world.imageUrl || getRandomGradient(),
  href: world.href || `/world/${world.id}`,
  subtitle: world.genres?.join(', '),
  cardVariant: 'world',
});

const mapGemToGridItem = (gem: Gem, worldName?: string): GridItem => ({
  id: gem.id,
  title: gem.name,
  description: (gem.description ? gem.description.substring(0, 100) + (gem.description.length > 100 ? '...' : '') : 'No description available.'),
  imageUrl: gem.imageUrl || getRandomGradient(),
  href: gem.href || `/gem/${gem.id}`,
  subtitle: gem.genres?.join(', ') || worldName,
});

export default function DiscoverPage() {
  const allWorldsGridItems: GridItem[] = worlds.map(mapWorldToGridItem);

  const featuredStoryItems: GridItem[] = (boldlandData.stories || [])
    .slice(0, 5) 
    .map((story: Gem) => mapGemToGridItem(story, boldlandData.name));

  const recentStoryItems: GridItem[] = worlds
    .reduce((acc: GridItem[], world: World) => { 
      if (world.stories && world.stories.length > 0) {
        acc.push(mapGemToGridItem(world.stories[0] as Gem, world.name)); 
      }
      return acc;
    }, [] as GridItem[])
    .slice(0, 7); 

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col gap-8 py-8 px-4 md:px-8 lg:px-12 text-white">
      <header className="flex items-center gap-3 mb-4 md:mb-8">
        <MagnifyingGlassIcon className="h-10 w-10 text-accent-500" />
        <h1 className="text-4xl md:text-5xl font-bold">Discover</h1>
      </header>

      {featuredStoryItems.length > 0 && (
        <Section
          title="Featured Storylines"
          items={featuredStoryItems}
          itemsDisplay="slider"
          className="bg-neutral-800/30 backdrop-blur-md rounded-3xl"
        />
      )}

      {allWorldsGridItems.length > 0 && (
        <Section
          title="Explore Worlds"
          items={allWorldsGridItems}
          itemsDisplay="grid" 
          gridColumns={3} 
          className="bg-neutral-800/30 backdrop-blur-md rounded-3xl"
        />
      )}

      {recentStoryItems.length > 0 && (
        <Section
          title="Recently Added Storylines"
          items={recentStoryItems}
          itemsDisplay="slider"
          className="bg-neutral-800/30 backdrop-blur-md rounded-3xl"
        />
      )}

      {recentStoryItems.length > 0 && (
        <Section
          title="Editor's Pick"
          items={recentStoryItems}
          itemsDisplay="slider"
          className="bg-neutral-800/30 backdrop-blur-md rounded-3xl"
        />
      )}

      <div className="text-center py-10 text-neutral-500">
        <p>More to discover soon...</p>
      </div>
    </div>
  );
}
