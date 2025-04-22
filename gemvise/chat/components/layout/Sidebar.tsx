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
      <div className="flex h-16 items-center px-4">
        <Logo variant="sidebar" />
      </div>

      <nav className="mt-4 space-y-2 px-2 flex flex-col items-start">
        {[
          { href: '/', label: 'Home', icon: HomeIcon },
          { href: '/about', label: 'About', icon: InformationCircleIcon },
          { href: '/explore', label: 'Explore', icon: SparklesIcon }
        ].map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className="w-full">
            <button
              className={`flex h-[48px] w-full items-center gap-3 rounded-2xl px-4 text-theme-foreground transition-all duration-300 ${
                pathname === href
                  ? 'bg-[#333639]/30 hover:bg-[#333639]/60'
                  : 'bg-theme-surface hover:bg-[#333639]/60 focus:outline-none'
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-theme-surface bg-cover bg-center transition-all duration-300 hover:bg-gradient-pink-purple">
                <Icon className="h-5 w-5 text-theme-foreground" />
              </span>
              <span>{label}</span>
            </button>
          </Link>
        ))}
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;