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
  name?: string;
  /**
   * Title of the Gem.
   */
  title: string;
  /**
   * Description of the Gem.
   */
  description?: string;
  /**
   * Category of the Gem.
   */
  category?: string;
  /**
   * URL of the Gem's image.
   */
  imageUrl: string;
  /**
   * Tailwind CSS gradient class for the Gem's background.
   */
  gradient?: string;
  /**
   * List of expertise areas.
   */
  expertise?: string[];
  /**
   * Number of followers.
   */
  followers?: number;
  /**
   * Number of chat interactions.
   */
  chatCount?: number;
  /**
   * Subtitle for the Gem.
   */
  subtitle?: string;
  /**
   * URL to navigate to when the Gem is clicked.
   */
  href?: string;
}

/**
 * Props for the GemCard component.
 */
export interface GemCardProps {
  /**
   * The Gem to display.
   */
  gem: Gem;
  /**
   * Click handler for the card.
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
