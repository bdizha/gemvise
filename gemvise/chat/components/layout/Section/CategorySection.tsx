import React from 'react';
import { type Gem } from '@/types/gems';
import GridSlider from '@/components/layout/Grid/GridSlider';
import DefaultSection from './DefaultSection';

interface Category {
  title: string;
  gems: Gem[];
}

interface CategorySectionProps extends React.ComponentProps<'div'> {
  categories: Category[];
  onGemClick: (gem: Gem) => void;
  title?: string;
  description?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories, onGemClick, title, description }) => {
  return (
    <DefaultSection title={title || ''} description={description || ''}>
      {categories.map((category) => (
        <div key={category.title} className="mb-8">
          <GridSlider
            title={category.title}
            cards={category.gems.map(gem => ({
              title: gem.name || '',
              description: gem.description || '',
              imageSrc: gem.imageUrl,
              status: gem.category || '',
              href: `/chat/${gem.id}`,
              buttonText: 'Chat now'
            }))}
          />
        </div>
      ))}
    </DefaultSection>
  );
};

export default CategorySection;
