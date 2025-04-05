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
    <div className="relative w-full overflow-hidden pb-32 md:pb-64">
      <div className="absolute inset-0">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: "url('/gradients/GV-Gradient-09.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center bottom',
            opacity: 1
          }}
        />
      </div>
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="flex flex-col items-center space-y-8">
            {/* Main Links */}
            <nav className="flex justify-center gap-8 flex-wrap">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 transition-colors hover:underline"
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
                  className="text-sm text-stone-500 hover:text-stone-700 dark:text-stone-500 dark:hover:text-stone-300 transition-colors hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
