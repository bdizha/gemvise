'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/utils';
import type { GridItem } from '../Grid/types';
import Stage from '../Stage/Stage'; // Added import

const cardVariants = cva(
  'relative overflow-hidden transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        default: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        world: 'rounded-3xl text-white/64',
        character: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        adventure: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        story: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        scene: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        collection: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        media: 'bg-white/10 backdrop-blur-md rounded-3xl shadow-lg text-white/64',
        transparent: 'bg-transparent',
      },
      size: {
        default: 'p-4',
        sm: 'p-3',
        lg: 'p-6',
        xl: 'p-8',
        none: 'p-0',
      },
      hover: {
        default: 'hover:bg-white/20 hover:shadow-xl',
        scale: 'hover:scale-[1.02] hover:shadow-xl',
        glow: 'hover:shadow-glow hover:shadow-primary/20',
        none: '',
      },
      layout: {
        default: '',
        'flex-col': 'flex flex-col h-full',
        'flex-row': 'flex flex-row h-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      hover: 'default',
      layout: 'default'
    }
  }
);

export interface CardMetadata {
  showTag?: boolean;
  showTitle?: boolean;
  showSubtitle?: boolean;
  showDescription?: boolean;
  showButton?: boolean;
  showStats?: boolean;
  showCharacters?: boolean;
}

export interface CardImageOptions {
  aspectRatio?: string;
  position?: 'top' | 'bottom' | 'left' | 'right' | 'background';
  showOverlay?: boolean;
  overlayClassName?: string;
  showImage?: boolean;
}

export interface CardProps extends VariantProps<typeof cardVariants> {
  item?: GridItem;
  href?: string;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  metadata?: CardMetadata;
  imageOptions?: CardImageOptions;
}

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} 
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> 
));
CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} /> 
));
CardFooter.displayName = "CardFooter";

const CardBase = forwardRef<HTMLDivElement | HTMLAnchorElement, CardProps>( 
  ({
    variant,
    size,
    hover,
    layout,
    item,
    href,
    className,
    contentClassName,
    imageClassName,
    titleClassName,
    subtitleClassName,
    descriptionClassName,
    children,
    onClick,
    metadata = {
      showTag: true,
      showTitle: true,
      showSubtitle: true,
      showDescription: true,
      showButton: true,
      showStats: true,
      showCharacters: false
    },
    imageOptions = {
      aspectRatio: 'aspect-[16/9]',
      position: 'top',
      showOverlay: false,
      showImage: true
    },
    ...props
  }, ref) => {
    if (variant === 'world') {
      imageOptions = {
        ...imageOptions, 
        position: 'background',
        showOverlay: true, 
        overlayClassName: imageOptions.overlayClassName || 'bg-black/40', 
        showImage: true,
      };
      if (size !== 'none') {
        size = 'none'; 
      }
    }

    const {
      aspectRatio = 'aspect-[16/9]',
      position = 'top',
      showOverlay = false,
      overlayClassName,
      showImage = true
    } = imageOptions;
    
    const {
      showTag = true,
      showTitle = true,
      showSubtitle = true,
      showDescription = true,
      showButton = true,
      showStats = true,
      showCharacters = false
    } = metadata;

    const renderImage = () => {
      if (!item?.imageUrl || !showImage) return null;
      
      if (position === 'top' || position === 'bottom') {
        return (
          <div className={cn(
            'relative w-full overflow-hidden', 
            aspectRatio,
            position === 'top' ? 'rounded-t-3xl' : 'rounded-b-3xl',
            imageClassName
          )}>
            <Image
              src={item.imageUrl}
              alt={item.title || 'Card image'}
              fill
              className="object-cover"
            />
            {item.overlayText && (
              <div className="absolute bottom-2 left-2 bg-black/60 text-white/48 text-xs px-2 py-1 rounded-full">
                {item.overlayText}
              </div>
            )}
            {item.status && (
              <div className="absolute top-2 right-2 bg-primary text-white/48 text-xs px-2 py-1 rounded-full">
                {item.status}
              </div>
            )}
          </div>
        );
      }
      
      if (position === 'background') {
        return (
          <div className="absolute inset-0 z-0">
            <Image
              src={item.imageUrl}
              alt={item.title || 'Card image'}
              fill
              className="object-cover"
            />
            {showOverlay && (
              <div className={cn("absolute inset-0 bg-black/30", overlayClassName)} />
            )}
          </div>
        );
      }
      return null;
    };

    const renderContent = () => {
      // If children are provided, render them directly. This allows full customization.
      if (children) {
        return children;
      }
      
      // If no item, nothing to render by default (unless children were passed).
      if (!item) {
        return null;
      }

      // Specific layout for world card content (centered text, etc.)
      if (variant === 'world') {
        return (
          <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 md:p-6 text-center">
            {/* Optional: World icon can be rendered here or handled by children like in WorldCard.tsx */}
            {showTitle && item.title && (
              <h3 className={cn("font-bold text-2xl mb-2", titleClassName)}>{item.title}</h3>
            )}
            {showDescription && item.description && (
              <p className={cn("text-sm", descriptionClassName)}>{item.description}</p>
            )}
            {/* Example Button for World - to be driven by item.buttonText or similar prop */}
            {showButton && item.buttonText && (
               <button className="mt-4 px-4 py-2 bg-primary text-white/48 rounded-full text-sm hover:bg-primary/80 transition-colors">
                 {item.buttonText}
               </button>
            )}
          </div>
        );
      }
      
      // Default content rendering for other card variants
      return (
        <div className={cn("flex flex-col flex-grow", contentClassName, size === 'none' ? 'p-4 md:p-6' : '')}>
          {showTag && item.tag && (
            <span className="text-xs font-semibold text-primary mb-1">{item.tag}</span>
          )}
          {showTitle && item.title && (
            <h3 className={cn("font-bold", titleClassName || "text-lg mb-1 text-white/64")}>{item.title}</h3>
          )}
          {showSubtitle && item.subtitle && (
            <p className={cn("text-sm", subtitleClassName || "text-white/48 mb-2")}>{item.subtitle}</p>
          )}
          {showDescription && item.description && (
            <p className={cn("text-sm flex-grow", descriptionClassName || "text-white/48")}>{item.description}</p>
          )}
          {showButton && item.buttonText && (
            <button className="mt-auto pt-3 px-4 py-2 bg-primary text-white/48 rounded-full text-sm self-start hover:bg-primary/80 transition-colors">
              {item.buttonText}
            </button>
          )}
          {/* Simplified stats example - real stats might need more structure */}
          {showStats && (item.chatCount !== undefined || item.followers !== undefined) && (
            <div className="mt-auto pt-3 flex justify-between text-xs text-white/70 border-t border-white/10">
              {item.chatCount !== undefined && <span>Chats: {item.chatCount}</span>}
              {item.followers !== undefined && <span>Followers: {item.followers}</span>}
            </div>
          )}
        </div>
      );
    };

    const cardInternalContent = (
      <>
        {renderImage()} 
        <div className={cn(
          'relative z-10',
          variant === 'world' ? 'flex flex-col h-full' : '', // Ensure flex-col for world variant content
          variant === 'world' ? 'p-4 md:p-6' : size === 'none' ? '' : cardVariants({ size }).match(/p-\d+|p[x|y]-\d+/g)?.join(' '),
          contentClassName
        )}>
          {variant === 'world' && (
            <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-64 mb-4"> {/* Stage container */}
              <Stage imageUrl={item?.imageUrl || '/worlds/logos/mytherra.png'} />
            </div>
          )}
          {children || renderContent()}
        </div>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>} 
          className={cn(cardVariants({ variant, size, hover, layout }), className)}
          onClick={onClick}
          data-testid="card"
          {...props} 
        >
          {cardInternalContent}
        </Link>
      );
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>} 
        className={cn(cardVariants({ variant, size, hover, layout }), className)}
        onClick={onClick}
        data-testid="card"
        {...props} 
      >
        {cardInternalContent}
      </div>
    );
  }
);

CardBase.displayName = 'Card';

const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
