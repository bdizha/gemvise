import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900">
      <Sidebar 
        isOpen={isSidebarOpen} 
        className={`transition-all duration-200 ${isSidebarOpen ? 'w-64' : 'w-0'}`}
        data-testid="sidebar"
      />
      <div 
        className={`flex flex-col flex-1 transition-all duration-200 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}
        data-testid="main-container"
      >
        <Header onToggleSidebar={toggleSidebar} showLogo={!isSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
        <footer className="p-4 border-t border-gray-200 dark:border-gray-800" data-testid="footer">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} GemVise. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
