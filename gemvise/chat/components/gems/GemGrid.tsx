'use client';

import { type FC } from 'react';
import { type Gem } from '@/types/gems';
import GemCard from './GemCard';

// Import Swiper and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import '@/styles/swiper.css';

type TableLayout = '2-rows-2-3' | '1-row-2-cols';

interface GemGridProps {
  gems: Gem[];
  type?: 'grid' | 'slider';
  className?: string;
  onGemClick?: (gem: Gem) => void;
  layout?: TableLayout;
}

const getTableLayout = (layout: TableLayout) => {
  switch (layout) {
    case '2-rows-2-3':
      return 'grid grid-rows-2 gap-6 h-full' +
        ' [&>*:nth-child(-n+2)]:col-span-1' +
        ' [&>*:nth-child(n+3)]:col-span-1' +
        ' grid-cols-2 first:grid-cols-3';
    case '1-row-2-cols':
      return 'grid grid-cols-2 gap-6';
    default:
      return '';
  }
};

const GemGrid: FC<GemGridProps> = ({ gems = [], type, className = '', onGemClick, layout = '2-rows-2-3' }) => {
  if (!gems?.length) return null;
  if (type === 'slider') {
    return (
      <div className={`relative h-[440px] w-full ${className}`}>
        <Swiper
          modules={[Navigation, Pagination, FreeMode]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView="auto"
          loop
          speed={600}
          grabCursor
          freeMode={{
            enabled: true,
            sticky: false,
            momentum: true,
            momentumRatio: 0.8,
          }}
          className="h-full max-w-7xl mx-auto px-4 py-10"
          breakpoints={{
            320: { slidesPerView: "auto", spaceBetween: 16 },
            640: { slidesPerView: "auto", spaceBetween: 20 },
            1024: { slidesPerView: "auto", spaceBetween: 24 },
            1280: { slidesPerView: "auto", spaceBetween: 24 },
          }}
        >
          {gems.map((gem) => (
            <SwiperSlide key={gem.id}>
              <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  // Table layout
  return (
    <div className={`w-full ${className}`}>
      {gems.map((gem) => (
        <div key={gem.id} className="h-full w-full">
          <GemCard gem={gem} onClick={() => onGemClick?.(gem)} />
        </div>
      ))}
    </div>
  );
};

export default GemGrid;
