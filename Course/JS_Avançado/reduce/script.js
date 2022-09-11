// Tranforma uma array em uma variável
// Reduz todas entradas em uma só

function newStudent (name, age) {
    return {name, age}
}

let students = [
    newStudent("Inacio", 23),
    newStudent("Martinho", 20),
    newStudent("Raimundo", 24),
    newStudent("Luis", 28)
]

function ageClassMate(total, student) {
    return total + student.age
}

function concatenateName (allName, student) {
    return allName + student.name
}

console.log(students.reduce(ageClassMate, 0))
console.log(students.reduce(concatenateName, ""))


// Reduce na mão
// function reduceFunc (obj) {
//     let objReduce = ""
//     for (let index of this) {
//         if (obj(index)) {
//             objReduce += 1
//         }
//     }

//     return objReduce
// }

// students.reduceFunc()