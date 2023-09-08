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
  'ASTRA MILITARUM': 'am_icon',
  tau: 'tau_icon',
  'SPACE MARINE': 'sm_icon',
  CHAOS: 'chaos_icon',
  dark_eldar: 'de_icon',
  ELDAR: 'eld_icon',
  ORK: 'ork_icon',
  TYRANID: 'tyr_icon',
  NECRON: 'nec_icon',
}
export const FactionIcon: React.FC<{
  color?: string,
  size: string | number,
  faction: string,
  className?: string
}> = props => {
  const { color, size = "100%", faction, className = "" } = props;
  return (
    <CoreIcon color={color} size={size} icon={FACTION_TO_ICON[faction]} className={className} />
  );
};

export default CoreIcon;
