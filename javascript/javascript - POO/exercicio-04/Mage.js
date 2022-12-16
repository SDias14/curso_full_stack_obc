const Character = require('./Character');

class Mage extends Character {
  constructor(name,life,attPoints,defPoints,magic) {
    super(name, life, attPoints, defPoints);
    this.magic = magic;
 
 
  }

  attack(target) {

    target.life -= (this.attPoints - this.magic) - target.defPoints;
   

    }

    heal(target) {
      target.life += this.magic * 2;
    }
  
    
  }

module.exports = Mage;

