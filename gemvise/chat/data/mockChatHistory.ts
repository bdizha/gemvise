export interface Message {
  id: string;
  sender: string; // 'user' or character name/ID
  text: string;
  timestamp: string; // ISO 8601 format
}

export interface MockChatSession {
  id: string;
  adventureId: string;
  adventureName: string;
  lastMessageSnippet: string; // Will be derived or less relevant now
  timestamp: string; // Timestamp of the last message in the session
  unread?: boolean;
  messages: Message[];
}

export const mockChatHistory: MockChatSession[] = [
  {
    id: 'chat-1',
    adventureId: 'neon-nights-datastreams',
    adventureName: 'Neon Nights & Datastreams',
    lastMessageSnippet: 'Rosie: Just got the schematics. This is bigger than we thought...',
    timestamp: '2025-05-11T10:30:00Z', // Timestamp of the last message
    unread: true,
    messages: [
      { id: 'msg-1-1', sender: 'user', text: 'Rosie, you there? Found anything on the CyCorp server?', timestamp: '2025-05-11T10:25:00Z' },
      { id: 'msg-1-2', sender: 'rosie-rocket-riley', text: 'Signal is weak, but I\'m in. They\'ve got layers of ICE I haven\'t seen before.', timestamp: '2025-05-11T10:27:00Z' },
      { id: 'msg-1-3', sender: 'user', text: 'Anything critical? We need leverage.', timestamp: '2025-05-11T10:28:00Z' },
      { id: 'msg-1-4', sender: 'rosie-rocket-riley', text: 'Just got the schematics for Project Chimera. This is bigger than we thought...', timestamp: '2025-05-11T10:30:00Z' },
    ]
  },
  {
    id: 'chat-2',
    adventureId: 'the-spy-who-loved-swing',
    adventureName: 'The Spy Who Loved Swing',
    lastMessageSnippet: 'Q: The Aston Martin is prepped. Try not to scratch it this time, Sterling.',
    timestamp: '2025-05-11T09:15:00Z',
    messages: [
      { id: 'msg-2-1', sender: 'user', text: 'Q, I need the usual assortment. And make it snappy.', timestamp: '2025-05-11T09:12:00Z' },
      { id: 'msg-2-2', sender: 'quentin-q-quibble', text: 'Patience, Sterling. Perfection takes time. The Aston Martin is prepped. Try not to scratch it this time.', timestamp: '2025-05-11T09:15:00Z' },
    ]
  },
  {
    id: 'chat-3',
    adventureId: 'neon-nights-datastreams',
    adventureName: 'Neon Nights & Datastreams',
    lastMessageSnippet: 'User: I\'m in. What\'s the next move?',
    timestamp: '2025-05-10T18:45:00Z',
    // Older messages to make the timeline in sidebar more realistic
    messages: [
      { id: 'msg-3-1', sender: 'rosie-rocket-riley', text: 'Meet me at the usual spot. Encrypted comms only.', timestamp: '2025-05-10T18:40:00Z' },
      { id: 'msg-3-2', sender: 'user', text: 'I\'m in. What\'s the next move?', timestamp: '2025-05-10T18:45:00Z' },
    ]
  },
  {
    id: 'chat-4',
    adventureId: 'the-spy-who-loved-swing',
    adventureName: 'The Spy Who Loved Swing',
    lastMessageSnippet: 'Moneypenny: Your target is at the casino. Don\'t be late.',
    timestamp: '2025-05-09T12:00:00Z',
    unread: true,
    messages: [
      { id: 'msg-4-1', sender: 'Moneypenny', text: 'Sterling, your target has been spotted at the Casino Royale. Don\'t be late.', timestamp: '2025-05-09T12:00:00Z' },
      { id: 'msg-4-2', sender: 'user', text: 'Understood, Moneypenny. Tell M I\'ll be on my best behaviour. Mostly.', timestamp: '2025-05-09T12:02:00Z' }
    ]
  },
  {
    id: 'chat-5',
    adventureId: 'neon-nights-datastreams',
    adventureName: 'Neon Nights & Datastreams',
    lastMessageSnippet: 'User: Any leads on the data broker?',
    timestamp: '2025-05-09T08:20:00Z',
    messages: [
      { id: 'msg-5-1', sender: 'rosie-rocket-riley', text: 'Heard whispers about a data broker called \'Glitch\'. Operates out of the Lower Sector. Nasty reputation.', timestamp: '2025-05-09T08:15:00Z' },
      { id: 'msg-5-2', sender: 'user', text: 'Any leads on finding Glitch?', timestamp: '2025-05-09T08:20:00Z' },
    ]
  },
];
