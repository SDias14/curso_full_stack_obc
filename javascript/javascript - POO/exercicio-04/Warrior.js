export class Warrior extends Character {
  constructor(name, life, attack, defense, shield, position) {
    super(name, life, attack, defense);
    this.shield = shield;
    this.position = position;
  }

    attack( target ) {
        //o ataque so vai acontecer se a posicao for de ataque

        if (this.position === 'attack') {
            target.life -= this.attack - target.defense;
        } else {
            console.log('Não é possível atacar');
        }

    }

    changePosition( position ) {

        this.position = position;

    } 

    defend( target ) {
        //somar os pontos de defesa do guerreiro com os pontos de escudo

        target.life -= this.defense + this.shield - target.attack;

    }

} 


module.exports = { Warrior };
       
