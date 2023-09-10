import { pathToArray } from "graphql/jsutils/Path";


export enum FactionType {
  SpaceMarines = 'space_marines',
  Tau = 'tau',
  Eldar =  'eldar',
  DarkEldar = 'dark_eldar',
  Chaos = 'chaos',
  Orks = 'orks',
  AstraMilitarum = 'astra_militarum',

  Necrons = 'necrons',

  Tyranids = 'tyranids',
};

export const AllFactions = [
  FactionType.SpaceMarines,
  FactionType.Tau,
  FactionType.Eldar,
  FactionType.DarkEldar,
  FactionType.Chaos,
  FactionType.Orks,
  FactionType.AstraMilitarum,
  FactionType.Necrons,
  FactionType.Tyranids,
];

export interface Faction {
  id: FactionType;
  name: string;
  allies: FactionType[];
}

export const FactionAllies: { [code in FactionType]: FactionType[] } = {
  [FactionType.SpaceMarines]: [FactionType.AstraMilitarum, FactionType.Tau],
  [FactionType.Tau]: [FactionType.SpaceMarines, FactionType.Eldar],
  [FactionType.Eldar]: [FactionType.Tau, FactionType.DarkEldar],
  [FactionType.DarkEldar]: [FactionType.Eldar, FactionType.Chaos],
  [FactionType.Chaos]: [FactionType.DarkEldar, FactionType.Orks],
  [FactionType.Orks]: [FactionType.Chaos, FactionType.AstraMilitarum],
  [FactionType.AstraMilitarum]: [FactionType.Orks, FactionType.SpaceMarines],
  [FactionType.Necrons]: [FactionType.SpaceMarines, FactionType.AstraMilitarum, FactionType.Orks, FactionType.Chaos, FactionType.DarkEldar, FactionType.Tau],
  [FactionType.Tyranids]: [],
};

export type FactionMap = { [id in FactionType]: Faction };

export interface DeckMeta {
  warlord?: string;
  faction?: string;
  ally_faction?: string;
  [key: string]: string | boolean | number | undefined;
}

export interface Slots {
  [code: string]: number | undefined;
}

export type DeckCardError =
  'too_many_duplicates' |
  'invalid_faction' |
  'invalid_signature' |
  'invalid_loyal' |
  'invalid_ally' |
  'non_army_ally_card';

export type DeckError =
  'invalid_aspects' |
  'too_many_duplicates' |
  'warlord' |
  'faction' |
  'invalid_warlord' |
  'too_many_cards' |
  'too_few_cards' |
  DeckCardError;
