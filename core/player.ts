import { Player, PlayerType } from './types';

export function createPlayer(
  id: string,
  name: string,
  faction: string,
  color: string,
  humanOrAI: PlayerType
): Player {
  return {
    id,
    name,
    faction,
    color,
    controlledTerritoryIds: [],
    treasury: 0,
    totalArmy: 0,
    alive: true,
    humanOrAI,
  };
}
