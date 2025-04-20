'use client';

import * as React from 'react';
import { SectionProps } from '@/components/layout/Section/types';

type GradientTheme = 
  | 'dark-light'
  | 'light-dark'
  | 'dark-light-dark'
  | 'light-dark-light'
  | 'dark-light-dark-long'
  | 'pink-purple'
  | 'pink-purple-pink'
  | 'purple-pink'
  | 'purple-pink-purple';

type DefaultSectionProps = Omit<SectionProps, 'variant'> & {
  gradient?: GradientTheme;
};

const DefaultSection: React.FC<DefaultSectionProps> = ({ tag, title, description, className = '', gradient = 'dark-light', children }) => {
  return (
    <div className={`relative mx-auto max-w-[1074px] px-6 py-24 sm:py-32 lg:px-8 lg:py-40 overflow-hidden rounded-[40px] mb-16 ${className}`}>
      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-${gradient} bg-no-repeat bg-cover bg-center blur-[12px] brightness-110`} />
     
      <div className="w-full relative z-10">
        {tag && (
          <p className="text-base font-semibold leading-7 text-white/70">
            {tag}
          </p>
        )}
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white/80 sm:text-6xl max-w-[50%] lg:max-w-[50%]">
          {title}
        </h2>
        {description && <p className="mt-6 text-lg leading-8 text-white/60 max-w-[50%] lg:max-w-[50%]">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default DefaultSection;
