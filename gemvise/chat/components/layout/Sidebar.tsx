'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

// Import gems data
const gems = [
  { name: 'FDR', href: '/chat/fdr', icon: '🎩' },
  { name: 'Churchill', href: '/chat/churchill', icon: '🎭' },
  { name: 'Einstein', href: '/chat/einstein', icon: '🧠' },
  { name: 'Turing', href: '/chat/turing', icon: '💻' },
  { name: 'JFK', href: '/chat/jfk', icon: '🌟' },
  { name: 'Sinatra', href: '/chat/sinatra', icon: '🎵' },
];

const categories = [
  { name: 'New Chat', href: '/chat/new', icon: '💬' },
  { name: 'Previous Chats', href: '/chat/history', icon: '📝' },
];

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, className }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <aside 
      className={clsx(
        'fixed left-0 top-0 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-200 overflow-hidden',
        className
      )}
      data-testid="sidebar"
    >
      <div className="p-4">
        <div 
          className={`transition-opacity duration-200 ${!isOpen ? 'opacity-0' : 'opacity-100'}`}
          data-testid="sidebar-logo"
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="GemVise" width={32} height={32} />
            <span className="text-xl font-bold">GemVise</span>
          </Link>
        </div>

        <nav className="mt-8 space-y-1">
          {gems.map((gem) => (
            <Link
              key={gem.href}
              href={gem.href}
              className={clsx(
                'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200',
                pathname === gem.href
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
            >
              <span>{gem.icon}</span>
              <span>{gem.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <nav className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className={clsx(
                  'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200',
                  pathname === category.href
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;