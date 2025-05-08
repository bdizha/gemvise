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
      <div className="relative z-10">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="flex flex-col items-start text-center sm:text-left">
            <Logo className="h-8" />
            <p className="mt-4 text-sm text-description-gray">
              Discover, Create, and Share Unique Worlds and Characters.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.label}
                  className="text-description-gray hover:text-foreground transition-colors duration-300"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-y-12 lg:col-span-3 lg:grid-cols-3">
            {[ 
              { title: 'Navigation', items: links.slice(0, 5) }, 
              { title: 'Legal', items: links.slice(5) } 
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-base font-semibold leading-6 text-foreground">
                  {section.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-description-gray hover:text-foreground transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-6 sm:gap-8 lg:gap-12 md:flex-row pt-8">
          <p className="text-sm leading-5 text-description-gray">
            &copy; {new Date().getFullYear()} GemVise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
