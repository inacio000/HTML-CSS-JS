// executado quando o documento estiver ligado
document.addEventListener('DOMContentLoaded', () => {

    // pegando todos elementos (square) do html
    let squares = document.querySelectorAll(".square");

    // Pegando cada elemento (square)
    squares.forEach( (square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    // console.log(event.target)  Sabendo qual elemento foi clicado

    let square = event.target; // elemento que recebeu o evento
    let position = square.id;

    if (handleMove(position)) {

        setTimeout( () => {
            alert(`Game Over! \nPlaer ${playerTime} won`);            
        }, 10)
    };
    updateSquare(position)
}

function updateSquare(position) {
    // fazendo atualizacao apenas no quadrado clicado
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

// function updateSquare() {

//     let squares = document.querySelectorAll(".square");

//     squares.forEach( (square) => {

//         let position = square.id;
//         let symbol = board[position];

//         if (symbol != '') {
//             square.innerHTML = `<div class='${symbol}'></div>`
//         }
//     })
// }