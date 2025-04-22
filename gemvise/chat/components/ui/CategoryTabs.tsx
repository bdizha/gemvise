'use client';

import React from 'react';
import { categories } from '@/data/categories';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

interface CategoryTabsProps {
  selectedCategories: string[];
  onToggle: (categoryId: string) => void;
  showIcons?: boolean;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  selectedCategories,
  onToggle,
  showIcons = true
}) => {
  return (
    <div className="flex overflow-x-auto gap-3 pb-4 no-scrollbar">
      {categories.map(({ id, label }) => {
        const isSelected = selectedCategories.includes(id);
        return (
          <button
            key={id}
            onClick={() => onToggle(id)}
            className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full border transition-all duration-300
              ${isSelected 
                ? 'border-white/50 bg-white/10 text-white' 
                : 'border-white/20 hover:border-white/40 text-white/80'
              }`}
          >
            <span>{label}</span>
            {showIcons && (
              <span className="ml-2">
                {isSelected ? (
                  <CheckIcon className="h-4 w-4" />
                ) : (
                  <PlusIcon className="h-4 w-4" />
                )}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;
