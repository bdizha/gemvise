'use client';

import React from 'react';
import { worlds, type World } from '@/data/worldData';
import type { GridItem } from '@/components/layout/Grid/types';
import Section from '@/components/layout/Section';
import { UserCircleIcon } from '@heroicons/react/24/outline'; // Example icon

// Mock data for favorite world IDs (replace with actual data source later)
const mockFavoriteWorldIds = ['nakai', 'boldland', 'world03', 'spaceum']; // Added 'spaceum' as an example

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
  description: world.description ? world.description.substring(0, 100) + (world.description.length > 100 ? '...' : '') : 'No description available.',
  imageUrl: world.imageUrl || getRandomGradient(), // Use world's image or a random gradient
  href: `/world/${world.id}`,
  subtitle: world.genres && world.genres.length > 0 ? world.genres.join(', ') : 'General',
  cardVariant: 'world', // You might want a specific card variant for worlds
});

export default function ProfilePage() {
  const favoriteWorldsData = worlds.filter(world => mockFavoriteWorldIds.includes(world.id));
  const favoriteWorldItems: GridItem[] = favoriteWorldsData.map(mapWorldToGridItem);

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col gap-8 py-8 px-4 md:px-8 lg:px-12 text-white">
      {/* Basic Profile Header */}
      <header className="mb-8 text-center">
        <UserCircleIcon className="h-24 w-24 mx-auto text-neutral-400 mb-4" />
        <h1 className="text-4xl font-bold">My Profile</h1>
        {/* More profile details can go here */}
      </header>

      {/* Favorite Worlds Section */}
      {favoriteWorldItems.length > 0 ? (
        <Section
          title="Favorite Worlds"
          items={favoriteWorldItems}
          itemsDisplay="slider" // Or "grid"
          className="bg-neutral-800/30 backdrop-blur-md rounded-3xl"
          // gridColumns={3} // Example if using 'grid' display
        />
      ) : (
        <Section title="Favorite Worlds" className="bg-neutral-800/30 backdrop-blur-md rounded-3xl">
          <p className="text-center text-neutral-400 py-10">
            You haven&apos;t favorited any worlds yet.
          </p>
        </Section>
      )}

      {/* Placeholder for other profile sections */}
      {/* 
      <Section title="My Created Gems" itemsDisplay="grid" className="bg-neutral-800/30 backdrop-blur-md rounded-3xl">
        <p className="text-center text-neutral-400 py-10">
          Creation tools coming soon!
        </p>
      </Section> 
      */}
    </div>
  );
}
