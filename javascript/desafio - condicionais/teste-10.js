let nome = prompt ("Digite o seu nome : ")
let initVelocity = 0 
let targetVelocity = prompt ("A que velocidade gostaria de chegar ?(velocidade em km/s)")
let velocityConfirmation = confirm ("Você gostaria de ir até a velocidade de " + targetVelocity + "?")

if(velocityConfirmation == false){
    alert("Confirme primeiro sua velocidade")
} else {
    if (targetVelocity < 0 ){
        alert("Nave está parada. Considere partir e aumentar a velocidade")
    } else if (targetVelocity < 40){
        alert("Você está devagar. Podemos aumentar a velocidade")
    } else if (targetVelocity >= 40 && targetVelocity < 80 ){
        alert("Parece uma boa velocidade para manter")
    } else if (targetVelocity >=80 && targetVelocity < 100 ){
        alert("Velocidade alta. Considere diminuir")
    } else{
       alert("Velocidade perigosa.Controle automatico forçado")
    }

    alert(nome + " sua velocidade atual é " + targetVelocity)
}





