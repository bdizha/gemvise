import type { World } from '../worldData';
import { RocketLaunchIcon } from '@heroicons/react/24/outline'; // Icon for space/science

export const spaceRaceRomanceNewData: World = {
  id: 'space-race-romance',
  name: 'Space Race Romance (New)', // Added (New)
  href: '/worlds/space-race-romance-new',
  imageUrl: '/images/worlds/space-race-romance-new.webp', // Placeholder
  icon: RocketLaunchIcon,
  tags: ['1960s', 'space race', 'nasa', 'engineers', 'astronauts', 'romance', 'sci-fi-lite'], // Synthesized
  description: 'Amidst the Cold War ambition of the 1960s space race, brilliant minds at NASA find love and navigate personal challenges.', // Synthesized
  shortDescription: 'Love during the 1960s space race.', // Synthesized
  longDescription: 'Follow Dr. Evelyn Reed, a brilliant aerospace engineer, and Captain Alex \'Comet\' Corbin, a dashing astronaut, as they work towards lunar missions and find their orbits aligning. Based on Gems like \'Dr. Evelyn Reed\' and \'Moondust & Heartbeats\'.',
  tone: ['Inspiring', 'Romantic', 'Intelligent', 'Hopeful'], // Synthesized
  genres: ['Romance', 'Drama', 'Historical Fiction', 'Workplace'], // Aggregated from Gems
  themes: ['Space Exploration', 'Scientific Achievement', 'Love Under Pressure', 'Cold War Tensions', 'Breaking Barriers'], // Synthesized
  vibes: ['Retro-Futuristic', 'Intellectual', 'Exciting', 'Challenging'], // Synthesized
  eras: ['1960s', 'Space Race Era'], // From Gem descriptions
  locations: ['NASA Facilities (Houston, Cape Canaveral)', 'Mission Control', 'Astronaut Training Centers', 'Observatories'], // Synthesized
};
