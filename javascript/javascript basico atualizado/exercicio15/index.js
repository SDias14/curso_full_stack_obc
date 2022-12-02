let vagas = [];// criação de array vazio para objetos do tipo vaga. Em cada posição do array será armazenado um objeto do tipo vaga, contendo : nomeVaga, descricaoVaga,dtLimite.

let candidatos = [];// criação de array vazio para objetos do tipo candidato. Em cada posição do array será armazenado um objeto do tipo candidato, contendo : nomeCandidato, indiceVaga, 





let menu = prompt(`Bem vindo ao sistema gerencial da Vagas Dias \n\n  1 - Criar nova Vaga \n 2 - Listar vagas  \n 3 - Visualizar vaga especifica \n 4 - Increver-se a vaga \n 5 - excluir vaga \n 0 - Sair do sistema `);

while (menu != 0) {

    if (menu == 1) {

        let addVaga = new Object();// criação de objeto do tipo vaga

        addVaga.nomeVaga = prompt(`Digite o nome da vaga:`);

        addVaga.descricaoVaga = prompt (`Digite a descrição da vaga:`);

        addVaga.dtLimite = prompt(`Digite a data limite para inscrição:`);

        let confirmVaga = prompt(`Confirma a criação da vaga? \n 1 - Sim \n 2 - Não`);

        if (confirmVaga == 1) {
                
                vagas.push(addVaga);// adiciona o objeto criado no array de vagas
    
                alert(`Vaga criada com sucesso!`);
    
            } else {
                        
                    alert(`Vaga não criada!`);
        
                }

    } else if (menu == 2) {

        //perguntar o indice da vaga a ser visualizada e quantidade de candidatos inscritos por vaga

        let indiceVaga = prompt(`Digite o indice da vaga:`);

        let vaga = vagas[indiceVaga];

        //fazer um for para percorrer o array de candidatos e verificar se o indice da vaga é igual ao indice da vaga do candidato

        let qtdCandidatos = 0;

        for (let i = 0; i < candidatos.length; i++) {
                
                if (candidatos[i].indiceVaga == indiceVaga) {
    
                    qtdCandidatos++;
    
                }
    
            } 

        alert(`Nome da vaga: ${vaga.nomeVaga} \n Descrição da vaga: ${vaga.descricaoVaga} \n Data limite para inscrição: ${vaga.dtLimite} \n Quantidade de candidatos inscritos: ${qtdCandidatos}`);





        

} else if (menu == 3) {

        let vagaEspecifica = prompt(`Digite o indice da vaga :`);

        alert(`Vaga: ${vagas[vagaEspecifica].nomeVaga} \n Descrição: ${vagas[vagaEspecifica].descricaoVaga} \n Data limite: ${vagas[vagaEspecifica].dtLimite} \n\n`);

    } else if (menu == 4) {

        let addCandidate = new Object();// criação de objeto do tipo candidato

        addCandidate.nomeCandidato = prompt(`Digite o nome do candidato:`);

       //adicionar o candidato a uma vaga especifica

        let vagaEspecifica = prompt(`Digite o indice da vaga :`);

        addCandidate.indiceVaga = vagaEspecifica;

        let confirmCandidato = prompt(`Confirma a inscrição do candidato? \n 1 - Sim \n 2 - Não`);

        if (confirmCandidato == 1) {
                
                candidatos.push(addCandidate);// adiciona o objeto criado no array de candidatos
    
               //todas as informações do candidato e da vaga que ele se inscreveu

                alert(`Candidato inscrito com sucesso! \n\n Candidato: ${candidatos[candidatos.length - 1].nomeCandidato} \n Vaga: ${vagas[vagaEspecifica].nomeVaga} \n Descrição: ${vagas[vagaEspecifica].descricaoVaga} \n Data limite: ${vagas[vagaEspecifica].dtLimite}`);
    
            } else {
                        
                    alert(`Candidato não inscrito!`);
        
                }

} else if (menu == 5) {

        let vagaExcluir = prompt(`Digite o indice da vaga :`);

        let confirm = confirm(`Deseja realmente excluir a vaga ${vagas[vagaExcluir].nomeVaga}?`);

        if (confirm) {

            vagas.splice(vagaExcluir, 1);

        } else {

            alert(`Vaga não excluida!`);

        }

} else {

        alert(`Opção inválida!`);

    }

    menu = prompt(`Bem vindo ao sistema gerencial da Vagas Dias \n\n  1 - Criar nova Vaga \n 2 - Listar vagas  \n 3 - Visualizar vaga especifica \n 4 - Increver-se a vaga \n 5 - excluir vaga \n 0 - Sair do sistema `);

}