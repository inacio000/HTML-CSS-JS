// Alterando estilos
const element = document.querySelector('body');
// setando
// element.style.backgroundColor = "gray"; // Camel case

// pegando
console.log(element.style.backgroundColor);



// classList
element.classList.add('active', 'green'); // adicionando classes
console.log(element.classList)

element.classList.remove('active');

element.classList.toggle('active'); // adiciona a class caso nao existir

console.log(element.classList.value) // checando o valor da class