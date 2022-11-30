 let size = prompt ("Digte um número: ");

 let sizeNumber = Number(size);

 let option = prompt ("Escolha uma opção : \n 1-Milimetros(mm) \n 2- centimetros(cm) \n 3-decimetro(dm) \n 4-decametro(dam) \n 5-hectometro(hm) \n 6-kilometro(km)");

let optionNumber = Number(option);

switch (optionNumber) {
    case 1:
        alert (`Opcao escolhida: Milimetros \n ${sizeNumber} metros equivale a ${sizeNumber * 1000} milimetros`);
        break;
    case 2:
        alert (`Opção 2 escolhida, o valor em centimetros é: ${sizeNumber * 100}`);
        break;
    case 3:
        alert (`Opção escolhida: ${optionNumber} \n Valor em decimetros: ${sizeNumber * 10}`);
        break;
    case 4:
        alert (`Opção escolhida: ${optionNumber} \n Valor em decametros: ${sizeNumber / 10}`);
        break;
    case 5:
        alert (`Opção escolhida: ${optionNumber} \n Valor em hectometros: ${sizeNumber / 100}`);
        break;
    case 6:
        alert (`Opção escolhida: ${optionNumber} \n Valor em kilometros: ${sizeNumber / 1000}`);
        break;
    default:
        alert ("Opção inválida");
        break;
}