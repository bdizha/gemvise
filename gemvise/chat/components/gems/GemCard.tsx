'use client';

import { type FC } from 'react';
import Link from 'next/link';
import ShapeTower from '@/components/shapes/ShapeTower';
import type { GemCardProps } from '@/types/gems';

const GemCard: FC<GemCardProps> = ({ gem, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };

  return (
    <div 
      className="group relative h-[280px] rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
      onClick={handleClick}
      data-testid="gem-card"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      <div className={`absolute inset-0 ${gem.gradient} opacity-90`} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
        <ShapeTower className="w-full h-full text-white/90" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg text-white line-clamp-1">
            {gem.name}
          </h3>
          <p className="text-sm text-white/90 line-clamp-2">
            {gem.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GemCard;
