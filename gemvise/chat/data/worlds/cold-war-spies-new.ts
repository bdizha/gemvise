import type { World } from '../worldData';
import { EyeIcon } from '@heroicons/react/24/outline'; // Icon representing espionage/surveillance

export const coldWarSpiesNewData: World = {
  id: 'cold-war-spies',
  name: 'Cold War Spies (New)', // Added (New) to distinguish
  href: '/worlds/cold-war-spies-new',
  imageUrl: '/images/worlds/cold-war-spies-new.webp', // Placeholder
  icon: EyeIcon,
  tags: ['1960s', 'cold war', 'espionage', 'thriller', 'spies', 'intrigue'], // Synthesized
  description: 'Enter the shadowy world of Cold War espionage, where trust is a luxury and betrayal is commonplace.', // Synthesized
  shortDescription: 'Cold War espionage thriller.', // Synthesized
  longDescription: 'Follow skilled operatives like Agent Anya Petrova as they navigate dangerous missions, double-crosses, and international intrigue during the height of the Cold War. Based on Gems like \'Agent Anya Petrova\' and \'The Berlin Exchange\'.',
  tone: ['Suspenseful', 'Gritty', 'Mysterious', 'Tense'], // Synthesized
  genres: ['Thriller', 'Spy Fiction', 'Drama', 'Mystery'], // Aggregated from Gems
  themes: ['Espionage', 'Betrayal', 'Trust', 'Ideology', 'Cold War Politics', 'Survival'], // Synthesized
  vibes: ['Shadowy', 'High Stakes', 'Intriguing', 'Covert'], // Synthesized
  eras: ['1960s', 'Cold War Era'], // From Gem descriptions
  locations: ['Berlin (East & West)', 'Moscow', 'London', 'Safe Houses', 'Border Checkpoints'], // Synthesized
};
