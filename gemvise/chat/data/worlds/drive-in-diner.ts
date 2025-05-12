import type { World } from '../worldData';
import { FilmIcon } from '@heroicons/react/24/outline'; // Icon representing drive-in/movies/food

export const driveInDinerData: World = {
  id: 'drive-in-diner',
  name: 'Drive-In Diner Delights',
  href: '/worlds/drive-in-diner',
  imageUrl: '/images/worlds/drive-in-diner.webp', // Placeholder
  icon: FilmIcon,
  tags: ['1950s', 'drive-in', 'diner', 'comedy', 'nostalgia', 'food', 'cars'], // Synthesized
  description: 'Pull up to the classic 1950s drive-in diner, where carhops on roller skates serve up burgers, fries, and fun.', // Synthesized
  shortDescription: '1950s drive-in diner comedy.', // Synthesized
  longDescription: 'Meet Candy Carhop, Chef Chuckles, and a cast of colorful characters at the bustling drive-in diner. Expect funny mishaps, classic cars, and a heaping side of nostalgia. Based on Gems like \'Candy Carhop\' and \'The Mystery Milkshake\'.',
  tone: ['Comedic', 'Lighthearted', 'Nostalgic', 'Energetic', 'Retro'], // Synthesized
  genres: ['Comedy', 'Nostalgia', 'Slice of Life', 'Music'], // Aggregated from Gems (driveInDinerStories19 etc.)
  themes: ['Diner Culture', 'Classic Cars', 'Friendship', 'Customer Service', 'Mishaps', '1950s America'], // Synthesized
  vibes: ['Roller Skates & Milkshakes', 'Greasy Spoons & Good Times', 'Retro Fun', 'Fast Food Follies'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Drive-In Diner', 'Parking Lot', 'Kitchen', 'Nearby Streets'], // Synthesized
};
