import React from 'react';
import { type Gem } from '@/types/gems';
import GemList from '@/components/gems/GemList';
import GemGrid from '@/components/gems/GemGrid';

interface FeaturedGemsProps {
  gems: Gem[];
  onGemClick: (gem: Gem) => void;
}

const FeaturedGems: React.FC<FeaturedGemsProps> = ({ gems, onGemClick }) => {
  return (
    <div>
      <div className="hidden md:block">
        <GemGrid gems={gems} onGemClick={onGemClick} />
      </div>
      <div className="md:hidden">
        <GemList gems={gems} onSelect={(gemId) => onGemClick(gems.find(g => g.id === gemId)!)} />
      </div>
    </div>
  );
};

export default FeaturedGems;
