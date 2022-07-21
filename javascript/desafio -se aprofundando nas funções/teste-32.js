/*

Neste exercicio vamos simular o computador de uma espaçonave no momento em que ela inicia a parada ate abrir as comportas para os pilotos sairem. 

1 - Considerem que a nave está a uma velocidade inicial de 150 km/s.

2- crie uma função para desacelerar 20 km/s a cada segundo. ( considere, no codigo, que cada iteração de um laço de repetição é um segundo)

3- essa função será uma hof (Higher Order Function) e tambem deve imprimir cada atualização que houver na velocidade da nave. (esta impressao deve ser feita por meio de callback que essa função deve receber)

4- ao final exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.





*/
// cria uma função que recebe um callback como parametro e o executa
// no caso, a função desaccelerate recebe o parametro velocity que inicia com 150 e recebe um callback que imprime a nova velocidade. 
function desaccelerate (velocity, printer){
    let newVelocity = velocity - 20;
    printer(newVelocity);
  // quando essa função for chamada, ela vai executar a subtração de 20 km/s a cada segundo (ou a cada iteração do laço de repetição) Ela vai ser guardada em uma variavel newVelocity e a variavel newVelocity vai ser passada como parametro para o callback printer.


  if (newVelocity > 0){
    desaccelerate(newVelocity, printer)
  } else{
    console.log("Nave parada, Desembarque Liberado")
   
  } 




  // este laço de repetição vai receber a nova velocidade armazenada na variavel newVelocity e vai chamar a função desacelerate novamente, passando como parametro a nova velocidade e o callback printer. Essa função vai ser executada novamente até que a nova velocidade seja menor que 0. 
    


 
   // nao precisa de return, pois a função nao retorna nada.
}

let printVelocity = velocity => {
    console.log("Nova velocidade: " + velocity + " Km/s")
    

   // essa função vai imprimir a nova velocidade na tela. O velocity é passado como parametro para a função. No console.log o velocity vai ser impresso como string. 
}

let newVelocity = desaccelerate(140, printVelocity); // chamando a função desacelerar e passando a velocidade inicial e o callback para imprimir a velocidade. 