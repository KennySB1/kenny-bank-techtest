AccountStatements = require('./accountStatements')
test('statements should start with only formatting', () => {
    const accountStatements = new AccountStatements
    expect(accountStatements.statements()).toBe("date || credit || debit || balance")
})