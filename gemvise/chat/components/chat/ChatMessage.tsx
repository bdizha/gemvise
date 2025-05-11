'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { UserIcon } from '@heroicons/react/24/solid'; // Using solid for a filled user icon
import { type Message } from '@/data/mockChatHistory';
import { type Gem } from '@/types/gemium'; // To get character image
import { formatRelativeTime } from '@/utils/utils'; // For message timestamps

interface ChatMessageProps {
  message: Message;
  allGems: Gem[]; // To find character avatars
}

const ChatMessage: FC<ChatMessageProps> = ({ message, allGems }) => {
  const isUserMessage = message.sender === 'user';

  let senderName = isUserMessage ? 'You' : message.sender;
  let avatarUrl: string | null = null;

  if (!isUserMessage) {
    const characterGem = allGems.find(gem => gem.id === message.sender || gem.name === message.sender);
    if (characterGem) {
      senderName = characterGem.name; // Use the proper name if ID was used as sender
      if (characterGem.imageUrl) {
        avatarUrl = characterGem.imageUrl;
      }
    }
  }

  return (
    <div
      className={`group relative max-w-3xl m-auto w-full p-2 flex ${
        isUserMessage ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`flex items-start gap-2 ${
          isUserMessage ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* Avatar */} 
        <div className="mt-1 flex-shrink-0">
          {isUserMessage ? (
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-theme-accent text-theme-accent-foreground">
              <UserIcon className="h-5 w-5" />
            </div>
          ) : avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={senderName}
              width={32}
              height={32}
              className="rounded-full object-cover bg-theme-surface"
            />
          ) : (
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-theme-surface text-theme-foreground">
              {senderName.substring(0, 1).toUpperCase()}
            </div>
          )}
        </div>

        {/* Message Bubble and Meta */} 
        <div
          className={`flex flex-col gap-1 ${
            isUserMessage ? 'items-end' : 'items-start'
          }`}
        >
          <div className="mx-2 flex flex-row items-center gap-2 font-light">
            {!isUserMessage && <div className="text-sm text-theme-muted-foreground">{senderName}</div>}
            <div className="text-xs text-theme-muted-foreground/70">
              {formatRelativeTime(message.timestamp)}
            </div>
          </div>
          <div
            data-testid="completed-message"
            className={`mt-0.5 max-w-md md:max-w-lg rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
              isUserMessage
                ? 'bg-theme-accent text-theme-accent-foreground rounded-br-none'
                : 'bg-theme-surface text-theme-foreground rounded-bl-none'
            }`}
            style={{ minWidth: '60px' }}
          >
            {/* Using pre-wrap to respect newlines in message text */} 
            <p style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {message.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
