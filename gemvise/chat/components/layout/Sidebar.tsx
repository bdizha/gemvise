'use client';

import { type FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/shared/Logo';
import MenuIcon from '@/components/shared/MenuIcon';
import { PlusIcon, PaintBrushIcon, UserCircleIcon, GlobeAltIcon, PaperAirplaneIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { mockChatHistory, type MockChatSession } from '@/data/mockChatHistory';
import { worlds as appWorlds } from '@/data/worldData';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const createOptions = [
  { href: '/create/gem', label: 'Create Roleplay', icon: PaintBrushIcon, itemClassName: 'bg-gradient-pink-purple text-[#333639] hover:opacity-80' },
  { href: '/create/character', label: 'Create Character', icon: UserCircleIcon, itemClassName: 'bg-gradient-pink-purple text-[#333639] hover:opacity-80' },
  { href: '/create/world', label: 'Create Story', icon: GlobeAltIcon, itemClassName: 'bg-gradient-pink-purple text-[#333639] hover:opacity-80' },
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

  const closeSidebar = () => {
    if (isOpen && window.innerWidth < 1024) {
      setIsOpen(false);
    }
    setCreateMenuOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-55 bg-theme-scrim/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-60 flex h-screen flex-col bg-gradient-dark bg-cover bg-center transition-all duration-300 backdrop-blur-md ${isOpen ? 'w-72' : 'w-20'}`}
      >
        <div className={`flex h-16 shrink-0 items-center px-4 ${isOpen ? 'justify-between' : 'justify-center'}`}>
          {isOpen && <Logo variant="sidebar" isSidebarOpen={isOpen} />}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-theme-muted-foreground hover:text-theme-foreground"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {isOpen ? (
          <>
            <div className="flex-grow overflow-y-auto px-4 thin-scrollbar">
              <nav className="mt-4 space-y-1.5">
                <div className="relative w-full" ref={createMenuRef}>
                  <SidebarItem
                    itemType='button'
                    onClick={() => setCreateMenuOpen(!createMenuOpen)}
                    label="Create"
                    icon={PlusIcon}
                    className='bg-[#333639]/30 hover:bg-[#333639]/60'
                    iconWrapperClassName='bg-white/10'
                    iconClassName='h-5 w-5 text-white'
                    labelClassName='flex-1 text-left text-white'
                  />
                  {createMenuOpen && (
                    <div className="absolute top-full left-0 w-full mt-2 p-2 bg-theme-surface/80 backdrop-blur-md shadow-xl ring-1 ring-pink-500/20 rounded-xl z-50 grid gap-1.5">
                      {createOptions.map(({ href, label, icon, itemClassName }) => (
                        <SidebarItem
                          key={href}
                          href={href}
                          label={label}
                          icon={icon}
                          onClick={closeSidebar}
                          isActive={pathname === href}
                          className={itemClassName}
                          iconWrapperClassName='bg-white/10'
                          iconClassName='h-5 w-5'
                          labelClassName='flex-1 text-left text-sm font-bold'
                          hoverClassName='hover:opacity-90'
                          activeClassName='ring-2 ring-pink-500'
                        />
                      ))}
                    </div>
                  )}
                </div>

                {mainNavLinks.map(({ href, label, icon }) => (
                  <SidebarItem
                    key={href}
                    href={href}
                    label={label}
                    icon={icon}
                    onClick={closeSidebar}
                    isActive={pathname === href}
                    className={pathname === href ? 'bg-[#ff9900]/30' : 'hover:bg-[#ff9900]/20'}
                    iconWrapperClassName='bg-white/10'
                    iconClassName='h-5 w-5 text-theme-foreground'
                    labelClassName='flex-1 text-left'
                  />
                ))}
              </nav>

              <div className="mt-6">
                <h3 className="px-4 text-xs font-semibold uppercase text-theme-muted-foreground tracking-wider mb-2 flex items-center">
                  <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                  Timeline
                </h3>
                <div className="space-y-1">
                  {mockChatHistory
                    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                    .slice(0, MAX_RECENT_ITEMS)
                    .map((chat: MockChatSession) => (
                      <SidebarItem
                        key={chat.id}
                        href={`/gem/${chat.adventureId}`}
                        label={chat.adventureName}
                        subLabel={chat.lastMessageSnippet}
                        iconElement={(
                          <span className="text-xs font-semibold text-white">
                            {chat.adventureName.substring(0, 1).toUpperCase()}
                          </span>
                        )}
                        onClick={closeSidebar}
                        isActive={pathname === `/gem/${chat.adventureId}`}
                        hasNotification={chat.unread}
                        className={`${pathname === `/gem/${chat.adventureId}` ? 'bg-[#ff9900]/30' : 'hover:bg-[#ff9900]/20'} text-white`}
                        iconWrapperClassName='bg-white/20'
                      />
                    ))}
                  {mockChatHistory.length > MAX_RECENT_ITEMS && (
                    <SidebarItem
                      href="/history" 
                      label="View All Timeline"
                      icon={ArrowRightIcon}
                      onClick={closeSidebar}
                      className='bg-[#333639]/40 hover:bg-[#333639]/70 text-white font-semibold'
                      iconWrapperClassName='bg-white/10'
                      iconClassName='h-5 w-5 text-white'
                      labelClassName='flex-1 text-left'
                    />
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="px-4 text-xs font-semibold uppercase text-theme-muted-foreground tracking-wider mb-2 flex items-center">
                  <GlobeAltIcon className="h-4 w-4 mr-2" />
                  Worlds
                </h3>
                <div className="space-y-1">
                  {appWorlds.slice(0, 4).map(world => (
                    <SidebarItem
                      key={world.id}
                      href={world.href}
                      label={world.name}
                      icon={world.icon}
                      imageUrl={world.imageUrl}
                      onClick={closeSidebar}
                      isActive={pathname === world.href}
                      className={`text-white ${pathname === world.href ? 'bg-[#ff9900]/30' : 'hover:bg-[#ff9900]/20'}`}
                      iconWrapperClassName='bg-black/20 backdrop-blur-sm'
                      iconClassName='h-5 w-5 text-white/80'
                      labelClassName='font-semibold'
                    />
                  ))}
                  {appWorlds.length > 4 && (
                    <SidebarItem
                      href="/explore" 
                      label="View All Worlds"
                      icon={ArrowRightIcon}
                      onClick={closeSidebar}
                      className='bg-[#333639]/40 hover:bg-[#333639]/70 text-white font-semibold'
                      iconWrapperClassName='bg-white/10'
                      iconClassName='h-5 w-5 text-white'
                      labelClassName='flex-1 text-left'
                    />
                  )}
                </div>
              </div>

            </div>
          </>
        ) : (
          <div className="flex-grow overflow-y-auto px-2 py-4 space-y-2 thin-scrollbar">
            <SidebarItem itemType='button' onClick={() => { setIsOpen(true); setCreateMenuOpen(true); }} label="Create" icon={PlusIcon} className='justify-center hover:bg-[#333639]/60' iconWrapperClassName='bg-white/10' iconClassName='h-5 w-5 text-white' labelClassName='hidden' />
            {mainNavLinks.map(({ href, label, icon }) => (
              <SidebarItem key={`${href}-collapsed`} href={href} label={label} icon={icon} onClick={closeSidebar} isActive={pathname === href} className={`justify-center ${pathname === href ? 'bg-[#ff9900]/30' : 'hover:bg-[#ff9900]/20'}`} iconWrapperClassName='bg-white/10' iconClassName='h-5 w-5 text-theme-foreground' labelClassName='hidden' />
            ))}
            <div className="border-t border-white/10 my-3"></div>
            {mockChatHistory.slice(0, 3).map((chat: MockChatSession) => (
              <SidebarItem key={`${chat.id}-collapsed`} href={`/gem/${chat.adventureId}`} label={chat.adventureName} iconElement={<span className="text-xs font-semibold text-white">{chat.adventureName.substring(0, 1).toUpperCase()}</span>} onClick={closeSidebar} isActive={pathname === `/gem/${chat.adventureId}`} hasNotification={chat.unread} className={`justify-center ${pathname === `/gem/${chat.adventureId}` ? 'bg-[#ff9900]/30' : 'hover:bg-[#ff9900]/20'}`} iconWrapperClassName='bg-white/20' labelClassName='hidden' />
            ))}
            <div className="border-t border-white/10 my-3"></div>
            {appWorlds.slice(0, 4).map(world => (
              <SidebarItem key={`${world.id}-collapsed`} href={world.href} label={world.name} icon={world.icon} onClick={closeSidebar} isActive={pathname === world.href} className={`justify-center ${pathname === world.href ? 'ring-2 ring-pink-500' : 'hover:opacity-90'}`} iconWrapperClassName='bg-black/20' iconClassName='h-5 w-5 text-white/80' labelClassName='hidden' imageUrl={world.imageUrl} />
            ))}
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
