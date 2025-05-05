'use client';

import React from 'react';

interface GemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

export const Gem: React.FC<GemProps> = ({ className = '', size = 'md' }) => {
  return (
    <svg 
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gem shape - hexagonal with facets */}
      <path
        d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner facets */}
      <path
        d="M12 2L12 22M4 7L20 17M20 7L4 17"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Gem;
