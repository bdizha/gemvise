'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { type GridItem } from './types';

interface GridListProps {
  items: GridItem[];
  className?: string;
}

const GridList: React.FC<GridListProps> = ({ items, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {items.map((item) => (
        <motion.button
          key={item.id} 
          onClick={item.onClick}
          className="group relative isolate flex flex-col justify-end overflow-hidden rounded-[4rem] bg-gray-900/50 dark:bg-gray-800/50 px-8 pb-8 pt-32 backdrop-blur-sm hover:bg-gray-800/70 dark:hover:bg-gray-700/70 cursor-pointer text-left"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50" />
          <div className="relative z-10 space-y-2">
            <h3 className="text-xl font-semibold text-white dark:text-white">{item.title}</h3>
            <p className="text-white/80 dark:text-white/80 line-clamp-2">{item.description}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default GridList;
