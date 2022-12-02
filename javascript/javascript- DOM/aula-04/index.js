function show(){
  // recebendo um elemento a partir do seu id
  
  let list = document.getElementById('contact-list');
  
  console.log(list); // trouxe o elemento ul com seus filhos

  const listElements = document.getElementsByTagName('li');

  //const listElements = list.children; // traz os filhos do elemento ul

    console.log(listElements); // trouxe os elementos li


    const contactInputs = document.getElementsByClassName('contact-input');

    console.log(contactInputs); // trouxe os elementos com a classe contact-input como html collection

    const contact1 = document.getElementsByName('contact1');

    console.log(contact1); // trouxe os elementos com o name contact1 como html collection

    
    
    
    const contactInputs2 = document.querySelectorAll('#contact-list > li > label');

    console.log(contactInputs2); // trouxe os elementos com a classe contact-input como node list


    const firstContact = document.querySelector('#contact-list > li > label');

    console.log(firstContact); // trouxe o primeiro elemento li , recebeu o primeiro elemento da lista e depois o primeiro label dentro do li, parando no primeiro label
} 