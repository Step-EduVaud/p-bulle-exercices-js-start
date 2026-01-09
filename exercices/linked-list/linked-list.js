//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
    constructor() {
        this.tab = [];
    }
    push(numberValue) {
        this.tab[this.tab.length] = numberValue;
        return this.tab.length;
    }

    pop() {
        if (this.tab.length === 0)
            return undefined;

        const result = this.tab[this.tab.length - 1];

        this.tab.length = this.tab.length - 1;
        return result;
    }


    shift() {
        if (this.tab.length === 0)
            return undefined;

        const result = this.tab[0];

        for (let i = 1; i < this.tab.length; i++) {
            this.tab[i - 1] = this.tab[i];
        }

        this.tab.splice(this.tab.length - 1);
        return result;
    }

    unshift(...numberValue) {
        for (let i = this.tab.length; i >= 0; i--) {
            this.tab[i + numberValue.length - 1] = this.tab[i - 1];
        }
        for (let i = 0; i < numberValue.length; i++) {
            this.tab[i] = numberValue[i];
        }
        return this.tab.length;
    }

    delete(numberValue) {
        let indexResult = this.tab.indexOf(numberValue);
        if (indexResult === -1)
            return undefined;
        for (let i = indexResult + 1; i < this.tab.length; i++) {
            this.tab[i - 1] = this.tab[i];
        }
        this.tab.length = this.tab.length - 1;
        return numberValue;
    }

    count() {
        let numberCount = 0;
        for (let i = 0; i < this.tab.length; i++) {
            numberCount++;
        }
        return numberCount;
    }
}