export interface GridItem {
  id: string; // Unique identifier
  title: string;
  description: string;
  imageUrl?: string;
  href?: string; // For navigation, primary use in sliders
  onClick?: () => void; // For interaction, primary use in grid lists
  subtitle?: string; // e.g., character's rarity, gem's main genre
  cardVariant?: 'default' | 'character' | 'collection' | 'media' | string; // To allow different card styling
  // Engagement metrics (primarily for slider cards, but can be generic)
  chatCount?: number;
  followers?: number;
  likes?: number;
  fire?: number; // Or any other 'hotness' metric
  // Additional optional fields
  status?: string; // e.g. 'New', 'Popular'
  buttonText?: string; // For a call to action button on the card
  videoSrc?: string; // If a card can play a video preview
  // Any other specific data attributes you might need for card rendering
  attributes?: Record<string, any>; // For generic extra data
}

export interface SliderProps {
  title: string;
  cards: GridItem[]; // Now uses the standardized GridItem
}
