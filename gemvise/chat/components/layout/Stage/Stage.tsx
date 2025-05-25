import Image from 'next/image';
import React from 'react';

interface StageProps {
  imageUrl: string;
  steps?: number;
  interval?: number; // Percentage, e.g., 20 for 20%
  className?: string;
}

const Stage: React.FC<StageProps> = ({
  imageUrl,
  steps = 4,
  interval = 20,
  className = '',
}) => {
  const imageElements = [];

  for (let i = steps-1; i >= 0; i--) {
    const scaleFactor = 1 - (i * interval) / 100;
    const sizePercentage = scaleFactor * 100;
    const offsetPercentage = (100 - sizePercentage) / 2;

    imageElements.push(
      <div
        key={i}
        className="absolute"
        style={{
          width: `${sizePercentage}%`,
          height: `${sizePercentage}%`,
          top: `${offsetPercentage}%`,
          left: `${offsetPercentage}%`,
        }}
      >
        <Image
          src={imageUrl}
          alt={`Stage image step ${i + 1}`}
          layout="fill"
          objectFit="contain" // Using 'contain' for logos to prevent cropping
          className="rounded-[100%] overflow-hidden" // Optional: if images themselves should be rounded
        />
      </div>
    );
  }

  // Render smaller images on top by reversing the array before mapping
  return (
    <div className={`relative w-full h-full aspect-square ${className}`}>
      {imageElements.reverse()}
    </div>
  );
};

export default Stage;
