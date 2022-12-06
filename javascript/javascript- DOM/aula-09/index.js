const form = document.getElementById('orderForm'); // selecionando o form pelo id

form.addEventListener ('submit', function (event) { 


    event.preventDefault(); // previne o comportamento padrão do form

  const name = document.querySelector('#name').value; // selecionando o input pelo id

  const adress = document.querySelector('#address').value; // selecionando o input pelo id

  const breadType = document.querySelector('select[name="breadType"]').value; // selecionando o input pelo id

  const main = document.querySelector('input[name="main"]').value; // selecionando o input pelo id

  const observation = document.querySelector('textarea[name="observations"]').value; // selecionando o input pelo id

  let salad = ""

  document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) { 
    
    salad += " - " + item.value + '\n';

  });

  console.log({ name, adress, breadType, main, salad, observation 
});


});
