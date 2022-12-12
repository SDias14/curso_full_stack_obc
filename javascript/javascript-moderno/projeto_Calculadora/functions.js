import {main, root,input, resultInput, allowedKeys} from './const.js';



//============ função para calcular o valor do input quando for pressionado o enter\======================


export function calculate () {
  
    resultInput.value = 'Error'
    // o valor do resultInput é definido como error quando o botão de igual é clicado

    resultInput.classList.add('error');


   const result = eval(input.value);
    // o eval é uma função que calcula o valor de uma string. o valor da string é o valor do input


   resultInput.value = result

    resultInput.classList.remove('error');
}

//======================fim função============================



