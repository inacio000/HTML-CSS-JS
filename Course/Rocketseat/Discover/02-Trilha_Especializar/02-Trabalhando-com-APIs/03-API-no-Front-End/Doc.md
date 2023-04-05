> Uma das maneiras de consumir API no Front-End é usando o `Fetch`.
* ## `Fetch` - É uma interface JavaScript que permite acessar e manipular partes do `pipline HTTP`. (Batendo em uma `url` fornecida, pegando (e mandando esultados) o resultado e trazendo para poderem ser usados)

# API no front-end com GET

```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background: gray;
            }
        </style>
        <title>Consumindo API com Fetch</title>
    </head>
    <body>
        <div id="renderApiResult">Hello</div>

        <script src="main.js"></script>
    </body>
    </html>
```

```javascript
    const url = "http://localhost:5500/api"

    function getUser() {
        fetch(url)
        .then( response => response.json())
        .then(data => renderApiResult
        .textContent = JSON.stringify(data))
        .catch( err => console.log(err))
    }

    getUser()
```

# API no front-end com `GET com params`

```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background: gray;
            }
        </style>
        <title>Consumindo API com Fetch</title>
    </head>
    <body>
        <div id="renderApiResult">Hello</div>

        <hr>

        <p id="userName"></p>
        <p id="userCity"></p>
        <img src="" alt="" id="userAvatar">

        <script src="main.js"></script>
    </body>
    </html>
```

```javascript
    const url = "http://localhost:5500/api"

    function getUsers() {
        fetch(url)
        .then( response => response.json())
        .then(data => renderApiResult
        .textContent = JSON.stringify(data))
        .catch( err => console.log(err))
    }

    function getUser() {
        fetch(`${url}/1`)
        .then( response => response.json())
        .then(data => {
            userName.textContent = `Name: ${data.name}`
            userCity.textContent = `City: ${data.city}`
            userAvatar.src = `${data.avatar}`
        })
        .catch(err => console.log(err))
    }

    getUsers()
    getUser()
```

# API no front-end com `POST`

```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background: gray;
            }
        </style>
        <title>Consumindo API com Fetch</title>
    </head>
    <body>

        <div id="alertAPI">OK</div>

        <hr>

        <div id="renderApiResult">Hello</div>

        <hr>

        <p id="userName"></p>
        <p id="userCity"></p>
        <img src="" alt="" id="userAvatar">

        <script src="main.js"></script>
    </body>
    </html>
```

```javascript
    const url = "http://localhost:5500/api"

    function getUsers() {
        fetch(url)
        .then( response => response.json())
        .then(data => renderApiResult
        .textContent = JSON.stringify(data))
        .catch( err => console.log(err))
    }

    function getUser() {
        fetch(`${url}/2`)
        .then( response => response.json())
        .then(data => {
            userName.textContent = `Name: ${data.name}`
            userCity.textContent = `City: ${data.city}`
            userAvatar.src = `${data.avatar}`
        })
        .catch(err => console.log(err))
    }

    function addUser(newUser) {
        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then( response => response.json())
        .then( data => alertAPI.textContent = data)
        .catch(err => console.error(err))
    }

    const newUser = {
        name: 'Inacio Raimundo',
        avatar: 'https://picsum.photos/200/300',
        city: 'Nizhny'
    }

    addUser(newUser)
    getUsers()
    getUser()
```

# API no front-end com `PUT`

```html
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background: gray;
            }
        </style>
        <title>Consumindo API com Fetch</title>
    </head>
    <body>

        <div id="alertAPI">OK</div>

        <hr>

        <div id="renderApiResult">Hello</div>

        <hr>

        <p id="userName"></p>
        <p id="userCity"></p>
        <img src="" alt="" id="userAvatar">

        <script src="main.js"></script>
    </body>
    </html>
```

```javascript
    const url = "http://localhost:5500/api"

    function getUsers() {
        fetch(url)
        .then( response => response.json())
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch( err => console.log(err))
    }

    function getUser(id) {
        fetch(`${url}/${id}`)
        .then( response => response.json())
        .then(data => {
            userName.textContent = `Name: ${data.name}`
            userCity.textContent = `City: ${data.city}`
            userAvatar.src = `${data.avatar}`
        })
        .catch(err => console.log(err))
    }

    function addUser(newUser) {
        fetch(`${url}`, {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then( response => response.json())
        .then( data => alertAPI.textContent = data)
        .catch(err => console.error(err))
    }

    function updateUser(updatedUser, id) {
        fetch(`${url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .then( response => response.json())
        .then( data => alertAPI.textContent = data)
        .catch( err => console.error(err))
    }

    const newUser = {
        name: 'Inacio Raimundo',
        avatar: 'https://picsum.photos/200/300',
        city: 'Nizhny'
    }

    const updatedUser = {
        name: "Inacio Martinho",
        avatar: 'https://avatars.githubusercontent.com/u/113763976?v=4',
        city: "Samara"
    }

    addUser(newUser)
    updateUser(updatedUser, 9)
    getUsers()
    getUser(9)
```

# API no front-end com `DELETE`

```html

```

```javascript

```