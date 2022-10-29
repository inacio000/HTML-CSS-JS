# API
## O que é?
*   `API` =  `Aplication Programming Interface (Interface de Programa de Aplicações)`;
*   `Simplifica desenvolvimento`, não necessita de telas;
*   `Fácil integração com sistema`, apenas dando respostas;
*   Padrão de desenvolvimento, permitindo a `troca de APIs`;
*   `Performance`~por causa das requisições e respostas rápidas;
*   Exemplo prático: `Cotação de frete`;
#
## Tipos de API
*   `API pública`: Disponibiliza para qualquer um acessar, sem necessidade de autenticação (autorização);
    > Ex: github
*   `API privada`: quando uma API é criada para utilização entre sistemas de empresa, requer autenticação (autorização);
*   `API de terceiros (pagas)`: quando a API é um produto, podendo ser integrada em um sistema, requer autenticação (autorização);
#
## Comunicação com API
*   Normalmente feita através de `XML` OU `JSon`;
*   Devido a simplicidade destes tipos de dados;
*   As requisições e respostas são feitas através dos estados `HTTP`;
*   Onde podemos seguir um padrão, para criação de `APIs robustas` e que serão de fácil utilização;
#
## Verbos do HTTP
*   Alterando os verbos podemos realizar requisições diferentes, simplificando a construção da nossa API e seus `endpoints`;
*   `GET`: verbo para resgatar algum recurso;
    > Ex: Pegar um usuário específico
*   `POST`: com o `POST` queremos enviar dados a `API`;
    > Ex: Adicionar um usuário
*   `DELETE`: neste queremos remover algum registro de banco;
    > Ex: Remover um usuário
*   `PUT`: atualização de registros;
    > Ex: Atualizar completamente um registro (CRUD)
*   `PATCH`: atualização parcial de registros;
    > Ex: Atualizar um dado específico (user name)
#
## endpoints
*   `Endpoint` é a URL que acessamos da API para extrair uma resposta;
    > Ex: `http://users/1-GET
*   Obviamente é também acompanhado do `domínio da API`;
*   Mesmos endpoints com verbos diferentes podem ter `resultados diferentes`;
*   Esta é uma das técnicas para reduzir a complexidade e aplicar o padrão `REST (utilizadas em arquiteturas de API para deixar ela padronizada)`;
#
## REST
*   `REST` e um padrão/conceito de arquitetura ligada a APIs e protocolo HTTP;
*   Podemos implementar este padrão, que é composto por 6 partes para tornar nossa API em `RESTful`;
*   `Eles são`:
    > Uniformidade, Desacoplação, Stateles, Cache, Arquitetura de Camadas, Code on demand;
*   [`🔗 Mais detalhes`](https://www.horadecodar.com.br/2021/08/30/o-que-e-uma-api-restful-entenda-tudo-sobre-rest-e-http/): 
#
## Conhecendo o Postman
*   `Postman` é um software que permite testar as APIs que criamos;
*   Podemos inserir um `endpoint`, método HTTP, inserir dados no corpo da requisição e muito mais;
*   Ele é muito utilizado na `indústria de software`;