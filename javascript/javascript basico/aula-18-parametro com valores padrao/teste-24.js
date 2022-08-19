// funções com parametros predefinidos

function greetPilot (name, message = 'olá') {
  alert(message + ' ,  ' + name);
}

greetPilot('John');

//podemos atribuir um valor padrao para o parametro caso ele nao seja chamado. 