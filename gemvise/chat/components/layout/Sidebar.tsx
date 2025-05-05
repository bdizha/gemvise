'use client';

import { type FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/shared/Logo';
import { WorldNavigation } from '@/components/navigation/WorldNavigation';
import { PlusIcon, InformationCircleIcon, SparklesIcon, GlobeAltIcon, UserCircleIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const createMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setCreateMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const createOptions = [
    { href: '/create/gem', label: 'Create Gem', icon: SparklesIcon },
    { href: '/create/character', label: 'Create Character', icon: UserCircleIcon },
    { href: '/create/world', label: 'Create World', icon: GlobeAltIcon },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-20 bg-theme-scrim transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-30 h-screen w-64 transform bg-theme-surface bg-cover bg-center transition-all duration-300 backdrop-blur-md ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo container - Changed to justify-start */}
        <div className="flex h-16 shrink-0 items-center justify-start px-4">
          {/* Use FULL LOGO in sidebar */}
          <Logo variant="header" isSidebarOpen={isOpen} />
        </div>

        <nav className="mt-4 space-y-6 px-2 flex flex-col items-start">
          <div className="space-y-1 w-full">
            {/* Create Button with Dropdown */}
            <div className="relative w-full" ref={createMenuRef}>
              <button
                onClick={() => setCreateMenuOpen(!createMenuOpen)}
                className="flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-theme-foreground transition-all duration-300 bg-[#333639]/30 hover:bg-[#333639]/60"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <PlusIcon className="h-5 w-5 text-white" />
                </span>
                <span className="flex-1 text-left text-white">Create</span>
              </button>

              {/* Create Menu Dropdown */}
              {createMenuOpen && (
                <div className="absolute top-full left-0 w-full mt-2 p-4 bg-[#333639]/30 hover:bg-[#333639]/60 rounded-xl shadow-lg ring-1 ring-theme-foreground/10 backdrop-blur-md z-50">
                  {createOptions.map(({ href, label, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex h-[40px] w-full items-center gap-3 px-4 text-theme-foreground hover:bg-[#333639]/30"
                      onClick={() => setCreateMenuOpen(false)}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1 text-left">{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Navigation Links */}
            {[
              { href: '/explore', label: 'Explore', icon: SparklesIcon }
            ].map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="w-full">
                <button
                  className={`flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-theme-foreground transition-all duration-300 ${
                    pathname === href
                      ? 'bg-[#333639]/30 hover:bg-[#333639]/60'
                      : 'hover:bg-[#333639]/60 focus:outline-none'
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-5 w-5 text-theme-foreground" />
                  </span>
                  <span className="flex-1 text-left">{label}</span>
                </button>
              </Link>
            ))}
          </div>
          
          <WorldNavigation />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
