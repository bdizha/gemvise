import type { World } from '../worldData';
import { SparklesIcon } from '@heroicons/react/24/outline'; // Placeholder icon

export const hollywoodDreamsNewData: World = {
  id: 'hollywood-dreams',
  name: 'Hollywood Dreams (New)', // Added (New) to distinguish
  href: '/worlds/hollywood-dreams-new',
  imageUrl: '/images/worlds/hollywood-dreams-new.webp', // Placeholder
  icon: SparklesIcon,
  tags: ['1950s', 'hollywood', 'drama', 'romance', 'fame', 'dreams', 'movie star'], // Synthesized from Gems
  description: 'A small-town girl pursues her dream of movie stardom in the dazzling and cutthroat world of 1950s Hollywood.', // Synthesized
  shortDescription: '1950s Hollywood stardom quest.', // Synthesized
  longDescription: 'Navigate the glittering premieres, the studio politics, and the path to fame as Ella Rosewood tries to make her mark in golden-era Hollywood, finding love and rivalry along the way. Based on character and story gems like \'Ella Rosewood\' and \'Starlight Serenade\'.',
  tone: ['Ambitious', 'Nostalgic', 'Dramatic', 'Romantic'], // Synthesized
  genres: ['Romance', 'Drama', 'Mystery'], // Aggregated from Gems
  themes: ['Dreams', 'Fame', 'Love', 'Ambition', 'Hollywood Golden Age', 'Cutthroat Competition'], // Synthesized
  vibes: ['Classic Hollywood', 'Glamorous', 'High Stakes', 'Nostalgic'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Hollywood Studios', 'Movie Sets', 'Audition Rooms', 'Red Carpets'], // Synthesized
};
