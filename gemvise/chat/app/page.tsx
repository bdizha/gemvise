'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { type Gem } from '@/types/gems';
import GemGrid from '@/components/gems/GemGrid';
import Button from '@/components/ui/Button';

// Sample images for the carousel
const carouselImages = [
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

const featuredGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Expert',
    description: 'Learn investment strategies and wisdom from the Oracle of Omaha.',
    category: 'Finance',
    imageUrl: '/gradients/GV-Gradient-01.png',
    gradient: 'bg-gradient-to-r from-amber-DEFAULT to-orange-DEFAULT',
    expertise: ['Value Investing', 'Wealth Building', 'Business Analysis'],
    followers: 1000000,
    chatCount: 50000
  },
  {
    id: '2',
    name: 'Gordon Ramsay',
    title: 'Celebrity Chef',
    description: 'Master culinary techniques and recipes with personalized guidance.',
    category: 'Cooking',
    imageUrl: '/gradients/GV-Gradient-02.png',
    gradient: 'bg-gradient-to-r from-violet-DEFAULT via-pink-DEFAULT to-violet-DEFAULT',
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique'],
    followers: 750000,
    chatCount: 35000
  },
  {
    id: '3',
    name: 'Elon Musk',
    title: 'Tech Innovator',
    description: 'Explore technology, innovation, and entrepreneurship.',
    category: 'Technology',
    imageUrl: '/gradients/GV-Gradient-03.png',
    gradient: 'bg-gradient-to-r from-blue-DEFAULT to-violet-DEFAULT',
    expertise: ['Innovation', 'Technology', 'Entrepreneurship'],
    followers: 900000,
    chatCount: 45000
  },
  {
    id: '4',
    name: 'Marie Kondo',
    title: 'Organization Expert',
    description: 'Transform your space and life with the KonMari method.',
    category: 'Lifestyle',
    imageUrl: '/gradients/GV-Gradient-04.png',
    gradient: 'bg-gradient-to-r from-pink-DEFAULT to-violet-DEFAULT',
    expertise: ['Organization', 'Minimalism', 'Home Design'],
    followers: 500000,
    chatCount: 25000
  },
  {
    id: '5',
    name: 'Michelle Obama',
    title: 'Leadership Expert',
    description: 'Learn about leadership, public service, and personal growth.',
    category: 'Leadership',
    imageUrl: '/gradients/named/GV-Gradient-Purple-Pink.png',
    gradient: 'bg-gradient-to-r from-violet-DEFAULT to-pink-DEFAULT',
    expertise: ['Leadership', 'Public Service', 'Personal Growth'],
    followers: 850000,
    chatCount: 40000
  }
];

const mockGems: Gem[] = [
  {
    id: '1',
    name: 'Warren Buffett',
    title: 'Investment Expert',
    description: 'Learn value investing from the Oracle of Omaha',
    category: 'Finance',
    imageUrl: '/gradients/named/GV-Gradient-Purple-Pink.png',
    gradient: 'bg-gradient-to-r from-violet-DEFAULT to-pink-DEFAULT',
    expertise: ['Value Investing', 'Business Analysis', 'Market Strategy'],
    followers: 1000000,
    chatCount: 50000
  },
  {
    id: '2',
    name: 'Marie Kondo',
    title: 'Organization Expert',
    description: 'Master the art of tidying up and organizing',
    category: 'Lifestyle',
    imageUrl: '/gradients/named/GV-Gradient-Pink-Purple.png',
    gradient: 'bg-gradient-to-r from-pink-DEFAULT to-violet-DEFAULT',
    expertise: ['Organization', 'Minimalism', 'Home Design'],
    followers: 500000,
    chatCount: 25000
  },
  {
    id: '3',
    name: 'Gordon Ramsay',
    title: 'Celebrity Chef',
    description: 'Master the art of cooking with a world-renowned chef.',
    category: 'Cooking',
    imageUrl: '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
    gradient: 'bg-gradient-to-r from-violet-DEFAULT via-pink-DEFAULT to-violet-DEFAULT',
    expertise: ['Culinary Arts', 'Restaurant Management', 'Food Critique'],
    followers: 750000,
    chatCount: 35000
  }
];

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGemIndex, setCurrentGemIndex] = useState(2); // Center gem in slider
  const [query, setQuery] = useState('');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleGemClick = (gem: Gem) => {
    router.push(`/chat/${gem.id}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden rounded-[60px] md:rounded-[40px]">
        <div className="relative w-full h-full rounded-[60px] md:rounded-[40px] overflow-hidden">
          <Image
            src="/gradients/named/GV-Gradient-Purple-Pink-Purple.png"
            alt="Background Gradient"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col relative">
            <div className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] gap-12 py-16 relative z-10">
              {/* Left Content */}
              <div className="flex-1 text-center text-white relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Connect with AI-Powered Expert Personas
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  Experience interactive learning through dynamic conversations with AI versions of world-renowned experts.
                </p>
                <form onSubmit={handleSearch} className="flex gap-4 max-w-md mx-auto relative z-10 backdrop-blur-sm bg-white/10 p-4 rounded-2xl border border-white/20 shadow-xl">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for an expert..."
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
              
              {/* Right Content - Logo Carousel */}
              <div className="flex-1 relative w-full max-w-lg z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-DEFAULT/20 via-pink-DEFAULT/20 to-violet-DEFAULT/20 blur-3xl rounded-full transform rotate-12" />
                <div className="relative aspect-square">
                  <Image
                    src={carouselImages[currentSlide].src}
                    alt={carouselImages[currentSlide].alt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center mb-4">
                  <p className="text-lg font-medium mb-2">{carouselImages[currentSlide].description}</p>
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

      {/* Featured Experts - Slider Layout */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Experts</h2>
          <GemGrid
            type="slider"
            variant="pyramid"
            gems={featuredGems}
            visibleCount={5}
            currentIndex={currentGemIndex}
            onGemClick={handleGemClick}
          />
        </div>
      </section>

      {/* Popular Categories - Table Layout */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          <GemGrid
            type="table"
            layout="2-rows-2-3"
            gems={featuredGems.slice(0, 5)}
            onGemClick={handleGemClick}
          />
        </div>
      </section>
    </div>
  );
}
