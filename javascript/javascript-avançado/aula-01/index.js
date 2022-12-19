
let Time = setTimeout(() => {
  console.log('Exec #01...')
  setTimeout(() => {
    console.log('Exec #02...')
    setTimeout(() => {
      console.log('Exec #03...')
    }, 2000)
  }, 2000)
}, 2000)

console.log(Time)

let clearTime = clearTimeout(Time)

console.log(clearTime)




/*

setInterval(() => {
  console.log('Exec #01...')
}, 2000)

*/




