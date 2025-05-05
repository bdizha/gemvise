'use client';

import React from 'react';

interface FunnelProps {
  imageUrl: string;
}

const Funnel: React.FC<FunnelProps> = ({ imageUrl }) => {
  const layers = [
    { scale: 1, rotate: 0 },     // 100%
    { scale: 0.80, rotate: 0 },   // 70%
    { scale: 0.60, rotate: 0 }, // 49%
  ];

  return (
    <div className="relative w-full h-full">
      {layers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0 transform-gpu"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `scale(${layer.scale}) rotate(${layer.rotate}deg)`,
            // zIndex: layers.length - index, // Optional: Explicitly set stacking order
          }}
        />
      ))}
    </div>
  );
};

export default Funnel;
