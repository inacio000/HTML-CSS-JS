
var names = ["Inacio", "Martinho", "Raimundo"]
var notasA = [7.0, 6.5, 9.5]
var notasB = [8.0, 7.0, 8.5]

function media(n1, n2) {
    return (n1 + n2)/2
}

function aprovated(media) {

    if (media > 7) {
        return "Aprovado"
    } else {
        return "Resprovado"
    }
}

for (var index in names) {

    var nota1 = notasA[index]
    var nota2 = notasB[index]

    var m = media(nota1, nota2)

    console.log(`${names[index]} - ${nota1} - ${nota2} - ${m} ${aprovated(m)}`)
}

