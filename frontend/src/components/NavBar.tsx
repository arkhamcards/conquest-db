import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  ButtonGroup,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  AvatarBadge,
} from '@chakra-ui/react';
import { FaSun, FaSlidersH, FaMoon, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaUser } from 'react-icons/fa';
import { map } from 'lodash';
import { t } from '@lingui/macro';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Router, { useRouter } from 'next/router';
import NextLink from 'next/link';

import { useAuth } from '../lib/AuthContext';
import { NavProfileFragment, useGetNavProfileQuery } from '../generated/graphql/apollo-schema';
import Banner from './Banner';
import { LOCALES } from '../lib/Lingui';
import { AuthUser } from '../lib/useFirebaseAuth';
import { DesktopLanguageChooser, MobileLanguageChooser } from './LanguageChooser';
import { useTheme } from '../lib/ThemeContext';
import { useCardNeedUpdate } from '../lib/cards';

function useNavItems(authUser: AuthUser | undefined): Array<NavItem> {
  return useMemo(() => [
    {
      label: t`My Decks`,
      href: '/decks',
    },
    {
      label: t`Cards`,
      href: '/cards',
    },
    {
      label: t`Decklists`,
      href: '/decks/search',
    },
  ], []);
}
export function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState<LOCALES>(
    router.locale!.split('-')[0] as LOCALES
  );

  const languages: { [key: string]: string } = {
    en: t`English`,
    de: t`German`,
    it: t`Italian`,
  }

  // enable 'pseudo' locale only for development environment
  if (process.env.NEXT_PUBLIC_NODE_ENV !== 'production') {
    languages['pseudo'] = 'Pseudo';
  }

  useEffect(() => {
    router.push(router.pathname, router.pathname, { locale })
    // eslint-disable-next-line
  }, [locale])

  return (
    <select
      value={locale}
      onChange={(evt) => setLocale(evt.target.value as LOCALES)}
    >
      {Object.keys(languages).map((locale) => {
        return (
          <option value={locale} key={locale}>
            {languages[locale as unknown as LOCALES]}
          </option>
        )
      })}
    </select>
  );
}

export default function WithSubnavigation() {
  const { colors } = useTheme();
  const { isOpen, onToggle } = useDisclosure();
  const { authUser, loading, signOut } = useAuth();
  const [cardNeedUpdate, forceCardUpdate] = useCardNeedUpdate();
  const onSignOut = useCallback(() => {
    Router.push('/');
    signOut();
  }, [signOut]);
  const navItems = useNavItems(authUser);
  const { colorMode, toggleColorMode } = useColorMode();
  const desktopNav = useBreakpointValue({ base: false, md: true });
  const { data, loading: profileLoading } = useGetNavProfileQuery({
    variables: {
      id: authUser?.uid || '',
    },
    skip: !authUser,
  });
  const noHandle = !loading && !profileLoading && !!authUser && !data?.profile?.handle;
  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label={t`Toggle Navigation`}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', 'white')}
            as={NextLink}
            href="/"
          >
            {t`ConquestDB`}
          </Link>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav navItems={navItems}/>
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <ButtonGroup>
            { !!desktopNav && (
              <>
                <DesktopLanguageChooser />
                <IconButton
                  marginLeft={1}
                  aria-label={colorMode === 'light' ? t`Dark mode` : t`Light mode`}
                  onClick={toggleColorMode}
                  icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                  variant="ghost"
                />
              </>
            ) }
            <Menu autoSelect={false}>
              <MenuButton
                as={IconButton}
                variant="ghost"
                color={colors.icon}
                icon={<Avatar size="xs" />}
              />
              <MenuList>
                { authUser ? (
                  <>
                    { !!data?.profile?.handle && (
                      <MenuItem
                        as={NextLink}
                        icon={<FaUser />}
                        href={`/users/${data.profile.handle}`}
                      >
                        {t`Profile`}
                      </MenuItem>
                    ) }
                    <MenuItem
                      as={NextLink}
                      href="/profile"
                      icon={<FaSlidersH />}
                    >
                      {t`Account Settings`}
                    </MenuItem>
                    <MenuItem
                      icon={<FaSignOutAlt />}
                      onClick={onSignOut}
                    >
                      {t`Sign Out`}
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      icon={<FaSignInAlt />}
                      as={NextLink}
                      href="/login"
                    >
                      {t`Sign In`}
                    </MenuItem>
                    <MenuItem
                      icon={<FaUserPlus />}
                      as={NextLink}
                      href="/register"
                    >
                      {t`Sign Up`}
                    </MenuItem>
                  </>
                ) }
              </MenuList>
            </Menu>
          </ButtonGroup>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} profile={data?.profile} />
      </Collapse>
      { !!cardNeedUpdate && (
        <Banner
          title={t`New cards are available`}
          action={t`Update now`}
          onClick={forceCardUpdate}
        />
      ) }
    </Box>
  );
}

const DesktopNav = ({ navItems }: { navItems: NavItem[] } ) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <Stack direction={'row'} spacing={4}>
      { map(navItems, (navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                as={NextLink}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      as={NextLink}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = ({ navItems, profile }: { navItems: NavItem[]; profile: NavProfileFragment | null | undefined }) => {
  const { authUser, signOut } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();
  const onSignOut = useCallback(() => {
    Router.push('/');
    signOut();
  }, [signOut]);
  const mobileNavItems = useMemo(() => {
    if (!authUser) {
      return navItems;
    }
    return [
      ...navItems,
      ...(profile?.handle ? [
        {
          label: t`Profile`,
          href: `/users/${profile.handle}`,
        },
      ] : []),
      {
        label: t`Account Settings`,
        href: '/profile',
      },
    ];
  }, [navItems, authUser, profile]);
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      { !authUser && (
        <ButtonGroup orientation="vertical">
          <Button
            as={NextLink}
            href="/login"
            leftIcon={<FaSignInAlt />}
            variant="solid"
          >
            {t`Sign In`}
          </Button>
          <Button
            color={'white'}
            bg={'blue.400'}
            as={NextLink}
            href="/register"
            _hover={{
              bg: 'blue.600',
            }}
            leftIcon={<FaUserPlus />}
          >
            {t`Sign Up`}
          </Button>
        </ButtonGroup>
      ) }
      {map(mobileNavItems, (navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <ButtonGroup orientation="vertical">
        { !!authUser && (
          <Button
            leftIcon={<FaSignOutAlt />}
            onClick={onSignOut}
            variant="outline"
          >
            {t`Sign Out`}
          </Button>
        ) }
        <Button
          aria-label={colorMode === 'light' ? t`Dark mode` : t`Light mode`}
          onClick={toggleColorMode}
          leftIcon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
          variant="outline"
        >
          { colorMode === 'light' ? t`Dark mode` : t`Light mode`}
        </Button>
      </ButtonGroup>
      <MobileLanguageChooser />
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { colors } = useTheme();
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={colors.divider}
          align={'start'}
        >
          { children && children.map((child) => (
            <Link key={child.label} py={2} href={child.href} as={NextLink}>
              {child.label}
            </Link>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
