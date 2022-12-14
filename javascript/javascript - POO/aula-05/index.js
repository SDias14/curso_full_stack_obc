const Address = require("./Address");
const Person = require("./Person");

const addr = new Address('Sete de setembro', 99 , 'Centro', 'Sao Paulo', 'SP')

const johnDoe = new Person('John Doe', addr)


console.log(johnDoe)

console.log(johnDoe.address.fullAddress())