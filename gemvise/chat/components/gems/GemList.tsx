'use client';

import GemCard from './GemCard';

interface Gem {
  id: string;
  name: string;
  expertise: string[];
  imageUrl: string;
  description: string;
}

interface GemListProps {
  gems: Gem[];
  onSelect?: (gemId: string) => void;
  showHeader?: boolean;
}

const featuredGems = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe. Explore profound insights and scientific breakthroughs!'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Brilliant inventor who illuminated the world with AC power. Discuss innovation, energy, and the future of technology!'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize. Explore persistence, discovery, and scientific excellence!'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Renaissance polymath spanning art and science. Delve into creativity, innovation, and multidisciplinary mastery!'
  },
  {
    id: 'turing',
    name: 'Alan Turing',
    expertise: ['Computer Science', 'Mathematics', 'Cryptography'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Father of computer science and artificial intelligence, played a pivotal role in breaking the Enigma code.'
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    expertise: ['Cosmology', 'Physics', 'Black Holes'],
    imageUrl: '/shapes/GV-SHAPE.png',
    description: 'Theoretical physicist who made groundbreaking contributions to our understanding of black holes and the universe.'
  }
];

export default function GemList({ gems = featuredGems, onSelect, showHeader = true }: GemListProps) {
  return (
    <section className="sm:pb-20 pb-16" aria-label="Featured Gems">
      {showHeader && (
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Featured Gems</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore conversations with history's most brilliant minds. Each gem represents a unique perspective on science, art, and innovation.
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {gems.map((gem) => (
          <GemCard
            key={gem.id}
            {...gem}
            onSelect={() => onSelect?.(gem.id)}
          />
        ))}
      </div>
    </section>
  );
}

export { featuredGems };
