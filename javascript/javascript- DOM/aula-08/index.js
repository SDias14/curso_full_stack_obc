function register(ev){
    console.log(ev);
    
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value;

    const password = sectionElement.children.password.value;

    const email = sectionElement.children.passwordConfirmation.value;


    console.log({username, password, email});
}






const button = document.getElementById('register-button'); // referencia o elemento html pelo id

//adicionando o evento 

button.addEventListener('click', register); // adiciona o evento de click no botão e chama a função register


//////////////////////////////////////////

function removeEvent(){
    button.removeEventListener('click', register);

    alert('removido');


}
    
    