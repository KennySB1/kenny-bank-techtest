class BankAccount {
    constructor(balance = 0.00) {
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        return this.balance
    }

}
module.exports = BankAccount