// Alterando estilos
const element = document.querySelector('body');
// setando
// element.style.backgroundColor = "gray"; // Camel case

// pegando
console.log(element.style.backgroundColor);



// classList
console.log(element.classList)
element.classList.add('active', 'green'); // adicionando classes

element.classList.remove('active');

element.classList.toggle('active'); // adiciona a class caso nao existir

console.log(element.classList) // checando o valor da class