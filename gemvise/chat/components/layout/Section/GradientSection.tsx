'use client';

import * as React from 'react';
import DefaultSection from './DefaultSection';
import { SectionProps } from './types';

// Define the available gradient themes
export type GradientTheme = 'light' | 'dark' | 'pink' | 'purple';

// Define props for the GradientSection component
export interface GradientSectionProps extends SectionProps {
  theme?: GradientTheme;
  isHero?: boolean;
}

const GradientSection = (props: GradientSectionProps) => {
  const { 
    title, 
    description, 
    tag, 
    className = '', 
    children,
    theme = 'dark',
    isHero = false
  } = props;

  // Determine which gradient type to use based on isHero prop
  const gradientType = isHero ? 'section-gradient-hero' : 'section-gradient-regular';

  return (
    <div className="relative">
      {/* Background gradient */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 z-0 h-full w-full ${gradientType} theme-${theme}`}
      />

      {/* Content */}
      <DefaultSection
        title={title}
        description={description}
        tag={tag}
        className={`relative z-10 ${className}`}
      >
        <section className="relative z-10">
          {children}
        </section>
      </DefaultSection>
    </div>
  );
};

export default GradientSection;
