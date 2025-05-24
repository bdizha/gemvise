'use client';

import React from 'react';
import Card from './Card';
import type { GridItem } from '@/components/layout/Grid/types';

interface AdventureCardProps {
  item: GridItem;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ 
  item, 
  className,
  imageClassName,
  contentClassName
}) => {
  return (
    <Card
      variant="adventure"
      size="none"
      hover="scale"
      layout="flex-col"
      item={item}
      href={item.href}
      onClick={item.onClick}
      className={className}
      contentClassName={contentClassName}
      imageClassName={imageClassName}
      imageOptions={{
        aspectRatio: 'aspect-[16/9]',
        position: 'top',
        showImage: true
      }}
      metadata={{
        showTag: true,
        showTitle: true,
        showSubtitle: true,
        showDescription: true,
        showButton: true,
        showStats: true,
        showCharacters: false
      }}
    />
  );
};

export default AdventureCard;
