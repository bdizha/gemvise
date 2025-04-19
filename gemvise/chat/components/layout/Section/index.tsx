'use client';

import React from 'react';
import DefaultSection from './DefaultSection';
import GradientSection from './GradientSection';
import HeroSection from './HeroSection';
import FeaturedSection from './FeaturedGems';
import CategorySection from './CategorySection';
import { type SectionProps } from './types';

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

const Section = (props: SectionProps) => {
  const { variant = 'default', theme = 'dark', isHero = false } = props;

  switch (variant) {
    case 'gradient':
      return (
        <DefaultSection {...props} theme={theme}>
          <GradientSection {...props} isHero={isHero} />
        </DefaultSection>
      );
    case 'hero':
      return (
        <DefaultSection {...props} theme={theme}>
          <HeroSection {...props} />
        </DefaultSection>
      );
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
      return <DefaultSection {...props} theme={theme} />;
  }
};

export default Section;

