AccountStatements = require('./accountStatements')
let date;

beforeEach(() => {
    let dateObj = new Date();
    let year = dateObj.getFullYear()
    let month = dateObj.getUTCMonth()
    let day = dateObj.getUTCDate()

    date = year + "/" + month + "/" + day
})

test('statements should start with only formatting', () => {
    const accountStatements = new AccountStatements
    expect(accountStatements.statements()).toBe("date || credit || debit || balance\n")
})

test('statements should include a new transaction after depositing', () => {
    const accountStatements = new AccountStatements
    accountStatements.newStatement(1000, 500, "deposit")
    expect(accountStatements.statements()).toBe(`date || credit || debit || balance\n${date} || 500 || || 1000\n`)
})

test('statements should include a new transaction after withdrawing', () => {
    const accountStatements = new AccountStatements
    accountStatements.newStatement(1000, 500, "withdrawal")
    expect(accountStatements.statements()).toBe(`date || credit || debit || balance\n${date} || || 500 || 1000\n`)
})
