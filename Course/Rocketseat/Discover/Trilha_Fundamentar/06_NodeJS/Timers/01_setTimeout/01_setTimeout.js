// setTimeout vai rodar uma funcao depois de X milissegundos

const timeOut = 3000
const finished = () => { // funcao Callback
    console.log('Done!')
}

setTimeout(finished, timeOut)
console.log('Show...')