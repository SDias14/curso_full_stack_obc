//trabalhar com data em javascript : podemos trabalhar com a biblioteca moment.js

let departureDateEntry = prompt("Digite a data de partida : (formato : DD/MM/YYYY) ")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY") //converte a data de string para data com a biblioteca moment.js

let today = moment() //pega a data atual    

//calculando a diferença da data atual com a data de partida. 

let dateDiff = today - departureDate // o moment faz a conversao de data para milisegundos. 

let chosenOption = prompt("Digite a opcao desejada :\n 1 - segundos \n 2 - minutos \n 3 - horas \n 4-dias ")

if (chosenOption == 1) {
    let secondsOfDeparture = Math.round(dateDiff / 1000) //biblioteca math = nativa do js que é usada para arredondar ou para cima ou para baixo valores. 
    alert("Tempo de voo : " + secondsOfDeparture + " segundos")
} else if (chosenOption == 2) {
    let minutesOfDeparture = Math.round(dateDiff / 60000)
    alert("Tempo de voo : " + minutesOfDeparture + " minutos")
} else if (chosenOption == 3) {
    let hoursOfDeparture = Math.round(dateDiff / 3600000)
    alert("Tempo de voo : " + hoursOfDeparture + " horas")
   
} else if (chosenOption == 4) {
    let daysOfDeparture = Math.round(dateDiff / 86400000)
    alert("Tempo de voo : " + daysOfDeparture + " dias")
}

else{
    alert("Opcao invalida")
    
}
