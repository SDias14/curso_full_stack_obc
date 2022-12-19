const Deposit = require('./Deposit')
const Transfer = require('./Transfer')
const Loan = require('./Loan')
const App = require('./App')

module.exports = class Account {

    #balance;

    //trazer todos os depositos realizados ,transferencias e emprestimos

    constructor(user) {
        
        this.deposits = [];
        this.transfers = [];
        this.loans = [];
        this.accountId= user.accountId;
        this.#balance = 0;
    }


    getBalance() {

        return this.#balance;
    }

    deposit(value) {
        this.#balance += value;
        this.deposits.push(new Deposit(value));

    }

    

    transfer(value) {
        this.#balance += value;
        this.transfers.push(new Transfer(value));
    }


    
  loan(value) {
        this.#balance += value;
        this.loans.push(new Loan(value));
    }

    getDeposits() {
        return this.deposits;
    }

    getTransfers() {
        return this.transfers;
    }


    getLoans() {
        return this.loans;
    }

    




    

}