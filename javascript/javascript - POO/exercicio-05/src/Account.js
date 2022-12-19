const Deposit = require('./Deposit')
const Transfer = require('./Transfer')
const Loan = require('./Loan')

module.exports = class Account {

    #balance;

    //trazer todos os depositos realizados ,transferencias e emprestimos

    constructor() {
        this.#balance = 0;
        this.deposits = [];
        this.transfers = [];
        this.loans = [];
    }


    get balance() {
        return this.#balance;
    }

    deposit(value) {
        this.#balance += value;
        this.deposits.push(new Deposit(value));
    }

    transfer(value, account) {
        this.#balance -= value;
        account.#balance += value;
        if (account instanceof Account) {
            this.transfers.push(new Transfer(value, account));
        }
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