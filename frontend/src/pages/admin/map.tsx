import React, { useMemo, useState } from 'react';
import { Flex, Box, List, ListItem, Select, FormControl, FormLabel, Text } from '@chakra-ui/react';
import { filter, find, map } from 'lodash';
import { t } from '@lingui/macro'

import { useLocale } from '../../lib/TranslationProvider';
import { MapLocation } from '../../types/types';

function LocationRow({ location, cycle }: { location: MapLocation; cycle: string }) {
  const { locations, paths } = useLocale();

  return (
    <ListItem key={location?.id}>
      <Flex direction="column">
        <Flex direction="row" alignItems="center">
          <Text marginLeft={2}>{location.name}</Text>
        </Flex>
        <Flex direction="column" marginLeft={2} paddingLeft={2} borderLeftWidth="1px">
          { map(location.connections, connection => {
            const loc = locations[connection.id];
            if (!loc) {
              return <Text key="connection.id">{connection.id}</Text>;
            }
            if (loc?.cycles && !find(loc.cycles, c => c === cycle)) {
              return null;
            }
            const path = paths[connection.path];
            return (
              <Flex key={connection.id} direction="row" alignItems="center" padding={2}>
                <Text marginLeft={2} marginRight={2}>{loc.name}</Text>
              </Flex>
            );
          }) }
        </Flex>
      </Flex>
    </ListItem>
  );
}

export default function MapPage() {
  const { locations, paths } = useLocale();

  const [cycle, setCycle] = useState('demo');
  const selectedLocations = useMemo(() => {
    return filter(locations, loc => {
      if (loc?.cycles && !find(loc.cycles, c => c === cycle)) {
        return false;
      }
      return true;
    })
  }, [cycle, locations]);
  return (
    <Box
        maxW="64rem"
        marginX="auto"
        py={{ base: "3rem", lg: "4rem" }}
        px={{ base: "1rem", lg: "0" }}
    >
      <FormControl marginBottom={4} isRequired>
        <FormLabel>{t`Campaign`}</FormLabel>
        <Select
          onChange={(event) => setCycle(event.target.value)}
          placeholder={t`Select campaign`}
          value={cycle}
        >
          <option value="demo">{t`Demo`}</option>
          <option value="core">{t`Core`}</option>
        </Select>
      </FormControl>
      <List>
        { map(selectedLocations, loc => !!loc && (
          <LocationRow key={loc.id} location={loc} cycle={cycle} />
        ))}
      </List>
    </Box>
  );
}
