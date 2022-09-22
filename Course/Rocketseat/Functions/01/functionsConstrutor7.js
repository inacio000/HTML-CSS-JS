// function construtor

/*
    function() construtor

    * expression
    * create a new object
    * this keybord
*/

function Person(name) {
    this.name = name
    this.walk = () => {
        return this.name + ' is walking...'
    }
}
const inacio = new Person('Inacio')
const raimundo = new Person('Raimundo')
console.log(inacio.walk(), raimundo.walk())