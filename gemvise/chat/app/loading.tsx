export default function Loading() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <div className="card max-w-md p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 animate-ping rounded-full bg-[hsl(var(--primary))] opacity-20"></div>
            <div className="absolute inset-0 animate-pulse rounded-full bg-[hsl(var(--primary))] opacity-40"></div>
            <div className="relative flex h-full items-center justify-center">
              <svg className="h-8 w-8 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
          <p className="text-lg gradient-text">Loading Your Gem Experience ✨</p>
          <p className="text-sm text-[hsl(var(--secondary))]">Just a moment while we prepare something special...</p>
        </div>
      </div>
    </div>
  );
}
