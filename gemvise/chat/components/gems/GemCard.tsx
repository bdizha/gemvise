'use client';

import React from 'react';
import type { GemCardProps } from '@/types/gems';

const GemCard: React.FC<GemCardProps> = ({ gem, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick(gem.id);
  };

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
      onClick={handleClick}
      data-testid="gem-card"
    >
      <div className="relative h-48">
        <img
          src={gem.imageUrl}
          alt={gem.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{gem.name}</h3>
          <p className="text-sm opacity-90">{gem.title}</p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">{gem.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <span>{gem.followers?.toLocaleString() ?? 0} followers</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>{gem.chatCount?.toLocaleString() ?? 0} chats</span>
          </div>
        </div>
        {gem.expertise && gem.expertise.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {gem.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GemCard;
