import type { ChatMessage } from '@/data/mockChatHistory'; // Adjust path if necessary
import { UserCircleIcon, SparklesIcon } from '@heroicons/react/24/solid'; // Example icons

interface ChatMessageItemProps {
  message: ChatMessage;
}

const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  const isUserMessage = message.sender === 'user';

  // Base classes for all messages - aiming for "card-like" feel
  const baseMessageClasses = 'max-w-[70%] p-3 rounded-[1.5rem] shadow-md mb-2'; 
  // Using rounded-[1.5rem] as a starting point, can be adjusted. 
  // Using p-3 for padding, can be adjusted.

  // User-specific styles
  const userMessageClasses = `
    ${baseMessageClasses}
    bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white 
    self-start ml-2 
  `; // Example gradient for user

  // Gem-specific styles
  const gemMessageClasses = `
    ${baseMessageClasses}
    bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-200
    self-end mr-2
  `; // Example gradient for gem

  // Icon styles
  const iconClasses = "h-8 w-8 rounded-full p-1 mr-2 ml-2"; // Added ml-2 for gem icon

  return (
    <div className={`flex w-full ${isUserMessage ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-end ${isUserMessage ? 'flex-row' : 'flex-row-reverse'}`}>
        {!isUserMessage && (
          <SparklesIcon className={`${iconClasses} bg-purple-500 text-white`} /> // Gem icon
        )}
        {isUserMessage && (
          <UserCircleIcon className={`${iconClasses} bg-blue-500 text-white`} /> // User icon
        )}
        <div className={isUserMessage ? userMessageClasses : gemMessageClasses}>
          <p className="text-sm">{message.text}</p>
          {/* Optional: Display timestamp within the message bubble */}
          {/* <p className="text-xs opacity-70 mt-1 text-right">{new Date(message.timestamp).toLocaleTimeString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ChatMessageItem;
