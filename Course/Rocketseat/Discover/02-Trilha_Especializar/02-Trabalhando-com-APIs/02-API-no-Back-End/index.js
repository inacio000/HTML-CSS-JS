const express = require('express'); // chamando o express

const app = express(); // Iicializando o express

app.listen('3000') //Ouvindo a porta 3000 (criando o server)

// Criando uma routa DELETE

let author = "Inacio"

app.route('/:id').delete( (req, res) => {

    res.send(`${req.params.id} deleted...`)
})
