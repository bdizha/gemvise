'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Section from '@/components/layout/Section';
import GridList from '@/components/layout/Grid/GridList';
import { type Gem } from '@/types/gems';
import { type GridItem } from '@/components/layout/Grid/types';
import { useCallback } from 'react';
export default function ExplorePage() {
  const router = useRouter();
  const [gems, setGems] = useState<Gem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGems = async () => {
      try {
        const response = await fetch('/api/gems');
        const data = await response.json();
        setGems(data);
      } catch (error) {
        console.error('Error fetching gems:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGems();
  }, []);

  const handleGemClick = useCallback((gemId: string) => {
    router.push(`/chat/${gemId}`);
  }, [router]);

  const gridItems: GridItem[] = gems.map(gem => ({
    id: gem.id,
    title: gem.name,
    description: gem.description || '',
    onClick: () => handleGemClick(gem.id)
  }));

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Section
        variant="default"
        tag="Explore"
        title="Discover Gems"
        description="Find your perfect match from our curated collection of AI personas."
        className="py-20"
      >
        <div className="mt-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <div 
                  key={`skeleton-${index}`}
                  className="flex flex-col gap-4 p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse h-[200px]"
                />
              ))}
            </div>
          ) : (
            <GridList items={gridItems} />
          )}
        </div>
      </Section>
    </main>
  );
}
