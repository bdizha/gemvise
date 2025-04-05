'use client';

import Link from 'next/link';

export default function AboutPage() {
  const mainLinks = [
    { name: 'Discover', href: '/discover' },
    { name: 'Create', href: '/create' },
    { name: 'Unleash', href: '/unleash' },
    { name: 'Luminus', href: '/blog' },
    { name: 'GemLabs', href: '/research' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-svh w-full border-b border-border pb-px overflow-hidden md:overflow-x-hidden"
        style={{
          backgroundImage: "url('/gradients/GV-Gradient-03.png')",
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat'
        }}
      >
        <div className="relative w-full h-full">
          <div className="mx-auto w-full px-6 xl:max-w-7xl flex h-full flex-col">
            {/* Gradient Background */}
            <div className="pointer-events-none absolute inset-0" style={{ opacity: 1 }}>
              <div 
                className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
                }}
              />
              <div 
                className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)]"
                style={{
                  background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
                }}
              />
              <div 
                className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full -scale-y-100"
                style={{
                  background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
                }}
              />
              <div 
                className="pointer-events-none absolute left-1/2 top-[calc(50%-1px)] z-0 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-lg [mask-image:radial-gradient(circle_at_60%_50%,transparent_0%,rgba(255,255,255,1)_20%)] -scale-y-100"
                style={{
                  background: "conic-gradient(from 90deg at 55% 50%, #f9f6f3 0deg, #f3f6f9 4deg, rgba(143, 148, 151, 0.9) 8deg, rgba(143, 148, 151, 0.7) 10deg, rgba(205, 207, 211, 0.5) 12deg, rgba(205, 207, 211, 0.3) 18deg, rgba(143, 148, 151, 0.1) 24deg, rgba(9, 6, 3, 0.05) 45deg, rgba(9, 6, 3, 0) 90deg, rgba(249, 246, 243, 0) 360deg)"
                }}
              />
            </div>

            {/* Content */}
            <div className="relative w-full flex grow items-center justify-start z-20">
              <div className="space-y-16">
                <div className="mono-tag flex items-center gap-2 text-sm">
                  <span>[</span> <span>Our Mission</span> <span>]</span>
                </div>
                <div className="max-w-3xl text-balance inline-block py-2">
                  <h1 className="text-[80px] leading-[80px] tracking-[-2px] font-normal mt-16 max-w-[768px]">
                    <span className="bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgb(255,255,255)] bg-clip-text text-transparent inline-block pb-2 pt-2">
                      About GemVise
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-[rgb(255,255,255)] bg-clip-text text-transparent inline-block pb-2 pt-2">
                      Intelligence Network
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[160px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6 my-2">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="max-w-lg">
                  AI's knowledge should be all-encompassing and as far-reaching as possible. We build AI specifically to advance human comprehension and capabilities.
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link 
                    href="/careers"
                    className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]"
                  >
                    <span className="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" aria-hidden="true" />
                    <span>Join Us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Principles Section */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span> <span>Our principles</span> <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl space-y-12">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">At our core</h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  We're a focused and mighty team connected by our curiosity, commitment, and unwavering drive.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3">
            <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0">
              <div className="size-10 text-primary [&>svg]:size-full mb-10 sm:mb-16">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1">
                  <ellipse cx="12" cy="12" rx="4" ry="10.5" transform="rotate(-45 12 12)" stroke="currentColor" />
                  <ellipse cx="4" cy="10.5" rx="4" ry="10.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.253 7.40381)" stroke="currentColor" />
                </svg>
              </div>
              <div className="max-w-sm">
                <h3 className="text-xl">Reasoning from First Principles</h3>
                <p className="mt-4 text-secondary">We challenge conventional thinking by breaking down problems to their fundamental truths, grounded in logic.</p>
              </div>
            </div>

            <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0">
              <div className="size-10 text-primary [&>svg]:size-full mb-10 sm:mb-16">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1">
                  <path d="M6.5 12.5L11.5 17.5M6.5 12.5L11.8349 6.83172C13.5356 5.02464 15.9071 4 18.3887 4H20V5.61135C20 8.09292 18.9754 10.4644 17.1683 12.1651L11.5 17.5M6.5 12.5L2 11L5.12132 7.87868C5.68393 7.31607 6.44699 7 7.24264 7H11M11.5 17.5L13 22L16.1213 18.8787C16.6839 18.3161 17 17.553 17 16.7574V13" stroke="currentColor" strokeLinecap="square" />
                  <path d="M4.5 16.5C4.5 16.5 4 18 4 20C6 20 7.5 19.5 7.5 19.5" stroke="currentColor" />
                </svg>
              </div>
              <div className="max-w-sm">
                <h3 className="text-xl">No goal is too ambitious</h3>
                <p className="mt-4 text-secondary">We embrace the most challenging obstacles by always pushing the limits of what's possible. We are motivated by what's unprecedented.</p>
              </div>
            </div>

            <div className="group relative px-0 py-10 h-full lg:p-8 flex flex-col from-secondary/10 via-transparent to-transparent border-t border-border lg:border-l lg:border-t-0">
              <div className="size-10 text-primary [&>svg]:size-full mb-10 sm:mb-16">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1">
                  <path d="M19.75 9H13V3.5L4.25 14.9219H11V20.5L19.75 9Z" stroke="currentColor" />
                </svg>
              </div>
              <div className="max-w-sm">
                <h3 className="text-xl">Move quickly and fix things</h3>
                <p className="mt-4 text-secondary">Our approach to rapid development and iteration allows us to innovate at breakneck speeds. We're not interested in speed for speed's sake—we're here to solve real problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Main Links</h3>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
