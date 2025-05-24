'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';

import { worlds, type World } from '../../../data/worldData'; 
import type { Gem } from '../../../types/gemium'; 
import type { GridItem } from '@/components/layout/Grid/types';
import Card from '@/components/layout/Card/Card';
import { Grid } from '@/components/layout/Grid';
import Section, { type SectionProps } from '@/components/layout/Section/Section';
import { Tabs, type Tab } from '@/components/layout/Tabs';

const gradients = [
  '/gradients/GV-gradient-01.png',
  '/gradients/GV-gradient-02.png',
  '/gradients/GV-gradient-03.png',
  '/gradients/GV-gradient-04.png',
  '/gradients/GV-gradient-05.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

type WorldPageTabId = 'explore' | 'characters' | 'adventures' | 'scenes' | 'about';

const worldPageTabs: { id: WorldPageTabId; label: string }[] = [
  { id: 'explore', label: 'Explore' },
  { id: 'characters', label: 'Characters' },
  { id: 'adventures', label: 'Adventures' },
  { id: 'scenes', label: 'Scenes' },
  { id: 'about', label: 'About' },
];

interface SectionConfig {
  id: WorldPageTabId;
  variant: SectionProps['variant'];
  title: string;
  items?: GridItem[];
  description?: string;
  className?: string;
  gradient?: SectionProps['gradient'];
  children?: React.ReactNode;
  emptyMessage?: string;
  cta?: {
    href: string;
    label: string;
  };
}

const sectionsConfig: SectionConfig[] = [
  {
    id: 'explore',
    variant: 'slider',
    title: 'Featured Content',
    description: 'Highlights from this world',
    className: 'bg-gradient-purple-pink-purple/80 backdrop-blur-md rounded-3xl overflow-hidden',
    gradient: 'dark-light',
  },
  {
    id: 'characters',
    variant: 'slider',
    title: 'Characters',
    gradient: 'dark',
  },
  {
    id: 'adventures',
    variant: 'slider',
    title: 'Adventures',
    gradient: 'dark',
  },
  {
    id: 'scenes',
    variant: 'slider',
    title: 'Scenes',
    gradient: 'dark',
  },
  {
    id: 'about',
    variant: 'default',
    title: 'About',
    gradient: 'dark',
  },
];

export default function WorldDetail() {
  const params = useParams();
  const [world, setWorld] = useState<World | null>(null);
  const [worldGems, setWorldGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<WorldPageTabId>('explore');

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
      // Correctly aggregate gems from the World object's direct gem arrays
      const allGemsFromWorld: Gem[] = [
        ...(foundWorld.characters || []),
        ...(foundWorld.stories || []),
        ...(foundWorld.adventures || []),
        ...(foundWorld.scenes || []),
      ];
      setWorldGems(allGemsFromWorld);
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

  const featuredWorldBannerGems = useMemo(() => {
    if (!world) return [];
    // Take from allGemsInWorld, which includes characters, stories, adventures, scenes
    return allGemsInWorld.slice(0, 4).map(mapGemToGridItem);
  }, [allGemsInWorld, world, mapGemToGridItem]);

  const roleplayItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Adventure') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld, mapGemToGridItem]);

  const characterItems = useMemo(() => {
    if (world && world.id === 'boldland') {
      return [
        { id: "bp_00057", title: "Pup BFRC 00057", description: "A bold pup from Boldland.", href: "/gem/bp_00057", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00057.png" },
        { id: "bp_00058", title: "Pup BFRC 00058", description: "A brave pup from Boldland.", href: "/gem/bp_00058", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00058.png" },
        { id: "bp_00157", title: "Pup BFRC 00157", description: "An adventurous pup.", href: "/gem/bp_00157", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00157.png" },
        { id: "bp_00158", title: "Pup BFRC 00158", description: "Loyal and friendly pup.", href: "/gem/bp_00158", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00158.png" },
        { id: "bp_00257", title: "Pup BFRC 00257", description: "Always ready for action.", href: "/gem/bp_00257", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00257.png" },
        { id: "bp_00258", title: "Pup BFRC 00258", description: "A playful pup from Boldland.", href: "/gem/bp_00258", imageUrl: "/gems/boldland/BOLD-PUPS/bfrc_00258.png" },
      ];
    } else {
      return allGemsInWorld
        .filter(gem => gem.type === 'Character') 
        .map(mapGemToGridItem);
    }
  }, [allGemsInWorld, world, mapGemToGridItem]);

  const storyItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Story') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld, mapGemToGridItem]);

  const sceneItems = useMemo(() => {
    return allGemsInWorld
      .filter(gem => gem.type === 'Scene') 
      .map(mapGemToGridItem);
  }, [allGemsInWorld, mapGemToGridItem]);

  const genreItems = useMemo(() => {
    return world?.genres?.map(genre => ({
      id: `genre-${genre}`,
      title: genre,
      description: "", // Required by GridItem type
      href: `/explore?genre=${genre}`,
      className: "inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors duration-200"
    })) || [];
  }, [world?.genres]);

  const activeSectionConfig = sectionsConfig.find(config => config.id === activeTab);

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
          className="mt-6 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#e68a00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]"
        >
          Explore Other Worlds
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-dark flex flex-col gap-8 py-8 px-4 md:px-8 lg:px-12">
      {/* Hero Section */}
      <Section
        variant="profile"
        heroImageUrl={world.imageUrl || getRandomGradient()}
        heroImageAlt={`${world.name} world banner`}
        heroOverlay="bg-gradient-purple-pink-purple/90"
        heroContentPosition="bottom-left"
        title={world.name}
        description={world.description}
        className="min-h-[400px] mb-8"
        items={genreItems}
      />
      
      {/* Navigation Tabs */}
      <Tabs
        tabs={worldPageTabs}
        activeTab={activeTab}
        onChange={(tabId) => setActiveTab(tabId as WorldPageTabId)}
      />
      
      {/* Tab Content */}
      {activeSectionConfig && (
        <Section
          key={activeSectionConfig.id}
          variant={activeSectionConfig.variant}
          title={activeSectionConfig.title}
          description={activeSectionConfig.description}
          items={activeSectionConfig.id === 'explore' ? featuredWorldBannerGems : 
            activeSectionConfig.id === 'characters' ? characterItems : 
            activeSectionConfig.id === 'adventures' ? roleplayItems : 
            activeSectionConfig.id === 'scenes' ? sceneItems : 
            activeSectionConfig.id === 'about' ? [] : []}
          className={activeSectionConfig.className}
          gradient={activeSectionConfig.gradient}
        >
          {activeSectionConfig.children}
        </Section>
      )}
    </div>
  );
}
