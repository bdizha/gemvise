'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="card max-w-md p-8">
        <h2 className="mb-4 text-2xl font-bold gradient-text">Oops! Something's Not Right 💫</h2>
        <p className="mb-6 text-[hsl(var(--secondary))]">
          Don't worry, our gems are working their magic to fix this! Try refreshing or going back.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="button"
          >
            Refresh Page
          </button>
          <button
            onClick={reset}
            className="button button-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
