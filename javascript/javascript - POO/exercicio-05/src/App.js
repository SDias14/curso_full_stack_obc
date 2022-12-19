const Deposit = require('./Deposit');
const Transfer = require('./Transfer');
const Loan = require('./Loan');
const Account = require('./Account');
const User = require('./User');
const Installment = require('./Installment');

module.exports = class App {

    static #usersList = [];

    createUser(name, email, accountId) {
        const user = new User(name, email, accountId);
        App.#usersList.push(user);
        
    }
 // retornar usuarios a partir do email
    static getUserById(accountId) {
        return App.#usersList.find(user => user.accountId === accountId);
    }

    static getAllUsers() {
        return App.#usersList;
    }

    static makeDeposit(value, accountId) {
        const user = new User();
        const account = new Account();
        user.accountId = App.getUserById(accountId);
        account.deposit(value);


        const getDeposits = account.getDeposits();

        return getDeposits;

        



    }

    static getDepositsByAccountId(accountId) {
        const user = new User();
        const account = new Account();
        user.accountId = App.getUserById(accountId);
         const getDeposits = account.getDeposits();

        return getDeposits;

    }





    static makeTransfer(amount, date, accountOrigin, accountDestination, email) {
        const user = new User();
        const account = new Account();
        user.email = App.getUserById(accountId);
        account.transfer(amount);

        const getTransfers = account.getTransfers();

        return getTransfers;
        


       
    }

    static makeLoan(value, email) {
        const user = new User();
        const account = new Account();
        user.email = App.getUserByEmail(email);

        account.loan(value);

        return account;
      
    }

    static changeFee(value) {
        Loan.setFee(value);
    }

}