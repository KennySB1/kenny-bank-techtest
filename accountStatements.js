class AccountStatements {
    constructor() {
        this.accountStatements = ["date || credit || debit || balance"]
    }

    statements() {
        let statements = ""
        this.accountStatements.forEach(statement => statements += `${statement}\n`)

        return statements
    }
}
module.exports = AccountStatements