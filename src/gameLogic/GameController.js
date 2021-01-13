import Player from './Player';

class GameController {
  constructor(devTest) {
    this.humanPlayer = new Player();
    this.computerPlayer = new Player();
    this.currentTurn = this.humanPlayer;

    if (devTest) {
      this.computerPlayer.placeShip(0, 0, 2, 0);
      this.computerPlayer.placeShip(4, 0, 3, 1);
    }
  }

  swapTurn() {
    if (this.currentTurn === this.humanPlayer) {
      this.currentTurn = this.computerPlayer;
      return;
    }
    this.currentTurn = this.humanPlayer;
  }

  takeTurn(x, y, targetPlayer) {
    if (targetPlayer) {
      Player.attack(x, y, targetPlayer);
      this.swapTurn();
      return this;
    }
    return this;
  }
}

export default GameController;
