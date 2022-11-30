
let nomeJogador1 = prompt('Digite o nome do jogador 1: '); 

let poderAtaqueJogador1 = prompt('Digite o poder de ataque do jogador 1: ');


//==============================================



let nomeJogador2 = prompt('Digite o nome do jogador 2: ');

let qtdeVidaJogador2 = prompt('Digite a quantidade de vida do jogador 2: ');

let poderDefesaJogador2 = prompt('Digite o poder de defesa do jogador 1: ');

let escudoJogador2 = prompt('Digite a quantidade de escudos do jogador 2: ');

var danoCausado = '';


if(poderAtaqueJogador1 > poderDefesaJogador2 && escudoJogador2 <= 0){
    
    var danoCausado = poderAtaqueJogador1 - poderDefesaJogador2;
    
    alert (`${nomeJogador1} causou ${danoCausado} de dano em ${nomeJogador2}`);

} else if (poderAtaqueJogador1 > poderDefesaJogador2 && escudoJogador2 > 0){
    var danoCausado = (poderAtaqueJogador1 - poderDefesaJogador2 ) / 2;
    
    alert (`${nomeJogador1} causou ${danoCausado} de dano em ${nomeJogador2}`);
} else if (poderAtaqueJogador1 <= poderDefesaJogador2){
    alert (`${nomeJogador1} não causou dano em ${nomeJogador2}`);
} else {
    alert ('Jogadores inválidos');
}

//==============================================

let danos = danoCausado - qtdeVidaJogador2;

alert (`${nomeJogador2} perdeu ${danos} de vida`); 






