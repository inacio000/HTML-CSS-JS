let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")

let img = new Image()
img.src = "./image/like.png"

img.onload = drawImage

function drawImage() {
    
    cntxt.drawImage(this, 20, 20, this.naturalWidth / 2, this.naturalHeight / 2)
}

