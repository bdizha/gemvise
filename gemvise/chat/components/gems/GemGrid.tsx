'use client';

import { motion } from 'framer-motion';
import GemCard from './GemCard';
import type { Gem } from '@/types/gems';

type SliderVariant = 'pyramid' | 'concave';
type TableLayout = '2-rows-2-3' | '1-row-2-cols';

type GemGridProps = {
  gems: Gem[];
  onGemClick?: (gem: Gem) => void;
  className?: string;
} & (
  | { type: 'slider'; variant: SliderVariant; visibleCount: number; currentIndex: number }
  | { type: 'table'; layout: TableLayout }
);

const getSliderStyles = (index: number, currentIndex: number, total: number, variant: SliderVariant) => {
  const offset = index - currentIndex;
  const isCenter = offset === 0;
  
  if (variant === 'pyramid') {
    return {
      scale: isCenter ? 1 : 0.8 - Math.abs(offset) * 0.1,
      y: Math.abs(offset) * 40,
      zIndex: total - Math.abs(offset),
      opacity: 1 - Math.abs(offset) * 0.2
    };
  }
  
  // Concave layout
  return {
    scale: isCenter ? 1 : 0.9,
    x: offset * 120,
    rotateY: offset * -25,
    zIndex: total - Math.abs(offset),
    opacity: 1 - Math.abs(offset) * 0.2
  };
};

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
    const { variant, visibleCount, currentIndex } = props as { variant: SliderVariant; visibleCount: number; currentIndex: number };
    const displayGems = gems.slice(
      Math.max(0, currentIndex - Math.floor(visibleCount / 2)),
      Math.min(gems.length, currentIndex + Math.ceil(visibleCount / 2))
    );

    return (
      <div className={`relative h-[400px] flex items-center justify-center ${className}`}>
        <div className="relative w-full h-full">
          {displayGems.map((gem, index) => {
            const styles = getSliderStyles(index, Math.floor(visibleCount / 2), visibleCount, variant);
            
            return (
              <motion.div
                key={gem.id}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80"
                initial={false}
                animate={styles}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                onClick={() => onGemClick?.(gem)}
              >
                <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Table layout
  const { layout } = props as { layout: TableLayout };
  return (
    <div className={`${getTableLayout(layout)} ${className}`}>
      {gems.map((gem) => (
        <motion.div
          key={gem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
        </motion.div>
      ))}
    </div>
  );
}
