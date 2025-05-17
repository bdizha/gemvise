import type { World } from '../worldData';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';

export const apolloMoonLandingData: World = {
  id: 'apollo-moon-landing',
  name: 'Apollo Moon Landing',
  href: '/world/apollo-moon-landing',
  imageUrl: '/worlds/128.png',
  icon: RocketLaunchIcon,
  tags: ['1960s', 'space', 'history', 'achievement', 'technology'],
  description: "Witness one of humanity's greatest achievements: the first steps on the Moon.",
  shortDescription: 'First steps on the Moon.',
  longDescription: "Relive the excitement and wonder of July 20, 1969. From the launch of Apollo 11 to the iconic 'one small step' speech, 'Apollo Moon Landing' immerses you in this historic moment of human exploration and triumph.",
  tone: ['Awe-inspiring', 'Historic', 'Triumphant'],
  genres: ['Historical', 'Educational', 'Adventure'],
  themes: ['Space Exploration', 'Human Achievement', 'Cold War', 'Technology'],
  vibes: ['Monumental', 'Hopeful', 'Scientific'],
  eras: ['1969', '1960s'],
  locations: ['NASA Mission Control', 'Moon (Tranquility Base)', 'Spacecraft'],
};
