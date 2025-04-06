'use client';

import { useState } from 'react';
import Image from 'next/image';

// Gem categories
const gemCategories = [
  {
    title: 'Scientists & Innovators',
    description: 'Engage with brilliant minds that shaped our understanding of the world',
    image: '/icons/GV-LOGO-02-GOT-06.png',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Artists & Creators',
    description: 'Connect with creative geniuses across different mediums and eras',
    image: '/icons/GV-LOGO-02-GOT-07.png',
    color: 'from-pink-500/20 to-red-500/20'
  },
  {
    title: 'Leaders & Visionaries',
    description: 'Learn from those who changed the course of history',
    image: '/icons/GV-LOGO-02-GOT-08.png',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Philosophers & Thinkers',
    description: 'Explore profound ideas with history\'s greatest minds',
    image: '/icons/GV-LOGO-02-GOT-05.png',
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    title: 'Tech Pioneers',
    description: 'Discover insights from digital age revolutionaries',
    image: '/icons/GV-LOGO-02-GOT-04.png',
    color: 'from-indigo-500/20 to-blue-500/20'
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden bg-stone-150 dark:bg-midnight-850">
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
            {/* Background Gradient */}
            <div 
              className="absolute -inset-x-[600px] -top-12 flex h-[500px] grow opacity-50" 
              style={{
                maskImage: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
                opacity: 0.5,
                transform: 'none'
              }}
            >
              <div 
                className="grow" 
                style={{
                  background: 'conic-gradient(from 90deg at 35% -1% in lab, rgb(255, 255, 255) 7.2deg, rgb(156, 184, 221) 14.4deg, rgba(17, 17, 17, 0) 36deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)'
                }}
              />
              <div 
                className="grow" 
                style={{
                  background: 'conic-gradient(from -90deg at 65% -1% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 324deg, rgb(156, 184, 221) 345.6deg, rgb(255, 255, 255) 352.8deg)'
                }}
              />
            </div>

            <div className="relative w-full flex grow items-center justify-start z-20">
              <div className="text-center w-full space-y-8">
                <div className="flex justify-center mb-8">
                  <Image 
                    src="/logos/GV-NAME-GOT-08.png"
                    alt="GemVise Logo"
                    width={320}
                    height={120}
                    priority
                    className="h-auto"
                  />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  Create. Interact.
                  <br />
                  <span className="gradient-text">Own Your Imagination.</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-grey-600 dark:text-grey-400">
                  Dive into a universe of AI characters, craft your own unique personalities, connect with a vibrant community, and get rewarded for your creativity on the blockchain.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-8">
                  <button className="bg-button-primary text-background hover:bg-button-primary-hover px-8 py-3 rounded-md">
                    Explore Creations
                  </button>
                  <button className="bg-button-secondary text-primary hover:bg-button-secondary-hover px-8 py-3 rounded-md">
                    Start Creating
                  </button>
                  <button className="text-primary hover:text-primary-hover px-8 py-3">
                    Learn About Creator Rewards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Gems Section */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span>
                <span>Featured Gems</span>
                <span>]</span>
              </div>
            </div>
            
            {/* Gem Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gemCategories.map((category, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 p-8 transition-all hover:bg-neutral-900"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="aspect-square w-16 mb-6 relative">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-primary/60 text-sm">{category.description}</p>
                  </div>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What is GemVise Section */}
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span>
                <span>What is GemVise?</span>
                <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Where Imagination Meets Interaction & Ownership
                </h2>
                <p className="text-lg text-primary/80">
                  GemVise empowers you to bring any character imaginable to life through advanced AI. 
                  Engage in limitless conversations, co-create intricate stories, learn new things, or simply have fun. 
                  But GemVise is more than just chat – it's a platform built to recognize and reward the creators who fuel its universe.
                </p>
                <div className="flex gap-4">
                  <button className="relative isolate inline-flex items-center justify-center border 
                                   text-base/6 uppercase font-mono tracking-widest shrink-0 px-6 py-3 
                                   sm:text-sm gap-x-3 bg-primary text-background 
                                   hover:bg-primary/80 rounded-full">
                    Start Creating
                  </button>
                  <button className="relative isolate inline-flex items-center justify-center border 
                                   text-base/6 uppercase font-mono tracking-widest shrink-0 px-6 py-3 
                                   sm:text-sm gap-x-3 bg-transparent border-primary/25 
                                   text-primary hover:bg-secondary/20 rounded-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
