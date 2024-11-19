import Ship from "./Ship.js";

export default class Gameboard {
  constructor() {
    this.board = Array.from({ length: 10 }, () => Array(10).fill(null));
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  printBoard() {
    this.board.forEach((row) => {
      console.log(row.map((cell) => (cell ? "S" : ".")).join(" "));
    });
  }

  place(ship, direction, [x, y]) {
    for (let i = 0; i < ship.size; i++) {
      const newX = direction === "h" ? x : x + i;
      const newY = direction === "v" ? y : y + i;

      if (newX >= 10 || newY >= 10 || this.board[newX][newY] !== null) {
        throw new Error("Invalid ship placement!");
      }
    }

    for (let i = 0; i < ship.size; i++) {
      const newX = direction === "h" ? x : x + i;
      const newY = direction === "v" ? y : y + i;
      this.board[newX][newY] = ship;
    }
  }

  attack([x, y]) {
    if (this.board[x][y] === null || this.board[x][y] === "o") {
      this.board[x][y] = "o";
    } else if (this.board[x][y] instanceof Ship) {
      this.board[x][y].hit();
    }
  }

  checkShips() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
