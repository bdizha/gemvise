'use client';

import { type FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import { HomeIcon, InformationCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-screen w-64 transform section-gradient-dark-light bg-cover bg-center transition-all duration-300 backdrop-blur-md ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="flex h-16 items-center px-4">
        <Logo variant="sidebar" />
      </div>

      <nav className="mt-4 space-y-2 px-2 flex flex-col items-start">
        <Link href="/" className="w-full">
          <button
            className={`flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-white transition-all duration-300 ${pathname === '/' 
              ? 'section-gradient-light-dark bg-cover bg-center' 
              : 'bg-white/5 hover:section-gradient-light-dark-light hover:bg-cover hover:bg-center focus:outline-none'}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 bg-cover bg-center transition-all duration-300 hover:bg-gradient-pink-purple">
              <HomeIcon className="h-5 w-5" />
            </span>
            <span>Home</span>
          </button>
        </Link>

        <Link href="/about" className="w-full">
          <button
            className={`flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-white transition-all duration-300 ${pathname === '/about' 
              ? 'section-gradient-light-dark bg-cover bg-center' 
              : 'bg-white/5 hover:section-gradient-light-dark-light hover:bg-cover hover:bg-center focus:outline-none'}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 bg-cover bg-center transition-all duration-300 hover:bg-gradient-pink-purple">
              <InformationCircleIcon className="h-5 w-5" />
            </span>
            <span>About</span>
          </button>
        </Link>

        <Link href="/gems" className="w-full">
          <button
            className={`flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-white transition-all duration-300 ${pathname === '/gems' 
              ? 'section-gradient-light-dark bg-cover bg-center' 
              : 'bg-white/5 hover:section-gradient-light-dark-light hover:bg-cover hover:bg-center focus:outline-none'}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 bg-cover bg-center transition-all duration-300 hover:bg-gradient-pink-purple">
              <SparklesIcon className="h-5 w-5" />
            </span>
            <span>Gems</span>
          </button>
        </Link>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;