# Sistema síncro (`synchronous`)
    Uma tarefa é concluida após a outra.
    Ex: Duas imagns, onde uma imagem termina de carregar, paea então carregar a outra. 

    A tarefa anterior precisa ser concluída, para então iniciar a próxima.
    "Por padrão, o Javascript é um sistema síncrono."

# Sistema assíncrono (asynchonous)
    Num sistema assíncrono, tarefas são executadas de maneira independete uma da outra.
    Ex: Várias imagens são carregadas de maneira independente.

# Callback (`Chame de volta`)
> Funções aceitam qualquer tipo de dado como argumento
> Uma função que é passada como argumento para outra função e depois será chamada de volta.

```javascript
    function printData(data) {
        console.log(data());
    }

    printData(1)
    printData('text')
    printData(true)
    printData({ name: 'Inaccio'})
    printData([1, 2, 3])
    printData(function () {})
    printData(function () {
        return 'Hello, world'
    })

    Output: 1
    Output: text
    Output: true
    Output: { "name": "Inaccio"}
    Output: ([1, 2, 3])
    Output: undefined
    Output: Hello, world
```

# setTimeout (`function, delay`)
> Função que recebe como argumento uma outra função e um tempo para ser executada.
```javascript
    setTimeout(function() {
        console.log('After 1s')
    }, 1000)
```

# Conectando API com HTTPS e Callback
```javascript
    const https = require('https');
    const API = 'https://jsonplaceholder.typicode.com/users?_limit=2' // Fazendo um fetch 
    https.get(API, res => {
        console.log(res.statusCode)
    })

    console.log('Connecting API...')

    Output: 
        Connecting API
        200
```