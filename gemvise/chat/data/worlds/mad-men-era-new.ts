import type { World } from '../worldData';
import { BriefcaseIcon } from '@heroicons/react/24/outline'; // Icon representing workplace/business

export const madMenEraNewData: World = {
  id: 'mad-men-era',
  name: 'Mad Men Era (New)', // Added (New) to distinguish
  href: '/worlds/mad-men-era-new',
  imageUrl: '/images/worlds/mad-men-era-new.webp', // Placeholder
  icon: BriefcaseIcon,
  tags: ['1960s', 'advertising', 'madison avenue', 'drama', 'workplace', 'new york'], // Synthesized
  description: 'Navigate the high-stakes world of 1960s Madison Avenue advertising, full of ambition, secrets, and societal change.', // Synthesized
  shortDescription: '1960s Madison Ave advertising.', // Synthesized
  longDescription: 'Step into the shoes of charismatic executives like Sterling Archer and ambitious copywriters like Lana Kane in the competitive advertising scene of 1960s New York. Based on Gems like \'Sterling Archer\' and \'The Campaign Trail\'.',
  tone: ['Sophisticated', 'Dramatic', 'Witty', 'Complex'], // Synthesized
  genres: ['Drama', 'Workplace', 'Period Piece'], // Aggregated from Gems
  themes: ['Ambition', 'Identity', 'Gender Roles', 'Corporate Politics', 'Social Change', 'Advertising'], // Synthesized
  vibes: ['Retro Chic', 'High Pressure', 'Intriguing', 'Stylish'], // Synthesized
  eras: ['1960s'], // From Gem descriptions
  locations: ['Madison Avenue Ad Agencies', 'Client Offices', 'Bars & Restaurants (NYC)', 'Apartments'], // Synthesized
};
