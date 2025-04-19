import React from 'react';
import { type Gem } from '@/types/gems';
import GemGrid from '@/components/gems/GemGrid';
import DefaultSection from './DefaultSection';

interface CategorySectionProps {
  name: string;
  gems: Gem[];
  onGemClick: (gem: Gem) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ name, gems, onGemClick }) => {
  return (
    <div className="overflow-hidden">
      <GemGrid gems={gems} onGemClick={onGemClick} className="py-8" />
    </div>
  );
};

export default CategorySection;
