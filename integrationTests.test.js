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
