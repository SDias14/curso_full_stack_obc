const dayjs = require("dayjs")

function birthday(date) {
  const birthday = dayjs(date) // recebe a data de nascimento
  const today = dayjs() // recebe a data de hoje
  const ageInYears = today.diff(birthday, 'year') // calcula a idade em anos
  const nextBirthday = birthday.add(ageInYears + 1, 'year') // calcula a data do próximo aniversário. o 1 é para incluir o dia atual
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1 // calcula a quantidade de dias até o próximo aniversário. O 1 é para incluir o dia atual

  console.log(`Idade: ${ageInYears}`) // imprime a idade
  console.log(`Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`) // imprime a data do próximo aniversário
  console.log(`Dias até completar ${ageInYears + 1} anos: ${daysToNextBirthday}`) // imprime a quantidade de dias até o próximo aniversário
}

birthday("1995-09-02")










