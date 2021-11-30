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


$(document).ready(function() {
  $("#registerForm").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const balance = parseInt($("input#initialDeposit").val());
    let newAccount = new Account(name, balance);
    console.log(newAccount);
  });
  $("#transaction").submit(function (event) {
    event.preventDefault();

  });
});


