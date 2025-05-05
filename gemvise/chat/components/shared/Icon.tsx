'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

interface IconProps {
  variant?: 'header' | 'sidebar' | 'footer';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Icon = ({ variant = 'header', className = '', size = 'md' }: IconProps): JSX.Element => {
  const { theme } = useTheme();
  
  const containerClasses = {
    header: 'flex items-center gap-2',
    sidebar: 'flex items-center space-x-2 lg:hidden', // Hide on large screens
    footer: 'flex items-center gap-2'
  };

  return (
    <Link href="/" className={containerClasses[variant]}>
      <Image
        src={theme === 'dark' ? '/Icons/Icon.png' : '/Icons/Grey.png'}
        alt="Gemium Icon"
        width={32}
        height={32}
        priority
        className="object-contain"
      />
    </Link>
  );
};
