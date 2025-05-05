import { Collection } from '../../types/gemium';

export const boldlandCollections: Collection[] = [
  {
    id: 'bold-island',
    name: 'Bold Island',
    description: 'A tropical paradise where adventure and mystery await, featuring a cast of characters who embody the spirit of exploration and discovery.',
    type: 'Original',
    gems: [
      {
        id: 'captain-storm',
        name: 'Captain Storm',
        description: 'A fearless and strategic leader who navigates treacherous waters and leads daring expeditions across the Bold Island.',
        genres: ['Adventure', 'Action'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 92,
          rarity: 'Legendary',
          level: 5,
          traits: ['brave', 'strategic', 'leader']
        }
      },
      {
        id: 'luna-wave',
        name: 'Luna Wave',
        description: 'A mystical and agile adventurer who navigates the unknown with ease and uncovers hidden secrets.',
        genres: ['Adventure', 'Mystery'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 88,
          rarity: 'Epic',
          level: 4,
          traits: ['mysterious', 'skilled', 'agile']
        }
      }
    ]
  },
  {
    id: 'thunder-peaks',
    name: 'Thunder Peaks',
    description: 'A realm of ancient magic and mythical creatures, where legendary heroes and powerful sorcerers shape the destiny of the world.',
    type: 'Original',
    gems: [
      {
        id: 'thor-lightning',
        name: 'Thor Lightning',
        description: 'The Norse god of thunder, wielding immense power and protecting the realms from destruction.',
        genres: ['Action', 'Fantasy'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 95,
          rarity: 'Mythic',
          level: 5,
          traits: ['powerful', 'noble', 'warrior']
        }
      },
      {
        id: 'storm-mage',
        name: 'Storm Mage',
        description: 'A wise and magical sorcerer who harnesses the elements to wield incredible power and wisdom.',
        genres: ['Fantasy', 'Magic'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 87,
          rarity: 'Epic',
          level: 4,
          traits: ['wise', 'magical', 'tempestuous']
        }
      }
    ]
  },
  {
    id: 'crystal-caves',
    name: 'Crystal Caves',
    description: 'An underground world of glittering crystals and ancient secrets, where mystical guardians and skilled artisans weave their magic.',
    type: 'Original',
    gems: [
      {
        id: 'gem-keeper',
        name: 'Gem Keeper',
        description: 'A protective and ancient guardian who safeguards the crystals and shares their wisdom with those who seek it.',
        genres: ['Mystery', 'Fantasy'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 85,
          rarity: 'Epic',
          level: 3,
          traits: ['protective', 'ancient', 'wise']
        }
      },
      {
        id: 'crystal-weaver',
        name: 'Crystal Weaver',
        description: 'A creative and magical artisan who crafts incredible crystal structures and weaves their magic into reality.',
        genres: ['Magic', 'Fantasy'],
        type: 'Character',
        world: 'boldland',
        attributes: {
          power: 90,
          rarity: 'Legendary',
          level: 4,
          traits: ['artistic', 'magical', 'creative']
        }
      }
    ]
  },
  {
    id: 'love-island',
    name: 'Love Island',
    description: 'A romantic getaway where love, drama, and relationships unfold, featuring a cast of characters navigating the complexities of the heart.',
    type: 'Original',
    gems: [
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
      }
    ]
  },
  {
    id: 'indiana-jones',
    name: 'Indiana Jones',
    description: 'A legendary archaeologist and adventurer, exploring ancient ruins and uncovering hidden treasures in a world of action and excitement.',
    type: 'Licensed',
    gems: [
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
      }
    ]
  }
];
