'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { type Gem } from '@/types/gems';
import GemGrid from '@/components/gems/GemGrid';
import GemList from '@/components/gems/GemList';
import Button from '@/components/ui/Button';
import { featuredGems, allGems } from '@/mocks/gems';

// Sample images for the carousel
const carouselContent = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'GemVise AI Experts',
    description: 'Connect with AI-powered expert personas'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'GemVise Knowledge Network',
    description: 'Access a network of specialized knowledge'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'GemVise Interactive Learning',
    description: 'Learn through dynamic conversations'
  }
];

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  const handleGemClick = (gem: Gem) => {
    router.push(`/chat/${gem.id}`);
  };

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery) return;

    const searchParams = new URLSearchParams();
    searchParams.set('q', searchQuery);
    router.push(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative aspect-square md:aspect-[2/1] w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute inset-0 transition-all duration-500 ease-in-out section-gradient-light-dark opacity-50 blur-[30px]" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col relative">
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 py-12 relative z-10">
              {/* Left Content */}
              <div className="flex-1 text-center text-white relative z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Connect with AI-Powered Expert Personas
                </h1>
                <p className="text-base md:text-lg text-white/80 mb-6">
                  Experience interactive learning through dynamic conversations with AI versions of world-renowned experts.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-4 max-w-md mx-auto relative z-10 backdrop-blur-sm bg-white/10 p-3 rounded-2xl border border-white/20 shadow-xl">
                  <input
                    type="text"
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search for an expert..."
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
              
              {/* Right Content - Logo Carousel */}
              <div className="flex-1 relative w-full max-w-md z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-DEFAULT/20 via-pink-DEFAULT/20 to-violet-DEFAULT/20 blur-3xl rounded-full transform rotate-12" />
                <div className="relative aspect-square">
                  <Image
                    src={carouselContent[currentSlide].src}
                    alt={carouselContent[currentSlide].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
                  <p className="text-lg font-medium mb-2 text-white">{carouselContent[currentSlide].description}</p>
                  <div className="flex justify-center gap-2">
                    <button onClick={prevSlide} className="p-2 rounded-full hover:bg-accent">
                      ←
                    </button>
                    <button onClick={nextSlide} className="p-2 rounded-full hover:bg-accent">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Experts Section */}
      <section className="py-12 px-6">
        <div className="mx-auto xl:max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Featured Gems</h2>
          <div id="featured-grid" className="overflow-x-auto scrollbar-hide">
            <GemGrid 
              type="slider" 


              gems={allGems} 
              onGemClick={handleGemClick} 
            />
          </div>
        </div>
      </section>

      {/* Category Sections */}
      {[
        { 
          id: 'finance',
          name: 'Finance & Investment', 
          gems: allGems.filter((g: Gem) => g.category === 'Finance')
        },
        { 
          id: 'lifestyle',
          name: 'Lifestyle & Organization', 
          gems: allGems.filter((g: Gem) => g.category === 'Lifestyle')
        },
        { 
          id: 'cooking',
          name: 'Cooking & Culinary Arts', 
          gems: allGems.filter((g: Gem) => g.category === 'Cooking')
        },
      ].map((category) => {
        return (
          <section key={category.id} className="py-12 px-6">
            <div className="mx-auto xl:max-w-7xl">
              <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
              <div className="overflow-hidden">
                <GemGrid 
                  type="slider"


                  gems={category.gems}
                  onGemClick={handleGemClick}
                  className="py-8"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
