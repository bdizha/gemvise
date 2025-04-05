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
        <div className="relative w-full h-full flex items-center">
          <div className="mx-auto w-full px-6 xl:max-w-7xl">
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

            {/* Story Section */}
            <section className="py-16 sm:py-32">
              <div className="mx-auto w-full px-6 xl:max-w-7xl">
                <div className="space-y-12">
                  <div>
                    <div className="mono-tag flex items-center gap-2 text-sm">
                      <span>[</span> <span>Our Story</span> <span>]</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl">
                      <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">Spark the imagination</h1>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                      <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                        GemVise is dedicated to unlocking human creativity through the power of AI. We empower people to connect, learn, tell stories, and explore new worlds through interactive AI characters.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 sm:py-32">
              <div className="mx-auto w-full px-6 xl:max-w-7xl">
                <div className="space-y-12">
                  <div>
                    <div className="mono-tag flex items-center gap-2 text-sm">
                      <span>[</span> <span>Our Vision</span> <span>]</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-xl">
                      <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">Redefining social value</h2>
                    </div>
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                      <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                        Millions engage with AI daily, and we believe the creators behind these engaging experiences deserve to be recognized and rewarded. Our platform is built not just for limitless entertainment, but for a future where digital creation has tangible value and seamlessly integrates into immersive virtual experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="relative flex items-end justify-between gap-6 py-10 z-10 lg:min-h-[160px]">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" className="size-6 my-2">
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col items-end gap-6 sm:gap-8 lg:gap-12 md:flex-row">
                <div className="max-w-lg">
                  GemVise stands at the convergence of conversational AI, gaming, social connection, creative expression, and blockchain technology.
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
                <span>[</span> <span>Our Values</span> <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">What Makes Us Unique</h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  We leverage state-of-the-art Large Language Models optimized for engaging, dynamic conversations, with a unique focus on creator empowerment.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-md/5 opacity-80">Pushing the boundaries of AI, interaction, and digital economies.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p className="text-md/5 opacity-80">Providing powerful yet accessible tools for imaginative expression.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-md/5 opacity-80">Fostering a supportive and collaborative environment for users and creators.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="text-md/5 opacity-80">Building trust through clear communication and fair systems, especially regarding creator rewards.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Empowerment</h3>
              <p className="text-md/5 opacity-80">Giving users control over their interactions and creators ownership & value for their work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span> <span>Our Team</span> <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">Deep Expertise</h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  Our team comprises experts with deep experience in AI and Machine Learning, building global consumer products, scaling complex systems, and pioneering work in blockchain applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto w-full px-6 xl:max-w-7xl">
          <div className="space-y-12">
            <div>
              <div className="mono-tag flex items-center gap-2 text-sm">
                <span>[</span> <span>Our Values</span> <span>]</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-balance text-3xl md:text-4xl lg:text-5xl tracking-tight">What Makes Us Unique</h2>
              </div>
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6">
                  We leverage state-of-the-art Large Language Models optimized for engaging, dynamic conversations, with a unique focus on creator empowerment.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-md/5 opacity-80">Pushing the boundaries of AI, interaction, and digital economies.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Creativity</h3>
              <p className="text-md/5 opacity-80">Providing powerful yet accessible tools for imaginative expression.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-md/5 opacity-80">Fostering a supportive and collaborative environment for users and creators.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Transparency</h3>
              <p className="text-md/5 opacity-80">Building trust through clear communication and fair systems, especially regarding creator rewards.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Empowerment</h3>
              <p className="text-md/5 opacity-80">Giving users control over their interactions and creators ownership & value for their work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-32">
        <Link 
          href="/explore"
          className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]"
        >
          <span>Explore GemVise</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
          </svg>
        </Link>
        <Link 
          href="/careers"
          className="relative isolate inline-flex items-center justify-center border text-base/6 uppercase font-mono tracking-widest shrink-0 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&>[data-slot=icon]]:-mx-0.5 [&>[data-slot=icon]]:my-0.5 [&>[data-slot=icon]]:shrink-0 [&>[data-slot=icon]]:sm:my-1 px-4 py-2 sm:text-sm [&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:sm:size-4 gap-x-3 bg-[--btn-bg] text-[--btn-text] border-[--btn-border] hover:bg-[--btn-hover] rounded-full [--btn-bg:transparent] [--btn-border:theme(colors.primary/25%)] [--btn-text:theme(colors.primary)] [--btn-hover:theme(colors.secondary/20%)]"
        >
          <span>View Open Roles</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      {/* Location Section */}
      <section className="w-full bg-gradient-to-r from-grey-50 to-grey-100 dark:from-grey-900 dark:to-grey-800 mt-32">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-[900px] flex flex-col items-center px-24 gap-8 py-20 lg:px-0">
            <h3 className="text-4xl text-center align-left w-full whitespace-pre-line">Based in Silicon Valley, with quantum entanglement reaching globally.</h3>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full flex flex-col items-center mt-10 mb-20">
        <div className="max-w-[900px] flex flex-col items-center px-12 gap-8 lg:px-0">
          <p className="text-sm text-center whitespace-pre-line">
            <span>For partnership inquiries, contact </span>
            <a href="mailto:partners@gemvise.ai" className="text-grey-900 dark:text-grey-50 hover:underline">partners@gemvise.ai</a>
          </p>
        </div>
      </section>
    </div>
  );
}
