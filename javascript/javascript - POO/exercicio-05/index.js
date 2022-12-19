const { getUserByEmail, getAllUsers } = require('./src/App');
const App = require('./src/App');

const app = new App();

app.createUser('João', 'joao22@gmail.com', 123456);

app.createUser('Maria', 'maria22@hotmail.com', 435543);

app.createUser('Pedro', 'pedrino12@yahoo.com', 124456);


getAllUsers().forEach(user => {
    console.log(user);
});


console.log(App.makeDeposit(100, 124456 ));

console.log(App.makeDeposit(120, 124456 ));


console.log(App.getDepositsByAccountId(124456));















