function register(element){
  const userName = element.children.username.value;

    const password = element.children.password.value;

    const passwordConfirmation = element.children.passwordConfirmation.value;

    if (password !== passwordConfirmation) {
        alert('Senhas não conferem');

        const userName = element.children.username.value = '';

        const password = element.children.password.value = '';

        const passwordConfirmation = element.children.passwordConfirmation.value = '';
        
        
        return;

    } else {
        alert('Cadastro realizado com sucesso');

        const userName = element.children.username.value = '';

        const password = element.children.password.value = '';

        const passwordConfirmation = element.children.passwordConfirmation.value = '';

        return;

        


    }



    
}





// podemos passar parametros para a chamada da funcao no arquivo html e referenciar os elementos do html. quando se passa o this como parametro, ele referencia o proprio elemento html. 

// parent node - referencia o elemento pai do elemento html