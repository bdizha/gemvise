import type { World } from '../worldData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline'; // Using a more specific icon

export const motownMagicNewData: World = {
  id: 'motown-magic',
  name: 'Motown Magic (New)', // Added (New) to distinguish
  href: '/worlds/motown-magic-new',
  imageUrl: '/images/worlds/motown-magic-new.webp', // Placeholder
  icon: MusicalNoteIcon,
  tags: ['1960s', 'motown', 'music', 'soul', 'romance', 'detroit'], // Synthesized from Gems
  description: 'Experience the groundbreaking sound and heartfelt stories of the Motown era in 1960s Detroit.', // Synthesized
  shortDescription: 'The sound of 1960s Motown.', // Synthesized
  longDescription: 'Follow talented artists like Leo Harmon and Diana Rhythm as they navigate the music industry, collaborate on hit songs, and find love amidst the vibrant backdrop of Motown. Based on Gems like \'Leo Harmon\' and \'Rhythm of Love\'.',
  tone: ['Soulful', 'Energetic', 'Romantic', 'Ambitious'], // Synthesized
  genres: ['Music', 'Romance', 'Drama', 'Mystery'], // Aggregated from Gems
  themes: ['Music Creation', 'Love', 'Collaboration', 'Breaking Barriers', 'Motown Sound'], // Synthesized
  vibes: ['Upbeat', 'Classic Soul', 'Nostalgic', 'Rhythmic'], // Synthesized
  eras: ['1960s'], // From Gem descriptions
  locations: ['Recording Studios (Detroit)', 'Concert Halls', 'Record Label Offices', 'Diners'], // Synthesized
};
