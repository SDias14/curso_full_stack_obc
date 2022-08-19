// desafio for 

/*
1 - solicitar o nome da espaçonave 
2- Perguntar o caractere que ele deseja substituir
3- Perguntar por qual caractere ele deseja substituir
4- Utilizar o FOR para resolver o problema
5- Para cada caractere igual ao informado , substituir pelo novo caractere
6 - Exibir um alerta com o novo nome da nave. 
' o novo nome da nave é: ' + nomeNave
*/

let nomeNave = prompt('Qual o nome da nave?');

let caractere = prompt('Qual o caractere que deseja substituir?');

let newCaractere = prompt('Qual o novo caractere que deseja colocar?');

let newNomeNave = '';

for (i = 0; i < nomeNave.length; i++) {
    if (nomeNave[i] === caractere) {
        newNomeNave += newCaractere;
    } else {
        newNomeNave += nomeNave[i];
    }
}

alert('O novo nome da nave é: ' + newNomeNave);