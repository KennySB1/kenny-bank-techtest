const BankAccount = require('./bankAccount')
test('balance should start at 0', () => {
    bankAccount = new BankAccount
    expect(bankAccount.balance).toBeCloseTo(0.00)
})
test('deposit 100', () => {
    bankAccount = new BankAccount
    expect(bankAccount.deposit(100.00)).toBeCloseTo(100.00)
})

test('withdraw 100', () => {
    bankAccount = new BankAccount
    bankAccount.deposit(300.00)
    expect(bankAccount.withdraw(100.00)).toBeCloseTo(200.00)
})