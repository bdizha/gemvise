'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ShapeTower from '@/components/shapes/ShapeTower'; // Corrected import path for ShapeTower

// Sample images for the carousel
const carouselImages = [
  {
    src: '/icons/GV-LOGO-02-GOT-06.png',
    alt: 'Gemium Quantum State Visualization',
    description: 'Experience advanced quantum state visualization'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-07.png',
    alt: 'Gemium Energy Flow System',
    description: 'Harness the power of energy flow systems'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-08.png',
    alt: 'Gemium Neural Network',
    description: 'Create sophisticated neural networks'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-05.png',
    alt: 'Gemium Data Processing',
    description: 'Process complex data structures efficiently'
  },
  {
    src: '/icons/GV-LOGO-02-GOT-04.png',
    alt: 'Gemium AI Integration',
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
    <div className="min-h-screen bg-gradient-to-br from-dark-background to-light-background text-dark-text dark:from-light-background dark:to-dark-background dark:text-light-text">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Create with GemVise</h1>
        
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
                      Create powerful AI gems with Gemium
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
              <Link 
                href="/chat"
                className="mt-8 relative isolate inline-flex items-center justify-center border 
                         text-base/6 uppercase font-mono tracking-widest shrink-0 px-6 py-3 
                         sm:text-sm gap-x-3 bg-primary text-background 
                         hover:bg-primary/80 rounded-full"
              >
                Start talking
              </Link>
            </div>

            {/* Grid Section */}
            <section className="mt-12 flex flex-col items-center justify-center gap-3 text-center lg:mx-auto lg:mt-[60px] lg:max-w-[1100px] lg:flex-row lg:gap-[60px] lg:text-left overflow-hidden" style={{ borderRadius: '6rem' }} aria-label="Create your Gem feature">
              <div className="flex px-6 py-[60px] ext-center flex-col items-center lg:items-start gap-6 lg:w-1/2 lg:gap-[60px]" style={{ borderRadius: '4rem' }}>
                <h2 className="display-xs text-xl mx-auto max-w-[235px] px-2 lg:display-md lg:mx-[unset] lg:max-w-[unset] lg:pl-0 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" id="create-gem-heading">Create your <span className="italic">unique</span> Gem.</h2>
                <p className="para-md px-2 text-cn-tertiary lg:heading-sans-sm lg:px-0 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent" aria-labelledby="create-gem-heading">Design personalized AI experts to guide you with deep domain knowledge and authentic insights.</p>
              </div>
              <div className="relative w-full lg:w-1/2 flex items-center justify-center bg-gradient-light-dark" style={{ borderRadius: '4rem', overflow: 'hidden' }}>
                  <Image
                        src="/poses/Pose01.png" 
                        alt="Gem creation visual placeholder" 
                        width={1024} 
                        height={1024} 
                        className="h-auto w-full max-w-full" 
                      />
              </div>
            </section>
          </div>
        </section>

      </div>
    </div>
  );
}
