'use client';

import { Hero } from '@/components/home/Hero';
import Section from '@/components/layout/Section';
import GridSlider from '@/components/layout/Grid/GridSlider';
import { worlds } from '@/data/worlds';

// Process collections and gems for display
// Helper function to get a random gradient image
const getRandomGradient = () => {
  const gradientNumbers = ['01', '02', '03', '05', '06', '07', '08', '09'];
  const randomIndex = Math.floor(Math.random() * gradientNumbers.length);
  return `/gradients/GV-Gradient-${gradientNumbers[randomIndex]}.png`;
};

const processedWorlds = worlds.map(world => {
  const collections = world.collections.map(collection => ({
    href: `/world/${world.id}/collection/${collection.id}`,
    imageSrc: `/gradients/named/GV-Gradient-${collection.type === 'Licensed' ? 'Purple-Pink' : 'Pink-Purple'}.png`,
    title: collection.name,
    description: `${collection.type} Collection`,
    name: collection.name,
    username: collection.type,
    chatCount: collection.gems.length,
    followers: 0,
    likes: 0
  }));

  const gems = world.collections.flatMap(collection =>
    collection.gems.map(gem => ({
      href: `/chat/${gem.id}`,
      imageSrc: getRandomGradient(),
      title: gem.name || '',
      description: `A ${gem.type} from ${collection.name}`,
      name: gem.name || '',
      username: gem.attributes.rarity || 'Common',
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
        description: `${gem.type} from ${collection.name}`,
        name: gem.name || '',
        username: gem.attributes.rarity || 'Legendary',
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
        description: `Power Level ${gem.attributes.power}`,
        name: gem.name || '',
        username: 'Elite',
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
      
      <Section 
        title="Explore Worlds" 
        description="Discover unique collections and characters across different worlds"
        gradient="dark-light"
      >
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
