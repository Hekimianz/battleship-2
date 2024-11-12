import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";
test("Gameboard is created properly", () => {
  const board = new Gameboard();
  const expectedBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
  expect(board.board).toEqual(expectedBoard);
});

test("Gameboard places ships correctly horizontaly", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.place(ship, "h", [0, 1]);
  expect(board.board[0][1]).toBe(ship);
  expect(board.board[0][2]).toBe(ship);
  expect(board.board[0][3]).toBe(ship);
});

test("Gameboard places ships correctly vertically", () => {
  const board = new Gameboard();
  const ship = new Ship(3);
  board.place(ship, "v", [5, 0]);
  expect(board.board[5][0]).toBe(ship);
  expect(board.board[6][0]).toBe(ship);
  expect(board.board[7][0]).toBe(ship);
});

test("Gameboard attacks properly a ship", () => {
  const board = new Gameboard();
  const ship = new Ship(2);
  board.place(ship, "h", [0, 0]);
  board.attack([0, 0]);
  board.attack([0, 1]);
  board.attack([1, 0]);
  expect(ship.isSunk()).toBe(true);
  expect(board.board[1][0]).toBe("o");
});

test("When not all ships are sunk, checkShips returns false", () => {
  const board = new Gameboard();
  board.place(board.ships[0], "h", [0, 0]);
  board.attack([0, 0]);
  expect(board.checkShips()).toBe(false);
});

test("When all ships are placed and sunk, checkShips returns true", () => {
  const board = new Gameboard();

  board.place(board.ships[0], "h", [0, 0]);
  board.place(board.ships[1], "h", [1, 0]);
  board.place(board.ships[2], "h", [2, 0]);
  board.place(board.ships[3], "h", [3, 0]);
  board.place(board.ships[4], "h", [4, 0]);

  board.attack([0, 0]);
  board.attack([0, 1]);
  board.attack([0, 2]);
  board.attack([0, 3]);
  board.attack([0, 4]);
  board.attack([1, 0]);
  board.attack([1, 1]);
  board.attack([1, 2]);
  board.attack([1, 3]);
  board.attack([2, 0]);
  board.attack([2, 1]);
  board.attack([2, 2]);
  board.attack([3, 0]);
  board.attack([3, 1]);
  board.attack([3, 2]);
  board.attack([4, 0]);
  board.attack([4, 1]);

  expect(board.checkShips()).toBe(true);
});
