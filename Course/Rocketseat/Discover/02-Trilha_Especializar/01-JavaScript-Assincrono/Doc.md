# Sistema síncro (`synchronous`)
    Uma tarefa é concluida após a outra.
    Ex: Duas imagns, onde uma imagem termina de carregar, para então carregar a outra. 

    A tarefa anterior precisa ser concluída, para então iniciar a próxima.
    "Por padrão, o Javascript é um sistema síncrono."

# Sistema assíncrono (asynchonous)
    Num sistema assíncrono, tarefas são executadas de maneira independete uma da outra.
    Ex: Várias imagens são carregadas de maneira independente.

# Callback (`Chame de volta`)
> Funções que aceitam qualquer tipo de dado como argumento.

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

# Promise (`Promessa de que algo irá acontecer`)

> E um objeto JavaScript com a promessa de que algo será realizado.

> É usado para operações `assíncronas`
    
        Carregar um arquivo
        Leitura de dados de uma API
- ### Uma promessa poderá ser: 
    - `Pending`: Estado inicial, assim que o Objeto da promessa é iniciado.
    - `Fulfilled`: A promessa foi concluída com sucesso
    - `Rejected`: A promessa foi rejeitada, houve um erro
    - `Settled`: Seja com sucesso ou com erro, ela foi finalmente concluída.

```javascript
    let accept = false

    console.log('Order an Uber...') // first
    const promessa = new Promise( (resolve, reject) => {
        if (accept) {
            return resolve('Order accepted!')
        }

        return reject('Order denied'); // third
    })

    promessa
    .then(result => console.log(result))
    .catch(err => console.log(err))
    .finally(() => console.log('Finished...'));

    console.log('Waiting...') // second
```

# Fetch com encadeamento de promessas (pegar/buscar)
> Used in `www.codesandbox.io`
```javascript
    fetch('https://api.github.com/users/inacio000')
        .then( response => {
        response.json()
        .then( data => console.log(data))
    })
```

    Pegando os repositorios do meu guthub
    
```javascript
    fetch('https://api.github.com/users/inacio000')
    .then( response => {
        response.json()
        .then( data => {
            fetch(data.repos_url)
            .then( res => res.json()
                .then( d => console.log(d)))
        })
    })
```

- ## Ou 

```javascript
    fetch('https://api.github.com/users/inacio000')
        .then( response => response.json())
        .then( data => fetch(data.repos_url))
        .then( res => res.json())
        .then( d => console.log(d))
        .catch( err => console.log(err))
```

# Axios (Bibliteca)

> `HTTP client` baseada em promessas para ser usadas tanto o `browser (we have the fetch api)`, quanto no `node`.

```javascript
    import axios from "axios"

    axios.get('https://api.github.com/users/inacio000')
    .then( res => {
        console.log(res.data);
    })
```

# Promises com Axios

```javascript
    import axios from 'axios'

    aios
        .get('https://api.github.com/users/inacio000')
        .then(response => axios.get(response.data.repos_url))
        .then(repos => console.log(repos.data))
        .catch(err => console.log(err))
```

# Promessas em paralelo/concorrência
> Execução de várias promessas ao mesmo tempo.

```javascript
    import axios from 'axios'

    Promise.all([
    axios.get('https://api.github.com/users/inacio000'),
    axios.get('https://api.github.com/users/inacio000')
    ])
    .then( responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.id)
    })
    .catch( error => console.log(error))
```

# Async / Await
> Maneira de escrever promessas

> Syntactic Sugar

```javascript
    const promessa = new Promise(function (solve, reject) {
        return solve("Its ok!");
    });

    async function start() {
        try {
            const result = await promessa;
            console.log(result);
        } catch (e) {
            console.log(e);
        } finally {
            console.log("Always run.");
        }
    }

    start();
```

# Async com Fetch

```javascript
    async function start() {
        const response = await fetch('https://api.github.com/users/inacio000')
        const user = await response.json()
        const reposResponse = await fetch(user.repos_url)
        const repos = await reposResponse.json()
        console.log(repos)
    }

    start()
```

## Or with try
```javascript
    async function start() {
        try {
            const response = await fetch("https://api.github.com/users/inacio000");
            const user = await response.json();
            const reposResponse = await fetch(user.repos_url);
            const repos = await reposResponse.json();
            console.log(repos);
        } catch (e) {
            console.log(e)
        }
    }

    start();
```

## Or
```javascript
    async function start() {
        const user = await fetch("https://api.github.com/users/inacio000").then( r => r.json())
        const repos = await fetch(user.repos_url).then( r => r.json())
        console.log(repos);
    }

    start().catch( e => console.log(e))
```

## Or
```javascript
    async function start() {
        const url = 'https://api.github.com/users/inacio000'
        const user = await fetch(url).then( r => r.json())
        const userRepos = await fetch(user.repos_url).then( r => r.json())
        console.log(userRepos);
    }

    start().catch( e => console.log(e)) 
```

## Ansyc Await com Axios

```javascript
    
```