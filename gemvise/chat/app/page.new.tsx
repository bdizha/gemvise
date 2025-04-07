'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GradientSection from '@/components/layout/Section/GradientSection';
import ShapeTower from '@/components/shapes/ShapeTower'; // Import ShapeTower component

// Featured Gems by category
const gemCategories = {
  'World Leaders': [
    {
      name: 'Franklin D. Roosevelt',
      description: '32nd U.S. President who led through the Great Depression and WWII, known for New Deal programs and fireside chats',
      image: '/icons/GV-LOGO-02-GOT-01.png',
      expertise: ['Leadership', 'Politics', 'Economics'],
      energyLevel: 95,
      era: '1940s',
      chatCount: '156.7k'
    },
    {
      name: 'Winston Churchill',
      description: 'British Prime Minister who rallied the UK against Nazi Germany during WWII with iconic speeches',
      image: '/icons/GV-LOGO-02-GOT-02.png',
      expertise: ['Leadership', 'Oratory', 'Writing'],
      energyLevel: 98,
      era: '1940s',
      chatCount: '189.3k'
    },
    {
      name: 'John F. Kennedy',
      description: '35th U.S. President, known for his charisma and handling of the Cuban Missile Crisis',
      image: '/icons/GV-LOGO-02-GOT-03.png',
      expertise: ['Leadership', 'Foreign Policy', 'Public Speaking'],
      energyLevel: 96,
      era: '1960s',
      chatCount: '201.4k'
    }
  ],
  'Artists & Musicians': [
    {
      name: 'Duke Ellington',
      description: 'Legendary jazz composer and bandleader who shaped American music',
      image: '/icons/GV-LOGO-02-GOT-04.png',
      expertise: ['Jazz', 'Composition', 'Piano'],
      energyLevel: 94,
      era: '1940s',
      chatCount: '145.2k'
    },
    {
      name: 'Bob Dylan',
      description: 'Influential songwriter whose songs became anthems for civil rights and anti-war movements',
      image: '/icons/GV-LOGO-02-GOT-05.png',
      expertise: ['Songwriting', 'Folk Music', 'Poetry'],
      energyLevel: 92,
      era: '1960s',
      chatCount: '178.9k'
    },
    {
      name: 'David Bowie',
      description: 'Revolutionary musician known for reinvention and innovative sound',
      image: '/icons/GV-LOGO-02-GOT-06.png',
      expertise: ['Music', 'Performance', 'Innovation'],
      energyLevel: 97,
      era: '1970s',
      chatCount: '198.5k'
    }
  ],
  'Cultural Icons': [
    {
      name: 'Martin Luther King Jr.',
      description: 'Civil rights leader who changed America through nonviolent resistance',
      image: '/icons/GV-LOGO-02-GOT-07.png',
      expertise: ['Civil Rights', 'Leadership', 'Oratory'],
      energyLevel: 99,
      era: '1960s',
      chatCount: '234.6k'
    },
    {
      name: 'Muhammad Ali',
      description: 'Boxing champion and cultural icon who stood up for his beliefs',
      image: '/icons/GV-LOGO-02-GOT-08.png',
      expertise: ['Boxing', 'Activism', 'Public Speaking'],
      energyLevel: 98,
      era: '1960s',
      chatCount: '212.3k'
    },
    {
      name: 'Andy Warhol',
      description: 'Pop art pioneer who transformed modern art and celebrity culture',
      image: '/icons/GV-LOGO-02-GOT-09.png',
      expertise: ['Art', 'Film', 'Photography'],
      energyLevel: 91,
      era: '1970s',
      chatCount: '167.8k'
    }
  ],
  'Innovators & Thinkers': [
    {
      name: 'Albert Einstein',
      description: 'Theoretical physicist who revolutionized our understanding of space and time',
      image: '/icons/GV-LOGO-02-GOT-10.png',
      expertise: ['Physics', 'Mathematics', 'Philosophy'],
      energyLevel: 93,
      era: '1940s',
      chatCount: '245.1k'
    },
    {
      name: 'Marshall McLuhan',
      description: 'Media theorist who predicted the global village and internet age',
      image: '/icons/GV-LOGO-02-GOT-11.png',
      expertise: ['Media Theory', 'Communication', 'Philosophy'],
      energyLevel: 90,
      era: '1960s',
      chatCount: '134.7k'
    },
    {
      name: 'Timothy Leary',
      description: 'Psychologist and counterculture icon who advocated for consciousness expansion',
      image: '/icons/GV-LOGO-02-GOT-12.png',
      expertise: ['Psychology', 'Philosophy', 'Consciousness'],
      energyLevel: 95,
      era: '1970s',
      chatCount: '156.9k'
    }
  ],
  'Entertainment Legends': [
    {
      name: 'Frank Sinatra',
      description: 'Iconic singer and actor who defined American entertainment',
      image: '/icons/GV-LOGO-02-GOT-13.png',
      expertise: ['Music', 'Acting', 'Entertainment'],
      energyLevel: 96,
      era: '1940s',
      chatCount: '189.4k'
    },
    {
      name: 'Elvis Presley',
      description: 'The King of Rock and Roll who revolutionized popular music',
      image: '/icons/GV-LOGO-02-GOT-14.png',
      expertise: ['Music', 'Performance', 'Cultural Icon'],
      energyLevel: 97,
      era: '1960s',
      chatCount: '223.5k'
    },
    {
      name: 'George Carlin',
      description: 'Revolutionary comedian and social critic who changed stand-up comedy',
      image: '/icons/GV-LOGO-02-GOT-15.png',
      expertise: ['Comedy', 'Social Commentary', 'Writing'],
      energyLevel: 94,
      era: '1970s',
      chatCount: '178.2k'
    }
  ]
};

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between px-4 sm:px-8 pt-6">
      <div className="max-w-7xl self-center w-full">
        {/* Header Section */}
        <div className="pb-4 pr-2 z-30 bg-background">
          <div className="flex justify-end items-end lg:justify-between pr-4">
            <div className="hidden lg:flex flex-col gap-1">
              <p className="text-muted-foreground">Welcome to</p>
              <div className="text-xl flex flex-auto flex-col justify-center text-left ml-1">
                <p>GemVise</p>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex justify-end ml-6 gap-3">
              <div className="relative h-10 w-64 md:w-96">
                <div className="absolute z-40 flex gap-2 w-full max-w-3xl border-spacing-1 border-divider flex-row self-center items-center rounded-full bg-surface-elevation-1 p-4 placeholder:text-placeholder">
                  <button className="group relative inline-flex items-center justify-center" type="button" aria-label="Search">
                    <svg viewBox="0 0 24 24" fill="none" height="1.25em" className="ml-1">
                      <path d="m20 20-3.95-3.95M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/>
                    </svg>
                  </button>
                  <input 
                    type="text"
                    className="w-full h-full bg-transparent border-none outline-none"
                    placeholder="Search for Gems"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden relative min-h-[400px] mb-12 bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-pink-500/5">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-purple-500/20 animate-gradient"></div>
              <div className="absolute inset-0 backdrop-blur-[2px]"></div>
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
            <div className="relative z-10 p-12 flex flex-col justify-center h-full max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
                Discover Historical Legends
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Engage with the most influential figures from the 1940s to 1970s
              </p>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-600 hover:to-violet-600 transition-all duration-300">
                  Start Exploring
                </button>
                <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Category Sections */}
          {Object.entries(gemCategories).map(([category, gems]) => (
            <div key={category} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{category}</h2>
                <button className="text-blue-500 hover:text-blue-600 transition-colors">
                  View All
                </button>
              </div>
              
              {/* Carousel */}
              <div className="relative">
                <div className="overflow-x-auto pb-4 hide-scrollbar">
                  <div className="flex gap-4">
                    {gems.map((gem, index) => (
                      <Link href={`/chat/${gem.name.toLowerCase().replace(/\s+/g, '-')}`} key={`${category}-${index}`} 
                            className="flex-none w-[300px]">
                        <div className="group h-[400px] bg-card hover:bg-accent rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                          <Image
                            src={gem.image}
                            alt={gem.name}
                            width={300}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-500 text-sm">
                                {gem.era}
                              </span>
                              <div className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full" 
                                      style={{backgroundColor: `hsl(${gem.energyLevel}, 100%, 50%)`}}></span>
                                <span className="text-sm text-white/90">{gem.energyLevel}%</span>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{gem.name}</h3>
                            <p className="text-white/80 text-sm line-clamp-2 mb-3">{gem.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {gem.expertise.map((skill, idx) => (
                                <span key={idx} className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-xs">
                                  {skill}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-3 mt-4">
                              <div className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white/60">
                                  <path d="M21.5 12c0-5-3.694-8-9.5-8s-9.5 3-9.5 8c0 1.294.894 3.49 1.037 3.83l.037.092c.098.266.49 1.66-1.074 3.722 2.111 1 4.353-.644 4.353-.644 1.551.815 3.397 1 5.147 1 5.806 0 9.5-3 9.5-8Z" 
                                        stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2"/>
                                </svg>
                                <span className="text-sm text-white/60">{gem.chatCount}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Create Character Section */}
          <GradientSection theme="pink">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <div className="w-[600px] h-[250px] relative">
                  <div className="absolute" style={{ opacity: 1, top: 80, left: 150, transform: 'none' }}>
                    <Image alt="zeus" src="/_next/static/media/zeus.ad885461.webp" width={15} height={15} className="rounded-full" />
                  </div>
                  <div className="absolute" style={{ opacity: 1, top: 90, left: 50, transform: 'none' }}>
                    <svg viewBox="0 0 24 24" fill="none" height={32} width={32} className="text-accent">
                      <path d="M16 8a1 1 0 1 0-2 0c0 2.309-.51 3.742-1.384 4.616S10.309 14 8 14a1 1 0 1 0 0 2c2.309 0 3.742.51 4.616 1.384S14 19.692 14 22a1 1 0 1 0 2 0c0-2.308.51-3.742 1.384-4.616S19.692 16 22 16a1 1 0 1 0 0-2c-2.308 0-3.742-.51-4.616-1.384S16 10.309 16 8M7.5 2a1 1 0 0 0-2 0c0 1.44-.32 2.25-.785 2.715C4.249 5.18 3.44 5.5 2 5.5a1 1 0 0 0 0 2c1.44 0 2.25.32 2.715.785C5.18 8.751 5.5 9.56 5.5 11a1 1 0 1 0 2 0c0-1.44.32-2.25.785-2.715C8.751 7.82 9.56 7.5 11 7.5a1 1 0 1 0 0-2c-1.44 0-2.25-.32-2.715-.785C7.82 4.249 7.5 3.44 7.5 2" fill="currentColor" />
                    </svg>
                  </div>
                  {/* ... [rest of the floating elements] ... */}
                  <div className="flex flex-row items-center">
                    <div className="absolute" style={{ opacity: 1, top: 125, left: 184, transform: 'none' }}>
                      <Image alt="philosopher" src="/_next/static/media/philosopher.2733e35b.webp" width={75} height={75} className="opacity-50 rounded-spacing-s" priority />
                    </div>
                    <div className="absolute z-10" style={{ opacity: 1, top: 100, left: 240, transform: 'none' }}>
                      <Image alt="zeus" src="/_next/static/media/zeus.ad885461.webp" width={125} height={125} className="rounded-spacing-s" priority />
                    </div>
                    <div className="absolute" style={{ opacity: 1, top: 125, left: 340, transform: 'none' }}>
                      <Image alt="noblewoman" src="/_next/static/media/noblewoman.18e59535.webp" width={75} height={75} className="opacity-50 rounded-spacing-s" priority />
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-spacing-xl max-w-[480px] w-full flex flex-col gap-spacing-s items-center">
                <p className="text-display">Create a Character</p>
                <p className="text-muted-foreground flex text-center text-md">
                  Not vibing with any Characters? Create one of your own! Customize things like their voice, conversation starts, their tone, and more!
                </p>
                <Link href="/character/new" className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 hover:bg-primary/90 px-unit-4 min-w-unit-20 h-unit-10 text-md gap-unit-2 rounded-md [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-primary text-primary-foreground data-[hover=true]:opacity-hover">
                  <svg viewBox="0 0 24 24" fill="none" height={16} width={16} aria-hidden="true" focusable={false} tabIndex={-1}>
                    <path d="M16 8a1 1 0 1 0-2 0c0 2.309-.51 3.742-1.384 4.616S10.309 14 8 14a1 1 0 1 0 0 2c2.309 0 3.742.51 4.616 1.384S14 19.692 14 22a1 1 0 1 0 2 0c0-2.308.51-3.742 1.384-4.616S19.692 16 22 16a1 1 0 1 0 0-2c-2.308 0-3.742-.51-4.616-1.384S16 10.309 16 8M7.5 2a1 1 0 0 0-2 0c0 1.44-.32 2.25-.785 2.715C4.249 5.18 3.44 5.5 2 5.5a1 1 0 0 0 0 2c1.44 0 2.25.32 2.715.785C5.18 8.751 5.5 9.56 5.5 11a1 1 0 1 0 2 0c0-1.44.32-2.25.785-2.715C8.751 7.82 9.56 7.5 11 7.5a1 1 0 1 0 0-2c-1.44 0-2.25-.32-2.715-.785C7.82 4.249 7.5 3.44 7.5 2" fill="currentColor" />
                  </svg>
                  Create a Character
                </Link>
              </div>
            </div>
          </GradientSection>

          {/* Footer Shape Tower */}
          <div className="w-full flex justify-center py-32">
            <ShapeTower baseWidth={300} baseHeight={300} className="opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
