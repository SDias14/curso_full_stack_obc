let menu = prompt("Digite o número do menu: \n1 - default \n2 - default \n3 - default \n4 - default \n5 - encerrar");

do {

    if (menu == 1) {
        alert("Opção escolhida: " + menu + " - default");
    } else if (menu == 2) {
        alert("Opção escolhida: " + menu + " - default");
    } else if (menu == 3) {
        alert("Opção escolhida: " + menu + "default");
    } else if (menu == 4) {
    alert("Opção escolhida: " + menu + "default");
    } else if (menu == 5) {
        alert("Opção escolhida: " + menu + " - encerrar");
    } else {
        alert("Opção inválida");
    }

    menu = prompt("Digite o número do menu: \n1 - default \n2 - default \n3 - default \n4 - default \n5 - encerrar");

} while (menu != 5);
