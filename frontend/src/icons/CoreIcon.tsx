import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import IcomoonReact from 'icomoon-react';

import iconSet from './core.json';

const CoreIcon: React.FC<{
  color?: string,
  size: string | number,
  icon: string,
  className?: string
}> = props => {
  const { color, size = "100%", icon, className = "" } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

const FACTION_TO_ICON: { [faction: string]: string } = {
  astra_militarum: 'am_icon',
  tau: 'tau_icon',
  space_marines: 'sm_icon',
  chaos: 'chaos_icon',
  dark_eldar: 'de_icon',
  eldar: 'eld_icon',
  orks: 'ork_icon',
  tyranid: 'tyr_icon',
  necron: 'nec_icon',
}
const FACTION_SIZE_SCALE: { [faction: string]: number } = {
  astra_militarum: 1.2,
  tau: 1.3,
  space_marines: 2,
  chaos: 1.5,
  dark_eldar: 2,
  eldar: 1.5,
  orks: 1.4,
  tyranid: 1,
  necron: 1,
}
export const FactionIcon: React.FC<{
  color?: string,
  size: number,
  faction: string,
  className?: string
}> = props => {
  const { color, size, faction, className = "" } = props;
  return (
    <CoreIcon color={color} size={size * FACTION_SIZE_SCALE[faction]} icon={FACTION_TO_ICON[faction]} className={className} />
  );
};

export default CoreIcon;
