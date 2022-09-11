var student = {
    subscription: 123,
    name: "Inacio",
    tlfn: 89524622857,
    city: "Niznhy"
}

var student1 = {
    subscription: 2345,
    name: "Raimundo",
    tlfn: 244946763886,
    city: "Moscovo"
}

var student2 = {
    subscription: 2256,
    name: "Mrtinho",
    tlfn: 244946763886,
    city: "Moscovo"
}

// var {subscription, name, ...resto} = student
// console.log(resto)



// With arrays
var students = [student, student1, student2]
var [inacio, ...othersStudents] = students

console.log(inacio)
console.log(othersStudents)

// console.log(students)