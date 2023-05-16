cadastrar = () => {

 let objects = [];

 let number = document.getElementById("number").value;
 let name = document.getElementById("name").value;
 let position = document.getElementById("position").value;

 if(number == "" || name == "" || position == ""){
  alert("Preencha todos os campos!");
  return;
 } else{

 let option = prompt("Deseja salvar este cadastro? ");

 if(option == "sim"){
  alert("Cadastro salvo com sucesso!");
//criar tabela com os dados

  let table = document.getElementsByClassName("table");
  let row = table[0].insertRow(1); //insere uma linha na tabela
  let cell1 = row.insertCell(0); //insere uma celula na linha
  let cell2 = row.insertCell(1); //insere uma celula na linha
  let cell3 = row.insertCell(2); //insere uma celula na linha

  let players ={}

  players.number = number;
  players.name = name;
  players.position = position;

  cell1.innerHTML = number; // insere o valor na celula
  cell2.innerHTML = name; // insere o valor na celula
  cell3.innerHTML = position; // insere o valor na celula

  objects.push(players); //adiciona o objeto no array

  console.log(objects); //imprime o array no console

  document.getElementById("number").value = ""; //limpa os campos
  document.getElementById("name").value = ""; //limpa os campos
  document.getElementById("position").value = ""; //limpa os campos

  console

  return; //retorna para a função



 
  }else{
  alert("Cadastro não salvo!");
 }
}

}