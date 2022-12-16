const Character = require('./Character.js');
const Mage = require('./Mage.js');
const Warrior = require('./Warrior.js');
const Thief = require('./Thief.js');


//ataque de character e thief

const arthur = new Mage('Arthur', 90, 4, 2, 14);

const lancelot = new Thief('Lancelot', 140, 22,8);

const merlin = new Warrior('Merlin', 200, 14,12, 4);

console.table([arthur, lancelot, merlin]);

merlin.switchStance();
arthur.attack(merlin);

arthur.attack(lancelot);


console.table([arthur, lancelot, merlin]);







  

