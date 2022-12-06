function addContact(){
    const contactSection = document.getElementById('contact-list');

    const h3 = document.createElement('h3'); // cria um elemento h3

    h3.innerText = 'Contato'; // adiciona o texto 'Contato' ao elemento h3

    const ul = document.createElement('ul'); // cria um elemento ul

    const nameLi = document.createElement('li'); // cria um elemento li

    nameLi.innerText = 'Nome: '

    const nameInput = document.createElement('input'); // cria um elemento input

    nameInput.type = 'text'; // define o tipo do elemento input como text

    nameInput.name = 'fullName'; // define o nome do elemento input como name

    nameLi.appendChild(nameInput); // adiciona o elemento input como filho do elemento li

    ul.appendChild(nameLi); // adiciona o elemento li como filho do elemento ul

    ul.appendChild(document.createElement('br')); // adiciona um elemento br como filho do elemento ul

    ///////////////////////////////

    const phoneLi = document.createElement('li'); // cria um elemento li

    phoneLi.innerText = ' Telefone: '

    const phoneInput = document.createElement('input'); // cria um elemento input

    phoneInput.type = 'text'; // define o tipo do elemento input como text

    phoneInput.name = 'Phone'; // define o nome do elemento input como name

    phoneLi.appendChild(phoneInput); // adiciona o elemento input como filho do elemento li

    ul.appendChild(phoneLi); // adiciona o elemento li como filho do elemento ul

    ul.appendChild(document.createElement('br')); // adiciona um elemento br como filho do elemento ul


    ///////////////////////////////


    const adressLi = document.createElement('li'); // cria um elemento li

   adressLi.innerHTML = ' <label for="adress">Endereço:</label> '// adiciona o texto 'Endereço: ' ao elemento li. o inner html entende que é um label

    const adressInput = document.createElement('input'); // cria um elemento input

    adressInput.type = 'text'; // define o tipo do elemento input como text

    adressInput.name = 'adress'; // define o nome do elemento input como name

    adressInput.id = 'adress'; // define o id do elemento input como adress

    adressLi.appendChild(adressInput); // adiciona o elemento input como filho do elemento li

    ul.appendChild(adressLi); // adiciona o elemento li como filho do elemento ul



    ///////////////////////////////


    contactSection.append(h3, ul); // adiciona o elemento h3 e o elemento ul como filhos do elemento contactSection

}

function removeContact(){
    const contactSection = document.getElementById('contact-list');
  
    const titles = document.getElementsByTagName('h3');
    
    const contacts = document.getElementsByTagName('ul');


    contactSection.removeChild(titles[titles.length - 1]);

    contactSection.removeChild(contacts[contacts.length - 1]);

}