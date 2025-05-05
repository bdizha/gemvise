'use client';

import { FC, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { worlds } from '@/data/worlds';
import Tabs from '@/components/ui/Tabs';
import { Gem } from '@/types/gemium';

// Define gradient classes to cycle through - for accordion
const gradients = [
  'bg-gradient-pink-purple',
  'bg-gradient-purple-pink',
  'bg-gradient-light-dark',
  'bg-gradient-dark-light', // Reusing dark-light for the 4th world (Spaceum)
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

  const trendingGems = useMemo(() => currentWorldGems.slice(0, 4), [currentWorldGems]);

  const allGems = useMemo(() => worlds?.flatMap(world => 
    world.collections?.flatMap(col => col.gems || []) || []
  ) || [], []);

  const popularGems = useMemo(() => {
    return [...allGems]
      .sort((a, b) => (b.attributes?.power || 0) - (a.attributes?.power || 0))
      .slice(0, 4);
  }, [allGems]);

  const upcomingGems = useMemo(() => {
    return allGems
      .filter(gem => gem.attributes?.rarity === 'Legendary' || gem.attributes?.rarity === 'Mythic')
      .slice(0, 4);
  }, [allGems]);

  // Handle case where there are no worlds
  if (!Array.isArray(worlds) || worlds.length === 0) {
    return null;
  }

  // Helper function to render gems as a vertical list
  const renderGemList = (gems: Gem[]) => { 
    const displayGems = gems.slice(0, 4); // Limit to 4 items

    return (
      // Container div - no height needed here now
      <div className="pb-2"> 
        {displayGems.map((gem, index) => ( 
          <Link
            key={gem.id}
            href={`/chat/${gem.id}`}
            className="block w-full h-20 mb-2" 
          >
            {/* Use cycling gradients from accordion, rounded-lg, remove overlay */}
            <div className={`h-full rounded-lg flex items-center justify-center p-2 text-center ${gradients[index % gradients.length]} bg-cover bg-center transition-all`}>
              <span className="text-xs font-medium text-foreground truncate w-full">
                {gem.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case 'Trending':
        return renderGemList(trendingGems);
      case 'Popular':
        return renderGemList(popularGems);
      case 'Upcoming':
        return renderGemList(upcomingGems);
      default:
        return null;
    }
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
                    className={`
                      relative flex flex-col justify-end overflow-hidden rounded-2xl 
                      cursor-pointer transition-all duration-500 ease-in-out
                      ${isActive ? 'w-1/2' : 'w-16'} 
                      ${gradientClass} 
                    `}
                    onMouseEnter={() => setActiveWorldIndex(index)}
                  >
                    {/* Content visible only when active - fade in */}
                    <div className={`
                      relative z-10 p-6 text-foreground transition-opacity duration-300 ease-in-out text-center
                      ${isActive ? 'opacity-100 delay-300' : 'opacity-0'} 
                    `}>
                      <h3 className="text-3xl font-bold mb-4 whitespace-nowrap text-white/90">{world.name}</h3>
                      <p className="text-base mb-6 text-white/80 leading-relaxed max-w-md mx-auto">{world.description}</p>
                      {isActive && (
                        <div className="mt-4 relative max-w-md mx-auto">
                          <div className="bg-background/10 backdrop-blur-md rounded-xl p-4 shadow-xl">
                            <div className="relative">
                              <div 
                                className="min-h-[64px] max-h-[140px] w-full rounded-lg bg-white/5 p-4"
                                style={{
                                  boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.1)',
                                }}
                              >
                                <textarea
                                  className="w-full min-h-[16px] bg-transparent border-none outline-none resize-none text-base text-white/90 placeholder:text-white/50 text-center"
                                  placeholder={world.id === 'boldland' ? 'Embark your adventure...' :
                                    world.id === 'nakaland' ? 'Discover anime legends...' :
                                    world.id === 'naimland' ? 'Explore mystical realms...' :
                                    'Journey through space...'}
                                  rows={1}
                                  style={{ height: 'auto' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Vertical title visible only when inactive */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center p-2">
                        <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-center font-semibold text-foreground opacity-80 text-sm">
                          {world.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (1/3 width on large screens) */}
          <div className="lg:col-span-1 space-y-6">
            {/* Tabs Section - Added mb-4 */}
            <div className="mb-4"> 
              <Tabs
                tabs={tabData} 
                activeTab={activeTab}
                onChange={(tabId) => setActiveTab(tabId as TabName)}
                className="space-x-2"
              />
            </div>
            {/* Wrap tabContent in a div with fixed height for 4 items */}
            {/* Height adjusted for 4 * h-20 + 3 * mb-2 = 20rem + 1.5rem = 21.5rem */}
            <div className="h-[21.5rem] overflow-y-auto scrollbar">
              {tabContent}
            </div>

            {/* Spacer */}
            <div className="h-6"></div>

          </div>
        </div>
      </div>
    </section>
  );
};
