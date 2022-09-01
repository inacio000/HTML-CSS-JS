let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")

cntxt.beginPath()

cntxt.lineWidth = 4
cntxt.strokeStyle = "gray"
cntxt.moveTo(10,10)
cntxt.lineTo(400,300)
cntxt.stroke()

cntxt.beginPath()

cntxt.lineWidth = 7
cntxt.strokeStyle = "blue"
cntxt.fillStyle = "gray"
cntxt.moveTo(50, 10)
cntxt.lineTo(300, 300)
cntxt.lineTo(200, 300)
cntxt.closePath()
cntxt.fill()