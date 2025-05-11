'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChatBubbleLeftRightIcon, SparklesIcon, UserGroupIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { worlds } from '@/data/worlds';
import type { Gem } from '@/types/gemium';
import Section from '@/components/layout/Section';
import type { GridItem } from '@/components/layout/Grid/types';
import ChatMessage from '@/components/chat/ChatMessage';
import { mockChatHistory, type MockChatSession } from '@/data/mockChatHistory';

const gradients = [
  '/gradients/cha-gradient-00.png',
  '/gradients/cha-gradient-01.png',
  '/gradients/cha-gradient-02.png',
  '/gradients/cha-gradient-03.png',
  '/gradients/cha-gradient-04.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

export default function GemDetail() {
  const params = useParams();
  const router = useRouter();
  const [gem, setGem] = useState<Gem | null>(null);
  const [allAvailableGems, setAllAvailableGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gemId = params.gemId as string;
    const allGems = worlds.flatMap(world => 
      world.collections.flatMap(collection => collection.gems)
    );
    setAllAvailableGems(allGems);
    const foundGem = allGems.find(g => g.id === gemId);

    setGem(foundGem || null);
    setLoading(false);
  }, [params.gemId]);

  const getGemById = (id: string): Gem | undefined => {
    return allAvailableGems.find(g => g.id === id);
  };

  const mapGemToGridItem = (itemGem: Gem): GridItem => ({
    id: itemGem.id,
    title: itemGem.name,
    description: itemGem.description ? itemGem.description.substring(0, 100) + (itemGem.description.length > 100 ? '...' : '') : 'No description available.',
    imageUrl: itemGem.imageUrl || getRandomGradient(),
    href: `/gem/${itemGem.id}`,
    subtitle: itemGem.attributes?.rarity || itemGem.type,
    cardVariant: itemGem.type ? itemGem.type.toLowerCase() : 'default',
  });

  let currentChatSession: MockChatSession | undefined = undefined;
  if (gem && gem.type === 'Adventure') {
    currentChatSession = mockChatHistory.find(session => session.adventureId === gem.id);
  }

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
          className="mt-6 rounded-[1rem] bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
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
                {gem.attributes.traits && gem.attributes.traits.length > 0 && (
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
                )}
              </div>
            </div>
            
            <div className="mt-10 max-w-xl lg:mt-0">
              <div className="relative aspect-square overflow-hidden rounded-[4rem] bg-theme-surface/50 backdrop-blur-sm">
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

      {/* Adventure Chat Log Section */}
      {gem.type === 'Adventure' && currentChatSession && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 mb-12">
          <h2 className="text-3xl font-bold text-theme-foreground mb-8 flex items-center">
            <ChatBubbleBottomCenterTextIcon className="h-8 w-8 mr-3 text-theme-accent" />
            Adventure Log
          </h2>
          <div className="space-y-6 bg-theme-surface-overlay p-6 rounded-xl shadow-lg">
            {currentChatSession.messages.length > 0 ? (
              currentChatSession.messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} allGems={allAvailableGems} />
              ))
            ) : (
              <p className="text-theme-muted-foreground text-center py-4">No messages in this log yet.</p>
            )}
          </div>
        </div>
      )}

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
                <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm">
                  <dt className="text-sm font-medium text-theme-foreground/60">Power Level</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                    {gem.attributes.power}
                  </dd>
                </div>
                <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm">
                  <dt className="text-sm font-medium text-theme-foreground/60">Rarity</dt>
                  <dd className="mt-1 text-2xl font-semibold tracking-tight text-theme-foreground">
                    {gem.attributes.rarity}
                  </dd>
                </div>
              </dl>
            </div>

            {gem.type === 'Adventure' && (
              <div className="mt-10">
                {gem.involvedCharacterIds && gem.involvedCharacterIds.length > 0 && (
                  <div className="mb-6">
                    <Section
                      items={gem.involvedCharacterIds.map(charId => getGemById(charId)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
                      itemsDisplay="slider"
                      sliderSectionTitle="Involved Characters"
                      className="bg-transparent px-0"
                    />
                  </div>
                )}
                {gem.sceneIds && gem.sceneIds.length > 0 && (
                  <div>
                    <Section
                      items={gem.sceneIds.map(sceneId => getGemById(sceneId)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
                      itemsDisplay="slider"
                      sliderSectionTitle="Scenes in this Adventure"
                      className="bg-transparent px-0"
                    />
                  </div>
                )}
              </div>
            )}

            {gem.type === 'Scene' && gem.characterIds && gem.characterIds.length > 0 && (
              <div className="mt-10">
                <Section
                  items={gem.characterIds.map(charId => getGemById(charId)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
                  itemsDisplay="slider"
                  sliderSectionTitle="Characters in this Scene"
                  className="bg-transparent px-0"
                />
              </div>
            )}

            {gem.type === 'Character' && (
              <div className="mt-10">
                {(() => {
                  const involvedAdventures = allAvailableGems.filter(
                    g => g.type === 'Adventure' && g.involvedCharacterIds?.includes(gem.id)
                  );
                  const partOfScenes = allAvailableGems.filter(
                    g => g.type === 'Scene' && g.characterIds?.includes(gem.id)
                  );

                  const adventureGridItems = involvedAdventures.map(g => mapGemToGridItem(g)); 
                  const sceneGridItems = partOfScenes.map(g => mapGemToGridItem(g));

                  return (
                    <>
                      {adventureGridItems.length > 0 && (
                        <div className="mb-6">
                          <Section
                            items={adventureGridItems}
                            itemsDisplay="slider"
                            sliderSectionTitle="Involved In Adventures"
                            className="bg-transparent px-0"
                          />
                        </div>
                      )}
                      {sceneGridItems.length > 0 && (
                        <div>
                          <Section
                            items={sceneGridItems}
                            itemsDisplay="slider"
                            sliderSectionTitle="Appears In Scenes"
                            className="bg-transparent px-0"
                          />
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-[4rem] bg-theme-surface/50 p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-theme-foreground mb-6">Actions</h3>
              <div className="space-y-4">
                <Link
                  href={`/chat/${gem.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-[1rem] bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Start Conversation
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-[1rem] bg-theme-surface/50 px-4 py-2.5 text-sm font-semibold text-theme-foreground shadow-sm ring-1 ring-inset ring-theme-foreground/10 hover:bg-theme-surface/70"
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
