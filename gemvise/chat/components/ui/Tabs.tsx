'use client';

import * as React from 'react';

interface Tab {
  id: string;
  label: string;
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
            px-4 py-2 rounded-full text-sm font-medium 
            transition-colors duration-200
            ${activeTab === tab.id 
              ? 'bg-surface-elevation-2 text-theme-foreground' 
              : 'bg-surface-elevation-1 hover:bg-surface-elevation-2 text-theme-foreground/80'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
