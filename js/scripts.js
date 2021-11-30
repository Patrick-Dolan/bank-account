function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
  if (this.balance < 0 ) {
    this.balance += amount;
    return "Insufficent Funds!";
  }
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
}