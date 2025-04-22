'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
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
    <div className="relative flex flex-col w-full text-left p-3 pb-6 md:pb-5 rounded-[40px] hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-light-dark bg-no-repeat bg-cover bg-center blur-[12px] brightness-110" />
      <div className="relative z-10">
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
    </div>
  </Link>
);

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
              className="w-full [&_.swiper-button-prev]:!hidden [&_.swiper-button-next]:!hidden"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.title}>
                  <SliderCard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev flex h-[48px] w-[48px] items-center justify-center rounded-[36px] bg-black/50 hover:bg-black/70 transition-all duration-300 absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <ChevronLeftIcon className="text-white" />
            </button>
            <button className="swiper-button-next flex h-[48px] w-[48px] items-center justify-center rounded-[36px] bg-black/50 hover:bg-black/70 transition-all duration-300 absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <ChevronRightIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSlider;
