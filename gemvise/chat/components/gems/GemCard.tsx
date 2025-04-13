'use client';

import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const getGradientPath = (variant: ShapeVariant): string => {
    const gradientMap: Record<ShapeVariant, string> = {
      'dark-light-dark': '/gradients/GV-Gradient-06.png',
      'dark-light': '/gradients/GV-Gradient-07.png',
      'light-dark': '/gradients/GV-Gradient-08.png',
      'pink-purple-pink': '/gradients/GV-Gradient-09.png',
      'pink-purple': '/gradients/GV-Gradient-10.png',
      'purple-pink-purple': '/gradients/GV-Gradient-11.png',
      'purple-pink': '/gradients/GV-Gradient-12.png'
    };
    return gradientMap[variant] || '/gradients/GV-Gradient-06.png';
  };

  return (
    <div className="relative w-full p-[15px] group">
      <div className="absolute inset-0 rounded-[40px] overflow-hidden">
        <Image
          src={getGradientPath(getShapeVariant(gem.category))}
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div 
        className="relative h-[280px] rounded-[32px] shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 group-hover:scale-[1.02]"
        onClick={handleClick}
        data-testid="gem-card"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        <div className={`absolute inset-0 opacity-90`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
          <ShapeTower 
            variant={getShapeVariant(gem.category)} 
            className="w-full h-full"
          />
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
    </div>
  );
};

export default GemCard;
