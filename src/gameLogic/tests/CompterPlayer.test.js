import { test, expect } from '@jest/globals';
import ComputerPlayer from '../ComputerPlayer';
import Player from '../Player';

test('Computer Player Exists', () => {
  expect(ComputerPlayer).toBeDefined();
});

test('Computer Player has a board', () => {
  const testAi = new ComputerPlayer();
  expect(testAi.playerBoard).toBeDefined();
});

test('AI can select a target X cord', () => {
  const targetPlayer = new Player();
  const targetGridLength = targetPlayer.playerBoard.grid.length;
  const targetCords = ComputerPlayer.selectTarget(targetPlayer);
  const { x, y } = targetCords;
  expect(x).toBeDefined();
  expect(x).toBeGreaterThanOrEqual(0);
  expect(x).toBeLessThan(targetGridLength);
  expect(y).toBeDefined();
  expect(y).toBeGreaterThanOrEqual(0);
  expect(y).toBeLessThan(targetGridLength);
});

test('AI does NOT infinite loop if all spaces are shot', () => {
  const targetPlayer = new Player(1);
  targetPlayer.recieveAttack(0, 0);
  expect(ComputerPlayer.selectTarget(targetPlayer)).toBe(false);
});

test('AI can populate board with default grid', () => {
  const testAi = new ComputerPlayer();
  testAi.populateBoard();
  let shipFlag = false;
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (testAi.playerBoard.grid[i][j].ship) {
        shipFlag = true;
      }
    }
  }
  expect(shipFlag).toBe(true);
});
