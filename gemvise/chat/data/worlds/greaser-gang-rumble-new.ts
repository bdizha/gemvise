import type { World } from '../worldData';
import { UserGroupIcon } from '@heroicons/react/24/outline'; // Icon representing gangs/groups

export const greaserGangRumbleNewData: World = {
  id: 'greaser-gang-rumble',
  name: 'Greaser Gang Rumble (New)', // Added (New)
  href: '/world/greaser-gang-rumble-new',
  imageUrl: '/images/world/greaser-gang-rumble-new.webp', // Placeholder
  icon: UserGroupIcon,
  tags: ['1950s', 'greasers', 'gangs', 'rivalry', 'drama', 'rock-and-roll'], // Synthesized
  description: 'Experience the rebellious world of 1950s greaser gangs, leather jackets, and rock and roll.', // Synthesized
  shortDescription: '1950s greaser gang rivalry.', // Synthesized
  longDescription: 'Step into the turf wars and dramatic confrontations of rival greaser gangs, like the one led by Ace \'The Fist\' Malone. Explore themes of loyalty, rebellion, and the search for identity in a tough urban landscape. Based on Gems like \'Ace Malone\' and \'The Midnight Rumble\'.',
  tone: ['Tough', 'Rebellious', 'Dramatic', 'Nostalgic'], // Synthesized
  genres: ['Drama', 'Action', 'Coming-of-Age', 'Crime'], // Aggregated from Gems
  themes: ['Rivalry', 'Loyalty', 'Rebellion', 'Social Class', 'Rock and Roll Culture', 'Identity'], // Synthesized
  vibes: ['Gritty', 'Edgy', 'Retro Cool', 'Intense'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Alleyways', 'Diners', 'Drive-Ins', 'Abandoned Warehouses', 'High School Hangouts'], // Synthesized
};
