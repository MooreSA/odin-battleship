import { test, expect } from '@jest/globals';
import GameController from '../GameController';
import Player from '../Player';

test('Gamecontroller creates players properly', () => {
  const testGame = new GameController();

  expect(testGame.humanPlayer).toEqual(new Player());
  expect(testGame.computerPlayer).toEqual(new Player());
});

test('Human can attack', () => {
  const testGame = new GameController();
  const { error, game } = testGame.humanAttack(0, 0);
  expect(error).toBe(false);
  expect(game.computerPlayer.playerBoard.grid[0][0].attacked).toBe(true);
});

test('Attacks register errors when invalid', () => {
  const testGame = new GameController();
  let { error, game } = testGame.humanAttack(0, 0);
  expect(error).toBe(false);
  expect(game.computerPlayer.playerBoard.grid[0][0].attacked).toBe(true);
  ({ error, game } = game.humanAttack(0, 0));
  expect(error).toBe(true);
});

test('Computer attacks after human does', () => {
  let error = false;
  let testGame = new GameController();
  // You need to populate the board first for the AI so you don't win right away
  ({ game: testGame } = testGame.gameStart());
  let attackedFlag = false;
  ({ error, game: testGame } = testGame.humanAttack(0, 0));
  expect(error).toBe(false);
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (testGame.humanPlayer.playerBoard.grid[i][j].attacked) attackedFlag = true;
    }
  }
  expect(attackedFlag).toBe(true);
});
