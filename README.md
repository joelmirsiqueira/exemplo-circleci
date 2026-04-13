# API de Usuários

Uma API RESTful simples para listagem e consulta de usuários, desenvolvida com Node.js, Express e TypeScript.

## 🚀 Tecnologias Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express](https://expressjs.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Testes:** [Vitest](https://vitest.dev/)
- **Execução:** [tsx](https://tsx.is/)

## 📦 Instalação

1. Clone o repositório.
    ```bash
    git clone https://github.com/joelmirsiqueira/exemplo-circleci.git
    ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## 🛠️ Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com auto-reload.
- `npm run build`: Compila o código TypeScript para JavaScript na pasta `dist`.
- `npm start`: Inicia o servidor a partir do código compilado.
- `npm test`: Executa a suíte de testes uma única vez.
- `npm run test:watch`: Executa os testes em modo de observação.

## 📡 Rotas da API

### 1. Listar todos os usuários
Retorna uma lista com todos os usuários cadastrados no sistema.
- **URL:** `/usuarios`
- **Método:** `GET`
- **Resposta de Sucesso:** `200 OK`

### 2. Consultar um usuário específico
Retorna os detalhes de um único usuário filtrado pelo seu identificador.
- **URL:** `/usuarios/:id`
- **Método:** `GET`
- **Parâmetros:** `id` (ID do usuário)
- **Resposta de Sucesso:** `200 OK`
- **Resposta de Erro:** `404 Not Found` (caso o usuário não exista)

---
Desenvolvido por Joelmir.