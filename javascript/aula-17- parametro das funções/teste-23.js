//parametro das funçoes 

//os parametros sao uteis quando queremos que a função execute uma tarefa mas utilize um dado que enviamos para ela

/*

function speedUp (velocity, acceleration){
  let newVelocity = velocity + acceleration;
  console.log("newVelocity: " + newVelocity);
}

speedUp(10, 5); // estou chamando a função e passando os parametros



//quando passamos parametros para uma função elas acabam se tornando variáveis globais

*/



function somaVelocity(velocity, aceleration)
{
  let newVelocity = parseInt(velocity) + parseInt(aceleration);
  console.log("Nova velocidade: " + newVelocity);
}

let dados = prompt("Digite a velocidade atual: ");
let aceleracao = prompt ("Deseja acelerar quantos km/s ?");

console.log("Acelerando 10km/s");

somaVelocity(dados, aceleracao);