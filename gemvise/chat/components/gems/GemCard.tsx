'use client';

import { type FC } from 'react';
import ShapeTower, { type ShapeVariant } from '@/components/shapes/ShapeTower';
import type { GemCardProps } from '@/types/gems';

const GemCard: FC<GemCardProps> = ({ gem, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };

  // Map gem categories to shape variants
  const getShapeVariant = (category: string): ShapeVariant => {
    const variantMap: Record<string, ShapeVariant> = {
      'Finance': 'dark-light-dark',
      'Technology': 'dark-light',
      'Leadership': 'light-dark',
      'Lifestyle': 'pink-purple-pink',
      'Health': 'pink-purple',
      'Business': 'purple-pink-purple',
      'Cooking': 'purple-pink'
    };
    return variantMap[category] || 'dark-light-dark';
  };

  return (
    <div 
      className="relative w-full h-[320px] rounded-[32px] overflow-hidden cursor-pointer transform transition-all duration-300 group hover:scale-[1.02] shadow-lg border border-border/10" 
      onClick={handleClick}
      data-testid="gem-card"
    >
      <div className="absolute inset-0 overflow-hidden">
        <ShapeTower 
          variant={getShapeVariant(gem.category)} 
          className="w-full h-full" 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      <div className="absolute inset-x-0 bottom-0 p-6 space-y-3 backdrop-blur-sm bg-black/10">
        <div className="space-y-1">
          <h3 className="font-semibold text-xl text-white line-clamp-1">
            {gem.name}
          </h3>
          <p className="text-base text-white/90 line-clamp-2 leading-relaxed">
            {gem.description}
          </p>
        </div>
        {gem.expertise && (
          <div className="flex flex-wrap gap-2 mt-2">
            {gem.expertise.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GemCard;
