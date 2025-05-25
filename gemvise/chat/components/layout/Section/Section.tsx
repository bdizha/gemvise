'use client';

import React, { type ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '../../../utils/utils';
import { Grid } from '../Grid';
import { Slider } from '../Slider';
import { type GridItem } from '../Grid/types';
import { cva, type VariantProps } from 'class-variance-authority';

export type SectionVariant = 
  | 'default'
  | 'gradient'
  | 'hero'
  | 'values'
  | 'slider'
  | 'grid'
  | 'transparent'
  | 'profile'
  | 'explore';

type GradientType = 
  | 'dark'
  | 'light'
  | 'dark-light'
  | 'light-dark'
  | 'dark-light-dark'
  | 'light-dark-light';

interface SectionValue {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface GemCard {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
  category?: string;
}

const sectionVariants = cva(
  'relative w-full',
  {
    variants: {
      variant: {
        default: 'px-6 md:px-16 py-16 md:py-24 rounded-3xl md:rounded-[56px] mb-8 md:mb-16 overflow-hidden',
        gradient: 'px-6 md:px-16 py-16 md:py-24 rounded-3xl md:rounded-[56px] mb-8 md:mb-16 overflow-hidden',
        hero: 'min-h-[50vh] rounded-3xl md:rounded-[56px] mb-8 md:mb-16 overflow-hidden',
        values: 'px-6 md:px-16 py-16 md:py-24 rounded-3xl md:rounded-[56px] mb-8 md:mb-16 overflow-hidden',
        slider: 'px-0 py-8 mb-8',
        grid: 'px-0 py-8 mb-8',
        transparent: 'px-0 py-8 bg-transparent',
        profile: 'min-h-[50vh] rounded-3xl md:rounded-[56px] mb-8 md:mb-16 overflow-hidden',
        explore: 'py-16 md:py-24',
      },
      gradient: {
        dark: 'bg-gradient-dark',
        light: 'bg-gradient-light',
        'dark-light': 'bg-gradient-dark-light',
        'light-dark': 'bg-gradient-light-dark',
        'dark-light-dark': 'bg-gradient-dark-light-dark',
        'light-dark-light': 'bg-gradient-light-dark-light',
      },
      contentWidth: {
        full: 'max-w-full',
        container: 'max-w-[1074px] mx-auto',
        narrow: 'max-w-[768px] mx-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      gradient: 'light-dark',
      contentWidth: 'container',
    }
  }
);

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  tag?: string;
  title?: string;
  description?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  
  // Hero specific props
  heroImageUrl?: string;
  heroImageAlt?: string;
  heroOverlay?: string;
  heroContentPosition?: 'center' | 'bottom-left' | 'bottom-center' | 'top-center' | 'top-left';
  
  // Grid specific props
  items?: GridItem[];
  gridColumns?: number | Record<string, number>;
  gridVariant?: 'default' | 'compact' | 'masonry';
  
  // Slider specific props
  sliderTitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  sliderSpaceBetween?: number;
  
  // Values specific props
  values?: SectionValue[];
  
  // Gems specific props (legacy support)
  gems?: GemCard[];
  onGemClick?: (gem: GemCard) => void;
}

const Section: React.FC<SectionProps> = ({
  variant = 'default',
  gradient = 'light-dark',
  contentWidth = 'container',
  tag,
  title,
  description,
  className,
  style,
  children,
  
  // Hero props
  heroImageUrl,
  heroImageAlt,
  heroOverlay = 'bg-black/50',
  heroContentPosition = 'bottom-center',
  
  // Grid props
  items,
  gridColumns,
  gridVariant = 'default',
  
  // Slider props
  sliderTitle,
  viewAllHref,
  viewAllLabel = 'View all',
  sliderSpaceBetween,
  
  // Values props
  values,
  
  // Legacy gems support
  gems,
  onGemClick,
}) => {
  // Convert legacy gems to GridItems if needed
  const gridItems = items || (gems?.map(gem => ({
    id: gem.id,
    title: gem.title || '',
    description: gem.description || 'No description available',
    imageUrl: gem.imageUrl,
    subtitle: gem.category,
    buttonText: 'Chat Now',
    onClick: () => onGemClick?.(gem)
  })));

  const isTransparent = variant === 'transparent' || variant === 'slider' || variant === 'explore';

  // Render header content (tag, title, description)
  const renderHeader = () => {
    if (!tag && !title && !description) return null;
    
    return (
      <div className="mb-8 md:mb-12">
        {tag && <p className="text-sm font-semibold leading-6 text-white/70 mb-2">{tag}</p>}
        {title && <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white/48 mb-4">{title}</h2>}
        {description && <div className="text-base leading-7 text-white/60 max-w-prose">{description}</div>}
      </div>
    );
  };
  
  // Render hero section (will also be used by 'profile' variant for now)
  const renderHeroOrProfile = () => {
    const positionClasses = {
      'center': 'items-center justify-center text-center',
      'bottom-left': 'items-end justify-start text-left pb-12 md:pb-16 px-8 md:px-12',
      'bottom-center': 'items-end justify-center text-center pb-12 md:pb-16',
      'top-center': 'items-start justify-center text-center pt-12 md:pt-16',
      'top-left': 'items-start justify-start text-left pt-12 md:pt-16 px-8 md:px-12',
    };
    
    return (
      <section 
        className={cn(sectionVariants({ variant, gradient, contentWidth }), "h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl md:rounded-[56px]", className)}
        style={style}
      >
        {heroImageUrl && (
          <>
            <Image 
              src={heroImageUrl} 
              alt={heroImageAlt || title || 'Hero image'} 
              fill 
              className="object-cover z-0" 
              priority 
            />
            <div className={`absolute inset-0 z-10 ${heroOverlay}`} />
          </>
        )}
        
        <div className={`relative z-20 flex h-full w-full ${positionClasses[heroContentPosition]}`}>
          <div className="max-w-prose">
            {renderHeader()} {/* Hero might also want a header */} 
            {children} {/* Children are placed here for hero content */}
          </div>
        </div>
      </section>
    );
  };
  
  // Render values grid
  const renderValues = () => {
    if (!values || values.length === 0) return null;
    
    return (
      <section className={cn(sectionVariants({ variant, gradient, contentWidth }), className)} style={style}>
        {renderHeader()}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-4 p-6 rounded-3xl bg-white/10 backdrop-blur-sm">
              {value.icon && <div className="text-white/48 mb-2">{value.icon}</div>}
              <h3 className="text-xl font-semibold text-white/64">{value.title}</h3>
              <p className="text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
        
        {children}
      </section>
    );
  };
  
  // Main render switch or logic
  let content;
  if (variant === 'hero' || variant === 'profile') {
    content = renderHeroOrProfile();
  } else if (variant === 'explore') {
    content = (
      <section className={cn(sectionVariants({ 
        variant, 
        gradient: null, 
        contentWidth 
      }), className)} style={style}>
        {renderHeader()} 
        {gridItems && gridItems.length > 0 ? (
          <Slider 
            items={gridItems} 
            title={sliderTitle} 
            viewAllHref={viewAllHref}
            viewAllLabel={viewAllLabel}
            spaceBetween={sliderSpaceBetween}
            cardVariant="world" 
            showNavigation={true}
            className="mt-8" 
          />
        ) : children ? <div className="mt-8">{children}</div> : null} 
      </section>
    );
  } else if (variant === 'values') {
    content = renderValues();
  } else if (variant === 'slider') {
    content = gridItems ? (
      <section className={cn(sectionVariants({ 
        variant, 
        gradient: null, 
        contentWidth 
      }), className)} style={style}>
        {renderHeader()}
        <Slider 
          items={gridItems} 
          title={sliderTitle} 
          viewAllHref={viewAllHref}
          viewAllLabel={viewAllLabel}
          spaceBetween={sliderSpaceBetween}
          showNavigation={true}
        />
        {children}
      </section>
    ) : children;
  } else if (variant === 'grid') {
    content = gridItems ? (
      <section className={cn(sectionVariants({ variant, gradient, contentWidth }), className)} style={style}>
        {renderHeader()}
        <Grid 
          items={gridItems} 
          columns={gridColumns}
          variant={gridVariant}
          showAnimation={true}
        />
        {children}
      </section>
    ) : children;
  } else {
    content = (
      <section className={cn(sectionVariants({ variant, gradient, contentWidth }), className)} style={style}>
        {renderHeader()}
        {children}
      </section>
    );
  }

  return content;
};

export default Section;
