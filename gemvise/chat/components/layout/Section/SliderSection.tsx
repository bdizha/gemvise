import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface SliderCardProps {
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

const getGradientPath = (index: number): string => {
  const gradients = [
    '/gradients/named/GV-Gradient-Dark-Light.png',
    '/gradients/named/GV-Gradient-Light-Dark.png',
    '/gradients/named/GV-Gradient-Pink-Purple.png',
    '/gradients/named/GV-Gradient-Purple-Pink.png'
  ];
  return gradients[index % gradients.length];
};

const SliderCard: React.FC<SliderCardProps> = ({
  title,
  description,
  imageSrc,
  status,
  href,
  buttonText = 'Learn more',
  extraButton,
  transitionDelay = 0,
  videoSrc
}) => (
  <div 
    className="relative flex flex-col w-[490px] md:w-[350px] text-left md:block p-[12px] pb-[30px] md:pb-[20px] rounded-[60px] md:rounded-[40px] mb-[35px] mr-[40px] md:mr-[30px] shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
  >
    <div className="absolute inset-0 -z-10">
      <Image
        src={getGradientPath(0)}
        alt=""
        fill
        className="object-cover"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
    <div className="relative z-10">
      <div className="w-full md:relative">
        <div className="block relative text-0 mb-[30px] md:mb-[16px] rounded-t-[46px] rounded-b-[32px] md:rounded-[32px] overflow-hidden">
          <div className="relative w-full aspect-[473/187] md:aspect-[350/187]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-soft-light"
              loading="lazy"
            />
            {videoSrc && (
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="group relative h-full w-full block">
                  <div className="absolute top-[-2px] bottom-[-2px] h-auto left-0 w-full">
                    <video 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loop
                      preload="none"
                      playsInline
                      src={videoSrc}
                      className="mix-blend-multiply dark:mix-blend-soft-light"
                    />
                  </div>
                  <div className="absolute inset-0">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-cover transform transition-all duration-250 ease-in-out z-0 group-hover:opacity-0 mix-blend-multiply dark:mix-blend-soft-light"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col w-full md:w-full md:px-[20px] px-[22px] md:pt-[24px]">
        <div className="mb-[10px]">
          <span className="relative inline-block font-[600] text-[14px] md:text-[12px] mb-[0.5em] tracking-[0.02em]">
            <div className="absolute inset-0">
              <Image
                src="/gradients/named/GV-Gradient-Dark-Light.png"
                alt=""
                fill
                className="object-cover mix-blend-screen dark:mix-blend-overlay"
              />
            </div>
            <span className="relative">{status}</span>
          </span>
        </div>
        <div className="flex-grow flex flex-col justify-between min-h-[160px]">
          <div>
            <h2 className="font-alt font-[500] text-[24px] md:pr-0 mb-[10px] tracking-[-0.048em] text-[#0f1111] dark:text-white line-clamp-2">
              {title}
            </h2>
            <p className="font-sans text-[16px] mb-[1em] text-[#5f6b7a] dark:text-[#d5d9d9] line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-[10px] mt-4">
            <a
              href={href}
              className="group relative w-[155px] h-[56px] text-[17px] rounded-[24px] text-center flex items-center justify-center transition-all duration-[0.4s] ease-out-cubic overflow-hidden"
              style={{
                boxShadow: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.20)'
              }}
            >
              <div className="absolute inset-0 transition-opacity duration-300">
                <Image
                  src="/gradients/named/GV-Gradient-Dark-Light.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/gradients/named/GV-Gradient-Light-Dark.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                {buttonText}
              </span>
            </a>
            {extraButton}
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface SliderSectionProps {
  title: string;
  cards: Array<Omit<SliderCardProps, 'transitionDelay'>>;
}

const SliderSection: React.FC<SliderSectionProps> = ({ title, cards }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (!scrollRef.current) return;
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'next' ? 490 : -490;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="block">
      <div className="max-w-[1920px] mx-auto">
        <div className="relative">
          <div className="md:px-[20px]">
            <nav className="flex items-center justify-between relative w-full mb-[50px] md:mb-[30px]">
              <h2 className="font-sans text-[32px] md:pr-0 mb-[10px] md:text-left text-[#0f1111] dark:text-white">
                {title}
              </h2>
              <div className="space-x-[10px] flex items-center text-0 md:hidden">
                <button
                  onClick={() => handleScroll('prev')}
                  className="w-[48px] h-[48px] rounded-full bg-white dark:bg-[#232f3e] flex items-center justify-center hover:bg-[#1D1B1A] hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleScroll('next')}
                  className="w-[48px] h-[48px] rounded-full bg-white dark:bg-[#232f3e] flex items-center justify-center hover:bg-[#1D1B1A] hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </nav>
          </div>

          <div 
            ref={scrollRef}
            className="relative overflow-x-auto scrollbar-hide"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="md:px-[20px] relative pb-8 flex"
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                transform: 'translate3d(0,0,0)'
              }}
            >
              {cards.map((card, index) => (
                <div 
                  className="relative flex flex-col w-[490px] md:w-[350px] text-left md:block p-[12px] pb-[30px] md:pb-[20px] rounded-[60px] md:rounded-[40px] mb-[35px] mr-[40px] md:mr-[30px] shrink-0 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  key={index}
                >
                  <div className="absolute inset-0 -z-10">
                    <Image
                      src={getGradientPath(index)}
                      alt=""
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                  <div className="relative z-10">
                    <div className="w-full md:relative">
                      <div className="block relative text-0 mb-[30px] md:mb-[16px] rounded-t-[46px] rounded-b-[32px] md:rounded-[32px] overflow-hidden">
                        <div className="relative w-full aspect-[473/187] md:aspect-[350/187]">
                          <Image
                            src={card.imageSrc}
                            alt={card.title}
                            fill
                            className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-soft-light"
                            loading="lazy"
                          />
                          {card.videoSrc && (
                            <div className="absolute top-0 left-0 h-full w-full">
                              <div className="group relative h-full w-full block">
                                <div className="absolute top-[-2px] bottom-[-2px] h-auto left-0 w-full">
                                  <video 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    loop
                                    preload="none"
                                    playsInline
                                    src={card.videoSrc}
                                    className="mix-blend-multiply dark:mix-blend-soft-light"
                                  />
                                </div>
                                <div className="absolute inset-0">
                                  <Image
                                    src={card.imageSrc}
                                    alt={card.title}
                                    fill
                                    className="object-cover transform transition-all duration-250 ease-in-out z-0 group-hover:opacity-0 mix-blend-multiply dark:mix-blend-soft-light"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow flex flex-col w-full md:w-full md:px-[20px] px-[22px] md:pt-[24px]">
                      <div className="mb-[10px]">
                        <span className="relative inline-block font-[600] text-[14px] md:text-[12px] mb-[0.5em] tracking-[0.02em]">
                          <div className="absolute inset-0">
                            <Image
                              src="/gradients/named/GV-Gradient-Dark-Light.png"
                              alt=""
                              fill
                              className="object-cover mix-blend-screen dark:mix-blend-overlay"
                            />
                          </div>
                          <span className="relative">{card.status}</span>
                        </span>
                      </div>
                      <div className="flex-grow flex flex-col justify-between min-h-[160px]">
                        <div>
                          <h2 className="font-alt font-[500] text-[24px] md:pr-0 mb-[10px] tracking-[-0.048em] text-[#0f1111] dark:text-white line-clamp-2">
                            {card.title}
                          </h2>
                          <p className="font-sans text-[16px] mb-[1em] text-[#5f6b7a] dark:text-[#d5d9d9] line-clamp-2">
                            {card.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-center space-x-[10px] mt-4">
                          <a
                            href={card.href}
                            className="group relative w-[155px] h-[56px] text-[17px] rounded-[24px] text-center flex items-center justify-center transition-all duration-[0.4s] ease-out-cubic overflow-hidden"
                            style={{
                              boxShadow: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.20)'
                            }}
                          >
                            <div className="absolute inset-0 transition-opacity duration-300">
                              <Image
                                src="/gradients/named/GV-Gradient-Dark-Light.png"
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Image
                                src="/gradients/named/GV-Gradient-Light-Dark.png"
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">
                              {card.buttonText}
                            </span>
                          </a>
                          {card.extraButton}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
export type { SliderCardProps };
