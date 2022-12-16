const Character = require('./Character');

class Warrior extends Character {
    constructor(name,life,attPoints,defPoints,shield) {
      super(name, life, attPoints, defPoints);
      this.shield = shield;
      this.stance = 'attacking';
   
   
    }
  
      attack(target) {
        if (this.stance === 'attacking') {
         super.attack(target);
        }

      }

      switchStance() {
        if (this.stance === 'attacking') {
          this.stance = 'defending';
          this.defPoints += this.shield;
        } else {
          this.stance = 'attacking';
          this.defPoints -= this.shield;
        }
      }
  
  
  }

module.exports = Warrior;
