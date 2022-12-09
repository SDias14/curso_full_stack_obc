/*

const a = 0// false

const b = null // false

const c = 'Teste' // true

console.log(a || b || c) // a vai ser avaliado como false, então vai para o próximo valor, que é b, que é null, que é avaliado como false, então vai para o próximo valor, que é c, que é avaliado como true, então o resultado é c

//curto circuito : se o primeiro valor for true, ele vai retornar o primeiro valor, se for false, ele vai retornar o segundo valor e vai parar de executar o código. 

console.log(a ?? b ?? c) // ele vai devolver o 0 porque o 0 é um valor válido, diferente do null, que é um valor inválido e do undefined, que é um valor inválido.

*/

let a = 0

let b = a || 42

console.log({a, b})

b = a ?? 42

console.log({a, b})