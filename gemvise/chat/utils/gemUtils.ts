import { worlds } from '@/data/worldData';
import { World, Gem } from '@/types'; // Assuming Gem and World types are in @/types

export const getGemById = (gemId: string): Gem | undefined => {
  if (!gemId) return undefined;

  for (const world of worlds) {
    const allGemsFromWorld: Gem[] = [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || []),
    ];

    const foundGem = allGemsFromWorld.find(gem => gem.id === gemId);
    if (foundGem) {
      return foundGem;
    }
  }
  return undefined;
};
