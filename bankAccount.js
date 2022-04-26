class BankAccount {
    constructor(balance = 0.00) {
        this.balance = balance
        this.accountStatements = new AccountStatements
    }

    deposit(amount) {
        this.balance += amount
        this.accountStatements.newStatement(this.balance, amount, "deposit")
        return this.balance
    }

    withdraw(amount) {
        if (this.balance < amount) throw("Trying to withdraw more money than you have!")
        this.balance -= amount
        this.accountStatements.newStatement(this.balance, amount, "withdrawal")
        return this.balance
    }

    showAccountStatements() {
        return this.accountStatements.statements()
    }

}

module.exports = BankAccount
const AccountStatements = require('./accountStatements')