import { describe, it, expect } from 'vitest';
import { createGameState, addPlayer, startGame, tickGame, setGameOver } from '../core/gameState';

import { createPlayer } from '../core/player';

describe('GameState', () => {
  it('should create a new game with default values', () => {
    const state = createGameState('game-1');
    expect(state.gameId).toBe('game-1');
    expect(state.tick).toBe(0);
    expect(state.gamePhase).toBe('LOBBY');
    expect(state.players).toHaveLength(0);
    expect(state.gameOverState).toBe(false);
  });

  it('should add players during LOBBY phase', () => {
    let state = createGameState('game-1');
    const player1 = createPlayer('p1', 'Alice', 'Red', '#ff0000', 'HUMAN');

    state = addPlayer(state, player1);
    expect(state.players).toHaveLength(1);
    expect(state.players[0]).toEqual(player1);
    expect(state.resources['p1']).toBe(0);
  });

  it('should transition to PLAYING phase', () => {
    let state = createGameState('game-1');
    state = addPlayer(state, createPlayer('p1', 'Alice', 'Red', '#ff0000', 'HUMAN'));
    state = startGame(state);

    expect(state.gamePhase).toBe('PLAYING');
  });

  it('should process initial tick correctly', () => {
    let state = createGameState('game-1');
    state = addPlayer(state, createPlayer('p1', 'Alice', 'Red', '#ff0000', 'HUMAN'));
    state = startGame(state);

    state = tickGame(state, 1.0);
    expect(state.tick).toBe(1);
    expect(state.gameTime).toBe(1.0);
  });

  it('should handle game-over state correctly', () => {
    let state = createGameState('game-1');
    state = addPlayer(state, createPlayer('p1', 'Alice', 'Red', '#ff0000', 'HUMAN'));
    state = startGame(state);

    state = setGameOver(state, 'p1');
    expect(state.gamePhase).toBe('FINISHED');
    expect(state.gameOverState).toBe(true);
    expect(state.winner).toBe('p1');
  });
});
