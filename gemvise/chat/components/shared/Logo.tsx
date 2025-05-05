'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface LogoProps {
  variant?: 'header' | 'sidebar' | 'footer';
  className?: string;
  isSidebarOpen?: boolean;
}

export const Logo = ({ variant = 'header', className = '', isSidebarOpen }: LogoProps): JSX.Element => {
  const { theme } = useTheme();
  
  const containerClasses = {
    header: 'flex items-center gap-2',
    sidebar: 'flex items-center space-x-2', 
    footer: 'flex items-center gap-2'
  };

  // Determine the icon source based on variant and theme
  const getIconSrc = () => {
    if (variant === 'footer') {
      return theme === 'light' ? '/icons/Dark-Square.png' : '/icons/Dark-Square.png';
    } else if (variant === 'sidebar' || isSidebarOpen) {
      return theme === 'light' ? '/logos/Dark.png' : '/logos/Light.png';
    } else {
      return theme === 'light' ? '/icons/Dark.png' : '/icons/Light.png';
    }
  };

  // Determine dimensions based on variant
  const getDimensions = () => {
    if (variant === 'sidebar' || isSidebarOpen || variant === 'footer') {
      return { width: 96, height: 18 };
    } else {
      return { width: 32, height: 32 };
    }
  };

  const dimensions = getDimensions();

  return (
    <Link href="/" className={`${containerClasses[variant]} ${className}`}>
      <Image
        src={getIconSrc()}
        alt="Gemium Logo"
        width={dimensions.width}
        height={dimensions.height}
        // priority
        className="object-contain"
      />
    </Link>
  );
};
