'use client';

import * as React from 'react';
import { type GridItem } from './types';

interface GridListProps {
  items: GridItem[];
  className?: string;
}

const GridList: React.FC<GridListProps> = ({ items, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {items.map((item) => (
        <div 
          key={item.id} 
          className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-light-dark"
          onClick={item.onClick}
        >
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-md/5 opacity-80">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GridList;
