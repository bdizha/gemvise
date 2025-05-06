import Link from 'next/link';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-theme-surface flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-theme-surface/50 backdrop-blur-sm">
            <SparklesIcon className="h-12 w-12 text-theme-foreground" />
          </span>
        </div>
        
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-theme-foreground sm:text-6xl">
          Oops! Page Not Found 🔍
        </h1>
        
        <p className="mb-8 text-lg leading-8 text-theme-foreground/60">
          Looks like this gem is still being discovered! Let's get you back to where the magic happens.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-[1rem] bg-gradient-pink-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full sm:w-auto"
          >
            Return to Home
          </Link>
          
          <Link
            href="/explore"
            className="rounded-[1rem] bg-theme-surface/50 backdrop-blur-sm px-3.5 py-2.5 text-sm font-semibold text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 hover:bg-theme-surface/70 w-full sm:w-auto"
          >
            Explore Worlds
          </Link>
        </div>
        
        <div className="mt-16 border-t border-theme-foreground/10 pt-8">
          <p className="text-sm text-theme-foreground/60">
            Need help? Check out our{' '}
            <Link href="/about" className="text-theme-foreground hover:opacity-80">
              documentation
            </Link>
            {' '}or{' '}
            <Link href="/contact" className="text-theme-foreground hover:opacity-80">
              contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
