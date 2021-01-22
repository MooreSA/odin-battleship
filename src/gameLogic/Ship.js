class Ship {
  constructor(length) {
    this.length = length;
    this.hits = new Array(length).fill(false);
  }

  // returns true if the attack was valid
  hit(position) {
    if (position > this.hits.length) {
      return false;
    }
    this.hits[position] = true;
    return true;
  }

  isSunk() {
    return this.hits.every((element) => element);
  }
}

export default Ship;
