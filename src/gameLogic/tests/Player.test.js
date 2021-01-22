import { test, expect } from '@jest/globals';
import Gameboard from '../Gameboard';
import Player from '../Player';

test('Player Exists', () => {
  expect(Player).toBeDefined();
});

test('Player has a board', () => {
  expect(new Player().playerBoard).toEqual(new Gameboard());
});

test('Player can have a non-default sized board', () => {
  const testPlayer = new Player(3);
  expect(testPlayer.playerBoard.grid.length).toBe(3);
});

test('Player can place a ship', () => {
  const targetGameboard = new Gameboard();
  targetGameboard.placeShip(0, 0, 1, true);
  const testPlayer = new Player();
  expect(testPlayer.placeShip(0, 0, 1, true)).toBe(true);
  expect(testPlayer.playerBoard).toEqual(targetGameboard);
});

test('Player cannot double place a ship', () => {
  const testPlayer = new Player();
  testPlayer.placeShip(0, 0, 1, 0);
  expect(testPlayer.placeShip(0, 0, 1, true)).toBe(false);
});

test('Player recieve an attack', () => {
  const testPlayer = new Player();
  testPlayer.recieveAttack(0, 0);
  expect(testPlayer.playerBoard.grid[0][0].attacked).toBe(true);
});

test('Cannot shoot same space twice', () => {
  const testPlayer = new Player();
  testPlayer.recieveAttack(0, 0);
  expect(testPlayer.recieveAttack(0, 0)).toBe(false);
});

// test('AI Player can choose within target grid', () => {
//   const testPlayer = new Player();
//   const { x, y } = Player.chooseAttack(testPlayer);
//   expect(x).toBeGreaterThanOrEqual(0);
//   expect(y).toBeGreaterThanOrEqual(0);
//   expect(x).toBeLessThan(testPlayer.playerBoard.grid.length);
//   expect(y).toBeLessThan(testPlayer.playerBoard.grid.length);
// });
