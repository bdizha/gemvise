import type { World } from './gemvise/chat/data/worldData';
import { MicrophoneIcon } from '@heroicons/react/24/outline'; // Icon for singing/performance

export const girlGroupGlamourNewData: World = {
  id: 'girl-group-glamour',
  name: 'Girl Group Glamour (New)', // Added (New)
  href: '/world/girl-group-glamour-new',
  imageUrl: '/images/world/girl-group-glamour-new.webp', // Placeholder
  icon: MicrophoneIcon,
  tags: ['1960s', 'girl groups', 'pop music', 'motown-esque', 'fashion', 'music industry', 'harmony'], // Synthesized
  description: 'Step into the dazzling world of 1960s girl groups, with their iconic harmonies, fashion, and rise to stardom.', // Synthesized
  shortDescription: '1960s girl group stardom.', // Synthesized
  longDescription: 'Follow the journey of groups like \'The Starlettes\' (featuring Cindy, Rosie, and Jewel) as they navigate the music industry, achieve chart success, and deal with the pressures of fame and complex group dynamics. Based on Gems like \'Cindy Starlette\' and \'Chart Toppers & Heartbreakers\'.',
  tone: ['Glamorous', 'Harmonious', 'Ambitious', 'Dramatic'], // Synthesized
  genres: ['Music', 'Pop', 'Drama', 'Romance', 'Coming-of-Age'], // Aggregated from Gems
  themes: ['Fame', 'Friendship', 'Music Industry', 'Fashion', 'Empowerment', 'Group Dynamics', 'Love & Heartbreak'], // Synthesized
  vibes: ['Upbeat Pop', 'Retro Chic', 'Harmonious', 'Showbiz'], // Synthesized
  eras: ['1960s'], // From Gem descriptions
  locations: ['Recording Studios', 'TV Performance Stages (e.g., American Bandstand)', 'Tour Buses', 'Fashion Boutiques', 'Backstage Dressing Rooms'], // Synthesized
};
