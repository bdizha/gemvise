export interface MockChatSession {
  id: string;
  adventureId: string; 
  adventureName: string; 
  lastMessageSnippet: string;
  timestamp: string; 
  unread?: boolean;
  messages: ChatMessage[]; 
}

export interface ChatMessage {
  id: string; 
  sender: 'user' | 'gem'; 
  text: string;
  timestamp: string; 
}

export const mockChatHistory: MockChatSession[] = [
  {
    id: 'neon-nights-datastreams',
    adventureId: 'neon-nights-datastreams', 
    adventureName: 'Neon Nights: Datastreams',
    lastMessageSnippet: "The city's secrets flow in the datastreams...", // This can be updated to the actual last message later
    timestamp: '2024-07-28T10:30:00Z',
    unread: true,
    messages: [
      { id: 'msg-nn-1', sender: 'user', text: "I've jacked into the datastream. What am I looking for?", timestamp: '2024-07-28T10:30:05Z' },
      { id: 'msg-nn-2', sender: 'gem', text: "Seek the anomalies, the corrupted packets. They whisper of the Architect's grand design.", timestamp: '2024-07-28T10:30:35Z' },
      { id: 'msg-nn-3', sender: 'user', text: "The Architect? Who's that?", timestamp: '2024-07-28T10:31:00Z' },
      { id: 'msg-nn-4', sender: 'gem', text: "A ghost in the machine, they say. The one who first wove these neon threads... Some say a rogue AI, others a collective of elite hackers.", timestamp: '2024-07-28T10:31:45Z' },
      { id: 'msg-nn-5', sender: 'user', text: "How do I find these corrupted packets? The stream is a torrent of data.", timestamp: '2024-07-28T10:32:15Z' },
      { id: 'msg-nn-6', sender: 'gem', text: "Focus your senses. Look for the echoes, the data that screams out of place. They often congregate around older, forgotten nodes of the net.", timestamp: '2024-07-28T10:32:50Z' },
      { id: 'msg-nn-7', sender: 'user', text: "Okay, I think I see something... a cluster of distorted signals near the old Zenith Corp servers.", timestamp: '2024-07-28T10:33:30Z' },
      { id: 'msg-nn-8', sender: 'gem', text: "Zenith Corp... their digital ghost still haunts these wires. Tread carefully. Their ICE is ancient but potent.", timestamp: '2024-07-28T10:34:00Z' },
      { id: 'msg-nn-9', sender: 'user', text: "I'm past their initial defenses. The data here... it's almost alive. Pulsating.", timestamp: '2024-07-28T10:34:45Z' },
      { id: 'msg-nn-10', sender: 'gem', text: "You're close to a nexus point. The Architect's influence will be strong here. What do you see?", timestamp: '2024-07-28T10:35:15Z' },
      { id: 'msg-nn-11', sender: 'user', text: "Fragments of code, blueprints... for some kind of city-wide neural interface? This is dangerous.", timestamp: '2024-07-28T10:36:00Z' },
      { id: 'msg-nn-12', sender: 'gem', text: "Indeed. Control over the city's very consciousness. That is the Architect's endgame. You must sever this node.", timestamp: '2024-07-28T10:36:35Z' },
      { id: 'msg-nn-13', sender: 'user', text: "How? The core is shielded by layers of adaptive counter-intrusions.", timestamp: '2024-07-28T10:37:10Z' },
      { id: 'msg-nn-14', sender: 'gem', text: "Observe the pulse. The shields flicker in a pattern. There's a rhythm to the chaos. Find the off-beat, the moment of vulnerability.", timestamp: '2024-07-28T10:37:45Z' },
      { id: 'msg-nn-15', sender: 'user', text: "Got it. Timing is critical. I'm uploading a logic bomb to disrupt the core sequence.", timestamp: '2024-07-28T10:38:30Z' },
      { id: 'msg-nn-16', sender: 'gem', text: "May your code fly true. The datastream holds its breath...", timestamp: '2024-07-28T10:39:00Z' },
      { id: 'msg-nn-17', sender: 'user', text: "It's in! The node is destabilizing! Alarms are blaring across this sector of the net.", timestamp: '2024-07-28T10:39:40Z' },
      { id: 'msg-nn-18', sender: 'gem', text: "A necessary consequence. You've struck a blow against the Architect. But this is only one node among many.", timestamp: '2024-07-28T10:40:15Z' },
      { id: 'msg-nn-19', sender: 'user', text: "So this isn't over? Where do I go next?", timestamp: '2024-07-28T10:40:40Z' },
      { id: 'msg-nn-20', sender: 'gem', text: "The datastreams will guide you. Seek out other dissonant frequencies. The Architect's web is vast, but not without its flaws.", timestamp: '2024-07-28T10:41:20Z' },
      { id: 'msg-nn-21', sender: 'user', text: "Will I have allies in this? Or am I fighting this ghost alone?", timestamp: '2024-07-28T10:41:55Z' },
      { id: 'msg-nn-22', sender: 'gem', text: "There are others who resist the Architect's control. Glitches in the system, rogue programs, even other runners like yourself. Seek them, or let them find you.", timestamp: '2024-07-28T10:42:35Z' },
      { id: 'msg-nn-23', sender: 'user', text: "Alright. One node down. The city breathes a little easier, even if it doesn't know it yet. Thanks for the guidance.", timestamp: '2024-07-28T10:43:10Z' },
      { id: 'msg-nn-24', sender: 'gem', text: "The path of a runner is a lonely one, but your actions ripple through the neon glow. Stay sharp. The Architect will adapt.", timestamp: '2024-07-28T10:43:50Z' }
    ],
  },
  {
    id: 'the-crimson-artifact',
    adventureId: 'the-crimson-artifact',
    adventureName: 'The Crimson Artifact',
    lastMessageSnippet: 'We need to find the map before they do.',
    timestamp: '2024-07-27T15:45:10Z',
    unread: false,
    messages: [],
  },
  {
    id: 'whispers-of-the-ancient-wood',
    adventureId: 'whispers-of-the-ancient-wood',
    adventureName: 'Whispers of the Ancient Wood',
    lastMessageSnippet: 'The forest spirits are restless tonight.',
    timestamp: '2024-07-26T08:12:00Z',
    unread: true,
    messages: [],
  },
  {
    id: 'starship-odyssey-x7',
    adventureId: 'starship-odyssey-x7',
    adventureName: 'Starship Odyssey X7',
    lastMessageSnippet: "Captain, we're picking up a strange signal.",
    timestamp: '2024-07-25T22:05:30Z',
    unread: false, 
    messages: [],
  },
  {
    id: 'the-last-dragon-chronicle',
    adventureId: 'the-last-dragon-chronicle',
    adventureName: 'The Last Dragon Chronicle',
    lastMessageSnippet: 'The prophecy speaks of a rider and a choice.',
    timestamp: '2024-07-24T13:20:00Z',
    unread: false, 
    messages: [],
  },
  {
    id: 'the-spy-who-loved-swing',
    adventureId: 'the-spy-who-loved-swing',
    adventureName: 'The Spy Who Loved Swing',
    lastMessageSnippet: 'The casino is crawling with enemy agents tonight, 008.',
    timestamp: '2024-07-29T09:15:00Z', 
    unread: true,
    messages: [],
  }
];
