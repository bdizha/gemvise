import { Gem } from '../../../types/gemium';

export const boldlandStories: Gem[] = [
  {
    id: 'the-last-mixtape',
    name: 'The Last Mixtape',
    description: 'A bittersweet story of friendship, growing up, and the power of music, centered around a carefully curated mixtape exchanged before a life-changing move.',
    genres: ['Coming-of-Age', 'Nostalgia', 'Drama'],
    type: 'Story',
    world: 'boldland',
    imageUrl: '/poses/Pose03.png',
    attributes: {
      power: 0, // Stories might not have power, or we can define relevant attributes
      rarity: 'Epic', // Corrected from 'Rare' to 'Epic'
      level: 0, // Level might represent chapters or complexity
      traits: ['friendship', 'music', 'memories']
    }
  },
  {
    id: 'drive-in-dreams',
    name: 'Drive-In Dreams',
    description: 'A tale of summer nights, young love, and cinematic magic at a classic American drive-in theater. Follow the intertwining lives of teens working and frequenting the local hotspot.',
    genres: ['Romance', 'Coming-of-Age', 'Nostalgia'],
    type: 'Story',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic',
      level: 0,
      traits: ['romance', 'youth', 'americana']
    }
  }
];
