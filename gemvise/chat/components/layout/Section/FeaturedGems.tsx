import React from 'react';
import { type Gem } from '@/types/gems';
import Card from '@/components/ui/card/Card';
import List from '@/components/ui/card/List';
import DefaultSection from './DefaultSection';

interface FeaturedGemsProps {
  gems: Gem[];
  onGemClick: (gem: Gem) => void;
  title?: string;
  description?: string;
}

const FeaturedGems: React.FC<FeaturedGemsProps> = ({ gems, onGemClick, title, description }) => {
  return (
    <DefaultSection title={title || ''} description={description || ''}>
      <div className="w-full">
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gems.map((gem) => (
            <Card 
              key={gem.id} 
              gem={gem} 
              onClick={() => onGemClick(gem)}
            />
          ))}
        </div>
        <div className="md:hidden">
          <List 
            gems={gems} 
            onSelect={(gemId) => onGemClick(gems.find(g => g.id === gemId)!)}
          />
        </div>
      </div>
    </DefaultSection>
  );
};

export default FeaturedGems;
