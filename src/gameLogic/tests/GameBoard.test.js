import { test, expect } from '@jest/globals';
import Gameboard from '../Gameboard';
import Cell from '../Cell';
import Ship from '../Ship';

test('Gameboard exists', () => {
  expect(Gameboard).toBeDefined();
});

test('Gameboard has a grid prop', () => {
  expect(new Gameboard().grid).toBeDefined();
});

test('Gameboard sets up a default grid', () => {
  expect(new Gameboard().grid).toEqual(
    new Array(10).fill(new Array(10).fill(new Cell())),
  );
});

test('Gameboard can place a ship of length 1', () => {
  const testCell = new Cell();
  testCell.recieveShip(new Ship(1), 0);
  const testBoard = new Gameboard();

  testBoard.placeShip(0, 0, 1, true);
  expect(testBoard.grid[0][0]).toEqual(testCell);
  expect(testBoard.grid[3][0]).toEqual(new Cell());
});

test('Gameboard can place a ship with length greater than 1', () => {
  const testShip = new Ship(3);
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 1, 3, true);
  expect(testBoard.grid[0][0]).toEqual(new Cell());
  expect(testBoard.grid[4][0]).toEqual(new Cell());
  expect(testBoard.grid[0][2]).toEqual(new Cell());
  expect(testBoard.grid[1][0].ship).toEqual(testShip);
  expect(testBoard.grid[2][0].ship).toEqual(testShip);
  expect(testBoard.grid[3][0].ship).toEqual(testShip);
  expect(testBoard.grid[1][0].shipPos).toEqual(0);
  expect(testBoard.grid[2][0].shipPos).toEqual(1);
  expect(testBoard.grid[3][0].shipPos).toEqual(2);
});

test('GameBoard can place a ship in both axis', () => {
  const testShip = new Ship(3);
  const testBoard = new Gameboard();
  testBoard.placeShip(2, 0, 3, false);
  expect(testBoard.grid[0][1].ship).toBeNull();
  expect(testBoard.grid[0][2].ship).toEqual(testShip);
  expect(testBoard.grid[0][3].ship).toEqual(testShip);
  expect(testBoard.grid[0][4].ship).toEqual(testShip);
  expect(testBoard.grid[0][5].ship).toBeNull();
});

test('GameBoard can place more than one ship', () => {
  const testShip = new Ship(2);
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 2, true);
  testBoard.placeShip(5, 0, 2, false);
  expect(testBoard.grid[0][0].ship).toEqual(testShip);
  expect(testBoard.grid[1][0].ship).toEqual(testShip);
  expect(testBoard.grid[2][0].ship).toBeNull();
  expect(testBoard.grid[0][5].ship).toEqual(testShip);
  expect(testBoard.grid[0][6].ship).toEqual(testShip);
  expect(testBoard.grid[1][6].ship).toBeNull();
  expect(testBoard.grid[1][5].ship).toBeNull();
  expect(testBoard.grid[0][7].ship).toBeNull();
});

test('GameBoard does not allow duplicate placements', () => {
  const testShip = new Ship(2);
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 2, true);
  expect(testBoard.grid[0][0].ship).toEqual(testShip);
  expect(testBoard.placeShip(0, 0, 1, false)).toBeFalsy();
  expect(testBoard.grid[0][0].ship).toEqual(testShip);
});

test('Checks OOB placements', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 8, 3, true);
  testBoard.placeShip(9, 0, 3, false);
  expect(testBoard.placeShip(0, 8, 3, true)).toBeFalsy();
  expect(testBoard.placeShip(9, 0, 3, false)).toBeFalsy();
  expect(testBoard).toEqual(new Gameboard());
});

test('Checks intersecting ships', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(1, 0, 3, true);
  expect(testBoard.placeShip(0, 0, 3, false)).toBeFalsy();
  const goodBoard = new Gameboard();
  goodBoard.placeShip(1, 0, 3, true);
  expect(testBoard).toEqual(goodBoard);
});

test('ReceiveAttack function exists', () => {
  expect(new Gameboard().receiveAttack).toBeDefined();
});

test('ReceiveAttack sets attacked to true', () => {
  const testBoard = new Gameboard();
  testBoard.receiveAttack(0, 0);
  expect(testBoard.grid[0][0].attacked).toBe(true);
});

test('ships can be hit multiple times', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 3, 1);
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(0, 1);
  const attackedShip = testBoard.grid[0][0].ship;
  expect(attackedShip.hits).toEqual([true, true, false]);
  expect(attackedShip.isSunk()).toBe(false);
});

test('ships can be sunk from via gameboard', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 3, true);
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(0, 1);
  testBoard.receiveAttack(0, 2);
  const attackedShip = testBoard.grid[0][0].ship;
  expect(attackedShip.hits).toEqual([true, true, true]);
  expect(attackedShip.isSunk()).toBe(true);
});

test('Can tell if all ships are sunk with one ship', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 3, true);
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(0, 1);
  testBoard.receiveAttack(0, 2);
  expect(testBoard.allSunk()).toBe(true);
});

test('allSunk is false when only one ship is sunk', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 1, 1);
  testBoard.placeShip(1, 0, 1, 1);
  testBoard.receiveAttack(0, 0);
  expect(testBoard.allSunk()).toBe(false);
});

test('allSunk is true when all ships are sunk', () => {
  const testBoard = new Gameboard();
  testBoard.placeShip(0, 0, 1, 1);
  testBoard.placeShip(1, 0, 1, 1);
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(1, 0);
  expect(testBoard.allSunk()).toBe(true);
});

test('allShot return false after construction', () => {
  const testBoard = new Gameboard();
  expect(testBoard.allShot()).toBe(false);
});

test('allShot returns true after all are shot', () => {
  const testBoard = new Gameboard(1);
  testBoard.receiveAttack(0, 0);
  expect(testBoard.allShot()).toBe(true);
});
