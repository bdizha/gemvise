'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Menu, Moon, Search, Sun } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  showLogo: boolean;
}

const Header = ({ onToggleSidebar, showLogo }: HeaderProps): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm">
      <div className="mx-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} className="text-gray-700 dark:text-gray-200" />
          </button>
          <div className={`transition-opacity duration-200 ${showLogo ? 'opacity-100' : 'opacity-0'}`}>
            <a href="/" className="flex items-center gap-2">
              <Image
                src={theme === 'light' ? '/icons/ICON-DARK.png' : '/icons/ICON-WHITE.png'}
                alt="GemVise Icon"
                width={32}
                height={32}
                priority
                className="object-contain"
              />
              <Image
                src={theme === 'light' ? '/logos/LOGO-DARK.png' : '/logos/LOGO-WHITE.png'}
                alt="GemVise Logo"
                width={32}
                height={25}
                priority
                className="object-contain"
              />
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-gray-700 dark:text-gray-200" />
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-gray-700" />
            ) : (
              <Sun size={20} className="text-gray-200" />
            )}
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium shadow-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
