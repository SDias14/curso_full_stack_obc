let komodoShip = {
    name: 'Komodo',
    velocity : 80,
    acceleration : 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
return new Promise((resolve, reject) => {
   setInterval(() => {
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


velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then((velocity) => {
    komodoShip.velocity = velocity
    console.log(`depois de acelerar ${komodoShip.name} é de ${velocity} km/s`)
})
    

    


console.log("executando...")
console.log(komodoShip)