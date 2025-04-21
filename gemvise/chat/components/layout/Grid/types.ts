export interface GridItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: () => void;
}

export interface SliderCardProps {
  title: string;
  description: string;
  imageSrc: string;
  status: string;
  href: string;
  buttonText?: string;
  extraButton?: React.ReactNode;
  transitionDelay?: number;
  videoSrc?: string;
}

export interface SliderProps {
  title: string;
  cards: Array<Omit<SliderCardProps, 'transitionDelay'>>;
}
