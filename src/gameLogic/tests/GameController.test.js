import { test, expect } from '@jest/globals';
import GameController from '../GameController';
import Player from '../Player';
import Ship from '../Ship';

test.todo('all of them');

// test('Gamecontroller creates players properly', () => {
//   const testGame = new GameController();

//   expect(testGame.humanPlayer).toEqual(new Player());
//   expect(testGame.computerPlayer).toEqual(new Player());
// });

// test('GameController defaults the turn to be human', () => {
//   const testGame = new GameController();

//   const { humanPlayer } = testGame;
//   expect(testGame.currentTurn).toBe(humanPlayer);
// });

// test('GameController can swap turns', () => {
//   const testGame = new GameController();
//   testGame.swapTurn();
//   const { computerPlayer } = testGame;
//   expect(testGame.currentTurn).toBe(computerPlayer);
// });

// test('GameController can swap turns multiple times', () => {
//   const testGame = new GameController(true);
//   testGame.swapTurn();
//   testGame.swapTurn();
//   const { humanPlayer } = testGame;
//   expect(testGame.currentTurn).toBe(humanPlayer);
// });

// test('GameController can populate players gameboards', () => {
//   const testGame = new GameController(true);

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

//   const { computerPlayer } = testGame;
//   const { playerBoard } = computerPlayer;

//   expect(playerBoard.grid).toEqual(
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
//   expect();
// });
