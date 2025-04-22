import { type Gem as GemType } from '@/types/gems';

export interface Gem extends GemType {}

export const gems: Gem[] = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/gradients/mobile/GV-Gradient-01.png',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe.',
    chatCount: 250000,
    category: 'science',
    title: 'The Father of Modern Physics',
    gradient: 'purple-pink',
    followers: 350000
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/gradients/mobile/GV-Gradient-02.png',
    description: 'Brilliant inventor who illuminated the world with AC power.',
    chatCount: 180000,
    category: 'technology',
    title: 'The Master of Electricity',
    gradient: 'dark-light',
    followers: 280000
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/gradients/mobile/GV-Gradient-03.png',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize.',
    chatCount: 160000,
    category: 'science',
    title: 'The Pioneer of Radioactivity',
    gradient: 'pink-purple',
    followers: 220000
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/gradients/mobile/GV-Gradient-04.png',
    description: 'Renaissance polymath spanning art and science.',
    chatCount: 300000,
    category: 'arts',
    title: 'The Renaissance Master',
    gradient: 'light-dark',
    followers: 400000
  }
];

export const getGemsByCategory = (category: string) =>
  gems.filter(gem => gem.category?.toLowerCase() === category.toLowerCase());

export const getGemById = (id: string) => 
  gems.find(gem => gem.id === id);

export const getCategorySection = () => 
  gems.slice(0, 4);

export const getAllGems = (): Gem[] => {
  return gems;
}
