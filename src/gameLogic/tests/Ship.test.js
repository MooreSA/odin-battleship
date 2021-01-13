import { test, expect } from '@jest/globals';
import Ship from '../Ship';

test('Ship Exists', () => {
  expect(new Ship()).toBeDefined();
});

test('Ship has a length prop', () => {
  const testShip = new Ship(3);
  expect(testShip.length).toBeDefined();
});

test('Ship sets length properly', () => {
  const testShip = new Ship(4);
  expect(testShip.length).toEqual(4);
});

test('Ship has sunk prop', () => {
  const testShip = new Ship();
  expect(testShip.sunk).toBeDefined();
});

test('Ship has a hit tracker', () => {
  expect(new Ship().hits).toBeDefined();
});

test('Ship hit method marks position correctly', () => {
  const testShip = new Ship(3);
  testShip.hit(0);
  expect(testShip.hits).toEqual([true, false, false]);
});

test('Ship can be hit multiple times', () => {
  const testShip = new Ship(4);
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  expect(testShip.hits).toEqual([true, true, true, false]);
});

test('Ship can be hit in same spot twice', () => {
  const testShip = new Ship(4);
  testShip.hit(0);
  testShip.hit(0);
  testShip.hit(2);
  expect(testShip.hits).toEqual([true, false, true, false]);
});

test('Ship handles hit bad input', () => {
  const testShip = new Ship(4);
  testShip.hit(10);
  expect(testShip.hits).toEqual([false, false, false, false]);
});

test('Ship can be sunk', () => {
  const testShip = new Ship(2);
  testShip.hit(0);
  testShip.hit(1);
  expect(testShip.sunk).toEqual(true);
});

test('Ship is not sunk until all positions are hit', () => {
  const testShip = new Ship(2);
  testShip.hit(0);
  expect(testShip.sunk).toEqual(false);
});
