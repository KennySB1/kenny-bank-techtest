AccountStatements = require('./accountStatements')
test('statements should start with only formatting', () => {
    const accountStatements = new AccountStatements
    expect(accountStatements.statements()).toBe("date || credit || debit || balance\n")
})

test('statements should include a new transaction after depositing', () => {
    const accountStatements = new AccountStatements
    accountStatements.newStatement(1000, 500, "deposit")
    expect(accountStatements.statements()).toBe("date || credit || debit || balance\n2022/3/26 || 500 || || 1000\n")
})

test('statements should include a new transaction after withdrawing', () => {
    const accountStatements = new AccountStatements
    accountStatements.newStatement(1000, 500, "withdrawal")
    expect(accountStatements.statements()).toBe("date || credit || debit || balance\n2022/3/26 || || 500 || 1000\n")
})
