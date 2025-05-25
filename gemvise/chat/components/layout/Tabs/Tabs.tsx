'use client';

import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '../../../utils/utils';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab?: string;
  onChange?: (tabId: string) => void;
  className?: string;
  showScrollButtons?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  activeTab, 
  onChange,
  className,
  showScrollButtons = true
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);

  // Check if scrolling is needed
  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
  };

  // Handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 200; // Adjust scroll amount as needed
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    onChange?.(tabId);
  };

  // Check scroll buttons on mount and when tabs change
  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [tabs]);

  return (
    <div className={cn('relative flex w-full', className)}>
      {showScrollButtons && showLeftScroll && (
        <button 
          onClick={() => handleScroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer inline-flex items-center justify-center rounded-full bg-white/10 text-white/48 hover:bg-white/20 transition-colors p-2"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
      )}
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-2 py-2 px-2 no-scrollbar scroll-smooth w-full"
        onScroll={checkScrollButtons}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "flex items-center justify-center whitespace-nowrap px-6 py-2 rounded-full transition-all duration-300 min-w-[7rem]",
              tab.id === activeTab 
                ? 'bg-white/20 text-white/48 hover:bg-white/30' 
                : 'bg-white/10 text-white/48 hover:bg-white/20'
            )}
          >
            {tab.icon && <span className="mr-2">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
      
      {showScrollButtons && showRightScroll && (
        <button 
          onClick={() => handleScroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer inline-flex items-center justify-center rounded-full bg-white/10 text-white/48 hover:bg-white/20 transition-colors p-2"
          aria-label="Scroll right"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Tabs;
