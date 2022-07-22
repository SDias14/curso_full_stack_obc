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
    maxSpeed: 100,
}



//criação da função para acelerar a nave

spaceship.accelerate = function (speed, acceleration) {
  let speedUp =   spaceship.speed = speed + acceleration;
    if (speedUp <= spaceship.maxSpeed) {
        alert("A velocidade atual é: " + speedUp);
    } else {
        spaceship.speed = speedUp;
        console.log("A velocidade atual é: " + spaceship.speed);

        
    }

    
}


spaceship.decelerate = function (speed) {
    if (spaceship.speed - speed < 0) {
        console.log("A velocidade atual é: " + spaceship.speed + " e a velocidade maxima é: " + spaceship.maxSpeed);
    } else {
        spaceship.speed -= speed;
        console.log("A velocidade atual é: " + spaceship.speed);
    } 
}

// criação menu

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




















  


    




