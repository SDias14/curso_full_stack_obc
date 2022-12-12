function averageScore(...numbers) {
    return numbers.reduce((total, number) => total + number, 0) / numbers.length;
    }

console.log(averageScore(2,6,3,7,4)); // acertou



function mediaPonderada(...numbers) {
    return  notas.map((nota) => ((nota.nota * nota.peso) / nota.peso)).reduce((total, number) => total + number, 0) / notas.length;

}


let notas = [{nota: 7, peso: 2}, {nota: 9, peso: 2}, {nota: 3, peso: 1}]

//

console.log(mediaPonderada(notas));

function mediana(...numbers) {
    return numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
} 

console.log(mediana(2,4,5,7,42, 99));