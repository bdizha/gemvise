'use client';

import * as React from 'react';
import DefaultSection from './DefaultSection';
import { SectionProps } from './types';

// Define the available gradient themes
export type GradientTheme = 'dark-light' | 'light-dark' | 'dark-light-dark' | 'light-dark-light' | 'dark-light-dark-long' | 'pink-purple' | 'pink-purple-pink' | 'purple-pink' | 'purple-pink-purple';

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
  const gradientType = isHero ? 'bg-gradient-hero' : 'bg-gradient-regular';

  return (
    <div className="relative">
      {/* Background gradient */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 z-0 h-full w-full ${gradientType} theme-${theme}`}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientSection;
