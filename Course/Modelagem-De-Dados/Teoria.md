# Objetivo
* Entender todos os conceitos fundamentais do BD, como `CRUD` e `JOINs`;
* Aprofundar em `queries`, principalmente em `SELECT`;
* Criar uma própria estrutura;
#
# O que é um Banco de Dados?
* O BD é uma entidade utilizada para gerenciar os dados de uma aplicação;
* Nos `BDs` temos as tabelas, que são responsáveis por categorizar os dados;
* Além disso, temos outros elementos importantes, como: `queries`, `views`, `stored procedures` e mais:
*   > queries: Todo procedimento feiro para realizar alguma acção no BD, como: `selecionar dados`, `atualizar`, `deletar` e `criar`.
* Um `BD` bem modelado representa também o sucesso da aplicação;
#
# Principais tipos de BDs
* `Relacional`: `SQL`, `SQLite`, `PostgreSQL`, `MySQL` e outros;
* `NoSQL`: BDs não relacionais, baseado em documentos (`MongoDB`);
* `Object Database`: BD orientado a objetos, integrado nas aplicações (ObjectBox);
* Cloud Database: Esta BS fica em servidores `cloud` e tem alta escalabilidade, podemos utilizar `SQL` ou `NoSQL`; 
#
# Instalando MySQL
* Para instalar o MySQL precisa-se acessar o site:
*   >   https://dev.mysql.com/downloads/mysql/
* Neste instalador teremos acesso ao `servidor local de MySQL` e também ao `Workbench`;
* Ou seja, não precisamos instalar mais nada;
#
# O que é uma tabela?
* As tabelas sãa quem recebem a maioria das `operações` de banco de dados, o famoso `CRUD`;
* Elas `categorizam` os dadoos, salvando-os em linhas;
* Os tipos dos mesmos são separados em colunas, como uma tabela de `Excel`;
* Criar corretamente as tabelas também faz parte da `DB Design`;
* As tabelas possuem características especiais chamadas `constraints`;
#
# Principais Constraints
* > `NOT NULL`: Não aceita dado `NULL`;
* > `UNIQUE`: Dados na coluna não se repetem;
* > `PRIMARY KEY`: Chave primária da tabela;
* > `FOREING KEY`: Chave estrangeira;
* > `DEFAULT`: Valor padrão para os campos;
#
# Principais tipos de dados
* > `VARCHAR`: Tipo utilizado para textos, ex: `"Inacio"`;
* > `TEXT`: Texto muito longo;
* > `INT`: Utilizado para números inteiros, ex: `123`;
* > `FLOAT`: Utilizado para números com vírgula, ex: `15,4`;
* > `DATE`: Utilizado para datas, ex: `2000-05-02`;
* > `YEAR`: Para anos apenas;