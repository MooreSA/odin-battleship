import { test, expect } from '@jest/globals';
import Gameboard from '../Gameboard';
import Player from '../Player';

test('Player Exists', () => {
  expect(Player).toBeDefined();
});

test('Player has a board', () => {
  expect(new Player().playerBoard).toEqual(new Gameboard());
});

test('Player can place a ship', () => {
  const targetGameboard = new Gameboard();
  targetGameboard.placeShip(0, 0, 1, 0);
  const testPlayer = new Player();
  testPlayer.placeShip(0, 0, 1, 0);
  expect(testPlayer.playerBoard).toEqual(targetGameboard);
});

test('Player cannot double place a ship', () => {
  const testPlayer = new Player();
  testPlayer.placeShip(0, 0, 1, 0);
  expect(() => testPlayer.placeShip(0, 0, 1, 0)).toThrow('Invalid Placement');
});

test('Player can attack other player', () => {
  const testPlayer = new Player();
  const otherPlayer = new Player();
  expect(Player.attack(0, 0, testPlayer)).toBeTruthy();
  expect(testPlayer.playerBoard.grid[0][0].attacked).toBe(true);
  expect(otherPlayer.playerBoard.grid[0][0].attacked).toBe(false);
});

test('AI Player can choose within target grid', () => {
  const testPlayer = new Player();
  const { x, y } = Player.chooseAttack(testPlayer);
  expect(x).toBeGreaterThanOrEqual(0);
  expect(y).toBeGreaterThanOrEqual(0);
  expect(x).toBeLessThan(testPlayer.playerBoard.grid.length);
  expect(y).toBeLessThan(testPlayer.playerBoard.grid.length);
});

test('Cannot shoot same space twice', () => {
  const testPlayer = new Player();
  const { x, y } = Player.chooseAttack(testPlayer);
  Player.attack(x, y, testPlayer);
  expect(Player.attack(x, y, testPlayer)).toBeFalsy();
});
