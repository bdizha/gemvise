'use client';

import React from 'react';
import DefaultSection from './DefaultSection';
import styles from '@/styles/gradients.module.css';
import { SectionProps } from './types';

type GradientSectionProps = Omit<SectionProps, 'variant'>;

const GradientSection: React.FC<GradientSectionProps> = ({ className = '', children, ...props }) => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0" style={{ opacity: 1 }}>
        <div 
          className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
          }}
        />
        <div 
          className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)]"
          style={{
            background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
          }}
        />
        <div 
          className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full -scale-y-100"
          style={{
            background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
          }}
        />
        <div 
          className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)] -scale-y-100"
          style={{
            background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
          }}
        />
      </div>
      <DefaultSection className={className} {...props}>
        <section className="relative py-24">
          {props.tag && (
            <span className="inline-block px-4 py-2 mb-8 text-sm font-medium bg-stone-100 dark:bg-stone-900 rounded-full">
              {props.tag}
            </span>
          )}
          <h2 className="gradient-text">{props.title}</h2>
          <p className="mt-6 text-xl/7 max-w-2xl opacity-80">{props.description}</p>
          {children}
        </section>
      </DefaultSection>
    </div>
  );
};

export default GradientSection;
