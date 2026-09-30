export type GamePhase = 'LOBBY' | 'PLAYING' | 'FINISHED';

export type PlayerType = 'HUMAN' | 'AI';

export interface Player {
  id: string;
  name: string;
  faction: string;
  color: string;
  controlledTerritoryIds: string[];
  treasury: number;
  totalArmy: number;
  alive: boolean;
  humanOrAI: PlayerType;
}

export interface Territory {
  id: string;
  ownerId: string | null;
}

export interface Resources {
  [playerId: string]: number;
}

export interface GameState {
  gameId: string;
  tick: number;
  turn: number;
  gameTime: number;
  players: Player[];
  territories: Territory[];
  resources: Resources;
  gamePhase: GamePhase;
  winner: string | null;
  gameOverState: boolean;
}
