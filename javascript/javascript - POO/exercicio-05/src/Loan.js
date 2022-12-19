const Installment = require('./Installment');

module.exports = class Loan {



    constructor(loanValue, createdDate = new Date()) {
        this.loanValue = loanValue;
        this.createdDate = createdDate;
        this.installments = [];
    }

    addInstallment(installmentValue, installmentNumber) {
        this.installments.push(new Installment(installmentValue, installmentNumber));
    }

    static #fee = 0.05;

    static getFee() {
        return this.#fee;
    }

    static setFee(feeNew) {
        // nova taxa com base em porcentagem

        this.#fee = 1 + (feeNew / 100);
    }

}