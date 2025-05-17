'use client';

import React, { type ElementType } from 'react';
import { type FC, useEffect, useRef, useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import Button from '@/components/ui/Button';
import {
  PlusIcon,
  PaintBrushIcon,
  UserCircleIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { mockChatHistory, type MockChatSession } from '@/data/mockChatHistory';
import { worlds as appWorlds, type World } from '@/data/worldData';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const renderIcon = (icon: ElementType | string | undefined, className: string, imageUrl?: string, iconElement?: ReactNode) => {
  if (iconElement) return iconElement;
  if (imageUrl) return <img src={imageUrl} alt="icon" className={className} />;
  if (typeof icon === 'string') return <img src={icon} alt="icon" className={className} />;
  if (icon) return React.createElement(icon as ElementType, { className });
  return null;
};

const createOptions = [
  { href: '/create/gem', label: 'Create Roleplay', icon: PaintBrushIcon, variant: 'sidebar-create-option' as const },
  { href: '/create/character', label: 'Create Character', icon: UserCircleIcon, variant: 'sidebar-create-option' as const },
  { href: '/create/world', label: 'Create Story', icon: GlobeAltIcon, variant: 'sidebar-create-option' as const },
];

const mainNavLinks = [
  { href: '/explore', label: 'Discover', icon: PaperAirplaneIcon },
];

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const createMenuRef = useRef<HTMLDivElement>(null);
  const MAX_RECENT_ITEMS = 3;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setCreateMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeSidebarAndMenu = () => {
    if (isOpen && window.innerWidth < 1024) {
      setIsOpen(false);
    }
    setCreateMenuOpen(false);
  };

  const iconBaseClass = 'h-5 w-5';
  const iconWrapperBaseClass = 'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[1.5rem]';

  return (
    <>
      <div
        className={`fixed inset-0 z-55 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-60 flex h-screen flex-col bg-gradient-to-b from-neutral-900 to-neutral-800 border-r border-neutral-700/50 shadow-2xl transition-all duration-300 ${isOpen ? 'w-72' : 'w-20'}`}
      >
        <div className={`flex h-16 shrink-0 items-center px-4 ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && <Logo variant="sidebar" isSidebarOpen={isOpen} />}
          <Button
            variant="ghost"
            size="icon"
            className={`text-neutral-400 hover:text-white ${isOpen ? '' : 'p-2.5'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle sidebar"
          >
            {isOpen ? <Bars3BottomLeftIcon className="h-6 w-6" /> : <Bars3BottomRightIcon className="h-6 w-6" />}
          </Button>
        </div>

        {/* Expanded Sidebar Content */}
        {isOpen ? (
          <>
            <div className="flex-grow overflow-y-auto px-4 thin-scrollbar">
              <nav className="mt-4 space-y-1.5">
                {/* Create Button & Dropdown */}
                <div className="relative w-full" ref={createMenuRef}>
                  <Button
                    variant="sidebar-create-main"
                    onClick={() => setCreateMenuOpen(!createMenuOpen)}
                    aria-expanded={createMenuOpen}
                    aria-haspopup="true"
                    className="text-white"
                  >
                    <span className={`${iconWrapperBaseClass} bg-white/10`}>
                      <PlusIcon className={`${iconBaseClass} text-white`} />
                    </span>
                    <span className="flex-1 text-left">Create</span>
                    <ChevronDownIcon className={`h-4 w-4 text-white/70 transition-transform ${createMenuOpen ? 'rotate-180' : ''}`} />
                  </Button>
                  {createMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-1.5 p-1.5 bg-neutral-800/90 backdrop-blur-md shadow-xl ring-1 ring-pink-500/30 rounded-xl z-50 grid gap-1">
                      {createOptions.map(({ href, label, icon, variant: itemVariant }) => (
                        <Button
                          key={href}
                          href={href}
                          variant={itemVariant}
                          onClick={closeSidebarAndMenu}
                          className={`text-sm font-medium ${pathname === href ? 'ring-1 ring-pink-500 opacity-100' : 'opacity-90 hover:opacity-100'}`}
                        >
                          <span className={`${iconWrapperBaseClass} bg-white/5`}>
                            {renderIcon(icon, `${iconBaseClass} text-white/90`)}
                          </span>
                          <span className="flex-1 text-left text-white/90">{label}</span>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Main Navigation Links */}
                {mainNavLinks.map(({ href, label, icon }) => (
                  <Button
                    key={href}
                    href={href}
                    variant={pathname === href ? 'sidebar-active' : 'sidebar'}
                    onClick={closeSidebarAndMenu}
                  >
                    <span className={`${iconWrapperBaseClass} ${pathname === href ? 'bg-white/15' : 'bg-white/10 dark:bg-black/20'}`}>
                      {renderIcon(icon, `${iconBaseClass} ${pathname === href ? 'text-white' : 'text-theme-foreground dark:text-neutral-200'}`)}
                    </span>
                    <span className="flex-1 text-left">{label}</span>
                  </Button>
                ))}
              </nav>

              {/* Timeline Section */}
              <div className="mt-6">
                <h3 className="px-3 text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-2 flex items-center">
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-1.5" />
                  Timeline
                </h3>
                <div className="space-y-1">
                  {mockChatHistory
                    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                    .slice(0, MAX_RECENT_ITEMS)
                    .map((chat: MockChatSession) => (
                      <Button
                        key={chat.id}
                        href={`/gem/${chat.adventureId}`}
                        variant={pathname === `/gem/${chat.adventureId}` ? 'sidebar-active' : 'sidebar'}
                        onClick={closeSidebarAndMenu}
                        className="relative" // For notification dot positioning
                      >
                        <span className={`${iconWrapperBaseClass} ${pathname === `/gem/${chat.adventureId}` ? 'bg-white/15' : 'bg-white/20 dark:bg-black/30'}`}>
                          <span className="text-xs font-semibold text-white">
                            {chat.adventureName.substring(0, 1).toUpperCase()}
                          </span>
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-left font-medium truncate ${pathname === `/gem/${chat.adventureId}` ? 'text-white' : 'text-theme-foreground dark:text-neutral-200'}`}>{chat.adventureName}</p>
                          <p className={`text-left truncate text-xs ${pathname === `/gem/${chat.adventureId}` ? 'text-white/70' : 'text-neutral-500 dark:text-neutral-400'}`}>{chat.lastMessageSnippet}</p>
                        </div>
                        {chat.unread && <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-pink-500 border-2 border-neutral-800"></span>}
                      </Button>
                    ))}
                  {mockChatHistory.length > MAX_RECENT_ITEMS && (
                    <Button
                      href="/history"
                      variant="sidebar-view-all"
                      onClick={closeSidebarAndMenu}
                    >
                       <span className={`${iconWrapperBaseClass} bg-white/5`}>
                        <ArrowRightIcon className={`${iconBaseClass} text-white`} />
                      </span>
                      <span className="flex-1 text-left">View All Timeline</span>
                    </Button>
                  )}
                </div>
              </div>

              {/* Worlds Section */}
              <div className="mt-6 mb-4">
                <h3 className="px-3 text-xs font-semibold uppercase text-neutral-500 tracking-wider mb-2 flex items-center">
                  <GlobeAltIcon className="h-4 w-4 mr-1.5" />
                  Worlds
                </h3>
                <div className="space-y-1">
                  {appWorlds.slice(0, 4).map((world: World) => (
                    <Button
                      key={world.id}
                      href={world.href} 
                      variant={pathname === world.href ? 'sidebar-active' : 'sidebar'}
                      onClick={closeSidebarAndMenu}
                      style={pathname !== world.href && world.imageUrl ? { backgroundImage: `url(${world.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' } : {}}
                      className={`${pathname === world.href ? '' : 'bg-neutral-700/30'}`}
                    >
                      <span className={`${iconWrapperBaseClass} ${pathname === world.href ? 'bg-white/15' : 'bg-black/30 backdrop-blur-sm'}`}>
                        {renderIcon(world.icon, `${iconBaseClass} ${pathname === world.href ? 'text-white' : 'text-white/80'}`, world.imageUrl && pathname === world.href ? undefined : world.imageUrl )}
                      </span>
                      <span className={`flex-1 text-left font-semibold ${pathname === world.href ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>{world.name}</span>
                    </Button>
                  ))}
                  {appWorlds.length > 4 && (
                    <Button
                      href="/explore?tab=worlds" 
                      variant="sidebar-view-all"
                      onClick={closeSidebarAndMenu}
                    >
                      <span className={`${iconWrapperBaseClass} bg-white/5`}>
                        <ArrowRightIcon className={`${iconBaseClass} text-white`} />
                      </span>
                      <span className="flex-1 text-left">View All Worlds</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) 
        : 
        /* Collapsed Sidebar Content */
        (
          <div className="flex-grow overflow-y-auto px-2 py-4 space-y-2 thin-scrollbar">
            {/* Create Button - Collapsed */}
            <Button
              variant='sidebar-collapsed'
              size="icon" 
              className="w-full p-2.5 text-white bg-muted-foreground/30 hover:bg-muted-foreground/60"
              onClick={() => { setIsOpen(true); setCreateMenuOpen(true); }} 
              aria-label="Create"
            >
              <PlusIcon className={iconBaseClass} />
            </Button>

            {/* Main Nav - Collapsed */}
            {mainNavLinks.map(({ href, icon }) => (
              <Button
                key={`${href}-collapsed`}
                href={href}
                variant={pathname === href ? 'sidebar-collapsed-active' : 'sidebar-collapsed'}
                size="icon"
                className="w-full p-2.5"
                onClick={closeSidebarAndMenu}
                aria-label={href.substring(1)} 
              >
                 {renderIcon(icon, `${iconBaseClass} ${pathname === href ? 'text-white' : 'text-theme-foreground dark:text-neutral-200'}`)}
              </Button>
            ))}

            <div className="border-t border-white/10 my-2"></div>

            {/* Timeline - Collapsed */}
            {mockChatHistory.slice(0, MAX_RECENT_ITEMS).map((chat: MockChatSession) => (
              <Button
                key={`${chat.id}-collapsed`}
                href={`/gem/${chat.adventureId}`}
                variant={pathname === `/gem/${chat.adventureId}` ? 'sidebar-collapsed-active' : 'sidebar-collapsed'}
                size="icon"
                className="w-full p-2.5 relative" 
                onClick={closeSidebarAndMenu}
                aria-label={chat.adventureName}
              >
                <span className="text-xs font-semibold text-white">
                  {chat.adventureName.substring(0, 1).toUpperCase()}
                </span>
                {chat.unread && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-pink-500 border border-neutral-800"></span>}
              </Button>
            ))}

            <div className="border-t border-white/10 my-2"></div>

            {/* Worlds - Collapsed */}
            {appWorlds.slice(0, 4).map((world: World) => (
              <Button
                key={`${world.id}-collapsed`}
                href={world.href}
                variant={pathname === world.href ? 'sidebar-collapsed-active' : 'sidebar-collapsed'}
                size="icon"
                className="w-full p-2.5"
                onClick={closeSidebarAndMenu}
                style={pathname !== world.href && world.imageUrl ? { backgroundImage: `url(${world.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' } : {}}
                aria-label={world.name}
              >
                {renderIcon(undefined, `${iconBaseClass} text-white/80`, world.imageUrl)}
              </Button>
            ))}
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
