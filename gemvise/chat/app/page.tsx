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
    <main className="flex-1 overflow-y-auto bg-gradient-dark">
      <Hero />
      <Section gradient="dark-light" className="py-16 md:py-20"> 
        <div className="mx-auto w-full px-4 md:px-6 space-y-12 md:space-y-16">
          {processedWorlds.map((world) => (
            <div key={world.id} className="space-y-10 md:space-y-12">
              <Section 
                items={world.collections} 
                itemsDisplay="slider" 
                sliderSectionTitle={`Collections from ${world.name}`}
              />
              
              <Section 
                items={world.gems} 
                itemsDisplay="slider" 
                sliderSectionTitle={`Characters from ${world.name}`}
              />
            </div>
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
        </div>
      </Section>
    
    </main>
  );
}
