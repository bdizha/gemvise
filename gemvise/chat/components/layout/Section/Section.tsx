'use client';

import React from 'react';
import DefaultSection from './DefaultSection';
import GradientSection from './GradientSection';
import HeroSection from './HeroSection';
import FeaturedSection from './CategorySection';
import GridSlider from '../Grid/GridSlider';
import { type SectionProps, type SectionVariant, type GemCard } from './types';
import { GradientTheme } from '../../../types/gradients';
import ValuesSection from './ValuesSection';

interface ExtendedSectionProps extends Omit<SectionProps, 'theme' | 'gradient'> {
  theme?: GradientTheme;
  gradient?: GradientTheme;
  trendingGems?: GemCard[];
  popularGems?: GemCard[];
  discoverGems?: GemCard[];
  onSearch?: (value: string) => void;
}

// Values grid component - reused by both default and values variants
const ValuesGrid = ({ values }: { values: Array<{ title: string; description: string }> }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
    {values.map((value) => (
      <div key={value.title} className="flex flex-col gap-4 p-6 rounded-[1.5rem] bg-stone-50/50 dark:bg-stone-900/50">
        <h3 className="text-xl font-semibold">{value.title}</h3>
        <p className="text-md/5 opacity-80">{value.description}</p>
      </div>
    ))}
  </div>
);

const Section: React.FC<ExtendedSectionProps> = (props) => {
  const { variant = 'default', theme = 'dark' as GradientTheme, title, description, tag, className = '', gradient = 'light-dark' as GradientTheme } = props;

  const content = (
    <div className="w-full relative z-10">
      {variant !== 'hero' && variant !== 'slider' && (
        <>
          {tag && <p className="text-sm font-semibold leading-6 text-white/70">{tag}</p>}
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl max-w-[50%] lg:max-w-[50%] text-gradient-dark-light">{title}</h2>
          {description && <p className="mt-4 text-base leading-7 text-white/60 max-w-[50%] lg:max-w-[50%]">{description}</p>}
        </>
      )}
      {(() => {
        switch (variant) {
          case 'hero':
            return <HeroSection {...props} />;
          case 'values':
            return <ValuesSection {...props} />;
          case 'slider':
      return (
        <GridSlider 
            title={props.title || ''} 
            cards={props.gems?.map(gem => ({
              title: gem.title,
              description: gem.description || 'No description available',
              imageSrc: gem.imageUrl,
              status: gem.category || 'General',
              href: '#',
              buttonText: 'Chat Now',
              onClick: () => props.onGemClick?.(gem)
            })) || []} 
          />
      );
    case 'values':
      return (
        <DefaultSection {...props} theme={theme}>
          <ValuesGrid values={props.values || []} />
          {props.children}
        </DefaultSection>
      );
         
      default:
            return (
              props.children ? (
                <DefaultSection {...props} gradient={gradient}>
                  {props.children}
                </DefaultSection>
              ) : (
                <></>
              )
            );
        }
      })()}
    </div>
  );

  return (
    <div className={`relative w-full px-16 pt-40 pb-16 overflow-hidden rounded-[56px] mb-16 ${className}`}>
      <div className='mx-auto max-w-[1074px]'>
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-${gradient} bg-no-repeat bg-cover bg-center`} />
        {content}
      </div>
    </div>
  );
};

export default Section;

