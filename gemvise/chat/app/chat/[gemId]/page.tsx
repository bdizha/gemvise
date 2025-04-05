'use client';

import { useParams } from 'next/navigation';
import Chat from '../../../components/chat/Chat';
import Link from 'next/link';

export default function ChatPage() {
  const params = useParams();
  const gemId = params.gemId as string;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
          </Link>
          <h1 className="text-lg font-semibold">
            <span className="bg-gradient-to-r from-[#EC4899] via-[#A855F7] to-[#6366F1] bg-clip-text text-transparent">
              Chat with {gemId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </span>
          </h1>
          <div className="w-5" />
        </div>
      </header>
      <Chat />
    </div>
  );
}
