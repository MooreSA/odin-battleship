import Ship from './Ship';

class Gameboard {
  constructor() {
    this.grid = [
      (new Array(5).fill({ attacked: false, ship: null })),
      (new Array(5).fill({ attacked: false, ship: null })),
      (new Array(5).fill({ attacked: false, ship: null })),
      (new Array(5).fill({ attacked: false, ship: null })),
      (new Array(5).fill({ attacked: false, ship: null })),
    ];
    this.allShipsSunk = false;
  }

  badPlacement(xCord, yCord, shipLength, direction) {
    if (direction === 1) {
      if (yCord + shipLength > this.grid.length || xCord >= this.grid.length) {
        return true;
      }
      return false;
    }
    if (xCord + shipLength > this.grid.length || yCord >= this.grid.length) {
      return true;
    }
    return false;
  }

  placeShip(xCord, yCord, shipLength, direction) {
    if (!shipLength) return;
    if (!this.badPlacement(xCord, yCord, shipLength, direction)) {
      const newGrid = this.grid.map((item) => item);
      const newShip = new Ship(shipLength);
      if (direction) {
        for (let i = 0; i < shipLength; i += 1) {
          if (newGrid[xCord][yCord + i].ship !== null) {
            throw new Error('Invalid Placement');
          }
          newGrid[xCord][yCord + i] = { attacked: false, ship: newShip, shipPos: i };
        }
        return;
      }
      for (let i = 0; i < shipLength; i += 1) {
        if (newGrid[xCord + i][yCord].ship !== null) {
          throw new Error('Invalid Placement');
        }
        newGrid[xCord + i][yCord] = { attacked: false, ship: newShip, shipPos: i };
      }
      this.grid = newGrid;
    }
  }

  receiveAttack(x, y) {
    if (this.grid[x][y].attacked) return 0;
    this.grid[x][y].attacked = true;
    const { ship, shipPos } = this.grid[x][y];
    if (ship) {
      ship.hit(shipPos);
      this.allSunk();
    }
    return 1;
  }

  allSunk() {
    for (let i = 0; i < this.grid.length; i += 1) {
      for (let j = 0; j < this.grid[i].length; j += 1) {
        const { ship } = this.grid[i][j];
        if (ship) {
          if (!ship.sunk) return false;
        }
      }
    }
    return true;
  }
}

export default Gameboard;
