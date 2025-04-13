import React from 'react';
import Image from 'next/image';

interface HeroImageSectionProps {
  title: string;
  description: string;
  status?: string;
  desktopImage: string;
  mobileImage: string;
  buttonText?: string;
  isComingSoon?: boolean;
}

const HeroImageSection = ({
  title,
  description,
  status = 'in development',
  desktopImage,
  mobileImage,
  buttonText = 'Coming Soon',
  isComingSoon = true
}: HeroImageSectionProps) => {
  return (
    <section className="text-[#000] group font-sans relative aspect-[1096/482] md:aspect-[378/482] overflow-hidden">
      <div className="relative block h-full w-full">
        {/* Desktop Image with Parallax */}
        <div className="hidden lg:block absolute top-0 right-0 w-full h-full">
          <div className="w-full h-full transform scale-110 transition-transform duration-1000 group-hover:scale-120">
            <Image
              src={desktopImage}
              alt={title}
              fill
              className="object-cover transition-all duration-[1.1s] ease-out group-hover:scale-[1.2]"
              priority
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="lg:hidden absolute top-0 right-0 w-full h-full">
          <Image
            src={mobileImage}
            alt={title}
            fill
            className="object-cover transition-all duration-[1.1s] ease-out group-hover:scale-[1.2]"
            priority
          />
        </div>

        {/* Content */}
        <div className="block h-full text-left px-6">
          <div className="flex items-center justify-center text-center h-full w-full relative">
            <div className="relative block w-[405px]">
              <div className="mb-5">
                <span className="underline uppercase text-[#37071D] font-semibold text-[14px] md:text-[12px] mb-[0.5em] tracking-[0.02em]">
                  {status}
                </span>
              </div>
              <div>
                <h2 className="font-[500] text-[24px] leading-[1.1] md:pr-0 mb-5">
                  {title}
                </h2>
                <p className="font-sans text-[16px] mb-5">
                  {description}
                </p>
                <div className="flex items-center justify-center">
                  <span 
                    className="w-[155px] h-[56px] text-[17px] rounded-[24px] bg-[#ffffffb3] text-[#74716e] text-center flex items-center justify-center"
                    style={{
                      boxShadow: '0px 0.5px 0.5px 0.5px #FFF inset, 0px 0.5px 3px 0px rgba(0, 0, 0, 0.20)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {buttonText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImageSection;
