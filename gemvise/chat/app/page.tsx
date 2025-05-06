'use client';

import { Hero } from '@/components/home/Hero';
import Section from '@/components/layout/Section';
import GridSlider from '@/components/layout/Grid/GridSlider';
import { worlds } from '@/data/worlds';

// Process collections and gems for display
// Helper function to get a random gradient image
const getRandomGradient = (index: number) => {
  const gradientNumbers = ['01', '02', '03', '05', '06', '07', '08', '09'];
  // Use the index to deterministically pick a gradient
  const selectedIndex = index % gradientNumbers.length;
  return `/gradients/GV-Gradient-${gradientNumbers[selectedIndex]}.png`;
};

const processedWorlds = worlds.map(world => {
  const collections = world.collections.map(collection => ({
    href: `/world/${world.id}/collection/${collection.id}`,
    imageSrc: `/gradients/named/GV-Gradient-${collection.type === 'Licensed' ? 'Purple-Pink' : 'Pink-Purple'}.png`,
    title: collection.name,
    subtitle: `${collection.type} Collection`, 
    description: world.description, 
    chatCount: collection.gems.length,
    followers: 0, 
    likes: 0 
  }));

  const gems = world.collections.flatMap(collection =>
    collection.gems.map((gem, gemIndex) => ({ 
      href: `/chat/${gem.id}`,
      imageSrc: getRandomGradient(gemIndex), 
      title: gem.name || '',
      subtitle: gem.attributes.rarity || 'Common', 
      description: gem.description || `A unique ${gem.type || 'gem'} from ${collection.name}`,
      chatCount: 0, 
      followers: 0, 
      likes: gem.attributes.power || 0
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
const legendaryGems = worlds.flatMap(world =>
  world.collections.flatMap(collection =>
    collection.gems
      .filter(gem => gem.attributes.rarity === 'Legendary' || gem.attributes.rarity === 'Mythic')
      .map(gem => ({
        href: `/chat/${gem.id}`,
        imageSrc: '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
        title: gem.name || '',
        subtitle: `${gem.attributes.rarity} - Power ${gem.attributes.power || 0}`, 
        description: gem.description || `A legendary ${gem.type || 'gem'} from ${collection.name}`,
        chatCount: 0, 
        followers: 0, 
        likes: gem.attributes.power || 0
      }))
  )
).slice(0, 6);

// Get powerful gems
const powerfulGems = worlds.flatMap(world =>
  world.collections.flatMap(collection =>
    collection.gems
      .filter(gem => gem.attributes.power && gem.attributes.power >= 90)
      .map(gem => ({
        href: `/chat/${gem.id}`,
        imageSrc: '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
        title: gem.name || '',
        subtitle: `Elite - Power ${gem.attributes.power}`, 
        description: gem.description || `An elite ${gem.type || 'gem'} with high power`,
        chatCount: 0, 
        followers: 0, 
        likes: gem.attributes.power || 0
      }))
  )
).slice(0, 6);

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto bg-gradient-dark">
      <Hero />
      <Section gradient="dark-light">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-32">
          {processedWorlds.map((world) => (
            <div key={world.id} className="space-y-16">
              <GridSlider
                title={`Collections from ${world.name}`}
                cards={world.collections}
              />
              
              <GridSlider
                title={`Characters from ${world.name}`}
                cards={world.gems}
              />
            </div>
          ))}
          
          <GridSlider
            title="Legendary & Mythic Characters"
            cards={legendaryGems}
          />
          
          <GridSlider
            title="Elite Characters"
            cards={powerfulGems}
          />
        </div>
      </Section>
    
    </main>
  );
}
