import Field from "./field.js";

let element;
let field;

beforeEach(() => {
  element = document.createElement("div");
  element.innerHTML = `<div class="field"></div>`;

  field = new Field(element);
  field.generateField();
});

test("Проверка полей экземляра класса", () => {
  expect(field.holes.length).toBe(16);
  expect(field.element).toBe(element);
  expect(() => {
    const fieldTest = new Field(10);
    fieldTest.activateHole(10);
  }).toThrow(Error);
});

test("Проверка метода activateHole()", () => {
  field.activateHole(1);
  expect(field.holes[1].classList.contains("hole_active")).toBe(true);

  expect(() => {
    field.activateHole(17);
  }).toThrow(Error);
});

test("Проверка метода deactivateHole()", () => {
  field.activateHole(1);
  expect(field.holes[1].classList.contains("hole_active")).toBe(true);

  field.deactivateHole(field.activeHole);
  expect(field.holes[1].classList.contains("hole_active")).toBe(false);
});
