'use client';

import Link from 'next/link';

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
      <div className="relative w-full overflow-hidden pb-16 md:pb-32">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: "url('/gradients/GV-Gradient-03.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center bottom',
              opacity: 0.9,
              mixBlendMode: 'multiply'
            }}
          />
        </div>
        <section className="relative py-16 sm:py-32">
          <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
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
          </div>
        </section>
      </div>
    </footer>
  );
}
