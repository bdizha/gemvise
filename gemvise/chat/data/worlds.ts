import { GemiumWorld, Genre, Collection } from '../types/gemium';
import { nakalandCollections } from './worlds/nakaland';
import { boldlandCollections } from './worlds/boldland';
import { naimlandCollections } from './worlds/naimland';

// Define the genre system
const genreMap: { [key: string]: Genre } = {
  Anime: {
    id: 'anime',
    name: 'Anime',
    subgenres: ['Shonen', 'Seinen', 'Shoujo'],
    tags: ['Japanese', 'Animation']
  },
  Action: {
    id: 'action',
    name: 'Action',
    subgenres: ['Combat', 'Martial Arts', 'Superhero'],
    tags: ['Fighting', 'Adventure']
  },
  Adventure: {
    id: 'adventure',
    name: 'Adventure',
    subgenres: ['Exploration', 'Quest', 'Journey'],
    tags: ['Discovery', 'Travel']
  },
  Fantasy: {
    id: 'fantasy',
    name: 'Fantasy',
    subgenres: ['High Fantasy', 'Magic', 'Mythical'],
    tags: ['Magic', 'Supernatural']
  },
  Romance: {
    id: 'romance',
    name: 'Romance',
    subgenres: ['Contemporary', 'Drama', 'Comedy'],
    tags: ['Love', 'Relationships']
  },
  Drama: {
    id: 'drama',
    name: 'Drama',
    subgenres: ['Emotional', 'Character-driven', 'Slice of Life'],
    tags: ['Conflict', 'Relationships']
  },
  Mystery: {
    id: 'mystery',
    name: 'Mystery',
    subgenres: ['Detective', 'Thriller', 'Suspense'],
    tags: ['Investigation', 'Puzzle']
  },
  Magic: {
    id: 'magic',
    name: 'Magic',
    subgenres: ['Spells', 'Wizardry', 'Enchantment'],
    tags: ['Supernatural', 'Powers']
  }
};

// Define the worlds
export const worlds: GemiumWorld[] = [
  {
    id: 'nakaland',
    name: 'Nakai',
    description: 'Home to classic anime series and characters',
    genres: [genreMap.Anime, genreMap.Action, genreMap.Adventure, genreMap.Fantasy],
    ownership: {
      platform: 30,
      creator: 40,
      license: 30
    },
    collections: nakalandCollections
  },
  {
    id: 'boldland',
    name: 'BoldLand',
    description: 'A world of adventure, romance, and classic entertainment',
    genres: [genreMap.Adventure, genreMap.Action, genreMap.Romance, genreMap.Drama],
    ownership: {
      platform: 40,
      creator: 60,
      license: 0
    },
    collections: boldlandCollections
  },
  {
    id: 'naimland',
    name: 'NaimLand',
    description: 'A mystical realm inspired by Arabian tales and desert legends',
    genres: [genreMap.Fantasy, genreMap.Adventure, genreMap.Mystery, genreMap.Magic],
    ownership: {
      platform: 40,
      creator: 60,
      license: 0
    },
    collections: naimlandCollections
  },
  {
    id: 'spaceum',
    name: 'Spaceum',
    description: 'Explore distant galaxies, futuristic technologies, and cosmic mysteries.',
    genres: [genreMap.Adventure, genreMap.Mystery], 
    ownership: {
      platform: 35,
      creator: 55,
      license: 10
    }, 
    collections: [] 
  }
];