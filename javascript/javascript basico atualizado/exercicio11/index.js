let patients = ['João', 'Maria', 'Antônio', 'Margarida'];

let menu = prompt(`Bem vindo ao Hospital Trybe! \n Pacientes em atendimento: ${patients} \n Digite 1 para adicionar um paciente \n Digite 2 para remover um paciente \n Digite 3 para listar todos os pacientes \n Digite 0 para sair`);

while (menu != 0) {
    if(menu == 1) {
        let addPatient = prompt('Digite o nome do paciente que deseja adicionar:');
        patients.push(addPatient);
        alert(`Paciente ${addPatient} adicionado com sucesso!`);
    } else if (menu == 2) {
        patients.shift();

        alert(`Paciente removido com sucesso!`);
    } else if (menu == 3) {
        alert(`Pacientes em atendimento: ${patients}`);
    } else {
        alert('Opção inválida!');
    }

    menu = prompt(`Bem vindo ao Hospital Trybe! \n Pacientes em atendimento: ${patients} \n Digite 1 para adicionar um paciente \n Digite 2 para remover um paciente \n Digite 3 para listar todos os pacientes \n Digite 0 para sair`);

}