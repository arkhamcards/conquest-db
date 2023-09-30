import React, { createContext, useContext, useMemo } from 'react'
import { AspectMap, CampaignCycle, MapLocations, PathTypeMap } from '../types/types';
import { useLingui, } from '@lingui/react';
import { I18n } from '@lingui/core';
import { t } from '@lingui/macro';
import { DeckCardErrorTranslations, DeckErrorTranslations, getAspectMap, getCampaignCycles, getDeckCardErrors, getDeckErrors, getMapLocations, getPathTypes } from './hooks';

interface TranslationContextType {
  deckErrors: DeckErrorTranslations;
  cardErrors: DeckCardErrorTranslations;
  aspects: AspectMap;
  approaches: { [approach: string]: string };
  paths: PathTypeMap;
  locations: MapLocations;
  locale: string;
  i18n: I18n | null;
  cycles: CampaignCycle[];
}
const TranslationContext = createContext<TranslationContextType>({
  deckErrors: getDeckErrors(),
  cardErrors: getDeckCardErrors(),
  aspects: getAspectMap(),
  paths: getPathTypes(),
  locations: getMapLocations(),
  cycles: getCampaignCycles(),
  approaches: {},
  locale: 'en',
  i18n: null,
});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useLingui();
  const value: TranslationContextType = useMemo(() => {
    return {
      deckErrors: getDeckErrors(),
      cardErrors: getDeckCardErrors(),
      aspects: getAspectMap(),
      paths: getPathTypes(),
      locations: getMapLocations(),
      cycles: getCampaignCycles(),
      approaches: {
        conflict: t`Conflict`,
        connection: t`Connection`,
        exploration: t`Exploration`,
        reason: t`Reason`,
      },
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
