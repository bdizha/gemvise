import type { World } from '../worldData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

export const woodstockVibesData: World = {
  id: 'woodstock-vibes',
  name: 'Woodstock Music Festival', // Corrected from 'Woodstock Vibes'
  href: '/worlds/woodstock-vibes',
  imageUrl: '/images/worlds/woodstock-vibes.webp',
  icon: MusicalNoteIcon,
  tags: ['1960s', 'music festival', 'counterculture', 'peace', 'hippie'],
  description: 'Three days of peace, music, and love at the iconic Woodstock festival.',
  shortDescription: 'Iconic 1969 music festival.',
  longDescription: 'Experience the legendary Woodstock Music & Art Fair of 1969. \'Woodstock Vibes\' captures the atmosphere of peace, love, and rock \'n\' roll that defined a generation. Navigate the crowds, enjoy historic performances, and be part of a cultural phenomenon.',
  tone: ['Iconic', 'Free-spirited', 'Communal'],
  genres: ['Music', 'Historical', 'Cultural'],
  themes: ['Peace', 'Love', 'Counterculture', 'Music Festivals', 'Community'],
  vibes: ['Legendary', 'Groovy', 'Muddy'],
  eras: ['1969', '1960s'],
  locations: ['Bethel, New York (Max Yasgur\'s Farm)'],
};
