import { describe, it, expect } from 'vitest';
import { createPlayer } from '../core/player';

describe('Player', () => {
  it('should create a player with expected properties and default values', () => {
    const player = createPlayer('p1', 'Alice', 'Red Army', '#ff0000', 'HUMAN');

    expect(player.id).toBe('p1');
    expect(player.name).toBe('Alice');
    expect(player.faction).toBe('Red Army');
    expect(player.color).toBe('#ff0000');
    expect(player.humanOrAI).toBe('HUMAN');
    expect(player.controlledTerritoryIds).toEqual([]);
    expect(player.treasury).toBe(0);
    expect(player.totalArmy).toBe(0);
    expect(player.alive).toBe(true);
  });
});
