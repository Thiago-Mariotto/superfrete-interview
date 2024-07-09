<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Superfrete Teste" />
</div>

<h1 align="center">Superfrete</h1>

<br>

## :dart: Sobre ##

Projeto desenvolvido para o teste técnico da Superfrete na posição Desenvolvedor Backend Node Senior.

## :rocket: Tecnologias ##

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Firebase](https://firebase.google.com/)
- [Firebase Functions](https://firebase.google.com/docs/functions)
- [Firebase Emulator](https://firebase.google.com/docs/emulator-suite)

### :white_check_mark: Design ###

- Padrão de arquitetura de software: [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- Principios [SOLID](https://en.wikipedia.org/wiki/SOLID)
- Testes unitários e de integração com [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) e [Sinon](https://sinonjs.org/)

## :white_check_mark: Requisitos ##

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- [Java 11+](https://www.java.com/)

## :checkered_flag: Starting ##

```bash
# Clone este repositório
$ git clone https://github.com/thiago-mariotto/superfrete-interview

# Acesse a pasta do projeto no terminal/cmd
$ cd superfrete-interview

# Instale as dependências. Este comando instalará as dependências do projeto e as dependências do firebase, também irá compilar o typescript
$ yarn install:all ou npm install:all

# Inicie o firebase emulador
$ yarn start:emulators ou npm run start:emulators

# O servidor inciará na porta:5001
```

## :white_check_mark: Endpoints ##

Para criar um registro, utilize o endpoint abaixo:

- [POST] http://localhost:5001/{project_id}/us-central1/createOrder

```json
{
  "name": "Item 1"
}
```

Ao finalizar um registro, o firebase irá atualizar o registro com o increment_id. Você pode verificar o increment_id diretamente na UI do firestore. Acesse http://127.0.0.1:4000/firestore/default/data

## :white_check_mark: Testes ##

```bash
# Para rodar os testes unitários. Os testes unitários também possuem cobertura de código
$ yarn test:unit ou npm test:unit

# Para rodar os testes de integração
$ yarn test:integration ou npm run test:integration
```

