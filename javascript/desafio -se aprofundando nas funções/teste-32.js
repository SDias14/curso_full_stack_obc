/*

Neste exercicio vamos simular o computador de uma espaçonave no momento em que ela inicia a parada ate abrir as comportas para os pilotos sairem. 

1 - Considerem que a nave está a uma velocidade inicial de 150 km/s.

2- crie uma função para desacelerar 20 km/s a cada segundo. ( considere, no codigo, que cada iteração de um laço de repetição é um segundo)

3- essa função será uma hof (Higher Order Function) e tambem deve imprimir cada atualização que houver na velocidade da nave. (esta impressao deve ser feita por meio de callback que essa função deve receber)

4- ao final exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.





*/

function desaccelerate (velocity, printer){
    let newVelocity = velocity - 20;
    printer(newVelocity);

    for (let i = 0; i < 150; i--){
        newVelocity = newVelocity - 20;
        printer(newVelocity);
    }



    return newVelocity;
}

let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + " Km/s")
}

let newVelocity = desaccelerate(150, printVelocity);