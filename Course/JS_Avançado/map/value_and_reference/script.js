// Arrays e Objetos têm atribuição por referência
// Diferentes dos tipos primitivos que têm atribuição por valor

// function newStudent(name, age) {
//     return {name, age}
// }


// let students = [
//     newStudent("Inacio", 23),
//     newStudent("Mrtinho", 45),
//     newStudent("Raimudno", 29),
//     newStudent("Kaba", 35)
// ]


// function nameAndAge(student) {
//     return student.name + " is " + student.age + " year sold"
// }

// console.log(students.map(nameAndAge))

let studentA = {name: "Inacio", age: 20}

// let studentB = Object.assign({}, studentA)
let studentB = {...studentA}

studentB.age = 25
