'use client';

import React from 'react';
import Card from './Card';
import type { GridItem } from '@/components/layout/Grid/types';

interface CharacterCardProps {
  item: GridItem;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ 
  item, 
  className,
  imageClassName,
  contentClassName
}) => {
  return (
    <Card
      variant="character"
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
        aspectRatio: 'aspect-[3/4]',
        position: 'top',
        showImage: true
      }}
      metadata={{
        showTag: true,
        showTitle: true,
        showSubtitle: true,
        showDescription: true,
        showButton: false,
        showStats: true,
        showCharacters: false
      }}
    />
  );
};

export default CharacterCard;
