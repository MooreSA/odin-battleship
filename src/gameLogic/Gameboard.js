import Ship from './Ship';

class Gameboard {
  // eslint-disable-next-line no-unused-vars
  constructor(generateBoard = false) {
    // there must be a better way of doing this without using the same object
    // pass by reference sucks
    this.grid = [
      [
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
      ],
      [
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
      ],
      [
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
      ],
      [
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
      ],
      [
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
        { attacked: false, ship: null },
      ],
    ];

    if (generateBoard) {
      // initialise ships for ai
      const ships = [3, 3, 2, 1];
      let direction = 0;
      // get initial cords
      let { x, y } = this.generateShipGrid();

      // iterate through ship lengths
      for (let i = 0; i < ships.length; i += 1) {
        // if this is a bad placement, loop until good placement
        while (this.placeShip(x, y, ships[i], direction) === false) {
          // literally no idea why this won't work inside this loop
          // but it won't
          // { x, y } = this.generateShipGrid();
          //
          // randomise x and y
          x = Math.floor(Math.random() * this.grid.length);
          y = Math.floor(Math.random() * this.grid.length);
          if (direction) {
            direction = 0;
          } else {
            direction = 1;
          }
        }
        this.placeShip(x, y, 1, 0);
      }
    }
    this.allShipsSunk = false;
  }

  // get two random nums within the limits of the grid
  generateShipGrid() {
    const x = Math.floor(Math.random() * this.grid.length);
    const y = Math.floor(Math.random() * this.grid.length);
    return ({ x, y });
  }

  // returns true if the placement of the ship will overflow
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
    // no shiplength is unplacable
    if (!shipLength) return false;
    if (!this.badPlacement(xCord, yCord, shipLength, direction)) {
      // make a new grid so we don't alter the old one by mistake
      const newGrid = this.grid.map((item) => item);
      const newShip = new Ship(shipLength);
      if (direction) {
        for (let i = 0; i < shipLength; i += 1) {
          if (newGrid[xCord][yCord + i].ship !== null) {
            // if the ship will overlap with another
            return false;
          }
          newGrid[xCord][yCord + i] = { attacked: false, ship: newShip, shipPos: i };
        }
        this.grid = newGrid;
        return true;
      }
      for (let i = 0; i < shipLength; i += 1) {
        if (newGrid[xCord + i][yCord].ship !== null) {
          return false;
        }
        newGrid[xCord + i][yCord] = { attacked: false, ship: newShip, shipPos: i };
      }
      this.grid = newGrid;
      return true;
    }
    return false;
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
