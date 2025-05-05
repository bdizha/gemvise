import { Collection } from '../../types/gemium';

export const nakalandCollections: Collection[] = [
  {
    id: 'my-hero-academia',
    name: 'My Hero Academia',
    description: 'A world where 80% of the population has superpowers called "Quirks". Follow the story of young heroes in training at U.A. High School.',
    type: 'Licensed',
    gems: [
      {
        id: 'izuku-midoriya',
        name: 'Izuku Midoriya',
        description: 'A determined young hero-in-training who, despite being born without powers, receives the ability One For All from the legendary hero All Might.',
        genres: ['Shonen', 'Action', 'School Life'],
        type: 'Character',
        world: 'nakaland',
        attributes: {
          power: 85,
          rarity: 'Epic',
          level: 1,
          traits: ['determined', 'heroic']
        },
        casting: [
          {
            id: 'all-might',
            name: 'All Might',
            role: 'Mentor',
            description: 'The former #1 hero who passes his power to Izuku'
          },
          {
            id: 'ochaco-uraraka',
            name: 'Ochaco Uraraka',
            role: 'Friend',
            description: 'A student with gravity manipulation powers'
          },
          {
            id: 'katsuki-bakugo',
            name: 'Katsuki Bakugo',
            role: 'Rival',
            description: 'Explosive quirk user and Izuku\'s childhood rival'
          },
          {
            id: 'shoto-todoroki',
            name: 'Shoto Todoroki',
            role: 'Ally',
            description: 'Student with powerful ice and fire abilities'
          }
        ]
      }
    ]
  },
  {
    id: 'naruto',
    name: 'Naruto',
    description: 'Follow the journey of a young ninja with dreams of becoming the Hokage, leader of his village, while mastering powerful jutsu and facing formidable foes.',
    type: 'Licensed',
    gems: [
      {
        id: 'naruto-uzumaki',
        name: 'Naruto Uzumaki',
        description: 'An energetic ninja who dreams of becoming the Hokage of his village. Despite being ostracized for containing the Nine-Tailed Fox, he never gives up on his goals.',
        genres: ['Shonen', 'Action', 'Adventure'],
        type: 'Character',
        world: 'nakaland',
        attributes: {
          power: 95,
          rarity: 'Legendary',
          level: 5,
          traits: ['determined', 'inspiring', 'unpredictable']
        },
        casting: [
          {
            id: 'sasuke-uchiha',
            name: 'Sasuke Uchiha',
            role: 'Rival/Friend',
            description: 'Last surviving Uchiha seeking revenge'
          },
          {
            id: 'sakura-haruno',
            name: 'Sakura Haruno',
            role: 'Teammate',
            description: 'Medical ninja with superhuman strength'
          },
          {
            id: 'kakashi-hatake',
            name: 'Kakashi Hatake',
            role: 'Mentor',
            description: 'Copy Ninja and Team 7 leader'
          }
        ]
      }
    ]
  },
  {
    id: 'one-piece',
    name: 'One Piece',
    description: 'In a world where pirates sail the seas in search of the ultimate treasure, known as "One Piece", a young pirate named Monkey D. Luffy dreams of becoming the Pirate King.',
    type: 'Licensed',
    gems: [
      {
        id: 'monkey-d-luffy',
        name: 'Monkey D. Luffy',
        description: 'A rubber-bodied pirate with an unshakeable spirit and dream of becoming the Pirate King. Known for his unique ability to stretch his body and his unwavering loyalty to his crew.',
        genres: ['Shonen', 'Adventure', 'Action'],
        type: 'Character',
        world: 'nakaland',
        attributes: {
          power: 90,
          rarity: 'Mythic',
          level: 5,
          traits: ['determined', 'loyal', 'carefree']
        },
        casting: [
          {
            id: 'roronoa-zoro',
            name: 'Roronoa Zoro',
            role: 'First Mate',
            description: 'Master swordsman aiming to be the world\'s greatest'
          },
          {
            id: 'nami',
            name: 'Nami',
            role: 'Navigator',
            description: 'Expert navigator and cartographer'
          },
          {
            id: 'sanji',
            name: 'Sanji',
            role: 'Cook',
            description: 'Master chef with powerful kicking techniques'
          }
        ]
      }
    ]
  }
];
