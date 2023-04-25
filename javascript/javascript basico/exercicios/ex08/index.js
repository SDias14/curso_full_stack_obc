const houses = []; 


let menu = prompt( `houses quantity : ${houses.length} \n1. Add home\n2. Delete home\n3. Show home\n4. Exit `);

while(menu !=4){
    switch(menu){
        case '1':
            let owner = {
                //create serial id
                id: houses.length + 1,
                name: prompt('Enter owner name: '),
                bedrooms: prompt('Enter bedrooms: '),
                bathrooms: prompt('Enter bathrooms: '),
                parking: prompt('Enter parking: \n(s) for true\n(n) for false'),
                
            };
            
            if (owner.parking == 's'){
                owner.parking = true;
            }else{
                owner.parking = false;
            }

            houses.push(owner);

            break;

            case '2':
                let id = prompt('Enter id: ');

                for(let i = 0; i < houses.length; i++){
                    if(houses[i].id == id){
                        houses.splice(i, 1);
                    }
                }
                break;

            case '3':
                let show = [];
                for(let i = 0; i < houses.length; i++){
                    show.push(`id: ${houses[i].id}\nname: ${houses[i].name}\nbedrooms: ${houses[i].bedrooms}\nbathrooms: ${houses[i].bathrooms}\nparking: ${houses[i].parking}\n`);
}
                alert(show);
                break;
                

            default:
                alert('Invalid option');
                break;

    }

    menu = prompt( `houses quantity : ${houses.length} \n1. Add home\n2. Delete home\n3. Show home\n4. Exit `);


}

alert('Bye');




                 


            


