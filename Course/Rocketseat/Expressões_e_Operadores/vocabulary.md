# New
    A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

    Um exemplo de seu uso é:

```js
    let date = new Date('2020-12-01')
    console.log(date.__proto__)

```



# Typeof delete
    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

    Exemplos de uso:

```js
/* delete */
const person = {
    name: 'Mayk',
    age: 25,
}
delete person.age

console.log(person)

```

    Nesse caso estamos deletando a propriedade age do objeto person.

    console.log(tyepof "mayk")
    Aqui vemos qual o tipo de dado que temos, nesse caso uma string.



# Operadores aritméticos
    Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

    O operador de multiplicação é o * (asterisco);

    O operador de divisão é a / (barra);

    O operador de soma é o + (positivo);

    O operador de subtração é o - (negativo).

    Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

```js
    /* resto da divisão: sinal % */
    let remainder
    remainder = 11 % 9
    console.log(remainder)

    /* incremento: sinal ++ */
    let increment = 0

    console.log(++increment)
    console.log(increment)

    /* decremento: sinal -- */
    let decrement = 0
    decrement--
    console.log(decrement)

    /* exponencial: sinal ** */
    console.log(2 ** 3)

```


# Grouping operator
    Vamos falar sobre um operador que agrupa expressões, os parênteses.

    Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.

```js
    let total = 2 + 3 * 5
    console.log(total)
    //com essa precedência, nosso resultado é 17.

    let total = (2 + 3) * 5
    console.log(total)
    // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

```


# Operadores de comparação igual a e diferente de
    Irá comparar valores e retornar um Booleano como resposta a comparação

```js 
    // == igual a
    let one = 1
    let two = 2
    console.log(two = 1)
    console.log(one = "1")


    // != diferente de
    console.log(one != two)
    console.log(one != 1)
    console.log(one != "1")
```



# Operadores de comparação estritamente igual e estritamente diferente

```js
    let one = 1
    let two = 2

    // ===  estritamente igual a
    console.log(one === "1")
    console.log(one === 1)

    // !==  estritamente doferente de
    console.log(two !== "2")
    console.log(two !== 2)
```



# Operadores de comparação maior e menor (igual)

```js
    let one = 1
    let two = 2

    // >  maior que
    console.log(one > two)

    // >= maior igual a
    console.log(one >= 1)
    console.log(two >= 1)


    // <  menor que
    console.log(one < two)

    // <= menor igual a
    console.log(one < two)
    console.log(one <= 1)
    console.log(one <= 0)
```