import React from 'react';
import { type SectionProps } from './types';

interface HeroSectionProps extends SectionProps {
  carouselContent?: { src: string; alt: string; description: string }[];
  onSearch?: (value: string) => void;
}

const HeroSection = (props: HeroSectionProps) => {
  const { carouselContent, onSearch, children } = props;
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    if (!carouselContent) return;
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    if (!carouselContent) return;
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  // Auto-advance slides every 5 seconds
  React.useEffect(() => {
    if (!carouselContent) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, carouselContent]);

  return (
    <div className="relative min-h-[600px] w-full">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <div className="absolute inset-0 transition-all duration-500 ease-in-out section-gradient-light-dark opacity-50 blur-[30px]" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col relative">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 py-12 relative z-10">
            <div className="flex-1 text-center text-white relative z-10">
              {carouselContent ? (
                <div className="relative">
                  <div className="transition-opacity duration-500">
                    <img
                      src={carouselContent[currentSlide].src}
                      alt={carouselContent[currentSlide].alt}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="mt-4 text-lg text-white/80">
                      {carouselContent[currentSlide].description}
                    </p>
                  </div>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full"
                  >
                    →
                  </button>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    Connect with AI-Powered Expert Personas
                  </h1>
                  <p className="text-base md:text-lg text-white/80 mb-6">
                    Experience interactive learning through dynamic conversations with AI versions of world-renowned experts.
                  </p>
                </>
              )}
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-4 max-w-md mx-auto relative z-10 backdrop-blur-sm bg-white/10 p-3 rounded-2xl border border-white/20 shadow-xl mt-6">
                <input
                  type="text"
                  onChange={(e) => onSearch?.(e.target.value)}
                  placeholder="Search for an expert..."
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-theme-foreground"
                />
                <button type="submit" className="px-4 py-2 bg-theme-surface text-theme-foreground rounded-lg hover:bg-theme-surface/80">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeroSection;

export const HeroCard = ({ 
  title, 
  description, 
  status = 'available',
  imageSrc,
  videoSrc,
  href,
  buttonText = 'Learn more',
  extraButton
}: {
  title: string;
  description: string;
  status?: string;
  imageSrc: string;
  videoSrc?: string;
  href: string;
  buttonText?: string;
  extraButton?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col w-[490px] md:w-full text-left md:block bg-[#fefdfc] p-3 pb-[30px] md:pb-5 rounded-[60px] md:rounded-[40px] mb-[35px] last:mr-0" 
      style={{ 
        boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="w-full md:relative">
        <span className="block relative mb-[30px] md:mb-4 rounded-t-[46px] rounded-b-[32px] md:rounded-[32px] overflow-hidden inline-block aspect-[473/187] md:aspect-[350/187]">
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
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
                    muted
                    playsInline
                    src={videoSrc}
                  />
                </div>
                <img 
                  src={imageSrc}
                  alt={title}
                  className="absolute block w-full h-full max-w-none object-cover transform transition-all duration-250 ease-in-out z-0"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </span>
      </div>

      <div className="flex-grow flex flex-col w-full md:w-full md:px-5 md:mb-[110px] md:sticky md:top-0 px-[22px] md:mb-[30px] md:pt-6">
        <div className="mb-[10px]">
          <span className="underline uppercase font-semibold text-[14px] underline-offset-[0.1em] md:text-[12px] mb-[0.5em] text-[#37071D] tracking-[0.02em]">
            {status}
          </span>
        </div>
        
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <h2 className="font-[500] text-[24px] md:pr-0 mb-[10px] tracking-[-0.048em]">
              {title}
            </h2>
            <p className="font-sans text-[16px] mb-[1em]">
              {description}
            </p>
          </div>
          
          <div className="flex items-center justify-start space-x-[10px]">
            <a 
              href={href}
              className="w-[155px] h-[56px] text-[17px] rounded-[24px] bg-[#1D1B1A] text-[#F4EFED] text-center flex items-center justify-center hover:bg-white hover:text-[#1D1B1A] border-solid border transition-all duration-[0.4s] ease-out"
              style={{
                boxShadow: '0px 0.5px 3px 0px rgba(0, 0, 0, 0.20)'
              }}
            >
              {buttonText}
            </a>
            {extraButton}
          </div>
        </div>
      </div>
    </div>
  );
};
