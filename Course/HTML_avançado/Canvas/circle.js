let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")

let x = 250
let y = 250
let raio = 100

let start = 0
let end = 1 * Math.PI

cntxt.beginPath()
cntxt.strokeStyle = "red"
cntxt.lineWidth = 3
cntxt.fillStyle = "gray"
cntxt.arc(x, y, raio, start, end)

cntxt.fill()
cntxt.stroke()