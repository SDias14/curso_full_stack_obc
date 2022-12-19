module.exports = class Deposit {
  constructor (amount, date = new Date()) {
    this.amount = amount
    this.date = date
  }
}








/* comments

criado dois construtores, um para o valor e outro para a data, caso não seja informada a data, será criada uma data com o new Date().


*/