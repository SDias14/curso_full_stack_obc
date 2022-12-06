function addPlayer(){
    const position = document.getElementById("position").value;

    const name = document.getElementById("name").value;

   const number = document.getElementById("number").value;

 const confimation = confirm(`Deseja adicionar o jogador ${name} na posição ${position} com o número ${number}?`); // confirmação de adição do jogador

    if(confimation){

        const teamList = document.getElementById("team-list");

        const playerItem = document.createElement("li");

        playerItem.id = 'player-' + number;

        playerItem.innerText = "Nome: " + name + " Posição: " + position + " Número: " + number;

        teamList.appendChild(playerItem);

        document.getElementById("position").value = "";

        document.getElementById("name").value = "";

        document.getElementById("number").value = "";

    }
   





}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value;
    const playerToRemove = document.getElementById('player-' + number);
    
    const confirmation = confirm(`Deseja remover o jogador ${playerToRemove.innerText}?`);

    if(confirmation){
        document.getElementById('team-list').removeChild(playerToRemove);

        document.getElementById('numberToRemove').value = "";

    }
    

    
}

   
        
    
    
