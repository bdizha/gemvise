'use client';

import React from 'react';
import DefaultSection from './DefaultSection';
import GradientSection from './GradientSection';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedGems';
import CategorySection from './CategorySection';
import { type SectionProps, type SectionVariant, type GemCard } from './types';
import { type GradientTheme } from './GradientSection';
import ValuesSection from './ValuesSection';
import BenefitsSection from './BenefitsSection';

interface ExtendedSectionProps extends SectionProps {
  trendingGems?: GemCard[];
  popularGems?: GemCard[];
  discoverGems?: GemCard[];
  onSearch?: (value: string) => void;
}

// Values grid component - reused by both default and values variants
const ValuesGrid = ({ values }: { values: Array<{ title: string; description: string }> }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
    {values.map((value) => (
      <div key={value.title} className="flex flex-col gap-4 p-6 rounded-lg bg-stone-50/50 dark:bg-stone-900/50">
        <h3 className="text-xl font-semibold">{value.title}</h3>
        <p className="text-md/5 opacity-80">{value.description}</p>
      </div>
    ))}
  </div>
);

const Section: React.FC<ExtendedSectionProps & { gradient?: GradientTheme }> = (props) => {
  const { variant = 'default', theme = 'dark-light', isHero = false, title, description, tag, className = '', gradient = 'light-dark-light' } = props;

  const content = (
    <div className="w-full relative z-10">
      {variant !== 'hero' && (<>
        {tag && <p className="text-sm font-semibold leading-6 text-white/70">{tag}</p>}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white/80 sm:text-5xl max-w-[50%] lg:max-w-[50%]">{title}</h2>
        {description && <p className="mt-4 text-base leading-7 text-white/60 max-w-[50%] lg:max-w-[50%]">{description}</p>}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white/80 sm:text-5xl max-w-[50%] lg:max-w-[50%]">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-white/60 max-w-[50%] lg:max-w-[50%]">{description}</p>}
      </>)}
      {(() => {
        switch (variant) {
          case 'hero':
            return <HeroSection {...props} />;
          case 'values':
            return <ValuesSection {...props} />;
          case 'benefits':
            return <BenefitsSection {...props} />;
          case 'featured':
      return (
        <DefaultSection {...props} theme={theme}>
          <FeaturedSection gems={props.gems || []} onGemClick={(gem) => props.onGemClick?.(gem)} />
          {props.children}
        </DefaultSection>
      );
    case 'category':
      return (
        <DefaultSection {...props} theme={theme}>
          <CategorySection name={props.title || ''} gems={props.gems || []} onGemClick={(gem) => props.onGemClick?.(gem)} />
          {props.children}
        </DefaultSection>
      );
    case 'values':
      return (
        <DefaultSection {...props} theme={theme}>
          <ValuesGrid values={props.values || []} />
          {props.children}
        </DefaultSection>
      );
          default:
            return null;
        }
      })()}
    </div>
  );

  return (
    <div className={`relative w-full px-16 pt-40 pb-40 overflow-hidden rounded-[56px] mb-16 ${className}`}>
      <div className='mx-auto max-w-[1074px]'>
        <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-dark-light bg-no-repeat bg-cover bg-center`} />
        {content}
      </div>
    </div>
  );
};

export default Section;

