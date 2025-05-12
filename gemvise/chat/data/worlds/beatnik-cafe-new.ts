import type { World } from '../worldData';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'; // Icon for poetry/dialogue

export const beatnikCafeNewData: World = {
  id: 'beatnik-cafe',
  name: 'Beatnik Cafe (New)', // Added (New)
  href: '/worlds/beatnik-cafe-new',
  imageUrl: '/images/worlds/beatnik-cafe-new.webp', // Placeholder
  icon: ChatBubbleLeftRightIcon,
  tags: ['1950s', 'beatnik', 'poetry', 'jazz', 'counterculture', 'coffeehouse'], // Synthesized
  description: 'Immerse yourself in the smoky ambiance of a 1950s Beatnik cafe, filled with poetry, jazz, and philosophical conversations.', // Synthesized
  shortDescription: '1950s Beatnik cafe culture.', // Synthesized
  longDescription: 'Join characters like Saffron Summers as they express themselves through poetry and art in the heart of the Beat Generation. Explore themes of nonconformity, artistic expression, and the search for meaning. Based on Gems like \'Saffron Summers\' and \'Whispers in the Smoke\'.',
  tone: ['Intellectual', 'Artistic', 'Nonconformist', 'Cool'], // Synthesized
  genres: ['Drama', 'Slice of Life', 'Literary', 'Music'], // Aggregated from Gems
  themes: ['Counterculture', 'Artistic Expression', 'Poetry', 'Jazz Music', 'Nonconformity', 'Philosophy'], // Synthesized
  vibes: ['Smoky', 'Introspective', 'Cool Jazz', 'Free-Spirited'], // Synthesized
  eras: ['1950s'], // From Gem descriptions
  locations: ['Dimly Lit Coffeehouses', 'Jazz Clubs', 'Art Galleries', 'City Alleyways'], // Synthesized
};
