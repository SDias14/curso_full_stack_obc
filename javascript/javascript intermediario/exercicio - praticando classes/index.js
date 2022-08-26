/*

Temos uma estação espacial que tem uma lista de naves engatadas. 
Cada nave possui nome, quantidade de tripulantes, uma informação se está ou nao engatada e outra informando se as portas de entrada estão abertas ou não.

Para gerenciar esses dados, um menu deve ser exibido com as seguintes opções : 


1 - REALIZAR ENGATE 

nessa opção deve ser possivel cadastrar uma nave com nome e numero de tripulantes. 

apos o cadastro, a nave pode ser engatada. Quando uma nave é engatada, suas portas tambem sao abertas. Entao, alem de alterar a propriedade da nave que informa se ela esta engatada, altere tambem a propriedade que informa se as portas de entrada estao abertas ou nao.


2 - IMPRIMIR TODAS AS NAVEES

a lista de naves deve ser impressa com alert

3   - SAIR DO PROGRAMA 

ao clicar para sair, o programa é encerrado. 

para este exercicio : 


crie apenas a classse para a espaçonave 

esta classe deve ter o metodo para engatar a nave

crie um array para armazenar as naves

o programa deve ser encerrado somente quando o usuario clicar em sair 

caso o usuario escolha uma opcao invalida, deve ser mostrado novamente o menu. 


*/

// primeiro passso : criar a classe para a espaçonave

class Spaceship {
    constructor(name, crew, isEngaged = 'engatada', isDoorOpen = 'abertas') {
        this.name = name;
        this.crew = crew;   
        this.isEngaged = isEngaged ;
        this.isDoorOpen = isDoorOpen;
        
    } 
    
    
}





// 2 parte - criação do menu e criação do array para armazenar as naves


let menu = prompt("Escolha uma opção : \n 1 - Realizar engate \n 2 - Imprimir todas as naves \n 3 - Sair do programa");





if (menu == 1) {
   
    
    let nome = prompt("Digite o nome da nave");
    let trip = prompt("Digite o numero de tripulantes");
    
    let spaceship = new Spaceship(nome, trip);

    alert(`A nave ${spaceship.name} possui ${spaceship.crew} tripulantes e está ${spaceship.isEngaged}`);


    
    //ate aqui ok 
    
    let confirmation = prompt ( 'Tem mais alguma nave que queira incluir ? \n digite 1 para continuar digitando  2 para exibir as naves cadastradas e 3 para cancelar');
    
    
    while (confirmation == 1) {
        nome = nome + ' ' + prompt ( 'Digite o nome da nave')
        
        trip = trip + ' ' + prompt ( 'Digite o numero de tripulantes')
        
        spaceship = new Spaceship(nome, trip);

        alert(`A nave ${spaceship.name} com ${spaceship.crew} tripulantes foi ${spaceship.isEngaged} e as portas estão ${spaceship.isDoorOpen}`);

        //ok ate aqui
        
       confirmation = prompt ( 'Tem mais alguma nave que queira incluir ? \n digite 1 para continuar digitando  2 para exibir as naves cadastradas e 3 para cancelar')

    }

       if (confirmation == 2) {
           alert(`A nave ${spaceship.name} com ${spaceship.crew} tripulantes foi ${spaceship.isEngaged} e as portas estão ${spaceship.isDoorOpen}`);

              confirmation = prompt ( 'Tem mais alguma nave que queira incluir ? \n digite 1 para continuar digitando  2 para exibir as naves cadastradas e 3 para cancelar')

              //ok ate aqui

              while (confirmation == 1) {
                  nome = nome + ' ' + prompt ( 'Digite o nome da nave')
                  
                  trip = trip + ' ' + prompt ( 'Digite o numero de tripulantes')
                  
                  spaceship = new Spaceship(nome, trip);

                  alert(`A nave ${spaceship.name} com ${spaceship.crew} tripulantes foi ${spaceship.isEngaged} e as portas estão ${spaceship.isDoorOpen}`);

                  //ok ate aqui
                  
                 confirmation = prompt ( 'Tem mais alguma nave que queira incluir ? \n digite 1 para continuar digitando  2 para exibir as naves cadastradas e 3 para cancelar')

              

                if (confirmation == 2) { 
                    alert(`A nave ${spaceship.name} com ${spaceship.crew} tripulantes foi ${spaceship.isEngaged} e as portas estão ${spaceship.isDoorOpen}`);

                          confirmation = prompt ( 'Tem mais alguma nave que queira incluir ? \n digite 1 para continuar digitando  2 para exibir as naves cadastradas e 3 para cancelar')
                } else if (confirmation == 3) {
                    alert('Obrigado por utilizar o programa');
                } else {
                    alert('Opção inválida');
                }
            }   

        } else if (confirmation == 3) {
              alert('Obrigado por utilizar o programa');
         } else {
             alert('Opção inválida');           
         } 
        
        
        } else if (menu == 2) {

            alert('nenhuma nave cadastrada');
        
    } else if (menu == 3) {
        alert('Programa encerrado');
    } else {
        alert('Opção inválida');
    }

        

    









    

  





















