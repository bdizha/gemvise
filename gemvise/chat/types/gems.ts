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
   * Description of the Gem.
   */
  description: string;

  /**
   * Genres associated with the Gem.
   */
  genres: string[];

  /**
   * Type of the Gem.
   */
  type: 'Character' | 'Story' | 'Adventure' | 'Scene';

  /**
   * World that the Gem belongs to.
   */
  world: string;

  /**
   * Attributes of the Gem.
   */
  attributes: {
    power: number;
    rarity: 'Legendary' | 'Epic' | 'Mythic';
    level: number;
    traits: string[];
  };

  /**
   * Optional casting information for character Gems.
   */
  casting?: {
    id: string;
    name: string;
    role: string;
    description: string;
  }[];

  /**
   * Username for the Gem (for interactive characters).
   */
  username?: string;

  /**
   * Title of the Gem (for interactive characters).
   */
  title?: string;

  /**
   * Category of the Gem.
   */
  category?: string;

  /**
   * URL of the Gem's image.
   */
  imageUrl?: string;

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
   * Number of likes received.
   */
  likes?: number;

  /**
   * Number of fire reactions received.
   */
  fire?: number;

  /**
   * Subtitle for the Gem.
   */
  subtitle?: string;

  /**
   * URL to navigate to when the Gem is clicked.
   */
  href?: string;

  /**
   * Optional array of scene IDs, applicable if type is 'Adventure'.
   */
  sceneIds?: string[];

  /**
   * Optional array of character IDs, applicable if type is 'Scene'.
   */
  characterIds?: string[];

  /**
   * Optional array of character IDs involved in an Adventure.
   */
  involvedCharacterIds?: string[];
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
