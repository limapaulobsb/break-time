# Projeto Break Time

<p align="center"><img width="33%" src="https://raw.githubusercontent.com/limapaulobsb/break-time/main/src/images/Screenshot.png" alt="Project Screenshot"></p>

<p align="center"><a href="http://phlima.pro/projects/break-time" target="_blank">www.phlima.pro/projects/break-time</a></p>

## Contexto

Este projeto foi proposto como um desafio durante o módulo de Front-end do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/). Consiste em uma aplicação React com o objetivo inicial de cronometrar intervalos nas aulas ao vivo.

## Conhecimentos utilizados

- HTML5
- CSS3
- JavaScript (ES6)
- React

## Executando o projeto localmente

1. Clone o repositório

```
git clone git@github.com:limapaulobsb/break-time.git
```

2. Entre na pasta do repositório que você acabou de clonar

```
cd break-time
```

3. Instale as dependências

```
npm install
```

### Antes de inicializar, algumas observações importantes

Os arquivos de audio não estão disponíveis pois possuem direitos autorais reservados e foram devidamente licenciados.

**Para utilizar a funcionalidade Ambient Sound localmente:**

1. Crie uma pasta *audio* dentro de *src*

2. Coloque alguns arquivos de audio

3. Edite as seguintes linhas no arquivo *AudioPlayer.jsx*

```
import relaxing1 from '../audio/relaxing1.wav';
...
import house3 from '../audio/house3.wav';
```

```
this.audio = [
  ['Relaxing 1', new Audio(relaxing1)],
  ...
  ['House 3', new Audio(house3)],
];
```

**OU para ignorar:**

Apague o arquivo *AudioPlayer.jsx* e as linhas **5** e **33** do arquivo *App.jsx*


**Pronto, agora é só rodar o comando `npm start` e o projeto será inicializado.**

## Entre em contato

Qualquer dúvida ou sugestão envie para limapaulobsb@gmail.com
