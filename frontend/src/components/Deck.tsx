import React, { useCallback, useMemo } from 'react';
import {
  Text,
  Flex,
  ListItem,
  TextProps,
  useColorMode,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { filter } from 'lodash';
import { t } from '@lingui/macro';

import { CardFragment, DeckFragment, SearchDeckFragment } from '../generated/graphql/apollo-schema';
import { DeckCardError, FactionType } from '../types/types';
import { CardsMap } from '../lib/hooks';
import { CardRow, ShowCard } from './Card';
import ListHeader from './ListHeader';
import CardCount from './CardCount';
import DeckProblemComponent from './DeckProblemComponent';
import { RoleImage } from './CardImage';
import { CardItem, Item, ParsedDeck } from '../lib/parseDeck';
import { useTheme } from '../lib/ThemeContext';
import { useLocale } from '../lib/TranslationProvider';


export function DeckItemComponent({ item, showCard }: { item: Item; showCard: ShowCard }) {
  const { colorMode } = useColorMode();
  switch (item.type) {
    case 'header':
      return <ListHeader key={item.title} title={item.title} problem={item.problem} />;
    case 'card':
      return <DeckCardRow key={item.card.id} item={item} showCard={showCard} />;
    case 'description':
      return (
        <ListItem padding={2}>
          <Flex direction="row" alignItems="center">
            <InfoIcon marginRight={2} boxSize="24px" color={`${colorMode}.lightText`} />
            <Text fontSize="md">{item.description}</Text>
          </Flex>
        </ListItem>
      );
  }
}

function DeckCardRow({ item, showCard }: { item: CardItem; showCard: (card: CardFragment, problem?: DeckCardError[]) => void }) {
  const onClick = useCallback(() => showCard(item.card, item.problem), [item, showCard]);
  return (
    <ListItem key={item.card.id} >
      <Flex direction="row" alignItems="flex-start" justifyContent="flex-start">
        <CardRow card={item.card} problem={item.problem} onClick={onClick} hideFaction>
          <CardCount count={item.card.signature_id ? (item.card.quantity ?? 3) : item.count} marginLeft={2} />
        </CardRow>
      </Flex>
    </ListItem>
  );
}

export function DeckCountLine({ parsedDeck }: { parsedDeck: ParsedDeck }) {
  const deckCountLine = parsedDeck.deckSize === 30 ? t`30 Cards` : t`${parsedDeck.deckSize} / 30 Cards`;
  return (
    <Text>
      { filter([deckCountLine], x => !!x).join(' ') }
    </Text>
  );
}

export function DeckDescription({ deck, ...textProps }: {
  deck: DeckFragment | SearchDeckFragment;
} & Omit<TextProps, 'text'>) {
  const { factions } = useLocale();
  const faction: string | undefined = typeof deck.meta.faction === 'string' ? deck.meta.faction : undefined;
  const ally_faction: string | undefined = typeof deck.meta.ally_faction === 'string' ? deck.meta.ally_faction : undefined;
  const description = useMemo(() => {
    return filter([
      faction,
      ally_faction,
    ], x => !!x).map((f) => factions[f as FactionType].name).join(' - ');
  }, [faction, ally_faction, factions]);
  return <Text {...textProps}>{description}</Text>
}

export function CompactDeckRow({ deck, roleCards, onClick, children, buttons, href }: {
  deck: DeckFragment;
  roleCards: CardsMap;
  onClick?: (deck: DeckFragment) => void;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
  href?: string;
}) {
  const role = useMemo(() => {
    return typeof deck.meta.role === 'string' && roleCards[deck.meta.role];
  }, [deck.meta, roleCards]);
  const handleClick = useCallback(() => {
    onClick?.(deck);
  }, [onClick, deck]);
  const { colors } = useTheme();
  return (
    <Flex
      flex={1}
      paddingTop={2}
      paddingBottom={2}
      borderBottomColor={colors.divider}
      borderBottomWidth="1px"
      onClick={onClick ? handleClick : undefined}
      cursor={onClick ? 'pointer' : undefined}
      flexDirection="column"
    >
      <Flex direction="row">
        <Flex direction="column" flex={1}>
          { href ? (
            <Text fontSize={['md', 'md', 'lg']} as={NextLink} href={href}>{deck.name}</Text>
          ) : (
            <Text fontSize={['md', 'md', 'lg']}>{deck.name}</Text>
          ) }
          { children }
          <DeckDescription fontSize={['xs', 's', 'm']} deck={deck} />
          { !!deck.meta.problem && <DeckProblemComponent errors={deck.meta.problem} limit={1} /> }
        </Flex>
      </Flex>
      { buttons }
    </Flex>
  );
}
