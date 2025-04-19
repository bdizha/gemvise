'use client';

import * as React from 'react';
import { SectionProps } from '@/components/layout/Section/types';

type DefaultSectionProps = Omit<SectionProps, 'variant'>;

const DefaultSection: React.FC<DefaultSectionProps> = ({ tag, title, description, className = '', children }) => {
  return (
    <div className={`relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40 ${className}`}>
      <div className="w-full">
        {tag && (
          <p className="text-base font-semibold leading-7 text-grey-600 dark:text-grey-400">
            {tag}
          </p>
        )}
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-grey-900 dark:text-grey-50 sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-grey-600 dark:text-grey-400">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
};

export default DefaultSection;
