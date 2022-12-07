/* projeto calculadora */

// ===================/variaveis\===============================

const main = document.querySelector('main'); // Seleciona o elemento main
const root = document.querySelector(':root');
// Seleciona o elemento root
const input = document.querySelector('input');
// Seleciona o elemento input
const resultInput = document.getElementById('result');
// Seleciona o elemento result input do HTML

// ====================== /fim variaveis\=======================





//==criando um array para permitir apenas caracteres predefinidos

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//========================fim array=============================





// =========/evento para clicar botoes na tela\================

// criando um evento para cada botao clicado na tela. 

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {

    charKeyBtn.addEventListener('click', () => {
// cria um evento para cada botão de caractere. o charKeyBtn é o botão de caractere atual que está sendo iterado no forEach
        const value = charKeyBtn.dataset.value
      // o dataset.value é o parametro que está no HTML do botão de caractere atual. o value é o valor do parametro

      //adicionando o valor do botão de caractere ao input

        input.value += value;


    });


});


// =======================fim evento===========================





//=================evento para o botão de apagar================

document.getElementById('clear').addEventListener('click', () => {

    input.value = '';
    // o valor do input é definido como vazio quando o botão de apagar é clicado

    input.focus();
    // o foco do input é definido como o botão de apagar quando o botão de apagar é clicado

});


//======================fim evento============================






///===============evento de teclado para prevenir teclas     indesejáveis\====================================================

//evento para o input de texto

input.addEventListener('keydown', (e) => {
    e.preventDefault();// previne o comportamento padrão do evento, que no caso é a digitação no input

    if (allowedKeys.includes(e.key)) {
        // e.key é o valor da tecla pressionada. se a tecla pressionada estiver no array allowedKeys, então o valor da tecla é adicionado ao input através do +=
        
        input.value += e.key;

        return;
} else if (e.key === "Backspace") {
    // se a tecla pressionada for backspace, então o valor do input é removido

    input.value = input.value.slice(0, -1);
    // o -1 no slice é para remover apenas o último caractere do input e o 0 é o valor inicial do slice, que no caso é o primeiro caractere do input

    return;
    
} else if  (e.key === "Enter") {

    // se a tecla pressionada for enter, então o valor do input é calculado e o resultado é adicionado ao input

    calculate();

    return;

}

});






//======================fim evento de  teclado============================




//======================evento  para o botão de igual ============================

document.getElementById('equal').addEventListener('click', calculate);





//======================fim evento============================





//============ função para calcular o valor do input quando for pressionado o enter\======================



function calculate () {
  
    resultInput.value = 'Error'
    // o valor do resultInput é definido como error quando o botão de igual é clicado

    resultInput.classList.add('error');


   const result = eval(input.value);
    // o eval é uma função que calcula o valor de uma string. o valor da string é o valor do input


   resultInput.value = result

    resultInput.classList.remove('error');
}

//======================fim função============================





//======================evento para o botão de tema============================


document.getElementById('themeSwitcher').addEventListener('click', () => {
// verifica se o tema é escuro ou claro e altera o tema. Pega o valor do tema do dataset do main e altera o valor do dataset do root
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }



})

//======================fim evento============================




//======================evento para o botão de copiar============================


document.getElementById('copyToClipboard').addEventListener('click', (ev) => {
  const button = ev.currentTarget;
    if (button.innerText === 'Copy') {
       button.innerText = 'Copied!';
       button.classList.add('success');
       navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
})

//======================fim evento============================