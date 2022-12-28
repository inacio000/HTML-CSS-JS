// clearTimeout vai cancelar um timeout

const timeOut = 3000
const finished = () => { // funcao Callback
    console.log('Done!')
}

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)