import type { World } from '../worldData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline'; // Or a record/dance icon

export const smallTownSockHopNewData: World = {
  id: 'small-town-sock-hop',
  name: 'Small Town Sock Hop (New)', // Added (New)
  href: '/world/small-town-sock-hop-new',
  imageUrl: '/images/world/small-town-sock-hop-new.webp', // Placeholder
  icon: MusicalNoteIcon,
  tags: ['1950s', 'sock hop', 'small town', 'teen romance', 'dancing', 'rock-and-roll', 'nostalgia'], // Synthesized
  description: 'Step onto the gymnasium floor for a night of dancing, young love, and rock and roll at a 1950s small-town sock hop.', // Synthesized
  shortDescription: '1950s small-town sock hop.', // Synthesized
  longDescription: 'Join Peggy Sue, Bobby Sox, and their friends as they navigate crushes, dance contests, and teenage drama at the annual sock hop. Relive the innocence and excitement of a bygone era. Based on Gems like \'Peggy Sue\' and \'The Big Dance\'.',
  tone: ['Nostalgic', 'Innocent', 'Fun', 'Romantic', 'Upbeat'], // Synthesized
  genres: ['Romance', 'Comedy', 'Teen Drama', 'Nostalgia', 'Music'], // Aggregated from Gems
  themes: ['Teenage Romance', 'Dancing', 'Small Town Life', 'Friendship', 'Rock and Roll', 'Coming-of-Age'], // Synthesized
  vibes: ['Wholesome Fun', 'Retro Jukebox', 'Young Love', 'Community Spirit'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['High School Gymnasium', 'Local Diner', 'Soda Fountain', 'Town Square'], // Synthesized
};
