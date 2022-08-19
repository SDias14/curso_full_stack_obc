/*

// para usarmos valores depois de um tempo em nosso codigo podemos armazenar em variaveis. A partir da versao ES6 podemos usar let e const.

// declarando variaveis com let

let spaceship = 'Enterprise';

// let :  estou dizendo que estou declarando uma variavel. // spaceship : estou dizendo que estou declarando uma variavel chamada spaceship. enterprise : o valor atribuido. 

//imprime o que está dentro da variavel 
console.log(spaceship);

//sobrescrever o valor da variavel

spaceship = 'Explorer';
console.log(spaceship);

//quando a variavel ja existe e quero declarar um novo valor, o valor antigo sera sobrescrito.

*/
//---------------------------------------------------------------------------------------------------------------------
/*
//const: constante

const squad ='Avengers';
console.log(squad);
squad = 'X-men';
console.log(squad);

//quando declaramos uma variavel const estamos dizendo que ela tem um valor constante , ou seja, nao muda. Por isso nao conseguimos atribuir um novo valor. 

*/

/*

// var : declaração de variavel com var. 

var velocity = 100;
console.log(velocity);
velocity = 150;
console.log(velocity);

*/

/*

//podemos tambem declarar uma variavel sem valor definido. 

let noValue 
console.log(noValue); */
/*

//podemos retornar o valor da variavel com o confirm junto tambem. 

let departureConfirmation = confirm('Are you ready to depart?');

console.log(departureConfirmation);

*/

//usando o prompt para receber valores do usuario.

let pilot = prompt('que dia voce quer agendar sua consulta ?');

alert("consulta agenda para o dia " + pilot);

//camel case : primeira letra minuscula e a letra da outra palabra maiscula.

