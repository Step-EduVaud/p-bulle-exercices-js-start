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
    if (isClosed)
    {
      accountBalance = 0;
      isClosed = false;
    }
  }

  close() {
    if (!isClosed)
    {
      accountBalance = 0;
      this.isClosed = true;
    }
  }

  deposit(numberAmount) {
    return this.accountBalance += numberAmount
  }

  withdraw() {
    throw new Error('Remove this line and implement the function');
  }

  get balance() {
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}