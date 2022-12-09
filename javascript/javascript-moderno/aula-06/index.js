const Person = {
    name : 'Luke',
    job : 'Farmer',
    parents : ['Anakin', 'Padme']
}

// criando variaveis a partir da propriedade do objeto

const {job} = Person

console.log(job)

const {name} = Person // quando colocamos o nome da propriedade entre chaves, estamos criando uma variavel com o mesmo nome da propriedade

console.log(name)

const [father, mother] = Person.parents

console.log(`Father: ${father} \nMother: ${mother}`) // quando trabalhamos com arrays, podemos criar variaveis a partir de cada item do array, de acordo com a ordem em que eles estão.


function createUser({name, job}){

    return `${name} is a ${job}`
  
}

console.log(createUser(Person))

