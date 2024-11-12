// Ships class
import Ship from "./Ship.js";

test("ships get properly created", () => {
  const ships = [
    new Ship(5),
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
  ];
  const expectedSizes = [5, 4, 3, 3, 2];
  ships.forEach((ship, i) => {
    expect(ship.size).toBe(expectedSizes[i]);
  });
});

test("Ships can get properly hit.", () => {
  const ship1 = new Ship(5);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.hits).toBe(3);
});

test("Ships doesnt get sunk when hit too few times", () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBe(false);
});

test("Ships get sunk when hit enough times", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.sunk).toBe(true);
});
