//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  accountBalance;
  isClosed;
  x
  constructor() {
    this.accountBalance = 0;
    this.isClosed = true;
  }

  open() {
    if (this.isClosed)
    {
      this.accountBalance = 0;
      this.isClosed = false;
    }
  }

  close() {
    if (!this.isClosed)
    {
      this.accountBalance = 0;
      this.isClosed = true;
    }
  }

  deposit(numberAmount) {
    if (!this.isClosed)
      return this.accountBalance += numberAmount
  }

  withdraw() {
    if (!this.isClosed)
      return this.accountBalance -= numberAmount
  }

  get balance() {
    return this.accountBalance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}