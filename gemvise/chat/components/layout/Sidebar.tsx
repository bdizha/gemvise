'use client';

import { type FC } from 'react';
import clsx from 'clsx';
import { Home, Settings, Sparkles } from 'lucide-react';
import { Logo } from '@/components/shared/Logo';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface SidebarProps {
  isOpen: boolean;
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, className }) => {
  const router = useRouter();

  return (
    <aside
      className={clsx(
        'fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#d5d9d9] dark:border-[#3f4b58] bg-white dark:bg-[#232f3e] transition-transform duration-200',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}
      data-testid="sidebar"
    >
      <div className="flex h-16 items-center justify-start border-b border-[#d5d9d9] dark:border-[#3f4b58] px-6">
        <Logo variant="header" />
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => router.push('/')}
          className="h-[60px] justify-start items-start px-2.5 py-2 gap-3 rounded-lg hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f]"
        >
          <span className="flex w-full items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center bg-gradient-to-r from-[#ff9900] to-[#ffac31] text-white rounded-lg">
              <Home className="h-6 w-6" />
            </span>
            <span className="flex flex-1 flex-col items-start">
              <span className="h-6 w-full text-start text-base font-medium text-[#0f1111] dark:text-white">Home</span>
              <span className="w-full text-start text-[#5f6b7a] text-xs">Your personal dashboard</span>
            </span>
          </span>
        </Button>

        <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => router.push('/explore')}
          className="h-[60px] justify-start items-start px-2.5 py-2 gap-3 rounded-lg hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f]"
        >
          <span className="flex w-full items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center bg-gradient-to-r from-[#ff9900] to-[#ffac31] text-white rounded-lg">
              <Sparkles className="h-6 w-6" />
            </span>
            <span className="flex flex-1 flex-col items-start">
              <span className="h-6 w-full text-start text-base font-medium text-[#0f1111] dark:text-white">Explore</span>
              <span className="w-full text-start text-[#5f6b7a] text-xs">Discover new gems</span>
            </span>
          </span>
        </Button>

        <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => router.push('/settings')}
          className="h-[60px] justify-start items-start px-2.5 py-2 gap-3 rounded-lg hover:bg-[#f7fafa] dark:hover:bg-[#2f3f4f]"
        >
          <span className="flex w-full items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center bg-gradient-to-r from-[#ff9900] to-[#ffac31] text-white rounded-lg">
              <Settings className="h-6 w-6" />
            </span>
            <span className="flex flex-1 flex-col items-start">
              <span className="h-6 w-full text-start text-base font-medium text-[#0f1111] dark:text-white">Settings</span>
              <span className="w-full text-start text-[#5f6b7a] text-xs">Customize your experience</span>
            </span>
          </span>
        </Button>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#d5d9d9] dark:border-[#3f4b58] bg-[#f7fafa] dark:bg-[#2f3f4f]">
        <Button 
          variant="primary" 
          size="lg" 
          onClick={() => router.push('/create')}
          className="w-full bg-gradient-to-r from-[#ff9900] to-[#ffac31] text-[#0f1111] hover:from-[#ffac31] hover:to-[#ffbd62]"
        >
          Create a Gem
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;