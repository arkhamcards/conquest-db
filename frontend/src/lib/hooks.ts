import { useCallback, useEffect, useMemo } from 'react';
import { forEach } from 'lodash';
import Router,{ useRouter } from 'next/router';
import { t } from '@lingui/macro';

import { useAuth } from './AuthContext';
import { CardFragment, useLikeDeckMutation, useUnlikeDeckMutation } from '../generated/graphql/apollo-schema';
import { DeckError, DeckCardError, FactionMap, FactionType, FactionAllies } from '../types/types';

export function useRequireAuth() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !authUser) {
      const redirect = router.query['redirect'];
      if (redirect) {
        if (typeof redirect === 'string') {
          Router.replace({ pathname: '/login', query: { redirect: redirect }});
        } else {
          Router.replace({ pathname: '/login', query: { redirect: redirect[0] }});
        }
      }
      Router.replace({ pathname: '/login', query: { redirect: router.pathname }});
    }
  }, [loading, authUser, router]);
}

export function usePostLoginRedirect(): string | undefined {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const redirect = useMemo(() => {
    const redirect = router.query['redirect'];
    if (redirect) {
      if (typeof redirect === 'string') {
        return redirect;
      } else {
        return redirect[0];
      }
    }
    return undefined;
  }, [router]);
  useEffect(() => {
    if (!loading && authUser) {
      if (redirect && redirect.startsWith('/')) {
        Router.push(redirect);
      } else {
        Router.push('/');
      }
    }
  }, [loading, authUser, redirect]);
  return redirect;
}
export interface CardsMap {
  [code: string]: CardFragment | undefined;
}
export function useCardsMap(cards?: CardFragment[]): CardsMap {
  return useMemo(() => {
    const r: CardsMap = {};
    forEach(cards, c => {
      if (c.id) {
        r[c.id] = c;
      }
    });
    return r;
  }, [cards]);
}

export function useRouterPathParam<T=string>(
  key: string,
  parse: (s: string) => T | undefined,
  redirect: string = '/'
): [T | undefined, boolean] {
  const router = useRouter();
  const rawParam = router.query[key];
  const id = typeof rawParam === 'string' ? rawParam : '';
  const cleanId = useMemo(() => parse(id), [parse, id]);
  useEffect(() => {
    if (router.isReady && !cleanId) {
      Router.push(redirect);
    }
  }, [cleanId, redirect, router.isReady]);
  return [cleanId, router.isReady];
}

export type DeckErrorTranslations = { [error in DeckError]: string };
export type DeckCardErrorTranslations = { [error in DeckCardError]: string };

export function getDeckErrors(): DeckErrorTranslations {
  return {
    faction: t`You must choose a faction.`,
    too_many_duplicates: t`Too many cards with the same name.`,
    invalid_faction: t`Contains cards that don't match your chosen faction.`,
    invalid_signature: t`Contains cards from other warlord's Signature Squads.`,
    invalid_ally: t`Contains cards that do not match your allied faction.`,
    non_army_ally_card: t`Contains cards from an ally faction that are not Army type.`,
    invalid_loyal: t`Contains loyal cards from your ally faction.`,
    invalid_aspects: t`Chosen aspects are invalid.`,
    warlord: t`You must choose a Warlord card.`,
    invalid_warlord: t`Your Warlord card does not match your chosen faction.`,
    too_many_cards: t`Too many cards.`,
    too_few_cards: t`Not enough cards.`,
  };
}
export function getDeckCardErrors(): DeckCardErrorTranslations {
  return {
    too_many_duplicates: t`There are too many cards with this card's name in your deck.`,
    invalid_faction: t`This card does not match your chosen faction.`,
    invalid_signature: t`This card is from a different warlord's Signature Squads.`,
    invalid_ally: t`This card does not match your allied faction.`,
    non_army_ally_card: t`This ally card is not the Army type.`,
    invalid_loyal: t`This card is loyal to another faction.`,
  };
}

export function getCardText() {
  return {
    REACTION: t`Reaction`,
    INTERRUPT: t`Interrupt`,
    ACTION: t`Action`,
    'COMBAT ACTION': t`Combat Action`,
    'DEPLOY ACTION': t`Deploy Action`,
    'BATTLE ABILITY': t`Battle Ability`,
    'FORCED INTERRUPT': t`Forced Interrupt`,
  };
}

export function getFactionMap(): FactionMap {
  const names = {
    [FactionType.SpaceMarines]: t`Space Marines`,
    [FactionType.Tau]: t`Tau`,
    [FactionType.Eldar]: t`Eldar`,
    [FactionType.DarkEldar]: t`Dark Eldar`,
    [FactionType.Chaos]: t`Chaos`,
    [FactionType.Orks]: t`Orks`,
    [FactionType.AstraMilitarum]: t`Astra Militarum`,
    [FactionType.Necrons]: t`Necrons`,
    [FactionType.Tyranids]: t`Tyanids`,
  };
  const result: any = {};
  forEach(names, (name, id) => {
    result[id] = {
      id,
      name,
      allies: FactionAllies[id as FactionType],
    };
  });
  return result;
}

interface BasicDeck {
  id?: number | null | undefined;
  liked_by_user?: boolean | null | undefined;
}
export type LikeDeck<T extends BasicDeck> = (deck: T) => Promise<string | undefined>;
export function useLikeAction<T extends BasicDeck>(updateCache: (d: T, liked: boolean) => void): LikeDeck<T> {
  const { authUser } = useAuth();
  const [doLike] = useLikeDeckMutation();
  const [doUnlike] = useUnlikeDeckMutation();
  return useCallback(async(deck: T) => {
    if (authUser && deck.id) {
      if (deck.liked_by_user) {
        const r = await doUnlike({
          variables: {
            deckId: deck.id,
            userId: authUser.uid,
          },
        });
        if (r.errors?.length) {
          return r.errors[0].message;
        }
        updateCache(deck, false);
      } else {
        const r = await doLike({
          variables: {
            deckId: deck.id,
          },
        });
        if (r.errors?.length) {
          return r.errors[0].message;
        }
        updateCache(deck, true);
      }
    }
    return undefined;
  }, [doLike, doUnlike, updateCache, authUser]);
}
