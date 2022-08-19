// estruturas de repetição são usadas para repetir um bloco de código. 

//veremos while, do while, for

//while : 

//while (expressao) {
    // <bloco de código>
//}

/*

let velocity = 50;
let acceleration = 5;

while (velocity <=100){
    console.log ("Acelerando : Estamos a " + velocity + "km/s" )
    velocity += acceleration; // velocity = velocity + acceleration
}

*/

let constellation = "Andromeda";
let position = 0;
let constellationLength = constellation.length;

while (position < constellationLength){
    if(constellation[position] == "a" || constellation[position] == "A"){
       console.log (position)
    }
    position += 1;
}