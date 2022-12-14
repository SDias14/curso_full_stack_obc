class User {

    constructor(fullname, email,password){
        this.fullname = fullname
        this.email = email
        this.password = password

    }

    login(email,senha){
        if(email === this.email && senha === this.password){
            console.log("Logado com sucesso")
        } else{
            console.log("usuario e senha nao conferem")
        }
    }


}

const user1 = new User('Joca', 'jocaCampeao@gmail.com', 1234)


console.log(user1)

console.log(user1.login('jocaCampeao@gmail.com', 12345))


