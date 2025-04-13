'use client';

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onToggleSidebar={handleToggleSidebar} showLogo={!isSidebarOpen} sidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} />
      <main 
        className={`
          min-h-[calc(100vh-4rem)]
          pt-16 
          transition-all 
          duration-200 
          ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-0'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ClientLayout;
