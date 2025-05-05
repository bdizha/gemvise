'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { worlds } from '@/data/worlds';
import Section from '@/components/layout/Section';
import GradientSection from '@/components/layout/Section/GradientSection';
import CategoryTabs from '@/components/ui/CategoryTabs';
import { type Gem } from '@/types/gems';
import { type GradientTheme } from '@/components/layout/Section/GradientSection';

export default function WorldsPage() {
  const [selectedWorld, setSelectedWorld] = useState<string>('all');
  
  // Get all gems from worlds and add category/expertise
  const allGems = worlds.flatMap(world => 
    world.collections.flatMap(collection => 
      collection.gems.map(gem => ({
        ...gem,
        category: gem.genres[0] || 'Adventure',
        expertise: gem.attributes.traits
      }))
    )
  );

  // Filter gems by selected world
  const filteredGems = selectedWorld === 'all' 
    ? allGems 
    : allGems.filter(gem => gem.world === selectedWorld);

  // Get unique world names for tabs
  const worldNames = ['all', ...worlds.map(world => world.id)];

  return (
    <Section
      title="Explore Worlds"
      description="Discover unique characters and stories across different worlds"
    >
      <div className="space-y-8">
        <CategoryTabs
          selectedCategories={[selectedWorld]}
          onToggle={(category: string) => setSelectedWorld(category)}
          showIcons={false}
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filteredGems.map((gem: Gem) => (
            <GradientSection 
              key={gem.id}
              title={gem.name}
              description={gem.description}
              theme={(gem.genres[0] === 'Anime' ? 'dark-light-dark' :
                gem.genres[0] === 'Action' ? 'dark-light' :
                gem.genres[0] === 'Adventure' ? 'light-dark' :
                gem.genres[0] === 'Fantasy' ? 'pink-purple-pink' :
                gem.genres[0] === 'Romance' ? 'pink-purple' :
                gem.genres[0] === 'Drama' ? 'purple-pink-purple' :
                'purple-pink') as GradientTheme}
              className="h-[360px] rounded-[32px] overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] shadow-lg border border-border/10"
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{gem.name}</h3>
                  <p className="text-white/80 line-clamp-2">{gem.description}</p>
                </div>
                
                {gem.attributes.traits && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {gem.attributes.traits.map((trait, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </GradientSection>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
