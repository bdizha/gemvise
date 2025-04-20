'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  theme: string;
}

const Header: FC<HeaderProps> = ({ onToggleSidebar, onToggleTheme, theme }) => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between bg-theme-surface/50 bg-cover bg-center px-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="flex h-[48px] w-[48px] items-center justify-center rounded-[36px] hover:bg-gradient-purple-pink hover:bg-cover hover:bg-center focus:outline-none transition-colors duration-300"
        >
          <Bars3Icon className="h-6 w-6 text-theme-foreground" />
        </button>
        <Logo variant="header" />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onToggleTheme}
          className="flex h-[48px] w-[48px] items-center justify-center rounded-[36px] bg-theme-surface hover:bg-gradient-pink-purple hover:bg-cover hover:bg-center focus:outline-none transition-all duration-300"
        >
          {theme === 'dark' ? (
            <SunIcon className="h-6 w-6 text-theme-foreground" />
          ) : (
            <MoonIcon className="h-6 w-6 text-theme-foreground" />
          )}
        </button>

        <Link
          href="/sign-in"
          className="flex h-[48px] items-center justify-center rounded-[36px] bg-gradient-purple-pink-purple bg-cover bg-center px-6 text-white hover:bg-gradient-pink-purple-pink focus:outline-none transition-all duration-300 font-medium"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
