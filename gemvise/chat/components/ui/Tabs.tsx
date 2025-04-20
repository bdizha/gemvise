'use client';

import * as React from 'react';

interface Tab {
  id: string;
  label: string;
  gradient?: {
    default: string;
    alternate: string;
  };
}

interface TabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  activeTab, 
  onChange,
  className = ''
}) => {
  const handleClick = (tabId: string) => {
    onChange?.(tabId);
  };

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          className={`
            relative px-4 py-2 rounded-full text-sm font-medium 
            transition-all duration-200 overflow-hidden
            border border-white/10 backdrop-blur-sm
            ${activeTab === tab.id ? 'text-white shadow-lg' : 'text-white/80 hover:text-white'}
          `}
        >
          <div className={`
            absolute inset-0 transition-opacity duration-200
            ${tab.gradient?.default || 'bg-gradient-light-dark'}
            ${activeTab === tab.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'}
          `} />
          <div className={`
            absolute inset-0 transition-opacity duration-200
            ${tab.gradient?.alternate || 'bg-gradient-dark-light'}
            ${activeTab === tab.id ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}
          `} />
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
