# Objetivo
    - Apresentação e modelagem de estruturas
    - Conceitos fundamentais
    - JavaScript
#
## Por que JavaScript como linguagem para este curso?
    - Linguagem da WEB
    - Linguagem de alto nível
    - Foco no entendimento e não na construção
#
## Conceitos prévios
* O que preciso para acompanhar este curso?
    
    - Introdução à programação WEB e conceitos básico de programação
    - Papel e caneta para anotar os conceitos
    - Editor de texto (para escrever o código)
    - Navegador ou NodeJS (para executar o código)
#
## Por que estudar estrutura de dados?
    - Organizar os dados da aplicação
    - Entender estruturas de dados para melhor tomada de decisão
    - Escrever melhores algorítmos
    - Eficiência
    - Algumas empresas usam como requisitos
* Alguns `desafios diários` de uso de dados são:
    - Entendimento de como estão nossos dados na aplicação
    - Criar listas (ordenadas, não ordenadas)
    - Repetição ou não dos dados dentro da estrutura
    - Organizar os dados pelo par identificador + valor
#
## O que é Estructura de dados?
* Imagine um guarda roupas...

    Uma maneira de organizar e ordenar informações como textos, números, booleanos, etc e regirstrá-los na memória do computador.
    - Organizar dados (informações)
        
        Textos, números, booleanos...
    - Como estão registrados na memória
        
        ```js
            // Array -
            [1, 2, 3] // elementos - 1, 2, 3

            // Object 
            { name: 'Inacio', Age: '20' } // elementos name: 'Inacio', age: '20'
        ``` 
#
## Gerenciando dados
* Estructura de dados tem a ver com a gestão das informações da aplicação.
* Para esse gerenciamento, podemos dividir em 3 etapas:
    - Modelar a estrutura;
    - Dar vida a estrutura (instanciar estrutura);
    - Criar as funcionalidade dessa estrutura ( Modelar ).
        
        Ex: `inserir, excluir, buscar, exibir, contar...`
#
## Arrays
* Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas linguagens de programação.
* Uma das estruturas mais básicas, simples de criar e utilizar.

```js
    ['a', 10, 'd', true] // total de 4 elementos
``` 
* > CARACTERÍSTICAS
    
    - Acesso pelo index
    - Respeita a ordem de inserção dos elementos
    - Aceita valores duplicados
    - Dependendo do tamanho do Array, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance.
    
* > ARRAYS NO Javascript
    - São dinâmicos (criar vazio e ir modelando)
    - Você poderá ter dados de diferentes tipos misturados dentro de uma Array. Stringd, numbers, booleans, objetos, funções e até outros arrays.
    - Existe muitos métodos/funcionalidades já implementados

        - push() - `inserir`, pop() - `remover`, find() - `procurar`, filter() - `infiltrar` entre outros

#
## Array no código

```js

    const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

    // a indexação (index) começa pelo número 0
    console.log(pilotos[0])
    console.log(pilotos[3])

    // acessar o tamanho do array
    console.log(pilotos.length)

    // iteravel
    for (let piloto of pilotos) {
        console.log(piloto)
    }

    // adicionar elemento
    pilotos.push('Alonso')
    console.log(pilotos)

    // encontrar um elemento 
    const findSenna = pilotos.find(piloto => piloto == 'Senna')
    console.log(findSenna)

    // deletar um elemento
    pilotos.splice(1, 1)
    console.log(pilotos)
```
#
## Matrix
* Matriz ou Vetor multidimensional

    - Significa que é um Array, dentro de outro array.
    
    - Podemos ter muitos níveis.

    ```js
    
        const students = [
            ['Inacio', 23, 'NN'],
            ['Martinho', 22, 'M'],
            ['Raimundo', 23, 'S']
        ]
        console.log(students[0][0])
    ```
#
## Stack (Pilha)
* Como uma pilha de livro

    - Linear, um após o outro
    - O último a entrar na pilha é o primeiro a sair
    - Não é iterável
* Conceito LIFO: `Last In First Out`

    - O último elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair.
#
## Stack no código
* Métodos fundamentais

    - `push()`: adicionar um elemento à pilha
    - `pop()`: remover o elemento do topo da pilha
    - `peek()`: obter o elemento do topo da pilha
* Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da pilha.

    ```js

         // Stap 1: Modelagem
        class Stack {
            constructor() {
                this.data = [] // this. - referência
                this.top = -1
            }

            push(value) {
                this.top++;
                this.data[this.top] = value;
                return this.data;
            }

            pop() {
                if (this.top < 0) return undefined;
                const poppedTop = this.data[this.top]
                delete this.data[this.top];
                this.top--;
                return poppedTop;
            }

            peek() {
                return this.top >= 0 ? this.data[this.top] : undefined;
                /* Or
                    if (this.top >= 0) 
                        return this.data[this.top]
                    else 
                        undefined
                    
                */
            }
        }

        // Stap 2: Utilizando
        const stack = new Stack() // new - instanciando um novo objeto (stack)

        // adicionando dados
        stack.push('learning')
        stack.push('data')
        console.log(stack.push('structures'))

        console.log(stack.peek())

        // removendo
        stack.pop()
        console.log(stack.pop())

        console.log('\n'+stack.peek())
        console.log(stack)
    ```
#
## Queue (Fila)
* Como uma pilha em uma loja ou 

    - Linear
    - O primeiro a entrar na fila é o primeiro a sair
* Conceito FIFO: `First In First Out`
    
    - O primeiro elemento a entrar na fila é o primeiro a sair dela.
* Front (frente) é a referência do primeiro elemento a entrar na fila.
* Back (frente) é a referência do último elemento a sair da fila.
#
## Queue no código
* Métodos fundamentais
    - `Enqueue` - entrando na fila
    - `Dequeue` - saindo da fila
* Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da fila ou `front()` para pegar o primeiro elemento da fila, dentre tantos outros.

    ```js
        // Stap 1: Modelagem
       class Queue {
            constructor() {
                this.data = []
            }

            enqueue(item) {
                this.data.push(item)
                console.log(`${item} chegou na fila`)
            }

            dequeue() {
                const item = this.data.shift() // shift - remove o primeiro elemento da fila
                console.log(`${item} saiu da fila`)
            }
       }

       // Stap 2: Utilização
       const fila = new Queue()

       fila.enqueue('Inacio')
       fila.enqueue('Martinho')
       fila.enqueue('Raimundo')
       fila.dequeue()
       fila.dequeue()
       fila.dequeue()
    ```
#
## Visão geral
* Usamos ED para gerenciar os dados, as informações da nossa aplicação
* Organizar. ordenar, buscar, são algumas funcionalidades básicas
* Melhorar a escrita de algorítmos
* Melhorar a efici~encia dos nossos aplicativos
* Existem muitas estruturas a serem estudadas
> Estruturas de dados poderá ser um assunto um pouco desafiador, especialmente para quem setá no começo da jornada. Mas como qualquer outra habilidade, com o passar do tempo e prática diária, através de desafios da carreira, poderemos entender cada vez melhor.