'use client';

import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import GemList from '../gems/GemList';

const featuredGems = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/images/gems/einstein.webp',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe. Explore profound insights and scientific breakthroughs!'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/images/gems/tesla.webp',
    description: 'Brilliant inventor who illuminated the world with AC power. Discuss innovation, energy, and the future of technology!'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/images/gems/curie.webp',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize. Explore persistence, discovery, and scientific excellence!'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/images/gems/da-vinci.webp',
    description: 'Renaissance polymath spanning art and science. Delve into creativity, innovation, and multidisciplinary mastery!'
  },
  {
    id: 'turing',
    name: 'Alan Turing',
    expertise: ['Computer Science', 'Mathematics', 'Cryptography'],
    imageUrl: '/images/gems/turing.webp',
    description: 'Father of computer science and artificial intelligence, played a pivotal role in breaking the Enigma code.'
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    expertise: ['Cosmology', 'Physics', 'Black Holes'],
    imageUrl: '/images/gems/hawking.webp',
    description: 'Theoretical physicist who made groundbreaking contributions to our understanding of black holes and the universe.'
  }
];

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGemSelect = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-stone-150 dark:bg-midnight-850">
      <div className="container mx-auto px-4 py-24">
        <GemList gems={featuredGems} onSelect={handleGemSelect} />
      </div>
      {showLoginModal && (
        <LoginModal 
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)} 
          onAuthenticate={(authenticated) => setIsAuthenticated(authenticated)} 
        />
      )}
    </main>
  );
}
