export interface Gem {
  id: string;
  name: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  followers?: number;
  chatCount?: number;
  expertise?: string[];
}

export interface GemCardProps {
  gem: Gem;
  onClick: (gemId: string) => void;
}

export interface GemCategory {
  id: string;
  name: string;
  description: string;
  gems: Gem[];
}
