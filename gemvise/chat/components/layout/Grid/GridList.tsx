'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { type GridItem } from './types';
import { cn } from '../../../utils/utils'; 

interface GridListProps {
  items: GridItem[];
  className?: string;
}

const GridList: React.FC<GridListProps> = ({ items, className = '' }) => {
  return (
    <div className={cn('grid gap-4 md:gap-6', className)}>
      {items.map((item) => {
        const cardContent = (
          <div
            className={cn(
              'group relative flex flex-col overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md text-white transition-all duration-300 ease-in-out h-full'
            )}
          >
            {item.imageUrl && (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-3xl">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
              {item.subtitle && (
                <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">
                  {item.subtitle}
                </p>
              )}
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-white/80 line-clamp-3 flex-grow mb-4">
                  {item.description}
                </p>
              )}
              {(item.chatCount !== undefined || item.followers !== undefined || item.likes !== undefined) && (
                <div className="mt-auto pt-4 border-t border-white/10">
                  <dl className="flex justify-between text-xs text-white/70">
                    {item.chatCount !== undefined && (
                      <div className="flex flex-col items-center">
                        <dt className="font-medium">Chats</dt>
                        <dd>{item.chatCount}</dd>
                      </div>
                    )}
                    {item.followers !== undefined && (
                      <div className="flex flex-col items-center">
                        <dt className="font-medium">Followers</dt>
                        <dd>{item.followers}</dd>
                      </div>
                    )}
                    {item.likes !== undefined && (
                      <div className="flex flex-col items-center">
                        <dt className="font-medium">Likes</dt>
                        <dd>{item.likes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
            </div>
          </div>
        );

        const motionProps = {
          key: item.id,
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.3, ease: 'easeOut' },
          whileHover: { scale: 1.03, transition: { duration: 0.2 } },
          whileTap: { scale: 0.98 },
          className: 'h-full',
        };

        if (item.href) {
          return (
            <Link href={item.href} passHref legacyBehavior>
              <motion.a {...motionProps} onClick={item.onClick} aria-label={item.title}>
                {cardContent}
              </motion.a>
            </Link>
          );
        }

        return (
          <motion.div {...motionProps} onClick={item.onClick} role="button" tabIndex={0} aria-label={item.title}>
            {cardContent}
          </motion.div>
        );
      })}
    </div>
  );
};

export default GridList;
