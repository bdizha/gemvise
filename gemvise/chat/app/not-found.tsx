import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="card max-w-md p-8">
        <h2 className="mb-4 text-2xl font-bold gradient-text">Oops! Page Not Found 🔍</h2>
        <p className="mb-6 text-[hsl(var(--secondary))]">
          Looks like this gem is still being discovered! Let's get you back to where the magic happens.
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="button button-primary"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
