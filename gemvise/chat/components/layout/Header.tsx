'use client';

import { type FC } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onToggleTheme: () => void;
  theme: string;
  isSidebarOpen: boolean;
  onOpenAuthModal: () => void;
}

const Header: FC<HeaderProps> = ({ onToggleTheme, theme, isSidebarOpen, onOpenAuthModal }) => {
  return (
    <header
      className={`
        fixed right-0 top-0 z-50 flex h-16 w-full items-center justify-between 
        bg-theme-surface/30 
        backdrop-blur-md transition-all duration-200 
        left-0 ${isSidebarOpen ? 'pl-64' : 'pl-20'} pr-4
      `}
    >
      {/* Left side: Conditional Logo - REMOVED */}
      <div className="flex items-center gap-4">
        {/* { !isSidebarOpen && <Logo variant="header" isSidebarOpen={isSidebarOpen} className="text-theme-foreground" /> } */}
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

        <button
          onClick={onOpenAuthModal}
          className="flex h-[48px] w-[48px] items-center justify-center rounded-[36px] bg-theme-surface hover:bg-foreground/10 focus:outline-none transition-all duration-300"
          aria-label="Open sign in modal"
        >
          <UserCircleIcon className="h-6 w-6 text-theme-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
