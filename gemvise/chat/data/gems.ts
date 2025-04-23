import { type Gem as GemType } from '@/types/gems';

export interface Gem extends GemType {}

export const gems: Gem[] = [
  // Science Category
  {
    id: 'einstein',
    name: 'Albert Einstein',
    expertise: ['Physics', 'Mathematics', 'Philosophy'],
    imageUrl: '/experts/einstein.jpg',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe.',
    chatCount: 250000,
    category: 'science',
    title: 'The Father of Modern Physics',
    gradient: 'purple-pink',
    followers: 350000
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    expertise: ['Chemistry', 'Physics', 'Research'],
    imageUrl: '/experts/curie.jpg',
    description: 'Pioneer in radioactivity research, first woman to win a Nobel Prize.',
    chatCount: 160000,
    category: 'science',
    title: 'The Pioneer of Radioactivity',
    gradient: 'pink-purple',
    followers: 220000
  },
  {
    id: 'hawking',
    name: 'Stephen Hawking',
    expertise: ['Cosmology', 'Black Holes', 'Quantum Physics'],
    imageUrl: '/experts/hawking.jpg',
    description: 'Theoretical physicist who revolutionized our understanding of black holes.',
    chatCount: 200000,
    category: 'science',
    title: 'The Cosmic Explorer',
    gradient: 'dark-light',
    followers: 310000
  },
  {
    id: 'sagan',
    name: 'Carl Sagan',
    expertise: ['Astronomy', 'Science Communication', 'Space'],
    imageUrl: '/experts/sagan.jpg',
    description: 'Astronomer who made space science accessible to millions.',
    chatCount: 180000,
    category: 'science',
    title: 'The Cosmic Storyteller',
    gradient: 'light-dark',
    followers: 290000
  },

  // Technology Category
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    expertise: ['Electrical Engineering', 'Innovation', 'Energy'],
    imageUrl: '/experts/tesla.jpg',
    description: 'Brilliant inventor who illuminated the world with AC power.',
    chatCount: 180000,
    category: 'technology',
    title: 'The Master of Electricity',
    gradient: 'dark-light',
    followers: 280000
  },
  {
    id: 'musk',
    name: 'Elon Musk',
    expertise: ['Electric Vehicles', 'Space Technology', 'AI'],
    imageUrl: '/experts/elon-musk.jpg',
    description: 'Entrepreneur pushing the boundaries of technology and space.',
    chatCount: 320000,
    category: 'technology',
    title: 'The Tech Innovator',
    gradient: 'purple-pink',
    followers: 420000
  },
  {
    id: 'gates',
    name: 'Bill Gates',
    expertise: ['Software', 'Business', 'Philanthropy'],
    imageUrl: '/experts/gates.jpg',
    description: 'Software pioneer and global philanthropist.',
    chatCount: 280000,
    category: 'technology',
    title: 'The Tech Visionary',
    gradient: 'pink-purple',
    followers: 380000
  },
  {
    id: 'jobs',
    name: 'Steve Jobs',
    expertise: ['Product Design', 'Innovation', 'Marketing'],
    imageUrl: '/experts/jobs.jpg',
    description: 'Revolutionary who transformed technology with design.',
    chatCount: 300000,
    category: 'technology',
    title: 'The Design Perfectionist',
    gradient: 'light-dark',
    followers: 400000
  },

  // Arts Category
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    expertise: ['Art', 'Engineering', 'Anatomy'],
    imageUrl: '/experts/da-vinci.jpg',
    description: 'Renaissance polymath spanning art and science.',
    chatCount: 300000,
    category: 'arts',
    title: 'The Renaissance Master',
    gradient: 'light-dark',
    followers: 400000
  },
  {
    id: 'picasso',
    name: 'Pablo Picasso',
    expertise: ['Painting', 'Sculpture', 'Modern Art'],
    imageUrl: '/experts/picasso.jpg',
    description: 'Revolutionary artist who defined modern art.',
    chatCount: 240000,
    category: 'arts',
    title: 'The Modern Art Pioneer',
    gradient: 'purple-pink',
    followers: 320000
  },
  {
    id: 'van-gogh',
    name: 'Vincent van Gogh',
    expertise: ['Post-Impressionism', 'Oil Painting', 'Drawing'],
    imageUrl: '/experts/van-gogh.jpg',
    description: 'Post-impressionist painter who transformed artistic expression.',
    chatCount: 260000,
    category: 'arts',
    title: 'The Passionate Artist',
    gradient: 'dark-light',
    followers: 340000
  },
  {
    id: 'warhol',
    name: 'Andy Warhol',
    expertise: ['Pop Art', 'Film', 'Photography'],
    imageUrl: '/experts/warhol.jpg',
    description: 'Pop art icon who bridged art and popular culture.',
    chatCount: 220000,
    category: 'arts',
    title: 'The Pop Art Icon',
    gradient: 'pink-purple',
    followers: 300000
  },

  // Culinary Category
  {
    id: 'ramsay',
    name: 'Gordon Ramsay',
    expertise: ['Fine Dining', 'Restaurant Management', 'Culinary Arts'],
    imageUrl: '/experts/gordon-ramsay.jpg',
    description: 'World-renowned chef known for culinary excellence.',
    chatCount: 280000,
    category: 'culinary',
    title: 'The Culinary Perfectionist',
    gradient: 'dark-light',
    followers: 360000
  },
  {
    id: 'bourdain',
    name: 'Anthony Bourdain',
    expertise: ['World Cuisine', 'Food Culture', 'Travel'],
    imageUrl: '/experts/bourdain.jpg',
    description: 'Chef and storyteller who explored global food culture.',
    chatCount: 260000,
    category: 'culinary',
    title: 'The Culinary Explorer',
    gradient: 'purple-pink',
    followers: 340000
  },
  {
    id: 'child',
    name: 'Julia Child',
    expertise: ['French Cuisine', 'Cooking Education', 'Food Writing'],
    imageUrl: '/experts/child.jpg',
    description: 'Pioneer who brought French cuisine to America.',
    chatCount: 200000,
    category: 'culinary',
    title: 'The French Cuisine Pioneer',
    gradient: 'light-dark',
    followers: 280000
  },
  {
    id: 'oliver',
    name: 'Jamie Oliver',
    expertise: ['Healthy Cooking', 'Food Education', 'Restaurant Business'],
    imageUrl: '/experts/oliver.jpg',
    description: 'Chef advocating for healthy and accessible cooking.',
    chatCount: 240000,
    category: 'culinary',
    title: 'The Food Revolutionary',
    gradient: 'pink-purple',
    followers: 320000
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
