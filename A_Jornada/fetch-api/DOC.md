# Fetch API  
## Requisição HTTP (Async)
* Pedido do front-end para o back-end, do back-end para a BD
* `Requisição Async` - Demora um tempo (tempo de comunicação)
* Devolve uma `Promessa/Promisse` de uma resposta 
* Fetch por padrão faz um `GET`

## JSon
* Padrão de comunicação entre uma linguagem e outra

#
## GET
```javascript
    https://api.publicapis.org/entries
    fetch('https://reqres.in/api/users/')
    .then( (res) => res.json())
    .then( (data) => console.log(data))
    .catch( (err) => console.log(err))
```

## POST
```javascript
    fetch('https://reqres.in/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Jorge'
    }),
    }).then( res => res.json()).then( data => console.log(data));
```