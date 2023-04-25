triangle = (base, height) => {
    return (base * height) / 2
}

rectangle = (base, height) => {
    return base * height
}

square = (side) => {
    return side * side
}

trapezoid = (base1, base2, height) => {
    return ((base1 + base2) * height) / 2
}

circle = (radius) => {
    return Math.PI * Math.pow(radius, 2)
}




let menu = prompt('Escolha a operação que você quer realizar: \n 1 -Área do triângulo \n 2 - Área do Retângulo \n 3 - Área do quadrado \n 4 - Área do Trapézio \n 5 - Área do Circulo \n 6 - Sair do programa')

while(menu != 6) {
    switch(menu) {
        case '1':
            let base = parseFloat(prompt('Digite o valor da base do triângulo: '))
            
            let height = parseFloat(prompt('Digite o valor da altura do triângulo: '))
            const areaTriangle = triangle(base, height)
            
            alert(`A área do triângulo é ${areaTriangle}`)
            break;

        case '2':
            let baseRectangle = parseFloat(prompt('Digite o valor da base do retângulo: '))

            let heightRectangle = parseFloat(prompt('Digite o valor da altura do retângulo: '))

            let areaRectangle = rectangle(baseRectangle, heightRectangle)

            alert(`A área do retângulo é ${areaRectangle}`)

            break;

        case '3':

            let side = parseFloat(prompt('Digite o valor do lado do quadrado: '))

            let areaSquare = square(side)

            alert(`A área do quadrado é ${areaSquare}`)


            break;

        case '4':

            let base1 = parseFloat(prompt('Digite o valor da base maior do trapézio: '))

            let base2 = parseFloat(prompt('Digite o valor da base menor do trapézio: '))

            let heightTrapezoid = parseFloat(prompt('Digite o valor da altura do trapézio: '))

            let areaTrapezoid = trapezoid(base1, base2, heightTrapezoid)

            alert(`A área do trapézio é ${areaTrapezoid}`)

            break;

        case '5':

            let radius = parseFloat(prompt('Digite o valor do raio do círculo: '))

            let areaCircle = circle(radius)

            alert(`A área do círculo é ${areaCircle}`)

            break;

        default:

            alert('Opção inválida')

            break;

    }


    menu = prompt('Escolha a operação que você quer realizar: \n 1 -Área do triângulo \n 2 - Área do Retângulo \n 3 - Área do quadrado \n 4 - Área do Trapézio \n 5 - Área do Circulo \n 6 - Sair do programa')

}

alert('Obrigado por usar o programa!')








