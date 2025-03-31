'use client';

import { useTheme } from '../theme/ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[hsl(var(--background))] border-b border-[hsl(var(--border))]">
      <div className="mx-auto w-full px-6 xl:max-w-7xl">
        <nav className="flex items-center justify-between gap-4 py-4 lg:h-20">
          <a aria-label="GemVise Homepage" href="/" className="text-2xl font-bold gradient-text">
            GemVise
          </a>
          
          <ul className="ml-3 hidden flex-grow gap-4 lg:flex">
            <li>
              <a className="rounded-2xl px-4 py-2 text-[hsl(var(--secondary))] hover:bg-[hsl(var(--btn-hover))] transition-colors" href="/gems">
                Gems
              </a>
            </li>
            <li>
              <a className="rounded-2xl px-4 py-2 text-[hsl(var(--secondary))] hover:bg-[hsl(var(--btn-hover))] transition-colors" href="/chat">
                Chat
              </a>
            </li>
            <li>
              <a className="rounded-2xl px-4 py-2 text-[hsl(var(--secondary))] hover:bg-[hsl(var(--btn-hover))] transition-colors" href="/about">
                About
              </a>
            </li>
          </ul>

          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 hover:bg-[hsl(var(--btn-hover))] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="lg:hidden rounded-full p-2 hover:bg-[hsl(var(--btn-hover))] transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
