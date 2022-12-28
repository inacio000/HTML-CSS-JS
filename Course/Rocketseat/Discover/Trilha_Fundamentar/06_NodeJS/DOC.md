# NodeJS
## O que é?
* Runtime Enviroment: Mini SO
#
## Google V8 (JavaScript Engine)
* Compõe o ambiente, a máquina virtual, que irá rodar o JS na máquina.

    - Interpretador de JS para linguagem de máquina
    - Criado em C++ 
    - Baseado nas últimas features do JS 
    - Focado para Chrome mas tem todo o cuidado de não quebrar o Node
    - Não possui a DOM, console ou File System
#
## REPL (Read-Eval-Print-Loop)
* `Ler-Interpretar-Escrever-Repetir`
* Escrever JavaScript em um ambiente node, direto no terminal
* Para entrar digite `node` no terminal
#
## Módulos
* path
* require()

    Função/Maneira de chamar módulos nativos do NodeJS
    * Criando módulo: `module.exports = function/array/object` etc...
    * process.arg 
    * flag como argumento: 
        
        `--name`
        `--greeting`
        Ex: ` node 05_process --name "Inacio Raimundo" --greeting "Are u okey?" `