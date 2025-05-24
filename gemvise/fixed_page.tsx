'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChatBubbleLeftRightIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { worlds, type World } from '@/data/worldData';
import type { Gem } from '@/types/gems';
import Section from '@/components/layout/Section';
import type { GridItem } from '@/components/layout/Grid/types';
import Button from '@/components/ui/Button';
import { mockChatHistory, type ChatMessage } from '@/data/mockChatHistory';
import ChatMessageItem from '@/components/chat/ChatMessageItem';
import Tabs from '@/components/ui/Tabs';
import WorldContextBanner from '@/components/shared/WorldContextBanner';

const gradients = [
  '/gradients/GV-gradient-01.png',
  '/gradients/GV-gradient-02.png',
  '/gradients/GV-gradient-03.png',
  '/gradients/GV-gradient-04.png',
  '/gradients/GV-gradient-05.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

export default function GemDetail() {
  const params = useParams();
  const router = useRouter();
  const [gem, setGem] = useState<Gem | null>(null);
  const [allAvailableGems, setAllAvailableGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<string>('about');

  useEffect(() => {
    const gemId = params.gemId as string;
    
    const allGemsNested = worlds.map((world: World) => [
      ...(world.characters || []),
      ...(world.stories || []),
      ...(world.adventures || []),
      ...(world.scenes || []),
    ]);
    const allGems: Gem[] = allGemsNested.flat();

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

  const getTabConfiguration = () => {
    if (!gem) return [];

    const tabs = [
      { id: 'about', label: 'About' },
    ];

    // Conditional tabs based on gem type
    if (gem.type === 'Adventure') {
      if (gem.involvedCharacterIds && gem.involvedCharacterIds.length > 0) {
        tabs.push({ id: 'characters', label: 'Characters' });
      }
      if (gem.sceneIds && gem.sceneIds.length > 0) {
        tabs.push({ id: 'scenes', label: 'Scenes' });
      }
      const adventureChatSession = mockChatHistory.find(session => session.adventureId === gem.id);
      if (adventureChatSession && adventureChatSession.messages.length > 0) {
        tabs.push({ id: 'log', label: 'Adventure Log' });
      }
    } else if (gem.type === 'Character') {
      const involvedAdventures = allAvailableGems.filter(
        g => g.type === 'Adventure' && g.involvedCharacterIds?.includes(gem.id)
      );
      if (involvedAdventures.length > 0) {
        tabs.push({ id: 'adventures', label: 'In Adventures' });
      }
      const partOfScenes = allAvailableGems.filter(
        g => g.type === 'Scene' && g.characterIds?.includes(gem.id)
      );
      if (partOfScenes.length > 0) {
        tabs.push({ id: 'scenes', label: 'In Scenes' });
      }
    } else if (gem.type === 'Scene') {
      if (gem.characterIds && gem.characterIds.length > 0) {
        tabs.push({ id: 'characters', label: 'Characters' });
      }
    }

    return tabs;
  };

  const tabConfiguration = getTabConfiguration();

  // Helper to find world for a gem
  const getWorldForGem = (gemIdToFind: string): World | undefined => {
    return worlds.find(w => 
      [...(w.characters || []), ...(w.stories || []), ...(w.adventures || []), ...(w.scenes || [])].some(g => g.id === gemIdToFind)
    );
  };

  const currentGemWorld = gem ? getWorldForGem(gem.id) : null;
  const featuredWorldGems = currentGemWorld ? 
    [...(currentGemWorld.characters || []), ...(currentGemWorld.adventures || []), ...(currentGemWorld.scenes || [])].slice(0, 4).map(g => mapGemToGridItem(g as Gem))
    : [];

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
    <div className="min-h-screen bg-gradient-dark">
      {/* Hero Section */}
      <Section 
        variant="transparent" 
        className="relative pt-12 pb-16 bg-gradient-pink-purple text-white rounded-b-3xl md:rounded-b-[3rem] lg:rounded-b-[4rem] overflow-hidden mx-4 md:mx-8 mt-4 md:mt-8"
      >
        <div className="lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 px-6 md:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {gem.name}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0">
              {gem.attributes?.traits && (
                <div className="flex flex-wrap gap-3 justify-center">
                  {gem.attributes.traits.map((trait) => (
                    <span
                      key={trait}
                      className="inline-flex items-center rounded-full bg-theme-surface/50 px-3 py-1.5 text-xs font-medium text-theme-foreground/80 ring-1 ring-inset ring-theme-foreground/10"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-10 max-w-xl lg:mt-0">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-white/10 backdrop-blur-md shadow-lg">
              {gem.imageUrl && (
                <Image
                  src={gem.imageUrl}
                  alt={gem.name}
                  fill
                  className="object-cover rounded-[1.5rem]"
                />
              )}
            </div>
          </div>
        </div>
      </Section>

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-background antialiased">
        {/* Dynamic World Banner */}
        {currentGemWorld && (
          <WorldContextBanner world={currentGemWorld} featuredGems={featuredWorldGems} />
        )}

        {/* Tabs Section */}
        {tabConfiguration.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <Tabs
              tabs={tabConfiguration}
              activeTab={activeTab}
              onChange={setActiveTab}
              className="justify-center"
            />
          </div>
        )}

        {/* Content Section based on Active Tab */}
        <div className="px-4 sm:px-6 lg:px-8 pb-12 flex flex-col gap-8 md:gap-12">
          {/* About Tab Content */} 
          {activeTab === 'about' && gem && (
            <>
              <Section title={`About This ${gem.type}`} variant="transparent" className="">
                <div className="prose prose-theme max-w-none text-theme-foreground/90">
                  <p>{gem.description || 'No description available.'}</p>
                </div>
              </Section>

              <Section title="Attributes" variant="transparent" className="">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {gem.attributes.power && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Power Level</dt>
                      <dd className="mt-1 text-2xl font-semibold">{gem.attributes.power}</dd>
                    </div>
                  )}
                  {gem.attributes.rarity && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Rarity</dt>
                      <dd className="mt-1 text-xl font-semibold">{gem.attributes.rarity}</dd>
                    </div>
                  )}
                  {gem.type && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Type</dt>
                      <dd className="mt-1 text-xl font-semibold">{gem.type}</dd>
                    </div>
                  )}
                  {gem.attributes.origin && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Origin</dt>
                      <dd className="mt-1 text-xl font-semibold">{gem.attributes.origin}</dd>
                    </div>
                  )}
                  {gem.genres && gem.genres.length > 0 && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground lg:col-span-1 md:col-span-2 sm:col-span-2">
                      <dt className="text-sm font-medium text-theme-foreground/70">Genres</dt>
                      <dd className="mt-1 flex flex-wrap gap-2">
                        {gem.genres.map((genre) => (
                          <span key={genre} className="text-sm bg-theme-accent/20 text-theme-accent px-2 py-0.5 rounded-full">
                            {genre}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                  {gem.attributes.sourceTranscript && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Source Transcript</dt>
                      <dd className="mt-1 text-xl font-semibold">{gem.attributes.sourceTranscript}</dd>
                    </div>
                  )}
                  {gem.attributes.estimatedPlaytime && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground">
                      <dt className="text-sm font-medium text-theme-foreground/70">Estimated Playtime</dt>
                      <dd className="mt-1 text-xl font-semibold">{gem.attributes.estimatedPlaytime}</dd>
                    </div>
                  )}
                  {gem.attributes.themes && gem.attributes.themes.length > 0 && (
                    <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground lg:col-span-2 md:col-span-3 sm:col-span-2">
                      <dt className="text-sm font-medium text-theme-foreground/70">Themes</dt>
                      <dd className="mt-1 flex flex-wrap gap-2">
                        {gem.attributes.themes.map((theme) => (
                          <span key={theme} className="text-sm bg-black/20 dark:bg-white/20 px-2 py-0.5 rounded-full">
                            {theme}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </Section>

              {gem.type === 'Adventure' && gem.attributes?.keyCharacters && gem.attributes.keyCharacters.length > 0 && (
                <Section 
                  title="Key Characters"
                  items={gem.attributes.keyCharacters.map(charId => getGemById(charId)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
                  itemsDisplay="grid"
                  gridCols={{ default: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
                  variant="transparent"
                />
              )}

              {gem.type === 'Adventure' && gem.attributes?.episodes && gem.attributes.episodes.length > 0 && (
                <Section title="Episodes" variant="transparent">
                  <ul className="space-y-6">
                    {gem.attributes.episodes.map((episode) => (
                      <li key={episode.id} className="p-4 rounded-[1.5rem] bg-theme-surface/50 backdrop-blur-sm">
                        <h4 className="text-md font-semibold text-theme-foreground">{episode.name}</h4>
                        {episode.sceneIds && episode.sceneIds.length > 0 && (
                          <div className="mt-2">
                            <p className="text-sm text-theme-foreground/70 mb-1">Scenes:</p>
                            <div className="flex flex-wrap gap-2">
                              {episode.sceneIds.map(sceneId => {
                                const sceneGem = getGemById(sceneId);
                                return sceneGem ? (
                                  <Link key={sceneId} href={`/gem/${sceneId}`} className="text-sm bg-theme-accent/20 text-theme-accent px-2 py-0.5 rounded-full hover:bg-theme-accent/30">
                                    {sceneGem.name}
                                  </Link>
                                ) : null;
                              })}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </Section>
              )}

              {gem.type === 'Scene' && gem.attributes?.adventureId && (
                (() => {
                  const parentAdventure = getGemById(gem.attributes.adventureId as string);
                  return parentAdventure ? (
                    <Section 
                      title="Parent Adventure"
                      items={[mapGemToGridItem(parentAdventure)]}
                      itemsDisplay="grid"
                      gridCols={{ default: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                      variant="transparent"
                    />
                  ) : null;
                })()
              )}
              
              {(() => {
                const world = getWorldForGem(gem.id);
                return world ? (
                  <Section title="Part of World" variant="transparent">
                     <div className="rounded-[1.5rem] bg-theme-surface/50 p-4 backdrop-blur-sm text-theme-foreground hover:bg-theme-surface/70 transition-colors duration-200">
                      <Link href={`/world/${world.id}`} className="block">
                        <div className="flex items-center gap-4">
                          {world.imageUrl && <Image src={world.imageUrl} alt={world.name} width={64} height={64} className="rounded-lg object-cover aspect-square" />}
                          <div>
                            <h4 className="text-lg font-semibold text-theme-foreground">{world.name}</h4>
                            <p className="text-sm text-theme-foreground/70">Explore {world.name}</p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Section>
                ) : null;
              })()}
            </>
          )}

          {/* Characters Tab Content */} 
          {activeTab === 'characters' && gem && gem.type === 'Adventure' && gem.involvedCharacterIds && (
             <Section 
              title="Characters in this Adventure"
              items={gem.involvedCharacterIds.map(id => getGemById(id)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
              itemsDisplay="grid"
              gridCols={{ default: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              variant="transparent"
            />
          )}
          {activeTab === 'characters' && gem && gem.type === 'Scene' && gem.characterIds && (
             <Section 
              title="Characters in this Scene"
              items={gem.characterIds.map(id => getGemById(id)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
              itemsDisplay="grid"
              gridCols={{ default: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              variant="transparent"
            />
          )}

          {/* Scenes Tab Content */} 
          {activeTab === 'scenes' && gem && gem.type === 'Adventure' && gem.sceneIds && (
             <Section 
              title="Scenes in this Adventure"
              items={gem.sceneIds.map(id => getGemById(id)).filter(Boolean).map(g => mapGemToGridItem(g as Gem))}
              itemsDisplay="grid"
              gridCols={{ default: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
              variant="transparent"
            />
          )}
          {activeTab === 'scenes' && gem && gem.type === 'Character' && (
            (() => {
              const partOfScenes = allAvailableGems.filter(
                g => g.type === 'Scene' && g.characterIds?.includes(gem.id)
              );
              return partOfScenes.length > 0 ? (
                <Section 
                  title={`Scenes Featuring ${gem.name}`}
                  items={partOfScenes.map(g => mapGemToGridItem(g as Gem))}
                  itemsDisplay="grid"
                  gridCols={{ default: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
                  variant="transparent"
                />
              ) : null;
            })()
          )}

          {/* Adventures Tab Content (for Characters) */} 
          {activeTab === 'adventures' && gem && gem.type === 'Character' && (
            (() => {
              const involvedAdventures = allAvailableGems.filter(
                g => g.type === 'Adventure' && g.involvedCharacterIds?.includes(gem.id)
              );
              return involvedAdventures.length > 0 ? (
                <Section 
                  title={`Adventures Featuring ${gem.name}`}
                  items={involvedAdventures.map(g => mapGemToGridItem(g as Gem))}
                  itemsDisplay="grid"
                  gridCols={{ default: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
                  variant="transparent"
                />
              ) : null;
            })()
          )}

          {/* Adventure Log Tab Content */} 
          {activeTab === 'log' && gem && gem.type === 'Adventure' && (
            (() => {
              const adventureChatSession = mockChatHistory.find(session => session.adventureId === gem.id);
              return adventureChatSession && adventureChatSession.messages.length > 0 ? (
                <Section title="Adventure Log" variant="transparent">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {adventureChatSession.messages.map((msg: ChatMessage, index: number) => (
                      <ChatMessageItem key={index} message={msg} />
                    ))}
                  </div>
                </Section>
              ) : (
                <Section title="Adventure Log" variant="transparent">
                  <p className="text-center text-theme-foreground/70">No adventure log found for this gem.</p>
                </Section>
              );
            })()
          )}
        </div>
      </main>
    </div>
  );
}
