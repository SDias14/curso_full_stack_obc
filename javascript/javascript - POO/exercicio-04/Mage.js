export class Mage extends Character {
  constructor(name, life, attack, defense, magic) {
    super(name, life, attack, defense);
    this.magic = magic;
  }

    attack( target ) {
        //somar os pontos de ataque do mago com os pontos de magia

        target.life -= this.attack + this.magic - target.defense;


    }

    increaseAttacklives( target ) {
        //aumentar a vida de um personagem em um valor de duas vezes a magia do mago

        target.life += this.magic * 2;

        

    }

}



module.exports = { Mage };