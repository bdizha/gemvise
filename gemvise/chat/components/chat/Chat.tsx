'use client';

import { useState } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (input: string) => {
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      // Here we'll integrate with Gemium
      const response = "This is a placeholder response. Gemium integration coming soon!";
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto py-4">
        <div className="mx-auto max-w-3xl">
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
          {loading && (
            <div className="flex justify-start px-4">
              <div className="rounded-[1.5rem] bg-gray-100 dark:bg-gray-700 p-4 text-sm text-gray-900 dark:text-gray-100">
                Thinking...
              </div>
            </div>
          )}
        </div>
      </div>
      <ChatInput onSubmit={handleSubmit} loading={loading} />
    </div>
  );
};

export default Chat;
