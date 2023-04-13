#  CSS Transition
> Propriedade utilizada quando o valor é alterado (:hover), permitindo que essa alteração seja de uma forma gradual/suáve
- So é utilizado com propriedades que são quantificáveis
    - Color
    - Size
    - Width
    - Height
    - Margin
    - Padding

## `Transition` property e `duration`

```css
    .box-red {
        width: 100px;
        height: 100px;
        border-radius: 100%;
    }

    .box-red {
        background-color: red;
        transition-property: all;
        transition-duration: 2s;
    }

    .box-red:hover {
        background-color: yellow;
        transition-property: background-color, width;
        transition-duration: 2s;
        width: 150px;
    }
```

## Transition timing functions

- `transition-timing-function: ease;` Tem uma animação mais lenta no início, rápida no meio e um final lento.
- `transition-timing-function: linear;` Tem a mesma animação do início ao fim
- `transition-timing-function: ease-in;` Tem um inicio mais lento e um final rápido
- `transition-timing-function: ease-out;` Tem um inicio mais rápido e um final mais lento
- `transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);` Função em que podemos determinar o tempo de prograsso da animação

```html
    <style> 
        .line {
            width: 100%;
            background-color: blue;
            height: 25px;
            margin-bottom: 10px;
            text-align: center;
            color: white;

            transition: width;
            transition-duration: 1s;
        }

        body:hover .line {
            width: 50px;
            background-color: rgb(255, 0, 234);
        }
        
        .ease {
            transition-timing-function: ease;
        }

        .linear {
            transition-timing-function: linear;
        }

        .ease-in {
            transition-timing-function: ease-in;
        }

        .ease-out {
            transition-timing-function: ease-out;
        }

        .ease-in-out {
            transition-timing-function: ease-in-out;
        }

        .cube {
            transition-timing-function: 
                cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
    </style>
    <body>
        <div class="line">EASE</div>
        <div class="line linear">LINEAR</div>
        <div class="line ease-in">EASE-IN</div>
        <div class="line ease-out">EASE-OUT</div>
        <div class="line ease-in-out">EASE-IN-OUT</div>
        <div class="line cube">cubic-bezier</div>
    </body>
```

## Transition `delay`
> Tempo para começar a animação

```html
    <style>
        body {
            background: gray;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box-red {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }

        .box-red {
            background-color: red;
            transition: background-color 1s ease 2s;
        }

        .box-red:hover {
            background-color: yellow;
            transition-property: background-color;
            transition-duration: 1s;
            transition-timing-function: ease-in;
            transition-delay: 2s;
        }
    </style>
    <body>
        <div class="box-red"></div>
    </body>
```

## Transition property `all`

```html
    <style>
        body {
            background: gray;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box-red, .box-green {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }

        .box-red {
            background-color: red;
            transition: background-color 1s ease 2s;
        }

        .box-red:hover {
            background-color: yellow;
            transition-property: background-color;
            transition-duration: 1s;
            transition-timing-function: ease-in;
            transition-delay: 2s;
        }

        .box-green {
            background-color: green;
            transition: all 1s linear 1s;
        }

        .box-green:hover {
            transition: all 1s cubic-bezier(.29, 1.01, 1, -0.68);
            background-color: rgb(255, 0, 208);
            width: 200px;
            height: 200px;
            border-radius: 8px;
        }
    </style>
    <body>
        <div class="box-red"></div>
        <div class="box-green"></div>
    </body>
```

## Exemple `Transition`

```html
    <style>
        body {
            background: gray;
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
        }

        div {
            width: 100px;
            height: 100px;
            border-radius: 100%;
        }

        .box-red {
            background-color: red;
            transition: background-color 1s ease 2s;
        }
        
        .box-green {
            background-color: green;
            transition: all 1s linear 1s;
        }

        .box-blue {
            background-color: blue;
            transition: all 1s linear 1s;
        }

        .box-yellow {
            background-color: yellow;
            transition: all 2s linear 1s;
        }

        .box-red:hover {
            background-color: yellow;
            transition-property: background-color;
            transition-duration: 1s;
            transition-timing-function: ease-in;
            transition-delay: 2s;
        }


        .box-green:hover {
            transition: all 1s cubic-bezier(.29, 1.01, 1, -0.68);
            background-color: rgb(255, 0, 208);
            width: 200px;
            height: 200px;
            border-radius: 8px;
        }

        .box-blue:hover {
            transition: width 2s ease-in-out 0s;
            width: 200px;
        }

        .box-yellow:hover {
            opacity: 0;
            transition: opacity 1s linear 0s;
        }
    </style>
    <body>
        <div class="box-red"></div>
        <div class="box-green"></div>
        <div class="box-blue"></div>
        <div class="box-yellow"></div>
    </body>
```

# CSS Animation
> Propriedade que permite criar animações sem a interação do usuário.

## `Animation name` e `duration`

```html
    <style>
        body {
            background: gray;
        }

        .ball {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: red;
            position: relative;

            animation-name: example-one;
            animation-duration: 2s;
        }

        @keyframes example-one {
            from {
                background-color: blueviolet;
            }

            to {
                background-color: rosybrown;
            }
        }
    </style>
    <body>
        <div class="ball"></div>
    </body>
```

## Keyframes com percentagem 

```html
    <style>
        body {
            background: gray;
        }

        .ball {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: red;
            position: relative;

            animation-name: example-two;
            animation-duration: 10s;
        }

        @keyframes example-two {
            0% {
                background-color: blueviolet;
            }

            25% {
                background-color: rosybrown;
            }

            50% {
                background-color: blue;
            }

            100% {
                background-color: yellow;
            }
        }
    </style>
    <body>
        <div class="ball"></div>
    </body>
```

## Example Animation

```html
    <style>
        body {
            background: gray;
        }

        .ball {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            background-color: red;
            position: relative;

            animation-name: example-two;
            animation-duration: 5s;
        }

        @keyframes example-two {
            0% {
                background-color: blueviolet;
                left: 0;
                top: 0;
            }

            25% {
                background-color: rosybrown;
                left: 600px;
                top: 0;
            }

            50% {
                background-color: blue;
                left: 600px;
                top: 600px;
            }

            75% {
                background-color: yellow;
                left: 0;
                top: 600px;
            }
            
            100% {
                background-color: red;
                left: 0;
                top: 0;
            }
        }
    </style>
    <body>
        <div class="ball"></div>
    </body>
```

## Animation `delay`
```css
    animation-delay: 2s;
    /* 2s paa começar */
```

## Animation `iteration count`
> Define quantas vezes a animação vai rolar

```css
    animation-iteration-count: 2;
    animation-iteration-count: infinite;
```

## Animation `direction`
> Permite que coloquemos em qual direção vai rolar a nossa animação

```css
    animation-direction: reverse;
    animation-direction: alternate;
    animation-direction: alternate-reverse;
```

## Animation timing function

```html
    <style>
        body {
            background: gray;
        }

        div {
            width: 100px;
            height: 50px;
            background-color: blueviolet;
            position: relative;
            text-align: center;
            color: white;

            animation-name: example;
            animation-duration: 2s;
            animation-iteration-count: infinite;
        }

        .eease {
            animation-timing-function: ease;
        }

        .linear {
            animation-timing-function: linear;
        }

        .ease-in {
            animation-timing-function: ease-in;
        }

        .ease-out {
            animation-timing-function: ease-out;
        }

        .ease-in-out {
            animation-timing-function: ease-in-out;
        }

        @keyframes example {
            from {
                left: 0;
            }

            to {
                left: calc(100% - 100px);
            }
        }
    </style>
    <body>
        <div class="ease">EASE</div>
        <div class="linear">LINEAR</div>
        <div class="ease-in">EASE-IN</div>
        <div class="ease-out">EASE-OUT</div>
        <div class="ease-in-out">EASE-IN-OUT</div>
    </body>
```
## Animation `fill mode`

```css
    animation-fill-mode: forwards;
    animation-fill-mode: backwards;
    animation-fill-mode: both;
```

```html
    <style>
        body {
            background: gray;
        }

        .ball {
            width: 100px;
            height: 100px;
            background-color: blueviolet;
            position: relative;
            border-radius: 100%;
            
            animation-name: example;
            animation-duration: 2s;
            animation-delay: 4s;
            animation-fill-mode: both;
            /* animation-iteration-count: infinite; */
        }

        @keyframes example {
            0% {
                left: 0;
                background-color: blue;
            }

            50% {
                left: 200px;
                background-color: yellow;
            }

            100% {
                left: calc(100% - 100px);
            }
        }
    </style>
    <body>
        <div class="ball"></div>
    </body>
```