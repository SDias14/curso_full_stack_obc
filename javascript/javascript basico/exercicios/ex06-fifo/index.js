const patients = []

let menu = prompt('Patients waiting for the doctor: \n\n' + patients.join(' , ') + '\n\nChoose an option: \n\n1 - Add a patient \n2 - next call \n3 - Exit')

while(menu !== '3'){
    if(menu === '1'){
        let newPatient = prompt('Enter the name of the new patient');
        patients.push(newPatient);
        alert('Patient added successfully');
        
    } else if(menu === '2'){
       
       let listPatient = patients.shift();

       alert('First patient to be attended: ' + listPatient + '\n\nPatients waiting for the doctor: \n\n' + patients.join(' , '));
       
    } ;
    
    menu = prompt('Patients waiting for the doctor: \n\n' + patients.join(' , ') + '\n\nChoose an option: \n\n1 - Add a patient \n2 - next call \n3 - Exit')


}