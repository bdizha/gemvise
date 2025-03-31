'use client';

import { useParams } from 'next/navigation';
import Chat from '../../../components/chat/Chat';

export default function ChatPage() {
  const params = useParams();
  const gemId = params.gemId as string;

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold text-gray-900">
            Chat with {gemId}
          </h1>
        </div>
      </header>
      <Chat />
    </div>
  );
}
