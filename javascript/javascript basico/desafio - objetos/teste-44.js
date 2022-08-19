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
    initVelocity: 0,
    maxSpeed: 100,
    acceleration: {
        accelerate: function(speed) {
            this.initVelocity += speed;
            if (this.initVelocity > this.maxSpeed) {
                console.log(
                    `A velocidade atual é ${this.initVelocity} Km/s e a velocidade maxima é ${this.maxSpeed} Km/s`
                );
            }   else {  console.log(`A velocidade atual é ${this.initVelocity} Km/s`); }
        }

    },
    desacceleration: {
        desaccelerate: function(speed) {
            this.initVelocity -= speed;
            if (this.initVelocity < 0) {
                console.log(`A velocidade atual é ${this.initVelocity} Km/s`);
            } else { console.log(`A velocidade atual é ${this.initVelocity} Km/s`); }
        }
    }
        
        

}




// criação do menu

let menu = prompt("Digite A para acelerar ou D para desacelerar");

// verificação do menu

    if (menu == "A"){
      let newVelocity = prompt("Digite a velocidade que deseja acelerar");
    console.log(newVelocity);
    console.log (typeof newVelocity);
    //transformando a string em numero
    newVelocity = parseInt(newVelocity);
    console.log(newVelocity);
    console.log(typeof newVelocity);
        spaceship.acceleration.accelerate(newVelocity);  
    } else if (menu == "D"){
        let newVelocity = prompt("Digite a velocidade que deseja desacelerar");
        spaceship.desacceleration.desaccelerate(parseInt(newVelocity));
    } else {
        alert("Opção inválida");
    }


































// criação menu





/*

let menu = function () {
    let option = prompt("Digite 1 para acelerar ou 2 para desacelerar");
    if (option == 1) {
        let speed = prompt("Digite a velocidade que deseja acelerar");
        spaceship.accelerate(spaceship.speed, speed);
    } else if (option == 2) {
        let speed = prompt("Digite a velocidade que deseja desacelerar");
        spaceship.decelerate(speed);
    } else {
        console.log("Opcao invalida");
    }

    return speed;
}


alert ("Bem vindo ao " + spaceship.name + " " + spaceship.type);

alert ( menu() );

let accelerations = prompt("Qual aceleração desejada?");

spaceship.accelerate(0, parseInt(accelerations))

*/



















  


    




