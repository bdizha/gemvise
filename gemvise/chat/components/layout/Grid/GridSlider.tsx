'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Navigation, Pagination } from 'swiper/modules';
import { type SliderProps } from './types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const formatNumber = (num: number | undefined): string => {
  if (!num) return '0';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};

interface SliderCardProps {
  href: string;
  imageSrc?: string;
  title: string;
  description: string;
  name: string;
  chatCount?: number;
  followers?: number;
}

const SliderCard: React.FC<SliderCardProps> = ({
  href,
  imageSrc,
  title,
  description,
  name,
  chatCount,
  followers,
}) => (
  <Link href={href} className="block">
    <div className="relative flex flex-col w-full text-left p-3 pb-6 md:pb-5 rounded-[40px] hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-light-dark bg-no-repeat bg-cover bg-center blur-[12px] brightness-110" />
      <div className="relative z-10">
        <div className="relative w-full aspect-[16/9] mb-4 rounded-[32px] overflow-hidden">
          {imageSrc && (
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
          <h3 className="text-l font-bold mb-1 text-gray-900 dark:text-white">{title}</h3>
          <div className="text-gray-500 font-normal text-sm truncate mb-1">By @{name}</div>
          <p className="line-clamp-2 text-sm text-ellipsis overflow-hidden whitespace-normal break-anywhere text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted-foreground">
                <path d="M21.5 12c0-5-3.694-8-9.5-8s-9.5 3-9.5 8c0 1.294.894 3.49 1.037 3.83l.037.092c.098.266.49 1.66-1.074 3.722 2.111 1 4.353-.644 4.353-.644 1.551.815 3.397 1 5.147 1 5.806 0 9.5-3 9.5-8Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
              </svg>
              <p className="text-sm text-muted-foreground">{formatNumber(chatCount)}</p>
            </div>
            <div className="flex items-center space-x-1">
              <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted-foreground">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-sm text-muted-foreground">{formatNumber(followers)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const NavigationButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 backdrop-blur-[8px] transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer hover:bg-white/20">
        <ChevronLeftIcon className="text-white w-[30px] h-[30px] stroke-2" />
      </button>
      <button onClick={() => swiper.slideNext()} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/10 backdrop-blur-[8px] transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer hover:bg-white/20">
        <ChevronRightIcon className="text-white w-[30px] h-[30px] stroke-2" />
      </button>
    </>
  );
};

const GridSlider: React.FC<SliderProps> = ({ title, cards }) => {
  return (
    <section className="block">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative">
          <div className="md:px-5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#0f1111] dark:text-white">
                {title}
              </h2>
              <button
                onClick={() => window.location.href = `/category/${title.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium border-solid border rounded-full border-white/20 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                View All
              </button>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
                enabled: true,
                disabledClass: 'opacity-50 cursor-not-allowed'
              }}
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
              <NavigationButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSlider;
