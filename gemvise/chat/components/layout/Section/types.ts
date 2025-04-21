import { ReactNode } from 'react';
import { GradientTheme } from './GradientSection';
import { type Gem } from '@/types/gems';

export type SectionVariant = 'default' | 'gradient' | 'hero' | 'featured' | 'slider' | 'values' | 'benefits';

interface Benefit {
  emoji: string;
  title: string;
  description: string;
}

interface BaseSectionProps {
  variant?: SectionVariant;
  tag?: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
  gradient?: GradientTheme;
  benefits?: Benefit[];
}

interface DefaultSectionProps extends BaseSectionProps {
  variant?: 'default' | 'gradient';
}

interface ValuesSectionProps extends BaseSectionProps {
  variant: 'values';
  values: Array<{ title: string; description: string }>;
}

export interface GemCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  trending?: GemCard[];
  popular?: GemCard[];
  discover?: GemCard[];
  gradient?: GradientTheme;
  variant?: SectionVariant;
  title: string;
  description: string;
  tag?: string;
  className?: string;
  children?: ReactNode;
  values?: Array<{ title: string; description: string }>;
  theme?: GradientTheme;
  isHero?: boolean;
  gems?: Gem[];
  onGemClick?: (gem: Gem) => void;
  currentSlide?: number;
  carouselContent?: Array<{
    src: string;
    alt: string;
    description: string;
  }>;
  onSearch?: (query: string) => void;
}
