class Character {
  constructor(name, life, attPoints, defPoints) {
    this.name = name;
    this.life = life;
    this.attPoints = attPoints;
    this.defPoints = defPoints;
  }

  attack(target) {
    
    
    target.life -= this.attPoints - target.defPoints;
 }
}

module.exports = Character;


