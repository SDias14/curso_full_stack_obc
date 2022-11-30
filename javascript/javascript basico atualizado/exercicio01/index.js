let firstName = prompt("Digite seu primeiro nome")

let lastName = prompt("Digite seu sobrenome")

let studyArea = prompt("Digite sua área de estudo")

let age = prompt("Digite o ano de nascimento")

let ageNumber = Number(age)

let currentYear = 2022

let ageCalc = currentYear - ageNumber

alert(`Olá, ${firstName} ${lastName}! Você tem ${ageCalc} anos e estuda ${studyArea}.`)