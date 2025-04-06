'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const categories = [
  { name: 'Latest News', href: '/gems/latest-news', icon: '📰' },
  { name: 'Companion', href: '/gems/companion', icon: '👥' },
  { name: 'Unhinged Comedian', href: '/gems/comedian', icon: '🎭' },
  { name: 'Loyal Friend', href: '/gems/friend', icon: '🤝' },
  { name: 'Homework Helper', href: '/gems/homework', icon: '📚' },
  { name: 'Not a Doctor', href: '/gems/not-doctor', icon: '⚕️' },
  { name: 'Not a Therapist', href: '/gems/not-therapist', icon: '🧠' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-full flex">
      <div style={{ marginTop: 0 }}>
        <div className="m-5 flex items-center absolute z-10 ml-2">
          <button 
            className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 hover:bg-surface-elevation-1 text-md gap-unit-2 rounded-md px-unit-0 !gap-unit-0 data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-ghost text-primary min-w-unit-10 w-unit-10 h-unit-10 data-[hover=true]:opacity-hover"
            type="button"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 text-icon-secondary">
              <path 
                fill="currentColor" 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM2 18C2 17.4477 2.44772 17 3 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H3C2.44772 19 2 18.5523 2 18Z"
              />
            </svg>
          </button>
        </div>
        <div className="flex h-full flex-col overflow-y-auto py-6">
          <div className="space-y-4 px-3">
            <div className="space-y-2">
              <h2 className="px-4 text-xs font-semibold uppercase tracking-wider text-secondary">
                Categories
              </h2>
              <div className="space-y-1">
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className={clsx(
                      'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                      pathname === category.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-secondary hover:bg-primary/5 hover:text-primary'
                    )}
                  >
                    <span className="flex h-6 w-6 items-center justify-center">
                      {category.icon}
                    </span>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
