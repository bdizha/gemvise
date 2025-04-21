'use client';

import * as React from 'react';
import { SectionProps } from '@/components/layout/Section/types';

import { GradientTheme } from '@/types/gradients';

type DefaultSectionProps = Omit<SectionProps, 'variant'> & {
  gradient?: GradientTheme;
};

const DefaultSection: React.FC<DefaultSectionProps> = ({ className = '', gradient = 'dark', children }) => {
  return (
    <div className={`relative mx-auto max-w-[1074px] px-6 py-24 sm:py-32 lg:px-8 lg:py-36 overflow-hidden rounded-[40px] mb-16 ${className}`}>
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-${gradient} bg-no-repeat bg-cover bg-center blur-[12px] brightness-110`} />
      {children}
    </div>
  );
};

export default DefaultSection;
