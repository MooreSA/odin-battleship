import Ship from './Ship';
import Cell from './Cell';

class Gameboard {
  constructor(gridLength = 10) {
    this.grid = [];

    for (let i = 0; i < gridLength; i += 1) {
      this.grid.push([]);
      for (let j = 0; j < gridLength; j += 1) {
        this.grid[i].push(new Cell());
      }
    }
  }

  validatePlacement(x, y, shipLength, verticle) {
    if (this.checkBounds(x, y, shipLength, verticle) === false) {
      return false;
    }
    if (this.checkDuplicate(x, y, shipLength, verticle) === false) {
      return false;
    }
    return true;
  }

  checkDuplicate(x, y, shipLength, verticle) {
    for (let i = 0; i < shipLength; i += 1) {
      if (verticle) {
        if (this.grid[y + i][x].ship) {
          return false;
        }
      } else if (this.grid[y][x + i].ship) return false;
    }
    return true;
  }

  checkBounds(x, y, shipLength, verticle) {
    if (verticle) {
      if ((y + shipLength) > this.grid.length) return false;
    } else if (x + shipLength > this.grid.length) return false;
    return true;
  }

  placeShip(x, y, shipLength, verticle) {
    if (!this.validatePlacement(x, y, shipLength, verticle)) {
      return false;
    }
    const newShip = new Ship(shipLength);
    for (let i = 0; i < shipLength; i += 1) {
      if (verticle) {
        this.grid[y + i][x].recieveShip(newShip, i);
      } else {
        this.grid[y][x + i].recieveShip(newShip, i);
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    if (x > this.grid.length || y > this.grid.length) {
      // bad attack
      return false;
    }
    return this.grid[y][x].receiveAttack();
  }

  // get two random nums within the limits of the grid
  generateShipGrid() {
    const x = Math.floor(Math.random() * this.grid.length);
    const y = Math.floor(Math.random() * this.grid.length);
    return ({ x, y });
  }

  allSunk() {
    for (let i = 0; i < this.grid.length; i += 1) {
      for (let j = 0; j < this.grid[i].length; j += 1) {
        const { ship } = this.grid[i][j];
        if (ship) {
          if (!ship.isSunk()) return false;
        }
      }
    }
    return true;
  }

  allShot() {
    for (let i = 0; i < this.grid.length; i += 1) {
      for (let j = 0; j < this.grid.length; j += 1) {
        if (!this.grid[i][j].attacked) return false;
      }
    }
    return true;
  }
}

export default Gameboard;
