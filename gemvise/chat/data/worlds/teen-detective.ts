import { PuzzlePieceIcon } from '@heroicons/react/24/solid';
import { World, Gem } from '../worldData';

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
  { id: 'the-reveal-at-the-police-station-20', name: 'The Reveal at the Police Station', description: 'Scooter and Penny present their findings to Chief Hardington.', genres: ['Mystery', 'Comedy'], type: 'Scene', world: 'teen-detective', attributes: { power: 0, rarity: 'Epic', level: 1, traits: ['reveal', 'solution', 'authority'] }, characterIds: ['leader-detective-20', 'sidekick-detective-20', 'the-police-chief-20', 'the-culprit-20'] }, // Assuming a generic 'the-culprit-20' for now
];

export const teenDetectiveData: World = {
  id: 'teen-detective',
  name: 'Teenage Detective Agency',
  href: '/world/teen-detective',
  imageUrl: '/images/world/teen-detective.png',
  icon: PuzzlePieceIcon,
  tags: ['mystery', 'comedy', 'teen', '1950s', 'detective'],
  description: 'Join a plucky gang of teenage sleuths in the 1950s as they solve baffling local mysteries, from missing pets to stolen school trophies, all while navigating the dramas of high school and outsmarting their rivals.',
  shortDescription: 'Solve mysteries with a teenage detective agency in the 1950s.',
  longDescription: 'Step into the shoes of Scooter Sleuth and Penny Pincher, the dynamic duo leading the Teenage Detective Agency. Set in a charming 1950s town, every corner holds a potential clue and every quirky resident a possible suspect. From the case of Mrs. Periwinkle\'s missing cat to the perplexing riddle of the rolling pin, no mystery is too small or too strange. Use your wits, gather clues, interview eccentric witnesses, and maybe even use a few of Penny\'s homemade gadgets to crack the case. But watch out for Reginald "The Know-It-All," your pompous rival who\'s always trying to beat you to the punch! Perfect for fans of classic detective stories with a comedic, nostalgic twist.',
  tone: 'Lighthearted and Humorous',
  genres: ['Mystery', 'Comedy'],
  themes: ['Problem Solving', 'Friendship', 'Nostalgia', 'Youthful Adventure'],
  vibes: ['Wholesome Fun', 'Intriguing Puzzles', 'Retro Charm'],
  eras: ['1950s'],
  locations: ['Small Town', 'High School', 'Secret Headquarters'],
  characters: teenDetectiveCharacters20,
  stories: teenDetectiveStories20,
  adventures: teenDetectiveAdventures20,
  scenes: teenDetectiveScenes20,
};
