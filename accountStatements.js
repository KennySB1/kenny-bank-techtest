class AccountStatements {
    constructor() {
        this.accountStatements = ["date || credit || debit || balance"]
    }

    statements() {
        let statements = ""
        this.accountStatements.forEach(statement => statements += `${statement}\n`)
        console.log(statements)
        return statements
    }

    newStatement(balance, amount, transactionType) {
        let statementToAdd = ""
        if (transactionType === "deposit") {
            statementToAdd += `${this.#currentDate()} || ${amount} || || ${balance}`
            this.accountStatements.push(statementToAdd)
            console.log(statementToAdd)
        } else if (transactionType === "withdrawal") {
            statementToAdd += `${this.#currentDate()} || || ${amount} || ${balance}`
            this.accountStatements.push(statementToAdd)
            console.log(statementToAdd)
        }
    }

    #currentDate() {
        let dateObj = new Date();
        let year = dateObj.getFullYear()
        let month = dateObj.getUTCMonth()
        let day = dateObj.getUTCDate()

        return year + "/" + month + "/" + day

    }

}
module.exports = AccountStatements