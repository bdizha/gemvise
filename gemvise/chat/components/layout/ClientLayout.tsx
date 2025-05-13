'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation'; 
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname(); 

  const pathsToHideSidebar = ['/about'];
  const shouldRenderSidebar = !pathsToHideSidebar.includes(pathname);

  const effectiveSidebarOpen = shouldRenderSidebar && isSidebarOpen;

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      {shouldRenderSidebar && (
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      )}
      <Header 
        onToggleTheme={handleToggleTheme} 
        theme={theme || 'dark'} 
        isSidebarOpen={effectiveSidebarOpen} 
        onOpenAuthModal={() => {}}
      />
      <div 
        className={`
          flex
          flex-col
          gap-16
          p-16
          min-h-[calc(100vh-4rem)]
          overflow-y-auto
          transition-all 
          duration-200
          ${effectiveSidebarOpen ? 'pl-80' : 'pl-16'} 
        `}
      >
        <div className="mx-auto w-full">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
