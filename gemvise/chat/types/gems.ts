import type { MouseEvent } from 'react';

export interface Gem {
  id: string;
  name: string;
  title?: string;
  description: string;
  category: string;
  imageUrl: string;
  gradient: string;
  expertise?: string[];
  followers?: number;
  chatCount?: number;
}

export interface GemCardProps {
  gem: Gem;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface GemCategory {
  id: string;
  name: string;
  description: string;
}
