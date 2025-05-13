'use client';

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Section from '@/components/layout/Section';
import { type Gem } from '@/types/gems';
import { type GridItem } from '@/components/layout/Grid/types';
import { worlds as staticWorldsData, type World } from '@/data/worldData'; 
import { Hero } from '@/components/home/Hero'; 

// Define the structure for a section configuration
interface ExploreSectionConfig {
  id: string;
  tag: string;
  title: string;
  description: string;
  items: GridItem[];
  itemsDisplay: 'slider' | 'grid';
  gridClassName?: string;
  // sectionVariant?: SectionProps['variant']; // Optional: if sections need different overall styling
}

// List of available gradient image filenames (excluding .DS_Store)
const gradientImageFiles = [
  "GV-Gradient-Dark-Light-Dark.png",
  "GV-Gradient-Dark-Light.png",
  "GV-Gradient-Dark.png",
  "GV-Gradient-Light-Dark-Light.png",
  "GV-Gradient-Light-Dark.png",
  "GV-Gradient-Pink-Purple-Pink.png",
  "GV-Gradient-Pink-Purple.png",
  "GV-Gradient-Purple-Pink-Purple.png",
  "GV-Gradient-Purple-Pink.png",
];

const getRandomGradient = (index: number): string => {
  const selectedImage = gradientImageFiles[index % gradientImageFiles.length];
  return `/gradients/desktop/${selectedImage}`;
};

const processStaticGems = (): Gem[] => {
  let allGemsFromStaticData: Gem[] = [];
  staticWorldsData.forEach((world: World) => {
    const gemSources: (Gem[] | undefined)[] = [
      world.characters,
      world.stories,
      world.adventures,
      world.scenes
    ];

    gemSources.forEach(sourceArray => {
      if (sourceArray) {
        sourceArray.forEach((gem: Gem, gemIndex: number) => {
          const fullGem: Gem = {
            ...gem,
            world: world.id,
            imageUrl: gem.imageUrl || getRandomGradient(allGemsFromStaticData.length + gemIndex),
            description: gem.description || `A unique ${gem.type || 'gem'} from ${world.name}`,
            genres: gem.genres || [],
            attributes: gem.attributes || { power: 0, rarity: 'Common', level: 0, traits: [] },
          };
          allGemsFromStaticData.push(fullGem);
        });
      }
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
      imageUrl: item.imageUrl || getRandomGradient(item.id.charCodeAt(0) + item.id.length),
      onClick: () => handleItemClick(item.id),
      href: `/chat/${item.id}`,
      subtitle: item.type === 'Character' ? (item.attributes?.rarity || 'Character') : (item.genres?.[0] || item.type), 
      cardVariant: variant,
    };
  });
};

const mapWorldsToGridItems = (worlds: World[], handleWorldClick: (worldId: string) => void): GridItem[] => {
  return worlds.map((world, index) => {
    return {
      id: world.id,
      title: world.name,
      description: world.description || '',
      imageUrl: world.imageUrl || getRandomGradient(index + 1000), 
      onClick: () => handleWorldClick(world.id),
      subtitle: world.genres?.[0] || 'Universe', // Adjusted for World.genres: string[]
      cardVariant: 'world', 
      href: `/world/${world.id}`,
    };
  });
};

export default function ExplorePage() {
  const router = useRouter();
  
  const allGemsFromData = useMemo(() => processStaticGems(), []);
  const allWorldsFromData: World[] = useMemo(() => staticWorldsData, []);

  const [isLoading, setIsLoading] = useState(false);

  // Dynamically generate available genres for tabs
  const availableGenresForTabs = useMemo(() => {
    const allGemGenres = allGemsFromData.flatMap(gem => gem.genres || []);
    const allWorldGenres = allWorldsFromData.flatMap(world => world.genres || []);
    const combinedGenres = Array.from(new Set([...allGemGenres, ...allWorldGenres])).sort();
    return ['All', ...combinedGenres];
  }, [allGemsFromData, allWorldsFromData]);

  const [currentGenreFilter, setCurrentGenreFilter] = useState<string>(availableGenresForTabs[0] || 'All');

  // Effect to update currentGenreFilter if availableGenresForTabs changes and current filter is no longer valid
  useEffect(() => {
    if (!availableGenresForTabs.includes(currentGenreFilter)) {
      setCurrentGenreFilter(availableGenresForTabs[0] || 'All');
    }
  }, [availableGenresForTabs, currentGenreFilter]);

  const handleGenreTabChange = useCallback((genre: string) => {
    setCurrentGenreFilter(genre);
  }, []);

  // Filtered data based on genre
  const filteredGems = useMemo(() => {
    if (currentGenreFilter === 'All') {
      return allGemsFromData;
    }
    return allGemsFromData.filter(gem => gem.genres?.includes(currentGenreFilter));
  }, [allGemsFromData, currentGenreFilter]);

  const filteredWorlds = useMemo(() => {
    if (currentGenreFilter === 'All') {
      return allWorldsFromData;
    }
    // Assuming world.genres is an array of strings matching genreTabLabels
    // If world.genres is [{id: '...', name: '...'}], then use: 
    // world.genres?.some(g => g.name === currentGenreFilter)
    return allWorldsFromData.filter(world => world.genres?.includes(currentGenreFilter)); 
  }, [allWorldsFromData, currentGenreFilter]);

  const handleGemClick = useCallback((gemId: string) => {
    router.push(`/chat/${gemId}`);
  }, [router]);

  const handleWorldClick = useCallback((worldId: string) => {
    router.push(`/world/${worldId}`);
  }, [router]);

  const mediaGems = useMemo(() => filteredGems.filter(gem => gem.type === 'Story' || gem.type === 'Adventure'), [filteredGems]);
  const characterGems = useMemo(() => filteredGems.filter(gem => gem.type === 'Character'), [filteredGems]);
  
  // Anime Spotlight: Source from ALL gems, not just filteredGems
  const animeGems = useMemo(() => {
    return allGemsFromData.filter(gem => 
      Array.isArray(gem.genres) && gem.genres.includes('Anime')
    );
  }, [allGemsFromData]);
  
  // Editor's Picks / Spotlight: Source from ALL gems, prioritize Legendary/Epic, independent of genre filter
  const editorsPicksGems = useMemo(() => {
    const legendary = allGemsFromData.filter(gem => gem.attributes?.rarity === 'Legendary');
    const epics = allGemsFromData.filter(gem => gem.attributes?.rarity === 'Epic');
    
    let picks = legendary.slice(0, 3); // Take up to 3 legendary gems
    if (picks.length < 5) { // If we have less than 5 picks, add epics
      picks = picks.concat(epics.slice(0, 5 - picks.length));
    }
    // Ensure a specific number of picks, e.g., 4 or 5, or just return what's found
    return picks.slice(0, 5); // Show up to 5 picks
  }, [allGemsFromData]);

  const mediaGridItems = useMemo(() => mapToGridItems(mediaGems, handleGemClick), [mediaGems, handleGemClick]);
  const characterGridItems = useMemo(() => mapToGridItems(characterGems, handleGemClick), [characterGems, handleGemClick]);
  const animeGridItems = useMemo(() => mapToGridItems(animeGems, handleGemClick), [animeGems, handleGemClick]);
  const editorsPicksGridItems = useMemo(() => mapToGridItems(editorsPicksGems, handleGemClick), [editorsPicksGems, handleGemClick]);
  const worldGridItems = useMemo(() => mapWorldsToGridItems(filteredWorlds, handleWorldClick), [filteredWorlds, handleWorldClick]);

  // Define all sections using a configuration array
  const sectionConfigs = useMemo((): ExploreSectionConfig[] => [
    {
      id: 'popular-stories',
      tag: 'Media',
      title: 'Popular Stories',
      description: 'Captivating stories, series, and cinematic adventures.',
      items: mediaGridItems,
      itemsDisplay: 'slider',
      gridClassName: 'xl:grid-cols-4',
    },
    {
      id: 'popular-characters',
      tag: 'Characters',
      title: 'Meet the Characters',
      description: 'Iconic personalities and AI companions ready to interact.',
      items: characterGridItems,
      itemsDisplay: 'slider',
      gridClassName: 'xl:grid-cols-4',
    },
    {
      id: 'explore-worlds',
      tag: 'Worlds',
      title: 'Explore the Worlds',
      description: 'Discover diverse universes, each with unique collections and gems.',
      items: worldGridItems,
      itemsDisplay: 'slider', // Changed to slider as per previous request
      gridClassName: 'xl:grid-cols-4',
    },
    {
      id: 'editors-picks',
      tag: 'Spotlight',
      title: "Editor's Picks",
      description: 'Handpicked favorites by the GemVise team, showcasing the best of our universe.',
      items: editorsPicksGridItems,
      itemsDisplay: 'slider',
      gridClassName: 'xl:grid-cols-4',
    },
    {
      id: 'anime-spotlight',
      tag: 'Anime',
      title: 'Anime Spotlight',
      description: 'Explore gems from the vibrant world of Anime, from classic sagas to new adventures.',
      items: animeGridItems,
      itemsDisplay: 'slider',
      gridClassName: 'xl:grid-cols-4',
    },
  ], [mediaGridItems, characterGridItems, worldGridItems, editorsPicksGridItems, animeGridItems]);

  if (isLoading) { 
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground text-xl">Loading the GemVise Universe...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onGenreTabChange={handleGenreTabChange} availableGenres={availableGenresForTabs} /> {/* Pass the callback */}

      {/* Map through section configurations to render sections */}
      {sectionConfigs.map(config => (
        config.items && config.items.length > 0 && (
          <Section
            key={config.id}
            variant={'default'} // Assuming default variant for all explore page sections
            tag={config.tag}
            title={config.title}
            description={config.description}
            items={config.items}
            itemsDisplay={config.itemsDisplay}
            gridClassName={config.gridClassName}
          />
        )
      ))}

      {/* Fallback if no content matches filters or no sections have items */}
      {!isLoading && allGemsFromData.length === 0 && (
          <Section
            variant="default"
            title="No Gems Available Yet"
            description="The GemVise universe is still expanding. Check back soon for new additions!"
          />
      )}
      {/* Additional fallback if filters result in no sections having content */}
      {!isLoading && allGemsFromData.length > 0 && sectionConfigs.every(config => !config.items || config.items.length === 0) && (
          <Section
            variant="default"
            title="No Content Matches Your Filters"
            description="Try selecting a different genre or broadening your search to discover more gems and worlds."
          />
      )}
    </main>
  );
}
