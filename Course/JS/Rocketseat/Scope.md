# Scope/Escopo

* Determina a visibilidade de alguma variável no JS

# Block statement/Declaração de bloco
```js
// Iniciando um bloco
{

    // Dentro do bloco onde podemos colocar qualquer código

} // Fechamento
 
```
O bloco também criará um novo escopo. Chamado `Block-scope`


## var

// var é global e poderá funcionar fora de um escopo de bloco.
    flexivel e evita-se o uso dele

```js
console.log('> Existe x antes do bloco? ', x)

{
    var x = 0
}
console.log('> Existe x depois do bloco? ', x)
```

## let e const

```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> Existe y antes do bloco? ', y)

{
    let y = 0
    // y funciona apenas aqui dentro
}

console.log('> Existe x depois do bloco? ', y)
```