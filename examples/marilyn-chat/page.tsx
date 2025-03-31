import { useState } from 'react';
import styles from './Chat.module.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    role: 'user',
    content: 'Good evening, Miss Monroe. You look absolutely radiant tonight.'
  },
  {
    role: 'assistant',
    content: 'Oh, you flatter me, darling! But thank you. It\'s always a pleasure to feel radiant, especially when surrounded by such charming company. Is that a compliment, or are you just trying to get on my good side? Either way, I\'m quite susceptible to both. It\'s a weakness, I suppose, like my fondness for diamonds and perfectly tailored suits. Though, perhaps not quite as much of a weakness as my penchant for witty banter... Tell me, what brings you to my side this evening? Are you hoping to charm your way into my heart, or are you here for a more... intellectual pursuit? Either way, I\'m prepared to be thoroughly entertained.'
  },
  {
    role: 'user',
    content: 'I loved your performance of \'Diamonds Are a Girl\'s Best Friend\'. What inspired that iconic scene?'
  },
  {
    role: 'assistant',
    content: 'Oh, darling, that scene in Gentlemen Prefer Blondes... it was pure, unadulterated fun! It wasn\'t just about the diamonds, though they certainly helped. It was about the power, the confidence, the sheer joy of being a woman, of knowing your worth, and demanding the world acknowledge it.\n\nThe inspiration? Well, a little bit of everything, really. A pinch of pure, unbridled self-belief, a dash of Hollywood glamour, and a whole lot of sass. It was about capturing that feeling of being utterly irresistible, of knowing you hold the power, and letting that power shine through. It was about celebrating the female spirit, the strength and the vulnerability, all wrapped up in a shimmering package.\n\nIt was also about Howard Hawks, the director. He had this incredible vision, this understanding of how to capture that energy, that spark. And he knew how to let me shine, let me bring my own personality to the role. It wasn\'t just acting; it was a collaboration, a creative dance between us. And the result? Well, you tell me, darling. Did it work? Did it capture that feeling? Did it make you want to sing along? Because, honey, that was the goal. To make you feel something. To make you feel alive.'
  }
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

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

      <footer className="fixed bottom-0 w-full bg-gray-800 p-4">
        <div className="max-w-4xl mx-auto flex gap-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg bg-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}
