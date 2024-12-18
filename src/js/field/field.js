export default class Field {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new Error("Ожидался DOM элемент");
    }
    this.element = element;
    this.activeHole = null;
    this.holes = this.element.querySelectorAll(".hole");
  }

  activateHole(index) {
    if (!this.holes[index]) {
      throw new Error("Такого элемента в массиве нет");
    }

    this.deactivateHole(this.activeHole);

    this.holes[index].classList.add("hole_active");
    this.activeHole = this.holes[index];
  }

  deactivateHole(activeHole) {
    if (activeHole) {
      activeHole.classList.remove("hole_active");
    }
  }
}
