# lmovies

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e1aba5337bf49f09c01272d0280a4cf)](https://app.codacy.com/app/nogueirahy/leoMovies?utm_source=github.com&utm_medium=referral&utm_content=nogueirahy/leoMovies&utm_campaign=Badge_Grade_Dashboard)

app mobile de filmes


![](https://i.ibb.co/kqbPcHN/Captura-de-Tela-2021-03-14-s-12-45-06.png)    |   ![](https://i.ibb.co/ZJXxKxf/Captura-de-Tela-2021-03-14-s-12-45-20.png)|
:---------------------------------------:|:--------------------------------------:|

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Iniciar a Aplicação](#iniciar-a-aplicacao)

## Estrutura do projeto
A estrutura do projeto segue a idéia de divisão do código por feature e não por temas.

Abaixo uma explicação da árvore de documentos do projeto:

```
├── assets - Arquivos de assets do projeto (fontes, imagens, etc...).
├── src
│   ├── api - Módulo de APIs que o projeto consome.
│   ├── components - Componentes compartilhados entre as views do projeto.
│   ├── config - Constantes e dados gerais (imagens, styles, temas, metrics, i18n e etc...).
│   ├── features
│   │   └── feature1- Funcionalidade 1;
│   │       ├── ducks - Duck pattern
│   │       ├── sagas - Sagas associadas a feature.
│   │       ├── selectors - Selectors associados a feature.
│   │       ├── presentation - Componentes associados a feature.
│   │       ├── containers - Containers associados a feature.
│   │
│   │
│   ├── hooks - hooks
│   ├── lib - Biblioteca de arquivos de apoio;
│   ├── service - Serviços gerais do app (atualização do app, integrações, etc.);
│   ├── navigation - Dados de navegação do app.
│   │
│   │   
│   │   
│   └── store - Todo o setup da store do projeto;
│       ├── reducers - configuração dos reducers gerais do projeto.
│       ├── configureStore - Configurações da store.
│       ├── sagas - Setup do framework e Sagas gerais do projeto.
│
├── .eslintrc.js
├── .gitignore
├── .watchmanconfig
├── App.js - Entrypoint do projeto;
├── app.json
├── package.json
└── README.md
```
## Iniciar a Aplicação
Rode os comandos seguintes para clonar o projeto e baixar suas dependências:

```
git clone git@github.com:nogueirahy/leoMovies.git
cd leoMovies
yarn install
cd ios
npx pod-install
yarn ios
yarn android
```

Crie um arquivo .env e em seguida adicione sua KEY
```
API_URL=https://api.themoviedb.org
API_SECRET=<YOUR SECRET KEY>
```