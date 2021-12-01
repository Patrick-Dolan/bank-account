// Ledger Business Logic
function Ledger() {
  this.accounts = {};
  this.currentId = 0;
}

Ledger.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts[account.id] = account;
};

Ledger.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Ledger.prototype.findAccount = function(id) {
  if (this.accounts[id] != undefined) {
    return this.accounts[id];[]
  }
  return false;
};

// Account Business Logic
function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

function withdraw(accountId, amount) {
  const account = ledger.findAccount(accountId);
  account.balance -= amount;
  if (account.balance < 0 ) {
    account.balance += amount;
    alert("Insufficent Funds!");
  }
}

function deposit(accountId,amount) {
  const account = ledger.findAccount(accountId);
  account.balance += amount;
  console.log(account);
}

function transfer(source, target, amount) {
  ledger.accounts[source].balance -= amount;
  ledger.accounts[target].balance += amount;
  console.log(ledger);
}
// Global Variable
let ledger = new Ledger();
// UI logic
function addTransferAccount(ledger) {
  let accountsSourceList = $("select#transferSource");
  let accountsTargetList = $("select#transferTarget");
  let htmlForAccountsList = "";
  Object.keys(ledger.accounts).forEach(function(key) {
    const account = ledger.findAccount(key);
    htmlForAccountsList += "<option value=" + account.id + ">" + account.name + "</option>";
  });
  accountsSourceList.html(htmlForAccountsList);
  accountsTargetList.html(htmlForAccountsList);
}
$(document).ready(function() {
  $("#registerForm").submit(function (event) {
    event.preventDefault();
    const name = $("input#name").val();
    const balance = parseInt($("input#initialDeposit").val());
    let newAccount = new Account(name, balance);
    ledger.addAccount(newAccount);
    $(".accountBalance").html(newAccount.balance);
    addTransferAccount(ledger);
    //$("#registerAccount").hide();
    $("#accountManagement").show();
  });
  $("#fundsForm").submit(function (event) {
    event.preventDefault();
    let transaction = parseInt($("select#transaction").val());
    const amount = parseInt($("input#amount").val());
    let accountId = 1;
    if (transaction === 1) {
      deposit(accountId, amount);
      $(".accountBalance").html(ledger.accounts[1].balance);
    } else {
      withdraw(accountId, amount);
      $(".accountBalance").html(ledger.accounts[1].balance);
    }
  });
});


