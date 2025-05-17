import { Collection } from '../../types/gemium';
import type { World } from '../worldData';

export const naimlandData: World = {
  id: 'naimland',
  name: 'NaimLand',
  href: '/world/naimland',
  imageUrl: '/gradients/worlds/naimland.png',
  icon: '/gradients/worlds/naimland.png',
  tags: [],
  description: '',
  shortDescription: '',
  longDescription: '',
  tone: [],
  genres: ['Fantasy', 'Adventure', 'Mystery', 'Magic'],
  themes: [],
  vibes: [],
  eras: [],
  locations: [],
};

export const naimlandCollections: Collection[] = [
  {
    id: 'arabian-nights',
    name: 'Arabian Nights',
    description: 'A magical collection of tales from the golden age of Middle Eastern storytelling, featuring genies, flying carpets, and legendary heroes.',
    type: 'Original',
    gems: [
      {
        id: 'aladdin-master',
        name: 'Aladdin Master',
        description: 'A charismatic and resourceful hero who uses his wit and agility to navigate through magical adventures in the heart of ancient Arabia.',
        genres: ['Adventure', 'Fantasy'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 93,
          rarity: 'Legendary',
          level: 5,
          traits: ['clever', 'agile', 'charming']
        }
      },
      {
        id: 'desert-queen',
        name: 'Desert Queen',
        description: 'A powerful and wise ruler who commands respect across the desert kingdoms, known for her fair judgment and magical abilities.',
        genres: ['Fantasy', 'Romance'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 89,
          rarity: 'Epic',
          level: 4,
          traits: ['regal', 'powerful', 'wise']
        }
      }
    ]
  },
  {
    id: 'mystic-bazaar',
    name: 'Mystic Bazaar',
    description: 'A mysterious marketplace where magical artifacts, ancient scrolls, and enchanted treasures await those who dare to explore its winding paths.',
    type: 'Original',
    gems: [
      {
        id: 'merchant-sage',
        name: 'Merchant Sage',
        description: 'A mysterious and knowledgeable trader who holds ancient secrets and rare artifacts within the winding paths of the Mystic Bazaar.',
        genres: ['Mystery', 'Fantasy'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 86,
          rarity: 'Epic',
          level: 3,
          traits: ['wise', 'mysterious', 'knowledgeable']
        }
      },
      {
        id: 'mystic-weaver',
        name: 'Mystic Weaver',
        description: 'An enigmatic artisan who weaves magic into fabrics, creating enchanted tapestries that tell stories of ancient times and distant lands.',
        genres: ['Magic', 'Fantasy'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 91,
          rarity: 'Legendary',
          level: 4,
          traits: ['magical', 'creative', 'enigmatic']
        }
      }
    ]
  },
  {
    id: 'desert-legends',
    name: 'Desert Legends',
    description: 'Ancient myths and legends that have shaped the desert cultures, featuring mighty heroes, powerful gods, and forgotten lore.',
    type: 'Original',
    gems: [
      {
        id: 'sand-walker',
        name: 'Sand Walker',
        description: 'A skilled nomad who traverses the vast desert with unmatched expertise, uncovering lost treasures and ancient ruins.',
        genres: ['Adventure', 'Action'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 88,
          rarity: 'Epic',
          level: 4,
          traits: ['nomadic', 'resilient', 'skilled']
        }
      },
      {
        id: 'oasis-guardian',
        name: 'Oasis Guardian',
        description: 'A mystical protector of sacred desert waters, wielding ancient magic to preserve life and maintain balance in the harsh environment.',
        genres: ['Fantasy', 'Magic'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 94,
          rarity: 'Mythic',
          level: 5,
          traits: ['protective', 'powerful', 'mystical']
        }
      }
    ]
  },
  {
    id: 'desert-kingdoms',
    name: 'Desert Kingdoms',
    description: 'Ancient civilizations and powerful dynasties that ruled the vast desert landscapes, leaving behind legacies of wisdom and power.',
    type: 'Original',
    gems: [
      {
        id: 'sand-walker',
        name: 'Sand Walker',
        description: 'A skilled nomad who traverses the vast desert with unmatched expertise, uncovering lost treasures and ancient ruins.',
        genres: ['Adventure', 'Action'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 88,
          rarity: 'Epic',
          level: 4,
          traits: ['nomadic', 'resilient', 'skilled']
        }
      },
      {
        id: 'oasis-guardian',
        name: 'Oasis Guardian',
        description: 'A mystical protector of sacred desert waters, wielding ancient magic to preserve life and maintain balance in the harsh environment.',
        genres: ['Fantasy', 'Magic'],
        type: 'Character',
        world: 'naimland',
        attributes: {
          power: 94,
          rarity: 'Mythic',
          level: 5,
          traits: ['protective', 'powerful', 'mystical']
        }
      }
    ]
  }
];
