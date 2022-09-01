let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")

// cntxt.fillStyle = "gray"
// cntxt.fillRect(10,10, 100, 200) //retangulo preenchido

// cntxt.strokeStyle = "gray"
// cntxt.strokeRect(10, 10, 100, 200)


// retangulo com diferente core na borda e preencimento

cntxt.rect(10, 10, 100, 200)
cntxt.lineWidth = 5
cntxt.fillStyle = "gray"
cntxt.strokeStyle = "green"
cntxt.fill()
cntxt.stroke()

cntxt.clearRect(20, 20, 30, 30) // limpando o retangulo