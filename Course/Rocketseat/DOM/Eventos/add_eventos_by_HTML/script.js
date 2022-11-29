const header = document.createElement('header')
const h1 = document.createElement('h1')
const body = document.querySelector('body')
// const input = document.createElement('input')
const input = document.querySelector('input')
const title = document.querySelector('h2')

h1.innerHTML = `<h1>Hey guys</h1>`
header.innerHTML = `${h1.innerHTML}`
body.style.backgroundColor = 'gray'

console.log(header)
body.prepend(header)
// header.insertBefore(input, h1.nextSibling)


// Eventos de mouse
function print() {
    console.log('Print')
}

// Eventos de teclado
// .onkeydown - ao pressionar a tecla
// .onkeyup - ao largar a tecla
// .onkeypress - ao pressionar a tecla

input.onkeyup = function() {
    console.log('Runed')
}

title.addEventListener('click', print)
input.onmouseover = print