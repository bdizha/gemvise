'use client';

import * as React from 'react';
import Button from './Button';

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
    <div className={`flex gap-2 ${className}`}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          variant={tab.id === activeTab ? 'tab-active' : 'tab'}
          size="default"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
