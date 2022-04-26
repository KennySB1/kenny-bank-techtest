const BankAccount = require('./bankAccount')


test('balance should start at 0', () => {
    const bankAccount = new BankAccount
    expect(bankAccount.balance).toBeCloseTo(0.00)
})

test('deposit 100', () => {
    const bankAccount = new BankAccount
    expect(bankAccount.deposit(100.00)).toBeCloseTo(100.00)
})

test('withdraw 100', () => {
    const bankAccount = new BankAccount
    bankAccount.deposit(300.00)
    expect(bankAccount.withdraw(100.00)).toBeCloseTo(200.00)
})

test('withdraw should fail if balance < amount being withdrawn', () => {
    const bankAccount = new BankAccount
    expect(() => bankAccount.withdraw(100)).toThrow("Trying to withdraw more money than you have!")
})

