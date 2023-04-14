let name = prompt("What is your name?");

let cities = [];

let options = prompt("Type 1 to add a city, 2 to remove a city, 3 to view the list, 4 to quit");

while (options !== "4") {
    if (options === "1") {
        let city = prompt("What city would you like to add?");
        cities.push(city);
    } else if (options === "2") {
        let city = prompt("What city would you like to remove?");
        let index = cities.indexOf(city);
        if (index > -1) {
            cities.splice(index, 1);
        }
    } else if (options === "3") {
        alert(`${name} visitou as cidades ${cities}`);
    }
    options = prompt("Type 1 to add a city, 2 to remove a city, 3 to view the list, 4 to quit");
}

