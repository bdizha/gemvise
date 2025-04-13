import type { MouseEvent } from 'react';
import { type ShapeVariant } from '@/components/shapes/ShapeTower';

/**
 * Represents a Gem entity.
 */
export interface Gem {
  /**
   * Unique identifier for the Gem.
   */
  id: string;
  /**
   * Name of the Gem.
   */
  name: string;
  /**
   * Title of the Gem.
   */
  title: string;
  /**
   * Description of the Gem.
   */
  description: string;
  /**
   * Category of the Gem.
   */
  category: string;
  /**
   * URL of the Gem's image.
   */
  imageUrl: string;
  /**
   * Expertise associated with the Gem.
   */
  expertise: string[];
  /**
   * Number of followers for the Gem.
   */
  followers: number;
  /**
   * Number of chats for the Gem.
   */
  chatCount: number;
}

/**
 * Props for the GemCard component.
 */
export interface GemCardProps {
  /**
   * The Gem entity to display.
   */
  gem: Gem;
  /**
   * Optional click handler for the GemCard.
   */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

/**
 * Represents a Gem category.
 */
export interface GemCategory {
  /**
   * Unique identifier for the category.
   */
  id: string;
  /**
   * Name of the category.
   */
  name: string;
  /**
   * Description of the category.
   */
  description: string;
}
