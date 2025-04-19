'use client';

import { motion } from 'framer-motion';
import GemCard from './GemCard';
import type { Gem } from '@/types/gems';


type TableLayout = '2-rows-2-3' | '1-row-2-cols';

type GemGridProps = {
  gems: Gem[];
  onGemClick?: (gem: Gem) => void;
  className?: string;
} & (
  | { type: 'slider'; visibleCount: number; currentIndex: number }
  | { type: 'table'; layout: TableLayout }
);



const getTableLayout = (layout: TableLayout) => {
  switch (layout) {
    case '2-rows-2-3':
      return 'grid grid-rows-2 gap-6 h-full' +
        ' [&>*:nth-child(-n+2)]:col-span-1' +
        ' [&>*:nth-child(n+3)]:col-span-1' +
        ' grid-cols-2 first:grid-cols-3';
    case '1-row-2-cols':
      return 'grid grid-cols-2 gap-6';
    default:
      return '';
  }
};

export default function GemGrid({
  gems,
  type,
  className = '',
  onGemClick,
  ...props
}: GemGridProps) {
  if (type === 'slider') {
    const { visibleCount, currentIndex } = props as { visibleCount: number; currentIndex: number };
    // Calculate visible range and indices
    const totalVisible = Math.min(visibleCount, gems.length);
    const halfVisible = Math.floor(totalVisible / 2);
    const startIndex = Math.max(0, currentIndex - halfVisible);
    const endIndex = Math.min(gems.length, startIndex + totalVisible);
    const displayGems = gems.slice(startIndex, endIndex);

    // Container width calculation
    const containerWidth = 320 * 3; // Show 3 cards at a time

    return (
      <div className={`relative h-[400px] w-full ${className}`}>
        <div className="relative w-full h-full max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex gap-6 transition-transform duration-300" 
               style={{ 
                 transform: `translateX(calc(-${currentIndex * 340}px))`,
                 width: `${gems.length * 340}px`
               }}>
            {gems.map((gem) => (
              <motion.div
                key={gem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex-shrink-0 w-[320px]"
              >
                <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Table layout
  const { layout } = props as { layout: TableLayout };
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 grid gap-6 ${getTableLayout(layout)} ${className}`}>
      {gems.map((gem) => (
        <motion.div
          key={gem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-full"
        >
          <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
        </motion.div>
      ))}
    </div>
  );
}
