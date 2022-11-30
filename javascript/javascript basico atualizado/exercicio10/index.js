let word = prompt("Digite uma palavra");

for (let i = 0; i < word.length; i++) {
    //verificando se a palavra é um palíndromo

    if (word[i] !== word[word.length - 1 - i]) {
        console.log("Não é um palíndromo");
        break;
    } else {
        console.log("É um palíndromo, sendo a palavra da direita para a esquerda: " + word.split("").reverse().join("") + " e da esquerda para a direita: " + word);
        break;
    }
}