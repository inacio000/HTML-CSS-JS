// Manipulando Strings e Numeros


// Transformar um numero quebrado com duas casa decimais e trocar ponto por virgula

let number = 3322.3534223321
let newNumber = number.toFixed(2).replace('.', ',')
console.log(newNumber)

console.log(typeof number, typeof newNumber)
console.log(Number(newNumber))