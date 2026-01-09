//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Node {
  constructor(prev = null, next = null, val = null){
    this.prev = prev;
    this.next = next;
    this.val = val;
  }
}

export class LinkedList {
    constructor() {
        this.last = new Node();
        this.first = new Node(null, this.last);
        this.last.prev = this.first;
    }
    push(numberValue) {
        const newNode = new Node(this.last.prev, this.last, numberValue);

        this.last.prev.next = newNode;
        this.last.prev = newNode;
    }

    pop() {
        const numberValue = this.last.prev.numberValue;

        this.last.prev.prev.next = this.last;
        this.last.prev = this.last.prev.prev;

        return numberValue;
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