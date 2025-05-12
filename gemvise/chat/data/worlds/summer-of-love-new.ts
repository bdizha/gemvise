import type { World } from '../worldData';
import { SparklesIcon } from '@heroicons/react/24/outline'; // Or a flower/peace icon

export const summerOfLoveNewData: World = {
  id: 'summer-of-love',
  name: 'Psychedelic Summer of Love (New)', // Added (New)
  href: '/worlds/summer-of-love-new',
  imageUrl: '/images/worlds/summer-of-love-new.webp', // Placeholder
  icon: SparklesIcon, // Placeholder, consider FaPeace or GiFlowerPot from react-icons if available
  tags: ['1960s', 'summer of love', 'psychedelic', 'hippie', 'counterculture', 'san francisco', 'music'], // Synthesized
  description: 'Journey back to the vibrant and mind-expanding Summer of Love in 1967 San Francisco.', // Synthesized
  shortDescription: '1967 Summer of Love experience.', // Synthesized
  longDescription: 'Join free spirits like Willow Harmony and Jaxon Freedom as they explore psychedelic experiences, communal living, and the music that defined a generation. Seek enlightenment and challenge societal norms. Based on Gems like \'Willow Harmony\' and \'The Gathering of Flowers\'.',
  tone: ['Free-Spirited', 'Psychedelic', 'Peaceful', 'Experimental'], // Synthesized
  genres: ['Slice of Life', 'Psychedelic Fiction', 'Music', 'Counterculture Drama'], // Aggregated from Gems
  themes: ['Peace', 'Love', 'Freedom', 'Counterculture', 'Psychedelia', 'Communal Living', 'Spiritual Awakening', 'Music Festivals'], // Synthesized
  vibes: ['Flower Power', 'Mind-Expanding', 'Groovy', 'Utopian'], // Synthesized
  eras: ['1967', 'Summer of Love'], // From Gem descriptions
  locations: ['Haight-Ashbury (San Francisco)', 'Golden Gate Park', 'Communes', 'Music Festivals (Monterey Pop-esque)'], // Synthesized
};
