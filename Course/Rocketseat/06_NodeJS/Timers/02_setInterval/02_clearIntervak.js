// clearInterval vai cancelar um setInterval registrado
// depois de X milissegundos

const timeOut = 1000
const checking = () => { // funcao Callback
    console.log('Checking!')
}

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)