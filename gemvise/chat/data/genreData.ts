// @/data/genreData.ts
import { TagIcon, FilmIcon, BookOpenIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline'; // Example icons

export interface Genre {
  id: string;
  name: string;
  href: string;
  icon?: React.ElementType | string;
  imageUrl?: string;
  description?: string; // Optional
}

export const genres: Genre[] = [
  { id: 'fantasy', name: 'Fantasy', href: '/explore?genre=fantasy', icon: PuzzlePieceIcon },
  { id: 'sci-fi', name: 'Sci-Fi', href: '/explore?genre=sci-fi', icon: FilmIcon },
  { id: 'mystery', name: 'Mystery', href: '/explore?genre=mystery', icon: BookOpenIcon },
  { id: 'adventure', name: 'Adventure', href: '/explore?genre=adventure', icon: TagIcon },
  { id: 'romance', name: 'Romance', href: '/explore?genre=romance', icon: PuzzlePieceIcon },
  { id: 'horror', name: 'Horror', href: '/explore?genre=horror', icon: FilmIcon },
];
