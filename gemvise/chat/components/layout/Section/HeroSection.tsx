import React, { useState } from 'react';
import { type SectionProps, type GemCard } from './types';
import DefaultSection from './DefaultSection';

interface HeroSectionProps extends SectionProps {
  onSearch?: (value: string) => void;
  trendingGems?: GemCard[];
  popularGems?: GemCard[];
  discoverGems?: GemCard[];
}

const HeroSection = (props: HeroSectionProps) => {
  const { onSearch, trendingGems = [], popularGems = [], discoverGems = [], ...rest } = props;
  const [activeTab, setActiveTab] = useState<'trending' | 'popular' | 'discover'>('trending');

  const tabs = [
    { id: 'trending', label: 'Trending', items: trendingGems },
    { id: 'popular', label: 'Popular', items: popularGems },
    { id: 'discover', label: 'Discover', items: discoverGems },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4">
      {/* Main content (2/3) */}
      <div className="lg:w-2/3">
        <div className="bg-gradient-dark-light rounded-[36px] p-16 backdrop-blur">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            {props.title}
          </h1>
          <div className="w-full h-[20svh] lg:h-[160px]">
            <div className="absolute inset-x-0 flex justify-center items-center z-10">
           
            </div>
            <form className="relative w-full items-center gap-3 bg-[#1f242a] rounded-full p-px from-primary/5 to-primary/20" onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.currentTarget.querySelector('input');
                  if (input && onSearch) onSearch(input.value);
                }}>
                  <input
                    type="text"
                    placeholder="Create your gem..."
                    className="w-full h-14 lg:h-[68px] rounded-full border-none pl-6 pr-20 focus:outline-none focus:ring-2 focus:ring-white/50 bg-gradient-light-dark text-primary placeholder:text-primary/50 focus:bg-background hover:bg-white/20"
                    onChange={(e) => onSearch?.(e.target.value)}
                  />
                  <div className="absolute inset-y-2 right-2 lg:right-4 flex items-center">
                    <button 
                      type="submit" 
                      className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none aspect-square px-3.5 py-1.5 sm:text-sm gap-x-2 bg-primary text-background hover:bg-primary/80 rounded-full"
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

      {/* Tabs and Gems (1/3) */}
      <div className="lg:w-1/3">
        <div className="flex gap-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-6 py-4 rounded-[32px] text-sm font-medium transition-colors ${activeTab === tab.id ? 'bg-gradient-pink-purple-pink text-white' : 'bg-gradient-light-dark text-white/70 hover:bg-white/20'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {tabs.find(tab => tab.id === activeTab)?.items.map((gem) => (
            <a
              key={gem.id}
              href={gem.href}
              className="min-w-[200px] flex flex-row gap-2 p-3 items-center bg-gradient-light-dark bg-surface-elevation-1 hover:bg-gradient-light-dark rounded-[24px] transition-colors"
            >
              <span className="relative flex h-[54px] w-[54px] overflow-hidden rounded-full shrink-0">
                <img
                  src={gem.imageUrl}
                  alt={gem.title}
                  width={54}
                  height={54}
                  className="object-cover object-center bg-card"
                />
              </span>
              <div className="flex flex-col">
                <p className="line-clamp-1 text-ellipsis text-white">{gem.title}</p>
                <p className="line-clamp-1 text-ellipsis text-white/60 text-sm">{gem.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

export const HeroCard = ({ 
  title, 
  description, 
  status = 'available',
  imageSrc,
  videoSrc,
  href,
  buttonText = 'Learn more',
  extraButton
}: {
  title: string;
  description: string;
  status?: string;
  imageSrc: string;
  videoSrc?: string;
  href: string;
  buttonText?: string;
  extraButton?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-[490px] md:w-full text-left md:block bg-[#fefdfc] p-3 pb-[30px] md:pb-5 rounded-[60px] md:rounded-[40px] mb-[35px] last:mr-0" 
      style={{ 
        boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="w-full md:relative">
        <span className="block relative mb-[30px] md:mb-4 rounded-t-[46px] rounded-b-[32px] md:rounded-[32px] overflow-hidden inline-block aspect-[473/187] md:aspect-[350/187]">
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {videoSrc && (
            <div className="absolute top-0 left-0 h-full w-full">
              <div className="group relative h-full w-full block">
                <div className="absolute top-[-2px] bottom-[-2px] h-auto left-0 w-full">
                  <video 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loop
                    preload="none"
                    muted
                    playsInline
                    src={videoSrc}
                  />
                </div>
                <img 
                  src={imageSrc}
                  alt={title}
                  className="absolute block w-full h-full max-w-none object-cover transform transition-all duration-250 ease-in-out z-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </span>
      </div>

      <div className="flex-grow flex flex-col w-full md:w-full md:px-5 md:mb-[110px] md:sticky md:top-0 px-[22px] md:mb-[30px] md:pt-6">
        <div className="mb-[10px]">
          <span className="underline uppercase font-semibold text-[14px] underline-offset-[0.1em] md:text-[12px] mb-[0.5em] text-[#37071D] tracking-[0.02em]">
            {status}
          </span>
        </div>
        
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2 className="font-[500] text-[24px] md:pr-0 mb-[10px] tracking-[-0.048em]">
              {title}
            </h2>
            <p className="font-sans text-[16px] mb-[1em]">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-start space-x-[10px]">
            <a 
              href={href}
              className="w-[155px] h-[56px] text-[17px] rounded-[24px] bg-[#1D1B1A] text-[#F4EFED] text-center flex items-center justify-center hover:bg-white hover:text-[#1D1B1A] border-solid border transition-all duration-[0.4s] ease-out"
              style={{
                boxShadow: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.20)'
              }}
            >
              {buttonText}
            </a>
            {extraButton}
          </div>
        </div>
      </div>
    </div>
  );
};
