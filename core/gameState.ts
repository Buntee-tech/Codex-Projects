import { GameState, Player } from './types';

export function createGameState(gameId: string): GameState {
  return {
    gameId,
    tick: 0,
    turn: 0,
    gameTime: 0,
    players: [],
    territories: [],
    resources: {},
    gamePhase: 'LOBBY',
    winner: null,
    gameOverState: false,
  };
}

export function addPlayer(state: GameState, player: Player): GameState {
  if (state.gamePhase !== 'LOBBY') {
    return state;
  }

  if (state.players.some((p) => p.id === player.id)) {
    return state; // Player already exists
  }

  return {
    ...state,
    players: [...state.players, player],
    resources: {
      ...state.resources,
      [player.id]: 0,
    },
  };
}

export function startGame(state: GameState): GameState {
  if (state.gamePhase !== 'LOBBY' || state.players.length === 0) {
    return state;
  }

  return {
    ...state,
    gamePhase: 'PLAYING',
  };
}

export function tickGame(state: GameState, deltaSeconds: number): GameState {
  if (state.gamePhase !== 'PLAYING') {
    return state;
  }

  return {
    ...state,
    tick: state.tick + 1,
    gameTime: state.gameTime + deltaSeconds,
  };
}

export function setGameOver(state: GameState, winnerId: string | null): GameState {
  if (state.gamePhase !== 'PLAYING') {
    return state;
  }

  return {
    ...state,
    gamePhase: 'FINISHED',
    gameOverState: true,
    winner: winnerId,
  };
}
