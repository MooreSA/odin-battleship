import Gameboard from './Gameboard';

class Player {
  constructor(gridLength) {
    this.playerBoard = new Gameboard(gridLength);
  }

  placeShip(x, y, shipLength, verticle) {
    return this.playerBoard.placeShip(x, y, shipLength, verticle);
  }

  recieveAttack(x, y) {
    return this.playerBoard.receiveAttack(x, y);
  }

  // this method is for use by the AI to randomly choose an space
  static chooseAttack(targetPlayer) {
    const boardLength = targetPlayer.playerBoard.grid.length;
    let x = Math.floor(Math.random() * boardLength);
    let y = Math.floor(Math.random() * boardLength);
    let counter = 1;
    while (targetPlayer.playerBoard.grid[y][x].attacked) {
      counter += 1;
      x = Math.floor(Math.random() * boardLength);
      y = Math.floor(Math.random() * boardLength);
      // there is a better way of doing this, but I don't want to.
      if (counter >= 30) return ({ x, y });
    }
    return ({ x, y });
  }
}

export default Player;
