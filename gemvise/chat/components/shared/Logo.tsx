'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface LogoProps {
  variant?: 'header' | 'sidebar' | 'footer';
  showText?: boolean;
}

export const Logo = ({ variant = 'header', showText = true }: LogoProps): JSX.Element => {
  const { theme } = useTheme();
  
  const containerClasses = {
    header: 'flex items-center gap-2',
    sidebar: 'flex items-center space-x-2 lg:hidden', // Hide on large screens
    footer: 'flex items-center gap-2'
  };

  return (
    <Link href="/" className={containerClasses[variant]}>
      <Image
        src={theme === 'light' ? '/icons/ICON-DARK.png' : '/icons/ICON-WHITE.png'}
        alt="GemVise Icon"
        width={32}
        height={32}
        priority
        className="object-contain"
      />
      {showText && (
        <Image
          src={theme === 'light' ? '/logos/LOGO-DARK.png' : '/logos/LOGO-WHITE.png'}
          alt="GemVise Logo"
          width={32}
          height={25}
          priority
          className="object-contain"
        />
      )}
    </Link>
  );
};
