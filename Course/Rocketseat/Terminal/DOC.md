# O que é Command Line
## GUI
* Graphical User Interface
* Interface Gráfica de Usuário
* Janelas, Botões, Menus, Mouse
* Ver videos, Jogar, Trabalhar com imagens e edição de videos
#
## CLI 
* Command Line Interface
* Interface de Linha de Comando
* Enviar comandos
* Ver resultados dos comandos
> ### Shell ou interpretador é o ambiente

       Executa os comandos
        Converte com o kernel
        Bash: Bourne-again shell
            por padrão existe em ambientes Linux
### Kernil: 
* Responsável por se comunicar com o Hardware.
#
## Comandos | Opções | Argumentos
* Comandos: Programa rodando (Obrigatório)
* Muda o comportamento, Explicar ao comando como deve funcionar, Geralmente começa com um traço.
* Argumento: Onde o comando irá operar?, Caminho do arquivo ou diretório.

> ls | -l | /usr/bin

> ls | -lh

> ls | -al
#
## Dicas & Truques
> ### Tab completion (Completar)

       command
       arguments
> ### Atalho

       setinhas: up - down (comandos anteriores, próximos)
       Ctrl +
            setinhas: (pular palavras)
            A (inicio da linha)
            E (final da linha)
            u (limpar linha)
            K (remove do cursor até o final da linha)
            L (clear)
#
## Getting Help
> ### man +

       manual dos comandos
* apropos
#
# Arquivos e Diretórios
> ### pwd: Mostra o diretório atual
> ### Navegando pelas pastas

       cd: Mudar de diretorio
        . -> diretorio atual
        .. -> voltar diretorios
        - -> voltar de onde veio
> ### ls: Listar arquivos e pastas

       -l -> mais informações
        -a -> all
        -h -> human
        -R -> recursive
        -S -> ordenar pelo tamanho
> ### file

       tipo de arquivo
        informações
> ### stat

        dono
        modificações
> ### mkdir (make directory): criar diretorios
        
        -p
> ### touch

        - alterar registro de data e hora de arquivos ou pastas
        - criar um ou mais arquivos
> ### cp: copiar

        -r -> recursive
> ### mv: mover (renomear)

> ### rm: remover (para sempre)

        -r -> remover um directorio
        -f -> remover a forca
> ### wildcards (curinga)

        * -> um ou mais caracteres
        ? -> um caractere
> ### find: encontrar arquivos ou diretorios

        find <path> arg[expression]
        -type<d|f>
        -name
        ex:     find . -type f -name "*.md"
                 find . -type d -name "*.md"
> ### ver conteúdo de arquivos

        less
        cat
> ### editar arquivos

        nano
        vim
        ,,,,         