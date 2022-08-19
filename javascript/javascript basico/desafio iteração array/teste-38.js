//  iteração arrays  
 /*
temos abaixo , um array bidimensional de naves que estão engatadas numa estação espacial.

const hitchedSpaceships = [
    ['Fenix', 8 , true], // indice 0 
    ['Golias', 10 , true],//indice 1 
    ['Helmet', 5 , false],//indice 2 
    ['Elemental', 3 , true],//indice 3 
    ['Darwin', 7 , false], // indice 4 
]

para cada subarray , a primeira posição é o nome da nave , a segunda é o número de tripulantes e a terceira é um booleano que indica se a nave está engatada ou não.

nesta lista , a plataforma de engate que a nave está parada é o [indice da nave no array + 1]

Com base nesse array , nos queremos : 

1 - filtrar  o nome das naves que tem mais de 9 tripulantes

2 - informar o numero da plataforma em que esta a primeira nave que ainda esta com o engate pendente. (utilize a função findIndex, que é bem parecida com o find mas retorna o indice de um filtro em vez do elemento do array)

3-Destacar o nome de todas as naves colocando em caixa alta e exibindo 

4 - exibir um alert com todas as informações. 





 */


const hitchedSpaceships = [
    ['Fenix', 8 , true], // indice 0 
    ['Golias', 10 , true],//indice 1 
    ['Helmet', 5 , false],//indice 2 
    ['Elemental', 3 , true],//indice 3 
    ['Darwin', 7 , false], // indice 4 
]

// retornar o nome das naves que tem mais de 9 tripulantes

let with9Characters = hitchedSpaceships.filter(function(currentSpaceship, index){
    return currentSpaceship[1] >= 9;
    
} )



//retirar os dois ultimos elementos do array with9Characters

let nameSpaceship = with9Characters [0] [0];

alert ("Nomes das naves com mais de 9 tripulantes: " +  nameSpaceship);





// retornar o indice da plataforma em que esta a primeira nave que ainda esta com o engate pendente.    


let firstPlatform = hitchedSpaceships.findIndex(function(currentSpaceship, index){
    return currentSpaceship[2] == false;
});

alert ("Primeira plataforma em que esta a primeira nave que ainda esta com o engate pendente: " + (firstPlatform + 1));


//Destacar o nome de todas as naves colocando em caixa alta e exibindo

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index){
    return currentSpaceship[0].toUpperCase();
} )

alert ("Nomes das naves em caixa alta: " + upcasedSpaceships);



//exibir um alert com todas as informações.


alert ("Nomes das naves com mais de 9 tripulantes: \n" +  nameSpaceship  + "\nPrimeira plataforma em que esta a primeira nave que ainda esta com o engate pendente: \n" + (firstPlatform + 1) +"\nNomes das naves em caixa alta: \n" + upcasedSpaceships);