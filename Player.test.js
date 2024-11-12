import Player from "./Player";
test("player has a board", () => {
  const player = new Player("aram", false);
  const expectedBoard = Array.from({ length: 10 }, () => Array(10).fill(null));
  expect(player.board.board).toEqual(expectedBoard);
});
