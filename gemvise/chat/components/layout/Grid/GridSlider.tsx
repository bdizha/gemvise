'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { type SliderCardProps, type SliderProps } from './types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SliderCard: React.FC<SliderCardProps> = ({
  title,
  description,
  imageSrc,
  status,
  href,
  buttonText = 'Learn more',
  extraButton,
  videoSrc
}) => (
  <Link href={href} className="block">
    <div className="relative flex flex-col w-full text-left p-3 pb-6 md:pb-5 rounded-[40px] hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white bg-gradient-light-dark">
      <div className="relative w-full aspect-[16/9] mb-4 rounded-[32px] overflow-hidden">
        {videoSrc ? (
          <video
            src={videoSrc}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{status}</span>
          {buttonText && (
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-dark dark:text-white rounded-full hover:bg-blue-700 transition-colors">
              {buttonText}
            </button>
          )}
          {extraButton}
        </div>
      </div>
    </div>
  </Link>
);

const GridSlider: React.FC<SliderProps> = ({ title, cards }) => {
  return (
    <section className="block">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative">
          <div className="md:px-5">
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-8 text-[#0f1111] dark:text-white">
              {title}
            </h2>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 }
              }}
              className="w-full"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.title}>
                  <SliderCard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSlider;
