// high order

/*

//high order function é uma função de alta classe. são função que recebem ou retornam outras funções. conseguimos enviar funções como um parametro. 

//funções de hof geralmente são funções anonimas. 

//função que é enviada como um parametro de uma hof é chamada de callback.



function doubleVelocity (velocity, printer ){
    console.log ("Entrei em doubleVelocity")
    let newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;

}

let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + " Km/s")
}

let newVelocity = doubleVelocity(60, printVelocity);

console.log(newVelocity);

// a variavel newVelocity armazena o chamamento da função doubleVelocity. Na verdade estamos enviando valores para a função doubleVelocity. O primeiro valor que estamos enviando é o valor 60 , que corresponderá ao parametro velocity. O segundo valor que estamos enviando é a função printVelocity, que corresponderá ao parametro printer.Quando chamamos a função ela vai ser executada, executando o primeiro console.log . Após isso ela vai continuar executando. Dessa vez ela vai armazenar multiplicação do parametro velocity vezes 2. O resultado da multiplicação vai ser armazenado na variavel newVelocity. Vai continuar executando.Agora o parametro printer vai ser chamado. Esse parametro na verdade é uma função que vai ser executada. O parametro printer vai receber o valor da variavel printVelocity, que na verdade tem um parametro armazenado dentro dela. Este chamamento vai ser executado e priter recebe o valor da variavel newVelocity. Com o return da variavel newVelocity podemos ver o valor fora dela e chamamos no console.log o valor da variavel newVelocity.

*/


function doubleVelocity (velocity, printer ){
    console.log ("Entrei em doubleVelocity")
    let newVelocity = velocity * 2;
    printer(newVelocity);
    return newVelocity;

}


let anotherVelocity = doubleVelocity(50, velocity => { 
    console.log("Nova velocidade: " + velocity + " Km/s")
})

