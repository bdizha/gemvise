'use client';

import Image from 'next/image';
import Link from 'next/link';

const featuredGems = [
  {
    id: 'kylie-jenner',
    name: 'Kylie Jenner',
    role: 'Entrepreneur & Social Media Icon',
    image: '/images/random.webp',
    description: 'Beauty mogul, reality TV star, and youngest self-made billionaire. Chat about makeup, fashion, and building a beauty empire! 💄✨',
  },
  {
    id: 'taylor-swift',
    name: 'Taylor Swift',
    role: 'Pop Icon & Songwriter',
    image: '/images/random.webp',
    description: 'Award-winning artist, master storyteller, and record-breaker. Discuss music, songwriting, and easter eggs! 🎵💝',
  },
  {
    id: 'kim-kardashian',
    name: 'Kim Kardashian',
    role: 'Media Mogul & Businesswoman',
    image: '/images/random.webp',
    description: 'Reality TV superstar, SKIMS founder, and law student. Talk about business, fashion, and personal branding! 👗⚖️',
  },
  {
    id: 'beyonce',
    name: 'Beyoncé',
    role: 'Queen of Pop & Cultural Icon',
    image: '/images/random.webp',
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
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[1px] transition-all hover:scale-[1.02]"
          >
            <div className="h-full w-full rounded-3xl bg-white p-6">
              <div className="mb-4 aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <div className="h-full w-full animate-pulse bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#6366F1]" />
              </div>
              <h3 className="mb-1 text-xl font-bold bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#6366F1] bg-clip-text text-transparent">{gem.name}</h3>
              <p className="mb-2 text-sm text-gray-600">{gem.role}</p>
              <p className="text-sm text-gray-500">{gem.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
