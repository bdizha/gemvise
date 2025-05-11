import { Gem } from '../../../types/gemium';

export const boldlandScenes: Gem[] = [
  {
    id: 'neon-scene-1-data-heist-intro',
    name: 'The Glitch in the System',
    description: "The adventure begins with a mysterious system-wide glitch affecting OmniCorp's network. Your team is called in to investigate the source of the anomaly.",
    genres: ['Cyberpunk', 'Introductory'],
    type: 'Scene',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic', 
      level: 1,
      traits: ['investigation', 'mystery-setup']
    },
    // characterIds: [] // No specific characters introduced in this scene initially
  },
  {
    id: 'neon-scene-2-rosie-consultation',
    name: 'Consulting the Retro-Engineer',
    description: 'Realizing the glitch has an old-school signature, the team seeks out Rosie "Rocket" Riley, whose knowledge of legacy systems might hold the key.',
    genres: ['Cyberpunk', 'Investigation'],
    type: 'Scene',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic',
      level: 1,
      traits: ['consultation', 'technical-expert']
    },
    characterIds: ['rosie-rocket-riley']
  },
  {
    id: 'spy-scene-1-casino-caper',
    name: 'The Casino Royale Caper',
    description: "The adventure kicks off at a high-stakes poker game in a lavish Monte Carlo casino. Our spy must gather intelligence on the shadowy 'SPECTER' organization while navigating a world of glamour and danger.",
    genres: ['Spy', 'Suspense', 'Action'],
    type: 'Scene',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic',
      level: 1,
      traits: ['infiltration', 'intelligence-gathering', 'high-stakes']
    }
  },
  {
    id: 'spy-scene-2-gadget-briefing',
    name: "Gadget Briefing with 'Q'",
    description: "Before embarking on the main mission, our spy receives a crucial briefing from Quentin 'Q' Quibble, the eccentric inventor of MI6. Q unveils an array of ingenious (and sometimes unreliable) gadgets.",
    genres: ['Spy', 'Comedy', 'Technology'],
    type: 'Scene',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic',
      level: 1,
      traits: ['gadgets', 'briefing', 'preparation']
    },
    characterIds: ['quentin-q-quibble']
  }
];
