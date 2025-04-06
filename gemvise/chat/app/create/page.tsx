'use client';

import { useState } from 'react';
import Image from 'next/image';

// Sample images for the carousel
const carouselImages = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'GemVise Quantum State Visualization',
    description: 'Experience advanced quantum state visualization'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'GemVise Energy Flow System',
    description: 'Harness the power of energy flow systems'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'GemVise Neural Network',
    description: 'Create sophisticated neural networks'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-05.png',
    alt: 'GemVise Data Processing',
    description: 'Process complex data structures efficiently'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-04.png',
    alt: 'GemVise AI Integration',
    description: 'Seamlessly integrate advanced AI capabilities'
  }
];

export default function CreatePage() {
  const [query, setQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
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
              <div className="space-y-16">
                <div className="mono-tag flex items-center gap-2 text-sm">
                  <span>[</span>
                  <span>Create Your AI Gems</span>
                  <span>]</span>
                </div>
                <div className="w-full h-[20svh] lg:h-[160px]">
                  <div className="absolute inset-x-0 flex justify-center items-center z-10">
                    <div className="max-w-xl">
                      <form className="relative w-full items-center gap-3 bg-gradient-to-tr rounded-full p-px from-primary/5 to-primary/20">
                        <input 
                          type="text" 
                          className="w-full h-14 lg:h-[68px] rounded-full border-none pl-6 pr-20 
                                   focus:outline-none focus:ring-2 focus:ring-white/50 
                                   bg-neutral-900 text-primary placeholder:text-primary/50 
                                   focus:bg-background"
                          placeholder="Create your gem..." 
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="absolute inset-y-2 right-2 lg:right-4 flex items-center">
                          <button 
                            type="submit"
                            className="relative isolate inline-flex items-center justify-center border 
                                     text-base/6 uppercase font-mono tracking-widest shrink-0 
                                     focus:outline-none aspect-square px-3.5 py-1.5 sm:text-sm gap-x-2 
                                     bg-primary text-background hover:bg-primary/80 rounded-full"
                          >
                            <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] 
                                         -translate-x-1/2 -translate-y-1/2 
                                         [@media(pointer:fine)]:hidden" 
                                  aria-hidden="true">
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                                 fill="currentColor" aria-hidden="true" 
                                 className="!size-4">
                              <path fillRule="evenodd" 
                                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" 
                                    clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[160px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                     fill="currentColor" aria-hidden="true" 
                     className="size-6 my-2">
                  <path fillRule="evenodd" 
                        d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" 
                        clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="max-w-lg">
                  Create powerful AI gems with advanced capabilities in reasoning, coding, and visual processing. Experience the next generation of AI interaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          {/* Ask Anything Section */}
          <div>
            <div className="space-y-12">
              <div>
                <div className="mono-tag flex items-center gap-2 text-sm">
                  <span>[</span>
                  <span>Create anything</span>
                  <span>]</span>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl space-y-12">
                  <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
                    Create powerful AI gems with GemVise
                  </h2>
                </div>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
                  <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                    Transform your ideas into interactive AI experiences with real-time capabilities and seamless integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Talk with Gems Section */}
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span>
                <span>Talk with Gems</span>
                <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-12">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
                  Engage in natural conversations
                </h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  Experience fluid, contextual dialogue with your AI gems through text or voice interaction.
                </p>
              </div>
            </div>
            <button className="mt-8 relative isolate inline-flex items-center justify-center border 
                           text-base/6 uppercase font-mono tracking-widest shrink-0 px-6 py-3 
                           sm:text-sm gap-x-3 bg-primary text-background 
                           hover:bg-primary/80 rounded-full">
              Start talking
            </button>
          </div>

          {/* Visual Creation Section */}
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span>
                <span>Visual Creation</span>
                <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-12">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">
                  Transform text into visual realities
                </h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  {carouselImages[currentSlide].description}
                </p>
              </div>
            </div>
            
            {/* Image Carousel */}
            <div className="relative w-full mt-8">
              <div className="overflow-hidden rounded-2xl aspect-video relative">
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute w-full h-full transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-primary"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background text-primary"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary' : 'bg-primary/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
