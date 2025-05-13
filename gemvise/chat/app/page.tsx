'use client';

import { Hero } from '@/components/home/Hero';
import Section from '@/components/layout/Section';
import { worlds } from '@/data/worldData';
import { type GridItem } from '@/components/layout/Grid/types';

// Process collections and gems for display
// Helper function to get a random gradient image
const getRandomGradient = (index: number) => {
  const gradientNumbers = ['01', '02', '03', '05', '06', '07', '08', '09'];
  // Use the index to deterministically pick a gradient
  const selectedIndex = index % gradientNumbers.length;
  return `/gradients/GV-Gradient-${gradientNumbers[selectedIndex]}.png`;
};

const processedWorlds = worlds.map(world => {
  // Collections section is tricky with the new structure, making it empty for now.
  const collections: GridItem[] = []; 

  const allGemsFromWorld = [
    ...(world.characters || []),
    ...(world.stories || []),
    ...(world.adventures || []),
    ...(world.scenes || [])
  ];

  const gems: GridItem[] = allGemsFromWorld.map((gem, gemIndex) => ({ 
    id: gem.id,
    href: `/chat/${gem.id}`,
    imageUrl: getRandomGradient(gemIndex), // Existing image logic
    title: gem.name || '',
    subtitle: gem.attributes?.rarity || 'Common', 
    description: gem.description || `A unique ${gem.type || 'gem'} from ${world.name}`, // Adjusted description
    chatCount: 0, 
    followers: 0, 
    likes: gem.attributes?.power || 0,
    cardVariant: gem.type === 'Character' ? 'character' : 'default' // Gem types can be Character, Story, etc.
  }));

  return {
    id: world.id,
    name: world.name, 
    collections,
    gems
  };
});

// Get legendary and mythic gems
const legendaryGems: GridItem[] = worlds.flatMap(world =>
  [
    ...(world.characters || []),
    ...(world.stories || []),
    ...(world.adventures || []),
    ...(world.scenes || [])
  ]
    .filter(gem => gem.attributes?.rarity === 'Legendary' || gem.attributes?.rarity === 'Mythic')
    .map(gem => ({ 
      ...gem,
      worldName: world.name 
    }))
).map(gemWithWorldName => ({ 
  id: gemWithWorldName.id,
  href: `/chat/${gemWithWorldName.id}`,
  imageUrl: '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
  title: gemWithWorldName.name || '',
  subtitle: `${gemWithWorldName.attributes?.rarity} - Power ${gemWithWorldName.attributes?.power || 0}`,
  description: gemWithWorldName.description || `A legendary ${gemWithWorldName.type || 'gem'} from ${gemWithWorldName.worldName}`,
  chatCount: 0,
  followers: 0,
  likes: gemWithWorldName.attributes?.power || 0,
  cardVariant: 'default'
})).slice(0, 6);

// Get powerful gems
const powerfulGems: GridItem[] = worlds.flatMap(world =>
  [
    ...(world.characters || []),
    ...(world.stories || []),
    ...(world.adventures || []),
    ...(world.scenes || [])
  ]
    .filter(gem => gem.attributes?.power && gem.attributes.power >= 90)
    .map(gem => ({ 
      ...gem,
      worldName: world.name
    }))
).map(gemWithWorldName => ({ 
  id: gemWithWorldName.id,
  href: `/chat/${gemWithWorldName.id}`,
  imageUrl: '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
  title: gemWithWorldName.name || '',
  subtitle: `Elite - Power ${gemWithWorldName.attributes?.power}`,
  description: gemWithWorldName.description || `An elite ${gemWithWorldName.type || 'gem'} from ${gemWithWorldName.worldName} with high power`,
  chatCount: 0,
  followers: 0,
  likes: gemWithWorldName.attributes?.power || 0,
  cardVariant: 'default'
})).slice(0, 6);

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
        <Section gradient="dark">
          <Hero />
        </Section>
        {processedWorlds.map((world) => (
          world.collections && world.collections.length > 0 && (
            <Section  key={`${world.id}-collections`} 
              items={world.collections} 
              itemsDisplay="slider" 
              sliderSectionTitle={`Categories from ${world.name}`} 
            />
          )
        ))}
        {processedWorlds.map((world) => (
          world.gems && world.gems.length > 0 && (
            <Section  key={`${world.id}-gems`}
              items={world.gems} 
              itemsDisplay="slider" 
              sliderSectionTitle={`Gems from ${world.name}`} 
            />
          )
        ))}
        
        {legendaryGems && legendaryGems.length > 0 && (
          <Section 
            key="legendary-mythic-gems"
            items={legendaryGems} 
            itemsDisplay="slider" 
            sliderSectionTitle="Legendary & Mythic Characters"
          />
        )}
          
        {powerfulGems && powerfulGems.length > 0 && (
          <Section 
            key="powerful-gems"
            items={powerfulGems} 
            itemsDisplay="slider" 
            sliderSectionTitle="Elite Characters"
          />
        )}
        
      <Section 
        variant="hero"
        tag="Explore"
        title="Discover the GemVise Universe"
        description="Dive into diverse worlds, meet unique characters, and explore captivating stories. Your next adventure starts here."
        className="py-16 md:py-24 text-center"
      />
    </main>
  );
}
