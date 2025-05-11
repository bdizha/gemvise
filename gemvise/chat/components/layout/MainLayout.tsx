'use client';

import { type FC, type ReactNode, useState } from 'react';
import { useTheme } from 'next-themes';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <Header 
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
        theme={theme || 'dark'} 
        isSidebarOpen={isSidebarOpen}
        onOpenAuthModal={() => {}} 
      />
      <main className={`min-h-[calc(100vh-4rem)] pt-16 transition-all duration-200 ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}`}>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
