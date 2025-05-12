import { Collection, Gem } from '../../../types/gemium';

// --- World 1: "Hollywood Dreams" (Romance/Drama) ---
export const hollywoodDreamsCharacters: Gem[] = [
  {
    id: 'ella-rosewood',
    name: 'Ella Rosewood',
    description: 'A small-town girl with big dreams of becoming a movie star in 1950s Hollywood.',
    genres: ['Romance', 'Drama'],
    type: 'Character',
    world: 'hollywood-dreams',
    attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['ambitious', 'naive', 'talented'] },
    casting: [
      { id: 'ricky-diamond', name: 'Ricky Diamond', role: 'Love Interest', description: 'A charming and established actor' },
      { id: 'marlene-maven', name: 'Marlene Maven', role: 'Mentor', description: 'A seasoned actress with a tough exterior' },
      { id: 'barry-bigshot', name: 'Barry Bigshot', role: 'Producer', description: 'A powerful studio head with ulterior motives' },
      { id: 'doris-darling', name: 'Doris Darling', role: 'Rival', description: 'A glamorous and competitive actress' },
    ],
  },
  {
    id: 'ricky-diamond',
    name: 'Ricky Diamond',
    description: 'A charismatic and popular actor struggling with the pressures of fame in 1950s Hollywood.',
    genres: ['Romance', 'Drama'],
    type: 'Character',
    world: 'hollywood-dreams',
    attributes: { power: 75, rarity: 'Epic', level: 3, traits: ['charming', 'troubled', 'talented'] },
    casting: [],
  },
  {
    id: 'marlene-maven',
    name: 'Marlene Maven',
    description: 'A once-famous actress now working as a demanding but secretly supportive acting coach.',
    genres: ['Drama'],
    type: 'Character',
    world: 'hollywood-dreams',
    attributes: { power: 80, rarity: 'Rare', level: 4, traits: ['stern', 'experienced', 'caring'] },
    casting: [],
  },
];

export const hollywoodDreamsStories: Gem[] = [
  {
    id: 'starlight-serenade',
    name: 'Starlight Serenade',
    description: 'Ella Rosewood arrives in Hollywood and navigates the cutthroat world of auditions and studio politics while falling for a matinee idol.',
    genres: ['Romance', 'Drama'],
    type: 'Story',
    world: 'hollywood-dreams',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['dreams', 'fame', 'love'] },
  },
];

export const hollywoodDreamsAdventures: Gem[] = [
  {
    id: 'the-missing-script',
    name: 'The Missing Script',
    description: 'Ella and Ricky must team up to find a stolen movie script before it falls into the wrong hands and ruins their careers.',
    genres: ['Mystery', 'Romance'],
    type: 'Adventure',
    world: 'hollywood-dreams',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['mystery', 'collaboration', 'suspense'] },
  },
];

export const hollywoodDreamsScenes: Gem[] = [
  {
    id: 'the-casting-call',
    name: 'The Casting Call',
    description: 'Ella nervously attends a major audition, facing tough competition and the scrutinizing gaze of studio executives.',
    genres: ['Drama'],
    type: 'Scene',
    world: 'hollywood-dreams',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['audition', 'pressure', 'hope'] },
    characterIds: ['ella-rosewood', 'barry-bigshot', 'doris-darling'],
  },
];

// --- World 2: "Motown Magic" (Music/Romance) ---
export const motownMagicCharacters: Gem[] = [
  {
    id: 'leo-harmon',
    name: 'Leo Harmon',
    description: 'A talented but undiscovered singer trying to make it big in the vibrant Motown scene of the 1960s.',
    genres: ['Music', 'Romance'],
    type: 'Character',
    world: 'motown-magic',
    attributes: { power: 70, rarity: 'Epic', level: 1, traits: ['soulful', 'determined', 'charismatic'] },
    casting: [
      { id: 'diana-rhythm', name: 'Diana Rhythm', role: 'Love Interest', description: 'A gifted songwriter and producer' },
      { id: 'mr-grooves', name: 'Mr. Grooves', role: 'Mentor', description: 'A seasoned record executive' },
      { id: 'the-harmonics', name: 'The Harmonics', role: 'Bandmates', description: 'Leo\'s backing vocalists and musicians' },
    ],
  },
  {
    id: 'diana-rhythm',
    name: 'Diana Rhythm',
    description: 'A sharp and innovative songwriter and producer working at a prominent Motown record label.',
    genres: ['Music', 'Romance'],
    type: 'Character',
    world: 'motown-magic',
    attributes: { power: 78, rarity: 'Epic', level: 2, traits: ['creative', 'independent', 'perceptive'] },
    casting: [],
  },
];

export const motownMagicStories: Gem[] = [
  {
    id: 'rhythm-of-love',
    name: 'Rhythm of Love',
    description: 'Leo and Diana collaborate on a hit song, their professional partnership blossoming into a passionate romance amidst the backdrop of the Motown sound.',
    genres: ['Music', 'Romance'],
    type: 'Story',
    world: 'motown-magic',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'collaboration', 'love'] },
  },
];

export const motownMagicAdventures: Gem[] = [
  {
    id: 'the-stolen-melody',
    name: 'The Stolen Melody',
    description: 'A rival record label tries to steal Leo and Diana\'s latest song, forcing them to take action to protect their creation.',
    genres: ['Music', 'Mystery'],
    type: 'Adventure',
    world: 'motown-magic',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'intrigue', 'protection'] },
  },
];

export const motownMagicScenes: Gem[] = [
  {
    id: 'the-recording-session',
    name: 'The Recording Session',
    description: 'Leo and Diana work together in the studio, their creative energy and growing attraction palpable as they lay down tracks for their new hit.',
    genres: ['Music', 'Romance'],
    type: 'Scene',
    world: 'motown-magic',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'collaboration', 'passion'] },
    characterIds: ['leo-harmon', 'diana-rhythm', 'the-harmonics'],
  },
];

// --- World 3: "Mad Men Era" (Drama/Workplace) ---
export const madMenEraCharacters: Gem[] = [
  {
    id: 'don-draper-esque',
    name: 'Sterling Archer',
    description: 'A charismatic and enigmatic advertising executive navigating the competitive world of Madison Avenue in the 1960s.',
    genres: ['Drama', 'Workplace'],
    type: 'Character',
    world: 'mad-men-era',
    attributes: { power: 85, rarity: 'Legendary', level: 4, traits: ['charming', 'complex', 'driven'] },
    casting: [
      { id: 'peggy-olson-inspired', name: 'Lana Kane', role: 'Copywriter', description: 'An ambitious and talented woman climbing the corporate ladder' },
      { id: 'joan-holloway-type', name: 'Pam Poovey', role: 'Office Manager', description: 'A savvy and influential figure in the office' },
      { id: 'roger-sterling-alike', name: 'Malory Archer', role: 'Senior Partner', description: 'A witty and experienced but often inappropriate executive' },
    ],
  },
  {
    id: 'peggy-olson-inspired',
    name: 'Lana Kane',
    description: 'A determined and intelligent copywriter striving for recognition in a male-dominated industry.',
    genres: ['Drama', 'Workplace'],
    type: 'Character',
    world: 'mad-men-era',
    attributes: { power: 78, rarity: 'Epic', level: 3, traits: ['ambitious', 'smart', 'resilient'] },
    casting: [],
  },
];

export const madMenEraStories: Gem[] = [
  {
    id: 'the-campaign-trail',
    name: 'The Campaign Trail',
    description: 'Sterling Archer and his team work on a high-stakes advertising campaign that could make or break their agency.',
    genres: ['Drama', 'Workplace'],
    type: 'Story',
    world: 'mad-men-era',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['advertising', 'competition', 'success'] },
  },
];

export const madMenEraAdventures: Gem[] = [
  {
    id: 'the-client-crisis',
    name: 'The Client Crisis',
    description: 'A major client threatens to leave the agency, forcing the team to pull out all the stops to win them back.',
    genres: ['Drama', 'Workplace'],
    type: 'Adventure',
    world: 'mad-men-era',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['business', 'pressure', 'strategy'] },
  },
];

export const madMenEraScenes: Gem[] = [
  {
    id: 'the-pitch-meeting',
    name: 'The Pitch Meeting',
    description: 'Sterling Archer delivers a crucial pitch to a potential client, showcasing his persuasive skills and creative vision.',
    genres: ['Drama', 'Workplace'],
    type: 'Scene',
    world: 'mad-men-era',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['presentation', 'persuasion', 'stakes'] },
    characterIds: ['don-draper-esque', 'peggy-olson-inspired', 'joan-holloway-type', 'roger-sterling-alike'],
  },
];

// --- World 4: "Cold War Spies" (Spy/Thriller) ---
export const coldWarSpiesCharacters: Gem[] = [
  {
    id: 'agent-shadow',
    name: 'Agent Anya Petrova',
    description: 'A skilled and resourceful spy operating behind enemy lines during the height of the Cold War.',
    genres: ['Spy', 'Thriller'],
    type: 'Character',
    world: 'cold-war-spies',
    attributes: { power: 90, rarity: 'Legendary', level: 5, traits: ['stealthy', 'intelligent', 'courageous'] },
    casting: [
      { id: 'the-handler', name: 'Control', role: 'Superior', description: 'A mysterious and demanding intelligence officer' },
      { id: 'the-informant', name: 'Dimitri Volkov', role: 'Contact', description: 'A double agent with crucial information' },
      { id: 'the-rival', name: 'Agent Blackwood', role: 'Antagonist', description: 'A ruthless counter-intelligence operative' },
    ],
  },
  {
    id: 'the-handler',
    name: 'Control',
    description: 'A high-ranking intelligence officer who pulls the strings from the shadows, providing missions and guidance to Agent Anya.',
    genres: ['Spy', 'Thriller'],
    type: 'Character',
    world: 'cold-war-spies',
    attributes: { power: 88, rarity: 'Rare', level: 4, traits: ['calculating', 'secretive', 'authoritative'] },
    casting: [],
  },
];

export const coldWarSpiesStories: Gem[] = [
  {
    id: 'shadows-of-berlin',
    name: 'Shadows of Berlin',
    description: 'Agent Anya is tasked with infiltrating East Berlin to retrieve vital intelligence that could shift the balance of power in the Cold War.',
    genres: ['Spy', 'Thriller'],
    type: 'Story',
    world: 'cold-war-spies',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['espionage', 'intrigue', 'danger'] },
  },
];

export const coldWarSpiesAdventures: Gem[] = [
  {
    id: 'the-double-cross',
    name: 'The Double Cross',
    description: 'Agent Anya discovers that a trusted contact is a double agent, leading to a dangerous game of cat and mouse.',
    genres: ['Spy', 'Thriller'],
    type: 'Adventure',
    world: 'cold-war-spies',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['betrayal', 'suspense', 'deception'] },
  },
];

export const coldWarSpiesScenes: Gem[] = [
  {
    id: 'the-secret-meeting',
    name: 'The Secret Meeting',
    description: 'Agent Anya meets with a clandestine contact in a dimly lit alley, exchanging crucial information under the watchful eyes of unseen enemies.',
    genres: ['Spy', 'Thriller'],
    type: 'Scene',
    world: 'cold-war-spies',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['clandestine', 'information', 'risk'] },
    characterIds: ['agent-shadow', 'the-informant'],
  },
];

// --- World 5: "Surfside Sixties" (Romance/Comedy) ---
export const surfsideSixtiesCharacters: Gem[] = [
  {
    id: 'surfer-dude',
    name: 'Kai "The Wave" Walker',
    description: 'A laid-back and charming surfer living the endless summer in 1960s California.',
    genres: ['Romance', 'Comedy'],
    type: 'Character',
    world: 'surfside-sixties',
    attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['charming', 'carefree', 'skilled'] },
    casting: [
      { id: 'beach-babe', name: 'Sandy Shores', role: 'Love Interest', description: 'A fun-loving and independent girl who loves the beach' },
      { id: 'rival-surfer', name: 'Duke "The Wipeout" Johnson', role: 'Antagonist', description: 'A competitive and arrogant surfer' },
      { id: 'wise-mentor', name: 'Old Man Kahuna', role: 'Guide', description: 'A legendary surfer with ancient wisdom' },
    ],
  },
  {
    id: 'beach-babe',
    name: 'Sandy Shores',
    description: 'A bright and spirited young woman who spends her days enjoying the sun, sand, and surf.',
    genres: ['Romance', 'Comedy'],
    type: 'Character',
    world: 'surfside-sixties',
    attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['energetic', 'friendly', 'adventurous'] },
    casting: [],
  },
];

export const surfsideSixtiesStories: Gem[] = [
  {
    id: 'summer-romance',
    name: 'Summer Romance',
    description: 'Kai and Sandy meet on the beach and embark on a lighthearted summer romance filled with surfing, beach parties, and good times.',
    genres: ['Romance', 'Comedy'],
    type: 'Story',
    world: 'surfside-sixties',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['summer', 'beach', 'love'] },
  },
];

export const surfsideSixtiesAdventures: Gem[] = [
  {
    id: 'the-big-kahuna-contest',
    name: 'The Big Kahuna Contest',
    description: 'Kai enters a prestigious surfing competition, facing off against his rival Duke while trying to impress Sandy.',
    genres: ['Romance', 'Comedy', 'Sports'],
    type: 'Adventure',
    world: 'surfside-sixties',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['surfing', 'competition', 'romance'] },
  },
];

export const surfsideSixtiesScenes: Gem[] = [
  {
    id: 'the-beach-party',
    name: 'The Beach Party',
    description: 'A lively beach party with music, dancing, and a bonfire under the stars, where Kai and Sandy share a romantic moment.',
    genres: ['Romance', 'Comedy'],
    type: 'Scene',
    world: 'surfside-sixties',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['party', 'music', 'romance'] },
    characterIds: ['surfer-dude', 'beach-babe'],
  },
];

// --- World 6: "Greaser Gang Rumble" (Drama/Action) ---
export const greaserGangRumbleCharacters: Gem[] = [
  {
    id: 'leader-of-the-pack',
    name: 'Danny "The Rocket" Russo',
    description: 'The charismatic and tough leader of a greaser gang in a 1950s urban neighborhood.',
    genres: ['Drama', 'Action'],
    type: 'Character',
    world: 'greaser-gang-rumble',
    attributes: { power: 82, rarity: 'Epic', level: 3, traits: ['loyal', 'rebellious', 'strong'] },
    casting: [
      { id: 'the-sweetheart', name: 'Betty "Blue Eyes" Miller', role: 'Love Interest', description: 'A kind-hearted girl caught between two worlds' },
      { id: 'the-muscle', name: 'Vinny "The Knuckles" Palumbo', role: 'Loyal Friend', description: 'Danny\'s right-hand man, always ready for a fight' },
      { id: 'the-rival-leader', name: 'Spike "The Cobra" Johnson', role: 'Antagonist', description: 'The ruthless leader of a rival gang' },
    ],
  },
  {
    id: 'the-sweetheart',
    name: 'Betty "Blue Eyes" Miller',
    description: 'A good girl from the other side of the tracks who finds herself drawn to the rebellious world of the greasers.',
    genres: ['Drama', 'Romance'],
    type: 'Character',
    world: 'greaser-gang-rumble',
    attributes: { power: 58, rarity: 'Epic', level: 1, traits: ['innocent', 'curious', 'brave'] },
    casting: [],
  },
];

export const greaserGangRumbleStories: Gem[] = [
  {
    id: 'rumble-on-the-riverfront',
    name: 'Rumble on the Riverfront',
    description: 'Danny\'s gang clashes with a rival gang for control of their territory, leading to a dangerous and decisive rumble.',
    genres: ['Drama', 'Action'],
    type: 'Story',
    world: 'greaser-gang-rumble',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['gangs', 'rivalry', 'conflict'] },
  },
];

export const greaserGangRumbleAdventures: Gem[] = [
  {
    id: 'the-stolen-jacket',
    name: 'The Stolen Jacket',
    description: 'The rival gang steals Danny\'s prized jacket, a symbol of his leadership, and he must rally his crew to get it back.',
    genres: ['Drama', 'Action'],
    type: 'Adventure',
    world: 'greaser-gang-rumble',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['loyalty', 'retribution', 'pride'] },
  },
];

export const greaserGangRumbleScenes: Gem[] = [
  {
    id: 'the-drag-race',
    name: 'The Drag Race',
    description: 'Danny challenges Spike to a high-stakes drag race to settle a dispute and prove his dominance.',
    genres: ['Drama', 'Action', 'Sports'],
    type: 'Scene',
    world: 'greaser-gang-rumble',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['racing', 'challenge', 'stakes'] },
    characterIds: ['leader-of-the-pack', 'the-rival-leader'],
  },
];

// --- World 7: "Beatnik Cafe Poetry Slam" (Drama/Literary) ---
export const beatnikCafeCharacters: Gem[] = [
  {
    id: 'the-poet',
    name: 'Seraphina "Saffron" Skye',
    description: 'A free-spirited and introspective poet who frequents a smoky beatnik cafe in the late 1950s.',
    genres: ['Drama', 'Literary'],
    type: 'Character',
    world: 'beatnik-cafe',
    attributes: { power: 55, rarity: 'Epic', level: 1, traits: ['artistic', 'philosophical', 'expressive'] },
    casting: [
      { id: 'the-musician', name: 'Miles "The Cool" Davis Jr.', role: 'Accompanist', description: 'A talented jazz musician who often plays at the cafe' },
      { id: 'the-observer', name: 'Arthur "The Thinker" Finch', role: 'Fellow Beatnik', description: 'A quiet and observant intellectual' },
      { id: 'the-outsider', name: 'Vivian "The Square" Sterling', role: 'Intrigued Visitor', description: 'A more conventional person drawn to the beatnik scene' },
    ],
  },
  {
    id: 'the-musician',
    name: 'Miles "The Cool" Davis Jr.',
    description: 'A talented jazz musician who provides the atmospheric soundtrack to the beatnik cafe.',
    genres: ['Drama', 'Music'],
    type: 'Character',
    world: 'beatnik-cafe',
    attributes: { power: 68, rarity: 'Rare', level: 2, traits: ['melancholic', 'improvisational', 'soulful'] },
    casting: [],
  },
];

export const beatnikCafeStories: Gem[] = [
  {
    id: 'whispers-in-the-smoke',
    name: 'Whispers in the Smoke',
    description: 'Saffron shares her deeply personal poetry at the cafe, touching the hearts and minds of the other beatniks and a curious outsider.',
    genres: ['Drama', 'Literary'],
    type: 'Story',
    world: 'beatnik-cafe',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['poetry', 'introspection', 'connection'] },
  },
];

export const beatnikCafeAdventures: Gem[] = [
  {
    id: 'the-lost-manuscript',
    name: 'The Lost Manuscript',
    description: 'Saffron loses her precious book of poems, and the beatnik community rallies together to help her find it.',
    genres: ['Drama', 'Mystery'],
    type: 'Adventure',
    world: 'beatnik-cafe',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['community', 'search', 'friendship'] },
  },
];

export const beatnikCafeScenes: Gem[] = [
  {
    id: 'the-poetry-slam',
    name: 'The Poetry Slam',
    description: 'Saffron takes the stage at the cafe, pouring her heart out through her verses to an attentive audience.',
    genres: ['Drama', 'Literary'],
    type: 'Scene',
    world: 'beatnik-cafe',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['performance', 'expression', 'audience'] },
    characterIds: ['the-poet', 'the-musician', 'the-observer', 'the-outsider'],
  },
];

// --- World 8: "Suburban Secrets" (Mystery/Thriller) ---
export const suburbanSecretsCharacters: Gem[] = [
  {
    id: 'the-nosy-neighbor',
    name: 'Agnes Periwinkle',
    description: 'A seemingly ordinary suburban housewife in the 1950s with a penchant for gossip and a keen eye for secrets.',
    genres: ['Mystery', 'Thriller'],
    type: 'Character',
    world: 'suburban-secrets',
    attributes: { power: 45, rarity: 'Epic', level: 2, traits: ['observant', 'inquisitive', 'meddling'] },
    casting: [
      { id: 'the-new-family', name: 'The Blackwood Family', role: 'Suspects', description: 'A mysterious new family who just moved into the neighborhood' },
      { id: 'the-concerned-husband', name: 'George Periwinkle', role: 'Skeptic', description: 'Agnes\'s pragmatic husband who often dismisses her suspicions' },
      { id: 'the-local-sheriff', name: 'Sheriff Brody', role: 'Authority Figure', description: 'The local law enforcement officer' },
    ],
  },
  {
    id: 'the-new-family',
    name: 'Mr. and Mrs. Blackwood',
    description: 'A reserved and enigmatic couple who move into the quiet suburban neighborhood, raising suspicion among the residents.',
    genres: ['Mystery', 'Thriller'],
    type: 'Character',
    world: 'suburban-secrets',
    attributes: { power: 70, rarity: 'Rare', level: 1, traits: ['secretive', 'unassuming', 'guarded'] },
    casting: [],
  },
];

export const suburbanSecretsStories: Gem[] = [
  {
    id: 'the-case-of-the-missing-milkman',
    name: 'The Case of the Missing Milkman',
    description: 'Agnes notices the milkman hasn\'t made his rounds in days and suspects something sinister is afoot in her seemingly idyllic suburb.',
    genres: ['Mystery', 'Thriller'],
    type: 'Story',
    world: 'suburban-secrets',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['disappearance', 'suspicion', 'investigation'] },
  },
];

export const suburbanSecretsAdventures: Gem[] = [
  {
    id: 'the-hidden-basement',
    name: 'The Hidden Basement',
    description: 'Agnes investigates strange noises coming from the Blackwood\'s house and discovers a hidden basement with a shocking secret.',
    genres: ['Mystery', 'Thriller'],
    type: 'Adventure',
    world: 'suburban-secrets',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['discovery', 'danger', 'revelation'] },
  },
];

export const suburbanSecretsScenes: Gem[] = [
  {
    id: 'the-neighborhood-gossip',
    name: 'The Neighborhood Gossip',
    description: 'Agnes gathers with her neighbors for their weekly coffee klatch, exchanging rumors and suspicions about the new family on the block.',
    genres: ['Mystery'],
    type: 'Scene',
    world: 'suburban-secrets',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['gossip', 'rumors', 'suspicion'] },
    characterIds: ['the-nosy-neighbor', 'the-concerned-husband'],
  },
];

// --- World 9: "Space Race Romance" (Sci-Fi/Romance) ---
export const spaceRaceRomanceCharacters: Gem[] = [
  {
    id: 'the-female-engineer',
    name: 'Dr. Evelyn Reed',
    description: 'A brilliant aerospace engineer working on the NASA space program during the 1960s.',
    genres: ['Sci-Fi', 'Romance'],
    type: 'Character',
    world: 'space-race-romance',
    attributes: { power: 88, rarity: 'Epic', level: 3, traits: ['intelligent', 'driven', 'pioneering'] },
    casting: [
      { id: 'the-test-pilot', name: 'Captain James "Jim" Armstrong', role: 'Love Interest', description: 'A courageous and skilled test pilot selected for a moon mission' },
      { id: 'the-stern-director', name: 'Director Thompson', role: 'Superior', description: 'The demanding director of the space program' },
      { id: 'the-rival-scientist', name: 'Dr. Igor Volkov', role: 'Competitor', description: 'A Soviet scientist in the opposing space program' },
    ],
  },
  {
    id: 'the-test-pilot',
    name: 'Captain James "Jim" Armstrong',
    description: 'A brave and dedicated test pilot with his sights set on the stars.',
    genres: ['Sci-Fi', 'Romance'],
    type: 'Character',
    world: 'space-race-romance',
    attributes: { power: 92, rarity: 'Epic', level: 4, traits: ['courageous', 'determined', 'charming'] },
    casting: [],
  },
];

export const spaceRaceRomanceStories: Gem[] = [
  {
    id: 'to-the-moon-and-back',
    name: 'To the Moon and Back',
    description: 'Evelyn and Jim fall in love amidst the intense pressure and excitement of the space race, their romance mirroring humanity\'s journey to the moon.',
    genres: ['Sci-Fi', 'Romance'],
    type: 'Story',
    world: 'space-race-romance',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['space', 'romance', 'ambition'] },
  },
];

export const spaceRaceRomanceAdventures: Gem[] = [
  {
    id: 'the-sabotage',
    name: 'The Sabotage',
    description: 'Evelyn and Jim must work together to uncover who is trying to sabotage the American space program.',
    genres: ['Sci-Fi', 'Mystery'],
    type: 'Adventure',
    world: 'space-race-romance',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['sabotage', 'investigation', 'teamwork'] },
  },
];

export const spaceRaceRomanceScenes: Gem[] = [
  {
    id: 'the-launch-day',
    name: 'The Launch Day',
    description: 'The tension is high as Jim prepares for his historic launch into space, with Evelyn watching anxiously from mission control.',
    genres: ['Sci-Fi', 'Romance', 'Drama'],
    type: 'Scene',
    world: 'space-race-romance',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['launch', 'suspense', 'hope'] },
    characterIds: ['the-female-engineer', 'the-test-pilot', 'the-stern-director'],
  },
];

// --- World 10: "British Invasion Rockers" (Music/Comedy) ---
export const britishInvasionCharacters: Gem[] = [
  {
    id: 'the-lead-singer',
    name: 'Mick "The Mod" Jaggerton',
    description: 'The charismatic and rebellious lead singer of a popular British rock band during the 1960s British Invasion.',
    genres: ['Music', 'Comedy'],
    type: 'Character',
    world: 'british-invasion',
    attributes: { power: 78, rarity: 'Epic', level: 2, traits: ['charming', 'energetic', 'rebellious'] },
    casting: [
      { id: 'the-cool-guitarist', name: 'Keith "The Riff" Richardsley', role: 'Bandmate', description: 'The band\'s iconic guitarist with a knack for catchy riffs' },
      { id: 'the-groovy-bassist', name: 'Bill "The Beat" Wymanston', role: 'Bandmate', description: 'The band\'s steady and cool bassist' },
      { id: 'the-drumming-dynamo', name: 'Charlie "The Sticks" Wattson', role: 'Bandmate', description: 'The band\'s reliable and powerful drummer' },
      { id: 'the-fan-girl', name: 'Penny "The Piper" Lane', role: 'Admirer', description: 'An enthusiastic and devoted fan of the band' },
    ],
  },
  {
    id: 'the-cool-guitarist',
    name: 'Keith "The Riff" Richardsley',
    description: 'The effortlessly cool and talented guitarist of the band, known for his signature riffs and laid-back attitude.',
    genres: ['Music', 'Comedy'],
    type: 'Character',
    world: 'british-invasion',
    attributes: { power: 75, rarity: 'Epic', level: 2, traits: ['talented', 'cool', 'mischievous'] },
    casting: [],
  },
];

export const britishInvasionStories: Gem[] = [
  {
    id: 'rock-and-roll-riot',
    name: 'Rock and Roll Riot',
    description: 'Mick and his band cause mayhem and musical magic as they take America by storm during the British Invasion.',
    genres: ['Music', 'Comedy'],
    type: 'Story',
    world: 'british-invasion',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'fame', 'antics'] },
  },
];

export const britishInvasionAdventures: Gem[] = [
  {
    id: 'the-lost-guitar',
    name: 'The Lost Guitar',
    description: 'Keith\'s prized guitar goes missing before a major concert, and the band must frantically search for it.',
    genres: ['Music', 'Comedy', 'Mystery'],
    type: 'Adventure',
    world: 'british-invasion',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'search', 'humor'] },
  },
];

export const britishInvasionScenes: Gem[] = [
  {
    id: 'the-concert-chaos',
    name: 'The Concert Chaos',
    description: 'The band performs a wild and energetic concert, complete with screaming fans and unexpected stage mishaps.',
    genres: ['Music', 'Comedy'],
    type: 'Scene',
    world: 'british-invasion',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['performance', 'energy', 'mayhem'] },
    characterIds: ['the-lead-singer', 'the-cool-guitarist', 'the-groovy-bassist', 'the-drumming-dynamo', 'the-fan-girl'],
  },
];

// --- World 11: "Mod vs. Rocker Rivalry" (Drama/Action) ---
export const modRockerRivalryCharacters: Gem[] = [
  {
    id: 'the-mod-leader',
    name: 'Ace "The Face" Harrington',
    description: 'The sharp-dressing and scooter-riding leader of a Mod gang in 1960s London.',
    genres: ['Drama', 'Action'],
    type: 'Character',
    world: 'mod-rocker-rivalry',
    attributes: { power: 80, rarity: 'Epic', level: 3, traits: ['stylish', 'confident', 'territorial'] },
    casting: [
      { id: 'the-rocker-leader', name: 'Spike "The Stud" Mallory', role: 'Rival', description: 'The leather-clad and motorcycle-riding leader of a Rocker gang' },
      { id: 'the-mod-girlfriend', name: 'Penny "The Pixie" Parker', role: 'Supporter', description: 'Ace\'s fashionable and loyal girlfriend' },
      { id: 'the-neutral-observer', name: 'Constable Davies', role: 'Authority Figure', description: 'A local police officer trying to keep the peace' },
    ],
  },
  {
    id: 'the-rocker-leader',
    name: 'Spike "The Stud" Mallory',
    description: 'The tough and rebellious leader of a Rocker gang, known for his motorcycle and leather jacket.',
    genres: ['Drama', 'Action'],
    type: 'Character',
    world: 'mod-rocker-rivalry',
    attributes: { power: 85, rarity: 'Epic', level: 3, traits: ['tough', 'rebellious', 'intimidating'] },
    casting: [],
  },
];

export const modRockerRivalryStories: Gem[] = [
  {
    id: 'clash-of-cultures',
    name: 'Clash of Cultures',
    description: 'Tensions escalate between the Mods and Rockers in Brighton, leading to a series of confrontations and a potential all-out brawl.',
    genres: ['Drama', 'Action'],
    type: 'Story',
    world: 'mod-rocker-rivalry',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['rivalry', 'youth', 'conflict'] },
  },
];

export const modRockerRivalryAdventures: Gem[] = [
  {
    id: 'the-stolen-scooter',
    name: 'The Stolen Scooter',
    description: 'Ace\'s prized scooter is stolen by the Rockers, igniting a chase and a demand for its return.',
    genres: ['Drama', 'Action'],
    type: 'Adventure',
    world: 'mod-rocker-rivalry',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['theft', 'chase', 'retribution'] },
  },
];

export const modRockerRivalryScenes: Gem[] = [
  {
    id: 'the-beachfront-brawl',
    name: 'The Beachfront Brawl',
    description: 'The Mods and Rockers face off in a tense confrontation on the Brighton beach, ready to fight for their territory and pride.',
    genres: ['Drama', 'Action'],
    type: 'Scene',
    world: 'mod-rocker-rivalry',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['confrontation', 'tension', 'violence'] },
    characterIds: ['the-mod-leader', 'the-rocker-leader', 'the-mod-girlfriend', 'the-neutral-observer'],
  },
];

// --- World 12: "Vietnam War Protest" (Drama/Historical) ---
export const vietnamProtestCharacters: Gem[] = [
  {
    id: 'the-activist',
    name: 'Eleanor "Ellie" Peace',
    description: 'A passionate and outspoken college student actively involved in the anti-Vietnam War protest movement of the late 1960s.',
    genres: ['Drama', 'Historical'],
    type: 'Character',
    world: 'vietnam-protest',
    attributes: { power: 68, rarity: 'Epic', level: 1, traits: ['idealistic', 'courageous', 'vocal'] },
    casting: [
      { id: 'the-draft-dodger', name: 'Daniel "Danny" Avoid', role: 'Fellow Protester', description: 'A young man trying to avoid being drafted into the war' },
      { id: 'the-concerned-parent', name: 'Mrs. Henderson', role: 'Opponent', description: 'A mother who supports the war effort' },
      { id: 'the-sympathetic-professor', name: 'Professor Davies', role: 'Ally', description: 'A professor who supports the students\' right to protest' },
    ],
  },
  {
    id: 'the-draft-dodger',
    name: 'Daniel "Danny" Avoid',
    description: 'A young man grappling with the moral dilemma of the Vietnam War and trying to find ways to avoid the draft.',
    genres: ['Drama', 'Historical'],
    type: 'Character',
    world: 'vietnam-protest',
    attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['conflicted', 'scared', 'principled'] },
    casting: [],
  },
];

export const vietnamProtestStories: Gem[] = [
  {
    id: 'voices-of-dissent',
    name: 'Voices of Dissent',
    description: 'Ellie and Danny participate in various protests and rallies against the Vietnam War, facing opposition and police intervention.',
    genres: ['Drama', 'Historical'],
    type: 'Story',
    world: 'vietnam-protest',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['protest', 'peace', 'activism'] },
  },
];

export const vietnamProtestAdventures: Gem[] = [
  {
    id: 'the-march-on-washington',
    name: 'The March on Washington',
    description: 'Ellie and Danny join a large-scale protest march in Washington D.C., hoping to make their voices heard by the government.',
    genres: ['Drama', 'Historical'],
    type: 'Adventure',
    world: 'vietnam-protest',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['march', 'unity', 'impact'] },
  },
];

export const vietnamProtestScenes: Gem[] = [
  {
    id: 'the-campus-sit-in',
    name: 'The Campus Sit-In',
    description: 'Ellie and other students stage a sit-in protest on their college campus to demand an end to the war.',
    genres: ['Drama', 'Historical'],
    type: 'Scene',
    world: 'vietnam-protest',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['sit-in', 'resistance', 'consequences'] },
    characterIds: ['the-activist', 'the-draft-dodger', 'the-sympathetic-professor', 'the-concerned-parent'],
  },
];

// --- World 13: "Psychedelic Summer of Love" (Romance/Drama) ---
export const summerOfLoveCharacters: Gem[] = [
  {
    id: 'the-flower-child',
    name: 'Willow "Peace" Bloom',
    description: 'A free-spirited and idealistic young woman embracing the counterculture movement during the Summer of Love in 1967 San Francisco.',
    genres: ['Romance', 'Drama'],
    type: 'Character',
    world: 'summer-of-love',
    attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['peaceful', 'artistic', 'open-minded'] },
    casting: [
      { id: 'the-wandering-musician', name: 'Jaxon "Harmony" Reed', role: 'Love Interest', description: 'A traveling musician spreading love and music' },
      { id: 'the-spiritual-guru', name: 'Guru Moonbeam', role: 'Guide', description: 'An enigmatic figure offering spiritual guidance' },
      { id: 'the-skeptical-observer', name: 'Detective Harding', role: 'Outsider', description: 'A police detective observing the happenings in Haight-Ashbury' },
    ],
  },
  {
    id: 'the-wandering-musician',
    name: 'Jaxon "Harmony" Reed',
    description: 'A soulful musician traveling through Haight-Ashbury, sharing his music and message of peace and love.',
    genres: ['Romance', 'Music'],
    type: 'Character',
    world: 'summer-of-love',
    attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['musical', 'peaceful', 'nomadic'] },
    casting: [],
  },
];

export const summerOfLoveStories: Gem[] = [
  {
    id: 'a-love-in-haight-ashbury',
    name: 'A Love in Haight-Ashbury',
    description: 'Willow and Jaxon meet and experience a whirlwind romance amidst the vibrant and transformative atmosphere of the Summer of Love.',
    genres: ['Romance', 'Drama'],
    type: 'Story',
    world: 'summer-of-love',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['love', 'peace', 'freedom'] },
  },
];

export const summerOfLoveAdventures: Gem[] = [
  {
    id: 'the-search-for-enlightenment',
    name: 'The Search for Enlightenment',
    description: 'Willow and Jaxon embark on a spiritual journey, seeking enlightenment and deeper meaning through the teachings of Guru Moonbeam.',
    genres: ['Romance', 'Drama'],
    type: 'Adventure',
    world: 'summer-of-love',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['spirituality', 'discovery', 'guidance'] },
  },
];

export const summerOfLoveScenes: Gem[] = [
  {
    id: 'the-love-in',
    name: 'The Love-In',
    description: 'Willow and Jaxon attend a peaceful gathering in Golden Gate Park, celebrating love, music, and unity with thousands of others.',
    genres: ['Romance', 'Drama', 'Music'],
    type: 'Scene',
    world: 'summer-of-love',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['gathering', 'music', 'peace'] },
    characterIds: ['the-flower-child', 'the-wandering-musician', 'the-spiritual-guru', 'the-skeptical-observer'],
  },
];

// --- World 14: "Girl Group Glamour" (Music/Romance) ---
export const girlGroupGlamourCharacters: Gem[] = [
  {
    id: 'the-lead-singer-gg',
    name: 'Brenda "The Star" Starr',
    description: 'The talented and ambitious lead singer of a rising girl group in the early 1960s.',
    genres: ['Music', 'Romance'],
    type: 'Character',
    world: 'girl-group-glamour',
    attributes: { power: 75, rarity: 'Epic', level: 2, traits: ['talented', 'driven', 'charismatic'] },
    casting: [
      { id: 'the-harmonizing-friend-1', name: 'Patty "The Beat" Bell', role: 'Group Member', description: 'One of Brenda\'s fellow singers and best friends' },
      { id: 'the-harmonizing-friend-2', name: 'Cindy "The Groove" Jones', role: 'Group Member', description: 'The other member of the girl group, known for her smooth vocals' },
      { id: 'the-charming-songwriter', name: 'Ronnie "The Hitmaker" Reynolds', role: 'Love Interest', description: 'A talented songwriter who takes an interest in the group' },
      { id: 'the-pushy-manager', name: 'Mr. Biggs', role: 'Manager', description: 'The group\'s demanding and ambitious manager' },
    ],
  },
  {
    id: 'the-harmonizing-friend-1',
    name: 'Patty "The Beat" Bell',
    description: 'A loyal and energetic member of the girl group, known for her strong harmonies and dance moves.',
    genres: ['Music'],
    type: 'Character',
    world: 'girl-group-glamour',
    attributes: { power: 70, rarity: 'Epic', level: 2, traits: ['loyal', 'energetic', 'harmonious'] },
    casting: [],
  },
];

export const girlGroupGlamourStories: Gem[] = [
  {
    id: 'shining-stars',
    name: 'Shining Stars',
    description: 'Brenda and her group navigate the challenges and excitement of the early 1960s music scene as they strive for stardom.',
    genres: ['Music', 'Romance'],
    type: 'Story',
    world: 'girl-group-glamour',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'friendship', 'fame'] },
  },
];

export const girlGroupGlamourAdventures: Gem[] = [
  {
    id: 'the-battle-of-the-bands',
    name: 'The Battle of the Bands',
    description: 'Brenda\'s group enters a local battle of the bands competition, facing tough rivals and the pressure to perform their best.',
    genres: ['Music', 'Drama'],
    type: 'Adventure',
    world: 'girl-group-glamour',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['competition', 'performance', 'teamwork'] },
  },
];

export const girlGroupGlamourScenes: Gem[] = [
  {
    id: 'the-recording-session-gg',
    name: 'The Recording Session',
    description: 'Brenda and her group record their first single in a professional studio, hoping it will be their ticket to success.',
    genres: ['Music', 'Drama'],
    type: 'Scene',
    world: 'girl-group-glamour',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['recording', 'music', 'dreams'] },
    characterIds: ['the-lead-singer-gg', 'the-harmonizing-friend-1', 'the-harmonizing-friend-2', 'the-charming-songwriter', 'the-pushy-manager'],
  },
];

// --- World 15: "Drive-In Movie Night" (Romance/Nostalgia) ---
export const driveInMovieNightCharacters: Gem[] = [
  {
    id: 'the-teenager-boy',
    name: 'Tommy "The Cool" Collins',
    description: 'A typical teenage boy in the 1950s, excited for a night at the drive-in movie.',
    genres: ['Romance', 'Nostalgia'],
    type: 'Character',
    world: 'drive-in-movie-night',
    attributes: { power: 58, rarity: 'Epic', level: 1, traits: ['eager', 'nervous', 'friendly'] },
    casting: [
      { id: 'the-teenager-girl', name: 'Susie "Sweetheart" Evans', role: 'Date', description: 'The girl Tommy has a crush on and finally asked out' },
      { id: 'the-goofy-friend', name: 'Billy "The Joker" Johnson', role: 'Friend', description: 'Tommy\'s best friend, always ready with a joke' },
      { id: 'the-strict-usher', name: 'Mr. Grumbles', role: 'Authority Figure', description: 'The grumpy usher at the drive-in' },
    ],
  },
  {
    id: 'the-teenager-girl',
    name: 'Susie "Sweetheart" Evans',
    description: 'A sweet and charming teenage girl going on her first date with Tommy at the drive-in.',
    genres: ['Romance', 'Nostalgia'],
    type: 'Character',
    world: 'drive-in-movie-night',
    attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['sweet', 'excited', 'a little shy'] },
    casting: [],
  },
];

export const driveInMovieNightStories: Gem[] = [
  {
    id: 'a-night-under-the-stars',
    name: 'A Night Under the Stars',
    description: 'Tommy and Susie\'s first date at the drive-in movie is filled with awkward moments, shared laughter, and the magic of the silver screen.',
    genres: ['Romance', 'Nostalgia'],
    type: 'Story',
    world: 'drive-in-movie-night',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['date', 'movies', 'nostalgia'] },
  },
];

export const driveInMovieNightAdventures: Gem[] = [
  {
    id: 'the-mischievous-prank',
    name: 'The Mischievous Prank',
    description: 'Tommy and Billy try to pull a prank on Mr. Grumbles at the drive-in, but things don\'t go exactly as planned.',
    genres: ['Comedy', 'Nostalgia'],
    type: 'Adventure',
    world: 'drive-in-movie-night',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['prank', 'humor', 'mischief'] },
  },
];

export const driveInMovieNightScenes: Gem[] = [
  {
    id: 'the-snack-bar-run',
    name: 'The Snack Bar Run',
    description: 'Tommy nervously goes to the snack bar to buy popcorn and soda for his date with Susie.',
    genres: ['Romance', 'Nostalgia'],
    type: 'Scene',
    world: 'drive-in-movie-night',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['snacks', 'nervousness', 'chivalry'] },
    characterIds: ['the-teenager-boy', 'the-teenager-girl'],
  },
];

// --- World 16: "Small Town Sock Hop" (Romance/Comedy) ---
export const smallTownSockHopCharacters: Gem[] = [
  {
    id: 'the-shy-dancer',
    name: 'Peggy Sue Johnson',
    description: 'A sweet but shy girl in a small town who loves to dance but is too nervous to ask anyone to the sock hop.',
    genres: ['Romance', 'Comedy'],
    type: 'Character',
    world: 'small-town-sock-hop',
    attributes: { power: 55, rarity: 'Epic', level: 1, traits: ['shy', 'sweet', 'talented'] },
    casting: [
      { id: 'the-charming-jock', name: 'Bobby "The Flash" Flanagan', role: 'Love Interest', description: 'The popular and athletic boy in town who catches Peggy Sue\'s eye' },
      { id: 'the-gossipy-friend', name: 'Brenda "The Buzz" Baker', role: 'Confidante', description: 'Peggy Sue\'s outgoing and talkative best friend' },
      { id: 'the-strict-chaperone', name: 'Mrs. Crabtree', role: 'Authority Figure', description: 'The stern chaperone at the sock hop' },
    ],
  },
  {
    id: 'the-charming-jock',
    name: 'Bobby "The Flash" Flanagan',
    description: 'The popular and friendly star athlete of the local high school.',
    genres: ['Romance', 'Comedy'],
    type: 'Character',
    world: 'small-town-sock-hop',
    attributes: { power: 68, rarity: 'Epic', level: 1, traits: ['charming', 'athletic', 'kind'] },
    casting: [],
  },
];

export const smallTownSockHopStories: Gem[] = [
  {
    id: 'a-dance-to-remember',
    name: 'A Dance to Remember',
    description: 'Peggy Sue finally gets asked to dance at the sock hop, leading to a magical night and the beginning of a sweet romance.',
    genres: ['Romance', 'Comedy'],
    type: 'Story',
    world: 'small-town-sock-hop',
    attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['dance', 'romance', 'small-town'] },
  },
];

export const smallTownSockHopAdventures: Gem[] = [
  {
    id: 'the-lost-corsage',
    name: 'The Lost Corsage',
    description: 'Bobby accidentally loses Peggy Sue\'s corsage before the sock hop, and he enlists Brenda\'s help to find it before the dance starts.',
    genres: ['Romance', 'Comedy'],
    type: 'Adventure',
    world: 'small-town-sock-hop',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['search', 'friendship', 'romance'] },
  },
];

export const smallTownSockHopScenes: Gem[] = [
  {
    id: 'the-nervous-ask',
    name: 'The Nervous Ask',
    description: 'Bobby, encouraged by his friends, finally works up the courage to ask Peggy Sue to dance at the sock hop.',
    genres: ['Romance', 'Comedy'],
    type: 'Scene',
    world: 'small-town-sock-hop',
    attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['asking', 'nervousness', 'excitement'] },
    characterIds: ['the-shy-dancer', 'the-charming-jock', 'the-gossipy-friend'],
  },
];

export const boldlandCollections: Collection[] = [
  { id: 'hollywood-dreams-characters', name: 'Hollywood Dreams Characters', description: 'Characters from the world of Hollywood Dreams.', type: 'CharacterCollection', gems: hollywoodDreamsCharacters },
  { id: 'hollywood-dreams-stories', name: 'Hollywood Dreams Stories', description: 'Stories from the world of Hollywood Dreams.', type: 'StoryCollection', gems: hollywoodDreamsStories },
  { id: 'hollywood-dreams-adventures', name: 'Hollywood Dreams Adventures', description: 'Adventures in the world of Hollywood Dreams.', type: 'AdventureCollection', gems: hollywoodDreamsAdventures },
  { id: 'hollywood-dreams-scenes', name: 'Hollywood Dreams Scenes', description: 'Scenes from the world of Hollywood Dreams.', type: 'SceneCollection', gems: hollywoodDreamsScenes },
  { id: 'motown-magic-characters', name: 'Motown Magic Characters', description: 'Characters from the world of Motown Magic.', type: 'CharacterCollection', gems: motownMagicCharacters },
  { id: 'motown-magic-stories', name: 'Motown Magic Stories', description: 'Stories from the world of Motown Magic.', type: 'StoryCollection', gems: motownMagicStories },
  { id: 'motown-magic-adventures', name: 'Motown Magic Adventures', description: 'Adventures in the world of Motown Magic.', type: 'AdventureCollection', gems: motownMagicAdventures },
  { id: 'motown-magic-scenes', name: 'Motown Magic Scenes', description: 'Scenes from the world of Motown Magic.', type: 'SceneCollection', gems: motownMagicScenes },
  { id: 'mad-men-era-characters', name: 'Mad Men Era Characters', description: 'Characters from the world of Mad Men Era.', type: 'CharacterCollection', gems: madMenEraCharacters },
  { id: 'mad-men-era-stories', name: 'Mad Men Era Stories', description: 'Stories from the world of Mad Men Era.', type: 'StoryCollection', gems: madMenEraStories },
  { id: 'mad-men-era-adventures', name: 'Mad Men Era Adventures', description: 'Adventures in the world of Mad Men Era.', type: 'AdventureCollection', gems: madMenEraAdventures },
  { id: 'mad-men-era-scenes', name: 'Mad Men Era Scenes', description: 'Scenes from the world of Mad Men Era.', type: 'SceneCollection', gems: madMenEraScenes },
  { id: 'cold-war-spies-characters', name: 'Cold War Spies Characters', description: 'Characters from the world of Cold War Spies.', type: 'CharacterCollection', gems: coldWarSpiesCharacters },
  { id: 'cold-war-spies-stories', name: 'Cold War Spies Stories', description: 'Stories from the world of Cold War Spies.', type: 'StoryCollection', gems: coldWarSpiesStories },
  { id: 'cold-war-spies-adventures', name: 'Cold War Spies Adventures', description: 'Adventures in the world of Cold War Spies.', type: 'AdventureCollection', gems: coldWarSpiesAdventures },
  { id: 'cold-war-spies-scenes', name: 'Cold War Spies Scenes', description: 'Scenes from the world of Cold War Spies.', type: 'SceneCollection', gems: coldWarSpiesScenes },
  { id: 'surfside-sixties-characters', name: 'Surfside Sixties Characters', description: 'Characters from the world of Surfside Sixties.', type: 'CharacterCollection', gems: surfsideSixtiesCharacters },
  { id: 'surfside-sixties-stories', name: 'Surfside Sixties Stories', description: 'Stories from the world of Surfside Sixties.', type: 'StoryCollection', gems: surfsideSixtiesStories },
  { id: 'surfside-sixties-adventures', name: 'Surfside Sixties Adventures', description: 'Adventures in the world of Surfside Sixties.', type: 'AdventureCollection', gems: surfsideSixtiesAdventures },
  { id: 'surfside-sixties-scenes', name: 'Surfside Sixties Scenes', description: 'Scenes from the world of Surfside Sixties.', type: 'SceneCollection', gems: surfsideSixtiesScenes },
  { id: 'greaser-gang-rumble-characters', name: 'Greaser Gang Rumble Characters', description: 'Characters from the world of Greaser Gang Rumble.', type: 'CharacterCollection', gems: greaserGangRumbleCharacters },
  { id: 'greaser-gang-rumble-stories', name: 'Greaser Gang Rumble Stories', description: 'Stories from the world of Greaser Gang Rumble.', type: 'StoryCollection', gems: greaserGangRumbleStories },
  { id: 'greaser-gang-rumble-adventures', name: 'Greaser Gang Rumble Adventures', description: 'Adventures in the world of Greaser Gang Rumble.', type: 'AdventureCollection', gems: greaserGangRumbleAdventures },
  { id: 'greaser-gang-rumble-scenes', name: 'Greaser Gang Rumble Scenes', description: 'Scenes from the world of Greaser Gang Rumble.', type: 'SceneCollection', gems: greaserGangRumbleScenes },
  { id: 'beatnik-cafe-characters', name: 'Beatnik Cafe Characters', description: 'Characters from the world of Beatnik Cafe.', type: 'CharacterCollection', gems: beatnikCafeCharacters },
  { id: 'beatnik-cafe-stories', name: 'Beatnik Cafe Stories', description: 'Stories from the world of Beatnik Cafe.', type: 'StoryCollection', gems: beatnikCafeStories },
  { id: 'beatnik-cafe-adventures', name: 'Beatnik Cafe Adventures', description: 'Adventures in the world of Beatnik Cafe.', type: 'AdventureCollection', gems: beatnikCafeAdventures },
  { id: 'beatnik-cafe-scenes', name: 'Beatnik Cafe Scenes', description: 'Scenes from the world of Beatnik Cafe.', type: 'SceneCollection', gems: beatnikCafeScenes },
  { id: 'suburban-secrets-characters', name: 'Suburban Secrets Characters', description: 'Characters from the world of Suburban Secrets.', type: 'CharacterCollection', gems: suburbanSecretsCharacters },
  { id: 'suburban-secrets-stories', name: 'Suburban Secrets Stories', description: 'Stories from the world of Suburban Secrets.', type: 'StoryCollection', gems: suburbanSecretsStories },
  { id: 'suburban-secrets-adventures', name: 'Suburban Secrets Adventures', description: 'Adventures in the world of Suburban Secrets.', type: 'AdventureCollection', gems: suburbanSecretsAdventures },
  { id: 'suburban-secrets-scenes', name: 'Suburban Secrets Scenes', description: 'Scenes from the world of Suburban Secrets.', type: 'SceneCollection', gems: suburbanSecretsScenes },
  { id: 'space-race-romance-characters', name: 'Space Race Romance Characters', description: 'Characters from the world of Space Race Romance.', type: 'CharacterCollection', gems: spaceRaceRomanceCharacters },
  { id: 'space-race-romance-stories', name: 'Space Race Romance Stories', description: 'Stories from the world of Space Race Romance.', type: 'StoryCollection', gems: spaceRaceRomanceStories },
  { id: 'space-race-romance-adventures', name: 'Space Race Romance Adventures', description: 'Adventures in the world of Space Race Romance.', type: 'AdventureCollection', gems: spaceRaceRomanceAdventures },
  { id: 'space-race-romance-scenes', name: 'Space Race Romance Scenes', description: 'Scenes from the world of Space Race Romance.', type: 'SceneCollection', gems: spaceRaceRomanceScenes },
  { id: 'british-invasion-characters', name: 'British Invasion Rockers Characters', description: 'Characters from the world of British Invasion Rockers.', type: 'CharacterCollection', gems: britishInvasionCharacters },
  { id: 'british-invasion-stories', name: 'British Invasion Rockers Stories', description: 'Stories from the world of British Invasion Rockers.', type: 'StoryCollection', gems: britishInvasionStories },
  { id: 'british-invasion-adventures', name: 'British Invasion Rockers Adventures', description: 'Adventures in the world of British Invasion Rockers.', type: 'AdventureCollection', gems: britishInvasionAdventures },
  { id: 'british-invasion-scenes', name: 'British Invasion Rockers Scenes', description: 'Scenes from the world of British Invasion Rockers.', type: 'SceneCollection', gems: britishInvasionScenes },
  { id: 'mod-rocker-rivalry-characters', name: 'Mod vs. Rocker Rivalry Characters', description: 'Characters from the world of Mod vs. Rocker Rivalry.', type: 'CharacterCollection', gems: modRockerRivalryCharacters },
  { id: 'mod-rocker-rivalry-stories', name: 'Mod vs. Rocker Rivalry Stories', description: 'Stories from the world of Mod vs. Rocker Rivalry.', type: 'StoryCollection', gems: modRockerRivalryStories },
  { id: 'mod-rocker-rivalry-adventures', name: 'Mod vs. Rocker Rivalry Adventures', description: 'Adventures in the world of Mod vs. Rocker Rivalry.', type: 'AdventureCollection', gems: modRockerRivalryAdventures },
  { id: 'mod-rocker-rivalry-scenes', name: 'Mod vs. Rocker Rivalry Scenes', description: 'Scenes from the world of Mod vs. Rocker Rivalry.', type: 'SceneCollection', gems: modRockerRivalryScenes },
  { id: 'vietnam-protest-characters', name: 'Vietnam War Protest Characters', description: 'Characters from the world of Vietnam War Protest.', type: 'CharacterCollection', gems: vietnamProtestCharacters },
  { id: 'vietnam-protest-stories', name: 'Vietnam War Protest Stories', description: 'Stories from the world of Vietnam War Protest.', type: 'StoryCollection', gems: vietnamProtestStories },
  { id: 'vietnam-protest-adventures', name: 'Vietnam War Protest Adventures', description: 'Adventures in the world of Vietnam War Protest.', type: 'AdventureCollection', gems: vietnamProtestAdventures },
  { id: 'vietnam-protest-scenes', name: 'Vietnam War Protest Scenes', description: 'Scenes from the world of Vietnam War Protest.', type: 'SceneCollection', gems: vietnamProtestScenes },
  { id: 'summer-of-love-characters', name: 'Psychedelic Summer of Love Characters', description: 'Characters from the world of Psychedelic Summer of Love.', type: 'CharacterCollection', gems: summerOfLoveCharacters },
  { id: 'summer-of-love-stories', name: 'Psychedelic Summer of Love Stories', description: 'Stories from the world of Psychedelic Summer of Love.', type: 'StoryCollection', gems: summerOfLoveStories },
  { id: 'summer-of-love-adventures', name: 'Psychedelic Summer of Love Adventures', description: 'Adventures in the world of Psychedelic Summer of Love.', type: 'AdventureCollection', gems: summerOfLoveAdventures },
  { id: 'summer-of-love-scenes', name: 'Psychedelic Summer of Love Scenes', description: 'Scenes from the world of Psychedelic Summer of Love.', type: 'SceneCollection', gems: summerOfLoveScenes },
  { id: 'girl-group-glamour-characters', name: 'Girl Group Glamour Characters', description: 'Characters from the world of Girl Group Glamour.', type: 'CharacterCollection', gems: girlGroupGlamourCharacters },
  { id: 'girl-group-glamour-stories', name: 'Girl Group Glamour Stories', description: 'Stories from the world of Girl Group Glamour.', type: 'StoryCollection', gems: girlGroupGlamourStories },
  { id: 'girl-group-glamour-adventures', name: 'Girl Group Glamour Adventures', description: 'Adventures in the world of Girl Group Glamour.', type: 'AdventureCollection', gems: girlGroupGlamourAdventures },
  { id: 'girl-group-glamour-scenes', name: 'Girl Group Glamour Scenes', description: 'Scenes from the world of Girl Group Glamour.', type: 'SceneCollection', gems: girlGroupGlamourScenes },
  { id: 'drive-in-movie-night-characters', name: 'Drive-In Movie Night Characters', description: 'Characters from the world of Drive-In Movie Night.', type: 'CharacterCollection', gems: driveInMovieNightCharacters },
  { id: 'drive-in-movie-night-stories', name: 'Drive-In Movie Night Stories', description: 'Stories from the world of Drive-In Movie Night.', type: 'StoryCollection', gems: driveInMovieNightStories },
  { id: 'drive-in-movie-night-adventures', name: 'Drive-In Movie Night Adventures', description: 'Adventures in the world of Drive-In Movie Night.', type: 'AdventureCollection', gems: driveInMovieNightAdventures },
  { id: 'drive-in-movie-night-scenes', name: 'Drive-In Movie Night Scenes', description: 'Scenes from the world of Drive-In Movie Night.', type: 'SceneCollection', gems: driveInMovieNightScenes },
  { id: 'small-town-sock-hop-characters', name: 'Small Town Sock Hop Characters', description: 'Characters from the world of Small Town Sock Hop.', type: 'CharacterCollection', gems: smallTownSockHopCharacters },
  { id: 'small-town-sock-hop-stories', name: 'Small Town Sock Hop Stories', description: 'Stories from the world of Small Town Sock Hop.', type: 'StoryCollection', gems: smallTownSockHopStories },
  { id: 'small-town-sock-hop-adventures', name: 'Small Town Sock Hop Adventures', description: 'Adventures in the world of Small Town Sock Hop.', type: 'AdventureCollection', gems: smallTownSockHopAdventures },
  { id: 'small-town-sock-hop-scenes', name: 'Small Town Sock Hop Scenes', description: 'Scenes from the world of Small Town Sock Hop.', type: 'SceneCollection', gems: smallTownSockHopScenes },
];

import { Collection, Gem } from '../../../types/gemium';

// --- World 17: "Diner Jukebox Dreams" (Romance/Nostalgia) ---
export const dinerJukeboxCharacters17: Gem[] = [
  { id: 'diner-waitress-17', name: 'Penny Lane', description: 'A cheerful waitress at a 1950s diner with dreams of singing.', genres: ['Romance', 'Nostalgia'], type: 'Character', world: 'diner-jukebox', attributes: { power: 55, rarity: 'Epic', level: 1, traits: ['cheerful', 'dreamer', 'friendly'] }, casting: [{ id: 'local-musician-17', name: 'Danny Greaser', role: 'Love Interest', description: 'A local musician who frequents the diner' }] },
  { id: 'local-musician-17', name: 'Danny Greaser', description: 'A talented young musician who plays his guitar at the local diner.', genres: ['Romance', 'Music'], type: 'Character', world: 'diner-jukebox', attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['talented', 'shy', 'passionate'] }, casting: [] },
  { id: 'diner-owner-17', name: 'Big Tony', description: 'The friendly owner of the local diner.', genres: ['Nostalgia'], type: 'Character', world: 'diner-jukebox', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['kind', 'observant', 'hardworking'] }, casting: [] },
  { id: 'teen-customer-1-17', name: 'Betty Bopper', description: 'A regular teenage customer at the diner.', genres: ['Nostalgia'], type: 'Character', world: 'diner-jukebox', attributes: { power: 40, rarity: 'Common', level: 1, traits: ['energetic', 'gossipy'] }, casting: [] },
  { id: 'teen-customer-2-17', name: 'Frankie Fender', description: 'Another regular teenage customer, obsessed with cars.', genres: ['Nostalgia'], type: 'Character', world: 'diner-jukebox', attributes: { power: 45, rarity: 'Common', level: 1, traits: ['enthusiastic', 'knowledgeable'] }, casting: [] },
  { id: 'rival-waitress-17', name: 'Brenda Sue', description: 'A slightly competitive waitress at the diner.', genres: ['Drama'], type: 'Character', world: 'diner-jukebox', attributes: { power: 50, rarity: 'Common', level: 1, traits: ['competitive', 'ambitious'] }, casting: [] },
  { id: 'trucker-customer-17', name: 'Big Joe', description: 'A friendly long-haul trucker who stops by the diner.', genres: ['Nostalgia'], type: 'Character', world: 'diner-jukebox', attributes: { power: 75, rarity: 'Uncommon', level: 2, traits: ['friendly', 'storyteller'] }, casting: [] },
  { id: 'lost-tourist-17', name: 'Mr. Abernathy', description: 'A confused tourist who stumbles into the diner.', genres: ['Comedy'], type: 'Character', world: 'diner-jukebox', attributes: { power: 35, rarity: 'Uncommon', level: 1, traits: ['clueless', 'polite'] }, casting: [] },
];
export const dinerJukeboxStories17: Gem[] = [
  { id: 'jukebox-serenade-17', name: 'Jukebox Serenade', description: 'Penny and Danny bond over their love of music at the diner.', genres: ['Romance', 'Nostalgia'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'romance', 'diner'] } },
  { id: 'the-talent-show-17', name: 'The Talent Show', description: 'Penny decides to enter a local talent show with Danny\'s encouragement.', genres: ['Romance', 'Nostalgia'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['talent', 'dreams', 'support'] } },
  { id: 'a-special-request-17', name: 'A Special Request', description: 'A customer makes a request on the jukebox that brings back old memories for Big Tony.', genres: ['Nostalgia', 'Drama'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 0, traits: ['memories', 'music', 'past'] } },
  { id: 'the-new-song-17', name: 'The New Song', description: 'Danny tries out a new song he wrote at the diner, hoping for Penny\'s approval.', genres: ['Romance', 'Music'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['newmusic', 'approval', 'vulnerability'] } },
  { id: 'a-day-in-the-life-17', name: 'A Day in the Life', description: 'A typical busy day at the diner, showcasing the various characters and their interactions.', genres: ['Nostalgia', 'Slice of Life'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['dailyroutine', 'interactions', 'community'] } },
  { id: 'the-visiting-celebrity-17', name: 'The Visiting Celebrity', description: 'A minor celebrity stops by the diner, causing a stir among the locals.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['celebrity', 'excitement', 'smalltown'] } },
  { id: 'a-small-town-secret-17', name: 'A Small Town Secret', description: 'Penny overhears a hushed conversation revealing a secret about one of the diner regulars.', genres: ['Mystery', 'Nostalgia'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 0, traits: ['secret', 'gossip', 'discovery'] } },
  { id: 'the-farewell-song-17', name: 'The Farewell Song', description: 'Danny gets an opportunity to play in a bigger city, leading to a bittersweet goodbye at the diner.', genres: ['Romance', 'Drama'], type: 'Story', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['farewell', 'dreams', 'uncertainty'] } },
];
export const dinerJukeboxAdventures17: Gem[] = [
  { id: 'the-missing-jukebox-record-17', name: 'The Missing Jukebox Record', description: 'A rare and valuable record goes missing from the diner\'s jukebox.', genres: ['Mystery', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['mystery', 'search', 'valuable'] } },
  { id: 'saving-the-diner-17', name: 'Saving the Diner', description: 'The diner faces closure, and the community rallies together to save it.', genres: ['Drama', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['community', 'effort', 'saving'] } },
  { id: 'the-surprise-party-17', name: 'The Surprise Party', description: 'The diner regulars plan a surprise birthday party for Big Tony.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surprise', 'celebration', 'friendship'] } },
  { id: 'the-out-of-town-gang-17', name: 'The Out-of-Town Gang', description: 'A group of rowdy outsiders cause trouble at the diner.', genres: ['Drama', 'Action'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['trouble', 'confrontation', 'protection'] } },
  { id: 'the-lost-love-letter-17', name: 'The Lost Love Letter', description: 'Penny finds an old love letter hidden in the diner and tries to find its recipient.', genres: ['Romance', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['letter', 'search', 'past'] } },
  { id: 'the-jukebox-competition-17', name: 'The Jukebox Competition', description: 'Another diner in town challenges Big Tony\'s diner to a jukebox music competition.', genres: ['Music', 'Comedy'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'competition', 'pride'] } },
  { id: 'the-mysterious-stranger-17', name: 'The Mysterious Stranger', description: 'A quiet and mysterious stranger arrives at the diner, observing everyone.', genres: ['Mystery', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['stranger', 'mystery', 'observation'] } },
  { id: 'the-charity-event-17', name: 'The Charity Event', description: 'The diner hosts a charity event to raise money for a local cause.', genres: ['Drama', 'Nostalgia'], type: 'Adventure', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['charity', 'community', 'helping'] } },
];
export const dinerJukeboxScenes17: Gem[] = [
  { id: 'first-meeting-17', name: 'First Meeting', description: 'Penny and Danny first meet at the diner.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['meeting', 'introduction', 'sparks'] }, characterIds: ['diner-waitress-17', 'local-musician-17'] },
  { id: 'jukebox-moment-17', name: 'Jukebox Moment', description: 'Penny and Danny share a moment listening to a song on the jukebox.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'sharing', 'connection'] }, characterIds: ['diner-waitress-17', 'local-musician-17'] },
  { id: 'diner-chatter-17', name: 'Diner Chatter', description: 'A typical scene of customers chatting and enjoying their meals at the diner.', genres: ['Nostalgia', 'Slice of Life'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['conversation', 'atmosphere', 'everyday'] }, characterIds: ['diner-owner-17', 'teen-customer-1-17', 'teen-customer-2-17'] },
  { id: 'musical-interlude-17', name: 'Musical Interlude', description: 'Danny plays a song on his guitar for the diner patrons.', genres: ['Music', 'Nostalgia'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['performance', 'music', 'entertainment'] }, characterIds: ['local-musician-17', 'diner-owner-17', 'diner-waitress-17'] },
  { id: 'heartfelt-conversation-17', name: 'Heartfelt Conversation', description: 'Penny and Big Tony have a heart-to-heart conversation about their dreams.', genres: ['Nostalgia', 'Drama'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['conversation', 'dreams', 'advice'] }, characterIds: ['diner-waitress-17', 'diner-owner-17'] },
  { id: 'a-funny-incident-17', name: 'A Funny Incident', description: 'A clumsy customer spills their milkshake, leading to a humorous moment.', genres: ['Comedy', 'Nostalgia'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['comedy', 'accident', 'laughter'] }, characterIds: ['diner-waitress-17', 'clumsy-customer-17'] },
  { id: 'a-moment-of-tension-17', name: 'A Moment of Tension', description: 'Brenda Sue tries to sabotage Penny\'s chances with Danny.', genres: ['Drama', 'Romance'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['tension', 'rivalry', 'jealousy'] }, characterIds: ['diner-waitress-17', 'local-musician-17', 'rival-waitress-17'] },
  { id: 'the-goodbye-17', name: 'The Goodbye', description: 'Penny says goodbye to Danny as he leaves to pursue his musical career.', genres: ['Romance', 'Drama'], type: 'Scene', world: 'diner-jukebox', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['goodbye', 'sadness', 'hope'] }, characterIds: ['diner-waitress-17', 'local-musician-17'] },
];

// --- World 18: "Sock Hop Sweethearts" (Romance/Comedy) ---
export const sockHopCharacters18: Gem[] = [
  { id: 'shy-girl-18', name: 'Betty Lou', description: 'A shy girl hoping to find a dance partner at the sock hop.', genres: ['Romance', 'Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 50, rarity: 'Epic', level: 1, traits: ['shy', 'sweet', 'dancer'] }, casting: [{ id: 'popular-boy-18', name: 'Johnny B. Goode', role: 'Love Interest', description: 'The popular boy who Betty Lou has a crush on' }] },
  { id: 'popular-boy-18', name: 'Johnny B. Goode', description: 'The popular and charming boy who everyone wants to dance with.', genres: ['Romance', 'Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['charming', 'popular', 'gooddancer'] }, casting: [] },
  { id: 'best-friend-18', name: 'Susie Q', description: 'Betty Lou\'s outgoing and supportive best friend.', genres: ['Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 55, rarity: 'Epic', level: 1, traits: ['outgoing', 'supportive', 'matchmaker'] }, casting: [] },
  { id: 'class-clown-18', name: 'Freddy Fenderbender', description: 'The class clown who tries to liven up the sock hop.', genres: ['Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 45, rarity: 'Uncommon', level: 1, traits: ['funny', 'clumsy', 'wellmeaning'] }, casting: [] },
  { id: 'strict-teacher-18', name: 'Mrs. Crabapple', description: 'The strict teacher chaperoning the sock hop.', genres: ['Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['strict', 'observant', 'rulefollower'] }, casting: [] },
  { id: 'rival-girl-18', name: 'Brenda Badgirl', description: 'A slightly mean girl who also has her eye on Johnny B. Goode.', genres: ['Drama'], type: 'Character', world: 'sock-hop', attributes: { power: 50, rarity: 'Uncommon', level: 1, traits: ['competitive', 'jealous'] }, casting: [] },
  { id: 'school-principal-18', name: 'Mr. Principal', description: 'The school principal making a brief appearance at the sock hop.', genres: ['Comedy'], type: 'Character', world: 'sock-hop', attributes: { power: 60, rarity: 'Uncommon', level: 2, traits: ['formal', 'approving'] }, casting: [] },
  { id: 'dj-18', name: 'DJ Rockin\' Ronnie', description: 'The DJ playing the tunes at the sock hop.', genres: ['Music'], type: 'Character', world: 'sock-hop', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['energetic', 'musical'] }, casting: [] },
];
export const sockHopStories18: Gem[] = [
  { id: 'a-slow-dance-dream-18', name: 'A Slow Dance Dream', description: 'Betty Lou hopes Johnny B. Goode will ask her for a slow dance.', genres: ['Romance', 'Comedy'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['dance', 'dreams', 'romance'] } },
  { id: 'the-corsage-mix-up-18', name: 'The Corsage Mix-Up', description: 'A mix-up with the corsages leads to a funny misunderstanding.', genres: ['Comedy', 'Romance'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['mixup', 'comedy', 'flowers'] } },
  { id: 'best-friend-advice-18', name: 'Best Friend Advice', description: 'Susie Q gives Betty Lou advice on how to talk to Johnny.', genres: ['Comedy', 'Friendship'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['advice', 'friendship', 'support'] } },
  { id: 'the-dance-off-18', name: 'The Dance-Off', description: 'Freddy Fenderbender accidentally starts a funny dance-off.', genres: ['Comedy'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['danceoff', 'comedy', 'fun'] } },
  { id: 'a-moment-with-the-principal-18', name: 'A Moment with the Principal', description: 'Betty Lou has an unexpected and slightly awkward conversation with the principal.', genres: ['Comedy'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['awkward', 'conversation', 'authority'] } },
  { id: 'rivalry-on-the-dance-floor-18', name: 'Rivalry on the Dance Floor', description: 'Brenda Badgirl tries to steal Johnny away from Betty Lou.', genres: ['Drama', 'Romance'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['rivalry', 'jealousy', 'dance'] } },
  { id: 'the-last-song-18', name: 'The Last Song', description: 'The last song of the night creates a romantic atmosphere.', genres: ['Romance', 'Nostalgia'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['lastdance', 'romance', 'endofnight'] } },
  { id: 'a-surprise-invitation-18', name: 'A Surprise Invitation', description: 'Betty Lou receives a surprise invitation after the sock hop.', genres: ['Romance', 'Comedy'], type: 'Story', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['surprise', 'invitation', 'hope'] } },
];
export const sockHopAdventures18: Gem[] = [
  { id: 'finding-the-perfect-outfit-18', name: 'Finding the Perfect Outfit', description: 'Betty Lou and Susie Q go on a shopping trip to find the perfect dress for the sock hop.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['shopping', 'fashion', 'friendship'] } },
  { id: 'sneaking-in-late-18', name: 'Sneaking In Late', description: 'Freddy Fenderbender tries to sneak into the sock hop late without Mrs. Crabapple noticing.', genres: ['Comedy'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['sneaking', 'comedy', 'rules'] } },
  { id: 'the-lost-dance-shoes-18', name: 'The Lost Dance Shoes', description: 'Betty Lou can\'t find her favorite dance shoes before the sock hop.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['search', 'shoes', 'panic'] } },
  { id: 'chaperone-duty-mishaps-18', name: 'Chaperone Duty Mishaps', description: 'Mrs. Crabapple has a series of funny mishaps while trying to chaperone the sock hop.', genres: ['Comedy'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['chaperone', 'comedy', 'accidents'] } },
  { id: 'the-mystery-guest-18', name: 'The Mystery Guest', description: 'Rumors spread about a surprise mystery guest attending the sock hop.', genres: ['Mystery', 'Nostalgia'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['mystery', 'rumors', 'excitement'] } },
  { id: 'the-jukebox-jam-18', name: 'The Jukebox Jam', description: 'Johnny B. Goode and his friends have an impromptu jam session by the jukebox.', genres: ['Music', 'Nostalgia'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'jam', 'fun'] } },
  { id: 'avoiding-the-rival-18', name: 'Avoiding the Rival', description: 'Betty Lou tries to avoid Brenda Badgirl throughout the night.', genres: ['Comedy', 'Drama'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['avoidance', 'rivalry', 'tension'] } },
  { id: 'the-after-party-plan-18', name: 'The After-Party Plan', description: 'The friends secretly plan an after-party after the sock hop.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['afterparty', 'secret', 'fun'] } },
];
export const sockHopScenes18: Gem[] = [
  { id: 'arrival-at-the-hop-18', name: 'Arrival at the Hop', description: 'Betty Lou arrives at the sock hop, feeling nervous and excited.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['arrival', 'nervousness', 'excitement'] }, characterIds: ['shy-girl-18', 'best-friend-18'] },
  { id: 'first-glimpse-18', name: 'First Glimpse', description: 'Betty Lou sees Johnny B. Goode across the crowded gymnasium.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['sight', 'crush', 'hope'] }, characterIds: ['shy-girl-18', 'popular-boy-18'] },
  { id: 'awkward-introduction-18', name: 'Awkward Introduction', description: 'Susie Q tries to introduce Betty Lou to Johnny, leading to an awkward moment.', genres: ['Comedy', 'Romance'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['introduction', 'awkward', 'humor'] }, characterIds: ['shy-girl-18', 'popular-boy-18', 'best-friend-18'] },
  { id: 'the-first-dance-18', name: 'The First Dance', description: 'Betty Lou finally gets asked to dance by someone (maybe Johnny!).', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['dance', 'joy', 'connection'] }, characterIds: ['shy-girl-18', 'popular-boy-18'] },
  { id: 'a-funny-interruption-18', name: 'A Funny Interruption', description: 'Freddy Fenderbender accidentally interrupts a romantic moment with his clumsiness.', genres: ['Comedy'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['interruption', 'comedy', 'mishap'] }, characterIds: ['shy-girl-18', 'popular-boy-18', 'class-clown-18'] },
  { id: 'a-tense-encounter-18', name: 'A Tense Encounter', description: 'Brenda Badgirl tries to cut in on Betty Lou and Johnny\'s dance.', genres: ['Drama', 'Romance'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['tension', 'rivalry', 'dance'] }, characterIds: ['shy-girl-18', 'popular-boy-18', 'rival-girl-18'] },
  { id: 'the-slow-dance-18', name: 'The Slow Dance', description: 'The slow dance creates a romantic and intimate atmosphere.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['slowdance', 'romance', 'intimacy'] }, characterIds: ['shy-girl-18', 'popular-boy-18'] },
  { id: 'the-end-of-the-night-18', name: 'The End of the Night', description: 'The sock hop comes to an end, leaving Betty Lou with hopeful memories.', genres: ['Romance', 'Nostalgia'], type: 'Scene', world: 'sock-hop', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['endofnight', 'memories', 'hope'] }, characterIds: ['shy-girl-18', 'popular-boy-18', 'best-friend-18'] },
];

// --- World 19: "Drive-In Diner Delights" (Comedy/Nostalgia) ---
export const driveInDinerCharacters19: Gem[] = [
  { id: 'carhop-19', name: 'Candy Carhop', description: 'A bubbly and energetic carhop at a 1950s drive-in diner.', genres: ['Comedy', 'Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 58, rarity: 'Epic', level: 1, traits: ['bubbly', 'energetic', 'friendly'] }, casting: [{ id: 'goofy-cook-19', name: 'Chef Chuckles', role: 'Colleague', description: 'The goofy but lovable cook at the diner' }] },
  { id: 'goofy-cook-19', name: 'Chef Chuckles', description: 'The clumsy but good-hearted cook who often makes funny mistakes.', genres: ['Comedy', 'Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['goofy', 'clumsy', 'kind'] }, casting: [] },
  { id: 'teen-customer-1-19', name: 'Hot Rod Harry', description: 'A teenage customer who loves showing off his car.', genres: ['Comedy', 'Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 45, rarity: 'Uncommon', level: 1, traits: ['showoff', 'enthusiastic', 'carlover'] }, casting: [] },
  { id: 'teen-customer-2-19', name: 'Soda Pop Sally', description: 'A teenage girl who loves gossiping with her friends at the diner.', genres: ['Comedy', 'Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 40, rarity: 'Uncommon', level: 1, traits: ['gossipy', 'friendly'] }, casting: [] },
  { id: 'impatient-customer-19', name: 'Mr. Grumbleson', description: 'A perpetually impatient customer who always complains.', genres: ['Comedy'], type: 'Character', world: 'drive-in-diner', attributes: { power: 35, rarity: 'Uncommon', level: 1, traits: ['impatient', 'grumpy'] }, casting: [] },
  { id: 'lovestruck-teen-19', name: 'Romeo Roadster', description: 'A teenage boy trying to impress his date at the diner.', genres: ['Comedy', 'Romance'], type: 'Character', world: 'drive-in-diner', attributes: { power: 50, rarity: 'Uncommon', level: 1, traits: ['lovestruck', 'awkward'] }, casting: [{ id: 'shy-date-19', name: 'Daisy Diner', role: 'Date', description: 'Romeo\'s shy date' }] },
  { id: 'diner-owner-19', name: 'Mama Mia', description: 'The warm and motherly owner of the drive-in diner.', genres: ['Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 72, rarity: 'Rare', level: 2, traits: ['warm', 'caring', 'bossy'] }, casting: [] },
  { id: 'visiting-band-19', name: 'The Rockabillies', description: 'A local rock and roll band playing a gig at the drive-in.', genres: ['Music', 'Nostalgia'], type: 'Character', world: 'drive-in-diner', attributes: { power: 65, rarity: 'Uncommon', level: 1, traits: ['musical', 'energetic'] }, casting: [] },
];
export const driveInDinerStories19: Gem[] = [
  { id: 'the-mystery-milkshake-19', name: 'The Mystery Milkshake', description: 'Chef Chuckles accidentally creates a strange new milkshake flavor.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['mystery', 'food', 'comedy'] } },
  { id: 'carhop-comedies-19', name: 'Carhop Comedies', description: 'Candy Carhop has a series of funny encounters with customers.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['comedy', 'interactions', 'carhop'] } },
  { id: 'the-talent-night-19', name: 'The Talent Night', description: 'The drive-in diner hosts a talent night with hilarious results.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['talent', 'comedy', 'performance'] } },
  { id: 'a-date-gone-wrong-19', name: 'A Date Gone Wrong', description: 'Romeo Roadster\'s attempts to impress Daisy go hilariously wrong.', genres: ['Comedy', 'Romance'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['date', 'comedy', 'awkward'] } },
  { id: 'the-classic-car-show-19', name: 'The Classic Car Show', description: 'The drive-in hosts a classic car show, attracting colorful characters.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['cars', 'show', 'characters'] } },
  { id: 'chef-chuckles-creation-19', name: 'Chef Chuckles\' Creation', description: 'Chef Chuckles tries to invent a new signature dish with disastrous but funny outcomes.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['food', 'invention', 'comedy'] } },
  { id: 'the-visiting-band-mishaps-19', name: 'The Visiting Band Mishaps', description: 'The Rockabillies\' performance is plagued by funny technical difficulties.', genres: ['Comedy', 'Music'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['music', 'comedy', 'performance'] } },
  { id: 'mama-mias-wisdom-19', name: 'Mama Mia\'s Wisdom', description: 'Mama Mia offers funny but insightful advice to the diner patrons.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['advice', 'humor', 'wisdom'] } },
];
export const driveInDinerAdventures19: Gem[] = [
  { id: 'the-great-burger-cookoff-19', name: 'The Great Burger Cookoff', description: 'Chef Chuckles enters a burger cookoff to prove his culinary skills (or lack thereof).', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['cooking', 'competition', 'comedy'] } },
  { id: 'saving-the-drive-in-19', name: 'Saving the Drive-In', description: 'The community tries to save the drive-in diner from being torn down.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['saving', 'community', 'effort'] } },
  { id: 'the-mystery-diner-critic-19', name: 'The Mystery Diner Critic', description: 'A mysterious food critic visits the drive-in, and everyone tries to impress them.', genres: ['Comedy', 'Mystery'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['critic', 'mystery', 'pressure'] } },
  { id: 'organizing-the-car-show-19', name: 'Organizing the Car Show', description: 'Candy Carhop and Hot Rod Harry team up to organize a successful car show.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['cars', 'organization', 'teamwork'] } },
  { id: 'dealing-with-a-storm-19', name: 'Dealing with a Storm', description: 'A sudden storm hits, causing chaos at the drive-in diner.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['storm', 'chaos', 'funny'] } },
  { id: 'finding-a-lost-item-19', name: 'Finding a Lost Item', description: 'An important item is lost at the drive-in, and everyone helps to find it.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['search', 'lostitem', 'community'] } },
  { id: 'the-visiting-celebrity-again-19', name: 'The Visiting Celebrity Again', description: 'A different, more famous celebrity visits the drive-in, causing even more excitement.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['celebrity', 'excitement', 'mayhem'] } },
  { id: 'planning-a-surprise-for-mama-mia-19', name: 'Planning a Surprise for Mama Mia', description: 'The staff and regulars plan a surprise party for Mama Mia.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surprise', 'party', 'friendship'] } },
];
export const driveInDinerScenes19: Gem[] = [
  { id: 'carhop-greeting-19', name: 'Carhop Greeting', description: 'Candy Carhop greets a new car of customers with enthusiasm.', genres: ['Comedy', 'Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['greeting', 'enthusiasm', 'service'] }, characterIds: ['carhop-19', 'teen-customer-1-19'] },
  { id: 'chef-chuckles-mishap-19', name: 'Chef Chuckles\' Mishap', description: 'Chef Chuckles accidentally drops a tray of burgers.', genres: ['Comedy', 'Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['accident', 'comedy', 'food'] }, characterIds: ['goofy-cook-19', 'carhop-19'] },
  { id: 'teen-gossip-19', name: 'Teen Gossip', description: 'Soda Pop Sally and her friends gossip about the latest news.', genres: ['Comedy', 'Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['gossip', 'friends', 'news'] }, characterIds: ['teen-customer-2-19'] },
  { id: 'impatient-customer-rant-19', name: 'Impatient Customer Rant', description: 'Mr. Grumbleson complains loudly about the slow service.', genres: ['Comedy'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['complaint', 'humor', 'annoyance'] }, characterIds: ['impatient-customer-19', 'carhop-19'] },
  { id: 'lovestruck-moment-19', name: 'Lovestruck Moment', description: 'Romeo Roadster tries to impress Daisy with a cheesy pickup line.', genres: ['Comedy', 'Romance'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['romance', 'awkward', 'pickup'] }, characterIds: ['lovestruck-teen-19', 'shy-date-19'] },
  { id: 'mama-mias-advice-19', name: 'Mama Mia\'s Advice', description: 'Mama Mia gives Candy some motherly advice about life and love.', genres: ['Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['advice', 'wisdom', 'caring'] }, characterIds: ['diner-owner-19', 'carhop-19'] },
  { id: 'band-performance-19', name: 'Band Performance', description: 'The Rockabillies play an energetic set at the drive-in.', genres: ['Music', 'Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'performance', 'energy'] }, characterIds: ['visiting-band-19'] },
  { id: 'closing-time-19', name: 'Closing Time', description: 'The drive-in diner starts to empty as the night comes to an end.', genres: ['Nostalgia'], type: 'Scene', world: 'drive-in-diner', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['endofnight', 'farewell', 'quiet'] }, characterIds: ['carhop-19', 'diner-owner-19'] },
];

// --- World 20: "Teenage Detective Agency" (Mystery/Comedy) ---
export const teenDetectiveCharacters20: Gem[] = [
  { id: 'leader-detective-20', name: 'Scooter Sleuth', description: 'The smart and determined leader of a teenage detective agency in the 1950s.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['smart', 'determined', 'leader'] }, casting: [{ id: 'sidekick-detective-20', name: 'Penny Pincher', role: 'Sidekick', description: 'Scooter\'s loyal and resourceful best friend' }] },
  { id: 'sidekick-detective-20', name: 'Penny Pincher', description: 'Scooter\'s loyal and gadget-loving best friend and fellow detective.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['loyal', 'resourceful', 'gadgetlover'] }, casting: [] },
  { id: 'the-client-20', name: 'Mrs. Periwinkle', description: 'A quirky local resident who often brings strange cases to the agency.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 50, rarity: 'Uncommon', level: 1, traits: ['quirky', 'forgetful'] }, casting: [] },
  { id: 'the-rival-20', name: 'Reginald "The Know-It-All"', description: 'A pompous rival teenage detective who tries to solve cases first.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['pompous', 'competitive'] }, casting: [] },
  { id: 'the-police-chief-20', name: 'Chief Hardington', description: 'The local police chief who is sometimes exasperated by the teens\' involvement.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['exasperated', 'secretlyimpressed'] }, casting: [] },
  { id: 'the-suspect-1-20', name: 'Mr. Silversmith', description: 'A nervous jeweler suspected of a minor crime.', genres: ['Mystery'], type: 'Character', world: 'teen-detective', attributes: { power: 48, rarity: 'Uncommon', level: 1, traits: ['nervous', 'shifty'] }, casting: [] },
  { id: 'the-suspect-2-20', name: 'Ms. Van Der Snoot', description: 'A wealthy and eccentric woman who might be involved in a mystery.', genres: ['Mystery', 'Comedy'], type: 'Character', world: 'teen-detective', attributes: { power: 52, rarity: 'Uncommon', level: 1, traits: ['eccentric', 'demanding'] }, casting: [] },
  { id: 'the-witness-20', name: 'Old Man Fitzwilliam', description: 'An elderly resident who might have seen something important.', genres: ['Mystery'], type: 'Character', world: 'teen-detective', attributes: { power: 40, rarity: 'Uncommon', level: 1, traits: ['forgetful', 'observant'] }, casting: [] },
];
export const teenDetectiveStories20: Gem[] = [
  { id: 'the-case-of-the-missing-cat-20', name: 'The Case of the Missing Cat', description: 'The agency\'s first case involves finding Mrs. Periwinkle\'s beloved cat, Mr. Fluffernutter.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['mystery', 'animals', 'comedy'] } },
  { id: 'the-mystery-of-the-stolen-trophy-20', name: 'The Mystery of the Stolen Trophy', description: 'The school\'s prized trophy goes missing before the big game.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['mystery', 'school', 'sports'] } },
  { id: 'the-riddle-of-the-rolling-pin-20', name: 'The Riddle of the Rolling Pin', description: 'A seemingly simple case turns into a bizarre mystery involving a rolling pin.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['mystery', 'riddle', 'comedy'] } },
  { id: 'outsmarting-the-rival-20', name: 'Outsmarting the Rival', description: 'Scooter and Penny try to solve a case before Reginald "The Know-It-All" does.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['rivalry', 'outsmarting', 'competition'] } },
  { id: 'the-clue-in-the-comic-book-20', name: 'The Clue in the Comic Book', description: 'A vital clue to a mystery is found hidden inside a comic book.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['clue', 'comicbook', 'discovery'] } },
  { id: 'a-case-of-mistaken-identity-20', name: 'A Case of Mistaken Identity', description: 'The detectives investigate a case where the wrong person might have been accused.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['mistakenidentity', 'investigation', 'justice'] } },
  { id: 'the-secret-of-the-old-mansion-20', name: 'The Secret of the Old Mansion', description: 'The agency takes on a spooky case involving an old abandoned mansion.', genres: ['Mystery', 'Comedy', 'Spooky'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Rare', level: 0, traits: ['mansion', 'secret', 'spooky'] } },
  { id: 'solving-the-police-chiefs-problem-20', name: 'Solving the Police Chief\'s Problem', description: 'Scooter and Penny inadvertently help Chief Hardington with a tricky case.', genres: ['Mystery', 'Comedy'], type: 'Story', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['police', 'helping', 'solving'] } },
];
export const teenDetectiveAdventures20: Gem[] = [
  { id: 'gathering-clues-at-the-scene-20', name: 'Gathering Clues at the Scene', description: 'Scooter and Penny investigate the scene of a minor crime, looking for clues.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['clues', 'investigation', 'observation'] } },
  { id: 'interviewing-the-witnesses-20', name: 'Interviewing the Witnesses', description: 'The detectives interview various quirky witnesses to get information.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['interview', 'witnesses', 'comedy'] } },
  { id: 'using-gadgets-to-solve-the-case-20', name: 'Using Gadgets to Solve the Case', description: 'Penny\'s homemade gadgets come in handy during the investigation.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['gadgets', 'solving', 'resourceful'] } },
  { id: 'following-the-suspect-20', name: 'Following the Suspect', description: 'Scooter and Penny discreetly follow a potential suspect.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['following', 'suspense', 'comedy'] } },
  { id: 'deciphering-a-secret-message-20', name: 'Deciphering a Secret Message', description: 'The detectives find a secret message that holds a key to the mystery.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['secretmessage', 'deciphering', 'puzzle'] } },
  { id: 'a-close-call-with-the-rival-20', name: 'A Close Call with the Rival', description: 'Scooter and Penny almost get caught by Reginald while investigating.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'closecall', 'humor'] } },
  { id: 'uncovering-the-hiding-place-20', name: 'Uncovering the Hiding Place', description: 'The detectives discover the hiding place of the missing item or person.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['hidingplace', 'discovery', 'breakthrough'] } },
  { id: 'the-final-confrontation-20', name: 'The Final Confrontation', description: 'Scooter and Penny confront the culprit and reveal their findings.', genres: ['Mystery', 'Comedy'], type: 'Adventure', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['confrontation', 'reveal', 'solution'] } },
];
export const teenDetectiveScenes20: Gem[] = [
  { id: 'agency-headquarters-20', name: 'Agency Headquarters', description: 'Scooter and Penny discuss their latest case in their secret headquarters (maybe a treehouse or garage).', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['planning', 'discussion', 'secretbase'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20'] },
  { id: 'meeting-the-client-20', name: 'Meeting the Client', description: 'Scooter and Penny meet with Mrs. Periwinkle to hear about her missing cat.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['meeting', 'client', 'quirky'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20', 'the-client-20'] },
  { id: 'investigating-the-school-20', name: 'Investigating the School', description: 'The detectives search the school hallways for clues about the stolen trophy.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['investigation', 'school', 'clues'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20'] },
  { id: 'a-run-in-with-the-rival-20', name: 'A Run-In with the Rival', description: 'Scooter and Penny have a slightly competitive encounter with Reginald.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'encounter', 'banter'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20', 'the-rival-20'] },
  { id: 'interviewing-the-suspect-20', name: 'Interviewing the Suspect', description: 'The detectives question Mr. Silversmith about the missing jewels (or whatever).', genres: ['Mystery'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['interview', 'suspect', 'nervousness'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20', 'the-suspect-1-20'] },
  { id: 'finding-a-hidden-clue-20', name: 'Finding a Hidden Clue', description: 'Penny discovers a small but important clue hidden in an unexpected place.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['clue', 'discovery', 'surprise'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20'] },
  { id: 'talking-to-the-witness-20', name: 'Talking to the Witness', description: 'Scooter tries to get information from the slightly confused Old Man Fitzwilliam.', genres: ['Mystery'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['witness', 'information', 'confusion'] }, characterIds: ['leader-detective-20', 'the-witness-20'] },
  { id: 'the-reveal-at-the-Police-Station-20', name: 'The Reveal at the Police Station', description: 'Scooter and Penny present their findings to Chief Hardington.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['reveal', 'solution', 'authority'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20', 'the-police-chief-20', 'the-culprit-20'] },
];

// --- World 21: "Greaser Rock and Roll Nights" (Music/Drama) ---
export const greaserRockCharacters21: Gem[] = [
  { id: 'rebellious-singer-21', name: 'Riff Rocket', description: 'A talented but rebellious greaser who dreams of rock and roll stardom.', genres: ['Music', 'Drama'], type: 'Character', world: 'greaser-rock', attributes: { power: 70, rarity: 'Epic', level: 1, traits: ['rebellious', 'talented', 'charismatic'] }, casting: [{ id: 'loyal-girlfriend-21', name: 'Cherry Bomb', role: 'Love Interest', description: 'Riff\'s loyal and supportive girlfriend' }] },
  { id: 'loyal-girlfriend-21', name: 'Cherry Bomb', description: 'Riff\'s tough and loyal girlfriend who supports his musical ambitions.', genres: ['Drama', 'Romance'], type: 'Character', world: 'greaser-rock', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['loyal', 'tough', 'supportive'] }, casting: [] },
  { id: 'rival-musician-21', name: 'Danny Dynamite', description: 'A rival greaser musician who challenges Riff\'s band.', genres: ['Music', 'Drama'], type: 'Character', world: 'greaser-rock', attributes: { power: 68, rarity: 'Uncommon', level: 1, traits: ['competitive', 'talented'] }, casting: [] },
  { id: 'wise-mentor-21', name: 'Old Man Grooves', description: 'An older, experienced musician who gives Riff advice.', genres: ['Music', 'Drama'], type: 'Character', world: 'greaser-rock', attributes: { power: 75, rarity: 'Rare', level: 2, traits: ['wise', 'experienced', 'helpful'] }, casting: [] },
  { id: 'bandmate-1-21', name: 'Lefty Leadfoot', description: 'Riff\'s cool and collected lead guitarist.', genres: ['Music'], type: 'Character', world: 'greaser-rock', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['cool', 'talented'] }, casting: [] },
  { id: 'bandmate-2-21', name: 'Bashin\' Barry', description: 'Riff\'s energetic and wild drummer.', genres: ['Music'], type: 'Character', world: 'greaser-rock', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['energetic', 'wild'] }, casting: [] },
  { id: 'strict-parent-21', name: 'Mr. Rocket', description: 'Riff\'s strict father who disapproves of his music.', genres: ['Drama'], type: 'Character', world: 'greaser-rock', attributes: { power: 72, rarity: 'Uncommon', level: 2, traits: ['strict', 'disapproving'] }, casting: [] },
  { id: 'supportive-friend-21', name: 'Sally Sue', description: 'Cherry\'s supportive best friend who believes in Riff\'s dream.', genres: ['Drama'], type: 'Character', world: 'greaser-rock', attributes: { power: 58, rarity: 'Uncommon', level: 1, traits: ['supportive', 'optimistic'] }, casting: [] },
];
export const greaserRockStories21: Gem[] = [
  { id: 'dreams-of-stardom-21', name: 'Dreams of Stardom', description: 'Riff and his band try to make it big in the local rock and roll scene.', genres: ['Music', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'dreams', 'ambition'] } },
  { id: 'the-battle-of-the-bands-21', name: 'The Battle of the Bands', description: 'Riff\'s band faces off against Danny Dynamite\'s group in a crucial competition.', genres: ['Music', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'competition', 'rivalry'] } },
  { id: 'parental-disapproval-21', name: 'Parental Disapproval', description: 'Riff struggles with his father\'s disapproval of his rock and roll aspirations.', genres: ['Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['family', 'disapproval', 'dreams'] } },
  { id: 'finding-their-sound-21', name: 'Finding Their Sound', description: 'The band works to develop their unique rock and roll sound.', genres: ['Music', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['music', 'creation', 'identity'] } },
  { id: 'a-helping-hand-21', name: 'A Helping Hand', description: 'Old Man Grooves offers the band valuable advice and guidance.', genres: ['Music', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['mentorship', 'advice', 'support'] } },
  { id: 'love-and-rock-and-roll-21', name: 'Love and Rock and Roll', description: 'Riff and Cherry\'s relationship faces challenges due to his musical pursuits.', genres: ['Romance', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['romance', 'music', 'challenges'] } },
  { id: 'a-shot-at-the-big-time-21', name: 'A Shot at the Big Time', description: 'The band gets an unexpected opportunity that could change their lives.', genres: ['Music', 'Drama'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Rare', level: 0, traits: ['opportunity', 'fame', 'pressure'] } },
  { id: 'staying-true-21', name: 'Staying True', description: 'The band faces a moral dilemma that tests their integrity.', genres: ['Drama', 'Music'], type: 'Story', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['integrity', 'morality', 'music'] } },
];
export const greaserRockAdventures21: Gem[] = [
  { id: 'booking-the-first-gig-21', name: 'Booking the First Gig', description: 'The band struggles to find their first paying gig.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'struggle', 'perseverance'] } },
  { id: 'replacing-a-bandmate-21', name: 'Replacing a Bandmate', description: 'One of the band members suddenly quits, and they need to find a replacement quickly.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'band', 'replacement'] } },
  { id: 'dealing-with-a-tough-crowd-21', name: 'Dealing with a Tough Crowd', description: 'The band plays a show for a hostile audience.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'performance', 'challenge'] } },
  { id: 'getting-their-instruments-back-21', name: 'Getting Their Instruments Back', description: 'The band\'s instruments are stolen, and they have to track them down.', genres: ['Music', 'Mystery'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'theft', 'search'] } },
  { id: 'writing-a-hit-song-21', name: 'Writing a Hit Song', description: 'The band faces pressure to write a song that will make them famous.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'songwriting', 'pressure'] } },
  { id: 'navigating-local-rivalries-21', name: 'Navigating Local Rivalries', description: 'The band gets caught in the middle of a local greaser gang rivalry.', genres: ['Drama', 'Action'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'gangs', 'danger'] } },
  { id: 'meeting-a-record-producer-21', name: 'Meeting a Record Producer', description: 'The band has a crucial meeting with a record producer that could be their big break.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['music', 'opportunity', 'pressure'] } },
  { id: 'staying-together-21', name: 'Staying Together', description: 'Internal conflicts and external pressures threaten to break up the band.', genres: ['Music', 'Drama'], type: 'Adventure', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['band', 'conflict', 'unity'] } },
];
export const greaserRockScenes21: Gem[] = [
  { id: 'garage-practice-21', name: 'Garage Practice', description: 'The band practices their music in Riff\'s garage.', genres: ['Music', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'practice', 'band'] }, characterIds: ['rebellious-singer-21', 'bandmate-1-21', 'bandmate-2-21'] },
  { id: 'local-hangout-21', name: 'Local Hangout', description: 'Riff and Cherry hang out at the local diner with their friends.', genres: ['Drama', 'Romance'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['hangout', 'friends', 'romance'] }, characterIds: ['rebellious-singer-21', 'loyal-girlfriend-21', 'supportive-friend-21'] },
  { id: 'confrontation-with-father-21', name: 'Confrontation with Father', description: 'Riff has a heated argument with his father about his music.', genres: ['Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['family', 'conflict', 'disagreement'] }, characterIds: ['rebellious-singer-21', 'strict-parent-21'] },
  { id: 'meeting-the-mentor-21', name: 'Meeting the Mentor', description: 'Riff seeks advice from Old Man Grooves at a local record store.', genres: ['Music', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['mentorship', 'advice', 'music'] }, characterIds: ['rebellious-singer-21', 'wise-mentor-21'] },
  { id: 'performance-at-the-local-club-21', name: 'Performance at the Local Club', description: 'The band plays a high-energy set at a local club.', genres: ['Music', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'performance', 'energy'] }, characterIds: ['rebellious-singer-21', 'bandmate-1-21', 'bandmate-2-21', 'loyal-girlfriend-21', 'rival-musician-21'] },
  { id: 'a-quiet-moment-21', name: 'A Quiet Moment', description: 'Riff and Cherry share a quiet and intimate moment together.', genres: ['Romance', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['romance', 'intimacy', 'quiet'] }, characterIds: ['rebellious-singer-21', 'loyal-girlfriend-21'] },
  { id: 'the-showdown-with-the-rival-21', name: 'The Showdown with the Rival', description: 'Riff and Danny Dynamite have a tense confrontation before the battle of the bands.', genres: ['Music', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'tension', 'music'] }, characterIds: ['rebellious-singer-21', 'rival-musician-21'] },
  { id: 'celebration-or-disappointment-21', name: 'Celebration or Disappointment', description: 'The band reacts to the results of the battle of the bands.', genres: ['Music', 'Drama'], type: 'Scene', world: 'greaser-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['celebration', 'disappointment', 'outcome'] }, characterIds: ['rebellious-singer-21', 'bandmate-1-21', 'bandmate-2-21', 'loyal-girlfriend-21'] },
];

// --- World 22: "Beat Generation Blues" (Drama/Literary) ---
export const beatBluesCharacters22: Gem[] = [
  { id: 'struggling-writer-22', name: 'Jack Kerouac Jr.', description: 'A young, aspiring writer trying to find his voice in the Beat Generation of the 1950s.', genres: ['Drama', 'Literary'], type: 'Character', world: 'beat-blues', attributes: { power: 58, rarity: 'Epic', level: 1, traits: ['introspective', 'restless', 'observant'] }, casting: [{ id: 'muse-22', name: 'Stella Beatrix', role: 'Inspiration', description: 'A mysterious and captivating woman who inspires Jack\'s writing' }] },
  { id: 'muse-22', name: 'Stella Beatrix', description: 'A free-spirited and enigmatic woman who becomes a muse for Jack.', genres: ['Drama', 'Literary'], type: 'Character', world: 'beat-blues', attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['enigmatic', 'free-spirited', 'inspiring'] }, casting: [] },
  { id: 'cynical-poet-22', name: 'Allen Ginsberg-esque', description: 'A cynical but brilliant poet who hangs out at the same cafes as Jack.', genres: ['Drama', 'Literary'], type: 'Character', world: 'beat-blues', attributes: { power: 65, rarity: 'Rare', level: 2, traits: ['cynical', 'brilliant', 'outspoken'] }, casting: [] },
  { id: 'jazz-musician-22', name: 'Miles Davis Type', description: 'A cool and talented jazz musician who provides the soundtrack to the Beat scene.', genres: ['Drama', 'Music'], type: 'Character', world: 'beat-blues', attributes: { power: 68, rarity: 'Uncommon', level: 1, traits: ['cool', 'talented', 'melancholic'] }, casting: [] },
  { id: 'disapproving-parent-22', name: 'Mr. Kerouac Sr.', description: 'Jack\'s traditional and disapproving father.', genres: ['Drama'], type: 'Character', world: 'beat-blues', attributes: { power: 70, rarity: 'Uncommon', level: 2, traits: ['traditional', 'disapproving'] }, casting: [] },
  { id: 'fellow-writer-22', name: 'William S. Burroughs Inspired', description: 'Another writer exploring unconventional themes and styles.', genres: ['Drama', 'Literary'], type: 'Character', world: 'beat-blues', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['unconventional', 'experimental'] }, casting: [] },
  { id: 'cafe-owner-22', name: 'Madame Simone', description: 'The owner of the smoky cafe where the Beat Generation gathers.', genres: ['Drama'], type: 'Character', world: 'beat-blues', attributes: { power: 65, rarity: 'Uncommon', level: 2, traits: ['observant', 'tolerant'] }, casting: [] },
  { id: 'young-student-22', name: 'Evelyn Newcomer', description: 'A young student intrigued by the Beat Generation and its ideas.', genres: ['Drama'], type: 'Character', world: 'beat-blues', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['curious', 'impressionable'] }, casting: [] },
];
export const beatBluesStories22: Gem[] = [
  { id: 'on-the-road-again-22', name: 'On the Road Again', description: 'Jack embarks on a restless journey across America, seeking inspiration for his writing.', genres: ['Drama', 'Literary'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['travel', 'inspiration', 'restlessness'] } },
  { id: 'poetry-in-the-cafe-22', name: 'Poetry in the Cafe', description: 'The Beat poets gather at their favorite cafe to share their work and ideas.', genres: ['Drama', 'Literary'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['poetry', 'intellectual', 'cafe'] } },
  { id: 'finding-a-voice-22', name: 'Finding a Voice', description: 'Jack struggles to find his unique writing style and express his inner thoughts.', genres: ['Drama', 'Literary'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['writing', 'identity', 'struggle'] } },
  { id: 'the-influence--22', name: 'The Influence of Stella', description: 'Stella\'s presence and conversations deeply impact Jack\'s writing.', genres: ['Drama', 'Literary', 'Romance'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['muse', 'inspiration', 'relationship'] } },
  { id: 'clash-with-tradition-22', name: 'Clash with Tradition', description: 'Jack faces criticism and disapproval from his father for his unconventional lifestyle and writing.', genres: ['Drama'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['family', 'tradition', 'rebellion'] } },
  { id: 'exploring-new-horizons-22', name: 'Exploring New Horizons', description: 'The Beat writers experiment with new forms of expression and push societal boundaries.', genres: ['Drama', 'Literary'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['experimentation', 'boundaries', 'art'] } },
  { id: 'the-jazz-sessions-22', name: 'The Jazz Sessions', description: 'The energy and improvisation of jazz music influence the Beat writers\' style.', genres: ['Drama', 'Literary', 'Music'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['jazz', 'influence', 'rhythm'] } },
  { id: 'a-new-perspective-22', name: 'A New Perspective', description: 'Evelyn, the young student, gains a new understanding of the world through her interactions with the Beat Generation.', genres: ['Drama'], type: 'Story', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['perspective', 'learning', 'change'] } },
];
export const beatBluesAdventures22: Gem[] = [
  { id: 'searching-for-inspiration-22', name: 'Searching for Inspiration', description: 'Jack goes on a spontaneous road trip seeking new experiences to fuel his writing.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['travel', 'inspiration', 'spontaneity'] } },
  { id: 'organizing-a-poetry-reading-22', name: 'Organizing a Poetry Reading', description: 'The Beat poets try to organize an underground poetry reading.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['poetry', 'organization', 'underground'] } },
  { id: 'getting-published-22', name: 'Getting Published', description: 'Jack faces the challenges of trying to get his unconventional work published.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['publishing', 'rejection', 'perseverance'] } },
  { id: 'a-night-in-the-city-22', name: 'A Night in the City', description: 'Jack and Stella explore the vibrant and sometimes seedy nightlife of the city.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['citylife', 'exploration', 'night'] } },
  { id: 'debating-with-traditionalists-22', name: 'Debating with Traditionalists', description: 'The Beat poets engage in heated debates with more traditional literary figures.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['debate', 'tradition', 'ideas'] } },
  { id: 'finding-a-new-cafe-22', name: 'Finding a New Cafe', description: 'Their favorite cafe closes down, and the Beats have to find a new gathering spot.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['cafe', 'community', 'change'] } },
  { id: 'collaborating-on-a-project-22', name: 'Collaborating on a Project', description: 'Jack and another Beat writer try to collaborate on a writing project.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['collaboration', 'writing', 'creativity'] } },
  { id: 'inspiring-a-newcomer-22', name: 'Inspiring a Newcomer', description: 'Jack\'s writing and ideas inspire Evelyn, the young student, to explore her own creativity.', genres: ['Drama', 'Literary'], type: 'Adventure', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['inspiration', 'mentorship', 'growth'] } },
];
export const beatBluesScenes22: Gem[] = [
  { id: 'smoky-cafe-scene-22', name: 'Smoky Cafe Scene', description: 'Jack sits in a smoky cafe, writing in his notebook and observing the other patrons.', genres: ['Drama', 'Literary'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['cafe', 'writing', 'atmosphere'] }, characterIds: ['struggling-writer-22', 'cynical-poet-22', 'jazz-musician-22', 'cafe-owner-22'] },
  { id: 'late-night-conversation-22', name: 'Late Night Conversation', description: 'Jack and Stella have a deep and meaningful conversation about life and art.', genres: ['Drama', 'Literary', 'Romance'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['conversation', 'art', 'philosophy'] }, characterIds: ['struggling-writer-22', 'muse-22'] },
  { id: 'poetry-reading-scene-22', name: 'Poetry Reading Scene', description: 'The cynical poet performs his latest work to a small but appreciative audience.', genres: ['Drama', 'Literary'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['poetry', 'performance', 'audience'] }, characterIds: ['cynical-poet-22', 'struggling-writer-22', 'fellow-writer-22'] },
  { id: 'tense-family-dinner-22', name: 'Tense Family Dinner', description: 'Jack has an uncomfortable dinner with his disapproving father.', genres: ['Drama'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['family', 'tension', 'disagreement'] }, characterIds: ['struggling-writer-22', 'disapproving-parent-22'] },
  { id: 'impromptu-jazz-session-22', name: 'Impromptu Jazz Session', description: 'The jazz musician plays an impromptu set at the cafe, inspiring the writers.', genres: ['Drama', 'Literary', 'Music'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['jazz', 'music', 'inspiration'] }, characterIds: ['jazz-musician-22', 'struggling-writer-22', 'muse-22'] },
  { id: 'a-chance-encounter-22', name: 'A Chance Encounter', description: 'Jack has a chance encounter with another writer who shares his unconventional views.', genres: ['Drama', 'Literary'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['encounter', 'sharedideas', 'connection'] }, characterIds: ['struggling-writer-22', 'fellow-writer-22'] },
  { id: 'a-moment-of-reflection-22', name: 'A Moment of Reflection', description: 'Stella sits alone, contemplating her life and her impact on Jack.', genres: ['Drama', 'Literary'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['reflection', 'introspection', 'mystery'] }, characterIds: ['muse-22'] },
  { id: 'a-new-understanding-22', name: 'A New Understanding', description: 'Evelyn listens intently as the Beat poets discuss their philosophies.', genres: ['Drama'], type: 'Scene', world: 'beat-blues', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['learning', 'understanding', 'influence'] }, characterIds: ['young-student-22', 'struggling-writer-22', 'cynical-poet-22'] },
];

// --- World 23: "Suburban Swingers" (Comedy/Drama) ---
export const suburbanSwingersCharacters23: Gem[] = [
  { id: 'newlywed-wife-23', name: 'Brenda Newly', description: 'A young and slightly naive newlywed adjusting to suburban life in the 1950s.', genres: ['Comedy', 'Drama'], type: 'Character', world: 'suburban-swingers', attributes: { power: 55, rarity: 'Epic', level: 1, traits: ['naive', 'curious', 'eager'] }, casting: [{ id: 'newlywed-husband-23', name: 'Bob Newly', role: 'Husband', description: 'Brenda\'s well-meaning but slightly clueless husband' }] },
  { id: 'newlywed-husband-23', name: 'Bob Newly', description: 'Brenda\'s well-meaning but often clueless husband trying to fit into suburban society.', genres: ['Comedy', 'Drama'], type: 'Character', world: 'suburban-swingers', attributes: { power: 58, rarity: 'Epic', level: 1, traits: ['wellmeaning', 'clueless', 'tryinghard'] }, casting: [] },
  { id: 'gossipy-neighbor-23', name: 'Patty Prying', description: 'The neighborhood\'s queen of gossip, always eager to know everyone\'s business.', genres: ['Comedy'], type: 'Character', world: 'suburban-swingers', attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['gossipy', 'nosy', 'wellinformed'] }, casting: [] },
  { id: 'smooth-talking-neighbor-23', name: 'Don Draper Lite', description: 'A charming and successful neighbor who seems to have it all figured out.', genres: ['Comedy', 'Drama'], type: 'Character', world: 'suburban-swingers', attributes: { power: 65, rarity: 'Uncommon', level: 1, traits: ['charming', 'successful', 'slightlysmug'] }, casting: [{ id: 'stylish-wife-23', name: 'Carolyn Chic', role: 'Wife', description: 'Don\'s stylish and seemingly perfect wife' }] },
  { id: 'stylish-wife-23', name: 'Carolyn Chic', description: 'Don\'s elegant and seemingly perfect wife, who might have secrets of her own.', genres: ['Comedy', 'Drama'], type: 'Character', world: 'suburban-swingers', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['stylish', 'elegant', 'secretive'] }, casting: [] },
  { id: 'awkward-friend-23', name: 'Gary Goofball', description: 'Bob\'s awkward and slightly embarrassing friend from work.', genres: ['Comedy'], type: 'Character', world: 'suburban-swingers', attributes: { power: 48, rarity: 'Uncommon', level: 1, traits: ['awkward', 'clumsy', 'goodnatured'] }, casting: [] },
  { id: 'traditional-mother-in-law-23', name: 'Mrs. Stern', description: 'Brenda\'s traditional mother who offers unsolicited advice.', genres: ['Comedy'], type: 'Character', world: 'suburban-swingers', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['traditional', 'opinionated', 'wellmeaning'] }, casting: [] },
  { id: 'neighborhood-busybody-23', name: 'Gladys Grundy', description: 'Another neighbor who is always involved in community events and gossip.', genres: ['Comedy'], type: 'Character', world: 'suburban-swingers', attributes: { power: 52, rarity: 'Uncommon', level: 1, traits: ['busybody', 'organized', 'opinionated'] }, casting: [] },
];
export const suburbanSwingersStories23: Gem[] = [
  { id: 'fitting-into-the-neighborhood-23', name: 'Fitting into the Neighborhood', description: 'Brenda and Bob try to navigate the social dynamics of their new suburban neighborhood.', genres: ['Comedy', 'Drama'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['suburbia', 'socialdynamics', 'fittingin'] } },
  { id: 'the-neighborhood-barbecue-23', name: 'The Neighborhood Barbecue', description: 'An awkward and revealing neighborhood barbecue exposes some of the residents\' secrets.', genres: ['Comedy', 'Drama'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['barbecue', 'secrets', 'awkward'] } },
  { id: 'patty-prying-strikes-again-23', name: 'Patty Prying Strikes Again', description: 'Patty Prying overhears something she shouldn\'t and spreads rumors.', genres: ['Comedy'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['gossip', 'rumors', 'mischief'] } },
  { id: 'the-perfect-couple-facade-23', name: 'The Perfect Couple Facade', description: 'Brenda and Bob start to see cracks in Don and Carolyn\'s seemingly perfect marriage.', genres: ['Comedy', 'Drama'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['marriage', 'facade', 'secrets'] } },
  { id: 'gary-goofballs-visit-23', name: 'Gary Goofball\'s Visit', description: 'Gary Goofball\'s visit to Brenda and Bob\'s house leads to a series of embarrassing situations.', genres: ['Comedy'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['awkwardness', 'comedy', 'friendship'] } },
  { id: 'mother-in-laws-advice-23', name: 'Mother-in-Law\'s Advice', description: 'Mrs. Stern\'s well-intentioned but often misguided advice causes more problems than it solves.', genres: ['Comedy'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['motherinlaw', 'advice', 'comedy'] } },
  { id: 'gladys-grundys-community-spirit-23', name: 'Gladys Grundy\'s Community Spirit', description: 'Gladys tries to involve Brenda in all sorts of neighborhood activities, with mixed results.', genres: ['Comedy'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['community', 'involvement', 'comedy'] } },
  { id: 'finding-their-place-23', name: 'Finding Their Place', description: 'Brenda and Bob slowly start to find their own unique place within the quirky suburban landscape.', genres: ['Comedy', 'Drama'], type: 'Story', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['belonging', 'individuality', 'suburbia'] } },
];
export const suburbanSwingersAdventures23: Gem[] = [
  { id: 'hosting-the-first-dinner-party-23', name: 'Hosting the First Dinner Party', description: 'Brenda and Bob try to host the perfect dinner party for their new neighbors, with hilarious mishaps.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['dinnerparty', 'comedy', 'socialpressure'] } },
  { id: 'investigating-a-neighborhood-rumor-23', name: 'Investigating a Neighborhood Rumor', description: 'Brenda and Bob get caught up in trying to uncover the truth behind a juicy neighborhood rumor started by Patty Prying.', genres: ['Comedy', 'Mystery'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rumor', 'investigation', 'gossip'] } },
  { id: 'surviving-a-couples-retreat-23', name: 'Surviving a Couples Retreat', description: 'Brenda and Bob attend a weekend couples retreat that pushes their relationship to its comedic limits.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['couplesretreat', 'comedy', 'relationship'] } },
  { id: 'dealing-with-an-unexpected-guest-23', name: 'Dealing with an Unexpected Guest', description: 'An unexpected guest arrives and disrupts the carefully constructed suburban harmony.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['unexpectedguest', 'comedy', 'disruption'] } },
  { id: 'participating-in-the-community-fair-23', name: 'Participating in the Community Fair', description: 'Brenda and Bob reluctantly participate in the local community fair, leading to funny situations.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['communityfair', 'comedy', 'participation'] } },
  { id: 'trying-to-impress-the-boss-23', name: 'Trying to Impress the Boss', description: 'Bob tries too hard to impress his boss at a neighborhood gathering.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['impressingtheboss', 'comedy', 'worklife'] } },
  { id: 'solving-a-minor-neighborhood-dispute-23', name: 'Solving a Minor Neighborhood Dispute', description: 'Brenda and Bob get involved in trying to resolve a silly argument between two neighbors.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['dispute', 'comedy', 'mediation'] } },
  { id: 'planning-a-surprise-for-bob-23', name: 'Planning a Surprise for Bob', description: 'Brenda tries to plan a surprise birthday party for Bob, but Patty Prying keeps almost revealing the secret.', genres: ['Comedy'], type: 'Adventure', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surprise', 'party', 'gossip'] } },
];
export const suburbanSwingersScenes23: Gem[] = [
  { id: 'moving-in-day-23', name: 'Moving In Day', description: 'Brenda and Bob arrive at their new suburban home, feeling both excited and overwhelmed.', genres: ['Comedy', 'Drama'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['movingin', 'newbeginnings', 'suburbia'] }, characterIds: ['newlywed-wife-23', 'newlywed-husband-23'] },
  { id: 'the-first-encounter-23', name: 'The First Encounter', description: 'Brenda has her first awkward encounter with the overly friendly Patty Prying.', genres: ['Comedy'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['meeting', 'gossip', 'awkwardness'] }, characterIds: ['newlywed-wife-23', 'gossipy-neighbor-23'] },
  { id: 'backyard-fence-chat-23', name: 'Backyard Fence Chat', description: 'Bob has a conversation with the seemingly suave Don Draper Lite over the backyard fence.', genres: ['Comedy', 'Drama'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['conversation', 'neighborly', 'comparison'] }, characterIds: ['newlywed-husband-23', 'smooth-talking-neighbor-23'] },
  { id: 'awkward-double-date-23', name: 'Awkward Double Date', description: 'Brenda and Bob go on an awkward double date with Gary Goofball and a date he brought.', genres: ['Comedy'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['doubledate', 'awkwardness', 'comedy'] }, characterIds: ['newlywed-wife-23', 'newlywed-husband-23', 'awkward-friend-23'] },
  { id: 'mother-in-laws-visit-23', name: 'Mother-in-Law\'s Visit', description: 'Mrs. Stern arrives for a visit, offering her unsolicited opinions on everything.', genres: ['Comedy'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['motherinlaw', 'advice', 'tension'] }, characterIds: ['newlywed-wife-23', 'newlywed-husband-23', 'traditional-mother-in-law-23'] },
  { id: 'neighborhood-coffee-klatch-23', name: 'Neighborhood Coffee Klatch', description: 'Brenda attends her first neighborhood coffee klatch, trying to navigate the social hierarchy.', genres: ['Comedy'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['coffeeklatch', 'socialdynamics', 'gossip'] }, characterIds: ['newlywed-wife-23', 'gossipy-neighbor-23', 'neighborhood-busybody-23'] },
  { id: 'a-moment-of-doubt-23', name: 'A Moment of Doubt', description: 'Brenda has a moment of doubt about whether she and Bob really fit into this suburban world.', genres: ['Comedy', 'Drama'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['doubt', 'introspection', 'belonging'] }, characterIds: ['newlywed-wife-23'] },
  { id: 'finding-common-ground-23', name: 'Finding Common Ground', description: 'Brenda and Bob find a funny and unexpected common ground with one of their seemingly perfect neighbors.', genres: ['Comedy', 'Drama'], type: 'Scene', world: 'suburban-swingers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['commonground', 'understanding', 'connection'] }, characterIds: ['newlywed-wife-23', 'newlywed-husband-23', 'stylish-wife-23'] },
];

// --- World 24: "Madcap Mod Scene" (Comedy/Music) ---
export const madcapModsCharacters24: Gem[] = [
  { id: 'mod-leader-24', name: 'Ace Scooter', description: 'The stylish and energetic leader of a Mod gang in 1960s London.', genres: ['Comedy', 'Music'], type: 'Character', world: 'madcap-mods', attributes: { power: 68, rarity: 'Epic', level: 1, traits: ['stylish', 'energetic', 'witty'] }, casting: [{ id: 'mod-girlfriend-24', name: 'Penny Pin-Up', role: 'Girlfriend', description: 'Ace\'s fashionable and quick-witted girlfriend' }] },
  { id: 'mod-girlfriend-24', name: 'Penny Pin-Up', description: 'Ace\'s fashionable and equally energetic girlfriend.', genres: ['Comedy', 'Music'], type: 'Character', world: 'madcap-mods', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['fashionable', 'energetic', 'sarcastic'] }, casting: [] },
  { id: 'clumsy-mod-24', name: 'Wiggy Wobble', description: 'A well-meaning but incredibly clumsy member of Ace\'s Mod gang.', genres: ['Comedy'], type: 'Character', world: 'madcap-mods', attributes: { power: 45, rarity: 'Uncommon', level: 1, traits: ['clumsy', 'enthusiastic', 'loyal'] }, casting: [] },
  { id: 'rival-mod-24', name: 'Reggie Rocker (Secretly a Mod Fan)', description: 'A rival Mod who secretly admires Ace and his style.', genres: ['Comedy'], type: 'Character', world: 'madcap-mods', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['competitive', 'secretadmirer'] }, casting: [] },
  { id: 'groovy-musician-24', name: 'Jazzy Jim', description: 'A talented musician who often plays at the Mods\' favorite hangout.', genres: ['Comedy', 'Music'], type: 'Character', world: 'madcap-mods', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['musical', 'cool', 'laidback'] }, casting: [] },
  { id: 'strict-shopkeeper-24', name: 'Mr. Grumbles', description: 'The grumpy owner of the Mods\' favorite clothing shop.', genres: ['Comedy'], type: 'Character', world: 'madcap-mods', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['grumpy', 'easilyannoyed', 'secretlyfond'] }, casting: [] },
  { id: 'visiting-tourist-24', name: 'Bartholomew Bumble from Birmingham', description: 'A clueless tourist trying to understand the Mod scene.', genres: ['Comedy'], type: 'Character', world: 'madcap-mods', attributes: { power: 38, rarity: 'Uncommon', level: 1, traits: ['clueless', 'curious'] }, casting: [] },
  { id: 'dance-contest-judge-24', name: 'Madam Twisty', description: 'An eccentric judge at a local Mod dance contest.', genres: ['Comedy'], type: 'Character', world: 'madcap-mods', attributes: { power: 60, rarity: 'Uncommon', level: 2, traits: ['eccentric', 'opinionated', 'lovesdancing'] }, casting: [] },
];
export const madcapModsStories24: Gem[] = [
  { id: 'the-scooter-rally-24', name: 'The Scooter Rally', description: 'Ace and his gang participate in a chaotic and hilarious scooter rally.', genres: ['Comedy', 'Music'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['scooters', 'rally', 'comedy'] } },
  { id: 'finding-the-perfect-outfit-24', name: 'Finding the Perfect Outfit', description: 'Penny goes on a madcap shopping spree to find the ultimate Mod outfit.', genres: ['Comedy'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['fashion', 'shopping', 'comedy'] } },
  { id: 'wiggy-wobbles-mishaps-24', name: 'Wiggy Wobble\'s Mishaps', description: 'Wiggy\'s clumsiness leads to a series of funny accidents.', genres: ['Comedy'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['clumsiness', 'comedy', 'accidents'] } },
  { id: 'the-secret-admirer-24', name: 'The Secret Admirer', description: 'Ace discovers that Reggie Rocker is secretly a fan of Mod culture.', genres: ['Comedy'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['secretadmirer', 'rivalry', 'humor'] } },
  { id: 'a-night-at-the-club-24', name: 'A Night at the Club', description: 'The Mods have a wild and groovy night out at their favorite club.', genres: ['Comedy', 'Music'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['nightclub', 'music', 'dancing'] } },
  { id: 'dealing-with-mr-grumbles-24', name: 'Dealing with Mr. Grumbles', description: 'The Mods try to charm Mr. Grumbles into giving them a discount.', genres: ['Comedy'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['shopkeeper', 'comedy', 'charm'] } },
  { id: 'the-tourist-trap-24', name: 'The Tourist Trap', description: 'Bartholomew Bumble gets hilariously confused by the Mod slang and fashion.', genres: ['Comedy'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['tourist', 'confusion', 'comedy'] } },
  { id: 'the-dance-contest-24', name: 'The Dance Contest', description: 'Ace and Penny enter a local dance contest judged by the eccentric Madam Twisty.', genres: ['Comedy', 'Music'], type: 'Story', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['dancecontest', 'comedy', 'eccentric'] } },
];
export const madcapModsAdventures24: Gem[] = [
  { id: 'customizing-the-scooter-24', name: 'Customizing the Scooter', description: 'Ace and Wiggy try to give Ace\'s scooter a wild and wacky new look.', genres: ['Comedy'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['scooter', 'customization', 'comedy'] } },
  { id: 'organizing-a-flash-mob-24', name: 'Organizing a Flash Mob', description: 'Penny comes up with a crazy idea to organize a Mod flash mob in the middle of London.', genres: ['Comedy', 'Music'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['flashmob', 'music', 'comedy'] } },
  { id: 'getting-tickets-to-the-big-show-24', name: 'Getting Tickets to the Big Show', description: 'The Mods desperately try to get tickets to see their favorite band play.', genres: ['Comedy', 'Music'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'tickets', 'comedy'] } },
  { id: 'a-mix-up-at-the-laundromat-24', name: 'A Mix-Up at the Laundromat', description: 'Wiggy accidentally swaps his clothes with someone else at the laundromat, leading to hilarious consequences.', genres: ['Comedy'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['laundromat', 'mixup', 'comedy'] } },
  { id: 'trying-to-impress-the-judge-24', name: 'Trying to Impress the Judge', description: 'Ace and Penny try over-the-top methods to impress Madam Twisty at the dance contest.', genres: ['Comedy', 'Music'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['dancecontest', 'impressing', 'comedy'] } },
  { id: 'a-misunderstanding-with-the-rivals-24', name: 'A Misunderstanding with the Rivals', description: 'A funny misunderstanding leads to a temporary truce (or maybe a bigger rivalry) with another Mod gang.', genres: ['Comedy'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'misunderstanding', 'comedy'] } },
  { id: 'helping-jazzy-jim-out-24', name: 'Helping Jazzy Jim Out', description: 'The Mods try to help Jazzy Jim when he faces a funny problem before a gig.', genres: ['Comedy', 'Music'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'helping', 'comedy'] } },
  { id: 'a surprise-for-penny-24', name: 'A Surprise for Penny', description: 'Ace tries to plan a surprise birthday for Penny, with Wiggy\'s help (which is always a recipe for comedy).', genres: ['Comedy'], type: 'Adventure', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surprise', 'birthday', 'comedy'] } },
];
export const madcapModsScenes24: Gem[] = [
  { id: 'meeting-at-the-coffee-bar-24', name: 'Meeting at the Coffee Bar', description: 'Ace and Penny meet at their favorite Mod coffee bar, exchanging witty banter.', genres: ['Comedy', 'Music'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['meeting', 'banter', 'style'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24'] },
  { id: 'the-clothing-shop-antics-24', name: 'The Clothing Shop Antics', description: 'The Mods cause chaos in Mr. Grumbles\' clothing shop while trying on outfits.', genres: ['Comedy'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['shopping', 'comedy', 'style'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24', 'clumsy-mod-24', 'strict-shopkeeper-24'] },
  { id: 'a-scooter-ride-gone-wrong-24', name: 'A Scooter Ride Gone Wrong', description: 'Wiggy tries to ride Ace\'s scooter and ends up in a series of comical mishaps.', genres: ['Comedy'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['scooter', 'comedy', 'accidents'] }, characterIds: ['mod-leader-24', 'clumsy-mod-24'] },
  { id: 'the-club-is-rocking-24', name: 'The Club is Rocking', description: 'The Mods dance the night away at their favorite club, with Jazzy Jim playing a groovy tune.', genres: ['Comedy', 'Music'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['nightclub', 'dancing', 'music'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24', 'groovy-musician-24'] },
  { id: 'a-funny-encounter-with-the-tourist-24', name: 'A Funny Encounter with the Tourist', description: 'Ace and Penny try to explain Mod culture to the bewildered Bartholomew Bumble.', genres: ['Comedy'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['tourist', 'confusion', 'explanation'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24', 'visiting-tourist-24'] },
  { id: 'the-dance-off-preparations-24', name: 'The Dance-Off Preparations', description: 'Ace and Penny practice their dance moves for the upcoming contest, with hilarious results.', genres: ['Comedy', 'Music'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['dancecontest', 'practice', 'comedy'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24'] },
  { id: 'a surprising moment-24', name: 'A Surprising Moment', description: 'Reggie Rocker is caught secretly trying on Mod clothes in Mr. Grumbles\' shop.', genres: ['Comedy'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['secret', 'surprise', 'humor'] }, characterIds: ['rival-mod-24', 'strict-shopkeeper-24'] },
  { id: 'the-dance-contest-finale-24', name: 'The Dance Contest Finale', description: 'Ace and Penny perform their final dance routine for Madam Twisty and the crowd.', genres: ['Comedy', 'Music'], type: 'Scene', world: 'madcap-mods', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['dancecontest', 'performance', 'finale'] }, characterIds: ['mod-leader-24', 'mod-girlfriend-24', 'dance-contest-judge-24'] },
];

// --- World 25: "Folk Music Revolution" (Drama/Music) ---
export const folkRevolutionCharacters25: Gem[] = [
  { id: 'protest-singer-25', name: 'Harmony Hope', description: 'A passionate folk singer using her music to protest social injustices in the 1960s.', genres: ['Drama', 'Music'], type: 'Character', world: 'folk-revolution', attributes: { power: 68, rarity: 'Epic', level: 1, traits: ['passionate', 'outspoken', 'musical'] }, casting: [{ id: 'fellow-activist-25', name: 'River Righteous', role: 'Ally', description: 'A dedicated activist who supports Harmony\'s cause' }] },
  { id: 'fellow-activist-25', name: 'River Righteous', description: 'A committed activist who works alongside Harmony to fight for social change.', genres: ['Drama'], type: 'Character', world: 'folk-revolution', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['dedicated', 'principled', 'supportive'] }, casting: [] },
  { id: 'traditional-folk-artist-25', name: 'Old Man Ballad', description: 'An older folk musician who represents more traditional styles and views.', genres: ['Drama', 'Music'], type: 'Character', world: 'folk-revolution', attributes: { power: 72, rarity: 'Rare', level: 2, traits: ['traditional', 'experienced', 'skeptical'] }, casting: [] },
  { id: 'record-producer-25', name: 'Midas Touch Musicman', description: 'A record producer who sees commercial potential in Harmony\'s music.', genres: ['Drama', 'Music'], type: 'Character', world: 'folk-revolution', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['opportunistic', 'businessminded'] }, casting: [] },
  { id: 'young-fan-25', name: 'Melody Follower', description: 'A young person deeply inspired by Harmony\'s music and message.', genres: ['Drama'], type: 'Character', world: 'folk-revolution', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['inspired', 'hopeful'] }, casting: [] },
  { id: 'government-official-25', name: 'Senator Stone', description: 'A government official who views Harmony\'s activism as a threat.', genres: ['Drama'], type: 'Character', world: 'folk-revolution', attributes: { power: 75, rarity: 'Uncommon', level: 2, traits: ['powerful', 'threatened'] }, casting: [] },
  { id: 'radio-host-25', name: 'Ronnie Radio', description: 'A popular radio host who interviews Harmony and plays her music.', genres: ['Drama'], type: 'Character', world: 'folk-revolution', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['influential', 'supportive'] }, casting: [] },
  { id: 'cynical-journalist-25', name: 'Penny Prickle', description: 'A journalist who is skeptical of the folk music movement and its impact.', genres: ['Drama'], type: 'Character', world: 'folk-revolution', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['cynical', 'questioning'] }, casting: [] },
];
export const folkRevolutionStories25: Gem[] = [
  { id: 'songs-of-protest-25', name: 'Songs of Protest', description: 'Harmony uses her powerful folk songs to raise awareness about social injustices.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'protest', 'activism'] } },
  { id: 'clash-of-generations-25', name: 'Clash of Generations', description: 'Harmony\'s revolutionary music clashes with the more traditional views of Old Man Ballad.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'tradition', 'change'] } },
  { id: 'the-price-of-fame-25', name: 'The Price of Fame', description: 'Harmony grapples with the pressures and compromises that come with rising fame.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['fame', 'pressure', 'compromise'] } },
  { id: 'inspiring-a-movement-25', name: 'Inspiring a Movement', description: 'Harmony\'s music inspires young people like Melody Follower to get involved in social change.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['inspiration', 'youth', 'activism'] } },
  { id: 'government-backlash-25', name: 'Government Backlash', description: 'Senator Stone and the government try to suppress Harmony\'s message.', genres: ['Drama'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['government', 'suppression', 'resistance'] } },
  { id: 'reaching-a-wider-audience-25', name: 'Reaching a Wider Audience', description: 'Radio host Ronnie Radio helps Harmony reach a larger audience with her music.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['radio', 'audience', 'influence'] } },
  { id: 'media-scrutiny-25', name: 'Media Scrutiny', description: 'Cynical journalist Penny Prickle challenges Harmony\'s motives and impact.', genres: ['Drama'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['media', 'scrutiny', 'questioning'] } },
  { id: 'the-power-of-song-25', name: 'The Power of Song', description: 'Ultimately, Harmony\'s music proves to be a powerful force for change and unity.', genres: ['Drama', 'Music'], type: 'Story', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'power', 'change'] } },
];
export const folkRevolutionAdventures25: Gem[] = [
  { id: 'organizing-a-protest-concert-25', name: 'Organizing a Protest Concert', description: 'Harmony and River work to organize a large-scale protest concert.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['concert', 'protest', 'organization'] } },
  { id: 'facing-censorship-25', name: 'Facing Censorship', description: 'Harmony\'s music gets censored, and she has to find creative ways to share her message.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['censorship', 'resistance', 'creativity'] } },
  { id: 'going-on-a-tour-25', name: 'Going on a Tour', description: 'Harmony embarks on a tour to spread her music and message across the country.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['tour', 'travel', 'spreadingmessage'] } },
  { id: 'debating-on-television-25', name: 'Debating on Television', description: 'Harmony gets invited to debate Senator Stone on a live television show.', genres: ['Drama'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['debate', 'television', 'confrontation'] } },
  { id: 'writing-a-new-anthem-25', name: 'Writing a New Anthem', description: 'Harmony feels the pressure to write a new song that will capture the spirit of the movement.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['songwriting', 'anthem', 'pressure'] } },
  { id: 'dealing-with-disruptions-25', name: 'Dealing with Disruptions', description: 'Harmony\'s concerts and events face disruptions from those who oppose her views.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['disruption', 'resistance', 'perseverance'] } },
  { id: 'collaborating-with-other-artists-25', name: 'Collaborating with Other Artists', description: 'Harmony collaborates with other musicians and artists to amplify their message.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['collaboration', 'art', 'unity'] } },
  { id: 'organizing-a-benefit-concert-25', name: 'Organizing a Benefit Concert', description: 'Harmony and her allies organize a benefit concert to support a cause they believe in.', genres: ['Drama', 'Music'], type: 'Adventure', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['benefitconcert', 'charity', 'activism'] } },
];
export const folkRevolutionScenes25: Gem[] = [
  { id: 'coffee-house-performance-25', name: 'Coffee House Performance', description: 'Harmony performs one of her powerful protest songs at a small, intimate coffee house.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['performance', 'music', 'intimate'] }, characterIds: ['protest-singer-25', 'young-fan-25'] },
  { id: 'heated-debate-25', name: 'Heated Debate', description: 'Harmony has a tense debate with Old Man Ballad about the direction of folk music.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['debate', 'tradition', 'change'] }, characterIds: ['protest-singer-25', 'traditional-folk-artist-25'] },
  { id: 'meeting-the-producer-25', name: 'Meeting the Producer', description: 'Harmony meets with Midas Touch Musicman, who offers her a record deal but with certain conditions.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['recorddeal', 'compromise', 'opportunity'] }, characterIds: ['protest-singer-25', 'record-producer-25'] },
  { id: 'rally-for-change-25', name: 'Rally for Change', description: 'Harmony and River lead a passionate rally, speaking out against injustice.', genres: ['Drama'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rally', 'protest', 'activism'] }, characterIds: ['protest-singer-25', 'fellow-activist-25', 'young-fan-25'] },
  { id: 'radio-interview-25', name: 'Radio Interview', description: 'Harmony is interviewed by Ronnie Radio, sharing her music and her message with a wider audience.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['radio', 'interview', 'reachingaudience'] }, characterIds: ['protest-singer-25', 'radio-host-25'] },
  { id: 'confrontation-with-authority-25', name: 'Confrontation with Authority', description: 'Harmony and River face opposition from Senator Stone and government officials.', genres: ['Drama'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['confrontation', 'authority', 'resistance'] }, characterIds: ['protest-singer-25', 'fellow-activist-25', 'government-official-25'] },
  { id: 'backstage-before-a-big-show-25', name: 'Backstage Before a Big Show', description: 'Harmony has a moment of reflection and nervousness before a major concert.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['backstage', 'nerves', 'anticipation'] }, characterIds: ['protest-singer-25', 'fellow-activist-25'] },
  { id: 'the-final-anthem-25', name: 'The Final Anthem', description: 'Harmony performs a powerful new song that becomes an anthem for the movement.', genres: ['Drama', 'Music'], type: 'Scene', world: 'folk-revolution', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['anthem', 'music', 'unity'] }, characterIds: ['protest-singer-25', 'fellow-activist-25', 'young-fan-25'] },
];

// --- World 26: "Surf Rock Summer" (Music/Comedy) ---
export const surfRockCharacters26: Gem[] = [
  { id: 'surfer-guitarist-26', name: 'Wipeout Willie', description: 'The lead guitarist of a surf rock band in 1960s California.', genres: ['Music', 'Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['musical', 'laidback', 'charming'] }, casting: [{ id: 'beach-babe-singer-26', name: 'Sandy Splash', role: 'Singer', description: 'The band\'s fun-loving singer who loves the beach' }] },
  { id: 'beach-babe-singer-26', name: 'Sandy Splash', description: 'The energetic and fun-loving singer of the surf rock band.', genres: ['Music', 'Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['energetic', 'friendly', 'musical'] }, casting: [] },
  { id: 'goofy-drummer-26', name: 'Crashin\' Clyde', description: 'The band\'s goofy and enthusiastic drummer who often messes up.', genres: ['Music', 'Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 58, rarity: 'Uncommon', level: 1, traits: ['goofy', 'enthusiastic', 'clumsy'] }, casting: [] },
  { id: 'cool-bassist-26', name: 'Reverb Ray', description: 'The band\'s cool and collected bassist.', genres: ['Music', 'Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['cool', 'collected', 'musical'] }, casting: [] },
  { id: 'rival-surfer-26', name: 'Duke "The Tube" Thompson', description: 'A competitive surfer who often clashes with Willie.', genres: ['Comedy', 'Sports'], type: 'Character', world: 'surf-rock', attributes: { power: 63, rarity: 'Uncommon', level: 1, traits: ['competitive', 'arrogant', 'skilled'] }, casting: [] },
  { id: 'wise-surf-shop-owner-26', name: 'Old Man Kahuna', description: 'The wise and laidback owner of the local surf shop.', genres: ['Comedy', 'Nostalgia'], type: 'Character', world: 'surf-rock', attributes: { power: 70, rarity: 'Rare', level: 2, traits: ['wise', 'laidback', 'helpful'] }, casting: [] },
  { id: 'annoying-fan-26', name: 'Brenda Beachbum', description: 'An overly enthusiastic and slightly annoying fan of the band.', genres: ['Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 45, rarity: 'Uncommon', level: 1, traits: ['enthusiastic', 'annoying'] }, casting: [] },
  { id: 'talent-show-host-26', name: 'MC Moondoggie', description: 'The cheesy host of a local beach talent show.', genres: ['Comedy'], type: 'Character', world: 'surf-rock', attributes: { power: 55, rarity: 'Uncommon', level: 2, traits: ['cheesy', 'energetic'] }, casting: [] },
];
export const surfRockStories26: Gem[] = [
  { id: 'riding-the-wave-to-fame-26', name: 'Riding the Wave to Fame', description: 'The band tries to make it big with their catchy surf rock tunes.', genres: ['Music', 'Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['music', 'fame', 'surfing'] } },
  { id: 'the-beach-talent-show-26', name: 'The Beach Talent Show', description: 'The band enters a local beach talent show with hilarious results.', genres: ['Music', 'Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['talent', 'beach', 'comedy'] } },
  { id: 'rivalry-on-the-waves-26', name: 'Rivalry on the Waves', description: 'Willie and Duke engage in a comical surfing rivalry.', genres: ['Comedy', 'Sports'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['surfing', 'rivalry', 'comedy'] } },
  { id: 'a-summer-of-fun-26', name: 'A Summer of Fun', description: 'The band has a series of funny and memorable adventures during their summer at the beach.', genres: ['Music', 'Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['summer', 'beach', 'comedy'] } },
  { id: 'old-man-kahunas-wisdom-26', name: 'Old Man Kahuna\'s Wisdom', description: 'The band seeks advice from the wise surf shop owner.', genres: ['Comedy', 'Nostalgia'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['wisdom', 'surfing', 'advice'] } },
  { id: 'dealing-with-the-annoying-fan-26', name: 'Dealing with the Annoying Fan', description: 'The band tries to politely avoid their overly enthusiastic fan, Brenda.', genres: ['Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['fan', 'comedy', 'avoidance'] } },
  { id: 'writing-the-perfect-surf-song-26', name: 'Writing the Perfect Surf Song', description: 'The band struggles to write a new hit surf rock song.', genres: ['Music', 'Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['music', 'songwriting', 'comedy'] } },
  { id: 'a-surprise-beach-party-26', name: 'A Surprise Beach Party', description: 'Sandy tries to plan a surprise beach party for Willie.', genres: ['Comedy'], type: 'Story', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['surprise', 'beachparty', 'comedy'] } },
];
export const surfRockAdventures26: Gem[] = [
  { id: 'getting-to-the-beach-on-time-26', name: 'Getting to the Beach on Time', description: 'The band faces hilarious obstacles trying to get to their beach gig on time.', genres: ['Music', 'Comedy'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['beach', 'comedy', 'travel'] } },
  { id: 'saving-the-surf-shop-26', name: 'Saving the Surf Shop', description: 'The band tries to help Old Man Kahuna save his surf shop from a greedy developer.', genres: ['Comedy', 'Nostalgia'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surfing', 'saving', 'comedy'] } },
  import { Collection, Gem } from '../../../types/gemium';

// --- World 26: "Surf Rock Summer" (Music/Comedy) - Continued ---
export const surfRockAdventures26: Gem[] = [
  { id: 'the-battle-of-the-surf-bands-26', name: 'The Battle of the Surf Bands', description: 'The band enters a local competition to prove they are the best surf rock band in town.', genres: ['Music', 'Comedy'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'competition', 'comedy'] } },
  { id: 'a-close-encounter-at-sea-26', name: 'A Close Encounter at Sea', description: 'While surfing, Willie has a funny and slightly unbelievable encounter with a sea creature.', genres: ['Comedy', 'Sci-Fi'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surfing', 'comedy', 'encounter'] } },
  { id: 'finding-a-lost-surfboard-26', name: 'Finding a Lost Surfboard', description: 'Sandy loses her favorite surfboard, and the band helps her search for it.', genres: ['Comedy'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surfing', 'search', 'friendship'] } },
  { id: 'dealing-with-a-stormy-beach-26', name: 'Dealing with a Stormy Beach', description: 'The band tries to put on a show despite a sudden and comical beach storm.', genres: ['Music', 'Comedy'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'beach', 'storm'] } },
  { id: 'a prank-war-with-rival-surfers-26', name: 'A Prank War with Rival Surfers', description: 'The band gets involved in a silly prank war with Duke and his surfer gang.', genres: ['Comedy', 'Sports'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['pranks', 'surfing', 'comedy'] } },
  { id: 'organizing-a-beach-cleanup-26', name: 'Organizing a Beach Cleanup', description: 'Sandy inspires the band to organize a beach cleanup event.', genres: ['Comedy'], type: 'Adventure', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['beach', 'cleanup', 'community'] } },
];
export const surfRockScenes26: Gem[] = [
  { id: 'beach-gig-intro-26', name: 'Beach Gig Intro', description: 'The band starts their set at a sunny beach gig, with Wipeout Willie shredding the opening riff.', genres: ['Music', 'Comedy'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'beach', 'performance'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26', 'goofy-drummer-26', 'cool-bassist-26'] },
  { id: 'surfing-interlude-26', name: 'Surfing Interlude', description: 'Between sets, Willie and Sandy catch some waves, showing off their surfing skills (and occasional wipeouts).', genres: ['Music', 'Comedy', 'Sports'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surfing', 'music', 'fun'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26'] },
  { id: 'goofy-drummer-mishap-26', name: 'Goofy Drummer Mishap', description: 'Crashin\' Clyde hilariously messes up a drum solo during a performance.', genres: ['Music', 'Comedy'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'comedy', 'mistake'] }, characterIds: ['goofy-drummer-26'] },
  { id: 'encounter-with-the-rival-26', name: 'Encounter with the Rival', description: 'Willie and Duke have a comical and slightly tense encounter on the beach.', genres: ['Comedy', 'Sports'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['surfing', 'rivalry', 'banter'] }, characterIds: ['surfer-guitarist-26', 'rival-surfer-26'] },
  { id: 'advice-from-the-surf-shop-26', name: 'Advice from the Surf Shop', description: 'The band visits Old Man Kahuna at his surf shop for some wisdom and maybe a discount on wax.', genres: ['Comedy', 'Nostalgia'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['wisdom', 'surfing', 'advice'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26', 'wise-surf-shop-owner-26'] },
  { id: 'dealing-with-the-fan--26', name: 'Dealing with the Fan', description: 'Brenda Beachbum tries to get backstage (or just really close) to the band.', genres: ['Comedy'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['fan', 'comedy', 'persistence'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26', 'annoying-fan-26'] },
  { id: 'writing-music-by-the-waves-26', name: 'Writing Music by the Waves', description: 'Willie and Sandy try to write a new song inspired by the sound of the ocean.', genres: ['Music', 'Comedy'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['music', 'songwriting', 'inspiration'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26'] },
  { id: 'the-beach-party-finale-26', name: 'The Beach Party Finale', description: 'The band plays a final energetic song as the sun sets on a fun-filled beach party.', genres: ['Music', 'Comedy'], type: 'Scene', world: 'surf-rock', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['music', 'beachparty', 'finale'] }, characterIds: ['surfer-guitarist-26', 'beach-babe-singer-26', 'goofy-drummer-26', 'cool-bassist-26'] },
];

// --- World 27: "Small Town Scandals" (Drama/Mystery) ---
export const smallTownScandalsCharacters27: Gem[] = [
  { id: 'eager-reporter-27', name: 'Penny Scoop', description: 'A young and ambitious reporter for the local small-town newspaper in the 1950s.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['ambitious', 'curious', 'determined'] }, casting: [{ id: 'skeptical-sheriff-27', name: 'Sheriff Brody Jr.', role: 'Authority', description: 'The local sheriff who is often skeptical of Penny\'s findings' }] },
  { id: 'skeptical-sheriff-27', name: 'Sheriff Brody Jr.', description: 'The somewhat jaded local sheriff who prefers to stick to the official story.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 70, rarity: 'Epic', level: 2, traits: ['skeptical', 'bythebook', 'eventuallyconvinced'] }, casting: [] },
  { id: 'wealthy-patriarch-27', name: 'Mr. Bigwig', description: 'The wealthy and influential head of the town\'s founding family, who might have secrets.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 75, rarity: 'Rare', level: 3, traits: ['powerful', 'secretive', 'respected'] }, casting: [] },
  { id: 'gossipy-housewife-27', name: 'Gladys Gabber', description: 'The town\'s main source of gossip, who seems to know everything about everyone.', genres: ['Drama'], type: 'Character', world: 'small-town-scandals', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['gossipy', 'nosy', 'wellinformed'] }, casting: [] },
  { id: 'mysterious-newcomer-27', name: 'Silas Shadow', description: 'A quiet and enigmatic newcomer to town, who raises suspicion.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 62, rarity: 'Uncommon', level: 1, traits: ['mysterious', 'quiet', 'observant'] }, casting: [] },
  { id: 'concerned-doctor-27', name: 'Dr. Goodheart', description: 'The town\'s kind and respected doctor, who might be hiding something for the good of the town.', genres: ['Drama'], type: 'Character', world: 'small-town-scandals', attributes: { power: 68, rarity: 'Uncommon', level: 2, traits: ['concerned', 'respected', 'secretive'] }, casting: [] },
  { id: 'disgruntled-employee-27', name: 'Ernie怨恨', description: 'A disgruntled former employee of Mr. Bigwig who might have motive for revenge.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 58, rarity: 'Uncommon', level: 1, traits: ['disgruntled', 'bitter', 'revengeful'] }, casting: [] },
  { id: 'lovestruck-teenager-27', name: 'Susie Secret', description: 'A teenager who might have witnessed something important but is afraid to speak up.', genres: ['Drama', 'Mystery'], type: 'Character', world: 'small-town-scandals', attributes: { power: 50, rarity: 'Uncommon', level: 1, traits: ['lovestruck', 'scared', 'observant'] }, casting: [] },
];
export const smallTownScandalsStories27: Gem[] = [
  { id: 'the-case-of-the-missing-will-27', name: 'The Case of the Missing Will', description: 'When Mr. Bigwig suddenly passes away, his will mysteriously disappears, leading to suspicion and intrigue.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['mystery', 'inheritance', 'scandal'] } },
  { id: 'the-secret-affair-27', name: 'The Secret Affair', description: 'Penny uncovers a long-hidden secret affair that rocks the foundations of a seemingly perfect marriage.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['affair', 'secrets', 'betrayal'] } },
  { id: 'the-suspicious-accident-27', name: 'The Suspicious Accident', description: 'What was initially ruled an accident starts to look like something more sinister as Penny digs deeper.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['accident', 'suspicion', 'investigation'] } },
  { id: 'gladys-gabbers-gossip-leads-to-truth-27', name: 'Gladys Gabber\'s Gossip Leads to Truth', description: 'Penny initially dismisses Gladys\'s gossip, but it turns out to hold a crucial piece of the puzzle.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['gossip', 'truth', 'discovery'] } },
  { id: 'the-mysterious-past-of-silas-shadow-27', name: 'The Mysterious Past of Silas Shadow', description: 'Penny investigates the newcomer Silas Shadow and uncovers a surprising connection to the town\'s history.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['newcomer', 'past', 'mystery'] } },
  { id: 'dr-goodhearts-dilemma-27', name: 'Dr. Goodheart\'s Dilemma', description: 'Penny suspects Dr. Goodheart is withholding information to protect someone, but who and why?', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['doctor', 'dilemma', 'protection'] } },
  { id: 'ernie怨恨s-revenge-plot-27', name: 'Ernie怨恨\'s Revenge Plot', description: 'Penny uncovers evidence that Ernie怨恨 might be plotting revenge against Mr. Bigwig\'s family.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['revenge', 'plot', 'disgruntled'] } },
  { id: 'susie-secrets-witness-account-27', name: 'Susie Secret\'s Witness Account', description: 'Penny tries to coax Susie Secret into revealing what she might have seen, which could break the case wide open.', genres: ['Drama', 'Mystery'], type: 'Story', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['witness', 'fear', 'revelation'] } },
];
export const smallTownScandalsAdventures27: Gem[] = [
  { id: 'following-a-suspicious-lead-27', name: 'Following a Suspicious Lead', description: 'Penny follows a mysterious clue that takes her to the outskirts of town.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['clue', 'following', 'suspense'] } },
  { id: 'infiltrating-the-bigwig-mansion-27', name: 'Infiltrating the Bigwig Mansion', description: 'Penny tries to sneak into the Bigwig mansion to find evidence.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['infiltration', 'mansion', 'risk'] } },
  { id: 'interviewing-reluctant-witnesses-27', name: 'Interviewing Reluctant Witnesses', description: 'Penny has to use her persuasive skills to get tight-lipped townsfolk to talk.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['interview', 'reluctance', 'persuasion'] } },
  { id: 'deciphering-a-hidden-message-27', name: 'Deciphering a Hidden Message', description: 'Penny finds a cryptic message that seems to be a key to the scandal.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['hiddenmessage', 'deciphering', 'puzzle'] } },
  { id: 'a-close-call-with-the-culprit-27', name: 'A Close Call with the Culprit', description: 'Penny gets too close to the truth and has a dangerous encounter with the person behind the scandal.', genres: ['Drama', 'Mystery', 'Thriller'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['danger', 'confrontation', 'suspense'] } },
  { id: 'searching-for-evidence-at-the-old-mill-27', name: 'Searching for Evidence at the Old Mill', description: 'A tip leads Penny to an abandoned old mill on the edge of town, where crucial evidence might be hidden.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['evidence', 'search', 'abandoned'] } },
  { id: 'convincing-the-sheriff-27', name: 'Convincing the Sheriff', description: 'Penny has to present compelling evidence to finally convince Sheriff Brody Jr. that there\'s more to the story.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['convincing', 'authority', 'proof'] } },
  { id: 'revealing-the-truth-at-the-town-meeting-27', name: 'Revealing the Truth at the Town Meeting', description: 'Penny decides to reveal her findings at the town\'s weekly meeting, causing a major stir.', genres: ['Drama', 'Mystery'], type: 'Adventure', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['reveal', 'truth', 'consequences'] } },
];
export const smallTownScandalsScenes27: Gem[] = [
  { id: 'newspaper-office-scene-27', name: 'Newspaper Office Scene', description: 'Penny works late at the newspaper office, piecing together clues for her latest story.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['investigation', 'writing', 'deadline'] }, characterIds: ['eager-reporter-27'] },
  { id: 'sheriffs-office-confrontation-27', name: 'Sheriff\'s Office Confrontation', description: 'Penny tries to convince Sheriff Brody Jr. that a seemingly closed case needs another look.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['confrontation', 'authority', 'skepticism'] }, characterIds: ['eager-reporter-27', 'skeptical-sheriff-27'] },
  { id: 'gossiping-at-the-diner-27', name: 'Gossiping at the Diner', description: 'Penny overhears Gladys Gabber sharing some potentially important (or completely fabricated) gossip at the local diner.', genres: ['Drama'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['gossip', 'smalltown', 'eavesdropping'] }, characterIds: ['eager-reporter-27', 'gossipy-housewife-27'] },
  { id: 'a-tense-encounter-with-the-patriarch-27', name: 'A Tense Encounter with the Patriarch', description: 'Penny tries to ask Mr. Bigwig some difficult questions, leading to a tense and uncomfortable exchange.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['encounter', 'power', 'intimidation'] }, characterIds: ['eager-reporter-27', 'wealthy-patriarch-27'] },
  { id: 'observing-the-mysterious-newcomer-27', name: 'Observing the Mysterious Newcomer', description: 'Penny discreetly watches Silas Shadow, trying to figure out what he\'s hiding.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['observation', 'suspicion', 'mystery'] }, characterIds: ['eager-reporter-27', 'mysterious-newcomer-27'] },
  { id: 'a-private-conversation-with-the-doctor-27', name: 'A Private Conversation with the Doctor', description: 'Penny seeks out Dr. Goodheart for information, sensing he knows more than he\'s letting on.', genres: ['Drama'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['conversation', 'secrecy', 'concern'] }, characterIds: ['eager-reporter-27', 'concerned-doctor-27'] },
  { id: 'a-heated-exchange-with-the-disgruntled-employee-27', name: 'A Heated Exchange with the Disgruntled Employee', description: 'Penny confronts Ernie怨恨, who is full of resentment and hints at dark secrets.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['confrontation', 'resentment', 'secrets'] }, characterIds: ['eager-reporter-27', 'disgruntled-employee-27'] },
  { id: 'a-secret-meeting-with-the-teenager-27', name: 'A Secret Meeting with the Teenager', description: 'Penny arranges a clandestine meeting with Susie Secret, hoping to gain her trust and learn what she witnessed.', genres: ['Drama', 'Mystery'], type: 'Scene', world: 'small-town-scandals', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['secretmeeting', 'trust', 'witness'] }, characterIds: ['eager-reporter-27', 'lovestruck-teenager-27'] },
];

// --- World 28: "Teenage Time Travelers" (Sci-Fi/Comedy) ---
export const teenTimeTravelersCharacters28: Gem[] = [
  { id: 'inventor-teen-28', name: 'Marty McFly Jr.', description: 'A bright but slightly reckless teenager who accidentally invents a time machine in the 1950s.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 62, rarity: 'Epic', level: 1, traits: ['inventive', 'curious', 'slightlyreckless'] }, casting: [{ id: 'eccentric-scientist-28', name: 'Professor Emmett Brown Jr.', role: 'Mentor', description: 'The eccentric scientist who helps Marty understand time travel' }] },
  { id: 'eccentric-scientist-28', name: 'Professor Emmett Brown Jr.', description: 'The quirky and enthusiastic scientist who is the son of the original time-traveling professor.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 70, rarity: 'Epic', level: 2, traits: ['eccentric', 'enthusiastic', 'brilliant'] }, casting: [] },
  { id: 'skeptical-girlfriend-28', name: 'Jennifer Parker Jr.', description: 'Marty\'s smart and often skeptical girlfriend who gets caught up in his time-traveling adventures.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 60, rarity: 'Epic', level: 1, traits: ['smart', 'skeptical', 'loyal'] }, casting: [] },
  { id: 'bully-28', name: 'Biff Tannen III', description: 'The dimwitted grandson of the original bully, who also gets involved in time travel.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 65, rarity: 'Uncommon', level: 1, traits: ['dimwitted', 'bully', 'opportunistic'] }, casting: [] },
  { id: 'cool-musician-from-the-future-28', name: 'Zylth from 2060', description: 'A musician from the future who Marty accidentally brings back to the 50s.', genres: ['Sci-Fi', 'Comedy', 'Music'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 68, rarity: 'Uncommon', level: 1, traits: ['cool', 'futuristic', 'musical'] }, casting: [] },
  { id: 'nosy-neighbor-28', name: 'Mrs. Kravitz Jr.', description: 'The overly curious neighbor who always seems to be watching Marty\'s house.', genres: ['Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 55, rarity: 'Uncommon', level: 1, traits: ['nosy', 'suspicious'] }, casting: [] },
  { id: 'history-teacher-28', name: 'Mr. History', description: 'Marty\'s bewildered history teacher who notices strange inconsistencies.', genres: ['Comedy'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 70, rarity: 'Uncommon', level: 2, traits: ['knowledgeable', 'easilyconfused'] }, casting: [] },
  { id: 'teenager-from-the-past-28', name: 'Penny 1955', description: 'A teenager from 1955 who Marty encounters during one of his trips.', genres: ['Sci-Fi', 'Comedy', 'Romance'], type: 'Character', world: 'teen-time-travelers', attributes: { power: 58, rarity: 'Uncommon', level: 1, traits: ['curious', 'naive', 'friendly'] }, casting: [] },
];
export const teenTimeTravelersStories28: Gem[] = [
  { id: 'back-to-the-present-again-28', name: 'Back to the Present... Again!', description: 'Marty keeps getting stuck in the past and has to find increasingly ridiculous ways to get back to his own time.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['timetravel', 'comedy', 'gettingstuck'] } },
  { id: 'messing-with-history-again-28', name: 'Messing with History... Again!', description: 'Despite Professor Brown\'s warnings, Marty accidentally alters the past with funny and chaotic consequences.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['timetravel', 'history', 'comedy'] } },
  { id: 'a trip to the future (again)-28', name: 'A Trip to the Future (Again)', description: 'Marty and Jennifer take another trip to the future and are bewildered by the strange technology and customs.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'future', 'comedy'] } },
  { id: 'biff-strikes-back (again)-28', name: 'Biff Strikes Back (Again)', description: 'Biff somehow gets his hands on the time machine and uses it for his own dimwitted schemes.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'bully', 'comedy'] } },
  { id: 'bringing someone from the past (again)-28', name: 'Bringing Someone from the Past (Again)', description: 'Marty accidentally brings someone from the past to the present, leading to hilarious culture clashes.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'past', 'comedy'] } },
  { id: 'a musical mishap in time-28', name: 'A Musical Mishap in Time', description: 'Marty\'s attempts to introduce future music to the 50s (or vice versa) go hilariously wrong.', genres: ['Sci-Fi', 'Comedy', 'Music'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'music', 'comedy'] } },
  { id: 'dealing with the nosy neighbor (again)-28', name: 'Dealing with the Nosy Neighbor (Again)', description: 'Mrs. Kravitz Jr. keeps almost discovering Marty\'s time-traveling secrets.', genres: ['Comedy'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['nosyneighbor', 'secrets', 'comedy'] } },
  { id: 'a romantic entanglement across time-28', name: 'A Romantic Entanglement Across Time', description: 'Marty develops a funny and complicated romantic interest in Penny 1955.', genres: ['Sci-Fi', 'Comedy', 'Romance'], type: 'Story', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'romance', 'comedy'] } },
];
export const teenTimeTravelersAdventures28: Gem[] = [
  { id: 'fixing-a-time-paradox (again)-28', name: 'Fixing a Time Paradox (Again)', description: 'Marty and the Professor have to race against time to fix a paradox Marty accidentally created.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['timetravel', 'paradox', 'comedy'] } },
  { id: 'hiding the time machine (again)-28', name: 'Hiding the Time Machine (Again)', description: 'Marty and the Professor have to come up with increasingly elaborate ways to hide the time machine from prying eyes.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timemachine', 'hiding', 'comedy'] } },
  { id: 'teaching someone from the past about the future-28', name: 'Teaching Someone from the Past About the Future', description: 'Marty has the hilarious task of trying to explain future technology and trends to someone from the 1950s.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'future', 'comedy'] } },
  { id: 'stopping biff (again)-28', name: 'Stopping Biff (Again)', description: 'Marty and the Professor have to foil Biff\'s latest scheme to misuse the time machine.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'bully', 'comedy'] } },
  { id: 'getting zylth back to the future-28', name: 'Getting Zylth Back to the Future', description: 'Marty and the Professor have to figure out how to send Zylth, the future musician, back to his own time.', genres: ['Sci-Fi', 'Comedy', 'Music'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'future', 'comedy'] } },
  { id: 'avoiding the history teacher-28', name: 'Avoiding the History Teacher', description: 'Marty tries to avoid Mr. History, who is starting to suspect something is amiss with Marty\'s knowledge of the past.', genres: ['Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['avoidance', 'school', 'comedy'] } },
  { id: 'helping penny 1955 with a problem-28', name: 'Helping Penny 1955 with a Problem', description: 'Marty uses his knowledge of the future to hilariously help Penny with a problem in 1955.', genres: ['Sci-Fi', 'Comedy', 'Romance'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'helping', 'comedy'] } },
  { id: 'a trip to a different time period (again)-28', name: 'A Trip to a Different Time Period (Again)', description: 'Marty and the Professor accidentally end up in a completely different historical era, leading to fish-out-of-water comedy.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'differentera', 'comedy'] } },
];
export const teenTimeTravelersScenes28: Gem[] = [
  { id: 'garage-invention-scene-28', name: 'Garage Invention Scene', description: 'Marty is tinkering in his garage when he accidentally activates the time machine.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['invention', 'accident', 'timetravel'] }, characterIds: ['inventor-teen-28'] },
  { id: 'professor-explains-time-travel-again-28', name: 'Professor Explains Time Travel (Again)', description: 'Professor Brown enthusiastically tries to explain the complexities of time travel to a bewildered Marty and Jennifer.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['explanation', 'timetravel', 'comedy'] }, characterIds: ['inventor-teen-28', 'eccentric-scientist-28', 'skeptical-girlfriend-28'] },
  { id: 'encounter-with-biff-in-the-past-28', name: 'Encounter with Biff in the Past', description: 'Marty has an awkward and funny encounter with a younger (or older) version of Biff during one of his trips.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'bully', 'awkward'] }, characterIds: ['inventor-teen-28', 'bully-28'] },
  { id: 'zylth-in-the-50s-scene-28', name: 'Zylth in the 50s Scene', description: 'Zylth, the musician from the future, reacts with amusement and confusion to the sights and sounds of the 1950s.', genres: ['Sci-Fi', 'Comedy', 'Music'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['future', 'past', 'comedy'] }, characterIds: ['cool-musician-from-the-future-28'] },
  { id: 'mrs-kravitz-spies-again-28', name: 'Mrs. Kravitz Spies Again', description: 'Mrs. Kravitz Jr. witnesses something strange happening at Marty\'s house and her suspicions grow.', genres: ['Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['nosyneighbor', 'spying', 'comedy'] }, characterIds: ['nosy-neighbor-28'] },
  { id: 'mr-historys-confusion-28', name: 'Mr. History\'s Confusion', description: 'Mr. History questions Marty about some historical detail that Marty got wrong due to his time travels.', genres: ['Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['school', 'history', 'confusion'] }, characterIds: ['inventor-teen-28', 'history-teacher-28'] },
  { id: 'meeting penny 1955-28', name: 'Meeting Penny 1955', description: 'Marty has a funny and slightly charming first encounter with Penny, a teenager from 1955.', genres: ['Sci-Fi', 'Comedy', 'Romance'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'meeting', 'comedy'] }, characterIds: ['inventor-teen-28', 'teenager-from-the-past-28'] },
  { id: 'the-time-machine-malfunctions-again-28', name: 'The Time Machine Malfunctions (Again)', description: 'The time machine hilariously malfunctions during a trip, sending Marty and his companions to an unexpected time or place.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'teen-time-travelers', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['timetravel', 'malfunction', 'comedy'] }, characterIds: ['inventor-teen-28', 'eccentric-scientist-28', 'skeptical-girlfriend-28'] },
];

// --- World 29: "Cold War Comic Book Heroes" (Sci-Fi/Action) ---
export const coldWarHeroesCharacters29: Gem[] = [
  { id: 'patriotic-hero-29', name: 'Captain Patriot', description: 'A super-powered hero fighting for freedom and justice during the Cold War.', genres: ['Sci-Fi', 'Action'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 95, rarity: 'Legendary', level: 5, traits: ['patriotic', 'strong', 'just'] }, casting: [{ id: 'sidekick-29', name: 'Atomic Ally', role: 'Partner', description: 'Captain Patriot\'s energetic and loyal sidekick' }] },
  { id: 'sidekick-29', name: 'Atomic Ally', description: 'Captain Patriot\'s youthful and energetic sidekick with atomic-based powers.', genres: ['Sci-Fi', 'Action'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 85, rarity: 'Epic', level: 4, traits: ['energetic', 'loyal', 'powerful'] }, casting: [] },
  { id: 'soviet-villain-29', name: 'Comrade Coldheart', description: 'A ruthless Soviet villain with ice-based powers.', genres: ['Sci-Fi', 'Action'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 92, rarity: 'Legendary', level: 5, traits: ['ruthless', 'cold', 'powerful'] }, casting: [] },
  { id: 'brilliant-scientist-29', name: 'Dr. Ingenious', description: 'The brilliant scientist who provides Captain Patriot with his gadgets and tech.', genres: ['Sci-Fi'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 80, rarity: 'Rare', level: 3, traits: ['brilliant', 'inventive', 'helpful'] }, casting: [] },
  { id: 'international-spy-29', name: 'Agent Shadow', description: 'A mysterious international spy with ambiguous allegiances.', genres: ['Sci-Fi', 'Action', 'Mystery'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 88, rarity: 'Epic', level: 4, traits: ['stealthy', 'skilled', 'enigmatic'] }, casting: [] },
  { id: 'military-commander-29', name: 'General Ironclad', description: 'The no-nonsense military commander who often works with Captain Patriot.', genres: ['Action'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 78, rarity: 'Uncommon', level: 2, traits: ['stern', 'commanding', 'patriotic'] }, casting: [] },
  { id: 'concerned-citizen-29', name: 'Ms. Liberty', description: 'An ordinary citizen who often gets caught in the heroes\' battles and worries about the world.', genres: ['Drama'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 40, rarity: 'Uncommon', level: 1, traits: ['concerned', 'brave'] }, casting: [] },
  { id: 'another-super-powered-hero-29', name: 'Ms. Marvelous (1950s)', description: 'Another hero with incredible strength and flight capabilities.', genres: ['Sci-Fi', 'Action'], type: 'Character', world: 'cold-war-heroes', attributes: { power: 90, rarity: 'Epic', level: 4, traits: ['strong', 'flying', 'heroic'] }, casting: [] },
];
export const coldWarHeroesStories29: Gem[] = [
  { id: 'the-red-menace-strikes-29', name: 'The Red Menace Strikes', description: 'Comrade Coldheart unleashes a chilling plot to destabilize the free world.', genres: ['Sci-Fi', 'Action'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['villain', 'plot', 'coldwar'] } },
  { id: 'the-mystery-of-the-missing-scientist-29', name: 'The Mystery of the Missing Scientist', description: 'A brilliant scientist with crucial knowledge disappears, and Captain Patriot must find him before the Soviets do.', genres: ['Sci-Fi', 'Action', 'Mystery'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['mystery', 'scientist', 'espionage'] } },
  { id: 'agent-shadows-game-29', name: 'Agent Shadow\'s Game', description: 'Agent Shadow\'s true allegiances are tested as they become entangled in Captain Patriot\'s mission.', genres: ['Sci-Fi', 'Action', 'Mystery'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['spy', 'mystery', 'allegiance'] } },
  { id: 'team-up-with-ms-marvelous-29', name: 'Team-Up with Ms. Marvelous', description: 'Captain Patriot and Ms. Marvelous must join forces to face a threat too big for either of them alone.', genres: ['Sci-Fi', 'Action'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['teamup', 'heroes', 'threat'] } },
  { id: 'dr-ingeniouss-new invention-29', name: 'Dr. Ingenious\'s New Invention', description: 'Dr. Ingenious creates a powerful new gadget that could turn the tide of the Cold War (or accidentally cause disaster).', genres: ['Sci-Fi', 'Action'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['invention', 'technology', 'danger'] } },
  { id: 'a day in the life of atomic ally-29', name: 'A Day in the Life of Atomic Ally', description: 'A story focusing on Atomic Ally\'s perspective and his own heroic deeds.', genres: ['Sci-Fi', 'Action'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['sidekick', 'heroism', 'action'] } },
  { id: 'general ironclads strategy-29', name: 'General Ironclad\'s Strategy', description: 'A story highlighting the military aspects of the Cold War and General Ironclad\'s role in defending freedom.', genres: ['Action'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['military', 'strategy', 'defense'] } },
  { id: 'ms-libertys-perspective-29', name: 'Ms. Liberty\'s Perspective', description: 'A story told from the point of view of an ordinary citizen experiencing the extraordinary events of the Cold War and the heroes\' battles.', genres: ['Drama'], type: 'Story', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['citizen', 'perspective', 'impact'] } },
];
export const coldWarHeroesAdventures29: Gem[] = [
  { id: 'stopping comrade coldhearts latest scheme-29', name: 'Stopping Comrade Coldheart\'s Latest Scheme', description: 'Captain Patriot and Atomic Ally must thwart Comrade Coldheart\'s newest plan for world domination.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['villain', 'stopping', 'action'] } },
  { id: 'rescuing the kidnapped scientist-29', name: 'Rescuing the Kidnapped Scientist', description: 'Captain Patriot goes on a dangerous mission behind enemy lines to rescue the missing scientist.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['rescue', 'mission', 'danger'] } },
  { id: 'uncovering agent shadows true motives-29', name: 'Uncovering Agent Shadow\'s True Motives', description: 'Captain Patriot tries to determine whether Agent Shadow is a friend or foe.', genres: ['Sci-Fi', 'Action', 'Mystery'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['spy', 'motives', 'investigation'] } },
  { id: 'defending against a soviet super weapon-29', name: 'Defending Against a Soviet Super Weapon', description: 'Captain Patriot and Ms. Marvelous must find a way to stop a powerful new weapon developed by the Soviets.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Rare', level: 1, traits: ['superweapon', 'defense', 'teamwork'] } },
  { id: 'testing dr ingeniouss new gadget-29', name: 'Testing Dr. Ingenious\'s New Gadget', description: 'Captain Patriot has to test a potentially unstable new invention from Dr. Ingenious.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['invention', 'testing', 'danger'] } },
  { id: 'atomic ally goes solo-29', name: 'Atomic Ally Goes Solo', description: 'Atomic Ally has to handle a threat on his own while Captain Patriot is away.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['sidekick', 'solo', 'responsibility'] } },
  { id: 'a mission with general ironclad-29', name: 'A Mission with General Ironclad', description: 'Captain Patriot and General Ironclad team up for a more grounded military operation.', genres: ['Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['military', 'teamup', 'strategy'] } },
  { id: 'protecting ms liberty-29', name: 'Protecting Ms. Liberty', description: 'Captain Patriot has to protect Ms. Liberty when she becomes an unexpected target.', genres: ['Sci-Fi', 'Action'], type: 'Adventure', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['protection', 'citizen', 'danger'] } },
];
export const coldWarHeroesScenes29: Gem[] = [
  { id: 'hero-hq-briefing-29', name: 'Hero HQ Briefing', description: 'Captain Patriot and Atomic Ally receive their latest mission briefing from General Ironclad and Dr. Ingenious at their secret headquarters.', genres: ['Sci-Fi', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['briefing', 'mission', 'strategy'] }, characterIds: ['patriotic-hero-29', 'sidekick-29', 'military-commander-29', 'brilliant-scientist-29'] },
  { id: 'villains-lair-scene-29', name: 'Villain\'s Lair Scene', description: 'Comrade Coldheart plots his next move in his icy fortress.', genres: ['Sci-Fi', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['villain', 'plotting', 'lair'] }, characterIds: ['soviet-villain-29'] },
  { id: 'spy-encounter-29', name: 'Spy Encounter', description: 'Captain Patriot has a tense and mysterious encounter with Agent Shadow.', genres: ['Sci-Fi', 'Action', 'Mystery'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['spy', 'encounter', 'tension'] }, characterIds: ['patriotic-hero-29', 'international-spy-29'] },
  { id: 'team-up-moment-29', name: 'Team-Up Moment', description: 'Captain Patriot and Ms. Marvelous meet and agree to work together.', genres: ['Sci-Fi', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['teamup', 'heroes', 'agreement'] }, characterIds: ['patriotic-hero-29', 'another-super-powered-hero-29'] },
  { id: 'testing-the-gadget-scene-29', name: 'Testing the Gadget Scene', description: 'Captain Patriot tries out Dr. Ingenious\'s latest invention, with potentially explosive results.', genres: ['Sci-Fi', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['invention', 'testing', 'danger'] }, characterIds: ['patriotic-hero-29', 'brilliant-scientist-29'] },
  { id: 'atomic-ally-in-action-29', name: 'Atomic Ally in Action', description: 'Atomic Ally uses his powers to save the day in a smaller-scale crisis.', genres: ['Sci-Fi', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['sidekick', 'powers', 'action'] }, characterIds: ['sidekick-29'] },
  { id: 'military-operation-scene-29', name: 'Military Operation Scene', description: 'General Ironclad leads a military operation with Captain Patriot\'s support.', genres: ['Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['military', 'operation', 'strategy'] }, characterIds: ['patriotic-hero-29', 'military-commander-29'] },
  { id: 'citizen-in-peril-29', name: 'Citizen in Peril', description: 'Ms. Liberty finds herself in danger and calls out for help.', genres: ['Drama', 'Action'], type: 'Scene', world: 'cold-war-heroes', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['danger', 'citizen', 'rescue'] }, characterIds: ['concerned-citizen-29'] },
];

// --- World 30: "Mad Scientists' Lab" (Sci-Fi/Comedy) ---
export const madScientistsCharacters30: Gem[] = [
  { id: 'mad-scientist-30', name: 'Professor Phileas Frightful', description: 'A brilliant but eccentric mad scientist working in his cluttered lab in the 1950s.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 70, rarity: 'Epic', level: 2, traits: ['brilliant', 'eccentric', 'clumsy'] }, casting: [{ id: 'loyal-assistant-30', name: 'Igor Igorovich Jr.', role: 'Assistant', description: 'The professor\'s long-suffering but loyal assistant' }] },
  { id: 'loyal-assistant-30', name: 'Igor Igorovich Jr.', description: 'The professor\'s loyal and long-suffering assistant who often bears the brunt of his experiments.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 65, rarity: 'Epic', level: 1, traits: ['loyal', 'patient', 'slightlyscared'] }, casting: [] },
  { id: 'rival-mad-scientist-30', name: 'Dr. Agnes Nefarious', description: 'Professor Frightful\'s equally brilliant and eccentric rival.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 68, rarity: 'Uncommon', level: 2, traits: ['brilliant', 'eccentric', 'competitive'] }, casting: [] },
  { id: 'unexpected-visitor-30', name: 'Mrs. Periwinkle (Again)', description: 'The nosy neighbor from down the street who keeps popping into the lab uninvited.', genres: ['Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 50, rarity: 'Uncommon', level: 1, traits: ['nosy', 'clueless'] }, casting: [] },
  { id: 'experimental-subject-30', name: 'Subject X (a talking chimpanzee)', description: 'A chimpanzee who is the subject of one of the professor\'s more questionable experiments.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 60, rarity: 'Uncommon', level: 1, traits: ['intelligent', 'mischievous', 'talking'] }, casting: [] },
  { id: 'government-inspector-30', name: 'Agent Sterling', description: 'A government inspector who occasionally checks up on the professor\'s potentially dangerous experiments.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 72, rarity: 'Uncommon', level: 2, traits: ['official', 'skeptical', 'easilybamboozled'] }, casting: [] },
  { id: 'invention-gone-wrong-30', name: 'The Self-Sorting Sock Machine (sentient)', description: 'One of the professor\'s inventions that has gained sentience and a slightly grumpy attitude.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 45, rarity: 'Uncommon', level: 1, traits: ['sentient', 'grumpy', 'organized'] }, casting: [] },
  { id: 'time-traveling-salesman-30', name: 'Zorp from the Year 3000', description: 'A salesman from the future who accidentally ends up in the professor\'s lab.', genres: ['Sci-Fi', 'Comedy'], type: 'Character', world: 'mad-scientists-lab', attributes: { power: 58, rarity: 'Uncommon', level: 1, traits: ['futuristic', 'pushy', 'clueless'] }, casting: [] },
];
export const madScientistsStories30: Gem[] = [
  { id: 'the-invention-that-went-wrong (again)-30', name: 'The Invention That Went Wrong (Again)', description: 'One of Professor Frightful\'s brilliant inventions hilariously malfunctions, causing chaos in the lab.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['invention', 'malfunction', 'comedy'] } },
  { id: 'the-rivals-showdown-30', name: 'The Rivals\' Showdown', description: 'Professor Frightful and Dr. Nefarious engage in a comical competition to see who is the better mad scientist.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Epic', level: 0, traits: ['rivalry', 'competition', 'comedy'] } },
  { id: 'igor\'s-day-off (almost)-30', name: 'Igor\'s Day Off (Almost)', description: 'Igor tries to take a day off, but the professor\'s experiments keep pulling him back into the lab.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['assistant', 'dayoff', 'comedy'] } },
  { id: 'mrs-periwinkle-gets-involved-30', name: 'Mrs. Periwinkle Gets Involved', description: 'Mrs. Periwinkle\'s nosiness leads to her accidentally interfering with one of the professor\'s experiments.', genres: ['Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['nosyneighbor', 'interference', 'comedy'] } },
  { id: 'subject-xs-escape-30', name: 'Subject X\'s Escape', description: 'Subject X, the talking chimpanzee, manages to escape from the lab, causing mayhem in the neighborhood.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['animals', 'escape', 'comedy'] } },
  { id: 'the-government-inspection-30', name: 'The Government Inspection', description: 'Agent Sterling pays a visit to the lab, and the professor and Igor have to frantically hide their more questionable inventions.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['inspection', 'hiding', 'comedy'] } },
  { id: 'the-sock-machines-rebellion-30', name: 'The Sock Machine\'s Rebellion', description: 'The sentient sock machine decides it\'s tired of sorting socks and stages a hilarious rebellion.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['sentientmachine', 'rebellion', 'comedy'] } },
  { id: 'zorp-tries-to-sell-future-gadgets-30', name: 'Zorp Tries to Sell Future Gadgets', description: 'Zorp, the time-traveling salesman, tries to sell ridiculously advanced gadgets to the bewildered residents of the 1950s.', genres: ['Sci-Fi', 'Comedy'], type: 'Story', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 0, traits: ['timetravel', 'salesman', 'comedy'] } },
];
export const madScientistsAdventures30: Gem[] = [
  { id: 'creating-a-monster (accidentally)-30', name: 'Creating a Monster (Accidentally)', description: 'Professor Frightful tries to create something helpful but ends up with a surprisingly friendly (or not) monster.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['monster', 'creation', 'comedy'] } },
  { id: 'stealing each others inventions-30', name: 'Stealing Each Other\'s Inventions', description: 'Professor Frightful and Dr. Nefarious try to steal each other\'s latest groundbreaking (and probably dangerous) inventions.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['rivalry', 'theft', 'comedy'] } },
  { id: 'cleaning the lab (disasterously)-30', name: 'Cleaning the Lab (Disasterously)', description: 'The professor decides the lab needs cleaning, a task that inevitably leads to comical accidents and the potential destruction of everything.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['cleaning', 'disaster', 'comedy'] } },
  { id: 'hiding subject x from the government-30', name: 'Hiding Subject X from the Government', description: 'The professor and Igor have to go to extreme (and funny) lengths to hide Subject X from Agent Sterling.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['hiding', 'animals', 'comedy'] } },
  { id: 'fixing the sentient sock machine-30', name: 'Fixing the Sentient Sock Machine', description: 'The professor and Igor try to fix the grumpy and rebellious sentient sock machine before it causes too much trouble.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['sentientmachine', 'fixing', 'comedy'] } },
  { id: 'sending zorp back to the future (maybe)-30', name: 'Sending Zorp Back to the Future (Maybe)', description: 'The professor and Igor try to figure out how to send the clueless Zorp back to the year 3000, with unpredictable results.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'sendingback', 'comedy'] } },
  { id: 'dealing with an unexpected power surge-30', name: 'Dealing with an Unexpected Power Surge', description: 'A sudden power surge in the lab causes all sorts of crazy things to happen to the professor\'s inventions.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['powersurge', 'chaos', 'comedy'] } },
  { id: 'trying to impress a visiting scientist-30', name: 'Trying to Impress a Visiting Scientist', description: 'Professor Frightful tries to impress a renowned visiting scientist, but his experiments keep going hilariously wrong.', genres: ['Sci-Fi', 'Comedy'], type: 'Adventure', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['impressing', 'scientist', 'comedy'] } },
];
export const madScientistsScenes30: Gem[] = [
  { id: 'lab-explosion-scene-30', name: 'Lab Explosion Scene', description: 'One of the professor\'s experiments results in a small (or large) and comical explosion in the lab.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['explosion', 'comedy', 'mess'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30'] },
  { id: 'rivals-meeting-scene-30', name: 'Rivals\' Meeting Scene', description: 'Professor Frightful and Dr. Nefarious have a tense but ultimately funny encounter in the lab (or perhaps at a science convention).', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['rivalry', 'banter', 'comedy'] }, characterIds: ['mad-scientist-30', 'rival-mad-scientist-30'] },
  { id: 'igor-gets-zapped-scene-30', name: 'Igor Gets Zapped Scene', description: 'Igor accidentally gets zapped by one of the professor\'s inventions, with funny side effects.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['accident', 'zapped', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30'] },
  { id: 'mrs-periwinkle-visits-again-30', name: 'Mrs. Periwinkle Visits Again', description: 'Mrs. Periwinkle pops her head into the lab, asking about strange noises or smells.', genres: ['Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['nosyneighbor', 'intrusion', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30', 'unexpected-visitor-30'] },
  { id: 'subject-x-causes-trouble-30', name: 'Subject X Causes Trouble', description: 'Subject X, the talking chimpanzee, does something mischievous in the lab.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['animals', 'mischief', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30', 'experimental-subject-30'] },
  { id: 'agent-sterling-arrives-30', name: 'Agent Sterling Arrives', description: 'Agent Sterling makes an unexpected visit to inspect the lab, looking for anything suspicious.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['inspection', 'hiding', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30', 'government-inspector-30'] },
  { id: 'the-sock-machine-speaks-its-mind-30', name: 'The Sock Machine Speaks Its Mind', description: 'The sentient sock machine makes a grumpy comment to the professor or Igor.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['sentientmachine', 'talking', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30', 'invention-gone-wrong-30'] },
  { id: 'zorp-tries-to-sell-something-30', name: 'Zorp Tries to Sell Something', description: 'Zorp tries to sell a ridiculously advanced (and probably useless) gadget to the professor or Igor.', genres: ['Sci-Fi', 'Comedy'], type: 'Scene', world: 'mad-scientists-lab', attributes: { power: 0, rarity: 'Uncommon', level: 1, traits: ['timetravel', 'salespitch', 'comedy'] }, characterIds: ['mad-scientist-30', 'loyal-assistant-30', 'time-traveling-salesman-30'] },
];

// Continue generating the remaining 34 worlds following the same pattern...

export const boldlandCollections: Collection[] = [
  { id: 'diner-jukebox-characters-17', name: 'Diner Jukebox Dreams Characters', description: 'Characters from the world of Diner Jukebox Dreams.', type: 'CharacterCollection', gems: dinerJukeboxCharacters17 },
  { id: 'diner-jukebox-stories-17', name: 'Diner Jukebox Dreams Stories', description: 'Stories from the world of Diner Jukebox Dreams.', type: 'StoryCollection', gems: dinerJukeboxStories17 },
  { id: 'diner-jukebox-adventures-17', name: 'Diner Jukebox Dreams Adventures', description: 'Adventures in the world of Diner Jukebox Dreams.', type: 'AdventureCollection', gems: dinerJukeboxAdventures17 },
  { id: 'diner-jukebox-scenes-17', name: 'Diner Jukebox Dreams Scenes', description: 'Scenes from the world of Diner Jukebox Dreams.', type: 'SceneCollection', gems: dinerJukeboxScenes17 },
  { id: 'sock-hop-characters-18', name: 'Sock Hop Sweethearts Characters', description: 'Characters from the world of Sock Hop Sweethearts.', type: 'CharacterCollection', gems: sockHopCharacters18 },
  { id: 'sock-hop-stories-18', name: 'Sock Hop Sweethearts Stories', description: 'Stories from the world of Sock Hop Sweethearts.', type: 'StoryCollection', gems: sockHopStories18 },
  { id: 'sock-hop-adventures-18', name: 'Sock Hop Sweethearts Adventures', description: 'Adventures in the world of Sock Hop Sweethearts.', type: 'AdventureCollection', gems: sockHopAdventures18 },
  { id: 'sock-hop-scenes-18', name: 'Sock Hop Sweethearts Scenes', description: 'Scenes from the world of Sock Hop Sweethearts.', type: 'SceneCollection', gems: sockHopScenes18 },
  { id: 'drive-in-diner-characters-19', name: 'Drive-In Diner Delights Characters', description: 'Characters from the world of Drive-In Diner Delights.', type: 'CharacterCollection', gems: driveInDinerCharacters19 },
  { id: 'drive-in-diner-stories-19', name: 'Drive-In Diner Delights Stories', description: 'Stories from the world of Drive-In Diner Delights.', type: 'StoryCollection', gems: driveInDinerStories19 },
  { id: 'drive-in-diner-adventures-19', name: 'Drive-In Diner Delights Adventures', description: 'Adventures in the world of Drive-In Diner Delights.', type: 'AdventureCollection', gems: driveInDinerAdventures19 },
  { id: 'drive-in-diner-scenes-19', name: 'Drive-In Diner Delights Scenes', description: 'Scenes from the world of Drive-In Diner Delights.', type: 'SceneCollection', gems: driveInDinerScenes19 },
  { id: 'teen-detective-characters-20', name: 'Teenage Detective Agency Characters', description: 'Characters from the world of Teenage Detective Agency.', type: 'CharacterCollection', gems: teenDetectiveCharacters20 },
  { id: 'teen-detective-stories-20', name: 'Teenage Detective Agency Stories', description: 'Stories from the world of Teenage Detective Agency.', type: 'StoryCollection', gems: teenDetectiveStories20 },
  { id: 'teen-detective-adventures-20', name: 'Teenage Detective Agency Adventures', description: 'Adventures in the world of Teenage Detective Agency.', type: 'AdventureCollection', gems: teenDetectiveAdventures20 },
  { id: 'teen-detective-scenes-20', name: 'Teenage Detective Agency Scenes', description: 'Scenes from the world of Teenage Detective Agency.', type: 'SceneCollection', gems: teenDetectiveScenes20 },
  { id: 'greaser-rock-characters-21', name: 'Greaser Rock and Roll Nights Characters', description: 'Characters from the world of Greaser Rock and Roll Nights.', type: 'CharacterCollection', gems: greaserRockCharacters21 },
  { id: 'greaser-rock-stories-21', name: 'Greaser Rock and Roll Nights Stories', description: 'Stories from the world of Greaser Rock and Roll Nights.', type: 'StoryCollection', gems: greaserRockStories21 },
  { id: 'greaser-rock-adventures-21', name: 'Greaser Rock and Roll Nights Adventures', description: 'Adventures in the world of Greaser Rock and Roll Nights.', type: 'AdventureCollection', gems: greaserRockAdventures21 },
  { id: 'greaser-rock-scenes-21', name: 'Greaser Rock and Roll Nights Scenes', description: 'Scenes from the world of Greaser Rock and Roll Nights.', type: 'SceneCollection', gems: greaserRockScenes21 },
  { id: 'beat-blues-characters-22', name: 'Beat Generation Blues Characters', description: 'Characters from the world of Beat Generation Blues.', type: 'CharacterCollection', gems: beatBluesCharacters22 },
  { id: 'beat-blues-stories-22', name: 'Beat Generation Blues Stories', description: 'Stories from the world of Beat Generation Blues.', type: 'StoryCollection', gems: beatBluesStories22 },
  { id: 'beat-blues-adventures-22', name: 'Beat Generation Blues Adventures', description: 'Adventures in the world of Beat Generation Blues.', type: 'AdventureCollection', gems: beatBluesAdventures22 },
  { id: 'beat-blues-scenes-22', name: 'Beat Generation Blues Scenes', description: 'Scenes from the world of Beat Generation Blues.', type: 'SceneCollection', gems: beatBluesScenes22 },
  { id: 'suburban-swingers-characters-23', name: 'Suburban Swingers Characters', description: 'Characters from the world of Suburban Swingers.', type: 'CharacterCollection', gems: suburbanSwingersCharacters23 },
  { id: 'suburban-swingers-stories-23', name: 'Suburban Swingers Stories', description: 'Stories from the world of Suburban Swingers.', type: 'StoryCollection', gems: suburbanSwingersStories23 },
  { id: 'suburban-swingers-adventures-23', name: 'Suburban Swingers Adventures', description: 'Adventures in the world of Suburban Swingers.', type: 'AdventureCollection', gems: suburbanSwingersAdventures23 },
  { id: 'suburban-swingers-scenes-23', name: 'Suburban Swingers Scenes', description: 'Scenes from the world of Suburban Swingers.', type: 'SceneCollection', gems: suburbanSwingersScenes23 },
  { id: 'madcap-mods-characters-24', name: 'Madcap Mod Scene Characters', description: 'Characters from the world of Madcap Mod Scene.', type: 'CharacterCollection', gems: madcapModsCharacters24 },
  { id: 'madcap-mods-stories-24', name: 'Madcap Mod Scene Stories', description: 'Stories from the world of Madcap Mod Scene.', type: 'StoryCollection', gems: madcapModsStories24 },
  { id: 'madcap-mods-adventures-24', name: 'Madcap Mod Scene Adventures', description: 'Adventures in the world of Madcap Mod Scene.', type: 'AdventureCollection', gems: madcapModsAdventures24 },
  { id: 'madcap-mods-scenes-24', name: 'Madcap Mod Scene Scenes', description: 'Scenes from the world of Madcap Mod Scene.', type: 'SceneCollection', gems: madcapModsScenes24 },
  { id: 'folk-revolution-characters-25', name: 'Folk Music Revolution Characters', description: 'Characters from the world of Folk Music Revolution.', type: 'CharacterCollection', gems: folkRevolutionCharacters25 },
  { id: 'folk-revolution-stories-25', name: 'Folk Music Revolution Stories', description: 'Stories from the world of Folk Music Revolution.', type: 'StoryCollection', gems: folkRevolutionStories25 },
  { id: 'folk-revolution-adventures-25', name: 'Folk Music Revolution Adventures', description: 'Adventures in the world of Folk Music Revolution.', type: 'AdventureCollection', gems: folkRevolutionAdventures25 },
  { id: 'folk-revolution-scenes-25', name: 'Folk Music Revolution Scenes', description: 'Scenes from the world of Folk Music Revolution.', type: 'SceneCollection', gems: folkRevolutionScenes25 },
  { id: 'surf-rock-characters-26', name: 'Surf Rock Summer Characters', description: 'Characters from the world of Surf Rock Summer.', type: 'CharacterCollection', gems: surfRockCharacters26 },
  { id: 'surf-rock-stories-26', name: 'Surf Rock Summer Stories', description: 'Stories from the world of Surf Rock Summer.', type: 'StoryCollection', gems: surfRockStories26 },
  { id: 'surf-rock-adventures-26', name: 'Surf Rock Summer Adventures', description: 'Adventures in the world of Surf Rock Summer.', type: 'AdventureCollection', gems: surfRockAdventures26 },
  { id: 'surf-rock-scenes-26', name: 'Surf Rock Summer Scenes', description: 'Scenes from the world of Surf Rock Summer.', type: 'SceneCollection', gems: surfRockScenes26 },
  { id: 'small-town-scandals-characters-27', name: 'Small Town Scandals Characters', description: 'Characters from the world of Small Town Scandals.', type: 'CharacterCollection', gems: smallTownScandalsCharacters27 },
  { id: 'small-town-scandals-stories-27', name: 'Small Town Scandals Stories', description: 'Stories from the world of Small Town Scandals.', type: 'StoryCollection', gems: smallTownScandalsStories27 },
  { id: 'small-town-scandals-adventures-27', name: 'Small Town Scandals Adventures', description: 'Adventures in the world of Small Town Scandals.', type: 'AdventureCollection', gems: smallTownScandalsAdventures27 },
  { id: 'small-town-scandals-scenes-27', name: 'Small Town Scandals Scenes', description: 'Scenes from the world of Small Town Scandals.', type: 'SceneCollection', gems: smallTownScandalsScenes27 },
  { id: 'teen-time-travelers-characters-28', name: 'Teenage Time Travelers Characters', description: 'Characters from the world of Teenage Time Travelers.', type: 'CharacterCollection', gems: teenTimeTravelersCharacters28 },
  { id: 'teen-time-travelers-stories-28', name: 'Teenage Time Travelers Stories', description: 'Stories from the world of Teenage Time Travelers.', type: 'StoryCollection', gems: teenTimeTravelersStories28 },
  { id: 'teen-time-travelers-adventures-28', name: 'Teenage Time Travelers Adventures', description: 'Adventures in the world of Teenage Time Travelers.', type: 'AdventureCollection', gems: teenTimeTravelersAdventures28 },
  { id: 'teen-time-travelers-scenes-28', name: 'Teenage Time Travelers Scenes', description: 'Scenes from the world of Teenage Time Travelers.', type: 'SceneCollection', gems: teenTimeTravelersScenes28 },
  { id: 'cold-war-heroes-characters-29', name: 'Cold War Comic Book Heroes Characters', description: 'Characters from the world of Cold War Comic Book Heroes.', type: 'CharacterCollection', gems: coldWarHeroesCharacters29 },
  { id: 'cold-war-heroes-stories-29', name: 'Cold War Comic Book Heroes Stories', description: 'Stories from the world of Cold War Comic Book Heroes.', type: 'StoryCollection', gems: coldWarHeroesStories29 },
  { id: 'cold-war-heroes-adventures-29', name: 'Cold War Comic Book Heroes Adventures', description: 'Adventures in the world of Cold War Comic Book Heroes.', type: 'AdventureCollection', gems: coldWarHeroesAdventures29 },
  { id: 'cold-war-heroes-scenes-29', name: 'Cold War Comic Book Heroes Scenes', description: 'Scenes from the world of Cold War Comic Book Heroes.', type: 'SceneCollection', gems: coldWarHeroesScenes29 },
  { id: 'mad-scientists-characters-30', name: 'Mad Scientists\' Lab Characters', description: 'Characters from the world of Mad Scientists\' Lab.', type: 'CharacterCollection', gems: madScientistsCharacters30 },
  { id: 'mad-scientists-stories-30', name: 'Mad Scientists\' Lab Stories', description: 'Stories from the world of Mad Scientists\' Lab.', type: 'StoryCollection', gems: madScientistsStories30 },
  { id: 'mad-scientists-adventures-30', name: 'Mad Scientists\' Lab Adventures', description: 'Adventures in the world of Mad Scientists\' Lab.', type: 'AdventureCollection', gems: madScientistsAdventures30 },
  { id: 'mad-scientists-scenes-30', name: 'Mad Scientists\' Lab Scenes', description: 'Scenes from the world of Mad Scientists\' Lab.', type: 'SceneCollection', gems: madScientistsScenes30 },
];