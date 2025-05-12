import type { World } from '../worldData';
import { FilmIcon } from '@heroicons/react/24/outline'; // Icon for movies/film

export const driveInMovieNightNewData: World = {
  id: 'drive-in-movie-night',
  name: 'Drive-In Movie Night (New)', // Added (New)
  href: '/worlds/drive-in-movie-night-new',
  imageUrl: '/images/worlds/drive-in-movie-night-new.webp', // Placeholder
  icon: FilmIcon,
  tags: ['1950s', 'drive-in', 'movies', 'teenagers', 'romance', 'nostalgia', 'cars'], // Synthesized
  description: 'Relive the classic 1950s drive-in movie experience, complete with teenage romance, cool cars, and creature features.', // Synthesized
  shortDescription: '1950s drive-in movie fun.', // Synthesized
  longDescription: 'Join teens like Tommy \'The Cool\' Collins and Sally Sweetheart for a night of fun, frights, and fledgling romance under the stars at the local drive-in. Based on Gems like \'Tommy Collins\' and \'Creature Feature Fright Night\'.',
  tone: ['Nostalgic', 'Fun', 'Romantic', 'Youthful', 'Slightly Spooky'], // Synthesized
  genres: ['Romance', 'Comedy', 'Teen Drama', 'Nostalgia', 'Slice of Life'], // Aggregated from Gems
  themes: ['Teenage Romance', 'Nostalgia', 'Drive-In Culture', 'First Dates', 'Monster Movies', 'Friendship'], // Synthesized
  vibes: ['Retro Cool', 'Under the Stars', 'Classic Americana', 'Teen Spirit'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Drive-In Theater', 'Snack Bar', 'Cars (Convertibles)', 'Local Hangouts'], // Synthesized
};
