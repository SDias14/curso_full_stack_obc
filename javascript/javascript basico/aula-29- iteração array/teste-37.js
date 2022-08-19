//  iteração arrays  
/*
// array.funcaoDeIterar(function(elementoAtual,indice, array){
    <corpo da função>
})

*/

/*


let hitchedSpaceships = ["Millennium Falcon", "X-Wing", "TIE Advanced x1", "Executor"]; // array com 4 elementos : 0 1 2 3

//metodo forEach

hitchedSpaceships.forEach(function(currentSpaceship, index){
    console.log(`${index} : ${currentSpaceship}`);
}) // para cada iteração do array, a função será executada, ou seja na primeira iteração o currentSpaceship será Millennium Falcon, na segunda X-Wing, na terceira TIE Advanced x1, e na quarta Executor. O index vai funcionar da mesma forma. A cada iteração o index vai ser incrementado.

*/

/*

//map - retorna um novo array sem alterar o original

let hitchedSpaceships = ["Millennium Falcon", "X-Wing", "TIE Advanced x1", "Executor"]; // array com 4 elementos : 0 1 2 3

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index){
    return currentSpaceship.toUpperCase();
    
})

console.log(upcasedSpaceships);

*/

/*

//filter - retorna um novo array sem alterar o original

let hitchedSpaceships = ["Millennium Falcon", "X-Wing", "TIE Advanced x1", "Executor"]; // array com 4 elementos : 0 1 2 3

let with7Characters = hitchedSpaceships.filter(function(currentSpaceship, index){
    return currentSpaceship.length >= 7;
} )


console.log(with7Characters);

*/


//find - retorna o primeiro elemento que satisfaz a condição


let hitchedSpaceships = ["Millennium Falcon", "X-Wing", "TIE Advanced x1", "Executor"]; // array com 4 elementos : 0 1 2 3

let with7Characters = hitchedSpaceships.find(function(currentSpaceship, index){
    return currentSpaceship.length >= 7;
} )


console.log(with7Characters);






    
