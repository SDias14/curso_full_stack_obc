let komodoShip = {
    name: 'Komodo',
    velocity : 80,
    acceleration : 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
new Promise((resolve, reject) => {
    setTimeout(() => {
 if (velocity > 0) {
    velocity += acceleration * 2

    console.log(`A velocidade da nave ${komodoShip.name} é de ${velocity} km/s`)
    resolve(velocity)

}else {
       console.log('A nave não pode acelerar')
       reject("Nao possui velocidade")
    }



}, 2000) 
}) 

}


velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)

console.log('Executando...')