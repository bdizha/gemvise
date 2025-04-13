export interface Gem {
  id: string;
  name: string;
  expertise: string[];
  imageUrl: string;
  description: string;
  energyLevel: number;
  chatCount: string;
  category: string;
}

export const gems: Gem[] = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/gradients/mobile/GV-Gradient-01.png',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe.',
    energyLevel: 95,
    chatCount: '250k',
    category: 'Science'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/gradients/mobile/GV-Gradient-02.png',
    description: 'Brilliant inventor who illuminated the world with AC power.',
    energyLevel: 92,
    chatCount: '180k',
    category: 'Innovation'
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/gradients/mobile/GV-Gradient-03.png',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize.',
    energyLevel: 94,
    chatCount: '160k',
    category: 'Science'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/gradients/mobile/GV-Gradient-04.png',
    description: 'Renaissance polymath spanning art and science.',
    energyLevel: 98,
    chatCount: '300k',
    category: 'Art'
  }
];

export const getGemsByCategory = (category: string) => 
  gems.filter(gem => gem.category.toLowerCase() === category.toLowerCase());

export const getGemById = (id: string) => 
  gems.find(gem => gem.id === id);

export const getFeaturedGems = () => 
  gems.slice(0, 4);

export const getAllGems = () => gems;
