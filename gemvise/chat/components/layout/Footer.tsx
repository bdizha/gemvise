'use client';

import Link from 'next/link';
import '@/styles/footer-gradient.css';

const mainLinks = [
  { name: 'Discover', href: '/discover' },
  { name: 'Create', href: '/create' },
  { name: 'Unleash', href: '/unleash' },
  { name: 'Luminus', href: '/blog' },
  { name: 'GemLabs', href: '/research' },
  { name: 'About', href: '/about' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="relative w-full mt-auto">
      <div className="relative w-full overflow-hidden">
        {/* Modern conic gradient effect */}
        <div className="footer-gradient-container">
          <div className="footer-gradient-content">
            {/* Gradient effect */}
            <div className="footer-gradient-effect">
              <div className="footer-gradient-left"></div>
              <div className="footer-gradient-right"></div>
            </div>
            
            {/* Footer content */}
            <div className="relative w-full flex grow items-center justify-start z-20 pt-16 pb-16 md:pb-32">
              <div className="w-full space-y-16 sm:space-y-32">
                <div className="flex flex-col items-center space-y-8">
                  {/* Main Links */}
                  <nav className="flex justify-center gap-8 flex-wrap">
                    {mainLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-stone-700 to-stone-900 hover:from-stone-900 hover:to-stone-950 dark:from-stone-300 dark:to-stone-100 dark:hover:from-stone-100 dark:hover:to-white transition-all hover:underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  
                  {/* Legal Links */}
                  <nav className="flex justify-center gap-8">
                    {legalLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-stone-600 to-stone-800 hover:from-stone-800 hover:to-stone-900 dark:from-stone-400 dark:to-stone-200 dark:hover:from-stone-200 dark:hover:to-white transition-all hover:underline"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
                
                {/* Copyright and additional info */}
                <div className="flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[100px]">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-6 my-2">
                      <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                    <div className="max-w-lg text-stone-700 dark:text-stone-300">
                      GemVise: Crafting the future of AI character interaction. Bringing imagination to life through advanced technology, community collaboration, and creator empowerment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fallback gradient image for browsers that don't support conic-gradient */}
          <div className="footer-gradient-image"></div>
        </div>
      </div>
    </footer>
  );
}
