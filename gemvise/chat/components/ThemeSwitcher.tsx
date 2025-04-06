'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Add event listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const isDark = 
      newTheme === 'dark' || 
      (newTheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }

    localStorage.setItem('theme', newTheme);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-10 rounded-full hidden sm:flex"
        type="button"
        aria-label="Toggle theme"
      >
        <Image 
          src={theme === 'dark' ? '/moon.svg' : theme === 'light' ? '/sun.svg' : '/system.svg'} 
          alt="Theme" 
          width={20} 
          height={20} 
          className="stroke-2"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-50 rounded-2xl bg-popover border border-popover-border text-primary backdrop-blur-md p-1 min-w-36 space-y-0.5">
          <div className="w-full px-1 pt-1 pb-1">
            <div className="flex items-stretch w-full gap-2 justify-stretch">
              <button
                onClick={() => handleThemeChange('light')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-full rounded-lg ${theme === 'light' ? 'bg-button-ghost-hover' : ''}`}
                type="button"
              >
                <Image src="/sun.svg" alt="Light" width={16} height={16} />
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-full rounded-lg ${theme === 'dark' ? 'bg-button-ghost-hover' : ''}`}
                type="button"
              >
                <Image src="/moon.svg" alt="Dark" width={16} height={16} />
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-full rounded-lg ${theme === 'system' ? 'bg-button-ghost-hover' : ''}`}
                type="button"
              >
                <Image src="/system.svg" alt="System" width={16} height={16} />
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="relative flex select-none items-center cursor-pointer px-3 py-2 rounded-xl text-sm outline-none focus:bg-card-hover w-full"
          >
            Language
          </button>
        </div>
      )}
    </div>
  );
}
