// desafio estruturas completas 

/*
1 - solicitar o nome da espaçonave
2- Utilizar uma estrutura de repetição para inverter o nome da espaçonave
(Esta estrutura deverá percorrer a nave do ultimo caractere para o primeiro)
3- Durante a inversão , procurar pelo caractere proibido , no caso o e. 
4 - Caso encontre, a inversao deve ser parada onde estiver. 
5- o nome invertido deve ser impresso. 
(mesmo que nao esteja completo por ter encontrado o caractere proibido )
*/

let nome = prompt("Digite o nome da nave");

let nomeInvertido = "";

for (let i = nome.length - 1; i >= 0; i--) {
    if (nome[i] == "e") {
        break;
    }
    nomeInvertido += nome[i];
}

alert (nomeInvertido);

