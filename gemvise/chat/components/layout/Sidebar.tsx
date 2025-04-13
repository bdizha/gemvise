'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { HomeIcon, InformationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: FC<SidebarProps> = ({ isOpen }) => {
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
          className="flex h-[48px] items-center rounded-2xl px-4 text-white hover:bg-gradient-pink-purple hover:bg-cover hover:bg-center"
        >
          <HomeIcon className="mr-3 h-6 w-6" />
          <span>Home</span>
        </Link>

        <Link
          href="/about"
          className="flex h-[48px] items-center rounded-2xl px-4 text-white hover:bg-gradient-purple-pink hover:bg-cover hover:bg-center"
        >
          <InformationCircleIcon className="mr-3 h-6 w-6" />
          <span>About</span>
        </Link>

        <Link
          href="/gems"
          className="flex h-[48px] items-center rounded-2xl px-4 text-white hover:bg-gradient-pink-purple-pink hover:bg-cover hover:bg-center"
        >
          <SparklesIcon className="mr-3 h-6 w-6" />
          <span>Gems</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;