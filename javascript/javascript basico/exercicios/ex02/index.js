alert('Welcome to Measure Converter!');

let input = prompt('Enter a distance in meters:');

let option = prompt('Enter a conversion option: \n 1. Convert to milimeters \n 2. Convert to centimeters \n 3. Convert to decimeters \n 4. Convert to decameters \n 5. Convert to hectometers \n 6. Convert to kilometers \n 7. exit');

while (option != 7) {

switch (option) {

    case '1':
        alert(`${input} meters is equal to ${input * 1000} milimeters`);
        break;

    case '2':
        alert(`${input} meters is equal to ${input * 100} centimeters`);
        break;

    case '3':
        alert(`${input} meters is equal to ${input * 10} decimeters`);
        break;

    case '4':
        alert(`${input} meters is equal to ${input / 10} decameters`);
        break;

    case '5':
        alert(`${input} meters is equal to ${input / 100} hectometers`);
        break;

    case '6':
        alert(`${input} meters is equal to ${input / 1000} kilometers`);
        break;

    default:
        alert('Invalid option');
        break;


  

}

let option2 = prompt('Do you want to convert another distance? \n 1. Yes \n 2. No');

if (option2 == 1) {
    input = prompt('Enter a distance in meters:');
    
    option = prompt('Enter a conversion option: \n 1. Convert to milimeters \n 2. Convert to centimeters \n 3. Convert to decimeters \n 4. Convert to decameters \n 5. Convert to hectometers \n 6. Convert to kilometers \n 7. exit');

} else {

    option = prompt('Enter a conversion option: \n 1. Convert to milimeters \n 2. Convert to centimeters \n 3. Convert to decimeters \n 4. Convert to decameters \n 5. Convert to hectometers \n 6. Convert to kilometers \n 7. exit');

}







}
