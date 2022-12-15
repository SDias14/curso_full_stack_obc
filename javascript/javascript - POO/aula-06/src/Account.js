class Account {
    #password;
    #balance = 0;

    constructor(user){
        this.name = user.name;
        this.email = user.email;
        this.#password = user.password;
}

    getBalance(email, password){
        if(this.#auth(email, password)){
            return this.#balance;
        }
        return 'Usuário ou senha inválidos';
    }

    #auth(email, password){
        return this.email === email && this.#password === password;
    }

    
}


const user = {
    name: 'John',
    email: 'john@gmail.com',
    password : '123456'
}

const account = new Account(user);

console.log(account.getBalance('john@gmail.com' , '123456'));