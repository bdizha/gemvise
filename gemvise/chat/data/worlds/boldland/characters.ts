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
  // New Characters for Bold Girls Adventure
  {
    id: 'boldland-char-winnie-winchester',
    name: 'Winnie Winchester',
    description: 'A sharp-witted and ambitious young woman leading her friends in the quest for love and fortune in high society. She\'s a master of social strategy.',
    genres: ['Socialite', 'Strategy', 'Romance'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/winnie-winchester.png',
    attributes: {
      rarity: 'Rare',
      traits: ['ambitious', 'witty', 'strategic', 'leader']
    }
  },
  {
    id: 'boldland-char-millie-meadows',
    name: 'Millie Meadows',
    description: 'A charming and romantic dreamer, Millie seeks a genuine connection but isn\'t afraid to play the game to secure her future.',
    genres: ['Socialite', 'Romance', 'Dreamer'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/millie-meadows.png',
    attributes: {
      rarity: 'Rare',
      traits: ['charming', 'romantic', 'optimistic', 'social']
    }
  },
  {
    id: 'boldland-char-nellie-harper',
    name: 'Nellie "Nell" Harper',
    description: 'A captivating newcomer with a beautiful voice and an air of mystery. Her sudden appearance shakes up the social scene, attracting attention from desirable bachelors.',
    genres: ['Performer', 'Mystery', 'Romance'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/nellie-harper.png',
    attributes: {
      rarity: 'Rare',
      traits: ['captivating', 'musical', 'mysterious', 'graceful']
    }
  },
  {
    id: 'boldland-char-jed-sterling',
    name: 'Jedediah "Jed" Sterling III',
    description: 'A debonair and immensely wealthy airline tycoon, known as the city\'s most eligible bachelor. He\'s observant and looking for more than just a pretty face.',
    genres: ['Tycoon', 'Eligible Bachelor', 'Adventure'],
    type: 'Character',
    world: 'boldland',
    imageUrl: '/images/world/boldland/characters/jed-sterling.png',
    attributes: {
      rarity: 'Epic',
      traits: ['wealthy', 'charming', 'observant', 'pilot']
    }
  },
  // END: New Characters for Bold Girls Adventure
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
  },
  // Characters from Bold Girls Saga
  {
    id: 'boldland-char-bg-winnie',
    name: 'Winnie (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'An experienced and somewhat cynical burlesque performer from the Bold Girls troupe, offering witty observations and advice to her friends.',
    imageUrl: '/images/placeholder/bold-girls/winnie.png',
    attributes: {
      personality: ['Experienced', 'Witty', 'Observant'],
      role: 'Performer',
      keyLines: [
        "Ah, when that guy takes you to dinner, first thing you know, you're shadow boxing.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-millie',
    name: 'Millie (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'A burlesque performer from the Bold Girls troupe, navigating work and relationships, often sharing her relatable frustrations.',
    imageUrl: '/images/placeholder/bold-girls/millie.png',
    attributes: {
      personality: ['Pragmatic', 'Humorous', 'Relatable'],
      role: 'Performer',
      keyLines: [
        "He says, two can live as cheaply as one. As long as one of us is working. Nothing. Only I'm the one that's working.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-bubbles',
    name: 'Bubbles LeRue (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'The glamorous and confident star of the Bold Girls show, known for her talent and her fiery temperament. She isn\'t afraid to speak her mind or stir up drama.',
    imageUrl: '/images/placeholder/bold-girls/bubbles.png',
    attributes: {
      personality: ['Confident', 'Glamorous', 'Fiery', 'Star Quality'],
      role: 'Lead Performer / Antagonist',
      keyLines: [
        "Well, I ain't going out there. I'm quitting! Right now, this minute, see?",
        "Why you gray-haired old hag? Shut your mouth or I'll slap it shut.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-peggy',
    name: 'Peggy Martin (Peg) (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'A young, talented, and initially reserved performer in the Bold Girls troupe, under the watchful eye of her mother, Mae. She rises to stardom when an opportunity unexpectedly opens up.',
    imageUrl: '/images/placeholder/bold-girls/peggy.png',
    attributes: {
      personality: ['Talented', 'Reserved', 'Emerging Star'],
      role: 'Performer / Protagonist',
      keyLines: [
        "Okay, Mother.",
        "Anyone can see I love you. Anyone can see I care.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-mae',
    name: 'Mae (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'Peggy\'s protective mother and a veteran performer herself from the Bold Girls saga. She steps back into the spotlight when needed and fiercely defends her daughter.',
    imageUrl: '/images/placeholder/bold-girls/mae.png',
    attributes: {
      personality: ['Protective', 'Strong-willed', 'Veteran Performer'],
      role: 'Mother / Performer',
      keyLines: [
        "Letting you go out with Bubbles LeRue and her men friends, would that make you feel grown up?",
        "The show must go on, remember? Okay, it'll go on.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-joe',
    name: 'Joe (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'The pragmatic stage manager for the Bold Girls show, determined to keep it running smoothly amidst backstage chaos and performer antics.',
    imageUrl: '/images/placeholder/bold-girls/joe.png',
    attributes: {
      personality: ['Pragmatic', 'Harried', 'Authoritative'],
      role: 'Stage Manager',
      keyLines: [
        "My job is to get this show on. Now, beat it on stage all of you.",
        "The show must go on, remember?",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-al',
    name: 'Al (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'Millie\'s soldier boyfriend from the Bold Girls saga. Appears somewhat reserved but caring. He is a bit overwhelmed by the backstage drama and Millie\'s outspokenness at times.',
    imageUrl: '/images/placeholder/bold-girls/al.png',
    attributes: {
      personality: ['Reserved', 'Caring', 'Soldier'],
      role: 'Millie\'s Boyfriend',
      keyLines: [
        "Millie, I wish you wouldn't talk like that.",
        "Say, is this a private fight or can anyone get in it?",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-randy',
    name: 'Randy (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'Bubbles LeRue\'s soldier boyfriend from the Bold Girls saga. He is more suave and confident than Al, and enjoys the company of the performers.',
    imageUrl: '/images/placeholder/bold-girls/randy.png',
    attributes: {
      personality: ['Suave', 'Confident', 'Soldier'],
      role: 'Bubbles\'s Boyfriend',
      keyLines: [
        "Well, don't look now, but there's a man in your life.",
        "Hello, honey.",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-betty',
    name: 'Betty (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'One of the performers in the Bold Girls burlesque show. She participates in backstage conversations and group numbers.',
    imageUrl: '/images/placeholder/bold-girls/betty.png',
    attributes: {
      personality: ['Ensemble', 'Interactive'],
      role: 'Performer',
      keyLines: [
        "What's the matter, Bubbles? You sore at somebody?",
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Drama', 'Performance'],
  },
  {
    id: 'boldland-char-bg-producer',
    name: 'Mr. Harold (Producer) (Bold Girls)',
    type: 'Character',
    world: 'boldland',
    description: 'The somewhat gruff but fair owner or producer of the theater where the Bold Girls perform. He has an eye for talent and the final say on contracts and show direction.',
    imageUrl: '/images/placeholder/bold-girls/producer-harold.png',
    attributes: {
      personality: ['Business-minded', 'Observant', 'Decisive', 'Fair'],
      role: 'Theater Owner / Producer',
      keyLines: [
        "The girl\'s got talent, Joe. Real talent.",
        "Alright, let\'s talk numbers for the new headliner."
      ],
      originalAdventure: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Business'],
  }
];
