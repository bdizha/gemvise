'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { HomeIcon, InformationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-gradient-dark-light bg-cover bg-center transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex h-16 items-center px-4">
        <Logo variant="header" />
      </div>

      <nav className="mt-4 space-y-2 px-2">
        <Link
          href="/"
          className={`group flex h-[48px] items-center rounded-2xl px-4 text-white transition-all duration-300 ${
            pathname === '/' ? 'bg-gradient-dark-light bg-cover bg-center' : 'hover:bg-gradient-dark-light hover:bg-cover hover:bg-center'
          }`}
        >
          <span className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cover bg-center p-1.5 transition-all duration-300 ${
            pathname === '/' ? 'bg-gradient-pink-purple-pink group-hover:bg-gradient-purple-pink-purple' : 'bg-gradient-dark-light group-hover:bg-gradient-dark-light-dark'
          }`}>
            <HomeIcon className="h-5 w-5" />
          </span>
          <span>Home</span>
        </Link>

        <Link
          href="/about"
          className={`group flex h-[48px] items-center rounded-2xl px-4 text-white transition-all duration-300 ${
            pathname === '/about' ? 'bg-gradient-dark-light bg-cover bg-center' : 'hover:bg-gradient-dark-light hover:bg-cover hover:bg-center'
          }`}
        >
          <span className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cover bg-center p-1.5 transition-all duration-300 ${
            pathname === '/about' ? 'bg-gradient-pink-purple-pink group-hover:bg-gradient-purple-pink-purple' : 'bg-gradient-dark-light group-hover:bg-gradient-dark-light-dark'
          }`}>
            <InformationCircleIcon className="h-5 w-5" />
          </span>
          <span>About</span>
        </Link>

        <Link
          href="/gems"
          className={`group flex h-[48px] items-center rounded-2xl px-4 text-white transition-all duration-300 ${
            pathname === '/gems' ? 'bg-gradient-dark-light bg-cover bg-center' : 'hover:bg-gradient-dark-light hover:bg-cover hover:bg-center'
          }`}
        >
          <span className={`mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cover bg-center p-1.5 transition-all duration-300 ${
            pathname === '/gems' ? 'bg-gradient-pink-purple-pink group-hover:bg-gradient-purple-pink-purple' : 'bg-gradient-dark-light group-hover:bg-gradient-dark-light-dark'
          }`}>
            <SparklesIcon className="h-5 w-5" />
          </span>
          <span>Gems</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;