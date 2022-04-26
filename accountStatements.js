class AccountStatements {
    constructor() {
        this.accountStatements = [this.#format()]
    }

    statements() {
        let statements = ""
        this.accountStatements.forEach(statement => statements += `${statement}\n`)
        return statements
    }

    newStatement(balance, amount, transactionType) {
        let statementToAdd = ""

        if (transactionType === "deposit") {
            statementToAdd += `${this.#currentDate()} || ${amount} || || ${balance}`
            this.accountStatements.push(statementToAdd)

        } else if (transactionType === "withdrawal") {
            statementToAdd += `${this.#currentDate()} || || ${amount} || ${balance}`
            this.accountStatements.push(statementToAdd)
        }
    }

    #currentDate() {
        let dateObj = new Date();
        let year = dateObj.getFullYear()
        let month = dateObj.getUTCMonth()
        let day = dateObj.getUTCDate()

        return year + "/" + month + "/" + day
        }

        #format() {
           return "date || credit || debit || balance"
        }
    }
module.exports = AccountStatements