let imovel = [];




let menu = prompt(`Bem vindo ao sistema gerencial da imobiliaria Dias \n\n Quantidade de casas cadastradas: ${imovel.length} \n Digite 1 para salvar um imovel \n Digite 2 listar um imovel \n Digite 0 para sair`);

while (menu != 0) {
    if(menu == 1) {
        let addImovel = {}
        addImovel.nome = prompt('Digite o nome do proprietario:');
        addImovel.qtdQuartos = prompt('Digite a quantidade de quartos:');
        addImovel.qtdBanheiros = prompt('Digite a quantidade de banheiros:');
        addImovel.qtdVagas = prompt('Digite a quantidade de vagas de garagem:');

        imovel.push(addImovel);
    } else if (menu == 2) {
        imovel.forEach(element => {
            alert(`Proprietario: ${element.nome} \n Quartos: ${element.qtdQuartos} \n Banheiros: ${element.qtdBanheiros} \n Vagas: ${element.qtdVagas}`);
            
        });
    
 } else {
        alert('Opção inválida!');
    }

    menu = prompt(`Bem vindo ao sistema gerencial da imobiliaria Dias \n\n Quantidade de casas cadastradas: ${imovel.length} \n Digite 1 para salvar um imovel \n Digite 2 listar um imovel \n Digite 0 para sair`);

}