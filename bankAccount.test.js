const BankAccount = require('./bankAccount')
const AccountStatements = require('./accountStatements')
let date;

beforeEach(() => {
    let dateObj = new Date();
    let year = dateObj.getFullYear()
    let month = dateObj.getUTCMonth()
    let day = dateObj.getUTCDate()

    date = year + "/" + month + "/" + day
})

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
    const bankAccount = new BankAccount
    expect(bankAccount.showAccountStatements()).toBe("date || credit || debit || balance\n")
})

test('statements should work after a deposit', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    expect(bankAccount.showAccountStatements()).toBe(`date || credit || debit || balance\n${date} || 100 || || 100\n`)
})

test('statements should work after a withdrawal', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(100)
    bankAccount.withdraw(100)
    expect(bankAccount.showAccountStatements()).toBe(`date || credit || debit || balance\n${date} || 100 || || 100\n${date} || || 100 || 0\n`)
})
