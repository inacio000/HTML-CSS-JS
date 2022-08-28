// Carne - 400gr por Pessoa        + de 6h - 650gr
// Cerveja - 1200ml por Pessoa     + de 6h - 2000ml
// Refrigerante/água - 1000ml por Pessoa   + de 6h 1500ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("crianças")
let inputDuracao = document.getElementById("duração")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qntTotalCarne = chickenPP(duracao) * adultos + (chickenPP(duracao) / 2 * criancas)
    let qntTotaBeer = beerPP(duracao) * adultos
    let qntDrink = drinkPP(duracao) * adultos + (drinkPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qntTotalCarne / 1000}kg of Chicken</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntTotaBeer / 355)} Latas of Beer</p>`
    resultado.innerHTML += `<p>${Math.ceil(qntDrink / 2000)} Garrafas of Drink</p>`

}

function chickenPP(duracao) {
    if(duracao >= 6) {
        return 650
    }else {
        return 400
    }
}

function beerPP(duracao) {
    if(duracao >= 6) {
        return 2000
    }else {
        return 1200
    }
}

function drinkPP(duracao) {
    if(duracao >= 6) {
        return 1000
    }else {
        return 1500
    }
}

// console.log(inputAdultos, inputCriancas, inputDuracao)