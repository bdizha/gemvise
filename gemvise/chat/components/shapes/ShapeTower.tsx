import Image from 'next/image';
import { FC } from 'react';

interface ShapeTowerProps {
  levels?: number;
  baseWidth?: number;
  baseHeight?: number;
  scaleRatio?: number;
  className?: string;
}

const ShapeTower: FC<ShapeTowerProps> = ({
  levels = 3,
  baseWidth = 64,
  baseHeight = 64,
  scaleRatio = 0.64,
  className = ''
}) => {
  const shapes = Array.from({ length: levels }, (_, index) => {
    const scale = Math.pow(scaleRatio, index);
    const width = baseWidth * scale;
    const height = baseHeight * scale;
    
    return {
      width,
      height,
      scale
    };
  });

  return (
    <div className={`relative flex flex-col items-center justify-center p-8 ${className}`} style={{ height: baseHeight, width: baseWidth }}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            zIndex: levels - index,
            width: shape.width,
            height: shape.height,
            transform: `translate(-50%, -50%) ${index % 2 === 1 ? 'scaleX(-1)' : ''}`
          }}
        >
          <Image
            src="/icons/GV-LOGO-02-WOT.png"
            alt={`Tower level ${index + 1}`}
            width={shape.width}
            height={shape.height}
            className="w-auto h-auto"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ShapeTower;
