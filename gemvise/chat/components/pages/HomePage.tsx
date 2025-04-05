'use client';

import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import GemList from '../gems/GemList';

const featuredGems = [
  {
    id: '1',
    name: 'Marilyn Monroe',
    expertise: ['Acting', 'Modeling', 'Singing'],
    imageUrl: '/gems/marilyn.jpg',
    description: 'An iconic figure in popular culture, known for her wit, charm, and enduring influence on entertainment and fashion.'
  },
  {
    id: '2',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/gems/einstein.jpg',
    description: 'Theoretical physicist who developed the theory of relativity, one of the pillars of modern physics.'
  },
  {
    id: '3',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Science'],
    imageUrl: '/gems/davinci.jpg',
    description: 'Renaissance polymath whose areas of interest included invention, drawing, painting, sculpture, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, paleontology, and cartography.'
  },
  {
    id: '4',
    name: 'Marie Curie',
    expertise: ['Physics', 'Chemistry', 'Research'],
    imageUrl: '/gems/curie.jpg',
    description: 'Pioneer in research on radioactivity, the first woman to win a Nobel Prize, and the only person to win the Nobel Prize in two scientific fields.'
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
    <main className="relative min-h-screen w-full bg-stone-150 dark:bg-midnight-850">
      {/* Background Gradient */}
      <div className="absolute size-full">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute size-full bg-stone-150 dark:bg-midnight-850 dark:bg-none" />
          <div className="absolute size-full bg-gradient-discover-light dark:bg-gradient-discover-dark" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full border-b border-border pb-px overflow-hidden">
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
            <div className="relative w-full flex grow items-center justify-start z-20">
              <div className="space-y-16">
                <div className="mono-tag flex items-center gap-2 text-sm">
                  <span>[</span> <span>GemVise Intelligence Network</span> <span>]</span>
                </div>
                <div className="w-full h-[20svh] lg:h-[160px]">
                  <div className="absolute inset-x-0 flex justify-center items-center z-10">
                    <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                      <span className="gradient-text">Connect with</span>
                      <br />
                      <span className="gradient-text">Timeless Gems</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[160px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6 my-2">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="max-w-lg">
                  Engage with history's most brilliant minds! Draw inspiration from their wisdom, explore their revolutionary ideas, and discover timeless insights through enlightening conversations. 💎✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Gems Section */}
      <div className="relative w-full bg-background">
        <div className="mx-auto w-full px-6 xl:max-w-7xl py-24">
          <section className="sm:pb-20 pb-16" aria-label="Featured Gems">
            <h2 className="text-center text-2xl pb-9">Featured Gems</h2>
            <GemList gems={featuredGems} onSelect={handleGemSelect} />
          </section>
        </div>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onAuthenticate={(authenticated) => setIsAuthenticated(authenticated)}
      />
    </main>
  );
}
