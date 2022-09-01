let player = document.getElementById("jogador")

let xInitial = 0
let yInitial = 0

function movePlayerTo(x, y) {
    
    let posX = x + "px"
    let posY = y + "px"

    player.style.top = posX
    player.style.left = posY

}

setInterval(function() {

    // movePlayerTo(xInitial++, yInitial++)

}, 1000)
