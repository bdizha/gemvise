'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Navigation } from 'swiper/modules';
import { cn } from '../../../utils/utils';
import { type GridItem } from '../Grid/types';
import { Card, type CardVariant as BaseCardVariant } from '../Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export interface SliderProps {
  items: GridItem[];
  title?: string;
  className?: string;
  cardVariant?: 'default' | 'world' | 'character' | 'adventure' | 'story' | 'scene' | 'collection' | 'media' | 'transparent';
  showAnimation?: boolean;
  showNavigation?: boolean;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  loop?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
}

// Navigation buttons component
const NavigationButtons = () => {
  const swiper = useSwiper();
  const [, setUpdate] = useState(0);

  useEffect(() => {
    const handleSlideChange = () => {
      setUpdate(prev => prev + 1);
    };
    swiper.on('slideChange', handleSlideChange);
    handleSlideChange();
    return () => {
      swiper.off('slideChange', handleSlideChange);
    };
  }, [swiper]);

  return (
    <>
      {!swiper.isBeginning && (
        <button 
          onClick={() => swiper.slidePrev()} 
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer inline-flex items-center justify-center rounded-full bg-white/10 text-white/48 hover:bg-white/20 transition-colors p-2.5"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 stroke-2" />
        </button>
      )}
      {!swiper.isEnd && (
        <button 
          onClick={() => swiper.slideNext()} 
          className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer inline-flex items-center justify-center rounded-full bg-white/10 text-white/48 hover:bg-white/20 transition-colors p-2.5"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 stroke-2" />
        </button>
      )}
    </>
  );
};

const Slider: React.FC<SliderProps> = ({
  items,
  title,
  className,
  cardVariant = 'default',
  showAnimation = true,
  showNavigation = true,
  slidesPerView = 'auto',
  spaceBetween = 16,
  loop = false,
  viewAllHref,
  viewAllLabel = 'View all'
}) => {
  if (!items || items.length < 1) return null;

  // Filter out items without href if needed
  const displayableItems = items.filter(item => item.id);

  if (displayableItems.length < 1) return null;

  const getResolvedCardVariant = (itemSpecificVariant?: string): BaseCardVariant => {
    const currentVariant = itemSpecificVariant || cardVariant; // Prioritize item's variant

    // Check if currentVariant is a valid BaseCardVariant directly
    const baseVariants: BaseCardVariant[] = ['default', 'world', 'character', 'adventure', 'story', 'scene', 'collection', 'media', 'transparent'];
    if (baseVariants.includes(currentVariant as BaseCardVariant)) {
      return currentVariant as BaseCardVariant;
    }

    // Add any specific mappings if Slider uses different names than Card
    // For example, if Slider had a variant 'featuredGem' that maps to Card's 'default'
    // switch (currentVariant) {
    //   case 'featuredGem':
    //     return 'default';
    // }

    return 'default'; // Fallback for any unmapped/invalid variants
  };

  return (
    <div className={cn('w-full', className)}>
      {(title || viewAllHref) && (
        <div className="flex items-center justify-between mb-8">
          {title && (
            <h2 className="font-sans text-lg md:text-xl font-bold text-white/64">
              {title}
            </h2>
          )}
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/48 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              {viewAllLabel}
            </Link>
          )}
        </div>
      )}
      
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          loop={loop}
          className="!pb-4"
        >
          {displayableItems.map((item) => {
            const resolvedVariant = getResolvedCardVariant(item.cardVariant);
            return (
              <SwiperSlide key={item.id} className="!h-auto max-w-[280px] xs:max-w-[320px] sm:max-w-[340px] md:max-w-[360px]">
                <Card
                  variant={resolvedVariant}
                  item={item}
                  href={item.href}
                  onClick={item.onClick}
                  hover="scale"
                  layout="flex-col"
                  size="none" // Keep size none as Card will handle padding for 'world'
                  className="h-full"
                  imageOptions={{
                    // Let Card component decide image position based on its variant logic
                    // Only override aspect ratio if needed, for example, for character cards
                    aspectRatio: resolvedVariant === 'character' ? 'aspect-[3/4]' : 'aspect-[16/9]',
                    showImage: true,
                    // Do NOT pass 'position' here, Card.tsx will set it for 'world' variant
                  }}
                  metadata={{
                    showTag: true,
                    showTitle: true,
                    showSubtitle: true,
                    showDescription: true,
                    showButton: Boolean(item.buttonText),
                    showStats: true,
                    // Pass item.cardVariant to check for scene for character display
                    showCharacters: (item.cardVariant || cardVariant) === 'scene'
                  }}
                />
              </SwiperSlide>
            );
          })}
          {showNavigation && displayableItems.length > 3 && <NavigationButtons />}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
