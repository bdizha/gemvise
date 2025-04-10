'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GradientSection from '@/components/layout/Section/GradientSection';
import ShapeTower from '@/components/shapes/ShapeTower';
import { CheckCircle, Sparkles, Zap, Activity, Compass, ChevronRight, ArrowRight, Star } from 'lucide-react';

// Featured Gems by category
interface GemData {
  name: string;
  description: string;
  image: string;
  expertise: string[];
  energyLevel: number;
  era: string;
  chatCount: string;
}

type GemCategoriesType = {
  [key: string]: GemData[];
};

const gemCategories: GemCategoriesType = {
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

const HomePage = () => {
  const [activeGemCategory, setActiveGemCategory] = useState(Object.keys(gemCategories)[0]);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
            {/* Background Gradient */}
            <div className="absolute -inset-y-[25%] -right-24 flex w-[100vw] flex-col xl:-right-6 xl:w-[1200px]" 
                 style={{
                   maskImage: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
                   opacity: 1
                 }}>
              <div className="flex flex-col w-full h-full blur">
                <div className="grow" 
                     style={{background: 'conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(156, 184, 221) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)'}}></div>
                <div className="grow" 
                     style={{background: 'conic-gradient(from 0deg at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(156, 184, 221) 324deg, rgb(255, 255, 255) 342deg)'}}></div>
              </div>
              <canvas className="absolute inset-0 h-full w-full"></canvas>
            </div>
            
            {/* Main Content Area */}
            <div className="relative w-full flex grow items-center justify-start z-20">
              <div className="w-full">
                <div>
                  {/* Logo and Search Section */}
                  <div className="absolute inset-0 top-[25%] flex justify-center items-center">
                    <div>
                      {/* Logo */}
                      <div style={{opacity: 1}}>
                        <Image
                          src="/logos/GV-NAME-GOT-08.png"
                          alt="GemVise"
                          width={400}
                          height={150}
                          className="max-w-screen sm:max-w-full xl:max-w-5xl pointer-events-none select-none"
                          style={{
                            color: 'transparent',
                            maskImage: 'linear-gradient(30deg, rgba(255, 255, 255, 0) 15%, rgb(255, 255, 255), rgb(255, 255, 255))'
                          }}
                        />
                      </div>
                      
                      {/* Search Input */}
                      <div className="flex justify-center relative z-10 w-full mt-12" style={{opacity: 1}}>
                        <div className="w-full max-w-xl">
                          <form className="
                            relative w-full items-center gap-3 bg-gradient-to-tr
                            rounded-full p-px
                            from-primary/5 to-primary/20
                          ">
                            <input 
                              className="w-full h-14 lg:h-[68px] rounded-full border-none pl-6 pr-20 
                              focus:outline-none focus:ring-2 focus:ring-white/50 
                              bg-[#111] dark:bg-[#111] text-primary placeholder:text-primary/50"
                              placeholder="Find your perfect gem..."
                              type="text"
                            />
                            <div className="absolute inset-y-2 right-2 lg:right-4 flex items-center">
                              <button 
                                aria-label="Search for gems" 
                                type="submit"
                                className="relative isolate inline-flex items-center justify-center border rounded-full aspect-square px-3.5 py-1.5 sm:text-sm gap-x-2
                                bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] hover:border-[--btn-hover]
                                [--btn-bg:theme(colors.primary)] [--btn-border:theme(colors.primary)] [--btn-text:theme(colors.background)] [--btn-hover:theme(colors.primary/80%)]
                                opacity-50"
                              >
                                <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="!size-4">
                                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path>
                                </svg>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Area with CTA Buttons */}
            <div className="relative flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[160px]">
              {/* Down Arrow */}
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 my-2 text-primary">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"></path>
                </svg>
              </div>
              
              {/* CTA Buttons and Text */}
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                {/* Descriptive Text */}
                <div className="max-w-lg">
                  <div className="hidden sm:block">
                    Explore historical wisdom through our quantum-powered gems, offering unique insights and perspectives.
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className="relative isolate inline-flex items-center justify-center border uppercase font-mono tracking-widest shrink-0 
                     px-4 py-2 sm:text-sm gap-x-3 rounded-full 
                     bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover]
                     [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]
                     hidden lg:flex"
                     href="/create">
                    <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                    <span>Create Gem</span>
                  </a>
                  <a className="relative isolate inline-flex items-center justify-center border uppercase font-mono tracking-widest shrink-0 
                     px-4 py-2 sm:text-sm gap-x-3 rounded-full 
                     bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover]
                     [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]"
                     href="/gems">
                    <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                    <span>Explore Gems</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Gems Section */}
      <section className="w-full py-24 bg-card/5">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Featured collections</span>
              <span>]</span>
            </div>
            <h2 className="text-balance text-3xl md:text-4xl tracking-tight font-semibold">
              Explore Gem Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Connect with the ideas and insights from extraordinary minds across history
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-border">
            {Object.keys(gemCategories).map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-t-lg text-sm font-medium transition-colors relative ${
                  activeGemCategory === category 
                    ? 'border-b-2 border-primary text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setActiveGemCategory(category)}
              >
                {category}
                {activeGemCategory === category && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </button>
            ))}
          </div>
          
          {/* GemCards Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-primary hover:bg-background border border-border/30 hover:border-primary/30 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <button 
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-primary hover:bg-background border border-border/30 hover:border-primary/30 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            {/* Cards Slider */}
            <div className="overflow-x-scroll hide-scrollbar pb-4">
              <div className="flex gap-4 min-w-max">
                {/* Expand the current category to show 16 cards by repeating them if necessary */}
                {[...gemCategories[activeGemCategory], ...gemCategories[activeGemCategory]]
                  .slice(0, 16)
                  .map((gem, index) => (
                  <div key={index} className="w-[270px] flex-shrink-0">
                    <Link href={`/gems/${gem.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="group h-[320px] bg-card hover:bg-card/80 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg relative border border-border/60">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <Image
                          src={'/gradients/mobile/GV-Gradient-06.png'}
                          alt={gem.name}
                          width={300}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400" />
                            <span className="text-xs text-white">{gem.energyLevel}%</span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                          <div className="flex flex-col">
                            <p className="text-white text-lg font-medium mb-1">{gem.name}</p>
                            <p className="text-white/80 text-xs line-clamp-2">{gem.description}</p>
                            <div className="flex gap-2 mt-3">
                              {gem.expertise && gem.expertise.slice(0, 2).map((exp: string, idx: number) => (
                                <span key={idx} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                  {exp}
                                </span>
                              ))}
                              {gem.expertise && gem.expertise.length > 2 && (
                                <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                  +{gem.expertise.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link href="/gems">
              <button className="inline-flex items-center justify-center text-base/6 uppercase font-mono tracking-widest shrink-0 
                               focus:outline-none px-6 py-3 sm:text-sm gap-x-2 
                               bg-primary text-background hover:bg-primary/80 rounded-full">
                View All Gems <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Create Character Section */}
      <GradientSection theme="pink">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Create Your Character</h2>
              <p className="text-lg mb-6">
                Bring to life historical figures and remarkable minds with our advanced character creator.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Detailed personality profiles</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Historical accuracy and depth</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Interactive conversations</span>
                </li>
              </ul>
              <Link href="/create" className="btn btn-primary">
                Start Creating
              </Link>
            </div>
            
            <div className="flex-1">
              <div className="w-full h-[350px] relative">
                <div className="absolute" style={{ opacity: 1, top: 80, left: 150 }}>
                  <Image alt="gradient element" src="/gradients/mobile/GV-Gradient-05.png" width={15} height={15} className="rounded-full" />
                </div>
                <div className="absolute" style={{ opacity: 1, top: 90, left: 50 }}>
                  <svg viewBox="0 0 24 24" fill="none" height={32} width={32} className="text-accent">
                    <path d="M16 8a1 1 0 1 0-2 0c0 2.309-.51 3.742-1.384 4.616S10.309 14 8 14a1 1 0 1 0 0 2c2.309 0 3.742.51 4.616 1.384S14 19.692 14 22a1 1 0 1 0 2 0c0-2.308.51-3.742 1.384-4.616S19.692 16 22 16a1 1 0 1 0 0-2c-2.308 0-3.742-.51-4.616-1.384S16 10.309 16 8M7.5 2a1 1 0 0 0-2 0c0 1.44-.32 2.25-.785 2.715C4.249 5.18 3.44 5.5 2 5.5a1 1 0 0 0 0 2c1.44 0 2.25.32 2.715.785C5.18 8.751 5.5 9.56 5.5 11a1 1 0 1 0 2 0c0-1.44.32-2.25.785-2.715C8.751 7.82 9.56 7.5 11 7.5a1 1 0 1 0 0-2c-1.44 0-2.25-.32-2.715-.785C7.82 4.249 7.5 3.44 7.5 2" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[250px] h-[250px] bg-card rounded-xl shadow-lg overflow-hidden relative">
                    <Image alt="Create character" src="/gradients/mobile/GV-Gradient-04.png" fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <Sparkles className="h-12 w-12 mx-auto mb-4" />
                        <span className="text-lg font-medium">Create Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GradientSection>

      {/* Quantum Technology Section */}
      <section className="w-full py-24 bg-background">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Quantum technology</span>
              <span>]</span>
            </div>
            <h2 className="text-balance text-3xl md:text-4xl tracking-tight font-semibold">
              Advanced Gem Mechanics
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Our advanced gem system uses quantum principles to create more realistic and insightful character interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Quantum Coherence</h3>
              <p className="text-muted-foreground">Maintains consistency between a gem's vision and their message for a more cohesive experience.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Activity size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Energy Simulation</h3>
              <p className="text-muted-foreground">Dynamically adjusts the activity and impact level of each gem based on context and interaction.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Compass size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Phase Tracking</h3>
              <p className="text-muted-foreground">Represents the journey and evolution stage of each gem's development and insight generation.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} className="text-primary">
                  <path d="M13 16.9c0-.1.8-9.1 8-8.9m-14.3 10c4.9-15 18.3-8.4 8.9 6.2M5.5 8.2a11 11 0 018.4-8c3.2-.6 6.5.3 8.9 2.4" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Gem Entanglement</h3>
              <p className="text-muted-foreground">Creates meaningful connections between different gems based on their quantum states.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Gems Slider - Historical Innovators */}
      <section className="w-full py-24 bg-card/5 border-t border-border/30">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Historical innovators</span>
              <span>]</span>
            </div>
            <h2 className="text-balance text-3xl md:text-4xl tracking-tight font-semibold">
              Explore Innovation Across Time
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Interact with the greatest innovators throughout history and understand their groundbreaking ideas
            </p>
          </div>
          
          {/* GemCards Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-primary hover:bg-background border border-border/30 hover:border-primary/30 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            
            <button 
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md text-primary hover:bg-background border border-border/30 hover:border-primary/30 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            {/* Cards Slider */}
            <div className="overflow-x-scroll hide-scrollbar pb-4">
              <div className="flex gap-4 min-w-max">
                {[...gemCategories['Innovators & Thinkers'], ...gemCategories['Innovators & Thinkers']]
                  .slice(0, 16)
                  .map((gem, index) => (
                  <div key={index} className="w-[270px] flex-shrink-0">
                    <Link href={`/gems/${gem.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      <div className="group h-[320px] bg-card hover:bg-card/80 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg relative border border-border/60">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
                        <Image
                          src={'/gradients/mobile/GV-Gradient-05.png'}
                          alt={gem.name}
                          width={300}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm rounded-full px-2 py-0.5">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400" />
                            <span className="text-xs text-white">{gem.energyLevel}%</span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                          <div className="flex flex-col">
                            <p className="text-white text-lg font-medium mb-1">{gem.name}</p>
                            <p className="text-white/80 text-xs line-clamp-2">{gem.description}</p>
                            <div className="flex gap-2 mt-3">
                              {gem.expertise && gem.expertise.slice(0, 2).map((exp: string, idx: number) => (
                                <span key={idx} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                  {exp}
                                </span>
                              ))}
                              {gem.expertise && gem.expertise.length > 2 && (
                                <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">
                                  +{gem.expertise.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Tower Section */}
      <section className="w-full py-32 bg-gradient-to-b from-background to-card/5 border-t border-border/30">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Begin your journey</span>
              <span>]</span>
            </div>
            <h2 className="text-3xl font-semibold mb-2 text-center">Start Your Journey</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl">
              Explore a world of ideas and insights through our collection of gems
            </p>
            
            <div className="w-full flex justify-center">
              <ShapeTower />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer with x.ai style */}
      <footer className="w-full relative overflow-hidden border-t border-border bg-background">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top right, rgba(156, 184, 221, 0.3), transparent 80%)'
          }}></div>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at bottom left, rgba(156, 184, 221, 0.2), transparent 70%)'
          }}></div>
        </div>
        
        <div className="mx-auto w-full px-6 xl:max-w-7xl py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="mono-tag flex items-center gap-2 text-sm mb-4">
                <span>[</span>
                <span>GemVise</span>
                <span>]</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Connect with the wisdom and insights of historical figures through our advanced quantum-powered gem system.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-card/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-card/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="mono-tag mb-4">Features</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Quantum Coherence</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Energy Simulation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Phase Tracking</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Gem Entanglement</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mono-tag mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GemVise. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
