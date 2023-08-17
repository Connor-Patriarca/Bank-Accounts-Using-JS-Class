console.clear();

class Account {
  constructor(type) {
    this.type = type;
    this.status = "Closed";
    this._balance = 0;
    console.log(`You created a ${this.type} account!`);
  }

  open() {
    // if account exists, notify user
    if (this.status === "Open") {
      console.log(`${this.type} account is already open`);
    }
    // open account
    if (this.status === "Closed") {
      this.status = "Open";
      console.log(`Your ${this.type} account has been opened`);
    } else {
      console.log(`The account does not exist`);
    }
  }

  close() {
    // if account is closed, notify user
    if (this.status === "Closed") {
      console.log("This account is already closed");
    }
    // else close account, setting balance to 0
    if (this.status === "Open") {
      this.status = "Closed";
      this._balance = 0;
    }
    // if account does not exist, notify user
    else {
      console.log("This account does not exist");
    }
  }

  deposit(amount) {
    // if account is closed, notify user
    if (this.status === "Closed") {
      console.log("This account is closed. Open to deposit");
    }
    // add # to account # if account open
    else if (this.status === "Open") {
      this._balance += amount;
      console.log(`You deposited $${amount} into your ${this.type} Account`);
    }
    // if account does not exist, notify user
    else {
      console.log("This account does not exist");
    }
  }

  withdraw(amount) {
    // if account is closed, notify user
    if (this.status === "Closed") {
      console.log("This account is closed. Open to withdraw");
    }
    // else if the # being drawn <=  # in account, subtract draw # from account #
    else if (this._balance >= amount) {
      this._balance -= amount;
      console.log(`You withdrew $${amount} from your ${this.type} Account`);
    }
    // If not, let user know using message in instructions
    else if (this._balance < amount) {
      console.log(
        "There are not enough funds to withdraw the requested amount"
      );
    }
    // if account does not exist, notify user
    else {
      console.log("This account does not exist");
    }
  }

  get balance() {
    // return # in account
    if (this.status === "Open") {
      console.log(this._balance);
    }
    // if account is closed, notify user
    else if (this.status === "Closed") {
      console.log("This account is closed");
    }
    // if account does not exist, notify user
    else {
      console.log("This account does not exist");
    }
  }

  transfer(amount, targetAccount) {
    // transfer # from one open account to a target open account
    this.withdraw(amount);
    targetAccount.deposit(amount);
    // if either account does not exist, notify user
    if (this.status === "Closed") {
      console.log(`${this.type} is closed`);
    }
    if (this.status === "Closed") {
      console.log(`${targetAccount.type} is closed`);
    }
  }
}

const CheckingAccount = new Account("Checking");
const SavingsAccount = new Account("Savings");

CheckingAccount.open();
SavingsAccount.open();

// CheckingAccount.close();
// SavingsAccount.close();

CheckingAccount.deposit(500);
SavingsAccount.deposit(500);

// CheckingAccount.withdraw(2000);

CheckingAccount.transfer(100, SavingsAccount);

CheckingAccount.balance();
