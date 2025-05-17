import type { World } from '../worldData';
import { Gem } from '@/types/gemium'; // Import Gem type

// Placeholder gems for Nakai world
const nakaiCharacters: Gem[] = [
  {
    id: 'nakai-char-01',
    name: 'Kaito, the Wind Walker',
    type: 'Character',
    description: 'A swift warrior who commands the air currents.',
    imageUrl: '/images/placeholder/kaito.png',
    attributes: { rarity: 'Epic', power: 85 },
    genres: ['Anime', 'Action', 'Fantasy'],
  },
  {
    id: 'nakai-char-02',
    name: 'Yumi, the Spirit Archer',
    type: 'Character',
    description: 'Her arrows are guided by ancient spirits.',
    imageUrl: '/images/placeholder/yumi.png',
    attributes: { rarity: 'Rare', power: 70 },
    genres: ['Anime', 'Fantasy'],
  },
];

const nakaiStories: Gem[] = [
  {
    id: 'nakai-story-01',
    name: 'The Serpent of Nakai Peaks',
    type: 'Story',
    description: 'An ancient serpent awakens, threatening the balance of Nakai.',
    imageUrl: '/images/placeholder/serpent-peak.png',
    attributes: { rarity: 'Legendary', chapters: 12 },
    genres: ['Anime', 'Adventure', 'Fantasy'],
  },
];

export const nakaiData: World = {
  id: 'nakai',
  name: 'Nakai',
  href: '/world/nakai',
  imageUrl: '/gradients/worlds/nakai.png',
  icon: '/gradients/worlds/nakai.png',
  tags: [],
  description: 'A vibrant world inspired by anime, filled with action, adventure, and fantasy elements. Explore breathtaking landscapes and encounter powerful beings.',
  shortDescription: 'Anime-inspired world of action and fantasy.',
  longDescription: 'Nakai is a realm where the spiritual and martial arts intertwine. Ancient prophecies, formidable beasts, and hidden powers shape the destiny of its inhabitants. From towering peaks where wind spirits dwell to serene villages harboring ancient secrets, Nakai offers endless adventures for those brave enough to seek them.',
  tone: ['Epic', 'Mystical', 'Adventurous'],
  genres: ['Anime', 'Action', 'Adventure', 'Fantasy'],
  themes: ['Balance of Power', 'Spiritual Journey', 'Ancient Secrets'],
  vibes: ['High-Energy', 'Mysterious', 'Magical'],
  eras: ['Feudal Fantasy'],
  locations: ['Nakai Peaks', 'Spirit Forests', 'Hidden Temples'],
  characters: nakaiCharacters,
  stories: nakaiStories,
  // adventures: [], // Add if needed
  // scenes: [], // Add if needed
};
