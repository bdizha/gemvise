'use client';

import Image from 'next/image';
import Link from 'next/link';

const featuredGems = [
  {
    id: 'kylie-jenner',
    name: 'Kylie Jenner',
    role: 'Entrepreneur & Social Media Icon',
    image: '/images/gems/kylie.jpg',
    description: 'Beauty mogul, reality TV star, and youngest self-made billionaire. Chat about makeup, fashion, and building a beauty empire! 💄✨',
  },
  {
    id: 'taylor-swift',
    name: 'Taylor Swift',
    role: 'Pop Icon & Songwriter',
    image: '/images/gems/taylor.jpg',
    description: 'Award-winning artist, master storyteller, and record-breaker. Discuss music, songwriting, and easter eggs! 🎵💝',
  },
  {
    id: 'kim-kardashian',
    name: 'Kim Kardashian',
    role: 'Media Mogul & Businesswoman',
    image: '/images/gems/kim.jpg',
    description: 'Reality TV superstar, SKIMS founder, and law student. Talk about business, fashion, and personal branding! 👗⚖️',
  },
  {
    id: 'beyonce',
    name: 'Beyoncé',
    role: 'Queen of Pop & Cultural Icon',
    image: '/images/gems/beyonce.jpg',
    description: 'Grammy-winning artist, performer, and cultural phenomenon. Chat about music, performance, and building a legacy! 👑🎤',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="gradient-text">Chat with Your</span>
          <br />
          <span className="gradient-text">Favorite Icons</span>
        </h1>
        <p className="mx-auto max-w-2xl text-[hsl(var(--secondary))]">
          Connect with the most influential entertainment personalities! Get inspired, learn their secrets, and explore their journeys through engaging conversations. ✨
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredGems.map((gem) => (
          <Link
            key={gem.id}
            href={`/chat/${gem.id}`}
            className="group relative overflow-hidden rounded-3xl bg-[hsl(var(--card))] p-6 transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="mb-4 aspect-square overflow-hidden rounded-2xl">
              <Image
                src={gem.image}
                alt={gem.name}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold gradient-text">{gem.name}</h3>
            <p className="mb-2 text-sm text-[hsl(var(--secondary))]">{gem.role}</p>
            <p className="text-sm text-[hsl(var(--secondary))]">{gem.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16 text-center">
        <Link
          href="/gems"
          className="inline-flex items-center gap-2 rounded-2xl bg-[hsl(var(--primary))] px-6 py-3 text-[hsl(var(--background))] transition-opacity hover:opacity-90"
        >
          <span>Explore All Gems</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
          </svg>
        </Link>
      </section>
    </div>
  );
}
