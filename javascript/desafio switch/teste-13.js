//desafio switch case - orientações : 

//1 - Perguntar a distancia em anos-luz

//2- Oferecer uma lista de opções com : Parsec (pc), Unidade Astronomica(AU), quilometro(km)

//3 - Perguntar qual operação deseja realizar 

//4 - Utilize o switch para verificar a opção escolhida pelo usuario. (Armazenar o nome da unidade de medida escolhida) e (Armazenar o valor convertido de anos-luz para a unidade desejada.)

//5 - Exiba com alerta contendo a distancia em anos-luz e a distancia convertida para a operação desejada. 

//6 - Utilize as seguintes conversoes : 

//1 l.y = 0,306601pc 
//1 l.y = 63241,1 AU
//1 l.y = 9.5 * 10^12km

//inicio 

let lightYear = prompt("Digite a distancia em anos-luz");
let opcao = prompt("Digite a operação desejada : \n 1 - Para converter para Parsec \n 2 - Para converter para Unidade Astronomica \n 3 - Para converter para Quilometro");

switch (opcao) {
    case "1":
        alert(`A distancia em anos-luz é ${lightYear} e convertida para Parsec é ${lightYear * 0.306601}`);
        break;
    case "2":
        alert(`A distancia em anos-luz é ${lightYear} e convertida para Unidade Astronomica é ${lightYear * 63241.1}`)
        break;
    case "3":
        alert(`A distancia em anos-luz é ${lightYear} e convertida para Quilometro é ${lightYear * 9.5 * Math.pow(10, 12)}`)
        break;
    default:
         alert("Opção inválida");                   

}