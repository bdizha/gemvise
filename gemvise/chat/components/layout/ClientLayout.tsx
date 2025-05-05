'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import Header from './Header';
import Sidebar from './Sidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header 
        onToggleSidebar={handleToggleSidebar} 
        onToggleTheme={handleToggleTheme} 
        theme={theme || 'dark'} 
        isSidebarOpen={isSidebarOpen}
      />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main 
        className={`
          min-h-[calc(100vh-4rem)]
          pt-16 
          transition-all 
          duration-200 
          ${isSidebarOpen ? 'lg:pl-64' : 'pl-0'}
        `}
      >
        <div className="mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ClientLayout;
