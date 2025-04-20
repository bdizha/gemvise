import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface HomeHeroProps {
  currentSlide: number;
  carouselContent: Array<{
    src: string;
    alt: string;
    description: string;
  }>;
  onSearch: (query: string) => void;
}

const HomeHero: React.FC<HomeHeroProps> = ({ currentSlide, carouselContent, onSearch }) => {
  return (
    <div className="relative aspect-square md:aspect-[2/1] w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 transition-all duration-500 ease-in-out bg-gradient-light-dark opacity-50 blur-[30px]" />
       
        <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col relative">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 py-12 relative z-10">
            {/* Left Content */}
            <div className="flex-1 text-center text-white relative z-10">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Connect, discover and create
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-6">
                Experience interactive learning through dynamic conversations with AI versions of world-renowned experts.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-4 max-w-md mx-auto relative z-10 backdrop-blur-sm bg-white/10 p-3 rounded-[36px] border border-white/20 shadow-xl">
                <input
                  type="text"
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search for an expert..."
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-theme-foreground"
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
                  {carouselContent.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
