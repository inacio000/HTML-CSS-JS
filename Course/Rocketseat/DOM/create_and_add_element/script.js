// Criando e adicionando elementos

console.log('createElement')
const body = document.querySelector('body')
const div = document.createElement('div')
const div2 = document.createElement('div')
const header = body.querySelector('header')

body.style.backgroundColor = 'gray'

// criando
div.innerHTML = 'Hello Before'
div2.innerHTML = 'Hello After'
console.log(div)
console.log(div2)

// append prepend
body.append(div) // add as lastChild
body.prepend(div) // add as firstChild

// insertBefore
body.insertBefore(div, header)

// insertAfter
body.insertBefore(div2, header.nextSibling)