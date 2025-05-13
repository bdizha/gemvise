'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react'; 
import Chat from '@/components/chat/Chat';
import Sidebar from '@/components/layout/Sidebar'; 
import { getGemById } from '@/utils/gemUtils'; 
import { Gem } from '@/types'; 
import GemDetailPanel from '@/components/chat/GemDetailPanel'; 

export default function ChatPage() {
  const params = useParams();
  const gemId = params.gemId as string;
  const [isAppSidebarOpen, setIsAppSidebarOpen] = useState(true); 
  const [currentGem, setCurrentGem] = useState<Gem | undefined>(undefined);

  useEffect(() => {
    if (gemId) {
      const foundGem = getGemById(gemId);
      setCurrentGem(foundGem);
    }
  }, [gemId]);

  return (
    <div className="flex h-screen overflow-hidden bg-theme-surface dark:bg-theme-background">
      {/* Main App Navigation Sidebar */}
      <aside className="border-r border-theme-border dark:border-theme-border-dark">
        <Sidebar isOpen={isAppSidebarOpen} setIsOpen={setIsAppSidebarOpen} />
      </aside>

      {/* Main Content Area: Gem Details Panel + Chat Interface */}
      <main className="flex-1 flex overflow-hidden"> 
        {/* Gem Detail Panel */}
        <div className="w-1/3 lg:w-1/4 p-6 border-r border-theme-border dark:border-theme-border-dark overflow-y-auto bg-theme-surface-alt">
          <GemDetailPanel gem={currentGem} />
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-6 overflow-y-auto bg-theme-surface dark:bg-gradient-dark">
          {currentGem ? (
            <Chat adventureId={gemId} adventureName={currentGem.name} />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-theme-muted-foreground">Loading chat...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}