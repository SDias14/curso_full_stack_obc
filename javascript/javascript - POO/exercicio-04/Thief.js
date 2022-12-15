

export class Thief extends Character {
  constructor(name, life, attack, defense){
    super(name, life, attack, defense);
   
  }

    attack( target ) {
        target.life -= this.attack - target.defense;
        this.life += this.attack - target.defense;

    }
}



module.exports = { Thief };