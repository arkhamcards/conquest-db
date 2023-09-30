import { useCallback, useEffect, useMemo } from 'react';

import { CardFragment, useGetAllCardsQuery, useGetCardsUpdatedAtQuery } from '../generated/graphql/apollo-schema';
import { useLocale } from '../lib/TranslationProvider';
import { filter } from 'lodash';
import { CardsMap, useCardsMap } from './hooks';
import { useGraphql } from './GraphqlContext';


export function useCardNeedUpdate(): [boolean, () => void] {
  const { locale } = useLocale();
  const { anonClient } = useGraphql();
  const { data: cardData, refetch, loading, error } = useGetAllCardsQuery({
    variables: {
      locale,
    },
    client: anonClient,
    fetchPolicy: 'cache-only',
  });
  const { data: updatedData, loading: updatedLoading} = useGetCardsUpdatedAtQuery({
    variables: {
      locale,
    },
    client: anonClient,
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!loading && !error) {
      if (!cardData?.cards.length) {
        console.log('Fetching cards');
        // This is our initial fetch of data.
        refetch();
      } else {
        console.log(`Cards are cached.`);
      }
    }
  }, [loading, error, cardData, refetch]);

  const forceRefresh = useCallback(() => {
    refetch({ locale, });
  }, [refetch, locale]);
  const needsUpdate = useMemo(() => {
    const noUpdateData = !updatedLoading && !updatedData?.card_updated_at.length;
    const noCardData = !loading && !cardData?.all_updated_at.length;
    const outOfDate = !!cardData?.all_updated_at.length && !!updatedData?.card_updated_at.length && cardData.all_updated_at[0].updated_at !== updatedData.card_updated_at[0].updated_at;
    return noUpdateData || noCardData || outOfDate;
  }, [updatedLoading, updatedData, cardData, loading]);
  return [
    needsUpdate,
    forceRefresh,
  ];
}

export function useAllCards(): CardFragment[] | undefined {
  const { locale } = useLocale();
  const { anonClient } = useGraphql();
  const { data } = useGetAllCardsQuery({
    variables: {
      locale,
    },
    client: anonClient,
    fetchPolicy: 'cache-only',
  });
  return data?.cards;
}

export function useAllCardsMap(): CardsMap {
  const allCards = useAllCards();
  return useCardsMap(allCards);
}

export function useCards(): CardFragment[] | undefined {
  return useAllCards();
}

export function useWarlordCards(): CardFragment[] | undefined {
  const allCards = useAllCards();
  return useMemo(() => allCards ? filter(allCards, card => card.type_id === 'warlord') : undefined, [allCards]);
}

export function useWarlordCardsMap(): CardsMap {
  const warlordCards = useWarlordCards();
  return useCardsMap(warlordCards);
}