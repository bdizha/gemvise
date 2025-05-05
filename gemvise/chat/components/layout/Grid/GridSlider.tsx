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
  username: string;
  chatCount?: number;
  followers?: number;
  likes?: number;
  fire?: number;
}

const SliderCard: React.FC<SliderCardProps> = ({
  href,
  imageSrc,
  title,
  description,
  name,
  username,
  chatCount,
  followers,
  likes,
  fire,
}) => (
  <div className="relative flex flex-col w-full text-left p-3 pb-6 md:pb-5 rounded-[40px] hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer bg-gradient-dark-light">
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
        <h3 className="text-l font-bold mb-1 text-foreground">{title}</h3>
        <div className="text-muted font-normal text-sm truncate mb-1">By @{username}</div>
        <p className="line-clamp-2 text-sm text-ellipsis overflow-hidden whitespace-normal break-anywhere text-muted mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted">
              <path d="M21.5 12c0-5-3.694-8-9.5-8s-9.5 3-9.5 8c0 1.294.894 3.49 1.037 3.83l.037.092c.098.266.49 1.66-1.074 3.722 2.111 1 4.353-.644 4.353-.644 1.551.815 3.397 1 5.147 1 5.806 0 9.5-3 9.5-8Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <p className="text-sm text-muted">{formatNumber(chatCount)}</p>
          </div>
          <div className="flex items-center space-x-1">
            <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-muted">{formatNumber(followers)}</p>
          </div>
          <div className="flex items-center space-x-1">
            <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted">
              <path d="M12 2.5c.3 0 .5.1.7.3l2.8 2.8c1.3 1.3 2.5 2.5 3.8 3.8 1.1 1.1 1.7 2.6 1.7 4.1 0 3.1-2.5 5.6-5.6 5.6-1.2 0-2.4-.4-3.4-1.1-1 .7-2.2 1.1-3.4 1.1-3.1 0-5.6-2.5-5.6-5.6 0-1.5.6-3 1.7-4.1 1.3-1.3 2.5-2.5 3.8-3.8l2.8-2.8c.2-.2.5-.3.7-.3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-muted">{formatNumber(likes)}</p>
          </div>
          <div className="flex items-center space-x-1">
            <svg viewBox="0 0 24 24" fill="none" width="14px" height="14px" className="text-muted">
              <path d="M12 2c.3-.1.6 0 .8.3l2.1 4.2c.1.3.4.5.7.5l4.7.7c.7.1 1 1 .5 1.5l-3.4 3.3c-.2.2-.3.5-.3.8l.8 4.7c.1.7-.6 1.2-1.2.9l-4.2-2.2c-.3-.1-.6-.1-.8 0l-4.2 2.2c-.6.3-1.3-.2-1.2-.9l.8-4.7c.1-.3-.1-.6-.3-.8L2.2 9.2c-.5-.5-.2-1.4.5-1.5l4.7-.7c.3 0 .6-.2.7-.5L10.2 2c.2-.3.5-.4.8-.3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-muted">{formatNumber(fire)}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NavigationButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button onClick={() => swiper.slidePrev()} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-foreground/10 backdrop-blur-[8px] transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer hover:bg-foreground/20">
        <ChevronLeftIcon className="text-foreground w-[30px] h-[30px] stroke-2" />
      </button>
      <button onClick={() => swiper.slideNext()} className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-foreground/10 backdrop-blur-[8px] transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer hover:bg-foreground/20">
        <ChevronRightIcon className="text-foreground w-[30px] h-[30px] stroke-2" />
      </button>
    </>
  );
};

const GridSlider: React.FC<SliderProps> = ({ title, cards }) => {
  if (!cards || cards.length < 4) return null;
  return (
    <section className="block">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative">
          <div className="md:px-5">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>
              <Link
                href={`/category/${title.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium border-solid border rounded-full border-border text-muted hover:text-foreground transition-colors duration-200"
              >
                View All
              </Link>
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
                  <Link href={card.href} className="block">
                    <SliderCard {...card} />
                  </Link>
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
