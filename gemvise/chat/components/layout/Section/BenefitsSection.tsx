'use client';

import * as React from 'react';
import { SectionProps } from './types';

interface Benefit {
  emoji: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps extends SectionProps {
  benefits?: Benefit[];
  gradient?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, description, benefits, className = '', gradient = 'dark-light' }) => {
  // Determine the opposite gradient
  const oppositeGradient = gradient.includes('dark') 
    ? gradient.replace('dark', 'light').replace('light', 'dark')
    : gradient.includes('light')
      ? gradient.replace('light', 'dark').replace('dark', 'light')
      : gradient;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {benefits?.map((benefit, index) => (
        <div key={index} className="p-6 rounded-[36px] relative overflow-hidden">
          <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-${oppositeGradient} bg-no-repeat bg-cover bg-center blur-[12px] brightness-110`} />
          <div className="relative z-10">
            <div className="text-4xl mb-4">{benefit.emoji}</div>
            <h3 className="text-xl font-semibold mb-2 text-white/80">{benefit.title}</h3>
            <p className="text-white/60">{benefit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
