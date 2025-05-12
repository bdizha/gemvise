import type { World } from '../worldData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline'; // Or a guitar/UK flag icon

export const britishInvasionNewData: World = {
  id: 'british-invasion',
  name: 'British Invasion (New)', // Added (New)
  href: '/worlds/british-invasion-new',
  imageUrl: '/images/worlds/british-invasion-new.webp', // Placeholder
  icon: MusicalNoteIcon,
  tags: ['1960s', 'british invasion', 'rock and roll', 'pop music', 'uk', 'bands', 'music'], // Synthesized
  description: 'Experience the electrifying music and cultural phenomenon of the 1960s British Invasion.', // Synthesized
  shortDescription: '60s British Invasion music scene.', // Synthesized
  longDescription: 'Follow bands like \'The Pioneers\' (fronted by Keith Moonshot) as they conquer America with their revolutionary sound and style. Navigate band dynamics, fan hysteria, and the pressures of fame. Based on Gems like \'Keith Moonshot\' and \'Across the Pond\'.',
  tone: ['Energetic', 'Revolutionary', 'Cool', 'Youthful'], // Synthesized
  genres: ['Music', 'Rock', 'Pop', 'Comedy', 'Drama'], // Aggregated from Gems
  themes: ['Music Revolution', 'Cultural Impact', 'Fame', 'Band Dynamics', 'Youth Culture', 'UK to USA'], // Synthesized
  vibes: ['Mod', 'Swinging Sixties', 'Iconic', 'Upbeat'], // Synthesized
  eras: ['1960s'], // From Gem descriptions
  locations: ['London Clubs (e.g., The Cavern)', 'US Tour Venues', 'Recording Studios (Abbey Road-esque)', 'TV Studios (Ed Sullivan Show-esque)'], // Synthesized
};
