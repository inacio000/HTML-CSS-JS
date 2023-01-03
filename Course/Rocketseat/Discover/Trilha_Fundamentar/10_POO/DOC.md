# POO
* Oriented Object Programming ou OOP
* Um paradigma de desenvolvimento (paradigma - maneira de pensar/resolver problemas)
* Uma maneira de resolver um problema, um modo de pensar
* Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares
#
## Utilização no mercado
* Na maioria dos sistemas atuais
* Várias linguagens (JS, TS, Java, Python...)
* Utilizado por Analistas de Sistemas e não somente por programadores

    - Na fase de levantamento de requisitos de sistemas
    - Via gráficos, desenhos e textos
#
## Onde e quando utilizar?
* Linguagens
* Quando quiser aplicação Padrões de Projetos
* Quando quiser organizar seu código
* Para melhorar entendimento do código, pensando nele como Objeto
* Quando precisar fazer reuso de código
* Para separar a complexidade de código, abstrair código e expor de maneira mais simples
* Para classificar as rotinas e trechos de código
#
## Conceitos
* Precisamos entender os conceitos e paradigmas e não somente códigos
* Uma boa fundamentação
* Pegue papel e caneta, e anote os pontos para que você possa revisar posteriormente
#
## Objetos
* Uma caneta é um objeto
* Todo objeto possui
    
    - Propriedades e Funcionalidades
    - Estado e Comportamentos 
    - Atributos e Métodos
#
## Objetos abstratos vs objetos do mundo real
* Representação de algo do mundo real para Objetos

    - Pessoa
    - Aluno
    - Produto
    - Carrinho de compras
* Porém, alguns objetos na programação não fáceis de identificar, pois são `abstratos` como, por exemplo:

    - Autenticação (`processo de fazer login`)
    - Autorização
> Nem todo objeto do mundo real fará parte do seu sistema
#
## Classes
> As classes na POO funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.
* Exemplo: Máquina de biscoito

    - Instâncias ( `criar objeto através da classe` )
#
## Classes em JavaScript
* Syntatical sugar ( `Maneira diferente, escrevendo-se em Prototypes` )
* Prototype ( `Objetos/Cadeia` )
> Todo objeto criado em JavaScript é um `Protótipo/Prototype`
#
## Encapsulamento ( Dirigir um carro vs Conhecer o motor do carro )
* Colocar numa cápsula
* Agrupamento de função e variáveis
* Esconder detalhes de implementação
* Camada de segurança para os atributos
    ```javascript
        // Estrutural
        let altura = 50
        let largura = 60

        function calcularArea() {
            return altura * largura
        }

        let area = calcularArea()


        // OOP
        class Poligono {
            constructor (altura, largura) {
                this.altura = altura
                this.largura = largura
            }

            get area() {
                return this.#calcularArea()
            }
            
            #calcularArea() {
                return this.altura * this.largura
            }
        }

        // criar o objeto
        let poligono = new Poligono(50, 60)
        console.log(poligono)
        console.log(area())
    ```
#
## Confusão e Solução ( Programação Estrutural x Orientação a Objetos )
* Programação Estrutural

    - Processa a entrada e manimpulação dos dados, até a saída
    - Uso de sequências, estruturas de repetições e condições
    - Uso de uma rotina maior, ou sub-rotinas
    - Não existe restrições às variáveis

* Programação Orientada a Objetos

    - Surge para trazer um cuidado ao uso estruturado

        - Não elimina por completo o uso estruturado
    - Conceitos como Objetos e Classes
    - Cuidados com variáveis e rotinas (`Encapsulamento`)
    - Melhor reuso de código (`Herança`)

```javascript
    // Estruturado
    var valorHora = 50
    var tempoEstimado = 20
    var desconto = valorHora * tempoEstimado * (10 / 100)
    var custoEstimado = valorHora * tempoEstimado - desconto
    console.log(custoEstimado)


    // OOP
    const job = new Job()
    job.valorHora = 50
    job.tempoEstimado = 20
    job.desconto = 10
    const custoEstimado = job.calcularEstimativa()
    console.log(custoEstimado)
```
#
## Herança
* Pais e Filhos
* Objetos podem herdar, ou estender, características bases
* Uma cópia de atributos e métodos de outra classe
```javascript
    // Pai
    class Veiculo {
        rodas = 4

        mover(direcao){}
        virar(direcao){}
    }


    // Filho
    class Moto extends Veiculo {
        constructor() {
            super() // puxar atributos e métodos do Pai
            this.rodas = 2
        }
    }
```
> <h2> Saiba 
    * Um objeto pode estender de outro objeto que pode estender de outro objeto
    * Fácil reutilização de código 
#
## Polimorfismo 
> Polimorfismo = `Muitas formas`
* Quando um objeto estende de outro (`herança`) talvez haja a necessidade de reescrever uma ou mais características (`atributos e m]etodos`) nesse novo objeto.
* Recriaremos então um método (ou mais) da classe herdada

```javascript
    // Pai (Class)
    class Atleta {
        peso;
        cateoria;

        constructor(peso) {
            this.peso = peso;
        }

        definirCategoria() {
            if (this.peso <= 50) {
                this.categoria = 'Infantil'
            }
            else if (this.peso <= 65) {
                this.categoria = 'Juvenil'
            }
            else {
                this.categoria = 'Adulto'
            }
        }
    }

    // Filho (usando os cnonceitos herança e polimorfismo)
    class Lutador extends Atleta {
        constructor (peso) {
            super(peso)
        }

        definirCategoria () {
            if (this.peso <= 54) {
                this.categoria = 'Pluma'
            }
            else if (this.peso <= 60) {
                this.categoria = 'Leve'
            }
            else if (this.peso <=75) {
                this.categoria = 'Meio-Leve'
            }
            else {
                this.categoria = 'Pesado'
            }
        }
    }
```
#
## Abstração (Template ou Identidade de uma classe que será construida no futuro)
* Atributos e métodos podem ser criados na classe de Abstração (Superclasse) mas...
* A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração.

```javascript
    class Parafuso {
        constructor () {
            if (this.constructor === Parafuso) {
                throw new Error('Classe abstrata não pode ser instânciada')
            }
            get tipo () {
                throw new Error('Método "get tipo()" precisa ser implementado')
            }
        }

        class Fenda extends Parafuso {
            constructor() {
                super(); // fazendo a heranca
            }
            get tipo () {
                return 'Fenda'
            }
        }

        class Philips extends Parafuso {
            constructor() {
                super(); // fazendo a heranca
            }
            get tipo () {
                return 'Philips'
            }
        }

        class Allen extends Parafuso {}

        // Criar e usar
        new Parafuso() // Classe abstrata não pode ser instanciada
        let fenda = new Fenda();
        let philips = new Philips();
        let allen = new Allen();

        console.log(fenda.tipo, philips.tipo)
        console.log(allen.tipo) // Método "get tipo()" precisa ser implementado

    }
```