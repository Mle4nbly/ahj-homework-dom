export default class Field {
    constructor( element ) {
        this.element = element;
        this.holes = this.element.querySelectorAll('.hole')
    };

    activateHole( index ) {
        this.deactivateHole();

        this.holes[index].classList.add('hole_active');
    };

    deactivateHole() {
        const activeHole = this.element.querySelector('.hole_active');
        
        if (activeHole) {
            activeHole.classList.remove('hole_active');
        };
    };
};