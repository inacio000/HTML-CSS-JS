# HTTP (`HyperText Transfer Protocol - Protocolo( conjunto de regras ) de Transferência de HyperTexto`)
* Permite troca de informações e dados na internet
* Uma troca de mensagens
* HTML, CSS, Scripts, Imagens, Vídeo
* Uma chamada para cada um desses recursos
#
## Message    
- ### `Pedido (request)`
  
  - Methods

    - Definição do tipo de pedido
    - Qual ação eu quero fazer no servidor
    - EX: 

      - GET: Pegar um recurso
      - POST: Criar um recurso
  - Headers
  - Body
- ### `Resposta (response)`

  - Status Code
    
    - Resposta do servidor sobre o estado do pedido/resposta
    - Exemplo: 

        - 200: `Deu certo`
        - 301 `Pedido de redirecionamento`
        - 404 `Página não encontrada`
        - 500 `Página encontrada, mas com algum erro`
  - Headers (Opcional)
  - Body (Opcional) 

- ### `Request / Response`

    - Headers

        - Campos informativos
        - Propriedade: Valor
        - Exemplo: 

            - Content-Type: `application/json`
            - User-Agent: `Chrome`
            - Request URL: `www.google.com`
    - Body

        - HTML
        - Conteúdo
        - JSON

## Conceitos (http)
  #
  - ### Simples
    - Legível
    - `Qualquer pessoa`

  - ### Cliente/Servidor
    - Requisição / Resposta
    - `Pedir um lanche`

  - ### Stateless (Nao guarda estado)
    
    - Não guarda informações
    - Não existe relação entre conexões
    - Jogar uma moeda
    - Sessões

      - Cookies (Rastros de informações ou histórias da navegação)
      - Storeges

  - ### Extensivel
    
    - Através do cabeºalho, podemos fazer diversas trocas de informações entre cliente-servidor, conforme a necessidade.
    - Header
    - Body

## Cliente
  #
  - ### Quem é? 
    #
    - User Agent

      - Browser
      - cURL
    - Entidade que dá início a comunicação
  - ### Pedidios
    #
    - Ações do cliente (envolvem métodos/verbos http)

      - GET (Pedir algum dado)
      - POST (Enviar algum dado)
      - PUT (Atualizar algum dado)
      - DELETE (Deletar algum dado)

## Servidor
  #
  - Como uma máquina
  - Preparado para ouvir e processar
  - Vários servidores em um só computador
  - Resposta 

    - Status Code

      - `404`
      - `500`

## Proxies
  #
  - Representantes
  - Entre o `Cliente` e o `Servidor`
  - Ajuda a fazer o transporte dos dados
  - Diversas funções 

    - `Cach` (ajuda a devolver uma informação mais rápido)
    - `Filtro` (como um vírus, ou controle parental)
    - `Load balancing` (distribuição da carga)
    - `Autenticação`
    - `Autorização`

## URL (`Uniform Resource Identifier`)

  - ### Conceito
    #
    - Identificar um recurso
    - Nome ou Localização
    - Ex:

      - Você é um recurso
      - Seu nome
      - Sua localização

  - ## Resource (`Alvo do pedido`)

    - ### Qualquer coisa identificável / Entidade
      #
      - Digital

        - Email: `mailto:inacio@gmail.com`
      - Abstrata

        - `Sessão`
        - `Autenticação`
      - Física

        - `Produtos`
        - `Usuários`
      - Se podermos identificar, nomear, endereçar ou manipular estamos falando de um recurso

  - ## Locator 

    - URL (Uniform Resource Locator - `www.google.com`)

      - Componentes
        
        - Obrigatórios

          - Protocolo - `'https'`
          - Dominio - `google.com`
        - Opcionais

          - Subdominio (antes do domínio - `www.`): é opcional
          - Path (caminho https://www.rocketseat.com.br`/blog`)
          - Parametros (https://www.youtube.com/watch`?v=vpYct2npKD8`)
          - Porta (http://127.0.0.1`:3333` - após um IP)
          - Âncora (algum local dentro do doc. index.html`#something`)

## URN (Uniform Resource Name)

  - Ex: 
  
    - `urn:isbn:0451450523`
    - `urn:oasis:names:specification:docbook:dtd:xml:4.1.2`