// armadilha de parâmetro
/*
function greetPilot (name, message = 'olá') {
  alert(message + ' ,  ' + name);
}

greetPilot();

//podemos atribuir um valor padrao para o parametro caso ele nao seja chamado. 

//no javascript podemos ter um parametro como opcional. Quando declaramos uma variavel com nenhum valor , ela recebe undefined.

*/

/*

function greetPilot (name, surname,  message = 'olá') {
  let newGreet = alert(message + ' ,  ' + name + ' ' + surname);
}

let name1 = prompt('Qual o seu nome?');
let surname1 = prompt('Qual o seu sobrenome?');

greetPilot(name1, surname1);

*/

//ordem dos parametros ( armadilha de parametro )

function speedUp (velocity, acceleration, unit = "km/s") {
  let newVelocity = parseInt( velocity )+ parseInt(acceleration);
  alert ("newVelocity: " + newVelocity + unit);
}

let vel = prompt("Qual a velocidade atual?");

let acel = prompt("Qual a aceleração?");

speedUp (vel,  acel); // vai retornar um erro pois nao temos o parametro unit. ele vai tentar somar o valor da velocidade com unit e nao vai conseguir. 