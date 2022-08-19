//  splice e slice  


// splice e slice possibilita manipular dados no meio de um array

//splice = emendar ou costurar dados no meio de um array, substitui o array original. 


// sintaxe: array.splice(index ,            [,deleteCount[, elemento1[,...[,elementoN]]]);


//espera um primeiro parametro que é um indice do array 

// o segundo é a quantidade de elementos que serão excluidos

// os proximos parametros são os elementos que serão inseridos no array

/*

let spaceshipNames = [ "Enterprise", "Defiant", "Discovery", "Endeavor" ];

removedSpaceships = spaceshipNames.splice(1, 2, "Atlantis", "Voyager"); // remove 2 elementos e substitui pelos elementos que estão no parametro

console.log(spaceshipNames); // [ 'Enterprise', 'Atlantis', 'Voyager', 'Endeavor' ]

console.log(removedSpaceships); // retorna os elementos excluidos

*/


//slice = significa fatiar ou dividir. Extrai uma parte do array sem alterar o array original.

// sintaxe: array.slice([start[, end]]);

// possui um primeiro parametro que é o indice inicial 

// o segundo parametro é o indice final, ou seja, o ultimo elemento que será excluido

// retorna todos os elementos do indice inicial até o indice final

let spaceshipNames = [ "Enterprise", "Defiant", "Discovery", "Endeavor" ];

let extractedNames = spaceshipNames.slice(1, 3); // extrai os elementos do indice 1 até o indice 3

console.log(spaceshipNames)

console.log(extractedNames); // [ 'Defiant', 'Discovery' ]



