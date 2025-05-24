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
    genres: ['Spy', 'Adventure', 'Humor'],
    type: 'Scene',
    world: 'boldland',
    attributes: {
      power: 0,
      rarity: 'Epic',
      level: 1,
      traits: ['preparation', 'gadgetry', 'exposition']
    },
    characterIds: ['quentin-q-quibble'] // Assuming Q is a character
  },
  // New Scenes for Bold Girls Adventure
  {
    id: 'boldland-scene-bg-ball-invitation',
    name: 'An Invitation to Opulence',
    description: "A gilded envelope arrives, bearing the Sterling crest. Inside, a coveted invitation to Jedediah Sterling III's annual Grand Ball – the social event of the season. For Winnie, Millie, and Nell, this is more than a party; it's an opportunity.",
    genres: ['Romance', 'Social Simulation', 'Drama'],
    type: 'Scene',
    world: 'boldland',
    attributes: { 
      power: 0, 
      rarity: 'Rare', 
      level: 1, 
      traits: ['introduction', 'opportunity', 'high-society'] 
    },
    involvedCharacterIds: ['boldland-char-winnie-winchester', 'boldland-char-millie-meadows', 'boldland-char-nell-harper', 'boldland-char-jed-sterling']
  },
  {
    id: 'boldland-scene-bg-conservatory-secrets',
    name: 'Whispers in the Winter Garden',
    description: "The Sterling Estate's famed Winter Garden offers a momentary escape from the ballroom's throng. Amidst exotic blooms and hushed fountains, alliances are tested and secrets begin to unfurl, revealing the hidden currents beneath the glittering surface.",
    genres: ['Romance', 'Social Simulation', 'Drama', 'Mystery'],
    type: 'Scene',
    world: 'boldland',
    attributes: { 
      power: 0, 
      rarity: 'Rare', 
      level: 2, 
      traits: ['intrigue', 'revelation', 'social-maneuvering'] 
    },
    involvedCharacterIds: ['boldland-char-winnie-winchester', 'boldland-char-millie-meadows', 'boldland-char-nell-harper']
  },
  {
    id: 'boldland-scene-bg-dance-with-destiny',
    name: 'A Dance with Destiny',
    description: "The orchestra swells, and the dance floor becomes a stage for ambition and affection. A dance with the elusive Jedediah Sterling III is the prize, a moment that could lead to love, influence, or perhaps, a carefully laid trap.",
    genres: ['Romance', 'Social Simulation', 'Drama'],
    type: 'Scene',
    world: 'boldland',
    attributes: { 
      power: 0, 
      rarity: 'Rare', 
      level: 3, 
      traits: ['climax', 'romance-potential', 'high-stakes-interaction'] 
    },
    involvedCharacterIds: ['boldland-char-jed-sterling', 'boldland-char-winnie-winchester', 'boldland-char-millie-meadows', 'boldland-char-nell-harper']
  },
  {
    id: 'boldland-scene-bg-morning-aftermath',
    name: 'The Morning Aftermath',
    description: "Dawn breaks over the Sterling Estate. The music has faded, but the night's events linger. Reflections, regrets, and renewed resolves are shared as the Bold Girls strategize their next moves in the game of love and fortune.",
    genres: ['Romance', 'Social Simulation', 'Drama'],
    type: 'Scene',
    world: 'boldland',
    attributes: { 
      power: 0, 
      rarity: 'Rare', 
      level: 4, 
      traits: ['reflection', 'consequences', 'strategic-planning'] 
    },
    involvedCharacterIds: ['boldland-char-winnie-winchester', 'boldland-char-millie-meadows', 'boldland-char-nell-harper']
  },
  // Scenes from Bold Girls Saga
  {
    id: 'boldland-scene-bgsaga-opening',
    name: 'Bold Girls Opening Number (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'The dazzling opening ensemble performance introducing the \'Bold Girls\' of the burlesque show, part of the Bold Girls Saga.',
    imageUrl: '/images/placeholder/bold-girls/scene-opening.png',
    attributes: {
      setting: 'Burlesque Theater Stage',
      charactersInvolved: [
        'boldland-char-bg-winnie', 'boldland-char-bg-millie', 
        'boldland-char-bg-bubbles', 'boldland-char-bg-peggy', 'boldland-char-bg-betty'
      ],
      keyElements: ['Song: \'Bold Girls\'', 'Ensemble Dance'],
      lyricsOrDialogueSnippets: ["We're bold, bad, and beautiful girls..."],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Performance'],
  },
  {
    id: 'boldland-scene-bgsaga-bubbles-blowup',
    name: 'Bubbles\' Blowup (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'Bubbles LeRue has a dramatic outburst backstage, quitting the show and confronting Mae, setting the stage for Peggy\'s unexpected opportunity.',
    imageUrl: '/images/placeholder/bold-girls/scene-bubbles-blowup.png',
    attributes: {
      setting: 'Backstage Dressing Room',
      charactersInvolved: [
        'boldland-char-bg-bubbles', 'boldland-char-bg-mae', 
        'boldland-char-bg-joe', 'boldland-char-bg-winnie', 'boldland-char-bg-millie'
      ],
      keyElements: ['Confrontation', 'Bubbles Quits', 'Dramatic Tension'],
      lyricsOrDialogueSnippets: [
        "Well, I ain't going out there. I'm quitting! Right now, this minute, see?",
        "Why you gray-haired old hag? Shut your mouth or I'll slap it shut."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Musical'],
  },
  {
    id: 'boldland-scene-bgsaga-mae-steps-in',
    name: 'Mae Steps In (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'With Bubbles gone and the show in jeopardy, Mae decides to step in and perform, while also pushing for her daughter Peggy to get a chance.',
    imageUrl: '/images/placeholder/bold-girls/scene-mae-steps-in.png',
    attributes: {
      setting: 'Backstage / Manager\'s Office',
      charactersInvolved: [
        'boldland-char-bg-mae', 'boldland-char-bg-joe', 'boldland-char-bg-peggy'
      ],
      keyElements: ['Decision to Perform', 'Advocating for Peggy', 'Show Must Go On'],
      lyricsOrDialogueSnippets: [
        "The show must go on, remember? Okay, it'll go on."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Musical'],
  },
  {
    id: 'boldland-scene-bgsaga-peggys-debut',
    name: 'Peggy\'s Debut (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'Peggy Martin gets her big break and nervously takes the stage, performing \'Anyone Can See I Love You\' to an appreciative audience, marking her ascent.',
    imageUrl: '/images/placeholder/bold-girls/scene-peggys-debut.png',
    attributes: {
      setting: 'Burlesque Theater Stage',
      charactersInvolved: [
        'boldland-char-bg-peggy', 'boldland-char-bg-mae', 'boldland-char-bg-joe'
      ],
      keyElements: ['Peggy Performs', 'Song: \'Anyone Can See I Love You\'', 'Rising Star Moment'],
      lyricsOrDialogueSnippets: [
        "Anyone can see I love you. Anyone can see I care."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Performance', 'Drama'],
  },
  {
    id: 'boldland-scene-bgsaga-daddy-song',
    name: 'Every Baby Needs a Da-Da-Daddy (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'Mae performs the iconic and suggestive number \'Every Baby Needs a Da-Da-Daddy\', showcasing her veteran talent and stage presence.',
    imageUrl: '/images/placeholder/bold-girls/scene-daddy-song.png',
    attributes: {
      setting: 'Burlesque Theater Stage',
      charactersInvolved: [
        'boldland-char-bg-mae'
      ],
      keyElements: ['Mae Performs', 'Song: \'Every Baby Needs a Da-Da-Daddy\'', 'Veteran Showcase'],
      lyricsOrDialogueSnippets: [
        "Every baby needs a da-da-daddy, to keep her from the wolf..."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Musical', 'Performance', 'Comedy'],
  },
  {
    id: 'boldland-scene-bgsaga-rehearsal',
    name: 'The Rehearsal Ruckus (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'After Bubbles quits, Joe attempts to lead a rehearsal. Tensions and anxieties surface amongst Peggy, Winnie, Millie, Betty, and Mae, with Al and Randy also present backstage. A moment of camaraderie helps them push through.',
    imageUrl: '/images/placeholder/bold-girls/scene-rehearsal-ruckus.png',
    attributes: {
      setting: 'Backstage Rehearsal Space',
      charactersInvolved: [
        'boldland-char-bg-joe',
        'boldland-char-bg-peggy',
        'boldland-char-bg-winnie',
        'boldland-char-bg-millie',
        'boldland-char-bg-betty',
        'boldland-char-bg-mae',
        'boldland-char-bg-al',
        'boldland-char-bg-randy'
      ],
      keyElements: ['Post-Bubbles Tension', 'Peggy\'s Nerves', 'Makeshift Rehearsal', 'Troupe Support'],
      lyricsOrDialogueSnippets: [
        "Joe: Alright girls, and Peg, from the top! Let\'s see what we\'ve got.",
        "Peggy: (Stuttering) I... I don\'t know if I can do Bubbles\' part, Mr. Joe.",
        "Winnie: We\'re all a bit rattled, honey. But you got this. We got you."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Musical', 'Slice of Life'],
  },
  {
    id: 'boldland-scene-bgsaga-buzz',
    name: 'Backstage Buzz After Debut (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'The curtain falls on Peggy\'s successful debut. Backstage, Peggy, Mae, Joe, Winnie, Millie, Betty, Al, and Randy celebrate the triumph amidst excitement and relief.',
    imageUrl: '/images/placeholder/bold-girls/scene-backstage-buzz.png',
    attributes: {
      setting: 'Crowded Backstage Area',
      charactersInvolved: [
        'boldland-char-bg-peggy',
        'boldland-char-bg-mae',
        'boldland-char-bg-joe',
        'boldland-char-bg-winnie',
        'boldland-char-bg-millie',
        'boldland-char-bg-al',
        'boldland-char-bg-randy',
        'boldland-char-bg-betty'
      ],
      keyElements: ['Post-Performance Excitement', 'Peggy\'s Triumph', 'Congratulatory Atmosphere', 'Pride and Relief'],
      lyricsOrDialogueSnippets: [
        "Millie: Peggy, you were sensational! A real star!",
        "Mae: (Hugging Peggy) That\'s my girl! I knew you had it in you!",
        "Joe: (Wiping sweat) We pulled it off! Kid, you saved the show."
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Celebration', 'Slice of Life'],
  },
  {
    id: 'boldland-scene-bgsaga-party',
    name: 'The \'Next Big Thing\' Party (BG Saga)',
    type: 'Scene',
    world: 'boldland',
    description: 'An impromptu celebration for Peggy\'s success. The troupe (Peggy, Mae, Joe, Winnie, Millie, Betty) and their friends (Al, Randy) toast Peggy. Mr. Harold, the producer, makes an appearance, impressed, hinting at Peggy\'s bright future.',
    imageUrl: '/images/placeholder/bold-girls/scene-next-big-thing-party.png',
    attributes: {
      setting: 'Backstage Area / Nearby Diner',
      charactersInvolved: [
        'boldland-char-bg-peggy',
        'boldland-char-bg-mae',
        'boldland-char-bg-joe',
        'boldland-char-bg-winnie',
        'boldland-char-bg-millie',
        'boldland-char-bg-betty',
        'boldland-char-bg-al',
        'boldland-char-bg-randy',
        'boldland-char-bg-producer'
      ],
      keyElements: ['Celebration', 'Peggy as New Star', 'Producer\'s Interest', 'Hints of Future Contract'],
      lyricsOrDialogueSnippets: [
        "Winnie: To Peggy! The new toast of the town!",
        "Mr. Harold: Young lady, you\'ve got something special. We need to talk.",
        "Mae: (Smiling proudly) See? What did I tell you?"
      ],
      adventureId: 'boldland-bold-girls'
    },
    genres: ['Drama', 'Celebration', 'Career'],
  }
];
