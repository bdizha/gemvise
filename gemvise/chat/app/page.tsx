'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GradientSection from '@/components/layout/Section/GradientSection';
import ShapeTower from '@/components/shapes/ShapeTower';
import { CheckCircle, Sparkles, Zap, Activity, Compass, ChevronRight, ArrowRight, Star } from 'lucide-react';
import GemGrid from '@/components/gems/GemGrid';

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
  'Business & Finance': [
    {
      name: 'Warren Buffett',
      description: 'Investor and CEO of Berkshire Hathaway, known for value investing and frugal lifestyle',
      image: '/icons/GV-LOGO-02-GOT-01.png',
      expertise: ['Investing', 'Finance', 'Leadership'],
      energyLevel: 95,
      era: '1980s',
      chatCount: '156.7k'
    },
    {
      name: 'Bill Gates',
      description: 'Co-founder of Microsoft and philanthropist, known for his business acumen and charitable efforts',
      image: '/icons/GV-LOGO-02-GOT-02.png',
      expertise: ['Technology', 'Philanthropy', 'Leadership'],
      energyLevel: 98,
      era: '1990s',
      chatCount: '189.3k'
    },
    {
      name: 'Elon Musk',
      description: 'Entrepreneur and business magnate, known for his innovative ventures and ambitious goals',
      image: '/icons/GV-LOGO-02-GOT-03.png',
      expertise: ['Entrepreneurship', 'Innovation', 'Leadership'],
      energyLevel: 96,
      era: '2000s',
      chatCount: '201.4k'
    }
  ],
  'Technology': [
    {
      name: 'Steve Jobs',
      description: 'Co-founder of Apple, known for his innovative designs and visionary leadership',
      image: '/icons/GV-LOGO-02-GOT-04.png',
      expertise: ['Design', 'Innovation', 'Leadership'],
      energyLevel: 94,
      era: '1980s',
      chatCount: '145.2k'
    },
    {
      name: 'Mark Zuckerberg',
      description: 'Co-founder and CEO of Meta, known for his entrepreneurial spirit and technological advancements',
      image: '/icons/GV-LOGO-02-GOT-05.png',
      expertise: ['Technology', 'Entrepreneurship', 'Leadership'],
      energyLevel: 92,
      era: '2000s',
      chatCount: '178.9k'
    },
    {
      name: 'Sundar Pichai',
      description: 'CEO of Alphabet and Google, known for his technical expertise and leadership',
      image: '/icons/GV-LOGO-02-GOT-06.png',
      expertise: ['Technology', 'Leadership', 'Innovation'],
      energyLevel: 97,
      era: '2010s',
      chatCount: '198.5k'
    }
  ],
  'Arts & Design': [
    {
      name: 'Pablo Picasso',
      description: 'Spanish artist, known for his pioneering work in Cubism and artistic innovations',
      image: '/icons/GV-LOGO-02-GOT-07.png',
      expertise: ['Art', 'Design', 'Innovation'],
      energyLevel: 99,
      era: '1900s',
      chatCount: '234.6k'
    },
    {
      name: 'Frida Kahlo',
      description: 'Mexican artist, known for her self-portraits and depiction of Mexican culture',
      image: '/icons/GV-LOGO-02-GOT-08.png',
      expertise: ['Art', 'Culture', 'Self-Expression'],
      energyLevel: 98,
      era: '1930s',
      chatCount: '212.3k'
    },
    {
      name: 'Andy Warhol',
      description: 'American artist, known for his work in Pop Art and experimental filmmaking',
      image: '/icons/GV-LOGO-02-GOT-09.png',
      expertise: ['Art', 'Design', 'Pop Culture'],
      energyLevel: 91,
      era: '1960s',
      chatCount: '167.8k'
    }
  ],
  'Health & Wellness': [
    {
      name: 'Hippocrates',
      description: 'Ancient Greek physician, known as the father of medicine',
      image: '/icons/GV-LOGO-02-GOT-10.png',
      expertise: ['Medicine', 'Health', 'Wellness'],
      energyLevel: 93,
      era: '400 BCE',
      chatCount: '245.1k'
    },
    {
      name: 'Florence Nightingale',
      description: 'British social reformer and statistician, known as the founder of modern nursing',
      image: '/icons/GV-LOGO-02-GOT-11.png',
      expertise: ['Nursing', 'Healthcare', 'Statistics'],
      energyLevel: 90,
      era: '1800s',
      chatCount: '134.7k'
    },
    {
      name: 'Jane Goodall',
      description: 'British primatologist and anthropologist, known for her groundbreaking research on chimpanzees',
      image: '/icons/GV-LOGO-02-GOT-12.png',
      expertise: ['Primatology', 'Anthropology', 'Conservation'],
      energyLevel: 95,
      era: '1960s',
      chatCount: '156.9k'
    }
  ],
  'Science & Research': [
    {
      name: 'Isaac Newton',
      description: 'English mathematician and physicist, known for his laws of motion and universal gravitation',
      image: '/icons/GV-LOGO-02-GOT-13.png',
      expertise: ['Physics', 'Mathematics', 'Astronomy'],
      energyLevel: 96,
      era: '1600s',
      chatCount: '189.4k'
    },
    {
      name: 'Marie Curie',
      description: 'Polish-born physicist and chemist, known for her pioneering work on radioactivity',
      image: '/icons/GV-LOGO-02-GOT-14.png',
      expertise: ['Physics', 'Chemistry', 'Radioactivity'],
      energyLevel: 97,
      era: '1900s',
      chatCount: '223.5k'
    },
    {
      name: 'Stephen Hawking',
      description: 'British theoretical physicist and cosmologist, known for his work on black holes and cosmology',
      image: '/icons/GV-LOGO-02-GOT-15.png',
      expertise: ['Physics', 'Cosmology', 'Black Holes'],
      energyLevel: 94,
      era: '1970s',
      chatCount: '178.2k'
    }
  ],
  'Leadership': [
    {
      name: 'Abraham Lincoln',
      description: '16th U.S. President, known for his leadership during the American Civil War and abolition of slavery',
      image: '/icons/GV-LOGO-02-GOT-16.png',
      expertise: ['Leadership', 'Politics', 'History'],
      energyLevel: 95,
      era: '1800s',
      chatCount: '156.7k'
    },
    {
      name: 'Nelson Mandela',
      description: 'South African anti-apartheid revolutionary and politician, known for his leadership and fight against racism',
      image: '/icons/GV-LOGO-02-GOT-17.png',
      expertise: ['Leadership', 'Politics', 'Social Justice'],
      energyLevel: 98,
      era: '1900s',
      chatCount: '189.3k'
    },
    {
      name: 'Malala Yousafzai',
      description: 'Pakistani activist for female education and Nobel laureate, known for her advocacy and survival of a Taliban assassination attempt',
      image: '/icons/GV-LOGO-02-GOT-18.png',
      expertise: ['Leadership', 'Education', 'Activism'],
      energyLevel: 96,
      era: '2000s',
      chatCount: '201.4k'
    }
  ],
  'Innovation': [
    {
      name: 'Steve Wozniak',
      description: 'Co-founder of Apple, known for his innovative designs and engineering expertise',
      image: '/icons/GV-LOGO-02-GOT-19.png',
      expertise: ['Innovation', 'Design', 'Engineering'],
      energyLevel: 94,
      era: '1970s',
      chatCount: '145.2k'
    },
    {
      name: 'Elon Musk',
      description: 'Entrepreneur and business magnate, known for his innovative ventures and ambitious goals',
      image: '/icons/GV-LOGO-02-GOT-20.png',
      expertise: ['Innovation', 'Entrepreneurship', 'Leadership'],
      energyLevel: 92,
      era: '2000s',
      chatCount: '178.9k'
    },
    {
      name: 'Reid Hoffman',
      description: 'Co-founder of LinkedIn, known for his entrepreneurial spirit and innovative approaches to business',
      image: '/icons/GV-LOGO-02-GOT-21.png',
      expertise: ['Innovation', 'Entrepreneurship', 'Leadership'],
      energyLevel: 97,
      era: '2000s',
      chatCount: '198.5k'
    }
  ]
};

const HomePage = () => {
  const [activeGemCategory, setActiveGemCategory] = useState(Object.keys(gemCategories)[0]);
  
  const buttonClasses = "relative inline-flex items-center justify-center text-base/6 font-medium transition-all duration-200 ease-in rounded-full px-6 py-3 hover:scale-[1.02] active:scale-[0.98]";
  const primaryButtonClasses = `${buttonClasses} bg-primary text-background hover:bg-primary/90`;
  const secondaryButtonClasses = `${buttonClasses} border border-border/30 bg-card/5 hover:bg-card/10`;
  const tabClasses = "relative inline-flex items-center justify-center text-base/6 font-medium transition-all duration-200 ease-in rounded-full px-4 py-2 min-w-32";

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
                              placeholder="Search for experts by name or expertise..."
                              type="text"
                            />
                            <div className="absolute inset-y-2 right-2 lg:right-4 flex items-center">
                              <button 
                                aria-label="Search for gems" 
                                type="submit"
                                className={primaryButtonClasses}
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
                    Connect with world-class experts through AI and gain valuable insights from their years of experience.
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a className={primaryButtonClasses} href="/create">
                    <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                    <span>Create Expert Profile</span>
                  </a>
                  <a className={secondaryButtonClasses} href="/experts">
                    <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true"></span>
                    <span>Explore Experts</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Experts Section */}
      <section className="w-full py-24 bg-card/5">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Featured Experts</span>
              <span>]</span>
            </div>
            <h2 className="text-balance text-3xl md:text-4xl tracking-tight font-semibold">
              Connect with World-Class Experts
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Have meaningful conversations with AI versions of industry leaders, visionaries, and creators.
            </p>
          </div>
          
          <GemGrid 
            gems={Object.values(gemCategories).flat()}
            variant="featured"
            showHeader
            title="Featured Experts"
            className="px-8"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="pb-20">
        <div className="px-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Browse by Expertise</h2>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4">
            {Object.keys(gemCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveGemCategory(category)}
                className={`${tabClasses} ${
                  activeGemCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <GemGrid 
          gems={gemCategories[activeGemCategory]}
          variant="scroll"
          maxItems={16}
          repeatInScroll={true}
          className="px-8"
        />

        <div className="flex justify-center mt-12">
          <Link href="/experts">
            <button className={primaryButtonClasses}>
              View All Experts <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </Link>
        </div>
      </section>

      {/* Create Expert Profile Section */}
      <GradientSection theme="pink">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Create Your Expert Profile</h2>
              <p className="text-lg mb-6">
                Share your knowledge and expertise with the world through our advanced AI-powered expert system.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Detailed expert profiles</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Advanced knowledge sharing</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-primary"><CheckCircle size={20} /></span>
                  <span>Interactive conversations</span>
                </li>
              </ul>
              <Link href="/create" className={primaryButtonClasses}>
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
                    <path d="M16 8a1 1 0 1 0-2 0c0 2.309-.51 3.742-1.384 4.616S10.309 14 8 14a1 1 0 1 0 0 2c2.309 0 3.742.51 4.616 1.384S14 19.692 14 22a1 1 0 1 0 2 0c0-2.308.51-3.742 1.384-4.616S19.692 16 22 16a1 1 0 1 0 0-2c-2.308 0-3.742-.51-4.616-1.384S16 10.309 16 8" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-[250px] h-[250px] bg-card rounded-xl shadow-lg overflow-hidden relative">
                    <Image alt="Create expert profile" src="/gradients/mobile/GV-Gradient-04.png" fill style={{ objectFit: 'cover' }} />
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
              Advanced Expert Mechanics
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Our advanced expert system uses quantum principles to create more realistic and insightful expert interactions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Zap size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Quantum Coherence</h3>
              <p className="text-muted-foreground">Maintains consistency between an expert's vision and their message for a more cohesive experience.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Activity size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Energy Simulation</h3>
              <p className="text-muted-foreground">Dynamically adjusts the activity and impact level of each expert based on context and interaction.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Compass size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Phase Tracking</h3>
              <p className="text-muted-foreground">Represents the journey and evolution stage of each expert's development and insight generation.</p>
            </div>
            
            <div className="bg-card/5 p-8 rounded-xl hover:shadow-md transition-all border border-border/30">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" fill="none" height={24} width={24} className="text-primary">
                  <path d="M13 16.9c0-.1.8-9.1 8-8.9m-14.3 10c4.9-15 18.3-8.4 8.9 6.2M5.5 8.2a11 11 0 018.4-8c3.2-.6 6.5.3 8.9 2.4" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-3">Expert Entanglement</h3>
              <p className="text-muted-foreground">Creates meaningful connections between different experts based on their quantum states.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Experts Slider - Business & Finance */}
      <section className="w-full py-24 bg-card/5 border-t border-border/30">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="mb-12">
            <div className="mono-tag flex items-center gap-2 text-sm mb-6">
              <span>[</span>
              <span>Business & Finance</span>
              <span>]</span>
            </div>
            <h2 className="text-balance text-3xl md:text-4xl tracking-tight font-semibold">
              Explore Expertise in Business & Finance
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4">
              Interact with leading experts in business and finance and gain valuable insights from their years of experience
            </p>
          </div>
          
          <GemGrid 
            gems={gemCategories['Business & Finance']}
            variant="scroll"
            maxItems={16}
            className="px-8"
          />
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
              Explore a world of expertise and insights through our collection of experts
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
                Connect with the wisdom and insights of experts through our advanced quantum-powered expert system.
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
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Expert Entanglement</a></li>
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
