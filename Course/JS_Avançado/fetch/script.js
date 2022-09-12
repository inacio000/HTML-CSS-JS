// // Pegando dados dinamicos

// let url = "https://api.exchangerate.host/latest"


// function converter() {
//     let input = document.getElementById("valor")
//     let valor = input.value
    
//     fetch(url)
//         // retorna uma props (resposta http)
//         .then((res) => {
//             // console.log(res)
//             return res.json()
//         })
//         .then((data) => {
//             // console.log(data.rates.AED)
//             let rate = data.rates.AED

//             let result = `${valor} USD = ${rate * valor} AED`
//             document.getElementById("result").innerHTML = result
//         })

//     }

function test(...args) {
    console.log(typeof args)
}

test(12)

const o = {id: "hi", age: 10}
const o1 = {id: "hi", age: 10}
console.log(o === o1)
let a = Math.max()
let b = Math.min()

console.log(a)
console.log(b)

let a1 = 3
let b1 = new Number(3)
let c1 = 3

console.log(a1 == b1)
console.log(a1 === b1)
console.log(b1 === c1)

const set = new Set()
set.add(5)
set.add('hello')
set.add({ name: 'Inacio'})
for (let i of set) {
    console.log(i + 6)
}