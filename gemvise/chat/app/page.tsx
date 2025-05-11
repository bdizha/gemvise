'use client';

import { Hero } from '@/components/home/Hero';
import Section from '@/components/layout/Section';
import { worlds } from '@/data/worlds';
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
  const collections: GridItem[] = world.collections.map(collection => ({
    id: collection.id,
    href: `/world/${world.id}/collection/${collection.id}`,
    imageUrl: `/gradients/named/GV-Gradient-${collection.type === 'Licensed' ? 'Purple-Pink' : 'Pink-Purple'}.png`,
    title: collection.name,
    subtitle: `${collection.type} Collection`, 
    description: world.description, 
    chatCount: collection.gems.length,
    followers: 0, 
    likes: 0,
    cardVariant: 'collection'
  }));

  const gems: GridItem[] = world.collections.flatMap(collection =>
    collection.gems.map((gem, gemIndex) => ({ 
      id: gem.id,
      href: `/chat/${gem.id}`,
      imageUrl: getRandomGradient(gemIndex),
      title: gem.name || '',
      subtitle: gem.attributes.rarity || 'Common', 
      description: gem.description || `A unique ${gem.type || 'gem'} from ${collection.name}`,
      chatCount: 0, 
      followers: 0, 
      likes: gem.attributes.power || 0,
      cardVariant: gem.type === 'Character' ? 'character' : 'default'
    }))
  );

  return {
    id: world.id,
    name: world.name, 
    collections,
    gems
  };
});

// Get legendary and mythic gems
const legendaryGems: GridItem[] = worlds.flatMap(world =>
  world.collections.flatMap(collection =>
    collection.gems
      .filter(gem => gem.attributes.rarity === 'Legendary' || gem.attributes.rarity === 'Mythic')
      .map(gem => ({
        id: gem.id,
        href: `/chat/${gem.id}`,
        imageUrl: '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
        title: gem.name || '',
        subtitle: `${gem.attributes.rarity} - Power ${gem.attributes.power || 0}`, 
        description: gem.description || `A legendary ${gem.type || 'gem'} from ${collection.name}`,
        chatCount: 0, 
        followers: 0, 
        likes: gem.attributes.power || 0,
        cardVariant: 'default'
      }))
  )
).slice(0, 6);

// Get powerful gems
const powerfulGems: GridItem[] = worlds.flatMap(world =>
  world.collections.flatMap(collection =>
    collection.gems
      .filter(gem => gem.attributes.power && gem.attributes.power >= 90)
      .map(gem => ({
        id: gem.id,
        href: `/chat/${gem.id}`,
        imageUrl: '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
        title: gem.name || '',
        subtitle: `Elite - Power ${gem.attributes.power}`, 
        description: gem.description || `An elite ${gem.type || 'gem'} with high power`,
        chatCount: 0, 
        followers: 0, 
        likes: gem.attributes.power || 0,
        cardVariant: 'default'
      }))
  )
).slice(0, 6);

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
        <Section gradient="dark">
          <Hero />
        </Section>
        {processedWorlds.map((world) => (
            <Section  key={world.id} 
              items={world.collections} 
              itemsDisplay="slider" 
              sliderSectionTitle={`Collections from ${world.name}`}
            />
        ))}
        {processedWorlds.map((world) => (
            <Section  key={world.id}
              items={world.gems} 
              itemsDisplay="slider" 
              sliderSectionTitle={`Characters from ${world.name}`}
            />
        ))}
        
        <Section 
          items={legendaryGems} 
          itemsDisplay="slider" 
          sliderSectionTitle="Legendary & Mythic Characters"
        />
          
        <Section 
          items={powerfulGems} 
          itemsDisplay="slider" 
          sliderSectionTitle="Elite Characters"
        />
        
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
