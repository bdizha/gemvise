import { Gem } from '../../../types/gemium';

export const boldlandAdventures: Gem[] = [
  {
    id: 'neon-nights-datastreams',
    name: 'Neon Nights & Datastreams',
    description: 'Dive into the world of early computer hacking and corporate espionage. Navigate a neon-lit city, outsmart security systems, and uncover a digital conspiracy.',
    genres: ['Cyberpunk', 'Thriller', 'Mystery'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/poses/Pose02.png',
    attributes: {
      power: 0, // Adventures might not have power, or we can define relevant attributes
      rarity: 'Epic',
      level: 0, // Level might not apply or could represent difficulty
      traits: ['hacking', 'stealth', 'investigation']
    },
    sceneIds: ['neon-scene-1-data-heist-intro', 'neon-scene-2-rosie-consultation'],
    involvedCharacterIds: ['rosie-rocket-riley']
  },
  {
    id: 'the-spy-who-loved-swing',
    name: 'The Spy Who Loved Swing',
    description: 'Embark on a thrilling espionage adventure in the swinging sixties. Decode messages, infiltrate secret lairs, and stop a dastardly plot, all while maintaining your cool and impeccable style.',
    genres: ['Spy', 'Action', 'Adventure'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/poses/Pose05.png',
    attributes: {
      power: 75,
      rarity: 'Legendary',
      level: 10,
      traits: ['espionage', 'action', 'retro', 'swinging-sixties']
    },
    sceneIds: ['spy-scene-1-casino-caper', 'spy-scene-2-gadget-briefing'],
    involvedCharacterIds: ['quentin-q-quibble']
  }
];
