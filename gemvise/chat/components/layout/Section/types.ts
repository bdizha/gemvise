import { ReactNode } from 'react';
import { GradientTheme } from './GradientSection';

export type SectionVariant = 'default' | 'gradient' | 'values';

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
}
