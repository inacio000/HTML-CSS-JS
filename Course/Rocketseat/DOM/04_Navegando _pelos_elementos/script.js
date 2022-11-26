// Navegando pelos elementos pais
// parenteNode parentElement

console.log("\n - parenteNode parentElement")
const stilo = document.querySelector('body')
const element = document.querySelector('h1')
const el = document.querySelector('header')

stilo.style.backgroundColor = 'gray'

console.log(element.parentElement)


// Elementos filhos
// childNodes children
console.log(" - Elementos filhos \n - childNodes children")
console.log(stilo.childNodes) // tras espacços vazios (como text)
console.log(stilo.children) // html collection (sem text)
console.log(stilo.firstChild) // considera os espaços
console.log(stilo.firstElementChild) // não considera espaços
console.log(stilo.lastChild) // para pegar os filhos e não considera espaços


// nextSibling nextElementSibling (próximo irmão)
console.log("\n - nextSibling \n - nextElementSibling")
console.log(el.nextSibling) // considera espaços
console.log(el.nextElementSibling) // não considera espaços


// previousSibling previousElementSibling
const prev = document.querySelector('body script')
console.log("\npreviousSibling previousElementSibling") 

console.log(prev.previousSibling) // considera espaços
console.log(prev.previousElementSibling) // não considera espaços