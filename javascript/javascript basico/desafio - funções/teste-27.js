/*

neste exercicio , vamos criar um programa de bordo para nossa nave que receba o nome da nave. 

A velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido para que o usuario escolha entre as seguintes opcoes: 

1 - acelerar a nave em 5 km/s

2- desacelerar a nave em 5 km/s
(a velocidade da nave nao pode ser menor que 0)

3- imprimir dados de bordo
(deve ser impresso o nome da nave com sua velocidade atual)

4 - sair do programa. 

caso a pessoa escolha um numero que nao esta na lista, é necessario exibir o menu novamente ate que seja escolhida uma opção valida. Para fazer esse app precisaremos : 

1 - criar uma funcao que exiba o menu e valide a opção escolhida 

2- uma funcao para cada ação do menu acelerar , desacelerar e imprimir dados de bordo.

3- encerrar o app somente quando digitar para sair.


*/

let nome = prompt("Qual o nome da nave?");
let velocity = 0;


function accelerate() {
  velocity += 5;
  return velocity;
}

function decelerate() {
  velocity -= 5;
  return velocity;
}





function printMenu() {
   let menu =  prompt (" Escolha uma das opções :\n 1 - Acelerar\n2 - Desacelerar\n3 - Imprimir dados de bordo\n4 - Sair")

switch (menu) {
  case "1":
    alert (`A velocidade da nave é ${accelerate()}`);
    printMenu();
    break
  case "2":
    alert (`A velocidade da nave é ${decelerate()}`);
    printMenu();
    break
  case "3":
    alert (`O nome da nave é ${nome} e a velocidade atual é ${velocity}`);
    printMenu();
    break
  case "4":
    alert ("Saindo do programa");
    break 
  default:
   (printMenu(alert (" Opção inválida")));
    break



}

}

printMenu();
accelerate();
decelerate();















