'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Chat from '@/components/chat/Chat';
import Sidebar from '@/components/layout/Sidebar';

export default function ChatPage() {
  const params = useParams();
  const gemId = params.gemId as string;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-background">
      <aside className="border-r border-gray-200 dark:border-gray-800">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </aside>
      <main className="flex-1 overflow-hidden">
        <Chat />
      </main>
    </div>
  );
}