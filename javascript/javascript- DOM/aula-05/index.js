function addInput(){
    // criando um nó de texto
    const ul = document.getElementById('inputs');

    // criando um nó de elemento

    const newLi = document.createElement('li');

    newLi.className = 'list-item'; // adicionando uma classe
    newLi.innerText = 'Novo item'; // adicionando um conteúdo

    const newInput = document.createElement('input');

    newInput.type = 'text';
    newInput.name = 'input';

    newLi.appendChild(newInput); // adicionando o input como filho do li

    ul.appendChild(newLi); // adicionando o li como filho do ul




}
