'use client';

import { FC, useState, useMemo } from 'react';
import DefaultSection from '@/components/layout/Section/DefaultSection';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { worlds } from '@/data/worlds';
import Tabs from '@/components/ui/Tabs';
import { Gem } from '@/types/gemium';

// Define gradient classes to cycle through - for accordion
const gradients = [
  'bg-gradient-dark-light',
  'bg-gradient-dark-light',
  'bg-gradient-dark-light',
  'bg-gradient-dark-light',
];

// Tabs for the right column
type TabName = 'Trending' | 'Popular' | 'Upcoming';
const tabLabels: TabName[] = ['Trending', 'Popular', 'Upcoming'];

// Prepare tabs data for the Tabs component
const tabData = tabLabels.map(label => ({
  id: label,
  label: label
}));

export const Hero: FC = () => {
  const [activeWorldIndex, setActiveWorldIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<TabName>('Trending');

  // Memoized data processing for tabs
  const currentWorldGems = useMemo(() => {
    if (!worlds?.[activeWorldIndex]?.collections) return [];
    return worlds[activeWorldIndex].collections?.flatMap(col => col.gems || []) || [];
  }, [activeWorldIndex]);

  const allGems = useMemo(() => {
    // Get unique gems using Set
    const uniqueGems = new Set(
      worlds?.flatMap(world => 
        world.collections?.flatMap(col => col.gems || []) || []
      ).map(gem => JSON.stringify(gem))
    );
    return Array.from(uniqueGems).map(gemStr => JSON.parse(gemStr));
  }, [worlds]);

  const rarityWeights = {
    'Common': 1,
    'Uncommon': 2,
    'Rare': 3,
    'Epic': 4,
    'Legendary': 5,
    'Mythic': 6
  } as const;

  type RarityType = keyof typeof rarityWeights;

  const trendingGems = useMemo(() => {
    // Sort by a combination of power and rarity weight
    const weighted = [...allGems].map(gem => ({
      ...gem,
      weight: (gem.attributes?.power || 0) * rarityWeights[(gem.attributes?.rarity || 'Common') as RarityType]
    }));
    return weighted
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 4)
      .map(({ weight, ...gem }) => gem);
  }, [allGems]);

  const popularGems = useMemo(() => {
    const sorted = [...allGems].sort((a, b) => (b.attributes?.power || 0) - (a.attributes?.power || 0));
    return sorted.slice(0, 4);
  }, [allGems]);

  const upcomingGems = useMemo(() => {
    const filtered = [...allGems].filter(gem => gem.attributes?.rarity === 'Legendary' || gem.attributes?.rarity === 'Mythic');
    return filtered.slice(0, 4);
  }, [allGems]);

  // Handle case where there are no worlds
  if (!Array.isArray(worlds) || worlds.length === 0) {
    return null;
  }

  // Helper function to render gems as a vertical list
  const renderGemList = (gems: Gem[]) => { 
    return (
      <div className="grid gap-2 pb-2"> 
        {gems.map((gem, index) => ( 
          <Link
            key={gem.id}
            href={`/gems/${gem.id}`}
            className="block w-full h-20" 
          >
            <div className={`h-full rounded-[1.5rem] flex items-center p-4 bg-white/10 backdrop-blur-md transition-all`}>
              <img 
                src={`/gradients/mobile/GV-Gradient-0${(index % 5) + 1}.png`} 
                alt="" 
                className="w-12 h-12 rounded-[1.5rem] mr-4"
              />
              <div className="flex-1 text-left">
                <h3 className="text-sm font-medium text-white truncate">{gem.name}</h3>
                <p className="text-xs text-white/80 truncate">
                  {gem.attributes?.rarity || 'Common'} • {gem.attributes?.power || 0} Power
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const tabContent = useMemo(() => {
    let gems;
    switch (activeTab) {
      case 'Popular':
        gems = popularGems;
        break;
      case 'Upcoming':
        gems = upcomingGems;
        break;
      case 'Trending':
      default:
        gems = trendingGems;
    }
    return renderGemList(gems);
  }, [activeTab, trendingGems, popularGems, upcomingGems]);

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8"> 
          {/* Left Column (2/3 width on large screens) */}
          <div className="lg:col-span-2 mb-8 lg:mb-0"> 
            <div className="flex h-full space-x-4"> 
              {worlds.map((world, index) => {
                const isActive = activeWorldIndex === index;
                const gradientClass = gradients[index % gradients.length]; 

                return (
                  <div
                    key={world.id}
                    className={`relative flex flex-col justify-end overflow-hidden rounded-[4rem] cursor-pointer transition-all duration-500 ease-in-out ${isActive ? 'w-3/4' : 'w-[4rem]'} ${isActive ? 'bg-gradient-pink-purple' : gradientClass}`}
                    onMouseEnter={() => setActiveWorldIndex(index)}
                  >
                    {/* Content visible only when active - fade in */}
                    <div className={`relative z-10 p-6 transition-opacity duration-300 ease-in-out text-center ${isActive ? 'opacity-100 delay-300' : 'opacity-0'} ${isActive ? 'text-white/95' : 'text-[#5f6b7a]'}`}>
                      <h3 className="text-3xl font-bold mb-4 whitespace-nowrap">{world.name}</h3>
                      <p className="text-base mb-6 opacity-80 leading-relaxed max-w-md mx-auto">{world.description}</p>
                      {isActive && (
                        <div className="mt-4 relative max-w-md mx-auto">
                          <div className="bg-background/60 backdrop-blur-md rounded-[1.5rem] p-4 shadow-xl">
                            <div className="grid grid-cols-2 gap-4">
                              {currentWorldGems.slice(0, 4).map((gem, i) => (
                                <Link
                                  key={i}
                                  href={`/gems/${gem.id}`}
                                  className="flex items-center text-left space-x-3 p-2 rounded-[1.5rem] bg-white/10 hover:bg-white/36 transition-colors"
                                >
                                  <div className="relative w-10 h-10 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                                    {(gem as any).image && (
                                      <img
                                        src={(gem as any).image}
                                        alt={gem.name || ''}
                                        className="object-cover w-full h-full"
                                      />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{gem.name}</p>
                                    <p className="text-xs text-white truncate">{gem.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {/* Vertical title visible only when inactive */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center p-2">
                        <div className="transform -rotate-90 whitespace-nowrap">
                          <h3 className="text-lg font-medium text-white/80">{world.name}</h3>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <div className="flex flex-col h-full gap-2">
              <div className="flex flex-col gap-3 flex-1 bg-gradient-dark rounded-[1.5rem] p-6">
                <div className="group relative h-14">
                  <div id="tabs-container" className="overflow-x-auto scrollbar-none h-full py-1">
                    <Tabs
                      tabs={tabData} 
                      activeTab={activeTab}
                      onChange={(tabId) => setActiveTab(tabId as TabName)}
                      className="space-x-2"
                    />
                  </div>
                </div>
                <div className="flex-1 pt-3">
                  <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20 space-y-4">
                    {tabContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
