//  adicionando funções ao objeto


//os objetos podem receber funções. Quando isso acontece a funcao é chamada de metodo.

let spaceship = {
    name : 'Enterprise', //atributo
    type : 'extraction', //atributo
    maxCrew : 20, //atributo
    turnOn : function(){
        console.log('Lights on');
        console.log('Winding up');
    } // metodo


}

//chamando o metodo

    spaceship.turnOn();

    spaceship.velocity = 100;

    spaceship.speedUp = function( acceleration){
        this.velocity += acceleration;
    }

  console.log(spaceship);

  spaceship.speedUp(10);

    console.log(spaceship);

   



