'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Menu, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  showLogo: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showLogo }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex gap-4 md:gap-6">
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>
          {true && (
            <a href="/" className="flex items-center space-x-2">
              <Image
                src={theme === 'light' ? '/icons/LOGO-DARK.png' : '/icons/LOGO-WHITE.png'}
                alt="GemVise"
                width={32}
                height={32}
                priority
              />
            </a>
          )}
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
