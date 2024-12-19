import Field from "./field/field.js";

export default class App {
  static init() {
    this.element = document.querySelector(".field");
    this.field = new Field(this.element);

    this.field.generateField();
    this.createInterval();
  }

  static createInterval() {
    let lastIndex;
    let index;

    const newHoleInterval = setInterval(() => {
      do {
        index = Math.floor(Math.random() * 16);
      } while (index === lastIndex);

      lastIndex = index;
      this.field.activateHole(index);
    }, 1000);

    if (newHoleInterval) {
      console.log("Интервал запущен");
    }
  }
}
