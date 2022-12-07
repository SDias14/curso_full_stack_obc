/* projeto jogo da velha*/

// ===================/variaveis\===============================

const form = document.getElementById('mainForm'); // selecionando o form pelo id

const main = document.getElementsByTagName('main'); // selecionando o main pelo id

const name1 = document.querySelector('input[name="jogador1"]')


const name2 = document.querySelector('input[name="jogador2"]')

const btnPlayer1 = document.getElementById('player1Btn');

const btnPlayer2 = document.getElementById('player2Btn');



form.addEventListener ('submit', function (event) {

    
    event.preventDefault(); // previne o comportamento padrão do form
 
    btnPlayer1.innerText = name1.value + " (X)";
    
    btnPlayer2.innerText = name2.value + " (O)";

  


    name1.value = "";

    name2.value = "";

    name1.disabled = true;

    name2.disabled = true;






});


//para cada botao clicado, ele vai adicionar a classe X ou O

document.querySelectorAll('.charKey').forEach((charKeyBtn) => {

    charKeyBtn.addEventListener('click', () => {

       const value = prompt("Digite X ou O");

        if (value == "X") {

            //adicionar a cor vermelha ao botão

            charKeyBtn.classList.add("btn-danger");

            charKeyBtn.innerText = value;

            charKeyBtn.disabled = true;

        } else if (value == "O") {

            //adicionar a cor azul ao botão

            charKeyBtn.classList.add("btn-primary");

            charKeyBtn.innerText = value;

            charKeyBtn.disabled = true;

        } else {
         
                alert("Digite X ou O");
        }

   });

});






document.getElementById('themeSwitcher').addEventListener('click', (ev) => {

    ev.preventDefault();

if(document.body.style.backgroundColor == "black") {

    document.body.style.backgroundColor = "white";

    document.body.style.color = "black";

} else {
    
        document.body.style.backgroundColor = "black";
    
        document.body.style.color = "white";
    
    }



    
});







    























     
 