import Player from './Player';
import ComputerPlayer from './ComputerPlayer';

class GameController {
  constructor(oldController) {
    if (oldController) {
      this.humanPlayer = oldController.humanPlayer;
      this.computerPlayer = oldController.computerPlayer;
      this.winner = oldController.winner;
      return;
    }
    this.humanPlayer = new Player();
    this.computerPlayer = new ComputerPlayer();
    this.winner = null;
  }

  gameStart() {
    this.computerPlayer.populateBoard();
    return { game: new GameController(this) };
  }

  humanPlace(x, y, shipLength, verticle) {
    // humanPlayer.placeShip() returns a boolean value if it's a good placement
    if (this.humanPlayer.placeShip(x, y, shipLength, verticle)) {
      return { error: false, game: new GameController(this) };
    }
    return { error: true, game: this };
  }

  humanAttack(x, y) {
    if (this.computerPlayer.recieveAttack(x, y)) {
      if (this.computerPlayer.playerBoard.allSunk()) {
        this.winner = 'Human';
        return { error: false, game: new GameController(this) };
      }
      this.computerAttack();
      if (this.humanPlayer.playerBoard.allSunk()) {
        this.winner = 'Computer';
        return { error: false, game: new GameController(this) };
      }
      return { error: false, game: new GameController(this) };
    }
    return { error: true, game: this };
  }

  computerAttack() {
    const { x, y } = ComputerPlayer.selectTarget(this.humanPlayer);
    if (this.humanPlayer.recieveAttack(x, y)) {
      return { error: false, game: new GameController(this) };
    }
    return { error: true, game: this };
  }
}

export default GameController;
