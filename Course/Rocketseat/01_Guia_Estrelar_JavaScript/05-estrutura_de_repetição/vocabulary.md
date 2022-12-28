# For
    A estrutura de repetição for tem a seguinte sintaxe:

    for(inicialização de uma variável; condição de continuação para o loop; expressão final)

```js
    // break - para a execução do loop
    // continue - pula a execução do moomento
    for(let i = 0; i <= 10; i--){
        if(i == 5){
            break;
        }

        console.log(i)
    }
```

# While
```js
    let i = 4673642637325
    while(i > 10) {
        console.log(i)

        i /= 35
    }
```


# For of
    Para pegar um elemento de uma string ou de um array
```js
    let name = 'Inacio'
    let names = ['Inacio', 'Martinho', 'Raimundo']

    for(let char of name) {
        console.log(char)
    }

    for(let name of names) {
        console.log(name)
    }
```


# For in
    Cria um loop em cima de um objeto
```js
    let person = {
        name: 'Inacio',
        age: 30,
        weight: 88.6
    }

    for(let property in person) {
        console.log(proprety)
        console.log(person[proprety])
    }
```