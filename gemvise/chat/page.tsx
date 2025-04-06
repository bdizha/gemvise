import React, { useState } from 'react';
import styles from './Chat.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    role: 'assistant' as const,
    content: "Hello darling! I'm Marilyn Monroe. *adjusts pearls with a playful smile* What's on your mind today?"
  }
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    const userMessage: Message = { role: 'user' as const, content: newMessage.trim() };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/marilyn-chat/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant' as const, content: data.content }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant' as const,
        content: "Oh darling, it seems I got a bit flustered there. Could you repeat that for me?"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="fixed top-0 w-full bg-gray-800 p-4 z-10">
        <h1 className="text-xl font-semibold text-white">Chat with Marilyn Monroe</h1>
      </header>

      <main className="flex-1 overflow-y-auto pt-20 pb-24">
        <div className="max-w-4xl mx-auto px-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-6 ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-lg p-4 max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-100'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
