'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="h-16 top-0 @[80rem]/nav:h-0 @[80rem]/nav:top-8 absolute z-10 flex flex-row items-center justify-center w-full bg-gradient-to-b from-background via-background via-80% to-transparent @[80rem]/nav:from-transparent @[80rem]/nav:via-transparent">
      <div className="absolute flex flex-row items-center start-1">
        <Link href="/" className="ms-2 me-[0.5] rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          <Image 
            src={theme === 'dark' ? '/icons/GV-LOGO-02-WOT.png' : '/icons/GV-LOGO-02-GOT-05.png'} 
            alt="GemVise" 
            width={32} 
            height={32} 
          />
        </Link>
      </div>

      <div className="grow justify-center hidden max-w-[50%] @[640px]/nav:flex">
        {/* Center section - empty for now */}
      </div>

      <div className="absolute flex flex-row items-center gap-0.5 ml-auto end-3">
        <button 
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-10 rounded-full"
          type="button"
          aria-label="History"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[2]">
            <path d="M3 5L19 5" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"/>
            <path d="M3 12H7" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"/>
            <circle cx="16" cy="15" r="4" stroke="currentColor"/>
            <path d="M19 18L21 20" stroke="currentColor" strokeLinecap="square"/>
            <path d="M3 19H7" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="items-center justify-center gap-2 whitespace-nowrap text-sm font-medium leading-[normal] cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 text-primary hover:bg-button-ghost-hover h-10 w-10 rounded-full hidden @sm:flex"
            type="button"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 bg-button-primary text-background hover:bg-button-primary-hover rounded-full py-2 h-8 px-3 text-sm" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <div>Sign up</div>
          </button>

          <button className="items-center justify-center gap-2 whitespace-nowrap font-medium cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:-mx-0.5 rounded-full py-2 hidden @sm:flex h-8 px-3 text-sm text-primary bg-transparent ring-1 ring-inset ring-toggle-border hover:bg-button-secondary-hover hover:border-text-secondary" type="button">
            <div>Sign in</div>
          </button>
        </div>
      </div>
    </div>
  );
}
