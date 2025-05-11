import { Collection } from '../../../types/gemium';
import { boldlandCharacters } from './characters';
import { boldlandAdventures } from './adventures';
import { boldlandStories } from './stories';
import { boldlandScenes } from './scenes';

export const boldlandCharactersCollection: Collection = {
  id: 'boldland-characters',
  name: 'Boldland Characters',
  description: 'The diverse inhabitants of Boldland, each with unique tales and powers.',
  type: 'CharacterCollection',
  gems: boldlandCharacters,
};

export const boldlandScenesCollection: Collection = {
  id: 'boldland-scenes',
  name: 'Boldland Scenes',
  description: 'Scenes from the adventures in the world of Boldland.',
  type: 'SceneCollection',
  gems: boldlandScenes,
};

export const boldlandCollections: Collection[] = [
  boldlandCharactersCollection,
  {
    id: 'boldland-adventures',
    name: 'Boldland Adventures',
    description: 'Exciting roleplays and adventures awaiting in Boldland.',
    type: 'AdventureCollection',
    gems: boldlandAdventures,
  },
  {
    id: 'boldland-stories',
    name: 'Boldland Stories',
    description: 'Chronicles and narratives from the world of Boldland.',
    type: 'StoryCollection',
    gems: boldlandStories,
  },
  boldlandScenesCollection,
];
