let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")
cntxt.moveTo(0,0)
cntxt.lineTo(250,250)
cntxt.lineTo(500,0)
cntxt.lineWidth = 5
cntxt.strokeStyle = "gray"
cntxt.stroke() // espeçura da linha

