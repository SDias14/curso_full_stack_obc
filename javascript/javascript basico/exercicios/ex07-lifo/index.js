const cards = []

let menu = prompt('Cards played \n\n' + cards.join(' , ') + '\n\nChoose an option: \n\n1 - Add a card \n2 - pull card \n3 - Exit')

while(menu !== '3'){
    if(menu === '1'){
        let newCard = prompt('Enter the name of the Card');
        cards.push(newCard);
        alert('Card added successfully');
        
    } else if(menu === '2'){
       
       let pullCard = cards.pop();

       alert('Last card pulled ' + pullCard + '\n\nCards played: \n\n' + cards.join(' , '));
       
    } ;
    
    menu = prompt('Cards played \n\n' + cards.join(' , ') + '\n\nChoose an option: \n\n1 - Add a card \n2 - pull card \n3 - Exit')


}