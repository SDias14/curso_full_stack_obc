class Character {
    constructor(name, life, attack, defense) {
      this.name = name;
      this.life = life;
      this.attack = attack;
      this.defense = defense;
    }
  
      attack( target ) {
          target.life -= this.attack - target.defense;
  }
  
  
  }

  ///////////////////////////////////////


  class Thief extends Character {
    constructor(name, life, attack, defense){
      super(name, life, attack, defense);
     
    }
  
      attack( target ) {
          target.life -= this.attack - target.defense;
          this.life += this.attack - target.defense;
  
      }
  }

  
  ////////////////////////////////////


  class Mage extends Character {
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
  

const title = new Component("h1", "body", {
    textContent: "Exercício 03",
});


title.render();

title.tag = "h3";

title.build().render();


const form = new Form("body");

const label = new Label("Nome", form, {htmlFor: "nomeInput"});

const input = new Input(form, {id: "nomeInput", name: "nome"});

form.render();
label.render();
input.render();

form.addChildren(label, input);

form.addChildren(
    new Component("br"),
    new Component("br"),
    new Label("Sobrenome", form, {htmlFor: "sobrenomeInput"}),
    new Input(form, {id: "sobrenomeInput", name: "sobrenome"}),
    new Component("br"),
    new Component("br"), 
    new Input(form, {type: "submit", value: "Enviar"}),
)






