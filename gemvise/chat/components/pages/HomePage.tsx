'use client';

import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import GemCard from '../gems/GemCard';

// Sample gem data - in a real app, this would come from your API
const featuredGems = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Theoretical physicist who developed the theory of relativity, revolutionizing our understanding of space, time, and the universe.'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize, and only person to win Nobel Prizes in multiple sciences.'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Inventor and futurist who contributed to the design of the modern alternating current (AC) electricity supply system.'
  },
  {
    id: 'turing',
    name: 'Alan Turing',
    expertise: ['Computer Science', 'Mathematics', 'Cryptography'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Father of computer science and artificial intelligence, played a pivotal role in breaking the Enigma code.'
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    expertise: ['Cosmology', 'Physics', 'Black Holes'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Theoretical physicist who made groundbreaking contributions to our understanding of black holes and the origins of the universe.'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/gems/placeholder.svg',
    description: 'Renaissance polymath whose areas of interest included invention, drawing, painting, sculpture, architecture, science, and engineering.'
  }
];

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleGemSelect = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  };

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to GemVise
          </h1>
          <p className="text-xl text-gray-600">
            Engage with history's greatest minds and personalities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGems.map((gem) => (
            <GemCard
              key={gem.id}
              {...gem}
              onSelect={handleGemSelect}
            />
          ))}
        </div>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onAuthenticate={setIsAuthenticated}
      />
    </main>
  );
}
