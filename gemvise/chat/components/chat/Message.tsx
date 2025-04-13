'use client';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const Message = ({ role, content }: MessageProps) => {
  return (
    <div className={`group relative flex px-4 py-2 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-3xl rounded-lg p-4 ${
        role === 'user'
          ? 'bg-blue-600 text-white'
          : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
      }`}>
        <div className="flex-1 overflow-x-hidden">
          <p className="whitespace-pre-wrap break-words text-sm">{content}</p>
        </div>
      </div>
      <div className="absolute right-8 top-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button className="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-500">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Message;