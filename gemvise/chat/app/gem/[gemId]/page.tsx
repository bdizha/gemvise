'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChatBubbleLeftRightIcon, SparklesIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { worlds, type World } from '@/data/worldData';
import type { Gem } from '@/types/gems';
import { Section, type SectionProps } from '@/components/layout/Section';
import type { GridItem } from '@/components/layout/Grid/types';
import { Button } from '@/components/layout/Button';
import { mockChatHistory, type ChatMessage } from '@/data/mockChatHistory';
import ChatMessageItem from '@/components/chat/ChatMessageItem';
import { Badge } from '@geist-ui/core'; // Changed import path
// import WorldContextBanner from '@/components/shared/WorldContextBanner';

const gradients = [
  '/gradients/GV-gradient-01.png',
  '/gradients/GV-gradient-02.png',
  '/gradients/GV-gradient-03.png',
  '/gradients/GV-gradient-04.png',
  '/gradients/GV-gradient-05.png',
];
const getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];

interface PageSectionConfig extends Omit<SectionProps, 'items' | 'children' | 'title'> {
  id: string;
  title?: string | ((gem: Gem) => string);
  shouldRender: (gem: Gem, allGems?: Gem[]) => boolean;
  items?: GridItem[];
  children?: React.ReactNode | ((gem: Gem, allGems?: Gem[], gemId?: string) => React.ReactNode);
  getContent?: (gem: Gem, allGems?: Gem[]) => GridItem[] | React.ReactNode;
}

export default function GemDetail() {
  const params = useParams() as { gemId: string };
  const router = useRouter();
  const [gem, setGem] = useState<Gem | null>(null);
  const [allAvailableGems, setAllAvailableGems] = useState<Gem[]>([]);
  const [loading, setLoading] = useState(true);

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
    const foundGem = allGems.find((g) => g.id === gemId);

    setGem(foundGem || null);
    setLoading(false);
  }, [params.gemId]);

  const getGemById = (id: string): Gem | undefined => {
    return allAvailableGems.find((g) => g.id === id);
  };

  const mapGemToGridItem = (itemGem: Gem): GridItem => ({
    id: itemGem.id,
    title: itemGem.name,
    description: itemGem.description
      ? itemGem.description.substring(0, 100) +
        (itemGem.description.length > 100 ? '...' : '')
      : 'No description available.',
    imageUrl: itemGem.imageUrl || getRandomGradient(),
    href: `/gem/${itemGem.id}`,
    subtitle: itemGem.attributes?.rarity || itemGem.type,
    cardVariant: itemGem.type ? itemGem.type.toLowerCase() : 'default',
  });

  const getWorldForGem = (gemIdToFind: string): World | undefined => {
    return worlds.find((w) =>
      [
        ...(w.characters || []),
        ...(w.stories || []),
        ...(w.adventures || []),
        ...(w.scenes || []),
      ].some((g) => g.id === gemIdToFind)
    );
  };

  const currentGemWorld = gem ? getWorldForGem(gem.id) : null;
  const featuredWorldGems = currentGemWorld
    ? [
        ...(currentGemWorld.characters || []),
        ...(currentGemWorld.adventures || []),
        ...(currentGemWorld.scenes || []),
      ]
        .slice(0, 4)
        .map((g) => mapGemToGridItem(g as Gem))
    : [];

  const sectionsConfig: PageSectionConfig[] = gem
    ? [
        // ... other sections
        {
          id: 'related-gems',
          title: 'Related Gems',
          variant: 'grid',
          shouldRender: (gem, allGems) => allGems ? allGems.filter(g => g.id !== gem.id).length > 0 : false,
          items: (() => { 
            if (!allGems || !gem) return [];
            return allGems
              .filter(g => g.id !== gem.id) 
              .map(g => mapGemToGridItem(g));
          })(),
        },
        {
          id: 'world',
          title: (gem) => gem.world,
          variant: 'default',
          shouldRender: (gem) => !!gem.world,
          children: (() => { 
            if (!gem || !gem.world) return null;
            const worldGem = allGems?.find(g => g.name === gem.world && g.type === 'Story');
            if (!worldGem) return <p>Details about {gem.world} are yet to be discovered.</p>;      
            return (
              <div className="prose dark:prose-invert max-w-none">
                <p>{worldGem.description}</p>
                {/* Add more world details here */}
              </div>
            );
          })(),
        },
        {
          id: 'tags-and-attributes',
          title: 'Tags & Attributes',
          variant: 'default',
          shouldRender: (gem) => (gem.genres && gem.genres.length > 0) || (gem.attributes && Object.keys(gem.attributes).length > 0),
          children: (() => { 
            if (!gem) return null;
            return (
              <div className="flex flex-wrap gap-2">
                {gem.genres?.map(genre => <Badge key={genre} variant="secondary">{genre}</Badge>)}
                {gem.attributes?.traits?.map(trait => <Badge key={trait} variant="outline">{trait}</Badge>)}
                {gem.attributes?.rarity && <Badge variant="default">Rarity: {gem.attributes.rarity}</Badge>}
                {typeof gem.attributes?.level === 'number' && <Badge variant="default">Level: {gem.attributes.level}</Badge>}
                {/* Render other attributes as needed */}
              </div>
            );
          })(),
        },
        {
          id: 'casting-call',
          title: 'Casting Call',
          variant: 'grid',
          shouldRender: (gem) => gem.type === 'Character' && !!gem.casting && gem.casting.length > 0,
          items: (() => { 
            if (!gem || !gem.casting) return [];
            return gem.casting.map(actor => ({
              id: actor.id,
              title: actor.name,
              description: `Role: ${actor.role} - ${actor.description}`,
              // imageUrl: find image for actor if available
            }));
          })(),
        },
        {
          id: 'adventure-log',
          title: 'Adventure Log / Chapters',
          variant: 'default',
          shouldRender: (gem) => (gem.type === 'Adventure' && typeof gem.attributes?.chapters === 'number' && gem.attributes.chapters > 0) || 
                                 (gem.type === 'Story' && typeof gem.attributes?.chapters === 'number' && gem.attributes.chapters > 0),
          children: (() => { 
            if (!gem || typeof gem.attributes?.chapters !== 'number') return null;
            return (
              <p>
                This {gem.type.toLowerCase()} contains {gem.attributes.chapters} chapters. 
                {/* Placeholder for actual log/chapter list */}
              </p>
            );
          })(),
        },
        {
          id: 'scene-details',
          title: 'Scene Details',
          variant: 'default',
          shouldRender: (gem) => gem.type === 'Scene' && typeof gem.attributes?.scenes === 'number',
          children: (() => { 
            if (!gem || typeof gem.attributes?.scenes !== 'number') return null;
            return (
              <p>
                This scene is part of a larger narrative, potentially one of {gem.attributes.scenes} scenes in its act/story.
                {/* Placeholder for more scene details */}
              </p>
            );
          })(),
        },
        {
          id: 'lore-and-history',
          title: 'Lore & History',
          variant: 'grid',
          gridVariant: 'compact',
          shouldRender: (gem, allGems) => gem.type === 'Story' && (allGems?.filter(g => g.world === gem.name && g.id !== gem.id).length ?? 0) > 0,
          items: (() => { 
            if (!gem || !allGems || gem.type !== 'Story') return [];
            return allGems
              .filter((g): g is Gem => Boolean(g)) 
              .filter(g => g.world === gem.name && g.id !== gem.id)
              .map(g => ({
                id: g.id,
                title: g.name,
                description: g.description.substring(0, 100) + (g.description.length > 100 ? '...' : ''),
                category: g.category,
                imageUrl: g.imageUrl,
                // Potentially add a click handler or link to the gem's page
                onClick: () => router.push(`/gem/${g.id}`)
              }));
          })(),
        },
        {
          id: 'chat-history',
          title: 'Chat History',
          variant: 'transparent',
          shouldRender: (gem) => gem.type === 'Character' && !!gem.username, 
          children: (gem) => { 
            if (!gem || !gem.username) return null;
            // Filter messages: show user messages and messages from *this* gem (character)
            const relevantMessages = mockChatHistory.filter(
              (msg) => msg.sender === 'user' || msg.sender === gem.username
            );

            return (
              <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto p-4 bg-background rounded-lg">
                {relevantMessages.length > 0 ? (
                  relevantMessages.map((msg) => (
                    <ChatMessageItem key={msg.id} message={msg} /> 
                  ))
                ) : (
                  <p className="text-center text-muted-foreground">No chat history yet. Start the conversation!</p>
                )}
              </div>
            );
          },
        },
        // ... other sections
      ]
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
        <p className="mt-2 text-theme-foreground/60">
          This gem doesn't exist or is still being discovered.
        </p>
        <Link
          href="/explore"
          className="mt-6 rounded-[1rem] bg-gradient-pink-purple px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90"
        >
          Explore Other Gems
        </Link>
      </div>
    );
  }

  const pageTitle = `${gem.name} - Details`;
  const pageDescription = gem.description || `Explore the details of ${gem.name}.`;

  // Dynamically generate sections based on the gem's data
  const activeSections = sectionsConfig.filter(sectionConfig => {
    try {
      return sectionConfig.shouldRender(gem, allAvailableGems);
    } catch (error) {
      console.error(`Error in shouldRender for section ${sectionConfig.id}:`, error);
      return false;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {/* Gem Header Section */}
      <Section 
        variant="profile" 
        heroImageUrl={gem.imageUrl}
        heroImageAlt={gem.name}
        className="mb-8"
      >
        <div className="text-center md:text-left z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white shadow-black [text-shadow:0_2px_4px_var(--tw-shadow-color)]">{gem.name}</h1>
          <p className="text-xl text-gray-200 mb-4  shadow-black [text-shadow:0_1px_2px_var(--tw-shadow-color)]">{gem.title || gem.type}</p>
          {gem.category && <Badge variant="secondary" className="text-lg mb-4">{gem.category}</Badge>}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 shadow-black [text-shadow:0_1px_2px_var(--tw-shadow-color)]">
            {gem.description}
          </p>
          {/* Action Buttons can go here */}
        </div>
      </Section>

      {/* Dynamically Rendered Sections */}
      {activeSections.map(sectionConfig => {
        let sectionContent: React.ReactNode | GridItem[] | undefined;
        let sectionTitle: string | undefined;

        if (typeof sectionConfig.title === 'function') {
          sectionTitle = sectionConfig.title(gem);
        } else {
          sectionTitle = sectionConfig.title;
        }

        if (sectionConfig.items) {
          // If items is already an array (due to IIFE or direct assignment)
          sectionContent = sectionConfig.items;
        } else if (typeof sectionConfig.children === 'function') {
          sectionContent = sectionConfig.children(gem, allAvailableGems, params.gemId);
        } else {
          sectionContent = sectionConfig.children;
        }
        
        // Handle cases where getContent might be used (though current setup relies on items/children)
        if (sectionConfig.getContent) {
          const contentFromGetter = sectionConfig.getContent(gem, allAvailableGems);
          // Assuming getContent could return either GridItem[] for 'items' or ReactNode for 'children'
          // This logic might need refinement based on how getContent is intended to be used with SectionProps
          if (Array.isArray(contentFromGetter) && sectionConfig.variant === 'grid') {
            sectionContent = contentFromGetter as GridItem[];
          } else if (!Array.isArray(contentFromGetter)) {
            sectionContent = contentFromGetter as React.ReactNode;
          }
        }

        // Determine if content should be passed as 'items' or 'children' to Section
        const sectionSpecificProps: Partial<SectionProps> = {};
        if (sectionConfig.variant === 'grid' || sectionConfig.variant === 'slider') {
          if(Array.isArray(sectionContent)) {
            sectionSpecificProps.items = sectionContent as GridItem[];
          } else if (sectionContent) {
            // If it's a grid/slider but content isn't an array, it's probably meant for children (e.g. custom layout)
            sectionSpecificProps.children = sectionContent as React.ReactNode;
          }
        } else {
          sectionSpecificProps.children = sectionContent as React.ReactNode;
        }

        return (
          <Section
            key={sectionConfig.id}
            title={sectionTitle}
            variant={sectionConfig.variant}
            gridVariant={sectionConfig.gridVariant}
            gridColumns={sectionConfig.gridColumns}
            className={sectionConfig.className}
            // Pass items or children based on content type and section variant
            {...sectionSpecificProps}
          />
        );
      })}
    </div>
  );
}
