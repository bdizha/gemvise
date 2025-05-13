'use client';

import { useState, useEffect } from 'react';
import Message from './Message';
import ChatInput from './ChatInput';
import { mockChatHistory, type MockChatSession, type ChatMessage as AppChatMessage } from '@/data/mockChatHistory';

interface UIMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatProps {
  adventureId: string;
}

const Chat = ({ adventureId }: ChatProps) => {
  const [messages, setMessages] = useState<UIMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [adventureName, setAdventureName] = useState<string>('');

  useEffect(() => {
    if (adventureId) {
      const currentChatSession = mockChatHistory.find(session => session.adventureId === adventureId);
      if (currentChatSession) {
        setAdventureName(currentChatSession.adventureName);
        const uiMessages: UIMessage[] = currentChatSession.messages.map(msg => ({
          role: msg.sender === 'gem' ? 'assistant' : 'user',
          content: msg.text,
        }));
        setMessages(uiMessages);
      } else {
        setMessages([]);
        setAdventureName('');
      }
    }
  }, [adventureId]);

  const handleSubmit = async (input: string) => {
    const userMessage: UIMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = "This is a placeholder response. Gemium integration coming soon!";
      const assistantMessage: UIMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);

      const sessionIndex = mockChatHistory.findIndex(session => session.adventureId === adventureId);
      if (sessionIndex !== -1) {
        const newAppUserMessage: AppChatMessage = { id: `msg-${Date.now()}`, sender: 'user', text: input, timestamp: new Date().toISOString() };
        const newAppAssistantMessage: AppChatMessage = { id: `msg-${Date.now()+1}`, sender: 'gem', text: response, timestamp: new Date().toISOString() };
        mockChatHistory[sessionIndex].messages.push(newAppUserMessage, newAppAssistantMessage);
        mockChatHistory[sessionIndex].lastMessageSnippet = response.substring(0, 50) + '...';
        mockChatHistory[sessionIndex].timestamp = new Date().toISOString();
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-transparent">
      {adventureName && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{adventureName}</h1>
        </div>
      )}
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
