const Character = require('./Character');

class Thief extends Character {
   
   
    
  
      attack(target) {
            target.life -=( this.attPoints - target.defPoints) * 2;
      }

  }


module.exports = Thief;
    
    