var person = {
    name: "Inacio Raimundo",
    age: 32
}

var contact = {
    PhoneNumber: 89524622857,
    email: "inacioraimundo98@mail.ru"
}

var copy = {...person, city: "Nizhny Novgorod", ...contact}
copy.age = 88

console.log(person)
console.log(copy)


// With arrays

var note_classMate1 = [10, 8, 4, 3]
var note_classMate2 = [4, 5, 4, 6]

var allNotes = [...note_classMate1, ...note_classMate2]
console.log(allNotes)