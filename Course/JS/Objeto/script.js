// OBJETOS COMO PROPRIEDADES
console.log("\nOBJETOS COM PROPRIEDADES")

var student = {
    name: "Inacio",
    notas: [7.5, 5.0]
}

// Adicionado propriedades após a criação do objeto
student.matricula = 123

console.log(student)

var aluno = new Object()
aluno.name = "Inacio"




// OBJETOS COM MÉTODOS
console.log("\n\n\nOBJETOS COM MÉTODOS")

function clacMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var student1 = {
    name: "Inacio",
    notas: [7.5, 8],

    media: clacMedia
}

var student2 = {
    name: "Raimundo",
    notas: [7.5, 9],

    media: clacMedia
}

console.log(student1.name, student1.media())

console.log(student2.name, student2.media())


// OBJETOS CONSTRUTORES
console.log("\n\n\nOBJETOS CONSTRUTORES")


function createStudant(name, n1, n2) {
    return {
        name: name,
        nota1: n1,
        nota2: n2,
        media: function() {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var classMate = [
    createStudant("Inacio", 7.5, 6.6),
    createStudant("Martinho", 7, 6),
    createStudant("Raimundo", 9, 10)
]

var firstStudant = classMate[0]

for( var aluno of classMate) {
    console.log(`${aluno.name} - ${aluno.media()}`)
}

classMate.forEach( function(element) {
    // varrendo o array
    console.table(element)
})




// OR


function aluno1(name, n1, n2) {
    this.name = name
    this.nota1 = n1
    this.nota2 = n2 

    this.media = function() {
        return (this.nota1 + this.nota2) / 2
    }
}

var aln = new aluno1("Inacio", 8, 9) // instanciando objetos
console.log(aln.media())