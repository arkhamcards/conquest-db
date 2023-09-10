import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  FormControl,
  FormLabel,
  Stack,
  Radio,
  Select,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  SimpleGrid,
  ButtonGroup,
  RadioGroup,
  useColorModeValue,
  Textarea,
  Tooltip,
} from '@chakra-ui/react';
import Router from 'next/router';
import NextLink from 'next/link';
import { find, keys, union, omit, forEach, map, flatMap, pick, values, sortBy } from 'lodash';
import { t } from '@lingui/macro';

import { CardFragment, DeckDetailFragment, DeckFragment, useCreateDeckMutation, useSaveDeckDescriptionMutation, useSaveDeckMutation } from '../generated/graphql/apollo-schema';
import { useAuth } from '../lib/AuthContext';
import AspectCounter from './AspectCounter';
import { AllFactions, DeckCardError, DeckError, DeckMeta, FactionAllies, FactionType, Slots } from '../types/types';
import { CardsMap, CategoryTranslation } from '../lib/hooks';
import { CardRow, ShowCard, useCardModal } from './Card';
import { SimpleCardList } from './CardList';
import { CountControls, IncDecCountControls } from './CardCount';
import DeckProblemComponent from './DeckProblemComponent';
import EditableTextInput from './EditableTextInput';
import SolidButton from './SolidButton';
import { useLocale } from '../lib/TranslationProvider';
import { DeckCountLine, DeckItemComponent } from './Deck';
import { WarningIcon } from '@chakra-ui/icons';
import parseDeck, { ParsedDeck } from '../lib/parseDeck';
import DeckDescriptionView from './DeckDescriptionView';
import CoreIcon from '../icons/CoreIcon';
import SubmitButton from './SubmitButton';
import { useTheme } from '../lib/ThemeContext';
import { FaInbox } from 'react-icons/fa';

interface Props {
  deck: DeckDetailFragment;
  cards: CardsMap;
}

function WarlordRadioChooser({ faction, cards, warlord, onChange }: { faction: string | undefined; cards: CardsMap; warlord: string | undefined; onChange: (role: string) => void }) {
  const possibleRoles = useMemo(() => {
    return flatMap(values(cards), c => !!c && c.type_id === 'warlord' && c.faction_id === faction ? c : [])
  }, [cards, faction])

  return (
    <RadioGroup defaultValue={warlord} onChange={onChange}>
      <Stack>
        { map(possibleRoles, (roleCard, idx) => (
          <Radio key={roleCard.id} value={roleCard.id || ''}>
            <CardRow
              card={roleCard}
              includeText
              last={idx === possibleRoles.length - 1}
            />
          </Radio>
        )) }
      </Stack>
    </RadioGroup>
  );
}

interface FactionChoice {
  id: 'faction' | 'ally_faction';
  name: string;
  options: FactionType[];
}

function MetaControls({ meta, setMeta, disabled, hideLabels }: { meta: DeckMeta; setMeta: (meta: DeckMeta) => void; disabled?: boolean; hideLabels?: boolean }) {
  const { factions } = useLocale();
  const setMetaField = useCallback((category: string | undefined | null, value: string) => {
    if (category) {
      const newMeta: DeckMeta = {
        ...meta,
        [category]: value,
      };
      if (category === 'faction' && meta.faction !== newMeta.faction) {
        newMeta.warlord = undefined;
      }
      setMeta(newMeta);
    }
  }, [setMeta, meta]);
  const options: FactionChoice[] = useMemo(() => {
    const result: FactionChoice[] = [{
      id: 'faction',
      name: t`Faction`,
      options: AllFactions,
    }];
    if (meta.faction) {
      result.push({
        id: 'ally_faction',
        name: t`Ally`,
        options: FactionAllies[meta.faction as FactionType] ?? [],
      });
    }
    return result;
  }, [factions, meta.faction]);
  return (
    <>
      { map(options, ({ options, id, name }) => {
        if (!options || !options.length) {
          return null;
        }
        const value = meta[id] || undefined;
        return (
          <FormControl marginBottom={4} key={id} isRequired={!hideLabels}>
            <FormLabel>{name}</FormLabel>
            <Select
              onChange={(event) => setMetaField(id, event.target.value)}
              placeholder={t`Choose ${name}`}
              value={typeof value === 'string' ? value : undefined}
              disabled={disabled}
            >
              { map(options, (factionId) => (
                <option key={factionId} value={factionId}>{factions[factionId].name}</option>
              ))}
            </Select>
          </FormControl>
        );
      })}
    </>
  );
}



function useChooseWarlordModal(
  parsedDeck: ParsedDeck,
  cards: CardsMap,
  showCard: ShowCard,
  setWarlord?: (warlord: string) => void
): [() => void, React.ReactNode] {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onChange = useCallback((role: string) => {
    setWarlord?.(role);
    onClose();
  }, [setWarlord, onClose]);
  const showRole = useCallback(() => !!parsedDeck.warlord && showCard(parsedDeck.warlord), [showCard, parsedDeck.warlord])
  if (!setWarlord) {
    return [showRole, null];
  }
  return [
    onOpen,
    <Modal key="warlord-modal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading>{t`Choose warlord`}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <WarlordRadioChooser
            faction={parsedDeck.faction}
            cards={cards}
            warlord={parsedDeck.warlord?.id || undefined}
            onChange={onChange}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  ];
}

const icons = ['conflict', 'connection', 'reason', 'exploration', 'harm', 'progress', 'ranger', 'reshuffle', 'guide', 'per_ranger', 'sun', 'crest', 'mountain',
'conditional', 'AWA', 'FIT', 'SPI', 'FOC']
function EditDescriptionTab({ deck }: { deck: DeckFragment }) {
  const { isOpen: editing, onOpen, onClose } = useDisclosure();
  const [saveDescription] = useSaveDeckDescriptionMutation();
  const [liveDescription, setLiveDescription] = useState(deck.description || '');

  const doneEditing = useCallback(async() => {
    const r = await saveDescription({
      variables: {
        id: deck.id,
        description: liveDescription,
      }
    })
    if (r.errors?.length) {
      return r.errors[0].message;
    }
    onClose();
  }, [onClose, liveDescription, saveDescription, deck.id]);
  useEffect(() => {
    setLiveDescription(deck.description || '');
  }, [deck.description, setLiveDescription]);
  const color = useColorModeValue('black', 'white');
  if (editing) {
    return (
      <>
        <SubmitButton color="blue" marginBottom={2} onSubmit={doneEditing}>{t`Done editing`}</SubmitButton>
        <Textarea
          marginBottom={2}
          minH="50vh"
          value={liveDescription}
          onChange={(e) => setLiveDescription(e.target.value)}
        />
        <Text>
          { t`Descriptions support basic markdown and html formatting.` }
        </Text>
        <Text>{t`- Flavor text can be denoted using <f>this is flavor</f> tags, to get card style formatting.`}</Text>
        <Text>{t`- You can use the following game specific icons by enclosing them in square brackets:`}
          <Flex direction="row">
            { map(icons, icon => (
              <Tooltip label={`[${icon}]`} key={icon}>
                <Box marginRight={1}><CoreIcon icon={icon} size={18} color={color} /></Box>
              </Tooltip>
            )) }
          </Flex>
        </Text>

      </>
    );
  }
  return (
    <>
      <Button marginBottom={2} onClick={onOpen}>{t`Edit description`}</Button>
      { !!deck.description && <DeckDescriptionView description={deck.description} /> }
    </>
  )
}

function BaseDeckbuildingTabs({
  renderControl,
  cards,
  faction,
  allyFaction,
  showCard,
  deck,
}: {
  cards: CardsMap;
  faction: FactionType | undefined;
  allyFaction: FactionType | undefined;
  slots: Slots;
  deck: DeckFragment,
  showCard: ShowCard;
  renderControl: (card: CardFragment) => React.ReactNode;
}) {
  const [personalityCards, backgroundCards, specialtyCards, outsideInterestCards] = useMemo(() => {
    const pc: CardFragment[] = [];
    const bc: CardFragment[] = [];
    const sc: CardFragment[] = [];
    const oic: CardFragment[] = [];
    const possibleAllyFactions = new Set(faction ? FactionAllies[faction] : []);
    forEach(sortBy(values(cards), c => c?.pack_position || 0), c => {
      if (!c) {
        return;
      }
      if (c.type_id === 'warlord') {
        return;
      }
      if (c.faction_id && c.faction_id !== 'neutral') {
        if (faction) {
          // We have chosen a faction.
          if (c.faction_id !== faction) {
            if (c.type_id !== 'army') {
              // Only armies can be splashed.
              return;
            }
            switch (faction) {
              case FactionType.Tyranids:
                // Tyranids can't take anything
                return;
              case FactionType.Necrons:
                // Necrons can take every faction army.
                break;
              default:
                // Have we chosen an ally yet?
                if (allyFaction) {
                  if (c.faction_id !== allyFaction) {
                    return;
                  }
                } else if (!possibleAllyFactions.has(c.faction_id as FactionType)) {
                  return;
                }
                break;
            }
          }
        }
      }
      pc.push(c);
    });
    return [pc, bc, sc, oic];
  }, [cards, faction, allyFaction]);
  const { colors } = useTheme();
  return (
    <Tabs>
      <TabList overflowX="scroll" overflowY="hidden">
        <Tab>{t`Army`}</Tab>
        <Tab>{t`Background`}</Tab>
        <Tab>{t`Specialty`}</Tab>
        <Tab>{t`Outside Interest`}</Tab>
        <Tab>{t`Description`}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text fontSize="md" className='lightText' paddingBottom={2} borderBottomWidth="1px" borderBottomColor={colors.divider}>
            {t`Select 4 different personality cards, 1 from each aspect.`}
          </Text>
          <SimpleCardList
            cards={personalityCards}
            showCard={showCard}
            header="none"
            renderControl={renderControl}
          />
        </TabPanel>
        <TabPanel>
          <Text fontSize="md" className='lightText' paddingBottom={2} borderBottomWidth="1px" borderBottomColor={colors.divider}>
            {t`Select 5 different cards from your chosen background.`}
          </Text>
          <SimpleCardList
            cards={backgroundCards}
            showCard={showCard}
            header="aspect"
            renderControl={renderControl}
          />
        </TabPanel>
        <TabPanel>
          <Text fontSize="md" className='lightText' paddingBottom={2} borderBottomWidth="1px" borderBottomColor={colors.divider}>
            {t`Select 5 different cards from your chosen specialty.`}
          </Text>
          <SimpleCardList
            cards={specialtyCards}
            showCard={showCard}
            header="aspect"
            renderControl={renderControl}
          />
        </TabPanel>
        <TabPanel>
          <Text fontSize="md" className='lightText' paddingBottom={1}>
            {t`Select 1 cards from any background of specialty as your outside interest.`}
          </Text>
          <Text fontSize="sm" className='lightText' fontStyle="italic" paddingBottom={2} borderBottomWidth="1px" borderBottomColor={colors.divider}>
            {t`Note: cards from your chosen specialty/background are not shown here, but your outside interest is allowed to be from your chosen class if you use the other tabs to select it.`}
          </Text>
          <SimpleCardList
            cards={outsideInterestCards}
            showCard={showCard}
            renderControl={renderControl}
          />
        </TabPanel>
        <TabPanel>
          <EditDescriptionTab deck={deck} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function useSlots(originalSlots: Slots) : [Slots, (card: CardFragment, count: number) => void] {
  const [slots, setSlots] = useState<Slots>(originalSlots);
  const updateSlots = useCallback((card: CardFragment, count: number) => {
    const code = card.id;
    if (!code) {
      return;
    }
    const newSlots = { ...slots };
    if (!count) {
      delete newSlots[code];
      setSlots(newSlots);
    } else {
      newSlots[code] = count;
      setSlots(newSlots);
    }
  }, [slots, setSlots]);
  return [slots, updateSlots];
}

export default function DeckEdit({ deck, cards }: Props) {
  const [slots, updateSlots] = useSlots(deck.slots || {});
  const [sideSlots, updateSideSlots] = useSlots(deck.side_slots || {});
  const [meta, setMeta] = useState<DeckMeta>(deck.meta || {});

  const renderControl = useCallback((
    card: CardFragment,
    onClose?: () => void,
    max?: number
  ) => {
    const theMax = undefined;

    return (
      <CountControls
        card={card}
        slots={slots}
        setSlots={updateSlots}
        countMode={'noah'}
        onClose={onClose}
        max={theMax}
      />
    );
  }, [slots, sideSlots, updateSlots,]);

  const renderCollectionControl = useCallback(
    (card: CardFragment, onClose?: () => void) => {
      return (
        <Flex direction="column" alignItems="flex-end">
          <Text fontSize="sm" textAlign="right" marginBottom={2}>
            {
              t`When adding a card from the collection, remember to return a deck card.`
            }
          </Text>
          { renderControl(card, onClose, 2) }
        </Flex>
      );
    }, [renderControl]);
  const renderDisplacedControl = useCallback(
    (card: CardFragment, onClose?: () => void) => {
      return (
        <Flex direction="column" alignItems="flex-end">
          { !!card.id && (sideSlots[card.id] || 0) > 0 && (
            <Button
              marginBottom={2}
              leftIcon={<FaInbox />}
              onClick={() => {
              if (card.id) {
                const newCount = Math.max((sideSlots[card.id] || 0) - 1, 0);
                updateSideSlots(card, newCount);
                if (newCount === 0 && onClose) {
                  onClose();
                }
              }
            }}>
              { t`Return a copy to the collection` }
            </Button>
          ) }
          { renderControl(card, onClose) }
        </Flex>
      );
    }, [renderControl, updateSideSlots, sideSlots]);

  const [showCard, cardModal] = useCardModal(slots, renderControl);
  const [showCollectionCard, collectionCardModal] = useCardModal(slots, renderCollectionControl, 'collectionModal');
  const [showDisplacedCard, displacedCardModal] = useCardModal(slots, renderDisplacedControl, 'displacedModal');

  const background: string | undefined = typeof meta.background === 'string' ? meta.background : undefined;
  const specialty: string | undefined = typeof meta.specialty === 'string' ? meta.specialty : undefined;
  const parsedDeck = useMemo(() => parseDeck(
    deck,
    meta,
    slots,
    sideSlots,
    cards,
  ), [meta, slots, sideSlots, cards]);
  const setWorlord = useCallback((warlord: string) => {
    setMeta({
      ...meta,
      warlord,
    });
  }, [meta, setMeta]);
  const [showWarlord, warlordModal] = useChooseWarlordModal(
    parsedDeck,
    cards,
    showCard,
  );
  const setUpgrade = useCallback(() => {
    setMeta({
      ...meta,
      campaign: true,
    });
  }, [setMeta, meta]);

  const [name, setName] = useState(deck.name);

  const hasEdits: boolean = useMemo(() => {
    const metaChange = !!find(union(keys(deck.meta), keys(meta)), (key) => {
      return (!!deck.meta[key] !== !!meta[key]) || deck.meta[key] !== meta[key];
    });
    const slotChange = !!find(union(keys(deck.slots), keys(slots)), (key) => {
      return (!!deck.slots[key] !== !!slots[key]) || deck.slots[key] !== slots[key];
    })
    return metaChange || slotChange || name !== deck.name;
  }, [deck, meta, slots, name]);
  const [saveDeck] = useSaveDeckMutation();
  const [saveError, setSaveError] = useState<string | undefined>();
  const saveChanges = useCallback(async() => {
    setSaveError(undefined);
    const problem: DeckError[] | undefined = parsedDeck.problem?.length ?
      sortBy([
        ...(parsedDeck.problem || []),
      ], x => x) : undefined;
    const r = await saveDeck({
      variables: {
        id: deck.id,
        meta: {
          ...omit(meta, ['problem']),
          problem,
        },
        slots,
        sideSlots,
        name,
      },
    });
    if (!r.errors) {
      Router.push(`/decks/view/${deck.id}`);
      return;
    }
    setSaveError(r.errors[0].message);
  }, [saveDeck, meta, slots, sideSlots, name, deck, parsedDeck.problem]);
  const { colors } = useTheme();
  return (
    <>
      <SimpleGrid spacingX={4} spacingY="4rem" columns={[1, 1, 1, 2]}>
        <Box>
          <EditableTextInput
            value={name}
            fontSize="2xl"
            onChange={setName}
          />
          <DeckCountLine parsedDeck={parsedDeck} />
          { !parsedDeck.loading && !!parsedDeck.problem && (
            <Box marginBottom={4}>
              <DeckProblemComponent errors={parsedDeck.problem} limit={1} summarizeOthers />
            </Box>
          )}
          <ButtonGroup paddingBottom={2} paddingTop={2}>
            { !!hasEdits && (
              <SolidButton color="blue" onClick={saveChanges}>
                {t`Save changes`}
              </SolidButton>
            )}
            <Button as={NextLink} href={`/decks/view/${deck.id}`}>
              {hasEdits ? t`Discard changes` : t`Done editing`}
            </Button>
          </ButtonGroup>
          { !!saveError && (
            <Text color="red.500" paddingTop={2} paddingBottom={4}>{saveError}</Text>
          )}
          <MetaControls
            meta={meta}
            setMeta={setMeta}
            hideLabels
          />
          <FormControl>
            <FormLabel>{t`Warlord`}</FormLabel>
            { parsedDeck.warlord ? (
              <Box _hover={{ bg: colors.hover }} cursor="pointer" onClick={showWarlord}>
                <CardRow card={parsedDeck.warlord} includeText last />
              </Box>
              ) : (
              <Input as={Button} disabled={!parsedDeck.faction} onClick={showWarlord}>
                {t`Choose warlord`}
              </Input>
              ) }
          </FormControl>
          <List>
            {map(parsedDeck.cards, item => (
              <DeckItemComponent key={item.id} item={item} showCard={showCard} />
            ))}
          </List>
        </Box>
        <Box>
          <BaseDeckbuildingTabs
            cards={cards}
            faction={parsedDeck.faction}
            allyFaction={parsedDeck.allyFaction}
            slots={slots}
            renderControl={renderControl}
            showCard={showCard}
            deck={deck}
          />
        </Box>
      </SimpleGrid>
      { cardModal }
      { collectionCardModal }
      { displacedCardModal }
      { warlordModal }
    </>
  );
}

export function useNewDeckModal(warlordCards: CardsMap): [() => void, React.ReactNode] {
  const { authUser } = useAuth();
  const [name, setName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [createDeck] = useCreateDeckMutation();
  const [meta, setMeta] = useState<DeckMeta>({});
  const placeholderDeckName = useMemo(() => {
    return t`Name your character`;
  }, [meta]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const onCreateDeck = useCallback(async() => {
    if (!authUser) {
      return;
    }
    const deckName = name || placeholderDeckName;
    setSubmitting(true);
    setError(undefined);
    const problem: DeckError[] = [
      'specialty',
      'background',
    ];
    const result = await createDeck({
      variables: {
        name: deckName,
        meta: {
          ...meta,
          problem,
        },
        slots: {},
      },
    });
    setSubmitting(false);
    if (result.errors?.length) {
      setError(result.errors[0].message);
    } else {
      onClose();
      if (result.data?.deck?.id) {
        Router.push(`/decks/edit/${result.data.deck.id}`);
      }
    }
  }, [createDeck, onClose, placeholderDeckName, authUser, meta, name]);
  const showModal = useCallback(() => {
    onOpen();
  }, [onOpen]);
  const setWarlord = useCallback((warlord: string) => {
    setMeta({
      ...meta,
      warlord,
    });
  }, [setMeta, meta]);
  const errorMessage = useMemo(() => {
    if (error) {
      return error;
    }
    if (!meta.faction) {
      return t`You must choose a faction.`
    }
    if (!meta.warlord) {
      return t`You must choose a role.`
    }
    if (meta.faction !== FactionType.Necrons && meta.faction !== FactionType.Tyranids && !meta.ally_faction) {
      return t`You must choose an ally faction.`
    }
  }, [meta, error]);
  return [
    showModal,
    <Modal key="modal" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box paddingRight={8}>
            <Heading>{t`New deck`}</Heading>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <form onSubmit={e => {
            e.preventDefault();
            onCreateDeck();
          }}>
            <FormControl marginBottom={4}>
              <FormLabel>{t`Name`}</FormLabel>
              <Input
                type="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={placeholderDeckName}
              />
            </FormControl>
            <MetaControls
              meta={meta}
              setMeta={setMeta}
            />
            { !!meta.specialty && typeof meta.specialty === 'string' && (
              <FormControl marginBottom={4} isRequired>
                <FormLabel>{t`Role`}</FormLabel>
                <WarlordRadioChooser
                  key={meta.faction}
                  faction={meta.faction}
                  cards={warlordCards}
                  warlord={typeof meta.warlord === 'string' ? meta.warlord : undefined}
                  onChange={setWarlord}
                />
              </FormControl>
            )}
          </form>
        </ModalBody>
        <ModalFooter>
          <Flex direction="row" flex={1} justifyContent={errorMessage ? 'space-between' : 'flex-end'}>
            { !!errorMessage && <Text color="red.500">{errorMessage} </Text>}
            <SolidButton
              color="blue"
              isLoading={submitting}
              disabled={!!errorMessage}
              onClick={onCreateDeck}
            >
              {t`Create`}
            </SolidButton>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  ];
}

