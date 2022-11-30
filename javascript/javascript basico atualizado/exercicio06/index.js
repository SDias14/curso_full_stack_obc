const nome = prompt('Qual seu nome?')
let cidade = prompt('Voce ja visitou alguma cidade ? /n 1- Sim /n 2- Nao')
let nomeCidade = ''
let quantCidade = 0

let cidadesVisitadas = []

while (cidade == 1){
  	nomeCidade = prompt('Qual o nome da cidade ?')
    quantCidade ++
    cidadesVisitadas.push(nomeCidade)
    cidade = prompt('Alguma outra cidade ?/n 1- Sim /n 2- Nao')
}

if (quantCidade > 0){
  alert(`
  Voce visitou ${quantCidade} cidades e elas sao :` + cidadesVisitadas)
  let contador = 0
  while (c < quantCidade){
    alert(cidadesVisitadas[c])
    contador++
  }
}else{
  alert(`Voce nao visitou nenhuma cidade.`)
}



