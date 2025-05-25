'use client';

import * as React from 'react';
import { SectionProps } from './types';
import { type GradientTheme } from './GradientSection';

interface Value {
  title: string;
  description: string;
}

interface ValuesSectionProps extends SectionProps {
  gradient?: GradientTheme;
  values?: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({ title, description, tag, className = '', gradient = 'light-dark', values = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {values.map((value, index) => (
        <div key={index} className="p-8 rounded-[36px] relative overflow-hidden">
          <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-${gradient === 'light-dark-light' ? 'dark-light' : 'light-dark'} bg-no-repeat bg-cover bg-center blur-[12px] brightness-110`} />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-3 text-white/48">{value.title}</h3>
            <p className="text-md text-white/60">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
