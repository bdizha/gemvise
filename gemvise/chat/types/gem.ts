export interface Gem {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  followers: number;
  expertise: string[];
  chatCount?: number;
  energyLevel?: number;
}
