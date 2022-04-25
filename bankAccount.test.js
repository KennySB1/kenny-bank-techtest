const BankAccount = require('./bankAccount')

test('deposit 100', () => {
    bankAccount = new BankAccount
    expect(bankAccount.deposit(100.00)).toBeCloseTo(100.00)
})