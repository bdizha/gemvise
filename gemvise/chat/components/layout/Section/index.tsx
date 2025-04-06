'use client';

import * as React from 'react';
import DefaultSection from './DefaultSection';
import GradientSection from './GradientSection';
import { SectionProps } from './types';

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
  const { variant = 'default' } = props;

  switch (variant) {
    case 'gradient':
      return <GradientSection {...props} />;
    case 'values':
      if ('values' in props && props.values) {
        return (
          <DefaultSection {...props}>
            <ValuesGrid values={props.values} />
            {props.children}
          </DefaultSection>
        );
      }
      return <DefaultSection {...props} />;
    default:
      return <DefaultSection {...props} />;
  }
};

export default Section;
