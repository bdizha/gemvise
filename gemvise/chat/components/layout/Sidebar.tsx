'use client';

import { type FC, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/shared/Logo';
import MenuIcon from '@/components/shared/MenuIcon';
import { WorldNavigation } from '@/components/navigation/WorldNavigation';
import { PlusIcon, PaintBrushIcon, ChevronDoubleRightIcon  , PaperAirplaneIcon, GlobeAltIcon, UserCircleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { mockChatHistory, type MockChatSession } from '@/data/mockChatHistory';
import { formatRelativeTime } from '@/utils/utils';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname();
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const createMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (createMenuRef.current && !createMenuRef.current.contains(event.target as Node)) {
        setCreateMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const createOptions = [
    { href: '/create/gem', className: 'bg-gradient-pink-purple', label: 'Create Roleplay', icon: PaintBrushIcon },
    { href: '/create/character', className: 'bg-gradient-pink-purple', label: 'Create Character', icon: UserCircleIcon },
    { href: '/create/world', className: 'bg-gradient-pink-purple', label: 'Create Story', icon: GlobeAltIcon },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 z-55 bg-theme-scrim transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-60 h-screen bg-gradient-dark bg-cover bg-center transition-all duration-300 backdrop-blur-md ${
          isOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
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

          {isOpen && (
            <>
              {/* Navigation Links */}
              <div className="flex-grow overflow-y-auto px-4">
                <nav className="mt-4 space-y-2">
                  {/* Create Button with Dropdown */}
                  <div className="relative w-full" ref={createMenuRef}>
                    <button
                      onClick={() => setCreateMenuOpen(!createMenuOpen)}
                      className="flex h-[48px] w-full items-center gap-3 rounded-[4rem] px-4 text-theme-foreground transition-all duration-300 bg-[#333639]/30 hover:bg-[#333639]/60"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10">
                        <PlusIcon className="h-5 w-5 text-white" />
                      </span>
                      <span className="flex-1 text-left text-white">Create</span>
                    </button>

                    {/* Create Menu Dropdown */}
                    {createMenuOpen && (
                      <div className="absolute top-full left-0 w-full mt-2 p-4 bg-[#333639]/30 hover:bg-[#333639]/60 shadow-xl ring-1 ring-pink-500/10 backdrop-blur-md z-50 grid gap-2">
                        {createOptions.map(({ href, label, icon: Icon, className }) => (
                          <Link
                            key={href}
                            href={href}
                            className={`flex w-full items-center gap-3 p-4 text-sm font-bold text-[#333639] leading-tight ${className} rounded-[3rem] overflow-hidden hover:bg-[#333639]/30`}
                            onClick={() => setCreateMenuOpen(false)}
                          >
                            <span className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10">
                              <Icon className="h-5 w-5" />
                            </span>
                            <span className="flex-1 text-left">{label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Regular Navigation Links */}
                  {[
                    { href: '/explore', label: 'Discover', icon: PaperAirplaneIcon }
                  ].map(({ href, label, icon: Icon }) => (
                    <Link key={href} href={href} className="w-full">
                      <button
                        className={`flex h-[48px] w-full items-center gap-3 rounded-[4rem] px-4 text-theme-foreground transition-all duration-300 ${
                          pathname === href
                            ? 'bg-[#333639]/30 hover:bg-[#333639]/60'
                            : 'hover:bg-[#333639]/60 focus:outline-none'
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-[1.5rem] bg-white/10">
                          <Icon className="h-5 w-5 text-theme-foreground" />
                        </span>
                        <span className="flex-1 text-left">{label}</span>
                      </button>
                    </Link>
                  ))}
                </nav>

                {/* Chat Timeline Section */}
                <div className="mt-6">
                  <h3 className="px-4 text-xs font-semibold uppercase text-theme-muted-foreground tracking-wider mb-2 flex items-center">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                    Timeline
                  </h3>
                  <div className="space-y-1">
                    {mockChatHistory
                      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                      .map((chat: MockChatSession) => (
                        <Link
                          key={chat.id}
                          href={`/gem/${chat.adventureId}`}
                          className={`group flex items-center p-3 pr-4 rounded-[0.75rem] text-sm transition-colors hover:bg-[#333639]/40 ${
                            pathname === `/gem/${chat.adventureId}` ? 'bg-[#333639]/30' : ''
                          }`}
                          onClick={() => isOpen && setIsOpen(false)} // Close sidebar on mobile after click
                        >
                          <div className="flex-shrink-0 mr-3">
                            {chat.unread && (
                              <span className="absolute h-2.5 w-2.5 rounded-full bg-pink-500 border-2 border-[#090603]"></span>
                            )}
                            {/* Placeholder for an icon or avatar if we add one later for adventures */}
                            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-xs">
                              {chat.adventureName.substring(0, 1)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-white truncate">{chat.adventureName}</p>
                            <p className="text-xs text-theme-muted-foreground truncate">{chat.lastMessageSnippet}</p>
                          </div>
                          <time className="ml-2 text-xs text-theme-muted-foreground/70 whitespace-nowrap">
                            {formatRelativeTime(chat.timestamp)}
                          </time>
                        </Link>
                      ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Footer */}
              <div className="shrink-0 p-4">
                <WorldNavigation />
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
