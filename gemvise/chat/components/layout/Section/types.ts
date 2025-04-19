import { ReactNode } from 'react';
import { GradientTheme } from './GradientSection';
import { type Gem } from '@/types/gems';

export type SectionVariant = 'default' | 'gradient' | 'hero' | 'featured' | 'category' | 'values';

interface BaseSectionProps {
  variant?: SectionVariant;
  tag?: string;
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
}

interface DefaultSectionProps extends BaseSectionProps {
  variant?: 'default' | 'gradient';
}

interface ValuesSectionProps extends BaseSectionProps {
  variant: 'values';
  values: Array<{ title: string; description: string }>;
}

export interface SectionProps {
  variant?: SectionVariant;
  title?: string;
  description?: string;
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
