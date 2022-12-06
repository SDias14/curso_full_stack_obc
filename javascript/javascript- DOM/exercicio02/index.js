let info = []




const button = document.getElementById('addInformations'); 

button.addEventListener('click', function (event) {
    
    event.preventDefault();
    
    const name = document.getElementById('name').value;

    const technology = document.getElementById('tech').value;

    const experience = document.getElementById('experience').value;

    info.push({name, technology, experience});

    console.log(info);



    //limpar os campos

    document.getElementById('name').value = "";

    document.getElementById('tech').value = "";

    document.getElementById('experience').value = "";





    





});

const button2 = document.getElementById('removeInformations')

button2.addEventListener('click', function (event) {
    
    event.preventDefault();
    
    info.pop();

    console.log(info);

});



    
    
    
    
    
    
    
    
    
    
    
    











