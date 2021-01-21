import { test, expect } from '@jest/globals';
import Gameboard from '../Gameboard';
import Ship from '../Ship';

test.todo('all tests');

// test('Gameboard exists', () => {
//   expect(Gameboard).toBeDefined();
// });

// test('Gameboard has a grid prop', () => {
//   expect(new Gameboard().grid).toBeDefined();
// });

// test('Gameboard sets up a default grid', () => {
//   const gridItem = {
//     attacked: false,
//     ship: null,
//   };
//   expect(new Gameboard().grid).toEqual(
//     new Array(5).fill(new Array(5).fill(gridItem)),
//   );
// });

// test('Gameboard can place a ship of length 1', () => {
//   const gridItem = {
//     attacked: false,
//     ship: null,
//   };
//   const placedShip = new Ship(1);
//   const gridOccupied = {
//     attacked: false,
//     ship: placedShip,
//     shipPos: 0,
//   };
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 1, 0);
//   expect(testBoard.grid).toEqual(
//     [
//       [gridOccupied, gridItem, gridItem, gridItem, gridItem],
//       [gridItem, gridItem, gridItem, gridItem, gridItem],
//       [gridItem, gridItem, gridItem, gridItem, gridItem],
//       [gridItem, gridItem, gridItem, gridItem, gridItem],
//       [gridItem, gridItem, gridItem, gridItem, gridItem],
//     ],
//   );
// });

// test('Can place a ship in both axis', () => {
//   const emptyGrid = {
//     attacked: false,
//     ship: null,
//   };
//   const shipOne = new Ship(2);
//   const shipTwo = new Ship(3);
//   const shipOneGridItem = {
//     attacked: false,
//     ship: shipOne,
//   };
//   const shipTwoGridItem = {
//     attacked: false,
//     ship: shipTwo,
//   };
//   const newBoard = new Gameboard();
//   newBoard.placeShip(0, 0, 2, 0);
//   newBoard.placeShip(4, 0, 3, 1);
//   expect(newBoard.grid).toEqual(
//     [
//       [{ ...shipOneGridItem, shipPos: 0 }, emptyGrid, emptyGrid, emptyGrid, emptyGrid],
//       [{ ...shipOneGridItem, shipPos: 1 }, emptyGrid, emptyGrid, emptyGrid, emptyGrid],
//       [emptyGrid, emptyGrid, emptyGrid, emptyGrid, emptyGrid],
//       [emptyGrid, emptyGrid, emptyGrid, emptyGrid, emptyGrid],
//       [
//         { ...shipTwoGridItem, shipPos: 0 },
//         { ...shipTwoGridItem, shipPos: 1 },
//         { ...shipTwoGridItem, shipPos: 2 },
//         emptyGrid,
//         emptyGrid,
//       ],
//     ],
//   );
// });

// test('Checks out of bounds placement in y cords', () => {
//   const emptyGrid = {
//     attacked: false,
//     ship: null,
//   };
//   const newBoard = new Gameboard(0);
//   newBoard.placeShip(0, 5, 1, 1);
//   expect(newBoard.grid).toEqual(
//     new Array(5).fill(new Array(5).fill(emptyGrid)),
//   );
// });

// test('Checks out of bounds placement in x cords', () => {
//   const emptyGrid = {
//     attacked: false,
//     ship: null,
//   };
//   const newBoard = new Gameboard(0);
//   newBoard.placeShip(5, 0, 1, 0);
//   expect(newBoard.grid).toEqual(
//     new Array(5).fill(new Array(5).fill(emptyGrid)),
//   );
// });

// test('Checks out of bounds placement in both directions', () => {
//   const emptyGrid = {
//     attacked: false,
//     ship: null,
//   };
//   const newBoard = new Gameboard(0);
//   newBoard.placeShip(0, 5, 1, 0);
//   newBoard.placeShip(5, 0, 1, 1);
//   expect(newBoard.grid).toEqual(
//     new Array(5).fill(new Array(5).fill(emptyGrid)),
//   );
// });

// test('Checks for already occupied grid', () => {
//   const newBoard = new Gameboard();
//   newBoard.placeShip(0, 0, 3, 1);
//   expect(() => newBoard.placeShip(0, 0, 3, 1)).toThrow('Invalid Placement');
// });

// test('Checks intersecting ships', () => {
//   const newBoard = new Gameboard();
//   newBoard.placeShip(1, 1, 2, 0);
//   expect(() => newBoard.placeShip(1, 0, 2, 1)).toThrow('Invalid Placement');
// });

// test('ReceiveAttack function exists', () => {
//   expect(new Gameboard().receiveAttack).toBeDefined();
// });

// test('ReceiveAttack sets attacked to true', () => {
//   const testBoard = new Gameboard();
//   testBoard.receiveAttack(0, 0);
//   expect(testBoard.grid[0][0].attacked).toBe(true);
// });

// test('receiveAttack hits the ship on the cord', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 1, 0);
//   testBoard.receiveAttack(0, 0);
//   const attackedShip = testBoard.grid[0][0].ship;
//   expect(attackedShip.hits).toEqual([true]);
// });

// test('ships can be hit multiple times', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 3, 1);
//   testBoard.receiveAttack(0, 0);
//   testBoard.receiveAttack(0, 1);
//   const attackedShip = testBoard.grid[0][0].ship;
//   expect(attackedShip.hits).toEqual([true, true, false]);
//   expect(attackedShip.sunk).toBeFalsy();
// });

// test('ships can be sun from multiple times', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 3, 1);
//   testBoard.receiveAttack(0, 0);
//   testBoard.receiveAttack(0, 1);
//   testBoard.receiveAttack(0, 2);
//   const attackedShip = testBoard.grid[0][0].ship;
//   expect(attackedShip.hits).toEqual([true, true, true]);
//   expect(attackedShip.sunk).toEqual(true);
// });

// test('Can tell if all ships are sunk with one ship', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 3, 1);
//   testBoard.receiveAttack(0, 0);
//   testBoard.receiveAttack(0, 1);
//   testBoard.receiveAttack(0, 2);
//   expect(testBoard.allSunk()).toBe(true);
// });

// test('allSunk is false when only one ship is sunk', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 1, 1);
//   testBoard.placeShip(1, 0, 1, 1);
//   testBoard.receiveAttack(0, 0);
//   expect(testBoard.allSunk()).toBe(false);
// });

// test('allSunk is true when all ships are sunk', () => {
//   const testBoard = new Gameboard();
//   testBoard.placeShip(0, 0, 1, 1);
//   testBoard.placeShip(1, 0, 1, 1);
//   testBoard.receiveAttack(0, 0);
//   testBoard.receiveAttack(1, 0);
//   expect(testBoard.allSunk()).toBe(true);
// });
