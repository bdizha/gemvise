// Gemium Platform Specification
import { type Gem } from './gems'; // Import Gem type for local use
export type { Gem }; // Re-export Gem type for external use

// World Types
export interface GemiumWorld {
  id: string;
  name: string;
  description: string;
  genres: Genre[];
  collections: Collection[];
  ownership: {
    platform: number; // Percentage
    creator: number;  // Percentage
    license: number;  // Percentage
  };
}

// Genre System
export interface Genre {
  id: string;
  name: string;
  subgenres: string[];
  tags: string[];
}

// Collection Types
export interface Collection {
  id: string;
  name: string;
  description: string;
  type: 'Original' | 'Licensed' | 'Web3';
  gems: Gem[];
}

// Gem Attributes
export interface GemAttributes {
  power?: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  level: number;
  traits: string[];
}

// Example Worlds
export const PREDEFINED_WORLDS: GemiumWorld[] = [
  {
    id: 'nakaland',
    name: 'NakaLand',
    description: 'Home to classic anime series and characters',
    genres: [
      {
        id: 'shonen',
        name: 'Shonen',
        subgenres: ['Action', 'Adventure', 'Fantasy'],
        tags: ['fighting', 'power-ups', 'friendship']
      },
      {
        id: 'isekai',
        name: 'Isekai',
        subgenres: ['Fantasy', 'Adventure'],
        tags: ['transported', 'magic', 'rpg-elements']
      }
    ],
    collections: [],
    ownership: {
      platform: 30,
      creator: 40,
      license: 30
    }
  },
  {
    id: 'boldland',
    name: 'BoldLand',
    description: 'Web3-native world featuring Bold collections',
    genres: [
      {
        id: 'web3',
        name: 'Web3',
        subgenres: ['NFT', 'GameFi'],
        tags: ['blockchain', 'collectibles']
      }
    ],
    collections: [],
    ownership: {
      platform: 20,
      creator: 60,
      license: 20
    }
  },
  {
    id: 'naimland',
    name: 'NaimLand',
    description: 'Arabian-themed world of mystical tales',
    genres: [
      {
        id: 'arabian',
        name: 'Arabian',
        subgenres: ['Fantasy', 'Mythology'],
        tags: ['middle-eastern', 'folklore']
      }
    ],
    collections: [],
    ownership: {
      platform: 25,
      creator: 50,
      license: 25
    }
  }
];

// Genre Categories based on provided content
export const GENRE_CATEGORIES = {
  ANIME: [
    'Shonen',
    'Isekai',
    'Mecha',
    'Slice of Life',
    'Romance',
    'Horror',
    'Comedy',
    'Drama',
    'Fantasy',
    'Sci-Fi',
    'Mystery',
    'Supernatural'
  ],
  STORY_TYPES: [
    'Adventure',
    'Mystery',
    'Horror',
    'Survival',
    'Comedy',
    'Drama',
    'Romantic',
    'Sci-Fi',
    'Fantasy',
    'Action'
  ],
  THEMES: [
    'School Life',
    'Martial Arts',
    'Magic',
    'Supernatural',
    'Time Travel',
    'Virtual Reality',
    'Historical',
    'Modern',
    'Post-Apocalyptic'
  ]
};

// Content Types
export enum ContentType {
  CHARACTER = 'Character',
  STORY = 'Story',
  ADVENTURE = 'Adventure',
  WORLD = 'World',
  COLLECTION = 'Collection'
}

// Interaction Types
export enum InteractionType {
  CREATE = 'create',
  EXPLORE = 'explore',
  COLLABORATE = 'collaborate',
  TRADE = 'trade'
}
