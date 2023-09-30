import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Text,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useColorMode,
  AspectRatio,
  SimpleGrid,
} from '@chakra-ui/react';
import { filter, map, range } from 'lodash';
import { t } from '@lingui/macro';

import CardText from './CardText';
import { CardFragment } from '../generated/graphql/apollo-schema';
import { DeckCardError, DeckError, Slots } from '../types/types';
import CoreIcon, { FactionIcon } from '../icons/CoreIcon';
import CardCount from './CardCount';
import DeckProblemComponent, { DeckCardProblemTooltip } from './DeckProblemComponent';
import CardImage, { RoleImage } from './CardImage';
import { SignatureCardList } from './CardList';

interface Props {
  card: CardFragment;
  noImage?: boolean;
  flex?: number;
}

function renderNumber(value: number) {
  if (value === -2) {
    return 'X';
  }
  return value;
}

function FooterInfo({ card }: { card: CardFragment }) {
  return null;
  /*
  return (
    <Flex direction="row" justifyContent="flex-start" alignItems="flex-end">
      <Flex direction="row" justifyContent="flex-end" flex={1}>
        <AspectLevel card={card} />
        <Box padding={1} paddingLeft={2} paddingRight={2} backgroundColor="#888888" flexDirection="column">
          <Text fontSize="s" color="#EEEEEE" fontWeight={400}>
            { card.set_name } - {t`${card.set_position} of ${card.set_size}`}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
  */
}

function Equip({ equip, aspect }: { equip: number; aspect?: string }) {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="row"
      padding={1}
    >
      { map(range(0, equip), idx => (
        <div
          className="equip"
          style={{
            backgroundColor: `var(--chakra-colors-${colorMode}-aspect-${aspect})`,
            borderColor: `var(--chakra-colors-${colorMode}-aspect-${aspect})`
         }}
          key={idx}
        />
      )) }
      { map(range(equip, 5), idx => (
        <div className="equip" key={idx} />
      )) }
    </Flex>
  );
}

function Cost({ cost, ambush }: { cost: number | null | undefined; ambush?: boolean }) {
  const hasCost = cost !== null && cost !== undefined;
  return (
    <Box
      paddingTop={1}
      minWidth={12}
      minHeight={12}
      flexDirection="column"
      justifyContent={hasCost ? 'center' : 'flex-end'}
      alignItems="center"
      marginRight={2}
      position="relative"
    >
      <Box position="absolute" top={0} left={0}>
        <CoreIcon icon="cost" size={48} color="#DDDDDD" />
      </Box>
      <Flex position="absolute" top={0} left={0} direction="column" justifyContent="center" alignItems="center" flex={1} minHeight={12} minWidth={12}>
        { cost !== null && cost !== undefined && (
          <Text
            color={ambush ? 'red' : 'black'}
            fontSize="2xl"
            fontWeight={900}
            textAlign="center"
            lineHeight={1.1}
          >
            { renderNumber(cost) }
          </Text>
        ) }
      </Flex>
    </Box>
  );
}


function CardPresenceAndIcons({ card, mini }: { card: CardFragment; mini?: boolean }) {
  return null;
  /*
  return (
    <Flex direction="row" flex={1} alignItems="flex-start" justifyContent="flex-end" backgroundClip="blue">
      { (card.presence !== undefined && card.presence !== null) && (
        <Box padding={mini ? 0.5 : 1} paddingLeft={mini ? 2 : 3} paddingRight={mini ? 2 : 3} maxW={10} maxH={10} marginRight={1} marginLeft={3} backgroundColor="#622c52">
          <Text color="#FFFFFF" fontSize={mini ? 'm' : 'xl'} fontWeight={900}>
            {card.presence}
          </Text>
        </Box>
      ) }
      <ApproachIcons card={card} mini={mini} />
    </Flex>
  );
  */
}

export function CardHeader({
  card,
  flex,
  miniLevel,
  problem,
  includeSet,
  includeText,
  children,
  hideStats,
  hideFaction,
}: Props & {
  flex?: number;
  miniLevel?: boolean;
  problem?: DeckCardError[];
  includeSet?: boolean;
  includeText?: boolean;
  children?: React.ReactNode;
  hideStats?: boolean;
  isBack?: boolean;
  hideFaction?: boolean;
}) {
  return (
    <Flex direction="row" flex={flex} alignItems="flex-end">
      <Flex direction="row" flex={1} alignItems="flex-start">
          <Flex direction="column">
            { card.type_id === 'warlord' ?
              <Box bgColor="goldenrod" padding={3} mr={2} borderRadius={12}><CoreIcon icon="command" size={36} color="#000000" /></Box> :
              <Cost cost={card.cost} ambush={!!card.real_keywords && card.real_keywords?.indexOf('Ambush') !== -1} />
            }
          </Flex>
        <Flex direction="column"justifyContent="flex-start">
          <Flex direction="column" flex={1}>
            <Flex direction="row">
              { !!card.faction_name && (
                <Text fontSize="sm">{card.faction_name}</Text>
              )}
              { !!card.faction_name && !!card.type_name && <Text ml={2} mr={2} fontSize="sm" color="#BBBBBB">|</Text>}
              { !!card.type_name && (
                <Text fontSize="sm">{card.type_name}</Text>
              )}
            </Flex>
          </Flex>

          <Flex direction="row" justifyContent="space-between">
            <Flex direction="column">
            <Flex direction="row" alignItems="flex-start" flexGrow={1}>
              { !!card.unique && <Box mr={1} mb={1}><CoreIcon icon="unique" size={15} /></Box> }
              <DeckCardProblemTooltip errors={problem}>
                <Text
                  fontSize="lg"
                  fontWeight={600}
                  textDecorationLine={problem ? 'line-through' : undefined}
                  noOfLines={2}
                >
                  { card.name }
                </Text>
              </DeckCardProblemTooltip>

              </Flex>
              { !!card.traits && (
                <Text fontSize="sm" fontStyle="italic" color="#666666">{card.traits}</Text>
              ) }
            </Flex>
          </Flex>
          { children }
          <Flex direction="row">
            { includeText && !!card.text && (
              <Box>
                <CardText noPadding text={card.text} />
              </Box>
            ) }
          </Flex>
        </Flex>
      </Flex>
      { !hideStats ? <CardStats card={card} hideFaction={hideFaction} /> : <CardLoyaltyColumn card={card} />}
    </Flex>
  );
}

function CardAttackHealth({ card, mt, ml, isBack }: { card: CardFragment; mt?: number; ml?: number; isBack?: boolean }) {
  if (card.type_id === 'warlord' || card.type_id === 'army' || card.type_id === 'token') {
    return (
      <Flex direction="column" ml={ml} mt={mt}>
        <AspectRatio ratio={1} width={8} mb={1}>
          <Box bgColor="gray">
            <Text fontSize="lg" fontWeight={900} color="white">{isBack ? card.back_attack : card.attack}</Text>
          </Box>
        </AspectRatio>
        <AspectRatio ratio={1} width={8} mb={1}>
          <Box borderColor="#888888" borderWidth={1} bgColor="white">
            <Text fontSize="lg" fontWeight={900} color="black">{isBack ? card.back_health : card.health}</Text>
          </Box>
        </AspectRatio>
      </Flex>
    );
  }
  return null;
}

function CardIcons({ card, direction }: { card: CardFragment; direction: 'row' | 'column'; }) {
  const numIcons = (card.command_hammers ?? card.shields ?? 0);
  const columns = direction === 'column' && numIcons > 2 ? 2 : numIcons;
  return (
    <SimpleGrid columns={columns} spacing={1}>
      { !!card.command_hammers && (
        <>
          { map(range(0, card.command_hammers), idx => (
            <Box key={idx} width={4}>
              <CoreIcon size={24} icon="command" />
            </Box>
          )) }
        </>
      )}
      { !!card.shields && (
        <>
        { map(range(0, card.shields), idx => <Box key={idx}><Text fontSize="lg">(S)</Text></Box>) }
        </>
      )}
    </SimpleGrid>
  );
}

function CardLoyaltyColumn({ card }: { card: CardFragment }) {
  return (
    <Flex direction="column" alignItems="flex-end" justifyContent="flex-start" alignSelf="flex-start" width={12}>
      { !!card.faction_id && card.faction_id !== 'neutral' && <Box m={1}><FactionIcon faction={card.faction_id} size={18} color="#888888" /></Box> }
      { (card.type_id !== 'warlord' && card.loyalty_id !== 'common') && (
        <Flex direction="column" alignItems="flex-end" mb={2}>
          { card.loyalty_id == 'signature' && <Text fontSize="sm" align="end">{t`Sig Squad`}</Text>}
          { card.loyalty_id === 'loyal' && <Text color="blue" fontSize="md">(L)</Text> }
        </Flex>
      ) }
    </Flex>
  );
}

function CardStats({ card, hideFaction }: { card: CardFragment; hideFaction?: boolean }) {
  return (
    <Flex direction="row" justifyContent="flex-end" alignItems="center">
      <Box mr={2}><CardIcons card={card} direction="column" /></Box>
      <CardAttackHealth card={card} ml={2} />
      { !hideFaction && <CardLoyaltyColumn card={card} /> }
    </Flex>
  );
}

function CardBody({ card, problem, detail, noImage, isBack }: Props & { problem?: DeckError[]; detail?: boolean, noImage?: boolean; isBack?: boolean }) {
  const cardText = useMemo(
    () => filter(isBack ? [t`Bloodied.`, card.keywords, card.back_text] : [card.keywords, card.text], text => !!text).join('\n'),
    [card.text, card.keywords, isBack, card.back_text],
  );
  return (
    <Flex direction="column">
      <DeckProblemComponent card errors={problem} limit={1} />
      <Flex direction="row">
        <Flex direction="column" justifyContent="space-between" alignItems="center" minWidth={12}>
          { !isBack && <CardIcons card={card} direction="column" /> }
          <CardAttackHealth card={card} mt={2} ml={2} isBack={isBack} />
        </Flex>
        <Flex direction="column" flex={1}>
          {!!cardText && <CardText text={cardText} /> }
        </Flex>
        { !noImage && (
          <Flex direction="column" alignItems="flex-start" justifyContent="space-between">
            { !!card?.imagesrc && (
              <Box marginTop={8}>
                <CardImage title={card.name || 'Card'} size="small" url={card.imagesrc} rotate={card.horizontal ?? false} />
              </Box>
            ) }
          </Flex>
        ) }
      </Flex>
      { !!detail && (
        <Flex direction="column" flex={1} alignItems="flex-start" justifyContent="flex-end" margin={2}>
          <FooterInfo card={card} />
        </Flex>
      )}
    </Flex>
  );
}

export default function Card({ card, noImage, flex }: Props) {
  return (
    <Box borderWidth={1} margin={2}>
      <Box padding={2}>
        <CardHeader card={card} hideStats />
      </Box>
      <CardBody card={card} detail noImage={noImage} />
    </Box>
  );
}

type CardRowProps = Props & {
  children?: React.ReactNode;
  problem?: DeckCardError[];
  includeSet?: boolean; onClick?: () => void;
  includeText?: boolean;
  last?: boolean;
  hideFaction?: boolean;
};

export function CardRow({
  card, problem, children, onClick, includeSet, includeText, last, hideFaction,
}: CardRowProps) {
  return (
    <Flex direction="row" padding={2} width="100%" alignItems="flex-start" justifyContent="space-between" borderBottomWidth={last ? undefined : 0.5} borderColor="#BBBBBB">
      <Flex direction="row" flex={1} onClick={onClick} cursor={onClick ? 'pointer' : undefined}>
        <CardHeader
          flex={1}
          card={card}
          miniLevel
          problem={problem}
          includeSet={includeSet}
          includeText={includeText}
          hideFaction={hideFaction}
        />
      </Flex>
      { children }
    </Flex>
  );
}

export type ShowCard = (card: CardFragment, problem?: DeckCardError[]) => void;
export type RenderCardControl = (card: CardFragment, onClose?: () => void) => React.ReactNode;
export function useCardModal(slots?: Slots, renderControl?: RenderCardControl, key: string = 'modal'): [
  ShowCard,
  React.ReactNode,
] {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [card, setCard] = useState<CardFragment>();
  const [problem, setProblem] = useState<DeckCardError[] | undefined>();
  const showModal = useCallback((card: CardFragment, problem?: DeckCardError[]) => {
    setCard(card);
    setProblem(problem);
    onOpen();
  }, [onOpen, setCard, setProblem]);
  const count = (card?.id && slots?.[card.id]) || 0;
  return [
    showModal,
    <Modal key={key} scrollBehavior="inside" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW={['95%', '90%', '90%', '800px']}>
        <ModalHeader>
          <Box paddingRight={8}>
            { !!card && <CardHeader card={card} problem={problem} hideStats /> }
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll">
          <Box paddingBottom={2}>
            {!!card && <CardBody card={card} problem={problem}/> }
            { card?.type_id === 'warlord' && (
                <>
                  <Box bgColor="red.200" mt={2} pt={1} pb={2}>
                    <CardBody card={card} isBack />
                  </Box>
                  <SignatureCardList warlord={card} />
                </>
            ) }
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex flex={1} direction="row" alignItems="flex-end" justifyContent="space-between">
            { !!card && <FooterInfo card={card} /> }
            { !!card && card.type_id !== 'role' && !!slots && (
              renderControl?.(card, onClose) || <CardCount count={count} />
            ) }
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ];
}