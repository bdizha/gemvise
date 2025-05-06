'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import { Logo } from '@/components/shared/Logo';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleTheme: () => void;
  theme: string;
  isSidebarOpen: boolean;
}

const Header: FC<HeaderProps> = ({ onToggleSidebar, onToggleTheme, theme, isSidebarOpen }) => {
  return (
    <header
      className={`
        fixed right-0 top-0 z-50 flex h-16 w-full items-center justify-between 
        border-b border-theme-border bg-theme-surface/30 px-4 
        backdrop-blur-md transition-all duration-200 
        ${isSidebarOpen ? 'lg:left-64' : 'left-0'}
      `}
    >
      {/* Left side: Conditional Logo + Toggle Button */}
      <div className="flex items-center gap-4">
        {/* Show HEADER LOGO only when sidebar is closed */}
        { !isSidebarOpen && <Logo variant="header" isSidebarOpen={isSidebarOpen} className="text-theme-foreground" /> }

        {/* Sidebar Toggle Button (Mobile) - Always visible */} 
        <button
          onClick={onToggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        >
          <span className="sr-only">Toggle sidebar</span>
          {isSidebarOpen ? (
            <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {/* Sidebar Toggle Button (Desktop) - Always visible */}
        <button
          onClick={onToggleSidebar}
          className="hidden lg:flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Toggle sidebar</span>
          {isSidebarOpen ? (
            <ChevronDoubleLeftIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ChevronDoubleRightIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Right-aligned items (e.g., Theme Toggle) */}
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
