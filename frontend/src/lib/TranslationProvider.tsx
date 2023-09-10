import React, { createContext, useContext, useMemo } from 'react'
import { FactionMap } from '../types/types';
import { useLingui, } from '@lingui/react';
import { I18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { DeckCardErrorTranslations, DeckErrorTranslations, getFactionMap, getDeckCardErrors, getDeckErrors } from './hooks';

interface TranslationContextType {
  deckErrors: DeckErrorTranslations;
  cardErrors: DeckCardErrorTranslations;
  factions: FactionMap;
  locale: string;
  i18n: I18n | null;
}
const TranslationContext = createContext<TranslationContextType>({
  deckErrors: getDeckErrors(),
  cardErrors: getDeckCardErrors(),
  factions: getFactionMap(),
  locale: 'en',
  i18n: null,
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useLingui();
  const value: TranslationContextType = useMemo(() => {
    return {
      deckErrors: getDeckErrors(),
      cardErrors: getDeckCardErrors(),
      factions: getFactionMap(),
      locale: i18n.locale,
      i18n,
    };
  }, [i18n]);
  return (
    <TranslationContext.Provider value={value}>
      { children }
    </TranslationContext.Provider>
  );
}
// custom hook to use the authUserContext and access authUser and loading
export const useLocale = () => useContext(TranslationContext);
