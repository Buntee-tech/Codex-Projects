export type GamePhase = 'LOBBY' | 'PLAYING' | 'FINISHED';

export interface Player {
  id: string;
  name: string;
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
