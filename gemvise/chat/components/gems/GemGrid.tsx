'use client';

import { motion } from 'framer-motion';
import { type Gem } from '@/data/gems';
import GemCard from './GemCard';

interface GemGridProps {
  gems: Gem[];
  variant?: 'grid' | 'scroll' | 'featured';
  maxItems?: number;
  repeatInScroll?: boolean;
  className?: string;
}

export default function GemGrid({
  gems,
  variant = 'grid',
  maxItems,
  repeatInScroll = false,
  className = ''
}: GemGridProps) {
  const displayGems = variant === 'scroll' && repeatInScroll
    ? [...gems, ...gems].slice(0, maxItems || 16)
    : maxItems ? gems.slice(0, maxItems) : gems;

  if (variant === 'scroll') {
    return (
      <div className={`flex gap-8 overflow-x-auto hide-scrollbar pb-4 ${className}`}>
        {displayGems.map((gem, index) => (
          <motion.div
            key={`${gem.id}-${index}`}
            className="w-72 shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <GemCard {...gem} />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {displayGems.map((gem, index) => (
        <motion.div
          key={`${gem.id}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <GemCard {...gem} />
        </motion.div>
      ))}
    </div>
  );
}
