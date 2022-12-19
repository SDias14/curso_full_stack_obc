const Account = require('./Account')

module.exports = class Transfer {
  constructor (amount, date = new Date(), accountOrigin, accountDestination) {
    const account = new Account()
    this.amount = amount
    this.date = date
    this.accountOrigin = accountOrigin
    this.accountDestination = accountDestination
  }
}


/* comments


origem e destino da transferencia : criado para identificar a conta de origem e destino da transferencia.




*/