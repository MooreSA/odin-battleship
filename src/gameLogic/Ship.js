class Ship {
  constructor(length, ship) {
    if (ship) {
      this.length = ship.length;
      this.hits = ship.hits;
      return;
    }
    this.length = length;
    this.hits = new Array(length).fill(false);
  }

  hit(position) {
    if (position > this.length) {
      return this;
    }
    this.hits[position] = true;
    return new Ship(null, this);
  }

  isSunk() {
    return this.hits.every((element) => element);
  }
}

export default Ship;
