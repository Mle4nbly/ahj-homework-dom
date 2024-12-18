import Field from "./field.js";

let element;
let field;

beforeEach(() => {
  element = document.createElement("div");
  element.innerHTML = `
        <div class="hole"></div>
        <div class="hole"></div>
        <div class="hole"></div>
    `;

  field = new Field(element);
});

test("Проверка полей экземляра класса", () => {
  expect(field.holes.length).toBe(3);
  expect(field.element).toBe(element);
  expect(() => {
    const fieldTest = new Field(10);
    fieldTest.activateHole(1);
  }).toThrow(Error);
});

test("Проверка метода activateHole()", () => {
  field.activateHole(1);
  expect(field.holes[1].classList.contains("hole_active")).toBe(true);

  expect(() => {
    field.activateHole(4);
  }).toThrow(Error);
});

test("Проверка метода deactivateHole()", () => {
  field.activateHole(1);
  expect(field.holes[1].classList.contains("hole_active")).toBe(true);

  field.deactivateHole(field.activeHole);
  expect(field.holes[1].classList.contains("hole_active")).toBe(false);
});
