import { Gem } from '../../../types/gemium';

export const boldlandCharacters: Gem[] = [
  // From captain-storm
  {
    id: 'captain-storm',
    name: 'Captain Storm',
    description: 'A fearless and strategic leader who commands the high seas, known for his cunning tactics and unwavering determination in the face of danger.',
    genres: ['Adventure', 'Action'],
    type: 'Character',
    world: 'boldland',
    attributes: {
      power: 92,
      rarity: 'Legendary',
      level: 5,
      traits: ['brave', 'strategic', 'leader']
    },
    casting: [
      {
        id: 'seraphina-moon',
        name: 'Seraphina Moon',
        role: 'First Mate',
        description: 'Mysterious and agile warrior'
      },
      {
        id: 'gideon-stone',
        name: 'Gideon Stone',
        role: 'Quartermaster',
        description: 'Wise old strategist with a hidden past'
      },
      {
        id: 'mara-swiftwind',
        name: 'Mara Swiftwind',
        role: 'Navigator',
        description: 'Expert cartographer with a knack for discovery'
      },
      {
        id: 'rex-thunder',
        name: 'Rex Thunder',
        role: 'Gunner',
        description: 'Powerful marksman with unmatched accuracy'
      }
    ]
  },
  // From love-island
  {
    id: 'jake-sterling',
    name: 'Jake Sterling',
    description: 'A charming and competitive entrepreneur who seeks genuine connection and love in the midst of drama and relationships.',
    genres: ['Romance', 'Reality', 'Drama'],
    type: 'Character',
    world: 'boldland',
    attributes: {
      power: 75,
      rarity: 'Epic',
      level: 1,
      traits: ['charming', 'competitive']
    },
    casting: [
      {
        id: 'sophia-rose',
        name: 'Sophia Rose',
        role: 'Love Interest',
        description: 'A passionate artist looking for true love'
      },
      {
        id: 'marcus-cruz',
        name: 'Marcus Cruz',
        role: 'Rival',
        description: 'Professional athlete competing for Sophia\'s heart'
      },
      {
        id: 'olivia-chen',
        name: 'Olivia Chen',
        role: 'Best Friend',
        description: 'Tech entrepreneur with a secret crush on Jake'
      },
      {
        id: 'alex-rivera',
        name: 'Alex Rivera',
        role: 'Wild Card',
        description: 'Mysterious newcomer who shakes up the island dynamics'
      }
    ]
  },
  {
    id: 'sophia-rose',
    name: 'Sophia Rose',
    description: 'A passionate and artistic individual who seeks true love and connection in the midst of drama and relationships.',
    genres: ['Romance', 'Reality', 'Drama'],
    type: 'Character',
    world: 'boldland',
    attributes: {
      power: 75,
      rarity: 'Epic',
      level: 1,
      traits: ['artistic', 'passionate']
    },
    casting: [
      {
        id: 'jake-sterling',
        name: 'Jake Sterling',
        role: 'Love Interest',
        description: 'Charismatic entrepreneur seeking genuine connection'
      },
      {
        id: 'emma-winters',
        name: 'Emma Winters',
        role: 'Rival',
        description: 'Former model with a hidden agenda'
      },
      {
        id: 'david-kim',
        name: 'David Kim',
        role: 'Friend',
        description: 'Aspiring musician who offers emotional support'
      },
      {
        id: 'luna-patel',
        name: 'Luna Patel',
        role: 'Confidante',
        description: 'Yoga instructor and spiritual advisor'
      }
    ]
  },
  // From indiana-jones
  {
    id: 'indiana-jones',
    name: 'Indiana Jones',
    description: 'A legendary archaeologist and adventurer known for his wit, resourcefulness, and iconic fedora hat. He travels the world seeking ancient artifacts while battling dangerous adversaries.',
    genres: ['Adventure', 'Action', 'Historical'],
    type: 'Character',
    world: 'boldland',
    attributes: {
      power: 90,
      rarity: 'Legendary',
      level: 5,
      traits: ['adventurous', 'resourceful', 'brave']
    },
    casting: [
      {
        id: 'marion-ravenwood',
        name: 'Marion Ravenwood',
        role: 'Partner',
        description: 'Tough and independent adventurer'
      },
      {
        id: 'sallah',
        name: 'Sallah',
        role: 'Ally',
        description: 'Loyal friend and expert excavator'
      },
      {
        id: 'henry-jones-sr',
        name: 'Henry Jones Sr.',
        role: 'Mentor',
        description: 'Indiana\'s father and medieval scholar'
      },
      {
        id: 'short-round',
        name: 'Short Round',
        role: 'Sidekick',
        description: 'Young and resourceful companion'
      }
    ]
  },
  {
    id: 'rosie-rocket-riley',
    name: 'Rosie "Rocket" Riley',
    description: 'A brilliant and ambitious aerospace engineer breaking barriers in a male-dominated field, dreaming of the stars. Known for her sharp intellect and can-do attitude.',
    genres: ['Historical', 'Inspirational', 'Drama'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/poses/Pose01.png',
    attributes: {
      power: 80,
      rarity: 'Epic',
      level: 3,
      traits: ['intelligent', 'determined', 'pioneer']
    }
  },
  {
    id: 'velvet-vinyl-jones',
    name: 'Velvet "Vinyl" Jones',
    description: "A sharp-witted, independent DJ spinning the hottest tracks at the local roller disco. She's got an ear for a hit and a knack for uncovering secrets whispered between songs.",
    genres: ['Music', 'Mystery', 'Nostalgia'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/poses/Pose04.png',
    attributes: {
      power: 70,
      rarity: 'Epic',
      level: 3,
      traits: ['observant', 'musical', 'street-smart']
    }
  },
  {
    id: 'quentin-q-quibble',
    name: 'Quentin "Q" Quibble',
    description: "The eccentric and brilliant quartermaster, responsible for outfitting spies with the latest, and often peculiar, gadgets. He has a dry wit and a passion for miniaturization.",
    genres: ['Spy', 'Comedy', 'Technology'],
    type: 'Character',
    world: 'boldland',
    // We can assign a new pose image if available, or leave it for a default gradient
    // imageUrl: '/poses/PoseXX.png',
    attributes: {
      power: 40, // More brains than brawn
      rarity: 'Epic',
      level: 5, // Experienced gadgeteer
      traits: ['inventive', 'eccentric', 'resourceful', 'witty']
    }
  },
  // New Characters Start Here
  {
    id: 'boldland-char-boldpup-fox',
    name: 'Flicker the BoldPup',
    description: 'A cunning and agile fox, a loyal companion and guide through many of Boldland\'s adventures.',
    genres: ['Fantasy', 'Adventure', 'Animal'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/boldpup-fox.png',
    attributes: {
      rarity: 'Common',
      traits: ['agile', 'cunning', 'loyal', 'companion']
    }
  },
  {
    id: 'boldland-char-boldepic-ape',
    name: 'Grokk the BoldEpic',
    description: 'A wise and powerful ape, a guardian of the mystical virtual island in \'A Wink to Boldland\'.',
    genres: ['Fantasy', 'Adventure', 'Animal', 'Guardian'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/boldepic-ape.png',
    attributes: {
      rarity: 'Rare',
      traits: ['wise', 'strong', 'guardian', 'mystical']
    }
  }
];
