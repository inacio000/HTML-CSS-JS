// function expression
// function anonymous

// parameters
const sum = function(number1, number2) {
    //console.log(number1 + number2)
    total = number1 + number2
    return total
}

// passando argumentos
sum(2, 3) 

let number1 = 34
let number2 = 26

console.log(`${number1} + ${number2} = ${sum(number1, number2)}`)


// another explication
function makeJoice(fruit1, fruit2) {
    return fruit1 + fruit2
}

const glass = makeJoice('banana', 'apple')
console.log(glass)