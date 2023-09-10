import { Box, FormControl, FormLabel } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { t } from '@lingui/macro';
import { MultiValue, Select } from 'chakra-react-select';
import { flatMap, map, values, groupBy } from 'lodash';

import PageHeading from '../../components/PageHeading';
import { CardFragment } from '../../generated/graphql/apollo-schema';
import { CardsMap } from '../../lib/hooks';
import SearchDecks from '../../components/SearchDecks';
import { getLocalizationServerSideProps } from '../../lib/Lingui';
interface RoleOption {
  value: string;
  label: string;
  card: CardFragment;
}

function RoleSelect({ roleCards, onChange, roles, specialty }: {
  roleCards: CardsMap;
  roles: string[] | undefined;
  specialty: string[] | undefined;
  onChange: (selection: string[]) => void;
}) {
  const options = useMemo(() => {
    return map(
      groupBy(
        flatMap(values(roleCards), (card) => {
          if (!card || !card.id || !card.name) {
            return [];
          }
          return {
            value: card?.id,
            label: card.name,
            card: card,
          };
        }),
        c => c.card.name
      ),
      (group, set_name) => {
        return {
          label: set_name,
          options: group,
        };
      });
  }, [roleCards]);
  return (
    <FormControl marginBottom={4}>
      <FormLabel>{t`Role`}</FormLabel>
      <Select<RoleOption, true>
        isMulti
        onChange={(event: MultiValue<RoleOption>) => {
          onChange(map(event, x => x.value));
        }}
        placeholder={t`Filter by Role`}
        options={options}
      />
    </FormControl>
  )
}

export default function Search() {
  const [userId, setUserId] = useState<string>();
  const [background, setBackground] = useState<string[]>();
  const [specialty, setSpecialty] = useState<string[]>();
  const [roles, setRole] = useState<string[]>();
  return (
    <Box
      maxW="64rem"
      marginX="auto"
      py={{ base: "3rem", lg: "4rem" }}
      px={{ base: "1rem", lg: "0" }}
    >
      <PageHeading title={t`Deck search`} />
      <form onSubmit={e => {
          e.preventDefault();
        }}>
      </form>
      <SearchDecks
        background={background}
        specialty={specialty}
        roles={roles}
        userId={userId}
        pageSize={5}
        emptyMessage={t`No matching decks.`}
      />
    </Box>
  );
}

export const getServerSideProps = getLocalizationServerSideProps;
