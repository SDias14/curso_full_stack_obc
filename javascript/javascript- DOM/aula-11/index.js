const input = document.getElementById('input');


document.getElementById('value').addEventListener('click', () => {
   
    input.value = 'Valor alterado';


    console.log(input.getAttribute('value') )

    });

    document.getElementById('type').addEventListener('click', () => {
           
        input.type = input.type !== 'radio' ? 'radio' : 'text';

       
    });

    document.getElementById('placeholder').addEventListener('click', () => {

        input.placeholder = input.placeholder !== 'Digite aqui' ? 'Digite aqui' : 'mudanças' ;

    });


    document.getElementById('disable').addEventListener('click', () => {

        input.disabled = input.disabled !== true ? true : false;

        console.log(input.disabled)

    });


    document.getElementById('data').addEventListener('click', () => {

        const data = input.dataset.something;

        console.log(data)

        input.dataset.something = data !== 'alguma coisa' ? 'alguma coisa' : 'outra coisa';

    });


