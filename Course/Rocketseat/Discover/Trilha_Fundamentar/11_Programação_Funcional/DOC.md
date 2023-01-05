# Programação Funcional
## Objetivo
* Apresentação do Paradigma
* Conceitos fundamentais
* JavaScript
#
## Por que Programação Funcional?
* Organizar uma linha de raciocínio
*  Entender uma nova maneira de abordar os problemas
* Algumas tecnologias tem como requisitos
## Def.
* É um paradigma de programação como a OOP, por exemplo.

    - Uma maneira de resolver problemas
#
## Funções
* Pequensas tarefas dentro de uma função
* Abstrair um problema e isolar ele dentro da função
* Não modificar dados fora dela
* Pequenas e bem específicas no que fazem
## Características principais da função
* Um dado (ou mais) entra em uma função e um novo dado sai
* Não altera dados
* Não guarda estado ( `stateless` )
## Linguagens funcionais
* `Javascript (multiparadigma)`
* `PHP (multiparadigma)`
* `Elixir`
* `Haskell`
## Pontos positivos
* Fácil manutenção
* Fácil uso de testes
    
    * Funções isoladas e consistentes
* Códigos mais confiáveis
## Princípios
* PARADIGMAS

    - Programação Imperativa
        
        - O código é pensado e gerado em sequência
        - O código é pensado como um passo-a-passo, como uma receita de bolo
        - Uma coisa depende da outra
        - O estado de um dado é alterado constantemente causando mutações nas variáveis
        - OOP é um tipo de `paradigma imperativo`
        Ex:
        ```javascript
            // Funcção que eleva o numero ao quadrado

            // Imperativo: Faça da seguinte forma (passo-a-passo)
            let number = 2

            function square() {
                return number * number
            }
        ```

    - Programação Declarativa

        - O código é gerado para fazer algo, não importa como
        - O que fazer e não como fazer
        - Não há necessidade de um passo-a-passo no código
        - `Programação funcional` é um tipo de paradigma declarativo
        Ex:
        ```javascript
            // Funcção que eleva o numero ao quadrado

            // Declarativa: O que fazer e nao fazer
            const square = n => n * n
        ```

* DADOS

    - Imutabilidade

        - Uma variável não vai variar
        - Se você precisar mudar uma variável, você não mudam você cria uma nova
        ```javascript
            const cart = {
                quantitaty: 2,
                total: 200
            }

            // Bad 👎🏽
            cart.quantitaty = 3
            
            // Good 👌🏽
            const neCart = {...cart, quantitaty: 3}

            // Exemplo em React
            const [amount, setAmount] = useState(0)

            // Bad 👎🏽
            amount = 2

            // Good 👌🏽
            aetAmount(2)

        ```

    - Stateless (menos estado)

        - Não guarda estado
        - A função só conhece dados entregues a ela
        - A resposta não poderá variar
        ```javascript
            let number = 2;

            // stateful function
            function square() {
                return number * number
            }

            number = square()

            // stateless function
            const square = n => n * n // não guarda nenhum estado
        ```

* FUNÇÕES

    - Independentes

        - Deverá ter ao menos 1 argumento 
        - Deverá `retornar` algo
        - Nada que acontecer lá dentro afeta o mundo externo

            - Dados imut+aveis
            - Não guarda estado
        - Não faremos o uso de loops ( `for, while` ), mas se houver necessidade de tal, usaremos recursão ( a função chama ela mesma )
        ```javascript
            const random = (number, Math) => {
                Math.floor(Math.random() * number)
            }

            // recursive
            // Find the factorial of a number
            const factorial = x => {
                // if number is 0
                if (x === 0) {
                    return 1
                }

                return x * factorial(x - 1);
            }
        ```

    - Puras

        - Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
        - Não deverá sofrer nenhuma interferência do mundo externo a ela
        - Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
        - Não terá nenhum efeito colateral no seu código
            
            - Não irá modificar nenhum dado
            - Não irá guardar nenhum estado
        ```javascript
            // Função impura
            // Exemplo 1: Está dependendo de dado externo
            // que não foi passado como parâmetro
            function calculateCircunference(radius) {
                return Math.PI * (radius + radius)
            }

            // Exemplo 2: Está alterando um dado externo
            let person = {
                name: 'Inacio Raimundo',
                age: 21
            }

            function changeName (name) {
                person.name = name
            }


            // Função pura
            // Exemplo 1
            const calculateCircunference = function (pi, radius) {
                return pi * (radius + radius)
            }

            // com arrow function
            const calculateCircunference = (pi, radius) => {
                pi * (radius + radius)
            }

            // Exemplo 2
            const changePersonName = (person, name) => ({...person, name})
        ```
        
    - First-Clsas ( `Fun;\oes de primeira classe` )

        - Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções
        - A função poderá ser entendida como uma variável
        ```javascript
            const sayName = () => console.log('Inacio')
            const runFunction = fn => fn()

            runFunction(sayName)
            runFunction( () => console.log('Raimundo'))

            console.log(runFunction(Math.random))
        ```

    - Higher-Order ( `Funções de alta ordem` )

        - Funções que recebem funções como argumentos
        - Funções que poderão retornar outras funções
        ```javascript
            // Exemplo com .map() JS
            const number = [2, 4, 8, 16]

            const square = n => n * n

            const squaredNumber = number.map(square)

            // Exemplo de um retorno de função
            // (curryng ou aplicação parcial de função)
            const pause = wait => fn => setTimeout(fn, wait)
            pause(600) ( () => console.log('waiting 600ms') )

            const wait200 = pause(200)
            const wait1000 = pause(1000)

            wait200( () => console.log('waiting 200ms') )
            wait1000( () => console.log('waiting 1000ms') )
        ```

    - Composição

        - Um encadeamento de funções
        - Uma função que retorna um dado e vai para outra função, que retorna um dado e vai para outra função, que retorna...
        ```javascript
            const people = ['Inacio', 'Martinho', 'Raimundo', 'Kudy']
            const upperCasePeopleThetStartsWithI = people
                                                    .filter(person => person.startsWith('I'))
                                                    .map(iperson => iperson.toUpperCase());
        ```