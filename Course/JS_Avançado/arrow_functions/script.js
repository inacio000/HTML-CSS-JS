function dobro(x) {
    console.log(2*x)
}

let triplo = function (x) {
    console.log(3*x)
}

// Arrow function
let quadruplo = x => {
    console.log(4*x)
}

let quintuplo = x => 5*x

let sextuplo = function () {
    return 6 * this.x
}
let number = {
    x: 8,
    d: sextuplo
}

dobro(3)
triplo(3)
quadruplo(3)
console.log(quintuplo(3))
console.log(number.d())