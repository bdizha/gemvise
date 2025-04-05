'use client';

import Image from 'next/image';
import Link from 'next/link';
import HomePage from '@/components/pages/HomePage';

const featuredGems = [
  {
    id: 'einstein',
    name: 'Albert Einstein',
    role: 'Theoretical Physicist & Visionary',
    image: '/images/gems/einstein.webp',
    description: 'Revolutionary physicist who reshaped our understanding of space, time, and the universe. Explore profound insights and scientific breakthroughs! 🌟🔬',
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    role: 'Inventor & Electrical Pioneer',
    image: '/images/gems/tesla.webp',
    description: 'Brilliant inventor who illuminated the world with AC power. Discuss innovation, energy, and the future of technology! ⚡💡',
  },
  {
    id: 'curie',
    name: 'Marie Curie',
    role: 'Nobel Laureate & Research Pioneer',
    image: '/images/gems/curie.webp',
    description: 'Groundbreaking scientist who discovered radioactivity. Explore persistence, discovery, and scientific excellence! 🔬✨',
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    role: 'Renaissance Polymath',
    image: '/images/gems/da-vinci.webp',
    description: 'Universal genius spanning art and science. Delve into creativity, innovation, and multidisciplinary mastery! 🎨📚',
  },
];

export default function Home() {
  return <HomePage />;
}
