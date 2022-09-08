
function newStudent(name, age) {
    return {name, age}
}


let students = [
    newStudent("Inacio", 23),
    newStudent("Mrtinho", 45),
    newStudent("Raimudno", 29),
    newStudent("Kaba", 35)
]

let players = [
    newStudent("Gilson", 23),
    newStudent("Leo", 45),
    newStudent("Miguel", 29),
    newStudent("Walter", 35)
]


function less30(student) {
    return student.age < 30
}

function moreThen30(student) {
    return student.age > 30
}

// FILTRO FEITO NA MÃO
// function filtro(callback) {
//     let studentsFilter = []
//     for(let student of this) {
//         if(callback(student)) {
//             studentsFilter.push(student)
//         }
//     }

//     return studentsFilter
// }

// students.filtro = filtro
// players.filtro = filtro

console.log(players.filter(moreThen30))
console.log(students.filter(less30))


// let studentLess30 = students.filter(less30)
// let studentMoreThen30 = students.filter(moreThen30)
// console.log(studentLess30)
// console.log(studentMoreThen30)

// for (let student of students) {
//     if(student.age < 30) {
//         console.log(student.name)
//     }
// }