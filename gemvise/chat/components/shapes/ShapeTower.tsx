import { type FC } from 'react';
import Image from 'next/image';

export type ShapeVariant = 
  | 'dark-light-dark'
  | 'dark-light'
  | 'light-dark'
  | 'pink-purple-pink'
  | 'pink-purple'
  | 'purple-pink-purple'
  | 'purple-pink';

interface ShapeTowerProps {
  variant?: ShapeVariant;
  className?: string;
}

const getIconPath = (variant: ShapeVariant) => {
  const iconMap = {
    'dark-light-dark': '/icons/ICON-DARK-LIGHT-DARK.png',
    'dark-light': '/icons/ICON-DARK-LIGHT.png',
    'light-dark': '/icons/ICON-LIGHT-DARK-LIGHT.png',
    'pink-purple-pink': '/icons/ICON-PINK-PURPLE-PINK.png',
    'pink-purple': '/icons/ICON-PINK-PURPLE.png',
    'purple-pink-purple': '/icons/ICON-PURPLE-PINK-PURPLE.png',
    'purple-pink': '/icons/ICON-PURPLE-PINK.png'
  };
  return iconMap[variant];
};

const getGradientPath = (variant: ShapeVariant) => {
  const gradientMap = {
    'dark-light-dark': '/gradients/named/GV-Gradient-Dark-Light-Dark.png',
    'dark-light': '/gradients/named/GV-Gradient-Dark-Light.png',
    'light-dark': '/gradients/named/GV-Gradient-Light-Dark.png',
    'pink-purple-pink': '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
    'pink-purple': '/gradients/named/GV-Gradient-Pink-Purple.png',
    'purple-pink-purple': '/gradients/named/GV-Gradient-Purple-Pink-Purple.png',
    'purple-pink': '/gradients/named/GV-Gradient-Purple-Pink.png'
  };
  return gradientMap[variant];
};

const ShapeTower: FC<ShapeTowerProps> = ({ 
  variant = 'dark-light-dark',
  className = ''
}) => {
  const iconPath = getIconPath(variant);
  const gradientPath = getGradientPath(variant);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Background Square */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <Image
          src={gradientPath}
          alt=""
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Tower Elements */}
      <div className="relative w-full h-full">
        {Array.from({ length: 12 }).map((_, index) => {
          const scale = Math.pow(0.9, index);
          const opacity = 1 - (index * 0.05);
          
          return (
            <div
              key={index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `scale(${scale})`,
                opacity
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={iconPath}
                  alt=""
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeTower;
