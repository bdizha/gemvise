import type { World } from '../worldData';
import { boldlandCollections } from './boldland/index';
import { Gem } from '@/types/gemium';

const charactersCollection = boldlandCollections.find(col => col.id === 'boldland-characters');
const adventuresCollection = boldlandCollections.find(col => col.id === 'boldland-adventures');
const storiesCollection = boldlandCollections.find(col => col.id === 'boldland-stories');
const scenesCollection = boldlandCollections.find(col => col.id === 'boldland-scenes');

export const boldlandData: World = {
  id: 'boldland',
  name: 'BoldLand',
  href: '/world/boldland',
  imageUrl: '/worlds/logos/boldland.png',
  icon: '/worlds/logos/boldland.png',
  tags: ['Sci-Fi', 'Fantasy', 'Cyberpunk', 'Adventure', 'Romance', 'Drama', 'Tech', 'Magic'],
  description: 'A vibrant and dynamic world full of bold characters, thrilling adventures, and captivating stories. Explore the myriad facets of BoldLand, from neon-lit cityscapes to dramatic royal courts.',
  shortDescription: 'A world of bold adventures and characters.',
  longDescription: 'BoldLand is a multifaceted realm offering a diverse range of experiences. Engage in daring adventures, uncover intricate stories, and interact with a cast of unique characters. Whether you seek cyberpunk thrills, romantic escapades, or epic fantasy, BoldLand has something for everyone. Its rich lore and evolving narratives provide endless opportunities for exploration and engagement.',
  tone: ['Exciting', 'Dramatic', 'Adventurous'],
  genres: ['Adventure', 'Action', 'Romance', 'Drama', 'Sci-Fi', 'Fantasy'],
  themes: ['Courage', 'Discovery', 'Intrigue', 'Innovation'],
  vibes: ['Dynamic', 'Immersive', 'Expansive'],
  eras: ['Modern', 'Futuristic', 'Historical Mix'],
  locations: ['Neon City', 'Royal Palace', 'Mystic Islands', 'Corporate Towers'],
  characters: charactersCollection?.gems as Gem[] || [],
  adventures: adventuresCollection?.gems as Gem[] || [],
  stories: storiesCollection?.gems as Gem[] || [],
  scenes: scenesCollection?.gems as Gem[] || [],
};
