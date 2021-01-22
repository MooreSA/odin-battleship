class Cell {
  constructor() {
    this.attacked = false;
    this.ship = null;
    this.shipPos = null;
  }

  recieveShip(ship, shipPos) {
    if (this.ship) return false;
    this.ship = ship;
    this.shipPos = shipPos;
    return true;
  }

  receiveAttack() {
    if (this.attacked) {
      return false;
    }
    this.attacked = true;
    if (this.ship) {
      this.ship.hit(this.shipPos);
    }
    return true;
  }
}

export default Cell;
