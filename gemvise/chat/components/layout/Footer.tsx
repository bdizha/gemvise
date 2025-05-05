'use client';

import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { Icon } from '../shared/Icon';
import Funnel from './Funnel';

interface Link {
  name: string;
  href: string;
  label?: string;
}

interface Social extends Link {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element;
}

const links: Link[] = [
  { name: 'Discover', href: '/discover', label: 'Discover' },
  { name: 'Explore', href: '/explore', label: 'Explore' },
  { name: 'Research', href: '/research', label: 'Research' },
  { name: 'Blog', href: '/blog', label: 'Blog' },
  { name: 'About', href: '/about', label: 'About' },
  { name: 'Privacy', href: '/privacy', label: 'Privacy Policy' },
  { name: 'Terms', href: '/terms', label: 'Terms of Service' },
];

const socials: Social[] = [
  { 
    name: 'Twitter',
    href: 'https://twitter.com/gemium',
    label: 'Follow on Twitter',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer 
      className="group relative py-12 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-dark-light dark:bg-gradient-dark-light"
     
    >
      <div 
        className="absolute bottom-0 left-0 w-full h-full opacity-[0.08] hidden lg:block transition-transform duration-[2000ms] ease-in-out group-hover:scale-[10]"
      >
        <Funnel imageUrl="/icons/Dark-Footer.png" /> 
      </div>
      {/* Darkening Overlay */}
      <div className="absolute inset-0 bg-black dark:bg-black/0 z-0"></div>
      
      <div className="container mx-auto relative z-10"> 
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          {/* Navigation */}
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 md:flex-row md:items-center md:justify-between">
              {/* Logo */}
              <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
                <Link href="/" className="flex-none">
                  <Logo variant="footer" className="text-primary" />
                </Link>
              </div>
              {/* Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-medium">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition text-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            {socials.length > 0 && (
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="flex gap-6">
                  {socials.map((social) => (
                    <Link
                      key={social.href}
                      href={social.href}
                      className="group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 transition text-muted group-hover:text-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="max-w-lg">
                  <p className="mt-2 font-light italic text-muted">
                    Casting the future of role play entertainment
                  </p>
                </div>
              </div>
            </div>

            )}

            {/* Copyright */}
            <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 lg:gap-12 md:flex-row border-t border-border pt-8">
              <p className="text-sm text-muted">
                &copy; {new Date().getFullYear()} Gemium. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
