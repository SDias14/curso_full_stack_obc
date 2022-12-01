let cards = [2,4,6,7,"A's"];

let menu = prompt(`Bem vindo ao Jogo! \n Cartas no baralho: ${cards} \n Digite 1 para adicionar uma carta \n Digite 2 para puxar uma carta \n Digite 3 para listar todas as cartas \n Digite 0 para sair`);

while (menu != 0) {
    if(menu == 1) {
        let addCard = prompt('Digite a carta  que deseja adicionar:');
        cards.unshift(addCard);
        alert(`Carta ${addCard} adicionada com sucesso!`);
    } else if (menu == 2) {
        removedCard = cards.shift();

        alert(`Carta ${removedCard} removida com sucesso!`);
    } else if (menu == 3) {
        alert(`Cartas na Mesa : ${cards}`);
    } else {
        alert('Opção inválida!');
    }

    menu = prompt(`Bem vindo ao Jogo! \n Cartas no baralho: ${cards} \n Digite 1 para adicionar uma carta \n Digite 2 para puxar uma carta \n Digite 3 para listar todos os pacientes \n Digite 0 para sair`);

}