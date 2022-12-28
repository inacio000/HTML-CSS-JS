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
#
## Gerenciando versões das dependências
* npm i moment

    * `"moment": "^2.29.1"` major.minor.patch 
    * Onde:
    - 2 -> major (Versão do projeto)
    - 29 -> minor (haverá alterações, mas não vai quebrar com as alterações do projeto)
    - 1 -> patch (resolvendo alguma coisa dentro do pacote)

        `"^"` -> Significa que se o projeto for atualizado, o npm vai atualizar as duas últimas versões

        `"~"` -> Significa que se o projeto for atualizado, o npm vai atualizar apenas o `patch`

        `"*"` -> Significa que se o projeto for atualizado, o npm vai mudar todas versões.
    ### Alterando a versão 
    * npm i moment@`major.minor.patch`
    ### Mudar de versão 
    * `npm outdated` (mostra os pacotes e versões)
        
        * Current (atual versão)
        * Wanted (Versão mais desejada)
        * Latest (Última versão)
    ### Atualizando a versão
    * npm upgrade
    * npm i moment@latest
#
## Removendo pacotes
* `npm uninstall <package>`