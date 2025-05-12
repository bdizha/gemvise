import {
  SparklesIcon,
  MusicalNoteIcon,
  BriefcaseIcon,
  ShieldCheckIcon, // Used as a replacement for a potential UserSecretIcon
  SunIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  UsersIcon,
  MegaphoneIcon,
  StarIcon,
  FilmIcon,
  SpeakerWaveIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ClockIcon, // Added for Teenage Time Travelers world
} from '@heroicons/react/24/outline';

import { nakaiData } from './worlds/nakai';
import { boldlandData } from './worlds/boldland';
import { naimlandData } from './worlds/naimland';
import { spaceumData } from './worlds/spaceum';
import { world05Data } from './worlds/world05';
import { world06Data } from './worlds/world06';
import { world07Data } from './worlds/world07';
import { world08Data } from './worlds/world08';
import { world09Data } from './worlds/world09';
import { world10Data } from './worlds/world10';
import { world11Data } from './worlds/world11';
import { world12Data } from './worlds/world12';
import { world13Data } from './worlds/world13';
import { world14Data } from './worlds/world14';
import { world15Data } from './worlds/world15';
import { world16Data } from './worlds/world16';
import { hollywoodDreamsData } from './worlds/hollywood-dreams';
import { motownMagicData } from './worlds/motown-magic';
import { madMenEraData } from './worlds/mad-men-era';
import { coldWarSpiesData } from './worlds/cold-war-spies';
import { surfsideSixtiesData } from './worlds/surfside-sixties';
import { greaserGangRumbleData } from './worlds/greaser-gang-rumble';
import { beatnikCafeData } from './worlds/beatnik-cafe';
import { suburbanSecretsData } from './worlds/suburban-secrets';
import { spaceRaceRomanceData } from './worlds/space-race-romance';
import { britishInvasionData } from './worlds/british-invasion';
import { vietnamProtestData } from './worlds/vietnam-protest';
import { summerOfLoveData } from './worlds/summer-of-love';
import { girlGroupGlamourData } from './worlds/girl-group-glamour';
import { madcapModSceneData } from './worlds/madcap-mod-scene';
import { teenTimeTravelersData } from './worlds/teen-time-travelers';
import { modRockerRivalryData } from './worlds/mod-rocker-rivalry';
import { driveInMovieNightData } from './worlds/drive-in-movie-night';
import { smallTownSockHopData } from './worlds/small-town-sock-hop';
import { dinerJukeboxDreamsData } from './worlds/diner-jukebox-dreams';
import { sockHopSweetheartsData } from './worlds/sock-hop-sweethearts';
import { driveInDinerDelightsData } from './worlds/drive-in-diner-delights';
import { teenDetectiveAgencyData } from './worlds/teen-detective-agency';
import { greaserRockAndRollNightsData } from './worlds/greaser-rock-and-roll-nights';
import { beatGenerationBluesData } from './worlds/beat-generation-blues';
import { suburbanSwingersData } from './worlds/suburban-swingers';
import { apolloMoonLandingData } from './worlds/apollo-moon-landing';
import { woodstockVibesData } from './worlds/woodstock-vibes';
import { discoInfernoData } from './worlds/disco-inferno-nights';
import { punkRockUprisingData } from './worlds/punk-rock-uprising';
import { hollywoodDreamsNewData } from './worlds/hollywood-dreams-new';
import { motownMagicNewData } from './worlds/motown-magic-new';
import { madMenEraNewData } from './worlds/mad-men-era-new';
import { coldWarSpiesNewData } from './worlds/cold-war-spies-new';
import { surfsideSixtiesNewData } from './worlds/surfside-sixties-new';
import { greaserGangRumbleNewData } from './worlds/greaser-gang-rumble-new';
import { beatnikCafeNewData } from './worlds/beatnik-cafe-new';
import { spaceRaceRomanceNewData } from './worlds/space-race-romance-new';
import { britishInvasionNewData } from './worlds/british-invasion-new';
import { vietnamProtestNewData } from './worlds/vietnam-protest-new';
import { summerOfLoveNewData } from './worlds/summer-of-love-new';
import { driveInMovieNightNewData } from './worlds/drive-in-movie-night-new';
import { smallTownSockHopNewData } from './worlds/small-town-sock-hop-new';
import { teenDetectiveData } from './worlds/teen-detective';
import { dinerJukeboxData } from './worlds/diner-jukebox';
import { sockHopData } from './worlds/sock-hop';
import { driveInDinerData } from './worlds/drive-in-diner';
import { folkMusicRevolutionData } from './worlds/folk-music-revolution';

// Import Gem type
import { Gem } from '@/types/gemium';

// Define a type for Heroicon components for cleaner interface definition
type HeroIconType = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & { title?: string | undefined; titleId?: string | undefined; } & React.RefAttributes<SVGSVGElement>>;

export interface World {
  id: string;
  name: string;
  href: string;
  imageUrl: string;
  icon: string | HeroIconType; // Can be a path string or a Heroicon component
  tags: string[];
  description: string;
  shortDescription: string;
  longDescription: string;
  tone: string[];
  genres: string[];
  themes: string[];
  vibes: string[];
  eras: string[];
  locations: string[];
  // Optional Gem arrays
  characters?: Gem[];
  stories?: Gem[];
  adventures?: Gem[];
  scenes?: Gem[];
}

export const worlds: World[] = [
  nakaiData,
  boldlandData,
  naimlandData,
  spaceumData,
  world05Data,
  world06Data,
  world07Data,
  world08Data,
  world09Data,
  world10Data,
  world11Data,
  world12Data,
  world13Data,
  world14Data,
  world15Data,
  world16Data,
  hollywoodDreamsData,
  motownMagicData,
  madMenEraData,
  coldWarSpiesData,
  surfsideSixtiesData,
  greaserGangRumbleData,
  beatnikCafeData,
  suburbanSecretsData,
  spaceRaceRomanceData,
  britishInvasionData,
  vietnamProtestData,
  summerOfLoveData,
  girlGroupGlamourData,
  madcapModSceneData,
  teenTimeTravelersData,
  modRockerRivalryData,
  driveInMovieNightData,
  smallTownSockHopData,
  dinerJukeboxDreamsData,
  sockHopSweetheartsData,
  driveInDinerDelightsData,
  teenDetectiveAgencyData,
  greaserRockAndRollNightsData,
  beatGenerationBluesData,
  suburbanSwingersData,
  apolloMoonLandingData,
  woodstockVibesData,
  discoInfernoData,
  punkRockUprisingData,
  hollywoodDreamsNewData,
  motownMagicNewData,
  madMenEraNewData,
  coldWarSpiesNewData,
  surfsideSixtiesNewData,
  greaserGangRumbleNewData,
  beatnikCafeNewData,
  spaceRaceRomanceNewData,
  britishInvasionNewData,
  vietnamProtestNewData,
  summerOfLoveNewData,
  girlGroupGlamourData,
  driveInMovieNightNewData,
  smallTownSockHopNewData,
  teenDetectiveData,
  dinerJukeboxData,
  sockHopData,
  driveInDinerData,
  folkMusicRevolutionData,
];

// Example of how you might want to structure character data if needed within this file
