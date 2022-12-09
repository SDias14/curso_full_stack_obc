function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// quando trabalhamos com rest params temos que passar no final. a ordem importa
