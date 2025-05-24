'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../utils/utils';
import { type GridItem } from './types';
import { Card } from '../Card';

export interface GridProps {
  items: GridItem[];
  className?: string;
  columns?: number | Record<string, number>;
  variant?: 'default' | 'compact' | 'masonry';
  cardVariant?: 'default' | 'world' | 'character' | 'adventure' | 'story' | 'scene' | 'collection' | 'media' | 'transparent';
  showAnimation?: boolean;
  gap?: 'none' | 'sm' | 'md' | 'lg';
}

const Grid: React.FC<GridProps> = ({
  items,
  className = '',
  columns,
  variant = 'default',
  cardVariant = 'default',
  showAnimation = true,
  gap = 'md'
}) => {
  // Determine responsive column classes
  let responsiveColumnClasses = '';

  if (typeof columns === 'object') {
    // Handle responsive column object like { sm: 2, md: 3, lg: 4 }
    const breakpoints = Object.entries(columns)
      .map(([breakpoint, cols]) => {
        if (breakpoint === 'xs') return `grid-cols-${cols}`;
        return `${breakpoint}:grid-cols-${cols}`;
      })
      .join(' ');
    
    responsiveColumnClasses = breakpoints || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  } else if (typeof columns === 'number') {
    if (columns === 1) {
      responsiveColumnClasses = 'grid-cols-1'; // Explicitly 1 column for all sizes
    } else if (columns >= 2 && columns <= 12) {
      // Stack to 1 column on mobile, then apply specified columns on md and up
      responsiveColumnClasses = `grid-cols-1 md:grid-cols-${columns}`;
    } else {
      // Fallback for invalid column numbers
      responsiveColumnClasses = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  } else {
    // Default responsive behavior if 'columns' prop is not provided
    responsiveColumnClasses = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  }

  // Determine gap classes
  const gapClasses = {
    'none': 'gap-0',
    'sm': 'gap-2 md:gap-3',
    'md': 'gap-4 md:gap-6',
    'lg': 'gap-6 md:gap-8'
  };

  // Render grid items
  const renderGridItems = () => {
    return items.map((item) => {
      // Define animation props
      const motionProps = showAnimation ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, ease: 'easeOut' },
        whileHover: { scale: 1.03, transition: { duration: 0.2 } },
        whileTap: { scale: 0.98 }
      } : {};

      // Determine which card variant to use based on the item or prop
      const effectiveCardVariant = (item.cardVariant || cardVariant) as 'default' | 'world' | 'character' | 'adventure' | 'story' | 'scene' | 'collection' | 'media' | 'transparent';
      
      // Create the card element
      const card = (
        <Card
          variant={effectiveCardVariant}
          item={item}
          href={item.href}
          onClick={item.onClick}
          hover="scale"
          layout="flex-col"
          size="none"
          className="h-full"
          imageOptions={{
            aspectRatio: effectiveCardVariant === 'character' ? 'aspect-[3/4]' : 'aspect-[16/9]',
            position: 'top',
            showImage: true
          }}
          metadata={{
            showTag: true,
            showTitle: true,
            showSubtitle: true,
            showDescription: true,
            showButton: Boolean(item.buttonText),
            showStats: true,
            showCharacters: effectiveCardVariant === 'scene'
          }}
        />
      );

      // Wrap with motion if animation is enabled
      if (showAnimation) {
        if (item.href) {
          return (
            <motion.div key={item.id} {...motionProps} className="h-full">
              {card}
            </motion.div>
          );
        }
        
        return (
          <motion.div key={item.id} {...motionProps} className="h-full">
            {card}
          </motion.div>
        );
      }
      
      // Return without motion wrapper if animation is disabled
      return (
        <div key={item.id} className="h-full">
          {card}
        </div>
      );
    });
  };

  // Apply masonry layout if specified
  if (variant === 'masonry') {
    return (
      <div className={cn(
        'columns-1 sm:columns-2 lg:columns-3 space-y-4 md:space-y-6',
        className
      )}>
        {renderGridItems()}
      </div>
    );
  }

  // Default grid layout
  return (
    <div className={cn(
      'grid', 
      responsiveColumnClasses, 
      gapClasses[gap],
      variant === 'compact' && 'grid-flow-dense',
      className
    )}>
      {renderGridItems()}
    </div>
  );
};

export default Grid;
