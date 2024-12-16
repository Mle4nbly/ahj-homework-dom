// TODO: write code here
import Field from "./field/field.js";

document.addEventListener('DOMContentLoaded', () => {
    const field = new Field(document.querySelector('.field'));
    let lastIndex = -1;

    const newHoleInterval = setInterval(() => {
        let index;

        do {
            index = Math.floor(Math.random() * 16);
        } while (index === lastIndex);
        
        lastIndex = index;
        field.activateHole( index );
    }, 1000);
});