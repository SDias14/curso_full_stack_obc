const str = 'Hello world!';

console.log(...str); // H e l l o   w o r l d !

//colocando cada letra da string em um array

const arr = [...str];

console.log(arr); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

const towns = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte'];

console.log(towns); // São Paulo Rio de Janeiro Belo Horizonte

const sp = [...towns[0]]; 

console.log(sp); // [ 'S', 'ã', 'o', ' ', 'P', 'a', 'u', 'l', 'o' ]


const townsCopy = [...towns];

townsCopy[0] = 'São José dos Campos';

console.log(towns); // [ 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte' ]

console.log(townsCopy); // [ 'São José dos Campos', 'Rio de Janeiro', 'Belo Horizonte' ]


const townsCopy2 = { ...towns };

console.log({townsCopy2}); // { '0': 'São Paulo', '1': 'Rio de Janeiro', '2': 'Belo Horizonte' }