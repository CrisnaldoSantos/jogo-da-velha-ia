<h1 align="center">
    <img src=".github/assets/ia.png" width="50px">
    <br/>Jogo Da Velha IA
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/CrisnaldoSantos/jogo-da-velha-ia?color=3b82f6"/>
  <a href="https://www.crisnaldocarvalho.com.br">
    <img alt="Made by Crisnaldo" src="https://img.shields.io/badge/made%20by-Crisnaldo Carvalho-3b82f6">
  </a>
  <img src="https://img.shields.io/github/languages/top/CrisnaldoSantos/jogo-da-velha-ia?color=3b82f6">
  <img src="https://img.shields.io/github/package-json/v/CrisnaldoSantos/jogo-da-velha-ia/master?color=3b82f6">
</p>

## Descrição:

Aplicação front-end desenvolvida com NextJS 13, que implementa um jogo da velha, ao qual o usuário joga contra uma inteligência artificial.

Os principais conceitos e regras foram isolados em um pacote core/rules em pequanas funções testáveis, e seus retornos utilizados em lógicas mais complexas. O estado foi compartilhado por contexto, e sua implementação ocorreu por meio de reducer e actions, uma vez que ações do jogo impactam em muitos estados, essa abordagem permite a modificação clara de estados compostos, para facilitar ainda mais essa manipulação foi utilizada a biblioteca immer.

Com as regras e funcionamentos definidos foi inserido uma integração com a OpenAI, para que a partir do quadro do jogo, a IA retornasse o seu passo, garantindo assim a iteratividade do jogo.

## Executando Localmente

Node 18.x

Dentro do diretório execute os comandos abaixo

```bash
pnpm install
```

```bash
pnpm dev
```

Crie seu arquivo .env.local e adicione sua chave de api OPENAI_API_KEY , conforme no .env.example

## Demo

https://github.com/CrisnaldoSantos/jogo-da-velha-ia/assets/45441190/d8c13a42-1997-4d03-af15-0612354064e3

## Screenshots

<p align="center">
    <img src=".github/assets/screen-01.png" width="700px">
</p>

<p align="center">
    <img src=".github/assets/screen-02.png" width="700px">
</p>

<p align="center">
    <img src=".github/assets/screen-03.png" width="700px">
</p>
