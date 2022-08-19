alert("Bem vindo! A seguir, pediremos que informe alguns dados.");

let nome = prompt("Qual o seu nome?");

let age = prompt("Qual a sua idade?");

let confirmation = confirm("Você tem " + age + " anos?");

alert("Seu nome é " + nome + " e você tem " + age + " anos. Essa informação foi confirmada: " + confirmation);