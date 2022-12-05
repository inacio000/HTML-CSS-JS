# NPM (Node Package Manager)
## __Glossary: Dependencies, Packages, Modules__
* [ ] Verificar se temos o npm instalado `npm -v`
* [ ] Criar nosso primeiro pacote

    * npm init
    * npm init -y (yes para tudo)

* [ ] O que é o arquivo `package.json`
* [ ] Utilizar módulos de terceiros
* [ ] O que é o diretório `node_modules`
* [ ] O que é o arquivo `package-lock.json`
* [ ] Criar scripts para rodar com npm
* [ ] Instalando dependências globais
#
## package.json
* Arquivo no formato de JSON (JavaScript Object Notation)

    Ex:
    
        {
            "name": "npm",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [
                "learning",
                "nodeJS"
            ],
            "author": "IMR",
            "license": "MIT"
        }
#
## Módulos de terceiros (Dependências)
* npm install `package`
* npm i `package`

    * npm i -D (dependências apenas para desenvolvimento)
    * Em casos de alterações manuais, após alterações -> `npm update`
#
## Diretorio `node_modules`
* Onde ficam as dependências do nosso projeto (Módulos de terceiros)
#
## `package-lock.json`
* Arquivo json que serve para fazer o mapeamento das dependências do nosso projeto.
#
## Criar scripts para rodar com npm
* `npm run <name>`
* `npm start`
#
## Dependências globais
* `npm install <package> -g`
* Encontrando o diretório onde está instalada: `npm root -g`
* Desinstalando...

    * `npm uninstall <package> -g`