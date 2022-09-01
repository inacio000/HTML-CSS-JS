let tela = document.getElementById("tela")

let cntxt = tela.getContext("2d")


let circle = {
    
    // x: 250,
    // y: 250,
    // raio: 100,
    // start: 0,
    // end: 0,
    // antiHor: true
}

function drwaCircle(c) {

    cntxt.beginPath()
    cntxt.rect(0, 0, 500, 500)
    cntxt.fillStyle = "bisque"
    cntxt.fill()

    cntxt.beginPath()
    cntxt.strokeStyle = "red"
    cntxt.lineWidth = 3
    cntxt.fillStyle = "gray"
    cntxt.arc(c.x, c.y, c.raio, c.start, c.end, c.antiHor)
    
    cntxt.fill()
    cntxt.stroke()
}

setInterval(function() {
    if(circle.end < 2 * Math.PI) {
        circle.end += 0.3
        circle.x += 3
    }
    drwaCircle(circle)
}, 100)

// drwaCircle(circle)