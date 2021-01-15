import Gameboard from './Gameboard';

class Player {
  constructor(prevPlayer = null, computerPlayer = false) {
    if (!prevPlayer) {
      if (computerPlayer) {
        this.playerBoard = new Gameboard(true);
        return;
      }
      this.playerBoard = new Gameboard();
      return;
    }
    this.playerBoard = prevPlayer.playerBoard;
  }

  placeShip(x, y, shipLength, axis) {
    try {
      this.playerBoard.placeShip(x, y, shipLength, axis);
    } catch (error) {
      throw new Error(error);
    }
  }

  recieveAttack(x, y) {
    if (this.playerBoard.receiveAttack(y, x)) {
      return ({ player: (new Player(this)), badAttack: false });
    }
    return { player: this, badAttack: true };
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
