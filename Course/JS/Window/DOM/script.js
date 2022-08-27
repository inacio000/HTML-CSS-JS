let p1 = document.getElementById("p1")
console.log(p1)

let paragrafos = document.getElementsByClassName("paragrafo")
console.log(paragrafos)

for(let p of paragrafos) {
    console.log(p)
}

let allElements = document.getElementsByTagName("p")
console.log(allElements)