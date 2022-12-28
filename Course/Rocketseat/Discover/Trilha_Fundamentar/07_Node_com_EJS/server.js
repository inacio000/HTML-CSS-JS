// CONFIGURANDO O SERVIDOR

const express = require('express'); 
const app = express(); // instanciando

app.set("view engine", "ejs") // falando para o express que usaremos o ejs

app.get("/", (req, res) => { // criando uma rota
    const items = [
        { 
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa o JavaScript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'uito facil fazer debugging'
        },
        {
            title: 'A',
            message: 'morzinho'
        },
        {
            title: 'I',
            message: 'nstall ejs'
        },
        {
            title: 'S',
            message: 'intaxe simples'
        }
    ]
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS";

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    });
})

app.get("/about", (req, res) => { // criando outra rota
    res.render('pages/about');
})

// RODANDO O SERVIDOR
app.listen(8080);
console.log("Runing...")