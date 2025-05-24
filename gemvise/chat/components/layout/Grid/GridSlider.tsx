'use client';

import React from 'react';
import { Slider } from '../Slider';
import { type GridItem } from './types';

interface GridSliderProps {
  title?: string;
  cards: Array<{
    title: string;
    description: string;
    imageSrc?: string;
    status?: string;
    href?: string;
    buttonText?: string;
    onClick?: () => void;
  }>;
  viewAllHref?: string;
  viewAllLabel?: string;
}

/**
 * GridSlider is a wrapper around the Slider component that converts
 * the legacy card format to the new GridItem format
 */
const GridSlider: React.FC<GridSliderProps> = ({ 
  title, 
  cards, 
  viewAllHref,
  viewAllLabel = 'View all'
}) => {
  if (!cards || cards.length === 0) return null;

  // Convert legacy card format to GridItem format
  const items: GridItem[] = cards.map((card, index) => ({
    id: `card-${index}`,
    title: card.title,
    description: card.description,
    imageUrl: card.imageSrc,
    subtitle: card.status,
    buttonText: card.buttonText,
    href: card.href,
    onClick: card.onClick
  }));

  return (
    <Slider
      items={items}
      title={title}
      viewAllHref={viewAllHref}
      viewAllLabel={viewAllLabel}
      cardVariant="default"
      showNavigation={true}
    />
  );
};

export default GridSlider;
