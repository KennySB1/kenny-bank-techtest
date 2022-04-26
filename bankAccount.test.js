const BankAccount = require('./bankAccount')
const AccountStatements = require('./accountStatements')
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

test('withdraw should fail if balance < amount being withdrawn', () => {
    bankAccount = new BankAccount
    expect(() => bankAccount.withdraw(100)).toThrow("Trying to withdraw more money than you have!")
})

test('statements should start with only formatting', () => {
    const bankAccount = new AccountStatements
    expect(bankAccount.statements()).toBe("date || credit || debit || balance\n")
})