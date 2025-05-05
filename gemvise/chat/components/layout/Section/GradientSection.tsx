'use client';

import * as React from 'react';
import { SectionProps } from './types';
import { type GradientTheme } from '@/types/gradients';

// Define props for the GradientSection component
export interface GradientSectionProps extends Omit<SectionProps, 'theme' | 'gradient'> {
  theme?: GradientTheme;
  gradient?: GradientTheme;
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
    gradient = 'dark-light-dark',
    isHero = false
  } = props;

  // Use gradient prop if provided, otherwise fall back to theme
  const gradientTheme = gradient || theme;

  return (
    <div className={`relative ${className}`}>
      {/* Background gradient */}
      <div 
        className={`pointer-events-none absolute left-0 top-0 z-0 h-full w-full bg-gradient-${gradientTheme}`}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientSection;
