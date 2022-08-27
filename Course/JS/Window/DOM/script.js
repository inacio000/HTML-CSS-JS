// let p1 = document.getElementById("p1")
// console.log(p1)

// let paragrafos = document.getElementsByClassName("paragrafo")
// console.log(paragrafos)

// for(let p of paragrafos) {
//     console.log(p)
// }

// let allElements = document.getElementsByTagName("p")
// console.log(allElements)


// // Modificando o conteudo do html
let p = document.getElementById("p1")
// p.innerHTML = "Mudei o conteudo" // capaz de mudar o conteudo sem exibir a tag

// p.innerText = "conteudo mais recente" // exibe apenas conteudos que esta na tela

// p.textContent = "Mais recente ainda" // exibe até o conteúdo oculto

p.style = "color: blue"
let myClass = p.getAttribute("myClass")

p.setAttribute("myClass", "other nameClass") // trocando o nome da class

console.log(p)
