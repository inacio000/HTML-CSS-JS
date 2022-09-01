// let image = document.getElementById("churrasco")

// image.addEventListener("click", function() {

//     image.src = "./image/churrasco-down.jpg"
// })

let list = document.getElementById("list")

// let num = parseInt(list.getAttribute("data-num"))

list.dataset.num = "25"

let id = parseInt(list.dataset.id)
console.log(id)

let num = parseInt(list.dataset.num)

console.log(list.dataset.num)

let conteudo = ""

for(let i=0; i < num; i++) {
    conteudo += `<li> ${i} </li>`
}

list.innerHTML = conteudo