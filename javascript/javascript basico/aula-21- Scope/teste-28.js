// Scope 

/*


let spaceshipName = 'Supernova'

function changeSpaceshipName(){
  spaceshipName = 'Elemental'
}

changeSpaceshipName()

alert (spaceshipName)

//quando declaramos uma variavel com let ela pode ser acessada de qualquer lugar do codigo e não apenas dentro do bloco. Essa variavel pode ser chamada de variavel de escopo global . 

*/ 

/*

//escopo local 

function startSpaceshipVelocity(){
   let spaceshipVelocity = 0
  
}

let spaceshipVelocity = 0

startSpaceshipVelocity()

console.log(spaceshipVelocity)

// podemos dizer que esse bloco possui um escopo local. Isso significa que somente dentro do bloco podemos acessar a variavel spaceshipVelocity.

*/

/*

function setSpaceshipDetails(){
  let velocity = 50 //escopo local - pode ser usada em toda a funcao
  if (velocity == 50){
    velocity = 60 
    var spaceshipName = 'Elemental' // o var leva a variavel para o escopo global, pois a função tem um escopo global
    let spaceshipType = 'Discovery' // escopo local - pode ser usada somente dentro da funcao pois foi declarada com let
  }

  console.log(velocity )
  console.log(spaceshipName)
  console.log(spaceshipType)
}

setSpaceshipDetails()

*/

function setSpaceshipDetails (){
  console.log(spaceshipName)
  console.log(spaceshipType)
  
  var spaceshipName = 'Elemental' // como a variavel spaceshipName foi declarada com var, ela é global e pode ser acessada de qualquer lugar do codigo. ou seja, quando dermos um console.log antes da variavel spaceshipName, ela será impresso, mas com valor undefined.
 let spaceshipType = 'Discovery' // como a variavel spaceshipType foi declarada com let, ela é local e só pode ser acessada dentro da função. ou seja, quando dermos um console.log antes da variavel spaceshipType, ela não será impresso, pois esta dentro da funcao porem o console.log não acessou a variavel spaceshipType.

  console.log (spaceshipName)
  console.log (spaceshipType)
}

setSpaceshipDetails()
