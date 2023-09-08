import React, { useMemo } from 'react';
import Parser from 'simple-text-parser';
import { filter } from 'lodash';
import { Box, useColorMode } from '@chakra-ui/react';
import { t } from '@lingui/macro'

const ICON_MATCH: { [text: string]: string | undefined } = {
  RESOURCE: 'resource_icon',
  CARD: 'blue_planet',
  'ASTRA MILITARUM': 'am_icon',
  TAU: 'tau_icon',
  'SPACE MARINE': 'sm_icon',
  CHAOS: 'chaos_icon',
  'DARK ELDAR': 'de_icon',
  ELDAR: 'eld_icon',
  ORK: 'ork_icon',
  TYRANID: 'tyr_icon',
  NECRON: 'nec_icon',
};

export function useIconedText(
  text: string | undefined | null,
  options: {
    noLines?: boolean;
  },
  flavor?: string | undefined | null
): string {
  const { noLines } = options;
  const { colorMode } = useColorMode();

  const TEXT_MATCH: { [text: string]: string | undefined } = {
    REACTION: t`Reaction`,
    INTERRUPT: t`Interrupt`,
    ACTION: t`Action`,
    'COMBAT ACTION': t`Combat Action`,
    'DEPLOY ACTION': t`Deploy Action`,
    'BATTLE ABILITY': t`Battle Ability`,
    'FORCED INTERRUPT': t`Forced Interrupt`,
  };

  return useMemo(() => {
    const parser = new Parser().addRule(
      /\[\[(.*?)\]\]/gi,
      (tag, element) => {
        return `<span style="text-shadow: 0 0 2px var(--chakra-colors-${colorMode}-text);">${element}</span>`;
      }
    ).addRule(
      /\[([^\]0-9X]+)\]/g,
      (tag, element) => {
        const icon = ICON_MATCH[element];
        if (icon) {
          return `<span class="icon-${icon}"></span>`;
        }
        const textMatch = TEXT_MATCH[element];
        if (textMatch) {
          return `<b>${textMatch}</b>`;
        }
        return element;
      }
    ).addRule(/\n/g, () => noLines ? '<br />' : '<hr class="card-line"></hr>');
    return parser.render(
      filter([text, flavor ? `<i class="card-${colorMode}-flavor">${flavor}</i>` : undefined], x => !!x).join('\n'));
  }, [text, noLines, flavor, colorMode]);
}

export default function CardText({ text, flavor, noPadding }: { text: string | undefined | null; flavor?: string | undefined | null; noPadding?: boolean }) {
  const { colorMode } = useColorMode();
  const parsed = useIconedText(text, { }, flavor);
  if (noPadding) {
    return <span className='card-text' dangerouslySetInnerHTML={{ __html: parsed }} />;
  }
  return (
    <Box padding={2} borderLeftWidth={2} margin={1} borderLeftColor="gray.500">
      <span className='card-text' dangerouslySetInnerHTML={{ __html: parsed }} />
    </Box>
  );
}