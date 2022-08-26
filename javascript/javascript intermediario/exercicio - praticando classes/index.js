class Spaceship {
    constructor(name, crew) {
        this.name = name;
        this.crew = crew;   
        this.isHitched = false ;
        this.isDoorOpen = false;
        
    } 

    hitch() {
        this.isHitched = true;
        this.isDoorOpen = true;
    }
    
    
}

//primeira parte do programa. Quando o programa rodar ele vai pedir para o usuario escolher uma opção. Essa é uma função que vai retornar uma opção escolhida pelo usuario.

function showMenu() {
   let chosenOption
   while (chosenOption !="1" && chosenOption !="2" && chosenOption !="3") {
       chosenOption = prompt("Escolha uma opção : \n 1 - Realizar engate \n 2 - Imprimir todas as naves \n 3 - Sair do programa");
   }
    return chosenOption;

}

function createSpaceShip() {
    let spaceshipName = prompt("Digite o nome da nave");
    let spaceshipCrew = prompt("Digite o numero de tripulantes");
    let spaceship = new Spaceship(spaceshipName, spaceshipCrew);
    return spaceship;
}

function printSpaceships(spaceships) {
    let spaceshipList = "";
    spaceships.forEach((spaceship, index) => {
        spaceshipList += `${index + 1} - ${spaceship.name} - ${spaceship.crew} tripulantes \n`;
    } );

    alert(spaceshipList);



}

//2 parte - se for escolhido a opção 1, o programa vai chamar a função createSpaceShip para criar uma nova nave.

let hitchedSpaceships = []

let chosenOption


while(chosenOption !="3") {
    chosenOption = showMenu();

    switch (chosenOption) {

        case '1':
            let spaceshipToAdd = createSpaceShip();
            spaceshipToAdd.hitch();
            hitchedSpaceships.push(spaceshipToAdd);
            break;
        case '2':
            printSpaceships(hitchedSpaceships);
            break;



}

}
    






