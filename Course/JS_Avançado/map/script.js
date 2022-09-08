
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

function nameAndAge(student) {
    return student.name + " is " + student.age + " year sold"
}

console.log(students.map(nameAndAge))

// function less30(student) {
//     return student.age < 30
// }

// function moreThen30(student) {
//     return student.age > 30
// }


// console.log(players.filter(moreThen30))
// console.log(students.filter(less30))