export default class Ship {
  constructor(size) {
    this.size = size;
    this.hits = 0;
    this.sunk = false;
  }
  hit() {
    this.hits++;
    this.sunk = this.isSunk();
  }
  isSunk() {
    return this.hits >= this.size;
  }
}
