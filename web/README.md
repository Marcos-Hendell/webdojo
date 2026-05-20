# 🚀 Projeto de Automação Web - WebDojo com Cypress

## 📌 Sobre o Projeto

Este projeto contém os testes automatizados da aplicação **WebDojo**, utilizando o framework Cypress para validação de funcionalidades web.

A aplicação WebDojo está no mesmo repositório do projeto de testes.

---

# 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- NPM

---

# 📂 Estrutura do Projeto

```bash
cypress/
│
├── e2e/
│   ├── alerts.cy.js
│   ├── cep.cy.js
│   ├── consultancy.cy.js
│   ├── github.cy.js
│   ├── houver.cy.js
│   ├── iframe.cy.js
│   ├── kaban.cy.js
│   ├── links.cy.js
│   ├── login.cy.js
│   └── studio.cy.js
│
├── fixtures/
│   ├── cep.json
│   ├── consultancy.json
│   └── document.pdf
│
├── support/
│   ├── actions/
│   ├── commands.js
│   ├── e2e.js
│   └── utils.js
│
├── dist/
├── node_modules/
├── .gitignore
└── cypress.config.js
```

---

# 📋 Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- NPM

---

# ⚙️ Instalação do Projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Executando a Aplicação WebDojo

A aplicação WebDojo está no mesmo repositório.

Antes de executar os testes automatizados, é necessário subir a aplicação localmente:

```bash
npm run dev
```

A aplicação será iniciada na porta:

```bash
http://localhost:3000
```

---

# 🧪 Executando os Testes

## Executar todos os testes em modo headless

```bash
npm test
```

Esse comando executa todos os testes utilizando resolução:

```bash
1440x900
```

---

## Executar interface gráfica do Cypress

```bash
npm run test:ui
```

Esse comando abre o Test Runner do Cypress.

---

## Executar somente os testes de login

```bash
npm run test:login
```

---

## Executar testes de login em resolução mobile

```bash
npm run test:login:mobile
```

Resolução utilizada:

```bash
414x896
```

---

# 📜 Scripts Disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440,viewportHeight=900",
  "test:ui": "npx cypress open",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896"
}
```

---

# 📁 Organização dos Testes

## `e2e/`

Contém os arquivos de testes automatizados.

### Exemplos:

- `login.cy.js` → Testes de login
- `cep.cy.js` → Testes de consulta de CEP
- `iframe.cy.js` → Testes envolvendo iframe
- `links.cy.js` → Testes de navegação
- `alerts.cy.js` → Testes de alertas

---

## `fixtures/`

Arquivos utilizados para massa de testes.

### Exemplos:

- Dados mockados em JSON
- Arquivos PDF para upload

---

## `support/`

Arquivos de suporte compartilhados entre os testes.

### `commands.js`

Comandos customizados do Cypress.

### `utils.js`

Funções utilitárias reutilizáveis.

### `actions/`

Centralização de ações utilizadas nos testes.

---

# ✅ Boas Práticas Utilizadas

- Separação de massa de dados utilizando fixtures
- Reaproveitamento de comandos customizados
- Organização modular dos testes
- Estrutura escalável para manutenção
- Execução responsiva desktop e mobile

---

# 👨‍💻 Autor

Projeto desenvolvido para estudos e automação de testes web utilizando Cypress.

