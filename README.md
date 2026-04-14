# API de Usuários

Uma API REST simples para listagem e consulta de usuários, desenvolvida com Node.js, Express e TypeScript.
Desenvolvida para fins didáticos utilizando a metodologia **GitLab Workflow** para organização de branches e **CircleCI** para automação de CI/CD.

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

## ⚙️ CI/CD (CircleCI)

Este projeto possui um pipeline de automação configurado via `.circleci/config.yml` que executa as seguintes etapas:

1. **Testes:** Execução automatizada do Vitest em cada commit.
2. **Build:** Compilação do TypeScript para JavaScript.
3. **Deploy:** Simulação de deploy (restrito à branch `main`) após o sucesso dos testes.

O projeto adota o **GitLab Workflow** suportado pelo **CircleCI** para garantir a qualidade do código:
1. **Feature Branches:** Todo commit em qualquer branch dispara o job `test-api`, validando a lógica com Vitest.
2. **Integração Contínua:** Após o merge para a branch principal, os testes são reexecutados.
3. **Entrega Contínua (CD):** O job `build-and-deploy` é acionado automaticamente **apenas na branch `production`**, realizando:
   - A compilação do TypeScript (`npm run build`).
   - A preparação dos artefatos na pasta `dist/` para deploy.

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