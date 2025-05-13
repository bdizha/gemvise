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
  },
  {
    id: 'cyber-heist-tokyo-grid',
    name: 'Cyber Heist in Tokyo Grid',
    description: 'A high-stakes cyber heist in the sprawling digital metropolis of Tokyo Grid. Assemble your team, breach impenetrable firewalls, and steal critical data from a mega-corporation.',
    genres: ['Cyberpunk', 'Heist', 'Action'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/poses/Pose07.png',
    attributes: {
      rarity: 'Legendary',
      difficulty: 'Hard',
      teamSize: 4,
      traits: ['hacking', 'stealth', 'strategy']
    },
    sceneIds: ['tokyo-heist-scene-1-planning', 'tokyo-heist-scene-2-infiltration'],
    involvedCharacterIds: []
  },
  {
    id: 'boldland-adv-bold-girls',
    name: 'Bold Girls: Marry a Millionaire',
    description: 'Experience high-society intrigue and romance in this Boldland adventure. Navigate glamorous parties, make strategic alliances, and find love and fortune with flair.',
    genres: ['Romance', 'Social Simulation', 'Drama'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/images/world/boldland/adventures/bold-girls-marry-millionaire.png',
    attributes: { scenes: 32, rarity: 'Rare', traits: ['socializing', 'strategy', 'romance'] },
    sceneIds: [],
    involvedCharacterIds: ['boldland-char-boldpup-fox']
  },
  {
    id: 'boldland-adv-royal-bride',
    name: 'Royal Bride: Guided Age Cocktail Parties',
    description: 'Step into the opulent world of royal courtship and high-stakes social maneuvering at exclusive Guided Age cocktail parties. Charm, scheme, and secure your place among Boldland\'s elite.',
    genres: ['Historical Fiction', 'Romance', 'Social Strategy'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/images/world/boldland/adventures/royal-bride-cocktail-parties.png',
    attributes: { scenes: 32, rarity: 'Epic', traits: ['etiquette', 'intrigue', 'negotiation'] },
    sceneIds: [],
    involvedCharacterIds: ['boldland-char-boldpup-fox']
  },
  {
    id: 'boldland-adv-tribal-kombat',
    name: 'Tribal Kombat: Cosmic Drama',
    description: 'Engage in magical fighting and unravel a cosmic drama. Choose your tribe, master mystical powers, and battle for supremacy in an epic confrontation that shakes the foundations of Boldland.',
    genres: ['Fantasy', 'Action', 'Fighting', 'Supernatural'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/images/world/boldland/adventures/tribal-kombat-cosmic-drama.png',
    attributes: { scenes: 32, rarity: 'Legendary', traits: ['magic', 'combat', 'lore'] },
    sceneIds: [],
    involvedCharacterIds: ['boldland-char-boldpup-fox']
  },
  {
    id: 'boldland-adv-a-wink-to-boldland',
    name: 'A Wink to Boldland',
    description: 'Explore a majestic virtual island paradise filled with high fashion, captivating romance, and endless opportunities for adventure. Create your legacy in this unique corner of Boldland.',
    genres: ['Fashion', 'Romance', 'Island Adventure', 'Virtual World'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/images/world/boldland/adventures/a-wink-to-boldland.png',
    attributes: { scenes: 32, rarity: 'Epic', traits: ['exploration', 'fashion-design', 'social-networking'] },
    sceneIds: [],
    involvedCharacterIds: ['boldland-char-boldpup-fox', 'boldland-char-boldepic-ape'] 
  },
  {
    id: 'boldland-adv-bold-and-famous',
    name: 'Bold & Famous: The Rise of Larry Dino',
    description: 'Witness the meteoric rise of Larry Dino, CEO of the world\'s most successful AI robotics company. His innovations have made him a trillionaire, and his robots are everywhere, from household helpers to public servants. Navigate a world shaped by his immense power and technological marvels.',
    genres: ['Sci-Fi', 'Corporate Thriller', 'Futuristic', 'Drama'],
    type: 'Adventure',
    world: 'boldland',
    imageUrl: '/images/world/boldland/adventures/bold-and-famous-larry-dino.png',
    attributes: { scenes: 32, rarity: 'Legendary', traits: ['technology', 'business-strategy', 'ethics'] },
    sceneIds: [],
    involvedCharacterIds: ['boldland-char-boldpup-fox']
  }
];
