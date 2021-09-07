class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`No enough funds`);
      return;
    }
    this.balance -= amount;
  }
}
// // test
// const myWallet = new Wallet();

// console.log(myWallet);
// myWallet.deposit(200);
// console.log(myWallet.getBalance());
// myWallet.withdraw(110);
// console.log(myWallet.withdraw(234));
// console.log(myWallet);
