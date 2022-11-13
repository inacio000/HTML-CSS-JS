// Manipulando conteudo
// textContent 
const elementTextContent = document.querySelector('h1');
elementTextContent.textContent += " Hello, world";
console.log(elementTextContent.textContent); // verificando o elemento dentro dela



// innerText (Texto Interno)
const elementInnerText = document.querySelector('h2');
elementInnerText.innerText = "Hello People";
console.log(elementInnerText.innerText);


// innerHTML (Mudar o Conteudo HTML interno)
const elementInnerHtml = document.querySelector('h3');
elementInnerHtml.innerHTML = "Hello Devs! <small>!!!</small>";
console.log(elementInnerHtml);


// value
const elementValue = document.querySelector('input');
console.log(elementValue.value);
elementValue.value = "Another value";



// Atributos
const elementAtribut = document.querySelector('header');
elementAtribut.setAttribute('id', 'header');

const headerId = document.querySelector('#header');
console.log(headerId);