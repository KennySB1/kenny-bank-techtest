const AccountStatements = require('./accountStatements')

class BankAccount {
  constructor (balance = 0.00, accountStatements = new AccountStatements()) {
    this.balance = balance
    this.accountStatements = accountStatements
  }

  deposit (amount) {
    this.balance += amount
    this.accountStatements.newStatement(this.balance, amount, 'deposit')
    return this.balance
  }

  withdraw (amount) {
    if (this.balance < amount) throw new Error('Trying to withdraw more money than you have!')
    this.balance -= amount
    this.accountStatements.newStatement(this.balance, amount, 'withdrawal')
    return this.balance
  }

  showAccountStatements () {
    return this.accountStatements.statements()
  }
}

module.exports = BankAccount

