class Character {
  constructor(name, life) {
    this.name = name;
    this.life = life;
  }

  attack() {

    console.log('Moving');
 
  }
}

class Warrior extends Character {
  constructor(name,life,position) {
    super(name, life);
    this.position = position;
 
  }

    attack() {

    console.log('Lutando com espada');
   

    }


}

class Mage extends Character {
  constructor(name,life,magic) {
    super(name, life);
    this.magic = magic;
 
 
  }

  attack(spade) {

    console.log(`Lutando com ${spade}`);
   

    }
  
    
  }



const warrior = new Warrior('Goku', 100, 'attack');

const mage = new Mage('Gandalf', 100, 50);




warrior.attack();
mage.attack('arco e flecha');




   
  
  
 

  

