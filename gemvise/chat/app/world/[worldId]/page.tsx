'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';

import { worlds } from '../../../data/worlds'; 
import type { GemiumWorld, Gem } from '../../../types/gemium'; 
import type { GridItem } from '@/components/layout/Grid/types';
import Section from '@/components/layout/Section';
import Tabs from '@/components/ui/Tabs';

const gradients = [
  '/gradients/cha-gradient-00.png',
  '/gradients/cha-gradient-01.png',
  '/gradients/cha-gradient-02.png',
  '/gradients/cha-gradient-03.png',
  '/gradients/cha-gradient-04.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

type WorldPageTabId = 'roleplays' | 'characters' | 'stories' | 'scenes'; 

const worldPageTabs: { id: WorldPageTabId; label: string }[] = [
  { id: 'roleplays', label: 'Roleplays' },
  { id: 'characters', label: 'Characters' },
  { id: 'stories', label: 'Stories' },
  { id: 'scenes', label: 'Scenes' },
];

export default function WorldDetail() {
  const params = useParams();
  const [world, setWorld] = useState<GemiumWorld | null>(null);
  const [worldGems, setWorldGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<WorldPageTabId>('characters');

  useEffect(() => {
    setLoading(true);
    const worldSlugParam = params.worldId as string; 

    if (!worldSlugParam) {
      setLoading(false);
      setWorld(null);
      setWorldGems([]);
      return;
    }

    const foundWorld = worlds.find(w => w.id.toLowerCase() === worldSlugParam.toLowerCase());
    
    setWorld(foundWorld || null);

    if (foundWorld) {
      const gemsFromMock = foundWorld.collections?.flatMap(collection => collection.gems || []) || [];
      setWorldGems(gemsFromMock);
    } else {
      setWorldGems([]);
    }

    setLoading(false);
  }, [params.worldId]); 

  const allGemsInWorld = useMemo(() => {
    return worldGems;
  }, [worldGems]);

  const mapGemToGridItem = (gem: Gem): GridItem => ({
    id: gem.id,
    title: gem.name,
    description: gem.description ? gem.description.substring(0, 100) + (gem.description.length > 100 ? '...' : '') : 'No description available.', 
    imageUrl: gem.imageUrl || getRandomGradient(),
    href: `/gem/${gem.id}`, 
    subtitle: gem.attributes?.rarity || gem.type,
    cardVariant: gem.type ? gem.type.toLowerCase() : 'default', 
  });

  const roleplayItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Adventure') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld]);

  const characterItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Character') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld]);

  const storyItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Story') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld]);

  const sceneItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Scene') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld]);

  if (loading) {
    return (
      <div className="min-h-screen bg-theme-surface flex items-center justify-center">
        <SparklesIcon className="h-8 w-8 text-theme-foreground animate-spin" />
      </div>
    );
  }

  if (!world) {
    return (
      <div className="min-h-screen bg-theme-surface flex flex-col items-center justify-center px-6 text-center">
        <GlobeAltIcon className="h-16 w-16 text-theme-foreground mb-4" />
        <h1 className="text-2xl font-bold text-theme-foreground">World Not Found</h1>
        <p className="mt-2 text-theme-foreground/60">
          The world '{(params.worldId as string) || ''}' was not found in the mock data. Try exploring other worlds.
        </p>
        <Link
          href="/explore" 
          className="mt-6 rounded-lg bg-[#ff9900] px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e68a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
        >
          Explore Other Worlds
        </Link>
      </div>
    );
  }

  let currentTabItems: GridItem[] = [];
  let currentTabTitle = '';
  switch (activeTab) {
    case 'roleplays':
      currentTabItems = roleplayItems;
      currentTabTitle = worldPageTabs.find(t => t.id === 'roleplays')?.label || 'Roleplays';
      break;
    case 'characters':
      currentTabItems = characterItems;
      currentTabTitle = worldPageTabs.find(t => t.id === 'characters')?.label || 'Characters';
      break;
    case 'stories':
      currentTabItems = storyItems;
      currentTabTitle = worldPageTabs.find(t => t.id === 'stories')?.label || 'Stories';
      break;
    case 'scenes':
      currentTabItems = sceneItems;
      currentTabTitle = worldPageTabs.find(t => t.id === 'scenes')?.label || 'Scenes';
      break;
    default:
      currentTabItems = characterItems; 
      currentTabTitle = worldPageTabs.find(t => t.id === 'characters')?.label || 'Characters';
  }

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col gap-8 py-8 px-4 md:px-8 lg:px-12">
      <Section
        variant="hero"
        title={world.name} 
        description={world.description} 
        className="bg-neutral-800/50 backdrop-blur-md rounded-3xl p-6 md:p-8 text-white"
      >
        {world.genres && world.genres.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {world.genres.map((genre) => (
              <span
                key={genre.id} 
                className="inline-flex items-center rounded-full bg-theme-surface/50 px-3 py-1.5 text-xs font-medium text-theme-foreground/80 ring-1 ring-inset ring-theme-foreground/10"
              >
                {genre.name} 
              </span>
            ))}
          </div>
        )}
      </Section>

      <div className="flex justify-center">
        <Tabs
          tabs={worldPageTabs}
          activeTab={activeTab}
          onChange={(tabId) => setActiveTab(tabId as WorldPageTabId)}
          className="bg-neutral-800/50 backdrop-blur-md p-1 rounded-full"
        />
      </div>

      {currentTabItems.length > 0 ? (
        <Section
          items={currentTabItems}
          itemsDisplay="slider"
          sliderSectionTitle={currentTabTitle} 
          className="bg-transparent px-4 md:px-0" 
        />
      ) : (
        <Section title={currentTabTitle} className="bg-transparent">
          <p className="text-center text-theme-foreground/60 py-10">
            No {currentTabTitle.toLowerCase()} available for {world.name} yet.
          </p>
        </Section>
      )}
    </div>
  );
}
