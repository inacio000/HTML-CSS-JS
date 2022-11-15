// getElementById()
const elementId = document.getElementById('title')
console.log(elementId)

// getElementByClassName()
const elementClass = document.getElementsByClassName('one');
console.log(elementClass)

// getElementByTagName()
const elementTag = document.getElementsByTagName('meta');
console.log(elementTag)

// querySelector()
const elementQuerySelector = document.querySelector('[src');
console.log(elementQuerySelector)

// querySelectorAll()
const elementsQuerySelectorAll = document.querySelectorAll('.one');
console.log(elementsQuerySelectorAll)

elementsQuerySelectorAll.forEach(el => console.log(el)); // Usado por causa do NodeList

/*
    Qual usar?

    getElementById() -> retorna Element

    getElementByClassName() -> retorna HTMLCollection

    getElementByTagName() -> retorna HTMLCollection

    querySelector() -> retorna Element

    querySelectorAll() -> retorna Nodelist
*/ 
