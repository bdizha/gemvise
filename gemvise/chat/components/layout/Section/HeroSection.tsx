import React from 'react';

interface HeroSectionProps {
  children: React.ReactNode;
}

const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <section className="block font-sans pt-[85px] md:pt-[36px]">
      <div className="px-6 pb-[50px] md:pb-[60px]">
        <div className="max-w-[1400px] mx-auto flex items-stretch justify-between flex-wrap md:block">
          {children}
        </div>
      </div>
    </section>
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
