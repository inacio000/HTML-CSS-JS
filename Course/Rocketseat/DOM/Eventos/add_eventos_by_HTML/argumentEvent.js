const body = document.querySelector('body');
const input = document.querySelector('input');


body.style.backgroundColor = 'gray'
input.onkeydown = function (e) {
    console.log(e)
    console.log(`Codigo: ${e.code}`)
    console.log(`Tecla: ${e.key} \nAlvo:`)
    console.log(e.currentTarget) // quem está disparando o evento
    console.log(`Valor: ${e.currentTarget.value}`) // pegando o valor dentro do input
}