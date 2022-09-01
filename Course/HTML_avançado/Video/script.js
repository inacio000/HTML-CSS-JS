let video = document.getElementById("video1")
let control = document.getElementById("controls")

// control.style.display = "none"

function back() {
    video.currentTime -= 2
}

function forward() {
    video.currentTime += 2
}

function minus() {
    video.playbackRate -= 0.1
}

function plus() {
    video.playbackRate += 0.1
}

function play() {
    video.play()
}

function stopVideo() {
    video.pause()
    video.currentTime = 0
}

function showControl(element) {
    element.style.display = "block"
    console.log("show")
}

// function hiddenControl(control) {
//     control.style.display = "none"
//     console.log("hidden")
// }