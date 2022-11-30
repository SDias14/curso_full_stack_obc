let qtdInicialDinheiro = prompt("Digite a quantidade inicial de dinheiro: ");

let qtdDinheiroNumber = Number(qtdInicialDinheiro);

alert ("Você tem " + qtdDinheiroNumber + " reais"); 

let menu = prompt("Digite o número do menu: \n1 - Adicionar \n2 - remover \n3 - encerrar");

do {
    
    if (menu == 1) {
        let qtdDinheiroAdicionar = prompt("Digite a quantidade de dinheiro que você quer adicionar: ");
        let qtdDinheiroAdicionarNumber = Number(qtdDinheiroAdicionar);
        qtdDinheiroNumber = qtdDinheiroNumber + qtdDinheiroAdicionarNumber;
        alert ("Você tem " + qtdDinheiroNumber + " reais"); 
    } else if (menu == 2) {
        let qtdDinheiroRemover = prompt("Digite a quantidade de dinheiro que você quer remover: ");
        let qtdDinheiroRemoverNumber = Number(qtdDinheiroRemover);
        qtdDinheiroNumber = qtdDinheiroNumber - qtdDinheiroRemoverNumber;
        alert ("Você tem " + qtdDinheiroNumber + " reais"); 
    } else if (menu == 3) {
        alert("Opção escolhida: " + menu + " - encerrar");
    } else {
        alert("Opção inválida");
    }
    
        menu = prompt("Digite o número do menu: \n1 - Adicionar \n2 - remover \n3 - encerrar");
    
    } while (menu != 3);