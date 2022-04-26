class AccountStatements {
  constructor () {
    this.accountStatements = [this.#format()]
  }

  statements () {
    let statements = ''
    this.accountStatements.forEach(statement => statements += `${statement}\n`)
    return statements
  }

  newStatement (balance, amount, transactionType) {
    if (transactionType === 'deposit') {
      this.accountStatements.push(`${this.#currentDate()} || ${amount} || || ${balance}`)
    } else if (transactionType === 'withdrawal') {
      this.accountStatements.push(`${this.#currentDate()} || || ${amount} || ${balance}`)
    }
  }

  #currentDate () {
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = dateObj.getUTCMonth()
    const day = dateObj.getUTCDate()

    return year + '/' + month + '/' + day
  }

  #format () {
    return 'date || credit || debit || balance'
  }
}

module.exports = AccountStatements
