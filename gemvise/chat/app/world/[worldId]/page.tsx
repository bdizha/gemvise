'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobeAltIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { worlds } from '@/data/worlds';
import type { GemiumWorld } from '@/types/gemium';

export default function WorldDetail() {
  const params = useParams();
  const router = useRouter();
  const [world, setWorld] = useState<GemiumWorld | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const worldId = params.worldId as string;
    const foundWorld = worlds.find(w => w.id === worldId);
    setWorld(foundWorld || null);
    setLoading(false);
  }, [params.worldId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-theme-surface flex items-center justify-center">
        <SparklesIcon className="h-8 w-8 text-theme-foreground animate-spin" />
      </div>
    );
  }

  if (!world) {
    return (
      <div className="min-h-screen bg-theme-surface flex flex-col items-center justify-center px-6 text-center">
        <GlobeAltIcon className="h-16 w-16 text-theme-foreground mb-4" />
        <h1 className="text-2xl font-bold text-theme-foreground">World Not Found</h1>
        <p className="mt-2 text-theme-foreground/60">This world doesn't exist or is still being created.</p>
        <Link
          href="/explore"
          className="mt-6 rounded-[1rem] bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
        >
          Explore Other Worlds
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-surface">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-theme-foreground sm:text-6xl">
              {world.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-theme-foreground/60">
              {world.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {world.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="inline-flex items-center rounded-full bg-theme-surface/50 px-2 py-1 text-xs font-medium text-theme-foreground/80 ring-1 ring-inset ring-theme-foreground/10"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl font-bold text-theme-foreground">Collections</h2>
          <p className="mt-2 text-lg leading-8 text-theme-foreground/60">
            Explore the unique collections within {world.name}.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {world.collections.map((collection) => (
            <article
              key={collection.id}
              className="group relative isolate flex flex-col justify-between overflow-hidden rounded-[4rem] bg-theme-surface/50 px-8 pb-8 pt-32 backdrop-blur-sm"
            >
              <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-theme-surface/50 via-theme-surface/20 to-transparent" />
              
              <div className="absolute left-4 top-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-[1.5rem] bg-theme-surface/50 backdrop-blur-sm">
                  <SparklesIcon className="h-6 w-6 text-theme-foreground" />
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-theme-foreground/60">
                <div className="mr-4">{collection.gems.length} Characters</div>
                <div>
                  {collection.type === 'Licensed' ? (
                    <span className="inline-flex items-center rounded-full bg-theme-surface/30 px-2 py-1 text-xs backdrop-blur-sm">
                      Licensed
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gradient-pink-purple/10 px-2 py-1 text-xs backdrop-blur-sm">
                      Original
                    </span>
                  )}
                </div>
              </div>

              <Link 
                href={`/world/${world.id}/${collection.id}`}
                className="mt-3 block text-lg font-semibold leading-6 text-theme-foreground"
              >
                <span className="absolute inset-0" />
                {collection.name}
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-2xl rounded-[4rem] bg-theme-surface/50 p-8 backdrop-blur-sm lg:mx-0">
          <h3 className="text-lg font-semibold text-theme-foreground mb-6">World Stats</h3>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-medium text-theme-foreground/60">Collections</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                {world.collections.length}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-theme-foreground/60">Total Characters</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                {world.collections.reduce((sum, col) => sum + col.gems.length, 0)}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-theme-foreground/60">Ownership Split</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                {world.ownership.platform}% / {world.ownership.creator}% / {world.ownership.license}%
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
