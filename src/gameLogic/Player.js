import Gameboard from './Gameboard';

class Player {
  constructor() {
    this.playerBoard = new Gameboard();
  }

  placeShip(x, y, shipLength, axis) {
    try {
      this.playerBoard.placeShip(x, y, shipLength, axis);
    } catch (error) {
      throw new Error(error);
    }
  }

  static attack(x, y, targetPlayer) {
    if (targetPlayer.playerBoard.receiveAttack(x, y)) return 1;
    return 0;
  }

  // this method is for use by the AI to randomly choose an space
  static chooseAttack(targetPlayer) {
    const boardLength = targetPlayer.playerBoard.grid.length;
    let x = Math.floor(Math.random() * boardLength);
    let y = Math.floor(Math.random() * boardLength);
    while (targetPlayer.playerBoard.grid[x][y].attacked) {
      x = Math.floor(Math.random() * boardLength);
      y = Math.floor(Math.random() * boardLength);
    }
    return ({ x, y });
  }
}

export default Player;
