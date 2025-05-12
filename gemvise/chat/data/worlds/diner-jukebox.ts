import type { World } from '../worldData';
import { PlayCircleIcon } from '@heroicons/react/24/outline'; // Icon for jukebox/music

export const dinerJukeboxData: World = {
  id: 'diner-jukebox',
  name: 'Diner Jukebox Dreams',
  href: '/worlds/diner-jukebox',
  imageUrl: '/images/worlds/diner-jukebox.webp', // Placeholder
  icon: PlayCircleIcon,
  tags: ['1950s', 'diner', 'jukebox', 'romance', 'nostalgia', 'music', 'small town'], // Synthesized
  description: 'Experience the charm of a classic 1950s American diner, where the jukebox plays the hits and young love blossoms over milkshakes.', // Synthesized
  shortDescription: 'Classic 1950s diner romance.', // Synthesized
  longDescription: 'Meet Penny, a hardworking waitress with a song in her heart, and Danny, a local musician with dreams of making it big. Big Tony, the diner owner, provides wisdom and good food. Based on Gems like \'Penny Lane (Diner Waitress)\' and \'Jukebox Serenade\'.',
  tone: ['Nostalgic', 'Sweet', 'Hopeful', 'Friendly', 'Musical'], // Synthesized
  genres: ['Romance', 'Nostalgia', 'Music', 'Slice of Life', 'Drama'], // Aggregated from Gems (dinerJukeboxStories17 etc.)
  themes: ['Young Love', 'Music', 'Dreams', 'Community', 'Nostalgia', 'Diner Culture'], // Synthesized
  vibes: ['Classic Americana', 'Jukebox Hits', 'Comfort Food', 'Heartwarming'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Classic American Diner', 'Jukebox Corner', 'Local Hangouts', 'Town Square'], // Synthesized
};
