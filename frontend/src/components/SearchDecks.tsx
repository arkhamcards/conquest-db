import React, { useCallback, useState } from 'react';
import { Heading } from '@chakra-ui/react';

import { SearchDeckFragment, SearchDecksQueryVariables, useSearchDecksLazyQuery, useSearchDecksQuery } from '../generated/graphql/apollo-schema';
import { CardsMap } from '../lib/hooks';
import { AuthUser } from '../lib/useFirebaseAuth';
import { SearchDeckList } from './DeckList';
import PaginationWrapper from './PaginationWrapper';

interface Props {
  userId?: string;
  background?: string[];
  specialty?: string[];
  roles?: string[];
  pageSize?: number;
  emptyMessage: string;
}

export default function SearchDecks({
  emptyMessage,
  pageSize = 10,
  userId, background, specialty, roles,
}: Props) {
  const [fetchMore, data] = useSearchDecksLazyQuery({
    variables: {},
  });
  const [decks, setDecks] = useState<SearchDeckFragment[]>();
  const [total, setTotal] = useState<number>(pageSize);
  const doSearchDecks = useCallback(async(authUser: AuthUser | undefined, pageSize: number, offset: number): Promise<SearchDeckFragment[]> => {
    const variables: SearchDecksQueryVariables = {
      limit: pageSize,
      offset,
    };
    if (userId) {
      variables.userId = userId;
    }
    if (background?.length) {
      variables.background = `{${background.join(',')}}`;
    }
    if (specialty?.length) {
      variables.specialty = `{${specialty.join(',')}}`;
    }
    if (roles?.length) {
      variables.role = `{${roles.join(',')}}`;
    }
    const r = await fetchMore({ variables });
    const decks = r.data?.decks || [];
    if (decks?.length === pageSize) {
      setTotal(offset + pageSize + 1);
    } else {
      setTotal(offset + decks.length);
    }
    setDecks(decks);
    return decks;
  }, [fetchMore, setDecks, setTotal, userId, background, specialty, roles]);


  return (
    <PaginationWrapper
      total={total}
      fetchData={doSearchDecks}
      data={decks}
      pageSize={pageSize}
    >
      { (decks: SearchDeckFragment[]) => (
        <SearchDeckList
          decks={decks}
          emptyMessage={emptyMessage}
        />
      ) }
    </PaginationWrapper>
  );
}
