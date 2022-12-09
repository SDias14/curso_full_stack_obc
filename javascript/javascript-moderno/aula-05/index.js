function normalSum (a, b) {
  return a + b
}



console.log(`soma normal: ${normalSum(2,2)}`) // passando os valores diretamente com template literals

sum2 = (a, b) => a + b

console.log(`soma com arrow function: ${sum2(2,2)}`) // 3


const double = n => `dobro de ${n} é ${n * 2}`

console.log(double(2)) // 4

// usando arrow function com os arrays

const numbers = [1, 2, 3, 4, 5]

const doubleNumbers = numbers.map(n => n * 2)

console.log(doubleNumbers) // [2, 4, 6, 8, 10] 
