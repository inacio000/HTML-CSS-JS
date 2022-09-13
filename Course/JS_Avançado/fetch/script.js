// // Pegando dados dinamicos

// let url = "https://api.exchangerate.host/latest"


// function converter() {
//     let input = document.getElementById("valor")
//     let valor = input.value
    
//     fetch(url)
//         // retorna uma props (resposta http)
//         .then((res) => {
//             // console.log(res)
//             return res.json()
//         })
//         .then((data) => {
//             // console.log(data.rates.AED)
//             let rate = data.rates.AED

//             let result = `${valor} USD = ${rate * valor} AED`
//             document.getElementById("result").innerHTML = result
//         })

//     }

