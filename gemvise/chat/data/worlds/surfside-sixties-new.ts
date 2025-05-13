import type { World } from '../worldData';
import { SunIcon } from '@heroicons/react/24/outline'; // Icon representing beach/surfing

export const surfsideSixtiesNewData: World = {
  id: 'surfside-sixties',
  name: 'Surfside Sixties (New)', // Added (New) to distinguish
  href: '/world/surfside-sixties-new',
  imageUrl: '/images/world/surfside-sixties-new.webp', // Placeholder
  icon: SunIcon,
  tags: ['1960s', 'surfing', 'beach culture', 'romance', 'california', 'music'], // Synthesized
  description: 'Catch the wave of 1960s California beach culture, with sun, surf, and summer romance.', // Synthesized
  shortDescription: '60s California surf culture.', // Synthesized
  longDescription: 'Join surfers like Kai and Sandy as they ride the waves, enjoy beach parties, and navigate young love in the vibrant surf scene of the 1960s. Based on Gems like \'Kai Kahale\' and \'Endless Summer Days\'.',
  tone: ['Fun', 'Youthful', 'Nostalgic', 'Relaxed'], // Synthesized
  genres: ['Romance', 'Comedy', 'Coming-of-Age', 'Music'], // Aggregated from Gems
  themes: ['Surfing', 'Beach Life', 'Youth Culture', 'Summer Romance', 'Freedom', 'Music'], // Synthesized
  vibes: ['Sunny', 'Laid-Back', 'Retro Cool', 'Carefree'], // Synthesized
  eras: ['1960s'], // From Gem descriptions
  locations: ['California Beaches', 'Surf Spots', 'Beach Bonfires', 'Surf Shops', 'Diners'], // Synthesized
};
