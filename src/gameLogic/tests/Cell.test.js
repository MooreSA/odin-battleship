import { test, expect } from '@jest/globals';
import Cell from '../Cell';
import Ship from '../Ship';

test('Cell exists', () => expect(Cell).toBeDefined());

test('Cell can have a ship in it', () => {
  const cell = new Cell();
  cell.recieveShip(new Ship(1), 0);
  expect(cell.ship).toEqual(new Ship(1));
});

test('Cell has an attack function', () => {
  const testCell = new Cell();
  expect(testCell.receiveAttack).toBeDefined();
});

test('Cell sets attacked to true with no ship', () => {
  const testCell = new Cell();
  expect(testCell.receiveAttack()).toBeTruthy();
  expect(testCell.attacked).toBeTruthy();
  expect(testCell.ship).toBeNull();
  expect(testCell.shipPos).toBeNull();
});

test('Cell will properly attack the ship', () => {
  const testCell = new Cell();
  const testShip = new Ship(1);
  testCell.recieveShip(testShip, 0);
  expect(testCell.receiveAttack()).toBeTruthy();
  expect(testShip.hits[0]).toBeTruthy();
  expect(testShip.isSunk()).toBeTruthy();
});
