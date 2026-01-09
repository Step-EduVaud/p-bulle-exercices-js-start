//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    accountBalance;
    isClosed;

    constructor() {
        this.accountBalance = 0;
        this.isClosed = true;
    }

    open() {
        if (this.isClosed) {
            this.accountBalance = 0;
            this.isClosed = false;
        } else
            throw new ValueError();
    }

    close() {
        if (!this.isClosed) {
            this.accountBalance = 0;
            this.isClosed = true;
        } else
            throw new ValueError();
    }

    deposit(numberAmount) {
        if (!this.isClosed && numberAmount >= 0 && this.accountBalance + numberAmount >= 0)
            return this.accountBalance += numberAmount
        else
            throw new ValueError();
    }

    withdraw(numberAmount) {
        if (!this.isClosed && this.accountBalance >= numberAmount && numberAmount >= 0)
            return this.accountBalance -= numberAmount
        else
            throw new ValueError();
    }

    get balance() {
        if (!this.isClosed)
            return this.accountBalance;
        else
            throw new ValueError();
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}