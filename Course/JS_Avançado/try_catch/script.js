// Tratando um erro
try {
    console.log(nome)
} catch (err) {
    console.log("Something wents wrong!", err)
} finally {

    console.log("Hello")
}




let imya = ""

// Lançando um erro
if (imya == "") {
    throw "The name can't be empty!"
}
try {
} catch (erro) {
    console.log("Error!  Empty name.", erro)
}