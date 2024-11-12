import Gameboard from "./Gameboard.js";
export default class Player {
  constructor(name, ai) {
    this.name = name;
    this.ai = ai;
    this.board = new Gameboard();
  }
}
