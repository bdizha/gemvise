'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Menu, Moon, Sun, Search, Settings } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  onToggleSidebar: () => void;
  showLogo: boolean;
  sidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, showLogo, sidebarOpen }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#3f4b58] bg-[#232f3e]">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          className="mr-2 px-2 text-[#d5d9d9] hover:text-[#ff9900]"
          onClick={onToggleSidebar}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        {showLogo && (
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="GemVise"
              width={32}
              height={32}
              className="mr-2"
            />
            <span className="text-lg font-bold text-[#ff9900]">GemVise</span>
          </div>
        )}

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="ghost"
              className="w-full justify-start text-[#d5d9d9] hover:text-[#ff9900]"
            >
              <Search className="mr-2 h-4 w-4" />
              Search...
            </Button>
          </div>
          <nav className="flex items-center">
            <Button
              variant="ghost"
              className="px-2 text-[#d5d9d9] hover:text-[#ff9900]"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              className="px-2 text-[#d5d9d9] hover:text-[#ff9900]"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
