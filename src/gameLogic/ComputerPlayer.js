import Player from './Player';

class ComputerPlayer extends Player {
  findPlacement(shipLength) {
    let y = Math.floor(Math.random() * this.playerBoard.grid.length);
    let x = Math.floor(Math.random() * this.playerBoard.grid.length);
    // this returns a bool with 50/50 either way
    let verticle = (Math.random() < 0.5);

    while (!this.placeShip(x, y, shipLength, verticle)) {
      y = Math.floor(Math.random() * this.playerBoard.grid.length);
      x = Math.floor(Math.random() * this.playerBoard.grid.length);
      verticle = Math.random() < 0.5;
    }
  }

  populateBoard() {
    const shipLengths = [5, 4, 3, 3, 2, 2];
    for (let i = 0; i < shipLengths.length; i += 1) {
      this.findPlacement(shipLengths[i]);
    }
  }

  static selectTarget(targetPlayer) {
    if (targetPlayer.playerBoard.allShot()) return false;
    const targetGrid = targetPlayer.playerBoard.grid;
    let y = Math.floor(Math.random() * targetGrid.length);
    while (!this.checkRow(targetGrid, y)) {
      y = Math.floor(Math.random() * targetGrid.length);
    }
    let x = Math.floor(Math.random() * targetGrid.length);
    while (targetGrid[y][x].attacked) {
      x = Math.floor(Math.random() * targetGrid.length);
    }
    return { x, y };
  }

  static checkRow(targetGrid, rowNum) {
    for (let i = 0; i < targetGrid.length; i += 1) {
      if (!targetGrid[rowNum][i].attacked) {
        return true;
      }
    }
    return false;
  }
}

export default ComputerPlayer;
