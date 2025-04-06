import { ReactNode } from 'react';

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

export type SectionProps = DefaultSectionProps | ValuesSectionProps;
