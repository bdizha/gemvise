import React, { type ReactNode } from 'react';
import { cn } from '../../utils/utils';
import { type GridItem } from './Grid/types'; 
import GridList from './Grid/GridList';     
import GridSlider from './Grid/GridSlider';   
import { type FC } from 'react';

// Defines the styling variants for the section itself
export type SectionVariant = 
  | 'default'
  | 'gradient'
  | 'values'
  | 'centered'
  | 'hero'
  | 'transparent';

// Defines how items within the section are displayed
export type ItemsDisplayVariant = 'grid' | 'slider';

export interface SectionProps {
  variant?: SectionVariant; // For overall section styling
  tag?: string;
  title?: string;
  description?: ReactNode;
  className?: string;
  children?: ReactNode; 
  items?: GridItem[]; 
  itemsDisplay?: ItemsDisplayVariant; // For displaying items as grid or slider
  gridClassName?: string; 
  gridColumns?: number; // Added prop to control grid columns
  sliderSectionTitle?: string; // Title specifically for the slider if needed, otherwise section title is used
  gradient?: 'dark' | 'light' | 'dark-light' | 'light-dark' | 'dark-light-dark' | 'light-dark-light';
  values?: {
    name: string;
    description: string;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
  }[];
  style?: React.CSSProperties;
}

const variantClasses: Record<SectionVariant, string> = {
  default: 'p-6 rounded-3xl flex flex-col gap-3 bg-gradient-dark',
  gradient: 'py-12 md:py-16 bg-gradient-to-b from-background to-background/80',
  values: 'py-12 md:py-16 bg-muted/30',
  centered: 'py-12 md:py-16 text-center bg-gradient-dark rounded-3xl p-6',
  hero: 'py-16 md:py-24 text-center bg-gradient-dark rounded-3xl p-6',
  transparent: 'p-0',
};

const gradientClasses = {
  'dark': 'bg-gradient-dark',
  'light': 'bg-gradient-light',
  'dark-light': 'bg-gradient-dark-light',
  'light-dark': 'bg-gradient-light-dark',
  'dark-light-dark': 'bg-gradient-dark-light-dark',
  'light-dark-light': 'bg-gradient-light-dark-light',
};

const Section: FC<SectionProps> = ({
  variant: sectionVariant = 'default',
  tag,
  title,
  description,
  className,
  children,
  items,
  itemsDisplay,
  gridClassName,
  gridColumns,
  sliderSectionTitle,
  gradient,
  values,
  style,
}) => {
  const baseClass = 'w-full';
  const sectionStyleClasses = variantClasses[sectionVariant] || variantClasses.default;

  return (
    <section
      className={cn(baseClass, sectionStyleClasses, gradient && gradientClasses[gradient], className)}
      style={style}
    >
      <div className="container mx-auto p-4 md:p-8 w-full">
        {(tag || title || description) && (
          <div
            className={cn('mb-8 md:mb-12',
              sectionVariant === 'centered' || sectionVariant === 'hero' ? 'max-w-3xl mx-auto text-center' : 'max-w-xl'
            )}
          >
            {tag && (
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 leading-tight">
                {tag}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {title}
              </h2>
            )}
            {description && (
              typeof description === 'string' ? (
                <p className="text-lg text-muted-foreground leading-tight">{description}</p>
              ) : (
                description
              )
            )}
          </div>
        )}
        
        {/* Conditionally render GridList or GridSlider if items and itemsDisplay are provided */}
        {items && items.length > 0 && (
          <div className="relative">
            {itemsDisplay === 'grid' && (
              <GridList items={items} className={gridClassName} columns={gridColumns} />
            )}
            {itemsDisplay === 'slider' && (
              <GridSlider title={sliderSectionTitle || title || ''} cards={items} />
            )}
          </div>
        )}

        {/* Render values */}
        {values && (
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-theme-foreground leading-tight">
                    {value.name}
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-theme-foreground/60 leading-tight">
                    <p className="flex-auto leading-tight">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Render children if items/itemsDisplay are not used, or if you want to add content alongside grid/slider */}
        {(!items || items.length === 0 || !itemsDisplay) && children}
      </div>
    </section>
  );
};

export default Section;
