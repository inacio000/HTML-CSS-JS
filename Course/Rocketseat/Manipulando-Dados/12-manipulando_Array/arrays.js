// Manipulando Array

let techs = ['html', 'css', 'js']
console.log(techs)

// adicionar um item no final
techs.push('react js')
console.log(techs)

// adicionar no começo
techs.unshift('sql')
console.log(techs)

// remover do fim
techs.pop()
console.log(techs)

// remover do começo
techs.shift()
console.log(techs)

// pegar somente alguns elementos do array (não modifica o array)
// console.log(techs.slice(1, 3))


// remover 1 ou mais items em qualquer posição do array (modifica o array)
// techs.splice(1, 2)
// console.log(techs)



// encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)
techs.splice(index, 1)

console.log(techs)