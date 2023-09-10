import { concat, forEach, map, flatMap, uniq, sumBy, keys, remove } from 'lodash';
import { t } from '@lingui/macro';

import { DeckCardError, DeckError, DeckMeta, Faction, FactionType, Slots } from '../types/types';
import { CardsMap } from '../lib/hooks';
import { CardFragment, DeckFragment } from '../generated/graphql/apollo-schema';

export interface HeaderItem {
  type: 'header';
  id: string;
  title: string;
  problem: DeckError[] | undefined;
}
export interface CardItem {
  type: 'card';
  id: string;
  card: CardFragment;
  count: number;
  problem: DeckCardError[] | undefined;
}
export interface DescriptionItem {
  type: 'description';
  id: string;
  description: string;
  problem?: undefined;
}
export type Item = HeaderItem | CardItem | DescriptionItem;

export interface DeckChanges {
  addedCards: Slots;
  removedCards: Slots;

  addedCollectionCards: Slots;
  returnedCollectionCards: Slots;
}

function computeDeckChanges(
  slots: Slots,
  sideSlots: Slots,
  previousDeck?: {
    slots?: Slots;
    side_slots?: Slots;
  }
): DeckChanges | undefined {
  if (!previousDeck) {
    return undefined;
  }
  const previousSlots = previousDeck.slots || {};
  const previousSideSlots = previousDeck.side_slots || {};
  const addedCards: Slots = {};
  const removedCards: Slots = {};
  const addedCollectionCards: Slots = {};
  const returnedCollectionCards: Slots = {};

  forEach(uniq(concat(keys(slots), keys(sideSlots), keys(previousDeck.side_slots), keys(previousDeck.slots))), (code) => {
    if (slots[code] === previousSlots[code] && sideSlots[code] === previousSideSlots[code]) {
      // No change.
      return;
    }

    if (((slots[code] || 0) + (sideSlots[code] || 0)) === ((previousSlots[code] || 0) + (previousSideSlots[code] || 0))) {
      // Normal swaps.
      const difference = (slots[code] || 0) - (previousSlots[code] || 0);
      if (difference > 0) {
        addedCards[code] = difference;
      } else {
        removedCards[code] = difference;
      }
    } else {
      // Collection swaps
      const difference = ((slots[code] || 0) + (sideSlots[code] || 0)) - ((previousSlots[code] || 0) + (previousSideSlots[code] || 0));
      if (difference > 0) {
        addedCollectionCards[code] = difference;
      } else {
        returnedCollectionCards[code] = difference;
      }
    }
  });
  return {
    addedCards,
    removedCards,
    addedCollectionCards,
    returnedCollectionCards,
  };
}
export interface ParsedDeck {
  problem: DeckError[] | undefined;
  warlord: CardFragment | undefined;
  faction: FactionType | undefined;
  allyFaction: FactionType | undefined;
  cards: Item[];
  loading: boolean;
  deckSize: number;
}

function getAllyAllowedPredicate(faction: FactionType | undefined, chosenAlly: FactionType | undefined): (card: CardFragment) => boolean {
  switch (faction) {
    case FactionType.Necrons:
      return (card: CardFragment) => card.faction_id !== FactionType.Tyranids;
    case FactionType.Tyranids:
      return (card: CardFragment) => false;
    default:
      return (card: CardFragment) => card.faction_id === chosenAlly;
  }
}
export default function parseDeck(
  deck: DeckFragment,
  meta: DeckMeta,
  slots: Slots,
  sideSlots: Slots,
  cards: CardsMap,
): ParsedDeck {
  const missingCards: string[] = [];
  const warlord = typeof meta.warlord === 'string' ? meta.warlord : '';
  const warlordCard = warlord ? cards[warlord] : undefined;
  const faction = typeof meta.faction === 'string' ? (meta.faction as FactionType) : undefined;
  const chosenAllyFaction = typeof meta.ally_faction === 'string' ? (meta.ally_faction as FactionType) : undefined;
  const allowedAllyFaction = getAllyAllowedPredicate(faction, chosenAllyFaction);

  typeof meta.ally_faction === 'string' ? meta.ally_faction : undefined;

  let items: CardItem[] = flatMap(slots, (count, code) => {
    if (typeof count !== 'number' || count === 0) {
      return [];
    }
    const card = cards[code];
    if (!card) {
      missingCards.push(code);
      return [];
    }
    const problems: DeckCardError[] = [];

    if (count > 3) {
      problems.push('too_many_duplicates');
    }
    if (warlordCard && card.signature_id && warlordCard.signature_id !== card.signature_id) {
      problems.push('invalid_signature');
    }
    if (card.type_id !== 'neutral') {
      if (faction) {
        if (faction === card.faction_id) {
          // From our faction, so its allowed.
        } else if (!allowedAllyFaction(card)) {
          problems.push('invalid_ally');
        } else if (card.type_id !== 'army') {
          problems.push('non_army_ally_card');
        }
      }
    }
    return {
      type: 'card',
      id: code,
      card,
      count,
      problem: problems.length ? problems : undefined,
    };
  });
  const globalProblems: DeckError[] = [];
  const signatureErrors: DeckError[] = [];
  const armyErrors: DeckError[] = [];
  const supportErrors: DeckError[] = [];
  const synapseErrors: DeckError[] = [];
  const attachmentErrors: DeckError[] = [];
  const eventErrors: DeckError[] = [];
  const planetErrors: DeckError[] = [];

  const deckSize = sumBy(items, i => i.type === 'card' ? i.count : 0);
  const signatureCards: Item[] = [
    {
      type: 'header',
      id: 'signature',
      title: t`Signature Squad`,
      problem: signatureErrors.length ? uniq(signatureErrors) : undefined,
    },
  ];
  const armyCards: Item[] = [
    {
      type: 'header',
      id: 'army',
      title: t`Army`,
      problem: armyErrors.length ? uniq(armyErrors) : undefined,
    },
  ];
  const supportCards: Item[] = [
    {
      type: 'header',
      id: 'support',
      title: t`Support`,
      problem: supportErrors.length ? uniq(supportErrors) : undefined,
    },
  ];
  const synapseCards: Item[] = [
    {
      type: 'header',
      id: 'synapse',
      title: t`Synapse`,
      problem: synapseErrors.length ? uniq(synapseErrors) : undefined,
    },
  ];
  const attachmentCards: Item[] = [
    {
      type: 'header',
      id: 'attachment',
      title: t`Attachment`,
      problem: attachmentErrors.length ? uniq(attachmentErrors) : undefined,
    },
  ];
  const eventCards: Item[] = [
    {
      type: 'header',
      id: 'event',
      title: t`Event`,
      problem: eventErrors.length ? uniq(eventErrors) : undefined,
    },
  ];
  const planetCards: Item[] = [
    {
      type: 'header',
      id: 'planet',
      title: t`Planet`,
      problem: planetErrors.length ? uniq(planetErrors) : undefined,
    },
  ];

  forEach(items, i => {
    if (i.type === 'card') {
      if (i.card.signature_id) {
        signatureCards.push(i);
        return;
      }
      switch (i.card.type_id) {
        case 'army': armyCards.push(i); return;
        case 'synapse': synapseCards.push(i); return;
        case 'support': supportCards.push(i); return;
        case 'attachment': attachmentCards.push(i); return;
        case 'event': eventCards.push(i); return;
        case 'planet': planetCards.push(i); return;
      }
    }
  });

  const result = [
    ...signatureCards,
    ...armyCards,
    ...supportCards,
    ...synapseCards,
    ...attachmentCards,
    ...eventCards,
    ...planetCards,
  ];
  return {
    warlord: warlordCard,
    faction,
    allyFaction: chosenAllyFaction,
    problem: uniq([
      ...globalProblems,
      ...flatMap(result, i => i.problem || []),
    ]),
    cards: result,
    loading: missingCards.length > 0,
    deckSize,
  };
}