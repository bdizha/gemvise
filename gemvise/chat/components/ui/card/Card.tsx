'use client';

import { type FC } from 'react';
import { motion } from 'framer-motion';
import ShapeTower from '@/components/shapes/ShapeTower';
import type { GemCardProps } from '@/types/gems';

export type CardVariant = 'default' | 'slider' | 'gradient' | 'tower';

interface CardProps extends GemCardProps {
  variant?: CardVariant;
}

const cardStyles: Record<CardVariant, string> = {
  default: 'bg-white dark:bg-gray-800 rounded-[24px] p-6 shadow-sm hover:shadow-md',
  slider: 'group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-theme-surface/50 px-8 pb-8 pt-32 backdrop-blur-sm hover:bg-theme-surface/70',
  gradient: 'relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900',
  tower: 'relative w-full h-[360px] rounded-[32px] overflow-hidden border border-border/10'
};

const Card: FC<CardProps> = ({ gem, variant = 'default', onClick }) => {
  if (!gem) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };

  const renderContent = () => {
    switch (variant) {
      case 'tower':
        return (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <ShapeTower 
                variant={'dark-light-dark'}
                className="w-full h-full" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
            <div className="absolute inset-x-0 bottom-0 p-4 space-y-2.5 backdrop-blur-sm bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-white line-clamp-1">{gem.name}</h3>
                <p className="text-base text-white/90 line-clamp-2 leading-relaxed">{gem.description}</p>
              </div>
              {gem.expertise && (
                <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
                  <div className="flex gap-2 w-max min-w-full py-1">
                    {gem.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="shrink-0 px-3 py-1.5 text-sm font-medium rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        );

      case 'gradient':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-white">{gem.name}</h3>
              <p className="text-white/80">{gem.description}</p>
              {gem.expertise && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {gem.expertise.map((skill, index) => (
                    <span 
                      key={`${skill}-${index}`}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        );

      case 'slider':
        return (
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 text-white">{gem.name}</h3>
            <p className="text-white/80">{gem.description}</p>
            {gem.expertise && (
              <div className="flex flex-wrap gap-2 mt-4">
                {gem.expertise.map((skill, index) => (
                  <span 
                    key={`${skill}-${index}`}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{gem.name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{gem.description}</p>
            {gem.expertise && (
              <div className="flex flex-wrap gap-2 mt-4">
                {gem.expertise.map((skill, index) => (
                  <span 
                    key={`${skill}-${index}`}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <motion.div
      className={`cursor-pointer transition-all duration-300 ${cardStyles[variant]}`}
      onClick={handleClick}
      whileHover={{ scale: variant === 'tower' ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-testid="gem-card"
      data-gem-id={gem.id}
    >
      {renderContent()}
    </motion.div>
  );
};

export default Card;
