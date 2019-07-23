# leoMovies
app mobile de filmes


![](https://i.ibb.co/Cmfq6ck/one.png)    |   ![](https://i.ibb.co/1T59bL9/two.png)|
:---------------------------------------:|:--------------------------------------:|

## Sumário

- [Estrutura do projeto](#estrutura-do-projeto)
- [Dependências](#dependencias)
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
│   │   ├── NavigationHelpers.js -  Classe utilizada para configurar a navegação;
│   │   ├── NavigationService.js - Serviços de navegação;
│   │   └── NavigationStack.js - Contem a navegação entre os containers do projeto;
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

## Dependências

- [NodeJS](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [expo-cli](https://docs.expo.io/versions/latest/workflow/expo-cli/)
- [Android Studio](https://developer.android.com/studio) OU [Genymotion](https://docs.genymotion.com)

Para instalar o `expo-cli` basta usar o Yarn:

```
yarn global add expo-cli
```

## Iniciar a Aplicação
Rode os comandos seguintes para clonar o projeto e baixar suas dependências:

```
git clone git@github.com:nogueirahy/leoMovies.git
cd leoMovies
yarn install
```

Inicie seu emulador de escolha. Após o emulador ser iniciado, rode o comando abaixo para iniciar o servidor do Expo e rodar o projeto no emulador.

```
expo start
```

Existe a opção de rodar no celular com o QRCode, para isso baixe o app do Expo (na URL do projeto no site do Expo), ou leia o QRCode disponível após o comando `expo start` ser rodado (necessário que `Tunnel` esteja selecionado na interface web do `expo-cli`).

[Versão para Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) / [Versão para iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
