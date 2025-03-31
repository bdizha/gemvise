'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ApiResponse {
  role: 'assistant';
  content: string;
  error?: string;
  details?: string;
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: 'Hello darling! I\'m Marilyn Monroe. *adjusts pearls with a playful smile* What\'s on your mind today?'
  }
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!newMessage.trim() || isLoading) return;
    
    const userMessage: Message = { role: 'user', content: newMessage };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: newMessage }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setError(errorMessage);
      const assistantMessage: Message = {
        role: 'assistant',
        content: 'Oh darling, it seems I got a bit flustered there. Could you repeat that for me?'
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[rgb(var(--background-rgb))]">
      <header className="fixed top-0 w-full bg-[rgba(var(--chat-bg),0.8)] backdrop-blur-md border-b border-gray-800 p-4 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[rgb(var(--accent-color))] flex items-center justify-center">
            <span className="text-white font-semibold">M</span>
          </div>
          <h1 className="text-xl font-semibold text-white">Chat with Marilyn Monroe</h1>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-4 text-red-200">
              {error}
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-6 message-appear ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`rounded-2xl p-4 max-w-[85%] shadow-lg ${
                  message.role === 'user'
                    ? 'bg-[rgb(var(--user-message-bg))]'
                    : 'bg-[rgb(var(--assistant-message-bg))]'
                }`}
              >
                <p className="message-content whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="fixed bottom-0 w-full border-t border-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="input-container rounded-2xl p-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                className={`send-button px-6 py-2 rounded-xl text-white font-medium hover:shadow-lg ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
