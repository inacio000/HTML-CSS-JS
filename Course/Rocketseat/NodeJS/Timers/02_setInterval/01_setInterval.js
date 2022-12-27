// setTimeout vai rodar uma funcao N vezes
// depois de X milissegundos

const timeOut = 000
const checking = () => { // funcao Callback
    console.log('Checking!')
}

setInterval(checking, timeOut)