import type { Gem } from './gems';

export type SliderVariant = 'pyramid' | 'concave';
export type TableLayout = '2-rows-2-3' | '1-row-2-cols';

export interface SliderGridProps {
  gems: Gem[];
  variant: SliderVariant;
  visibleCount: number;
  currentIndex: number;
  onGemClick?: (gem: Gem) => void;
}

export interface TableGridProps {
  gems: Gem[];
  layout: TableLayout;
  onGemClick?: (gem: Gem) => void;
}

export type GemGridProps = {
  gems: Gem[];
  onGemClick?: (gem: Gem) => void;
} & (
  | { type: 'slider'; variant: SliderVariant; visibleCount: number; currentIndex: number }
  | { type: 'table'; layout: TableLayout }
);
