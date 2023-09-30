import React, { useMemo } from 'react';
import Parser from 'simple-text-parser';
import { filter } from 'lodash';
import { Box, useColorMode } from '@chakra-ui/react';
import { t } from '@lingui/macro'
import { useLocale } from '../lib/TranslationProvider';

const ICON_MATCH: { [text: string]: string | undefined } = {
  RESOURCE: 'resource',
  CARD: 'blue_planet',
  'ASTRA MILITARUM': 'astra_militarum',
  TAU: 'tau',
  'SPACE MARINE': 'space_marines',
  CHAOS: 'chaos',
  'DARK ELDAR': 'dark_eldar',
  ELDAR: 'eld_icon',
  ORK: 'orks',
  TYRANID: 'tyranid',
  tyranids: 'tyranids',
  NECRON: 'necron',
  necrons: 'necron',
};


export function useIconedText(
  text: string | undefined | null,
  options: {
    noLines?: boolean;
  },
  flavor?: string | undefined | null
): string {
  const { cardText } = useLocale();
  const { noLines } = options;
  const { colorMode } = useColorMode();

  return useMemo(() => {
    const parser = new Parser().addRule(
      /\[([^\]0-9X]+)\]/g,
      (tag, element) => {
        const icon = ICON_MATCH[element];
        if (icon) {
          return `<span class="icon-${icon}"></span>`;
        }
        const textMatch = cardText[element];
        if (textMatch) {
          return `<b>${textMatch}</b>`;
        }
        return element;
      }
    ).addRule(/\n/g, () => noLines ? '<br />' : '<hr class="card-line"></hr>');
    return parser.render(
      filter([text, flavor ? `<i class="card-${colorMode}-flavor">${flavor}</i>` : undefined], x => !!x).join('\n'));
  }, [text, noLines, flavor, colorMode, cardText]);
}

export default function CardText({ text, flavor, noPadding }: { text: string | undefined | null; flavor?: string | undefined | null; noPadding?: boolean }) {
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