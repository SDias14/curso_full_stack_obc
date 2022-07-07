//switch 

/*let velocity = 90 

switch (velocity *2) {
    case 100:
        console.log('Velocity is 100')
        break;
    case 160:
        console.log('Velocity is 160')
        break;
    default:
        console.log('Velocity is not 100 or 160')
        break;
       }
*/

//switch com string
/*
let spaceship = "Defiant"    

switch (spaceship) {
    case "Golias":
        console.log("This is a spaceship from the Star Wars franchise")
        break;

    case "Enterprise":
        console.log("This is a spaceship from the Star Trek franchise")
        break;
    case "Defiant":
        console.log("This is a spaceship from the Star Trek franchise")
        break;
    default:
        console.log("This is not a Star Wars or Star Trek spaceship")       
} */
//pode- se aninhar varios cases e executar um comando apenas.

/*

let velocity = 90

    switch (velocity) {
        case 80:
        case 90:
        case 100:
            console.log('Velocidade aceitável')
            break;
        case 110: 
         console.log('Velocidade acima do limite')
         break;
        default:
            console.log ("velocidade não identificada")     
    } // o case vai ate o break, se nao tiver break, vai ate o default, ou seja, o switch testa todas as condições ate achar a verdadeira e parar. 

    */

    let spaceship = "Elemental"

    switch (spaceship) {

        case "Golias":
            console.log("Nave mais resistente do universo")
        case "Elemental" :
            console.log("Nave com melhor armamento do universo")
        case "Helmet":
            console.log("Rapida ativação de escudo") 
        case "Frontier":
            console.log("Nave de infantaria")     
            break;  
        case "Enterprise":
            console.log("Nave da frota estelar")    
        default:
            console.log("Nave não identificada")    



    }