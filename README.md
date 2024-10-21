# API de Gestão de Configuração

Esta é uma API REST simples para gerenciar produtos da minha loja de impressão 3d, ela foi construída em Node.js utilizando o framework Express.

## Funcionalidades

- **GET** `/api/produtos-d3`: Obtém a lista de produtos.

## Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [npm](https://www.npmjs.com/)
- [postman](https://www.postman.com/) (para testar apenas o get não precisamos desse passo)
 
## Como executar o projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/KallyneRocha/gestao-de-configuracao.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd gestao-de-configuracao
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   node app.js
   ```

   O servidor estará rodando em `http://localhost:8080`.

## Testando a API com o Postman

### Testando o método GET

1. Abra o [Postman](https://www.postman.com/downloads/).
2. Faça uma requisição GET para a seguinte URL (ou abra a URL no navegador, caso não tenha postman):

   ```
   GET http://localhost:8080/api/produtos-d3
   ```

3. A resposta será uma lista de produtos no formato JSON:

   ```json
    [
        {
            "id": 1,
            "nome": "Jinx",
            "altura": "20cm",
            "preco": "R$250,00"
        },
        {
            "id": 2,
            "nome": "Totoro",
            "altura": "15cm",
            "preco": "R$52,00"
        }
    ]
   ```