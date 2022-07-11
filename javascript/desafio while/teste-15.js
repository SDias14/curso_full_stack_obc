/*
1 - pedir o nome da nave

2 - Perguntar se deseja entrar na dobra com a seguinte mensagem : 

1 - sim = se a resposta for sim a gente ja vai contar a primeira dobra espacial. 

2 - não 

3- O usuario deve ser perguntado se deseja realizar a proxima dobra.

ex : Deseja realizar a proxima dobra? 

1- sim 

2- não

Para cada sim , vamos contar mais uma dobra realizada. 

4 - A pergunta deve ser feita novamente ate que a escolha seja nao. 

5 - Ao escolher Nao em qualquer pergunta , a contagem deve ser encerrada. 

6 - O programa deve informar o nome da nave e o numero de vezes seguidos que a dobra espacial foi realizada. 

*/

let nomeNave = prompt("Qual o nome da nave?");
console.log(nomeNave);

let resposta = prompt("Deseja entrar na dobra espacial? \n 1 - sim \n 2 - não");
console.log(resposta);

let dobra = 0;

if (resposta == 1) {
let wrapTime = prompt ("voce realizou a dobra de numero " + dobra + " Gostaria de realizar outra dobra? \n 1 - sim \n 2 - não");
console.log(wrapTime);

while (wrapTime == 1) {
    dobra++;
    if (wrapTime == 1) {
        wrapTime = prompt ("voce realizou a dobra de numero " + dobra + " Gostaria de realizar outra dobra? \n 1 - sim \n 2 - não");
        console.log(wrapTime);
    } 

}console.log("numeros de dobras realizadas: " + dobra);

} else {
    console.log("Voce nao deseja entrar na dobra espacial");
}

