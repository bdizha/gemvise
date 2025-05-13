import type { World } from '../worldData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline'; // Or a record/dance icon

export const sockHopData: World = {
  id: 'sock-hop',
  name: 'Sock Hop Romance',
  href: '/world/sock-hop',
  imageUrl: '/images/world/sock-hop.webp', // Placeholder
  icon: MusicalNoteIcon,
  tags: ['1950s', 'sock hop', 'high school', 'romance', 'dancing', 'rock-and-roll', 'teenagers'], // Synthesized
  description: 'Twirl back to a 1950s high school sock hop, filled with jukebox tunes, hopeful glances, and the thrill of a slow dance.', // Synthesized
  shortDescription: '1950s high school sock hop.', // Synthesized
  longDescription: 'Betty Lou hopes to catch the eye of Johnny B. Goode, the most popular boy in school. With her best friend Susie Q by her side, can she find romance on the dance floor? Based on Gems like \'Betty Lou (Shy Girl)\' and \'A Slow Dance Dream\'.',
  tone: ['Sweet', 'Innocent', 'Nostalgic', 'Fun', 'Hopeful'], // Synthesized
  genres: ['Romance', 'Comedy', 'Teen Drama', 'Nostalgia', 'Music'], // Aggregated from Gems (sockHopStories18 etc.)
  themes: ['First Love', 'High School Dance', 'Friendship', 'Courage', 'Rock and Roll', 'Teen Life'], // Synthesized
  vibes: ['Jukebox Jive', 'Poodle Skirts', 'Wholesome Fun', 'Under the Mirror Ball'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['High School Gymnasium', 'Soda Shop', 'Jukebox Corner', 'School Hallways'], // Synthesized
};
