'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChatBubbleLeftRightIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { worlds } from '@/data/worlds';
import type { Gem } from '@/types/gemium';

export default function GemDetail() {
  const params = useParams();
  const router = useRouter();
  const [gem, setGem] = useState<Gem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the gem in the worlds data
    const gemId = params.gemId as string;
    const foundGem = worlds.flatMap(world => 
      world.collections.flatMap(collection => 
        collection.gems.filter(g => g.id === gemId)
      )
    )[0];

    setGem(foundGem || null);
    setLoading(false);
  }, [params.gemId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-theme-surface flex items-center justify-center">
        <SparklesIcon className="h-8 w-8 text-theme-foreground animate-spin" />
      </div>
    );
  }

  if (!gem) {
    return (
      <div className="min-h-screen bg-theme-surface flex flex-col items-center justify-center px-6 text-center">
        <SparklesIcon className="h-16 w-16 text-theme-foreground mb-4" />
        <h1 className="text-2xl font-bold text-theme-foreground">Gem Not Found</h1>
        <p className="mt-2 text-theme-foreground/60">This gem doesn't exist or is still being discovered.</p>
        <Link
          href="/explore"
          className="mt-6 rounded-md bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
        >
          Explore Other Gems
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-surface">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-theme-foreground sm:text-6xl">
                {gem.name}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <div className="flex flex-wrap gap-2">
                  {gem.attributes.traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center rounded-full bg-theme-surface/50 px-2 py-1 text-xs font-medium text-theme-foreground/80 ring-1 ring-inset ring-theme-foreground/10"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-10 max-w-xl lg:mt-0">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-theme-surface/50 backdrop-blur-sm">
                {gem.imageUrl && (
                  <Image
                    src={gem.imageUrl}
                    alt={gem.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="text-2xl font-bold text-theme-foreground mb-6">About</h2>
            <div className="prose prose-theme max-w-none">
              <p>{gem.description}</p>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-theme-foreground mb-4">Attributes</h3>
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-theme-surface/50 p-4 backdrop-blur-sm">
                  <dt className="text-sm font-medium text-theme-foreground/60">Power Level</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                    {gem.attributes.power}
                  </dd>
                </div>
                <div className="rounded-lg bg-theme-surface/50 p-4 backdrop-blur-sm">
                  <dt className="text-sm font-medium text-theme-foreground/60">Rarity</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                    {gem.attributes.rarity}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-2xl bg-theme-surface/50 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-theme-foreground mb-6">Actions</h3>
              <div className="space-y-4">
                <Link
                  href={`/chat/${gem.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Start Conversation
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-theme-surface/50 px-4 py-2.5 text-sm font-semibold text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 hover:bg-theme-surface/70"
                >
                  <UserGroupIcon className="h-5 w-5" />
                  Share Gem
                </button>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-medium text-theme-foreground/60 mb-4">Casting</h4>
                <ul className="space-y-4">
                  {gem.casting?.map((character) => (
                    <li key={character.name} className="flex items-start gap-4">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-theme-surface/30" />
                      <div>
                        <p className="text-sm font-medium text-theme-foreground">{character.name}</p>
                        <p className="text-sm text-theme-foreground/60">{character.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
