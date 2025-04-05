'use client';

import { useState } from 'react';
import LoginModal from '../auth/LoginModal';
import GemCard from '../gems/GemCard';

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
    <main className="relative h-full overflow-hidden">
      {/* Sign In Button */}
      <div className="absolute end-6 flex flex-col items-end top-6 -me-1 -mt-3 z-30">
        <div>
          <button
            type="button"
            className="relative flex items-center text-foreground-800 fill-foreground-800 active:text-foreground-600 active:fill-foreground-600 dark:active:text-foreground-650 dark:active:fill-foreground-650 shadow-button-light dark:shadow-button-dark bg-white/70 hover:bg-white active:bg-white/60 dark:bg-slate-450/30 dark:hover:bg-slate-450/40 dark:active:bg-slate-450/20 text-sm justify-center min-h-10 min-w-10 px-3 py-2 gap-x-2 rounded-xl before:rounded-xl before:absolute before:inset-0 before:pointer-events-none before:border before:border-transparent before:contrast-more:border-2 outline-2 outline-offset-1 focus-visible:z-[1] focus-visible:outline focus-visible:outline-stroke-900 h-12 items-center justify-center shadow-lg backdrop-blur-md"
            onClick={() => setShowLoginModal(true)}
          >
            <span className="ms-2">Sign in</span>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-6">
              <path d="M17.7545 14.0002C18.9966 14.0002 20.0034 15.007 20.0034 16.2491V16.8245C20.0034 17.7188 19.6838 18.5836 19.1023 19.263C17.5329 21.0965 15.1457 22.0013 12.0004 22.0013C8.8545 22.0013 6.46849 21.0962 4.90219 19.2619C4.32242 18.583 4.00391 17.7195 4.00391 16.8267V16.2491C4.00391 15.007 5.01076 14.0002 6.25278 14.0002H17.7545ZM17.7545 15.5002H6.25278C5.83919 15.5002 5.50391 15.8355 5.50391 16.2491V16.8267C5.50391 17.3624 5.69502 17.8805 6.04287 18.2878C7.29618 19.7555 9.26206 20.5013 12.0004 20.5013C14.7387 20.5013 16.7063 19.7555 17.9627 18.2876C18.3117 17.8799 18.5034 17.361 18.5034 16.8245V16.2491C18.5034 15.8355 18.1681 15.5002 17.7545 15.5002ZM12.0004 2.00488C14.7618 2.00488 17.0004 4.24346 17.0004 7.00488C17.0004 9.76631 14.7618 12.0049 12.0004 12.0049C9.23894 12.0049 7.00036 9.76631 7.00036 7.00488C7.00036 4.24346 9.23894 2.00488 12.0004 2.00488ZM12.0004 3.50488C10.0674 3.50488 8.50036 5.07189 8.50036 7.00488C8.50036 8.93788 10.0674 10.5049 12.0004 10.5049C13.9334 10.5049 15.5004 8.93788 15.5004 7.00488C15.5004 5.07189 13.9334 3.50488 12.0004 3.50488Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute size-full">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute size-full bg-stone-150 dark:bg-midnight-850 dark:bg-none" />
          <div className="absolute size-full bg-gradient-discover-light dark:bg-gradient-discover-dark" />
        </div>
      </div>

      {/* Content */}
      <div className="relative size-full overflow-hidden">
        <div className="relative size-full max-h-dvh">
          <div className="relative flex size-full flex-col items-center overflow-y-auto overflow-x-hidden overscroll-contain">
            {/* Header for mobile */}
            <div className="sticky top-0 z-10 w-full xl:hidden">
              <div className="absolute h-16 w-full bg-stone-150/90 backdrop-blur-md dark:bg-midnight-850/80" />
            </div>

            {/* Main Content */}
            <div className="mb-[var(--composer-container-height)] w-full max-w-discover pt-24 px-6">
              {/* Title Section */}
              <section className="mb-16 text-center">
                <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                  <span className="gradient-text">Connect with</span>
                  <br />
                  <span className="gradient-text">Timeless Gems</span>
                </h1>
                <p className="mx-auto max-w-2xl text-[hsl(var(--secondary))]">
                  Engage with history's most brilliant minds! Draw inspiration from their wisdom, explore their revolutionary ideas, and discover timeless insights through enlightening conversations. 💎✨
                </p>
              </section>

              {/* Gems Grid */}
              <section className="sm:pb-20 pb-16" aria-label="Featured Gems">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  {featuredGems.map((gem) => (
                    <GemCard
                      key={gem.id}
                      {...gem}
                      onSelect={handleGemSelect}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with V-shaped gradient */}
      <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
            <div className="absolute -inset-x-[600px] -top-12 flex h-[500px] grow opacity-50">
              <div className="grow" style={{
                background: "conic-gradient(from 90deg at 35% -1% in lab, rgb(255, 255, 255) 7.2deg, rgb(156, 184, 221) 14.4deg, rgba(17, 17, 17, 0) 36deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)"
              }} />
              <div className="grow" style={{
                background: "conic-gradient(from -90deg at 65% -1% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 324deg, rgb(156, 184, 221) 345.6deg, rgb(255, 255, 255) 352.8deg)"
              }} />
            </div>
          </div>
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
