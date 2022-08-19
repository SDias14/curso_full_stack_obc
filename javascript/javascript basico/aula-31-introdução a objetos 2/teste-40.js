//  introdução a objetos - 2 

/*

let spacialStation = {
    nome: 'Space Station',
    platforms : 10
} // essa é a forma de criar objetos passando propriedades como se fossem uma variável

*/

//podemos fazer tambem da seguinte forma : 

let spacialStation = {
    'new name' : 'Space Station', //  podemos colocar na propriedade uma string

    true : false, // podemos colocar na propriedade um valor booleano

    
    2 : 'Descoberta' // podemos colocar na propriedade um valor numérico
}

//nao consegue acessar a posição 2 pois o js esta entendendo como um numero e não como uma string. somente com colchetes.

console.log(spacialStation[2])


// recomendação : evitar usar propriedades com strings, boleanos e numeros.



