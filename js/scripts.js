function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
  if (this.balance < 0 ) {
    this.balance -= amount;
    return "Insufficent Funds!";
  }
}

Account.prototype.deposit = function(amount) {
  this.balance += amount;
}
let newAccount = new Account("Name", 0);

$(document).ready(function() {
  $("#registerForm").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const balance = parseInt($("input#initialDeposit").val());
    newAccount = new Account(name, balance);
    $(".accountBalance").html(newAccount.balance);
    console.log(newAccount);
  });
  $("#fundsForm").submit(function (event) {
    event.preventDefault();
    let transaction = parseInt($("select#transaction").val());
    const amount = parseInt($("input#amount").val());
    console.log(transaction);
    if (transaction === 1) {
      newAccount.deposit(amount);
      $(".accountBalance").html(newAccount.balance);
    } else {
      newAccount.withdraw(amount);
      $(".accountBalance").html(newAccount.balance);
    }
  });
});


