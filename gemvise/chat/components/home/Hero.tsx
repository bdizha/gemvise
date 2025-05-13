'use client';

import { FC, useState, useMemo, useEffect } from 'react';
import DefaultSection from '@/components/layout/Section/DefaultSection';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { World, worlds } from '@/data/worldData';
import Tabs from '@/components/ui/Tabs';
import { Gem } from '@/types/gemium';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

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

// Static default genre labels for fallback
const defaultGenreLabels = [
  'All',
  'Adventure',
  'Fantasy',
  'Sci-Fi',
  'Mystery',
  'Romance',
  'Historical',
  'Thriller',
  'Comedy',
  'Drama',
];

export interface HeroProps {
  onGenreTabChange?: (genre: string) => void;
  availableGenres?: string[]; // New optional prop
}

export const Hero: FC<HeroProps> = ({ onGenreTabChange, availableGenres }) => {
  const [activeWorldIndex, setActiveWorldIndex] = useState<number>(0); // This will be the global index
  const [activeTab, setActiveTab] = useState<TabName>('Trending');
  const [currentWorldStartIndex, setCurrentWorldStartIndex] = useState<number>(0);

  const WORLDS_PER_PAGE = 5; // Number of worlds to display in the horizontal scroller at a time

  // Determine which genre list to use for rendering tabs
  const genresToDisplay = useMemo(() => 
    (availableGenres && availableGenres.length > 0 ? availableGenres : defaultGenreLabels),
    [availableGenres]
  );

  // Ensure initial active genre is valid based on the list being used
  const [activeGenreTab, setActiveGenreTab] = useState<string>(genresToDisplay[0]); 

  // Effect to reset active genre if the available genres change externally 
  // and the current one is no longer valid
  useEffect(() => {
    // Only reset if the list actually changed and the current tab is invalid
    if (genresToDisplay && !genresToDisplay.includes(activeGenreTab)) {
      setActiveGenreTab(genresToDisplay[0]);
    }
    // If genresToDisplay becomes empty or undefined, reset to 'All' (or default first)
    else if (!genresToDisplay || genresToDisplay.length === 0) {
        setActiveGenreTab(defaultGenreLabels[0]);
    }
  }, [genresToDisplay, activeGenreTab]);

  // Memoized data processing for tabs
  const currentWorldGems = useMemo(() => {
    const world = worlds?.[activeWorldIndex];
    if (!world) return [];
    return [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || [])
    ];
  }, [activeWorldIndex, worlds]);

  const allGems = useMemo(() => {
    // Get unique gems using Set
    const uniqueGems = new Set(
      worlds?.flatMap(world => 
        [
          ...(world.characters || []),
          ...(world.stories || []),
          ...(world.adventures || []),
          ...(world.scenes || [])
        ]
      ).map(gem => JSON.stringify(gem))
    );
    return Array.from(uniqueGems).map(gemStr => JSON.parse(gemStr) as Gem);
  }, [worlds]);

  const filteredGemsByGenre = useMemo(() => {
    if (activeGenreTab === 'All') {
      return allGems;
    }
    return allGems.filter(gem => gem.genres?.includes(activeGenreTab));
  }, [allGems, activeGenreTab]);

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
    const weighted = [...filteredGemsByGenre].map(gem => ({
      ...gem,
      weight: (gem.attributes?.power || 0) * rarityWeights[(gem.attributes?.rarity || 'Common') as RarityType]
    })); 
    return weighted
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 4)
      .map(({ weight, ...gem }) => gem);
  }, [filteredGemsByGenre]);

  const popularGems = useMemo(() => {
    const sorted = [...filteredGemsByGenre].sort((a, b) => (b.attributes?.power || 0) - (a.attributes?.power || 0));
    return sorted.slice(0, 4);
  }, [filteredGemsByGenre]);

  const upcomingGems = useMemo(() => {
    const filtered = [...filteredGemsByGenre].filter(gem => gem.attributes?.rarity === 'Legendary' || gem.attributes?.rarity === 'Mythic');
    return filtered.slice(0, 4);
  }, [filteredGemsByGenre]);

  // Handle case where there are no worlds
  if (!Array.isArray(worlds) || worlds.length === 0) {
    return null;
  }

  const totalWorldPages = Math.ceil(worlds.length / WORLDS_PER_PAGE);

  const handleNextWorld = () => {
    const nextActiveIndex = (activeWorldIndex + 1) % worlds.length;
    setActiveWorldIndex(nextActiveIndex);

    const newStartIndexBasedOnActive = Math.floor(nextActiveIndex / WORLDS_PER_PAGE) * WORLDS_PER_PAGE;
    if (newStartIndexBasedOnActive !== currentWorldStartIndex) {
      setCurrentWorldStartIndex(newStartIndexBasedOnActive);
    }
  };

  const handlePrevWorld = () => {
    const prevActiveIndex = (activeWorldIndex - 1 + worlds.length) % worlds.length;
    setActiveWorldIndex(prevActiveIndex);

    const newStartIndexBasedOnActive = Math.floor(prevActiveIndex / WORLDS_PER_PAGE) * WORLDS_PER_PAGE;
    if (newStartIndexBasedOnActive !== currentWorldStartIndex) {
      setCurrentWorldStartIndex(newStartIndexBasedOnActive);
    }
  };

  // Calculate the slice of worlds to display
  const visibleWorlds = useMemo(() => {
    return worlds.slice(currentWorldStartIndex, currentWorldStartIndex + WORLDS_PER_PAGE);
  }, [worlds, currentWorldStartIndex, WORLDS_PER_PAGE]);

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
        {/* New Genre Tabs Row */}
        <div className="mb-12">
          <div className="overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            {genresToDisplay.map(genre => (
              <button
                key={genre}
                onClick={() => {
                  setActiveGenreTab(genre);
                  if (onGenreTabChange) {
                    onGenreTabChange(genre);
                  }
                }}
                className={`
                  inline-block rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 mr-3 last:mr-0 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]/50 
                  ${activeGenreTab === genre 
                    ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-md' 
                    : 'bg-transparent border border-[var(--muted-foreground)] text-[var(--foreground)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]'
                  }
                `}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8"> 
          {/* Left Column (2/3 width on large screens) */}
          <div className="lg:col-span-2 mb-8 lg:mb-0">
            <div className="relative flex items-center h-full"> 
              {/* Previous World Button */}
              {worlds.length > WORLDS_PER_PAGE && (
                <button 
                  onClick={handlePrevWorld} 
                  disabled={currentWorldStartIndex === 0}
                  className="absolute -left-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  aria-label="Previous worlds"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-white" />
                </button>
              )}

              <div className="flex h-full space-x-4 overflow-hidden w-full justify-center"> 
                {visibleWorlds.map((world, localIndex) => {
                  const globalIndex = currentWorldStartIndex + localIndex;
                  const isActive = activeWorldIndex === globalIndex;
                  const gradientClass = gradients[globalIndex % gradients.length]; 

                  return (
                    <div
                      key={world.id} 
                      className={`relative flex flex-col justify-end overflow-hidden rounded-[4rem] cursor-pointer transition-all duration-500 ease-in-out ${isActive ? 'w-3/4' : 'w-[4rem]'} ${isActive ? 'bg-gradient-pink-purple' : gradientClass} flex-shrink-0`}
                      onMouseEnter={() => setActiveWorldIndex(globalIndex)} 
                    >
                      {/* Content visible only when active - fade in */}
                      <div className={`relative z-10 p-6 transition-opacity duration-300 ease-in-out text-center ${isActive ? 'opacity-100 delay-300' : 'opacity-0'} ${isActive ? 'text-white/95' : 'text-[#5f6b7a]'}`}> 
                        <h3 className="text-3xl font-bold mb-4 whitespace-nowrap">{world.name}</h3>
                        <p className="text-base mb-6 opacity-80 leading-relaxed max-w-md mx-auto h-[150px] md:h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/10">
                          {(activeWorldIndex === globalIndex && world.description) ? world.description : (activeWorldIndex === globalIndex ? '\u00A0' : '')}
                        </p>
                        {activeWorldIndex === globalIndex && (
                          <div className="mt-4 relative max-w-md mx-auto">
                            <div className="bg-background/60 backdrop-blur-md rounded-[1.5rem] p-4 shadow-xl h-28 overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-white/10">
                              {currentWorldGems && currentWorldGems.length > 0 ? (
                                <div className="grid grid-cols-2 gap-3">
                                  {currentWorldGems.slice(0, 4).map(gem => (
                                    <Link key={gem.id} href={`/gem/${gem.id}`} className="block group">
                                      <div className="bg-white/5 p-3 rounded-xl shadow-lg hover:bg-white/10 transition-colors h-full flex flex-col justify-center">
                                        <p className="text-xs font-medium text-white truncate text-center">{gem.name}</p>
                                        {gem.attributes?.rarity && (
                                          <p className="text-[10px] text-white/70 truncate text-center">{gem.attributes.rarity}</p>
                                        )}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ) : (
                                <div className="h-full flex items-center justify-center">
                                  <p className="text-xs text-white/60 text-center">
                                    No gems to display for this world yet.
                                  </p>
                                </div>
                              )}
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

              {/* Next World Button */}
              {worlds.length > WORLDS_PER_PAGE && (
                <button 
                  onClick={handleNextWorld} 
                  disabled={currentWorldStartIndex >= worlds.length - WORLDS_PER_PAGE}
                  className="absolute -right-4 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  aria-label="Next worlds"
                >
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </button>
              )}
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
                  <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20 hover:scrollbar-thumb-white/30 space-y-4">
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
