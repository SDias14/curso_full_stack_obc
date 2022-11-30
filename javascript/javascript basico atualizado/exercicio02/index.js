let firstNumber = prompt("Digite um número")

let secondNumber = prompt("Digite outro número")


let operation = prompt("Digite a operação que deseja realizar: +, -, * ou /")

if (operation == "+") {
    let result = Number(firstNumber) + Number(secondNumber)
    alert(`O resultado da operação é ${result}`)
} else if (operation == "-") {
    let result = Number(firstNumber) - Number(secondNumber)
    alert(`O resultado da operação é ${result}`)
} else if (operation == "*") {
    let result = Number(firstNumber) * Number(secondNumber)
    alert(`O resultado da operação é ${result}`)
} else if (operation == "/") {
    let result = Number(firstNumber) / Number(secondNumber)
    alert(`O resultado da operação é ${result}`)
} else {
    alert("Operação inválida")
} 