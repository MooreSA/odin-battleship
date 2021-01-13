class Ship {
  constructor(length) {
    this.sunk = false;
    this.length = length;
    this.hits = new Array(length).fill(false);
  }

  hit(position) {
    if (position > this.length || position < 0) {
      return;
    }
    this.hits[position] = true;
    this.isSunk();
  }

  isSunk() {
    if (this.hits.every((element) => element)) this.sunk = true;
  }
}

export default Ship;
