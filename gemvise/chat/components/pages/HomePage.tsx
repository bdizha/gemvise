'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import LoginModal from '../auth/LoginModal';
import GemList from '../gems/GemList';
import Link from 'next/link';

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
  const { theme, setTheme } = useTheme();

  const handleGemSelect = () => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
      return;
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-stone-150 dark:bg-midnight-850">
      {/* Fixed header */}
      <div className="fixed top-0 z-30 flex w-full items-center justify-between gap-4 px-6 py-6 bg-stone-150/80 dark:bg-midnight-850/80 backdrop-blur-md">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src={theme === 'dark' ? '/icons/GV-LOGO-02-WOT.png' : '/icons/GV-LOGO-02-GOT-05.png'} alt="GemVise" width={32} height={32} />
            <span className="text-lg font-semibold text-stone-900 dark:text-stone-100">GemVise</span>
          </Link>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="relative flex items-center text-stone-900 dark:text-stone-100 bg-stone-100/80 dark:bg-midnight-700/80 hover:bg-stone-50 dark:hover:bg-midnight-600 active:bg-stone-200 dark:active:bg-midnight-800 text-sm justify-center min-h-10 min-w-10 px-3 py-2 gap-x-2 rounded-xl shadow-lg"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative flex items-center text-stone-900 dark:text-stone-100 bg-stone-100/80 dark:bg-midnight-700/80 hover:bg-stone-50 dark:hover:bg-midnight-600 active:bg-stone-200 dark:active:bg-midnight-800 text-sm justify-center min-h-10 min-w-10 px-3 py-2 gap-x-2 rounded-xl shadow-lg"
            onClick={() => setShowLoginModal(true)}
          >
            <span>Sign in</span>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="size-6">
              <path d="M17.7545 14.0002C18.9966 14.0002 20.0034 15.007 20.0034 16.2491V16.8245C20.0034 17.7188 19.6838 18.5836 19.1023 19.263C17.5329 21.0965 15.1457 22.0013 12.0004 22.0013C8.8545 22.0013 6.46849 21.0962 4.90219 19.2619C4.32242 18.583 4.00391 17.7195 4.00391 16.8267V16.2491C4.00391 15.007 5.01076 14.0002 6.25278 14.0002H17.7545ZM17.7545 15.5002H6.25278C5.83919 15.5002 5.50391 15.8355 5.50391 16.2491V16.8267C5.50391 17.3624 5.69502 17.8805 6.04287 18.2878C7.29618 19.7555 9.26206 20.5013 12.0004 20.5013C14.7387 20.5013 16.7063 19.7555 17.9627 18.2876C18.3117 17.8799 18.5034 17.361 18.5034 16.8245V16.2491C18.5034 15.8355 18.1681 15.5002 17.7545 15.5002ZM12.0004 2.00488C14.7618 2.00488 17.0004 4.24346 17.0004 7.00488C17.0004 9.76631 14.7618 12.0049 12.0004 12.0049C9.23894 12.0049 7.00036 9.76631 7.00036 7.00488C7.00036 4.24346 9.23894 2.00488 12.0004 2.00488ZM12.0004 3.50488C10.0674 3.50488 8.50036 5.07189 8.50036 7.00488C8.50036 8.93788 10.0674 10.5049 12.0004 10.5049C13.9334 10.5049 15.5004 8.93788 15.5004 7.00488C15.5004 5.07189 13.9334 3.50488 12.0004 3.50488Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section with Gradients */}
      <div className="relative h-screen w-full border-b border-border pb-px overflow-hidden pt-24">
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

      {/* Content */}
      <div className="relative w-full bg-background">
        <div className="mx-auto w-full px-6 xl:max-w-7xl py-24">
          {/* Gems Grid */}
          <section className="sm:pb-20 pb-16" aria-label="Featured Gems">
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
