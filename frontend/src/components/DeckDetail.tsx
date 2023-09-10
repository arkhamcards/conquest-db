import React, { useCallback, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Icon,
  Text,
  Flex,
  List,
  Link,
  IconButton,
  Spinner,
  Tooltip,
  Grid,
  GridItem,
  Stack,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  ButtonGroup,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Router from 'next/router';
import NextLink from 'next/link';
import { flatMap, map, pick, values } from 'lodash';
import { t, Trans } from '@lingui/macro';
import { SlCalender } from 'react-icons/sl';
import { FaComment, FaEdit, FaShare, FaShareAlt, FaTrash } from 'react-icons/fa';

import { CardFragment, DeckDetailFragment, DeckFragment, useCreateDeckMutation, useDeleteDeckMutation, useCloneDeckMutation, usePublishDeckMutation } from '../generated/graphql/apollo-schema';
import { useAuth } from '../lib/AuthContext';
import { CardsMap } from '../lib/hooks';
import { CardHeader, ShowCard, useCardModal } from './Card';
import DeckProblemComponent from './DeckProblemComponent';
import { useLocale } from '../lib/TranslationProvider';
import parseDeck, { ParsedDeck } from '../lib/parseDeck';
import useDeleteDialog from './useDeleteDialog';
import { DeckCountLine, DeckDescription, DeckItemComponent } from './Deck';
import DeckDescriptionView from './DeckDescriptionView';
import SolidButton from './SolidButton';
import LikeButton from './LikeButton';
import CommentsComponent from './CommentsComponent';
import UserLink from './UserLink';

const SHOW_COMMENTS = process.env.NODE_ENV === 'development';

function deleteDeckMessage(d: DeckFragment) {
  return t`Are you sure you want to delete this deck?`;
}

interface Props {
  deck: DeckDetailFragment;
  cards: CardsMap;
  onLike?: () => Promise<string | undefined>;
}

function ChosenRole({ role, showCard, children }: { role: CardFragment; showCard: ShowCard; children: React.ReactNode }) {
  const onClick = useCallback(() => showCard(role), [role, showCard]);
  return (
    <Flex marginRight={2} direction="column" onClick={onClick}  cursor="pointer" alignItems="flex-start">
      <CardHeader
        flex={1}
        card={role}
        miniLevel
        includeSet
        includeText
      >
        { children }
      </CardHeader>
    </Flex>
  );
}

export default function DeckDetail({ deck, cards, onLike }: Props) {
  const { authUser } = useAuth();
  const { i18n } = useLocale();
  const [showCard, cardModal] = useCardModal(deck.slots);
  const specialty: string | undefined = typeof deck.meta.specialty === 'string' ? deck.meta.specialty : undefined;
  const hasCards = useMemo(() => values(cards).length > 0, [cards]);
  const parsedDeck = useMemo(() => parseDeck(deck, deck.meta, deck.slots, deck.side_slots, cards), [deck, cards]);

  const [publishing, setPublishing] = useState(false);
  const [publishDeck] = usePublishDeckMutation();
  const onPublishDeck = useCallback(async() => {
    setPublishing(true);
    const r = await publishDeck({
      variables: {
        deckId: deck.id,
      },
    });
    setPublishing(false);
    if (r.errors?.length) {
      return r.errors[0].message;
    }
    if (r.data?.deck) {
      Router.push(`/decks/view/${r.data.deck.id}`);
    }
    return undefined;
  }, [deck.id, setPublishing, publishDeck]);
  const [createDeck] = useCreateDeckMutation();
  const [cloneDeck] = useCloneDeckMutation();
  const [copying, setCopying] = useState(false);
  const onCopyDeck = useCallback(async() => {
    if (authUser) {
      setCopying(true);
      try {
        const result = await createDeck({
          variables: {
            name: t`${deck.name} (Copy)`,
            meta: deck.meta,
            slots: deck.slots,
            description: deck.description,
          },
        });
        if (result.errors?.length) {
          return result.errors[0].message;
        }
        const newDeckId = result.data?.deck?.id;
        if (newDeckId) {
          if (deck.published) {
            const r = await cloneDeck({
              variables: {
                newDeckId,
                originalDeckId: deck.id,
              },
            });
            if (r.errors?.length) {
              return r.errors[0].message;
            }
          }
          Router.push(`/decks/view/${newDeckId}`);
        }
      } finally {
        setCopying(false);
      }
    }
  }, [createDeck, cloneDeck, authUser, deck]);
  const [showShare, shareModal] = useShareableDeckModal(parsedDeck, deck.name);
  const [doDelete] = useDeleteDeckMutation();
  const deleteDeck = useCallback(async(d: DeckFragment) => {
    const r = await doDelete({
      variables: {
        id: d.id,
      },
    });
    if (r.errors?.length) {
      return r.errors[0].message;
    }
    Router.push('/decks');
    return undefined;
  }, [doDelete]);
  const [onDelete, deleteDialog] = useDeleteDialog(
    t`Delete deck?`,
    deleteDeckMessage,
    deleteDeck
  );
  const onDeleteClick = useCallback(() => onDelete(deck), [onDelete, deck]);
  const publishError = useMemo(() => {
    if (deck.meta.problem) {
      return t`Please address all deckbuilding errors before publishing.`
    }
    return undefined;
  }, [deck]);
  const editable = authUser?.uid === deck.user_id&& !deck.published;
  const copyDeckInfo = useMemo(() => {
    if (!deck.original_deck?.deck) {
      return null;
    }
    const deckLink = (
      <Link textDecorationLine="underline" as={NextLink} href={`/decks/view/${deck.original_deck.deck.id}`}>
        {deck.original_deck.deck.name}
      </Link>
    );
    const authorLink = <UserLink user={deck.original_deck.deck.user} />;
    return (
      <Flex direction="row" alignItems="center">
        <Icon as={FaShareAlt} />
        <Text marginLeft={2}>
          <Trans>Copy of {deckLink} by {authorLink}</Trans>
        </Text>
      </Flex>
    );
  }, [deck.original_deck]);
  return (
    <>
      <Box>
        <Box paddingTop={[0, '2rem']} paddingBottom="2em">
          <Flex direction={['column-reverse', 'row']} alignItems={['flex-end', 'flex-start']} justifyContent="space-between">
            <Flex direction="column">
              <Heading>{deck?.name || 'Deck'}</Heading>
              <SimpleGrid columns={2}>
                { authUser?.uid !== deck.user_id && !!deck.user.handle && (
                  <Box>
                    <UserLink user={deck.user} />
                  </Box>
                ) }
                { !!deck.published && !!deck.created_at && (
                  <Flex direction="row" alignItems="center">
                    <SlCalender />
                    <Text  marginLeft={2}>
                      { i18n?.date(deck.created_at, { dateStyle: 'long' }) }
                    </Text>
                  </Flex>
                ) }
              </SimpleGrid>
              { copyDeckInfo }
              <DeckCountLine parsedDeck={parsedDeck} />
            </Flex>
            <ButtonGroup marginBottom={2}>
              { editable && (
                <SolidButton
                  color="blue"
                  leftIcon={<FaEdit />}
                  as={NextLink}
                  href={`/decks/edit/${deck.id}`}
                >
                  {t`Edit`}
                </SolidButton>
              ) }
              <SolidButton
                color="gray"
                leftIcon={<FaShareAlt />}
                onClick={showShare}
              >
                {t`Share`}
              </SolidButton>
              { !!deck.published && (
                <>
                  <LikeButton
                    aria-label={t`Like deck`}
                    liked={deck.liked_by_user}
                    likeCount={deck.like_count}
                    onClick={onLike}
                  />
                  { !!SHOW_COMMENTS && (
                    <Button
                      aria-label={t`See comments`}
                      as={NextLink}
                      href="#comments"
                      leftIcon={<Icon as={FaComment}
                        color="blue.500"
                      />}
                    >
                      { deck.comment_count }
                    </Button>
                  ) }
                  <Tooltip label={t`Copy this deck to make your own changes.`}>
                    <Button
                      aria-label={t`Copy deck`}
                      leftIcon={<Icon as={FaShareAlt} color="yellow.500" />}
                      isLoading={copying}
                      onClick={onCopyDeck}
                    >
                      { deck.copy_count }
                    </Button>
                  </Tooltip>
                </>
              ) }
              { authUser && (!deck.published || authUser.uid === deck.user_id) &&(
                <Menu autoSelect={false}>
                  <MenuButton as={IconButton} aria-label={t`Actions`} icon={<HamburgerIcon />} variant="outline" />
                  <MenuList>
                    { authUser.uid === deck.user_id && !deck.published && (
                      <Tooltip
                        placement="left"
                        label={publishError}
                      >
                        <MenuItem
                          icon={publishing ? <Spinner size="sm" /> : <FaShare />}
                          onClick={onPublishDeck}
                          isDisabled={!!publishError}
                        >{t`Publish`}</MenuItem>
                      </Tooltip>
                    ) }
                    { !deck.published && (
                      <Tooltip
                        placement="left"
                        label={authUser.uid === deck.user_id ?
                          t`Duplicate this deck while preserving the original.` :
                          t`Copy this deck to make your own changes.`}
                      >
                        <MenuItem
                          icon={copying ? <Spinner size="sm" /> : <FaShareAlt />}
                          onClick={onCopyDeck}
                        >
                          {t`Copy`}
                        </MenuItem>
                      </Tooltip>
                    ) }
                    { authUser.uid === deck.user_id && (
                      <Tooltip
                        placement="left"
                        label={deck.published ?
                          t`Deleting this published deck will cause will remove it from search.` :
                          undefined}
                      >
                        <MenuItem
                          color="red.500"
                          icon={<FaTrash />}
                          onClick={onDeleteClick}
                        >
                          {t`Delete`}
                        </MenuItem>
                      </Tooltip>
                    ) }
                  </MenuList>
                </Menu>
              ) }
            </ButtonGroup>
          </Flex>
        </Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <GridItem colSpan={deck.description ? [6, 6, 4, 3] : 6}>
            <SimpleGrid columns={deck.description ? 1 : [1, 1, 2]}>
              <Box
                borderRightWidth={deck.description ? [0, 0, '1px'] : undefined}
                paddingRight={deck.description ? [0, 0, 6] : undefined}
              >
                <DeckDescription deck={deck} />
                <Text>
                  { t`Not set` }
                </Text>
              </Box>
            </SimpleGrid>
            { !!parsedDeck.problem?.length && hasCards && (
                <Box marginTop={2} marginBottom={2}>
                  <DeckProblemComponent
                    limit={1}
                    summarizeOthers
                    errors={parsedDeck.problem}
                  />
                </Box>
              ) }
            { hasCards ? (
              <List>
                {map(parsedDeck.cards, item => <DeckItemComponent key={item.id} item={item} showCard={showCard} />)}
              </List>
            ) : <Spinner size="md" /> }
          </GridItem>
          { !!deck.description && (
            <GridItem colSpan={[6, 6, 2, 3]}>
              <Stack>
                <Text fontSize="2xl" fontWeight="600">
                  {t`Description`}
                </Text>
                <DeckDescriptionView description={deck.description} />
              </Stack>
            </GridItem>
          ) }
          { SHOW_COMMENTS && !!deck.published && (
            <GridItem colSpan={6}>
              <CommentsComponent comments={deck.comments} deckId={deck.id} />
            </GridItem>
          ) }
        </Grid>
      </Box>
      {shareModal}
      {cardModal}
      {deleteDialog}
    </>
  );
}


export function useShareableDeckModal(deck: ParsedDeck, name: string): [() => void, React.ReactNode] {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { factions } = useLocale();
  const warlord = deck.warlord?.name;
  const faction = deck.faction && factions[deck.faction];
  const allyFaction = deck.allyFaction && factions[deck.allyFaction];
  return [
    onOpen,
    <Modal key="access" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box paddingRight={8}>
            <Heading>{t`Shareable Deck`}</Heading>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs>
            <TabList>
              <Tab>{t`Print`}</Tab>
              <Tab>{t`Markdown`}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text fontSize="sm">
                  {name}<br/>
                  ----------------------------------------------------------------------<br/>
                  {warlord}<br/>
                  {faction?.name} {allyFaction ? ` (${allyFaction.name})` : ''}<br/>
                  { flatMap(deck.cards, (item) => {
                    if (item.type === 'header') {
                      return (
                        <>
                          ----------------------------------------------------------------------<br/>
                          {item.title}<br/><br/>
                        </>
                      );
                    }
                    if (item.type === 'description') {
                      return null;
                    }
                    if (item.type === 'card') {
                      return (
                        <>
                          {item.count}x {item.card.name}<br/>
                        </>
                      );
                    }
                  }) }
                </Text>
              </TabPanel>
              <TabPanel>
              <Text fontSize="sm">
                  {name}<br/>
                  ----------------------------------------------------------------------<br/>
                  **{warlord}**<br/>
                  **{faction?.name}** {allyFaction ? ` (**${allyFaction.name}**)` : ''}<br/>
                  { flatMap(deck.cards, (item) => {
                    if (item.type === 'header') {
                      return (
                        <>
                          ----------------------------------------------------------------------<br/><br/>
                          _{item.title}_<br/><br/>
                        </>
                      );
                    }
                    if (item.type === 'description') {
                      return null;
                    }
                    if (item.type === 'card') {
                      return (
                        <>
                          * {item.count}x {item.card.name}<br/>
                        </>
                      );
                    }
                  }) }
                </Text>

              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  ];
}