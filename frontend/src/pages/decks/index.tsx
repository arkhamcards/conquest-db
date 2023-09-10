import React, { useCallback } from 'react';
import { t } from '@lingui/macro';
import { Box, Button } from '@chakra-ui/react';

import { useRequireAuth } from '../../lib/hooks';
import DeckList from '../../components/DeckList';
import { DeckFragment, useGetMyDecksQuery, useGetMyDecksTotalQuery } from '../../generated/graphql/apollo-schema';
import PageHeading from '../../components/PageHeading';
import { useAuth } from '../../lib/AuthContext';
import PaginationWrapper from '../../components/PaginationWrapper';
import { AuthUser } from '../../lib/useFirebaseAuth';
import { useWarlordCardsMap } from '../../lib/cards';
import { useNewDeckModal } from '../../components/DeckEdit';
import { getLocalizationServerSideProps } from '../../lib/Lingui';

export default function DecksPage() {
  useRequireAuth();
  const { authUser } = useAuth();
  const { data: totalDecks } = useGetMyDecksTotalQuery({
    variables: {
      userId: authUser?.uid || '',
    },
    skip: !authUser,
  });
  const warlordCards = useWarlordCardsMap();

  const { data, fetchMore } = useGetMyDecksQuery({
    variables: {
      userId: authUser?.uid || '',
      limit: 10,
      offset: 0,
    },
    skip: !authUser?.uid,
  });

  const fetchDecks = useCallback(async(authUser: AuthUser | undefined, pageSize: number, offset: number): Promise<DeckFragment[]> => {
    if (authUser) {
      const data = await fetchMore({
        variables: {
          userId: authUser.uid,
          limit: pageSize,
          offset,
        },
        updateQuery(_, { fetchMoreResult }) {
          return fetchMoreResult;
        },
      });
      return data.data.decks || [];
    }
    return [];
  }, [fetchMore]);
  const [showNewDeck, newDeckModal] = useNewDeckModal(warlordCards);
  return (
    <>
      <Box
        maxW="64rem"
        marginX="auto"
        py={{ base: "3rem", lg: "4rem" }}
        px={{ base: "1rem", lg: "0" }}
      >
        <PageHeading title={t`My Decks`}>
          { !!authUser && <Button onClick={showNewDeck}>{t`New deck`}</Button> }
        </PageHeading>
        <PaginationWrapper<DeckFragment>
          total={totalDecks?.total.aggregate?.count}
          fetchData={fetchDecks}
          data={data?.decks}
        >
          { (decks: DeckFragment[], refetch) => (
            <DeckList
              decks={decks}
              refetch={refetch}
            />
          ) }
        </PaginationWrapper>
      </Box>
      { newDeckModal }
    </>
  );
}

export const getServerSideProps = getLocalizationServerSideProps;
