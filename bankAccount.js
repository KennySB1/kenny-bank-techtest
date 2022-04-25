class BankAccount {
    constructor(balance = 0.00) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        return this.balance
    }

    withdraw(amount) {
        if (this.balance < amount) throw("Trying to withdraw more money than you have!")
        this.balance -= amount
        return this.balance
    }

}
module.exports = BankAccount