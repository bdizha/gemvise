'use client';

import React from 'react';
import Card from './Card';
import type { GridItem } from '@/components/layout/Grid/types';

interface SceneCardProps {
  item: GridItem;
  className?: string;
  imageClassName?: string;
  contentClassName?: string;
}

const SceneCard: React.FC<SceneCardProps> = ({ 
  item, 
  className,
  imageClassName,
  contentClassName
}) => {
  return (
    <Card
      variant="scene"
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
        showButton: false,
        showStats: false,
        showCharacters: true
      }}
    />
  );
};

export default SceneCard;
