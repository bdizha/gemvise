import { worlds, type World } from '@/data/worldData';
import { type GridItem } from '@/components/layout/Grid/types';

// Helper function to get a random gradient image (can be made more sophisticated)
export const getRandomGradient = (index: number): string => {
  const gradientNumbers = ['01', '02', '03', '05', '06', '07', '08', '09'];
  const selectedIndex = index % gradientNumbers.length;
  return `/gradients/GV-Gradient-${gradientNumbers[selectedIndex]}.png`;
};

// Prepare world items for the Explore section slider
export const getWorldGridItems = (): GridItem[] => {
  return worlds.map((world, index) => ({
    id: world.id,
    title: world.name || 'Unnamed World',
    description: world.description || 'Discover a new realm of possibilities.',
    imageUrl: world.imageUrl || getRandomGradient(index),
    href: `/world/${world.id}`,
    cardVariant: 'world',
  }));
};

// Define a type for the processed world structure, if not already defined elsewhere
export interface ProcessedWorldData {
  id: string;
  name: string;
  collections: GridItem[];
  gems: GridItem[];
}

// Process worlds to structure their collections and gems for display
export const getProcessedWorldsData = (): ProcessedWorldData[] => {
  return worlds.map(world => {
    const collections: GridItem[] = []; // Placeholder as per original logic

    const allGemsFromWorld = [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || [])
    ];

    const gems: GridItem[] = allGemsFromWorld.map((gem, gemIndex) => ({
      id: gem.id,
      href: `/chat/${gem.id}`,
      imageUrl: getRandomGradient(gemIndex),
      title: gem.name || '',
      subtitle: gem.attributes?.rarity || 'Common',
      description: gem.description || `A unique ${gem.type || 'gem'} from ${world.name}`,
      chatCount: 0,
      followers: 0,
      likes: gem.attributes?.power || 0,
      cardVariant: gem.type === 'Character' ? 'character' : 'default',
    }));

    return {
      id: world.id,
      name: world.name,
      collections,
      gems,
    };
  });
};

// Get legendary and mythic gems for a dedicated slider
export const getLegendaryGemsGridItems = (): GridItem[] => {
  return worlds.flatMap(world =>
    [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || [])
    ]
      .filter(gem => gem.attributes?.rarity === 'Legendary' || gem.attributes?.rarity === 'Mythic')
      .map(gem => ({ ...gem, worldName: world.name })) // Add worldName for context
  )
  .map(gemWithWorldName => ({
    id: gemWithWorldName.id,
    href: `/chat/${gemWithWorldName.id}`,
    imageUrl: '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
    title: gemWithWorldName.name || '',
    subtitle: `${gemWithWorldName.attributes?.rarity} - Power ${gemWithWorldName.attributes?.power || 0}`,
    description: gemWithWorldName.description || `A legendary ${gemWithWorldName.type || 'gem'} from ${gemWithWorldName.worldName}`,
    chatCount: 0,
    followers: 0,
    likes: gemWithWorldName.attributes?.power || 0,
    cardVariant: 'default',
  })).slice(0, 6); // Limit to 6 items
};

// Get powerful gems for another dedicated slider
export const getPowerfulGemsGridItems = (): GridItem[] => {
  return worlds.flatMap(world =>
    [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || [])
    ]
      .filter(gem => gem.attributes?.power && gem.attributes.power >= 90)
      .map(gem => ({ ...gem, worldName: world.name })) // Add worldName for context
  )
  .map(gemWithWorldName => ({
    id: gemWithWorldName.id,
    href: `/chat/${gemWithWorldName.id}`,
    imageUrl: '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
    title: gemWithWorldName.name || '',
    subtitle: `Elite - Power ${gemWithWorldName.attributes?.power}`,
    description: gemWithWorldName.description || `An elite ${gemWithWorldName.type || 'gem'} from ${gemWithWorldName.worldName} with high power`,
    chatCount: 0,
    followers: 0,
    likes: gemWithWorldName.attributes?.power || 0,
    cardVariant: 'default',
  })).slice(0, 6); // Limit to 6 items
};
