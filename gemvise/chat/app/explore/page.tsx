'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Section from '@/components/layout/Section';
import { type Gem } from '@/types/gems';
import { type GridItem } from '@/components/layout/Grid/types';
import { worlds as staticWorldsData } from '@/data/worlds';
import { type GemiumWorld } from '@/types/gemium'; 

const getRandomGradient = (index: number) => {
  const gradientNumbers = ['01', '02', '03', '05', '06', '07', '08', '09'];
  const selectedIndex = index % gradientNumbers.length;
  return `/gradients/GV-Gradient-${gradientNumbers[selectedIndex]}.png`;
};

const processStaticGems = (): Gem[] => {
  let allGemsFromStaticData: Gem[] = [];
  staticWorldsData.forEach(world => {
    world.collections.forEach(collection => {
      collection.gems.forEach((gem, gemIndex) => {
        const fullGem: Gem = {
          ...gem,
          world: world.id,
          imageUrl: gem.imageUrl || getRandomGradient(allGemsFromStaticData.length + gemIndex),
          description: gem.description || `A unique ${gem.type || 'gem'} from ${collection.name}`,
          genres: gem.genres || [],
          attributes: gem.attributes || { power: 0, rarity: 'Common', level: 0, traits: [] },
        };
        allGemsFromStaticData.push(fullGem);
      });
    });
  });
  return allGemsFromStaticData;
};

const mapToGridItems = (items: Gem[], handleItemClick: (itemId: string) => void): GridItem[] => {
  return items.map((item) => {
    let variant: GridItem['cardVariant'];

    // The type of 'item.type' is 'Character' | 'Story' | 'Adventure'
    const currentItemType: Gem['type'] = item.type;

    switch (currentItemType) {
      case 'Character':
        variant = 'character';
        break;
      case 'Story':
      case 'Adventure':
        variant = 'gem'; // Interpreting Story/Adventure as 'gem' card type for now
        break;
      // No 'Gem' or 'World' cases here as they are not in Gem['type']
      // If Gem['type'] could include other values, they would need a case or fall to default.
      default:
        // This default case will only be hit if Gem['type'] is expanded
        // and a new type is not explicitly handled above.
        // For current Gem['type'], all possibilities are covered.
        variant = 'default'; 
        break;
    }

    return {
      id: item.id,
      title: item.name,
      description: item.description || '',
      imageUrl: item.imageUrl,
      onClick: () => handleItemClick(item.id),
      subtitle: item.type === 'Character' ? (item.attributes?.rarity || 'Character') : (item.genres?.[0] || item.type), 
      cardVariant: variant,
    };
  });
};

const mapWorldsToGridItems = (worlds: GemiumWorld[], handleWorldClick: (worldId: string) => void): GridItem[] => {
  return worlds.map((world, index) => {
    return {
      id: world.id,
      title: world.name,
      description: world.description || '',
      imageUrl: getRandomGradient(index + 1000), // Offset index to avoid collision with gem gradients
      onClick: () => handleWorldClick(world.id),
      subtitle: world.genres?.[0]?.name || 'Universe', 
      cardVariant: 'world', // Explicitly set cardVariant for worlds
      // href: `/worlds/${world.id}`, // Alternative to onClick
    };
  });
};

export default function ExplorePage() {
  const router = useRouter();
  
  const allGems = useMemo(() => processStaticGems(), []);
  const allWorlds = useMemo(() => staticWorldsData, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleGemClick = useCallback((gemId: string) => {
    router.push(`/chat/${gemId}`);
  }, [router]);

  const handleWorldClick = useCallback((worldId: string) => {
    router.push(`/worlds/${worldId}`);
  }, [router]);

  const mediaGems = useMemo(() => allGems.filter(gem => gem.type === 'Story' || gem.type === 'Adventure'), [allGems]);
  const characterGems = useMemo(() => allGems.filter(gem => gem.type === 'Character'), [allGems]);
  const animeGems = useMemo(() => allGems.filter(gem => Array.isArray(gem.genres) && gem.genres.includes('Anime')), [allGems]);
  
  const editorsPicksGems = useMemo(() => {
    const picks: Gem[] = [];
    mediaGems.slice(0, Math.min(2, mediaGems.length)).forEach(gem => picks.push(gem));
    characterGems.slice(0, Math.min(1, characterGems.length)).forEach(gem => picks.push(gem));
    return Array.from(new Set(picks.map(g => g.id))).map(id => picks.find(g => g.id === id)!);
  }, [mediaGems, characterGems]);

  const mediaGridItems = useMemo(() => mapToGridItems(mediaGems, handleGemClick), [mediaGems, handleGemClick]);
  const characterGridItems = useMemo(() => mapToGridItems(characterGems, handleGemClick), [characterGems, handleGemClick]);
  const animeGridItems = useMemo(() => mapToGridItems(animeGems, handleGemClick), [animeGems, handleGemClick]);
  const editorsPicksGridItems = useMemo(() => mapToGridItems(editorsPicksGems, handleGemClick), [editorsPicksGems, handleGemClick]);
  const worldGridItems = useMemo(() => mapWorldsToGridItems(allWorlds, handleWorldClick), [allWorlds, handleWorldClick]);

  if (isLoading) { 
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground text-xl">Loading the GemVise Universe...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <Section 
        variant="hero"
        tag="Explore"
        title="Discover the GemVise Universe"
        description="Dive into diverse worlds, meet unique characters, and explore captivating stories. Your next adventure starts here."
        className="py-16 md:py-24 text-center"
      />

      {/* Featured Media Section */}
      {mediaGems.length > 0 && (
        <Section
          variant="default"
          tag="Media"
          title="Featured Media"
          description="Captivating stories, series, and cinematic adventures."
          items={mediaGridItems}
          itemsDisplay="grid"
          gridClassName="xl:grid-cols-4"
        />
      )}

      {/* Popular Characters Section */}
      {characterGems.length > 0 && (
        <Section
          variant="default"
          tag="Characters"
          title="Meet the Characters"
          description="Iconic personalities and AI companions ready to interact."
          items={characterGridItems}
          itemsDisplay="grid"
          gridClassName="xl:grid-cols-4"
        />
      )}

      {/* Worlds Section */}
      {worldGridItems.length > 0 && (
        <Section
          variant="default"
          tag="Worlds"
          title="Explore the Worlds"
          description="Discover diverse universes, each with unique collections and gems."
          items={worldGridItems}
          itemsDisplay="grid"
          gridClassName="xl:grid-cols-4"
        />
      )}

      {/* Editor's Picks Section */}
      {editorsPicksGems.length > 0 && (
        <Section
          variant="default"
          tag="Spotlight"
          title="Editor's Picks"
          description="Handpicked favorites by the GemVise team, showcasing the best of our universe."
          items={editorsPicksGridItems}
          itemsDisplay="grid"
          gridClassName="xl:grid-cols-4"
        />
      )}

      {/* Anime Spotlight Section */}
      {animeGems.length > 0 && (
        <Section
          variant="default"
          tag="Anime"
          title="Anime Spotlight"
          description="Explore gems from the vibrant world of Anime, from classic sagas to new adventures."
          items={animeGridItems}
          itemsDisplay="grid"
          gridClassName="xl:grid-cols-4"
        />
      )}

      {/* Community Stories Section (Placeholder) */}
      <Section
        variant="default"
        tag="Community"
        title="Community Stories & Creations"
        description="Discover tales, characters, and worlds crafted by fellow GemVise users. (Feature Coming Soon!)"
        className="py-12 md:py-16 text-center"
      >
        <div className="mt-8 p-8 bg-neutral-800/30 rounded-lg">
          <p className="text-lg text-neutral-400">Get ready to share your own narratives and explore user-generated content. This space will soon be filled with creativity from the community!</p>
        </div>
      </Section>

      {/* Placeholder for No Content - if allGems is empty after processing */}
      {!isLoading && allGems.length === 0 && (
         <Section
          variant="default"
          title="Nothing to Explore Yet"
          description="We're curating content. Please check back later!"
          className="py-20 text-center"
        />
      )}
    </main>
  );
}
