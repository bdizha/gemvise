'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface GemCardProps {
  id: string;
  name: string;
  expertise: string[];
  imageUrl: string;
  description: string;
  onSelect: () => void;
}

const GemCard = ({ id, name, expertise, imageUrl, description, onSelect }: GemCardProps) => {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    onSelect();
  };

  return (
    <div 
      onClick={handleClick}
      className="card group relative flex flex-col overflow-hidden rounded-lg p-6 cursor-pointer hover:scale-[1.02] transition-all duration-200"
    >
      <div className="relative h-48 w-full mb-6">
        <Image
          src={imageError ? '/gems/placeholder.svg' : imageUrl}
          alt={name}
          className="object-cover rounded-lg"
          fill
          onError={() => setImageError(true)}
        />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:gradient-text transition-all duration-200">
          {name}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.map((skill) => (
            <span
              key={skill}
              className="mono-tag px-2 py-1 text-xs rounded-full border border-border"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="text-secondary text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default GemCard;
