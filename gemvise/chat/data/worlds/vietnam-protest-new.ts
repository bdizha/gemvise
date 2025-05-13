import type { World } from '../worldData';
import { MegaphoneIcon } from '@heroicons/react/24/outline'; // Icon for protests/activism

export const vietnamProtestNewData: World = {
  id: 'vietnam-protest',
  name: 'Vietnam Protest (New)', // Added (New)
  href: '/world/vietnam-protest-new',
  imageUrl: '/images/world/vietnam-protest-new.webp', // Placeholder
  icon: MegaphoneIcon,
  tags: ['1960s', '1970s', 'vietnam war', 'protest', 'activism', 'peace movement', 'counterculture'], // Synthesized
  description: 'Experience the passionate and tumultuous era of the anti-Vietnam War protests in the late 1960s and early 1970s.', // Synthesized
  shortDescription: 'Anti-Vietnam War protests.', // Synthesized
  longDescription: 'Join activists like Eleanor \'Ellie\' Peace as they organize marches, rallies, and sit-ins to voice their opposition to the war and fight for peace. Explore the personal convictions and societal conflicts of a generation. Based on Gems like \'Eleanor Peace\' and \'March on Washington\'.',
  tone: ['Passionate', 'Idealistic', 'Contentious', 'Hopeful'], // Synthesized
  genres: ['Drama', 'Historical Fiction', 'Social Commentary', 'Political'], // Aggregated from Gems
  themes: ['Anti-War Movement', 'Activism', 'Peace', 'Social Justice', 'Generational Conflict', 'Civil Disobedience'], // Synthesized
  vibes: ['Turbulent', 'Activist Spirit', 'Countercultural', 'Defining Era'], // Synthesized
  eras: ['Late 1960s', 'Early 1970s'], // From Gem descriptions
  locations: ['College Campuses', 'Washington D.C. (Protest Sites)', 'Coffee Shops (Organizing Hubs)', 'Music Festivals'], // Synthesized
};
