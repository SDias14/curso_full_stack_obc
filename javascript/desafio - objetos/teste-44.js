// teste objetos 


/*
Faremos um aplicativo que fara o mapeamento de velocidade de uma espaçonave.

Neste aplicativo, vamos cadastrar uma espaçonave com seu nome, tipo  e a velocidade maxima que esta nave pode atingir para nao entrar em combustao.

1 - Nave deve partir com a velocidade 0.

2 - Menu deve ser exibido para o usuario perguntando se ele quer acelerar ou desacelerar a nave.

- se ele quiser parar, uma mensagem deve ser exibida com as caracteristicas da nave (nome, tipo e velocidade atual).

- se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele quer acelerar e este valor sera incrementado na velocidade atual.

3- Quando a velocidade for incrementada, deve-se fazer uma verificação para ver se a a espaçonave esta acima da velocidade maxima dela. (se ela estiver , uma mensagem deve ser exibida informando a velocidade da nave e a velocidade maxima permitida).

*/

// criação do objeto 
let spaceship = {
    name: "Acordeum",
    type: "SpaceShip",
    velocity: 0,
    maxSpeed: 100,

}

spaceship.accelerate = function(acceleration) {
   newVelocity =  this.velocity += acceleration;
   console.log (newVelocity)

   // laço de repetição para incrementar a velocidade

  while (newVelocity < this.maxSpeed) {
    answer =  prompt("Do you want to accelerate desaccelerate or stop? (a/d/s)");
        if (answer == "a") {
            newVelocity += acceleration;
            console.log(newVelocity);
        } else if (answer == "d") {
            newVelocity -= acceleration;
            console.log(newVelocity);
        } else if (answer == "s") {
            console.log(`${this.name} is stopped at ${this.velocity}`);
            break;
        } else {
            console.log("Invalid option");
        }
  }



} 

spaceship.desaccelerate = function(acceleration) {
    newVelocity =  this.velocity -= acceleration;
    console.log (newVelocity)

}




spaceship.stop = function() {
    console.log(`${this.name} is stopping`);
    console.log(`${this.name} is at ${this.velocity}`);
}




//mandando o valor para o metodo accelerate

let menu = prompt("Do you want to accelerate or decelerate? (a/d)"); //prompt para o usuario escolher se quer acelerar ou desacelerar



if (menu === "a") {
    let acceleration = prompt("How much do you want to accelerate?");
    let transform = parseInt(acceleration);
    spaceship.accelerate(transform);
  
} else if (menu === "d") {
    let acceleration = prompt("How much do you want to decelerate?");
    spaceship.desaccelerate(acceleration);
} else {
    console.log("Invalid option");
}

    


    




















    
   